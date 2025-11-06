import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Lock, CreditCard, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { formatIndianCurrency } from '@/utils/indianBusiness';
import { supabase } from '@/integrations/supabase/client';

export const PaymentRequired = ({ daysRemaining }: { daysRemaining?: number }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      // Use local scope to avoid 403 errors with global logout
      await supabase.auth.signOut({ scope: 'local' });
    } catch (error) {
      // Even if signout fails, navigate away
      console.error('Sign out error:', error);
    } finally {
      // Always navigate to landing page, even if signout fails
      navigate('/landing', { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full border-destructive">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <Lock className="h-8 w-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Subscription Expired</CardTitle>
          <CardDescription className="text-base">
            Your subscription has expired. Please renew to continue using the application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              <p className="font-semibold">Access Restricted</p>
            </div>
            <p className="text-sm text-muted-foreground">
              You have completed your 11-month free trial period. To continue using all features, 
              please renew your subscription for <strong className="text-foreground">₹3,000 annually</strong>.
            </p>
            {daysRemaining !== undefined && daysRemaining < 0 && (
              <p className="text-sm text-destructive font-medium">
                Your subscription expired {Math.abs(daysRemaining)} day{Math.abs(daysRemaining) !== 1 ? 's' : ''} ago.
              </p>
            )}
          </div>

          <div className="border rounded-lg p-4 space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Renewal Details
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Renewal Amount:</span>
                <span className="font-bold text-lg text-green-600">{formatIndianCurrency(3000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Validity:</span>
                <span>12 months from renewal date</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment Methods:</span>
                <span>Bank Transfer, UPI, Credit/Debit Card, Cheque, Cash</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                // Navigate to subscription page
                navigate('/dashboard?tab=subscription', { replace: true });
              }}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Renew Subscription
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            For payment assistance, please contact support at retailmarketingpro1.0@gmail.com
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

