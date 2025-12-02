import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2, XCircle, ArrowRight } from 'lucide-react';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [message, setMessage] = useState('Verifying payment...');

  useEffect(() => {
    const verifyPayment = async () => {
      const txnid = searchParams.get('txnid');
      const status = searchParams.get('status');
      const storedSubscriptionId = sessionStorage.getItem('pending_subscription_id');
      const storedTxnId = sessionStorage.getItem('pending_transaction_id');

      if (!txnid || !storedSubscriptionId || !user) {
        setStatus('error');
        setMessage('Invalid payment verification data. Please contact support.');
        return;
      }

      // If status is failure from PayU, mark as error
      if (status === 'failure' || status === 'cancel') {
        setStatus('error');
        setMessage('Payment was cancelled or failed. Please try again.');
        
        // Clean up pending subscription
        try {
          await supabase
            .from('subscriptions')
            .delete()
            .eq('id', storedSubscriptionId);
        } catch (error) {
          console.error('Error cleaning up failed subscription:', error);
        }
        
        sessionStorage.removeItem('pending_subscription_id');
        sessionStorage.removeItem('pending_transaction_id');
        return;
      }

      try {
        // First, expire any other pending subscriptions for this user
        await supabase
          .from('subscriptions')
          .update({ status: 'expired' })
          .eq('user_id', user.id)
          .eq('status', 'pending')
          .neq('id', storedSubscriptionId);

        // Also expire any old active subscriptions that aren't paid
        await supabase
          .from('subscriptions')
          .update({ status: 'expired' })
          .eq('user_id', user.id)
          .eq('status', 'active')
          .neq('payment_status', 'paid')
          .neq('id', storedSubscriptionId);

        // Update subscription status to active and paid
        const { error: updateError } = await supabase
          .from('subscriptions')
          .update({
            status: 'active',
            payment_status: 'paid',
            payment_method: 'payu',
            transaction_id: txnid,
            notes: `Payment successful via PayU - Transaction ID: ${txnid}`
          })
          .eq('id', storedSubscriptionId)
          .eq('transaction_id', storedTxnId);

        if (updateError) {
          console.error('Error updating subscription:', updateError);
          // Check if subscription was already updated (maybe user refreshed page)
          const { data: existingSub } = await supabase
            .from('subscriptions')
            .select('*')
            .eq('id', storedSubscriptionId)
            .single();

          if (existingSub && existingSub.payment_status === 'paid') {
            setStatus('success');
            setMessage('Payment already verified! Your subscription has been renewed.');
          } else {
            throw updateError;
          }
        } else {
          // Update profile with new subscription
          await supabase
            .from('profiles')
            .update({
              subscription_id: storedSubscriptionId,
              subscription_status: 'active'
            })
            .eq('id', user.id);

          setStatus('success');
          setMessage('Payment successful! Your subscription has been renewed for 12 months.');
        }

        // Clear session storage
        sessionStorage.removeItem('pending_subscription_id');
        sessionStorage.removeItem('pending_transaction_id');

        // Redirect after 5 seconds
        setTimeout(() => {
          navigate('/dashboard?tab=subscription');
        }, 5000);
      } catch (error: any) {
        console.error('Payment verification error:', error);
        setStatus('error');
        setMessage(error.message || 'Failed to verify payment. Please contact support at retailmarketingpro1.0@gmail.com');
      }
    };

    if (user) {
      verifyPayment();
    }
  }, [searchParams, user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {status === 'processing' && <Loader2 className="h-5 w-5 animate-spin text-primary" />}
            {status === 'success' && <CheckCircle className="h-5 w-5 text-green-600" />}
            {status === 'error' && <XCircle className="h-5 w-5 text-red-600" />}
            Payment {status === 'success' ? 'Success' : status === 'error' ? 'Failed' : 'Processing'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{message}</p>
          
          {status === 'success' && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-sm text-green-800 dark:text-green-200">
                You will be redirected to your dashboard shortly...
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <p className="text-sm text-red-800 dark:text-red-200">
                If you have already made the payment, please contact support with your transaction ID.
              </p>
            </div>
          )}

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => navigate('/dashboard?tab=subscription')}
              className="flex-1"
            >
              Go to Dashboard
            </Button>
            {status === 'error' && (
              <Button
                onClick={() => navigate('/dashboard?tab=subscription')}
                className="flex-1"
              >
                Try Again
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

