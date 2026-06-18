import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { Wallet } from '../../types/db';

// Live wallet balance. Fetches the user's wallet, then subscribes to Realtime
// UPDATEs so a website withdrawal (which debits wallets.balance) reflects instantly.
export function useWallet(userId: string | undefined) {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    let active = true;

    supabase
      .from('wallets')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle()
      .then(({ data }) => {
        if (active) { setWallet(data as Wallet | null); setLoading(false); }
      });

    const channel = supabase
      .channel(`wallet:${userId}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'wallets', filter: `user_id=eq.${userId}` },
        (payload) => setWallet(payload.new as Wallet)
      )
      .subscribe();

    return () => { active = false; supabase.removeChannel(channel); };
  }, [userId]);

  return { wallet, loading };
}
