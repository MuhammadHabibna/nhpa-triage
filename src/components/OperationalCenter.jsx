import React from 'react';
import { BookOpen, UserCheck, RefreshCw, AlertOctagon, Scale, Layers } from 'lucide-react';

export default function OperationalCenter() {
  const workflows = [
    {
      step: '01',
      title: 'Triase & Penskoran Risiko Otomatis',
      icon: Layers,
      desc: 'Klaim masuk diproses lewat feature extraction anti-bocor, diskor oleh ensemble trio (CatBoost/LGB/XGB), dan dikalibrasi ke prevalensi operasional 5.0%.'
    },
    {
      step: '02',
      title: 'Demarkasi Kuota Alokasi 5%',
      icon: Scale,
      desc: 'Top 5% klaim berisiko tertinggi dialokasikan ke portofolio audit manual. Sisa 95% klaim langsung lolos ke persetujuan instan (fast-track).'
    },
    {
      step: '03',
      title: 'Verifikasi Human-in-the-Loop',
      icon: UserCheck,
      desc: 'Dokter verifikator memeriksa rekam medis fisik dipandu 3 faktor pemicu SHAP dan lencana peringatan tanda tangan ambigu.'
    },
    {
      step: '04',
      title: 'Resolusi, Sanggahan, & Retraining',
      icon: RefreshCw,
      desc: 'Keputusan verifikator dicatat dalam audit ledger. Jika Population Stability Index (PSI) > 0.10, sistem memicu kalibrasi ulang atau retraining model.'
    },
  ];

  return (
    <section id="operational" className="section-wrapper">
      <div style={{ marginBottom: '2rem' }}>
        <div className="section-kicker">
          <span className="accent-bar" />
          <span>Task E • Operational Decision Process & Governance</span>
        </div>
        <h2>Kerangka Keputusan Operasional & Tata Kelola SOP</h2>
        <p style={{ maxWidth: '800px', fontSize: '1rem', color: 'var(--text-body)', marginTop: '0.4rem' }}>
          Sistem triase ini beroperasi sebagai instrumen pendukung keputusan medis (*decision support*), bukan pemutus vonis klaim otonom pengganti manusia.
        </p>
      </div>

      {/* 4-Step Stepper Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
        {workflows.map((wf, idx) => {
          const Icon = wf.icon;
          return (
            <div key={idx} className="white-card" style={{ padding: '1.75rem', position: 'relative', borderRadius: '12px' }}>
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.5rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#e2e8f0'
              }}>
                {wf.step}
              </div>

              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Icon size={20} />
              </div>

              <h4 style={{ fontSize: '1rem', color: 'var(--text-title)', marginBottom: '0.5rem' }}>
                {wf.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                {wf.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Governance & Retraining Policy */}
      <div className="white-card" style={{ padding: '2rem', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h3 style={{ fontSize: '1.15rem', color: 'var(--text-title)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertOctagon size={20} color="var(--warning)" />
          <span>Protokol Tata Kelola & Retraining Model (Governance Guardrails)</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <h4 style={{ fontSize: '0.92rem', color: 'var(--primary)', marginBottom: '0.4rem' }}>
              1. Hak Veto Auditor (Human Override)
            </h4>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-body)' }}>
              Verifikator memiliki kewenangan mutlak menyetujui klaim berisiko tinggi jika dokumen medis pendukung terbukti absah.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <h4 style={{ fontSize: '0.92rem', color: 'var(--secondary)', marginBottom: '0.4rem' }}>
              2. Deteksi Pergeseran Pola (Drift Monitoring)
            </h4>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-body)' }}>
              Pemantauan Population Stability Index (PSI) bulanan pada fitur kunci untuk mendeteksi perubahan modus fraud baru.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <h4 style={{ fontSize: '0.92rem', color: 'var(--text-title)', marginBottom: '0.4rem' }}>
              3. Mekanisme Banding Faskes (Appeals)
            </h4>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-body)' }}>
              Faskes yang klaimnya ditolak mendapatkan transparansi alasan penolakan dan hak sanggah dalam 14 hari kerja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
