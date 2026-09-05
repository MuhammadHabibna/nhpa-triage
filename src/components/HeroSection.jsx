import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';
import medicalAuditSvg from '../assets/illustrations/medical_audit.svg';

export default function HeroSection({ onExploreEDA, onOpenSimulator }) {
  return (
    <section id="hero" className="section-wrapper" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        
        {/* Left Column: Clear Headline & Value Proposition */}
        <div>
          {/* Editorial Clean Kicker */}
          <div className="section-kicker">
            <span className="accent-bar" />
            <span>Sistem Triase Risiko & Alokasi Kuota Audit 5% • NHPA BPJS</span>
          </div>

          <h1 style={{ marginBottom: '1.25rem' }}>
            Sistem Triase Fraud & Alokasi Kuota Audit 5% Berbasis{' '}
            <span style={{ color: 'var(--primary)' }}>
              Explainable AI
            </span>
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '2.25rem' }}>
            Solusi pendukung keputusan komprehensif untuk mendeteksi kecurangan klaim BPJS Kesehatan pada mandat kapasitas audit 5% ($K = \lfloor 0.05 \times N \rfloor$). Menggabungkan rekayasa fitur forensik, kalibrasi probabilitas <i>prior shift</i>, atribusi SHAP, dan proteksi keadilan demografi.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button className="btn-emerald" onClick={onOpenSimulator}>
              <span>Uji Coba Live Simulator 5%</span>
              <ArrowRight size={16} />
            </button>
            <button className="btn-outline" onClick={onExploreEDA}>
              <BarChart2 size={16} color="var(--primary)" />
              <span>Pelajari Bukti EDA (7 Fase)</span>
            </button>
          </div>

          {/* Trust Metrics Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', paddingTop: '1.75rem', borderTop: '1px solid var(--border-light)' }}>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-title)', fontFamily: 'var(--font-heading)' }}>
                160,174
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Klaim Latih Historis
              </div>
            </div>

            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                0.9800
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                NormalizedRecall@5%
              </div>
            </div>

            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'var(--font-heading)' }}>
                98.42%
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Proteksi Keadilan Peserta
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Medical Audit Illustration */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '460px' }}>
            <img
              src={medicalAuditSvg}
              alt="Medical Audit Decision Support Illustration"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
