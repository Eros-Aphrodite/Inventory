import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      // Use local scope to avoid 403 errors with global logout
      // This signs out from the current session only
      const { error } = await supabase.auth.signOut({ scope: 'local' });
      
      // Always clear local state, even if server call fails
      // This ensures the UI updates and user can navigate away
      setUser(null);
      setSession(null);
      
      return { error };
    } catch (error) {
      // If signOut fails completely, still clear local state
      setUser(null);
      setSession(null);
      return { error: error as Error };
    }
  };

  return {
    user,
    session,
    loading,
    signOut,
    isAuthenticated: !!user
  };
};