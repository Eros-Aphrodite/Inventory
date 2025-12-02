import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XCircle, ArrowRight, Mail } from 'lucide-react';

export default function PaymentFailure() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [cleaned, setCleaned] = useState(false);

  useEffect(() => {
    const cleanup = async () => {
      const txnid = searchParams.get('txnid');
      const storedSubscriptionId = sessionStorage.getItem('pending_subscription_id');
      const storedTxnId = sessionStorage.getItem('pending_transaction_id');

      if (storedSubscriptionId && !cleaned) {
        try {
          // Delete the pending subscription record
          await supabase
            .from('subscriptions')
            .delete()
            .eq('id', storedSubscriptionId)
            .eq('transaction_id', storedTxnId);

          // Clear session storage
          sessionStorage.removeItem('pending_subscription_id');
          sessionStorage.removeItem('pending_transaction_id');
          setCleaned(true);
        } catch (error) {
          console.error('Error cleaning up failed payment:', error);
        }
      }
    };

    cleanup();
  }, [searchParams, cleaned]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600">
            <XCircle className="h-5 w-5" />
            Payment Failed
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Your payment could not be processed. This could be due to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
            <li>Insufficient funds in your account</li>
            <li>Payment was cancelled</li>
            <li>Network or technical issues</li>
            <li>Card/bank declined the transaction</li>
          </ul>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-sm text-red-800 dark:text-red-200">
              No charges have been made to your account. You can try again or contact support for assistance.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              onClick={() => navigate('/dashboard?tab=subscription')}
              className="w-full"
            >
              Try Again
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/dashboard')}
              className="w-full"
            >
              Go to Dashboard
            </Button>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-muted-foreground text-center mb-2">
              Need help? Contact our support team
            </p>
            <a
              href="mailto:retailmarketingpro1.0@gmail.com"
              className="flex items-center justify-center gap-2 text-sm text-primary hover:underline"
            >
              <Mail className="h-4 w-4" />
              retailmarketingpro1.0@gmail.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

