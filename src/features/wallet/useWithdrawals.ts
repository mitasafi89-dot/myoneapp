import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { WithdrawalRequest } from '../../types/db';

// Live withdrawal requests for the user. Subscribes to Realtime so status
// changes made on the website / by admin (pending -> paid/rejected) appear live.
export function useWithdrawals(userId: string | undefined) {
  const [rows, setRows] = useState<WithdrawalRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    let active = true;

    const load = () =>
      supabase
        .from('withdrawal_requests')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(20)
        .then(({ data }) => { if (active) { setRows((data ?? []) as WithdrawalRequest[]); setLoading(false); } });

    load();

    const channel = supabase
      .channel(`withdrawals:${userId}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'withdrawal_requests', filter: `user_id=eq.${userId}` },
        () => load()
      )
      .subscribe();

    return () => { active = false; supabase.removeChannel(channel); };
  }, [userId]);

  return { rows, loading };
}
