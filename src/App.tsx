import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import HomeScreen from './features/home/HomeScreen';

function Gate() {
  const { session, loading } = useAuth();
  if (loading) {
    return <div className="min-h-full flex items-center justify-center text-white/40">Loading…</div>;
  }
  return session ? <HomeScreen /> : <Login />;
}

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-full bg-brand-ink">
        <Gate />
      </div>
    </AuthProvider>
  );
}
