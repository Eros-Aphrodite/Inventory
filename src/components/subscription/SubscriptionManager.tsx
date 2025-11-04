import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { 
  Calendar, 
  CreditCard, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  RefreshCw,
  IndianRupee,
  TrendingUp
} from 'lucide-react';
import { formatIndianCurrency } from '@/utils/indianBusiness';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface Subscription {
  id: string;
  subscription_type: string;
  status: string;
  amount_paid: number;
  start_date: string;
  end_date: string;
  renewal_date: string | null;
  payment_status: string;
  payment_method: string | null;
  transaction_id: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export const SubscriptionManager = () => {
  const { user } = useAuth();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [currentSubscription, setCurrentSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [showRenewalDialog, setShowRenewalDialog] = useState(false);
  const [renewalData, setRenewalData] = useState({
    payment_method: 'bank_transfer',
    transaction_id: '',
    notes: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchSubscriptions();
    }
  }, [user]);

  const fetchSubscriptions = async () => {
    if (!user?.id) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setSubscriptions(data || []);
      
      // Find active subscription
      const active = (data || []).find(s => s.status === 'active');
      setCurrentSubscription(active || null);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load subscriptions",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRenewal = async () => {
    if (!user?.id || !currentSubscription) return;

    try {
      const renewalAmount = 3000; // Annual renewal price
      const currentEndDate = new Date(currentSubscription.end_date);
      const newEndDate = new Date(currentEndDate);
      newEndDate.setFullYear(newEndDate.getFullYear() + 1);

      // Create new subscription record for renewal
      const { data: newSubscription, error } = await supabase
        .from('subscriptions')
        .insert([{
          user_id: user.id,
          subscription_type: 'annual',
          status: 'active',
          amount_paid: renewalAmount,
          start_date: currentSubscription.end_date,
          end_date: newEndDate.toISOString().split('T')[0],
          renewal_date: newEndDate.toISOString().split('T')[0],
          payment_status: renewalData.transaction_id ? 'paid' : 'pending',
          payment_method: renewalData.payment_method,
          transaction_id: renewalData.transaction_id || null,
          notes: renewalData.notes || `Annual renewal - ${renewalData.payment_method}`
        }])
        .select()
        .single();

      if (error) throw error;

      // Update old subscription to expired
      await supabase
        .from('subscriptions')
        .update({ status: 'expired' })
        .eq('id', currentSubscription.id);

      // Update profile
      await supabase
        .from('profiles')
        .update({ 
          subscription_id: newSubscription.id,
          subscription_status: 'active'
        })
        .eq('id', user.id);

      toast({
        title: "Success",
        description: "Subscription renewed successfully for another year"
      });

      setShowRenewalDialog(false);
      setRenewalData({
        payment_method: 'bank_transfer',
        transaction_id: '',
        notes: ''
      });
      fetchSubscriptions();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to renew subscription",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'expired': return 'destructive';
      case 'pending': return 'secondary';
      case 'cancelled': return 'outline';
      default: return 'outline';
    }
  };

  const getDaysUntilExpiry = (endDate: string) => {
    const today = new Date();
    const expiry = new Date(endDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (loading) {
    return <div className="text-center py-8">Loading subscription information...</div>;
  }

  const daysUntilExpiry = currentSubscription ? getDaysUntilExpiry(currentSubscription.end_date) : 0;
  const isExpiringSoon = daysUntilExpiry > 0 && daysUntilExpiry <= 30;
  const isExpired = daysUntilExpiry < 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Subscription Management</h2>
          <p className="text-muted-foreground">Manage your subscription and track yearly renewals</p>
        </div>
      </div>

      {/* Current Subscription Card */}
      {currentSubscription ? (
        <Card className={isExpiringSoon || isExpired ? 'border-warning' : ''}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Current Subscription
                </CardTitle>
                <CardDescription>
                  {currentSubscription.subscription_type === 'annual' ? 'Annual Plan' : 'Monthly Plan'}
                </CardDescription>
              </div>
              <Badge variant={getStatusColor(currentSubscription.status)}>
                {currentSubscription.status.toUpperCase()}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="font-medium">{new Date(currentSubscription.start_date).toLocaleDateString('en-IN')}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">End Date</p>
                <p className="font-medium">{new Date(currentSubscription.end_date).toLocaleDateString('en-IN')}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Amount Paid</p>
                <p className="font-medium text-green-600">{formatIndianCurrency(currentSubscription.amount_paid)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Payment Status</p>
                <Badge variant={currentSubscription.payment_status === 'paid' ? 'default' : 'secondary'}>
                  {currentSubscription.payment_status.toUpperCase()}
                </Badge>
              </div>
            </div>

            {isExpired && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-5 w-5" />
                  <p className="font-semibold">Subscription Expired</p>
                </div>
                <p className="text-sm text-destructive/80 mt-2">
                  Your subscription expired on {new Date(currentSubscription.end_date).toLocaleDateString('en-IN')}. 
                  Please renew to continue using the service.
                </p>
                <Button 
                  className="mt-4"
                  onClick={() => setShowRenewalDialog(true)}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Renew Now (₹3,000)
                </Button>
              </div>
            )}

            {isExpiringSoon && !isExpired && (
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <div className="flex items-center gap-2 text-warning">
                  <Clock className="h-5 w-5" />
                  <p className="font-semibold">Renewal Due Soon</p>
                </div>
                <p className="text-sm text-warning/80 mt-2">
                  Your subscription expires in {daysUntilExpiry} day{daysUntilExpiry !== 1 ? 's' : ''}. 
                  Renew now to continue uninterrupted service.
                </p>
                <Button 
                  variant="outline"
                  className="mt-4"
                  onClick={() => setShowRenewalDialog(true)}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Renew Now (₹3,000)
                </Button>
              </div>
            )}

            {!isExpiringSoon && !isExpired && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <p className="text-sm">Active - {daysUntilExpiry} days remaining</p>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="py-8 text-center">
            <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No active subscription found</p>
          </CardContent>
        </Card>
      )}

      {/* Subscription History */}
      <Card>
        <CardHeader>
          <CardTitle>Subscription History</CardTitle>
          <CardDescription>View all your subscription records</CardDescription>
        </CardHeader>
        <CardContent>
          {subscriptions.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No subscription history found</p>
          ) : (
            <div className="space-y-4">
              {subscriptions.map((sub) => (
                <div key={sub.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={getStatusColor(sub.status)}>
                          {sub.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {sub.subscription_type} • {formatIndianCurrency(sub.amount_paid)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Start</p>
                          <p>{new Date(sub.start_date).toLocaleDateString('en-IN')}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">End</p>
                          <p>{new Date(sub.end_date).toLocaleDateString('en-IN')}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Payment</p>
                          <p>{sub.payment_method || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Status</p>
                          <Badge variant={sub.payment_status === 'paid' ? 'default' : 'secondary'} className="text-xs">
                            {sub.payment_status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Renewal Dialog */}
      <Dialog open={showRenewalDialog} onOpenChange={setShowRenewalDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Renew Subscription</DialogTitle>
            <DialogDescription>
              Annual renewal fee: <span className="font-bold text-lg">{formatIndianCurrency(3000)}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Payment Method</Label>
              <Select 
                value={renewalData.payment_method}
                onValueChange={(value) => setRenewalData(prev => ({ ...prev, payment_method: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="credit_card">Credit Card</SelectItem>
                  <SelectItem value="debit_card">Debit Card</SelectItem>
                  <SelectItem value="cheque">Cheque</SelectItem>
                  <SelectItem value="cash">Cash</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Transaction ID / Reference (Optional)</Label>
              <Input
                value={renewalData.transaction_id}
                onChange={(e) => setRenewalData(prev => ({ ...prev, transaction_id: e.target.value }))}
                placeholder="Enter transaction reference"
              />
            </div>
            <div>
              <Label>Notes (Optional)</Label>
              <Textarea
                value={renewalData.notes}
                onChange={(e) => setRenewalData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Additional notes..."
                rows={3}
              />
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-semibold mb-2">Renewal Summary</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Renewal Amount:</span>
                  <span className="font-bold">{formatIndianCurrency(3000)}</span>
                </div>
                <div className="flex justify-between">
                  <span>New End Date:</span>
                  <span>
                    {currentSubscription 
                      ? new Date(new Date(currentSubscription.end_date).setFullYear(new Date(currentSubscription.end_date).getFullYear() + 1)).toLocaleDateString('en-IN')
                      : 'N/A'
                    }
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowRenewalDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleRenewal}>
                <IndianRupee className="w-4 h-4 mr-2" />
                Confirm Renewal
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

