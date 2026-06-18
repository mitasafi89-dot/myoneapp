import './home.css';
import { useAuth } from '../../context/AuthContext';
import { useWallet } from '../wallet/useWallet';

const ksh = (n: number) =>
  'Ksh ' + n.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function HomeScreen() {
  const { session } = useAuth();
  const userId = session?.user.id;
  const { wallet } = useWallet(userId);
  const balance = wallet?.balance ?? 170.35;

  return (
    <div className="home-root">
      <div className="phone">

        {/* status bar */}
        <div className="status">
          <span>4:13</span>
          <span className="right">
            <span>🔕</span>
            <span className="pill">Vo<span>LTE</span></span>
            <span>📶</span>
            <span className="pill">Vo<span>LTE</span></span>
            <span style={{ fontWeight: 700 }}>4G</span>
            <span>📶</span>
            <span className="bat">41</span>
          </span>
        </div>

        {/* header */}
        <div className="header">
          <div className="hleft">
            <div className="avatar">PM
              <span className="badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2FB35A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 7 12 12 15 14" /></svg>
              </span>
            </div>
            <div>
              <div className="greet">Good morning,</div>
              <div className="name">Peter 👋</div>
            </div>
          </div>
          <div className="hicons">
            <div className="hcircle">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2FB35A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
              <span className="dot"></span>
            </div>
            <div className="hcircle">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2FB35A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* balance carousel */}
        <div className="carousel">
          <div className="balcard">
            <div className="accent"></div>
            <svg className="bg-lines" viewBox="0 0 320 200" preserveAspectRatio="none"><g stroke="#3FB063" fill="none" strokeWidth="1"><path d="M180 0L320 60M220 20L320 120M150 200L320 150M260 0L320 30M120 40L240 200" /></g></svg>
            <div className="blabel">M-PESA Balance</div>
            <div className="brow">
              <div className="bamount">{ksh(balance)}</div>
              <svg className="eye" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" y1="2" x2="22" y2="22" /></svg>
            </div>
            <a className="vstmt">View Statements</a>
          </div>
          <div className="balcard alt">
            <div className="accent"></div>
            <div className="blabel">My Balances</div>
            <div className="brow"><div className="bamount" style={{ fontSize: '26px' }}>Airtime<br /><span style={{ fontSize: '30px' }}>Ksh. 0</span></div></div>
          </div>
        </div>

        <div className="dots"><i className="active"></i><i></i></div>

        {/* quick actions */}
        <div className="section">
          <div className="panel">
            <div className="panel-head">
              <h3>Quick Actions</h3>
              <a className="viewall">View all <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#36A852" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg></a>
            </div>
            <div className="grid">
              <div className="qa"><div className="qicon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="#2FB35A" d="M21 3 3 10.5l7.5 2.7L13 21 21 3Z"/><g stroke="#E23B2E" strokeWidth="2.2"><path d="M9.6 14.4 14 10"/><path d="M10.9 10.1h3.4v3.4"/></g></svg></div><div className="qlabel">Send Money</div></div>
              <div className="qa"><div className="qicon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g stroke="#E23B2E"><path d="m5 11 4-7"/><path d="m19 11-4-7"/><path d="M2 11h20"/></g><g stroke="#2FB35A"><path d="m4 11 1.4 8.5a2 2 0 0 0 2 1.5h9.2a2 2 0 0 0 2-1.5L20 11"/><path d="M10 15v3"/><path d="M14 15v3"/></g></svg></div><div className="qlabel">Lipa na<br />M-PESA</div></div>
              <div className="qa"><div className="qicon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g stroke="#2FB35A"><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="8" cy="12" r="1.8"/></g><g stroke="#E23B2E" strokeWidth="2.4"><path d="M15.5 7.5v6"/><path d="m13 11 2.5 2.5 2.5-2.5"/></g></svg></div><div className="qlabel">Withdraw<br />Money</div></div>
              <div className="qa"><div className="qicon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g stroke="#2FB35A"><path d="M7 4v13"/><path d="m3 13 4 4 4-4"/></g><g stroke="#E23B2E"><path d="M17 20V7"/><path d="m13 11 4-4 4 4"/></g></svg></div><div className="qlabel">Buy Bundles</div></div>
              <div className="qa"><div className="qicon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g stroke="#2FB35A"><circle cx="11" cy="11" r="9"/><path d="M2 11h18"/><path d="M11 2a14 14 0 0 1 3.6 9A14 14 0 0 1 11 20a14 14 0 0 1-3.6-9A14 14 0 0 1 11 2z"/></g><g stroke="#E23B2E" strokeWidth="2.3"><path d="M14.5 18.5a4.5 4.5 0 0 0 4.5 4.5"/><path d="M14.8 22.2 19 23l-.6-4.3"/></g></svg></div><div className="qlabel">International<br />Transfers</div></div>
              <div className="qa"><div className="qicon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="#2FB35A" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/><g stroke="#E23B2E" strokeWidth="2.4"><path d="M15.5 8.5 20 4"/><path d="M16 4h4v4"/></g></svg></div><div className="qlabel">Airtime Top<br />up</div></div>
              <div className="qa"><div className="qicon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g stroke="#2FB35A"><rect x="3" y="9" width="18" height="4" rx="1"/><path d="M19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6"/></g><g stroke="#E23B2E"><path d="M12 9v12"/><path d="M12 9s-.8-3-3-3a1.8 1.8 0 0 0 0 3z"/><path d="M12 9s.8-3 3-3a1.8 1.8 0 0 1 0 3z"/></g></svg></div><div className="qlabel">Tunukiwa<br />Bundles</div></div>
              <div className="qa"><div className="qicon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g stroke="#2FB35A"><path d="M3 9.5 12 3l9 6.5"/><path d="M5 11v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9"/></g><g stroke="#E23B2E"><path d="M9.5 16a3.5 3.5 0 0 1 5 0"/><path d="M7 13.5a7 7 0 0 1 10 0"/><path d="M12 19h.01"/></g></svg></div><div className="qlabel">Home<br />Internet</div></div>
            </div>
          </div>

          <div className="frequents">
            <span>Frequents</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9A9A9A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
        </div>

        <div className="explore">Explore &amp; Discover Deals 🔥</div>
        <div className="banner"><img src="/promo_banner.png" alt="" /></div>

      </div>
    </div>
  );
}
