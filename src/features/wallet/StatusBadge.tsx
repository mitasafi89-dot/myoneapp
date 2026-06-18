import type { WithdrawalStatus } from '../../types/db';

const MAP: Record<string, { label: string; cls: string }> = {
  pending:    { label: 'Pending',    cls: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  approved:   { label: 'Approved',   cls: 'bg-sky-500/15 text-sky-400 border-sky-500/30' },
  processing: { label: 'Processing', cls: 'bg-sky-500/15 text-sky-400 border-sky-500/30' },
  paid:       { label: 'Paid',       cls: 'bg-brand-green/15 text-brand-green border-brand-green/30' },
  completed:  { label: 'Completed',  cls: 'bg-brand-green/15 text-brand-green border-brand-green/30' },
  rejected:   { label: 'Rejected',   cls: 'bg-red-500/15 text-red-400 border-red-500/30' },
  failed:     { label: 'Failed',     cls: 'bg-red-500/15 text-red-400 border-red-500/30' },
};

export default function StatusBadge({ status }: { status: WithdrawalStatus }) {
  const s = MAP[status] ?? { label: status, cls: 'bg-white/10 text-white/70 border-white/20' };
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${s.cls}`}>{s.label}</span>
  );
}
