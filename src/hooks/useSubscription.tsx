import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface SubscriptionStatus {
  isActive: boolean;
  isExpired: boolean;
  isTrial: boolean;
  daysRemaining: number;
  subscription: {
    id: string;
    subscription_type: string;
    status: string;
    start_date: string;
    end_date: string;
    amount_paid: number;
    payment_status: string;
  } | null;
  loading: boolean;
}

export const useSubscription = () => {
  const { user } = useAuth();
  const [subscriptionStatus, setSubscriptionStatus] = useState<SubscriptionStatus>({
    isActive: false,
    isExpired: false,
    isTrial: false,
    daysRemaining: 0,
    subscription: null,
    loading: true
  });

  useEffect(() => {
    if (user) {
      checkSubscription();
    } else {
      setSubscriptionStatus(prev => ({ ...prev, loading: false, isActive: false }));
    }
  }, [user]);

  const checkSubscription = async () => {
    if (!user?.id) {
      setSubscriptionStatus(prev => ({ ...prev, loading: false, isActive: false }));
      return;
    }

    try {
      // First, run the expiry check function to update expired subscriptions
      await supabase.rpc('check_subscription_expiry');

      // Get user's active subscription
      const { data: subscriptions, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .order('end_date', { ascending: false })
        .limit(1);
      
      const subscription = subscriptions && subscriptions.length > 0 ? subscriptions[0] : null;

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        console.error('Error fetching subscription:', error);
        setSubscriptionStatus({
          isActive: false,
          isExpired: true,
          isTrial: false,
          daysRemaining: 0,
          subscription: null,
          loading: false
        });
        return;
      }

      if (!subscription) {
        // No active subscription found
        setSubscriptionStatus({
          isActive: false,
          isExpired: true,
          isTrial: false,
          daysRemaining: 0,
          subscription: null,
          loading: false
        });
        return;
      }

      // Check if subscription is expired
      const endDate = new Date(subscription.end_date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);

      const isExpired = endDate < today;
      const daysRemaining = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      const isTrial = subscription.subscription_type === 'trial';
      const isActive = !isExpired && subscription.status === 'active' && subscription.payment_status === 'paid';

      setSubscriptionStatus({
        isActive,
        isExpired,
        isTrial,
        daysRemaining: isExpired ? 0 : daysRemaining,
        subscription: {
          id: subscription.id,
          subscription_type: subscription.subscription_type,
          status: subscription.status,
          start_date: subscription.start_date,
          end_date: subscription.end_date,
          amount_paid: subscription.amount_paid,
          payment_status: subscription.payment_status
        },
        loading: false
      });
    } catch (error) {
      console.error('Error checking subscription:', error);
      setSubscriptionStatus({
        isActive: false,
        isExpired: true,
        isTrial: false,
        daysRemaining: 0,
        subscription: null,
        loading: false
      });
    }
  };

  return {
    ...subscriptionStatus,
    refetch: checkSubscription
  };
};

