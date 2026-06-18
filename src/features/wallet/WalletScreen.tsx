import { useState } from 'react';
import { Eye, EyeOff, Send, Smartphone, Download, Wifi, RefreshCw } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useWallet } from './useWallet';
import { useWithdrawals } from './useWithdrawals';
import { ksh, timeAgo } from './format';
import StatusBadge from './StatusBadge';

const QUICK = [
  { icon: Send,       label: 'Send Money' },
  { icon: Smartphone, label: 'Lipa na M-PESA' },
  { icon: Download,   label: 'Withdraw' },
  { icon: Wifi,       label: 'Buy Bundles' },
];

export default function WalletScreen() {
  const { session, signOut } = useAuth();
  const userId = session?.user.id;
  const { wallet, loading } = useWallet(userId);
  const { rows, loading: wLoading } = useWithdrawals(userId);
  const [hidden, setHidden] = useState(false);

  const name = (session?.user.email ?? 'there').split('@')[0];

  return (
    <div className="min-h-full max-w-md mx-auto pb-10">
      {/* header */}
      <div className="flex items-center justify-between px-5 pt-6 pb-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="w-9 h-9 object-contain" />
          <div>
            <p className="text-xs text-white/50">Good day,</p>
            <p className="font-semibold capitalize">{name} 👋</p>
          </div>
        </div>
        <button onClick={signOut} className="text-xs text-white/50 hover:text-white">Sign out</button>
      </div>

      {/* balance card */}
      <div className="px-5">
        <div className="rounded-2xl bg-gradient-to-br from-brand-greenDark to-brand-green p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/80">M-PESA Balance</span>
            <button onClick={() => setHidden((h) => !h)} className="text-white/80">
              {hidden ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="mt-2 text-3xl font-bold text-white">
            {loading ? '—' : hidden ? 'Ksh ••••••' : ksh(wallet?.balance ?? 0)}
          </div>
          <div className="mt-1 flex items-center gap-1 text-xs text-white/70">
            <RefreshCw size={12} /> Live · synced with printpesa
          </div>
        </div>
      </div>

      {/* quick actions */}
      <div className="px-5 mt-6">
        <div className="grid grid-cols-4 gap-3">
          {QUICK.map(({ icon: Icon, label }) => (
            <button key={label} className="flex flex-col items-center gap-2">
              <span className="w-12 h-12 rounded-xl bg-brand-card border border-brand-line flex items-center justify-center text-brand-green">
                <Icon size={20} />
              </span>
              <span className="text-[11px] text-white/70 leading-tight text-center">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* withdrawals */}
      <div className="px-5 mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Recent Withdrawals</h2>
          <span className="text-xs text-white/40">live</span>
        </div>

        {wLoading ? (
          <p className="text-sm text-white/40">Loading…</p>
        ) : rows.length === 0 ? (
          <div className="rounded-xl border border-brand-line bg-brand-card p-6 text-center text-sm text-white/50">
            No withdrawals yet.
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {rows.map((r) => (
              <li key={r.id} className="rounded-xl border border-brand-line bg-brand-card p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{ksh(r.amount)}</p>
                  <p className="text-xs text-white/40">
                    {r.phone_number} · {timeAgo(r.created_at)}
                    {r.mpesa_receipt ? ` · ${r.mpesa_receipt}` : ''}
                  </p>
                </div>
                <StatusBadge status={r.status} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
