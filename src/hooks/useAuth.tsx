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
      // First, try to get the current session to ensure we have a valid token
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        // If we have a session, try to sign out with the session token
        // Use local scope to avoid 403 errors with global logout
        const { error } = await supabase.auth.signOut({ scope: 'local' });
        
        if (error) {
          console.warn('SignOut error (non-blocking):', error);
          // Even if signOut fails, clear local storage manually
          try {
            // Clear Supabase auth data from localStorage
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
              if (key.startsWith('sb-') || key.includes('supabase')) {
                localStorage.removeItem(key);
              }
            });
          } catch (storageError) {
            console.warn('Failed to clear localStorage:', storageError);
          }
        }
      } else {
        // No session exists, just clear local storage
        try {
          const keys = Object.keys(localStorage);
          keys.forEach(key => {
            if (key.startsWith('sb-') || key.includes('supabase')) {
              localStorage.removeItem(key);
            }
          });
        } catch (storageError) {
          console.warn('Failed to clear localStorage:', storageError);
        }
      }
      
      // Always clear local state, even if server call fails
      // This ensures the UI updates and user can navigate away
      setUser(null);
      setSession(null);
      
      return { error: null };
    } catch (error) {
      // If signOut fails completely, still clear local state and storage
      console.error('SignOut error:', error);
      
      try {
        // Clear Supabase auth data from localStorage as fallback
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
          if (key.startsWith('sb-') || key.includes('supabase')) {
            localStorage.removeItem(key);
          }
        });
      } catch (storageError) {
        console.warn('Failed to clear localStorage:', storageError);
      }
      
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