import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setErr(null);
    const { error } = await signIn(email.trim(), password);
    if (error) setErr(error);
    setBusy(false);
  }

  return (
    <div className="min-h-full flex flex-col items-center justify-center px-6">
      <img src="/logo.png" alt="My OneApp" className="w-24 h-24 mb-4 object-contain" />
      <h1 className="text-xl font-semibold mb-1">My OneApp</h1>
      <p className="text-sm text-white/50 mb-8">Sign in with your printpesa account</p>
      <form onSubmit={submit} className="w-full max-w-sm flex flex-col gap-3">
        <input
          type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required
          className="w-full rounded-xl bg-brand-card border border-brand-line px-4 py-3 outline-none focus:border-brand-green"
        />
        <input
          type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required
          className="w-full rounded-xl bg-brand-card border border-brand-line px-4 py-3 outline-none focus:border-brand-green"
        />
        {err && <p className="text-sm text-red-400">{err}</p>}
        <button
          type="submit" disabled={busy}
          className="w-full rounded-xl bg-brand-green hover:bg-brand-greenDark transition py-3 font-semibold text-white disabled:opacity-60"
        >
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
