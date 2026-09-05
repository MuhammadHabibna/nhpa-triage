import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const links = [
    { id: 'hero', label: 'Beranda' },
    { id: 'kpi', label: 'Metrik Utama' },
    { id: 'eda', label: 'Bukti Forensik' },
    { id: 'gallery', label: 'Galeri Lampiran 16:9' },
    { id: 'simulator', label: 'Live Triage 5%' },
    { id: 'fairness', label: 'Fairness & Proteksi' },
    { id: 'operational', label: 'SOP Tata Kelola' },
  ];

  return (
    <header className="site-navbar">
      <div className="site-navbar-inner">
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('hero')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(5, 150, 105, 0.25)'
          }}>
            <ShieldCheck size={20} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-title)', letterSpacing: '-0.02em' }}>
                NHPA Triage
              </span>
              <span style={{ fontSize: '0.68rem', color: 'var(--primary)', fontWeight: 700 }}>
                : DAC PRS 2026
              </span>
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Nusantara Health Protection Agency
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="nav-links">
          {links.map((link) => (
            <button
              key={link.id}
              className={`nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => onNavigate(link.id)}
            >
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div>
          <button
            className="btn-emerald"
            onClick={() => onNavigate('simulator')}
            style={{ padding: '0.5rem 1.15rem', fontSize: '0.82rem' }}
          >
            <span>Buka Simulator</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
