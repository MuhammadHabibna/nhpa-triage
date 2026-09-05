import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-light)',
      padding: '3rem 0',
      background: '#ffffff',
      textAlign: 'center',
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }}>
      <div className="landing-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: 'var(--primary-light)',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ShieldCheck size={18} />
          </div>
          <strong style={{ color: 'var(--text-title)', fontSize: '1.05rem', fontFamily: 'var(--font-heading)' }}>
            Nusantara Health Protection Agency (NHPA)
          </strong>
        </div>

        <p style={{ maxWidth: '640px', margin: '0 auto 1.25rem auto', color: 'var(--text-body)', lineHeight: 1.6 }}>
          Sistem Pendukung Keputusan Triase Risiko Klaim Kesehatan dan Alokasi Kuota Audit 5%: Dikembangkan untuk Data Analytics Competition (DAC) PRS ITS 2026.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
          <span>Ensemble Trio (50% LGB + 30% XGB + 20% CatBoost)</span>
          <span>:</span>
          <span>NormalizedRecall@5%: 0.9655</span>
          <span>:</span>
          <span>Proteksi Keadilan: 99.86%</span>
          <span>:</span>
          <span>Zero-Leakage 5-Fold Stratified</span>
        </div>
      </div>
    </footer>
  );
}
