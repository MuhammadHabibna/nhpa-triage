import React from 'react';
import { Database, Target, Award, ShieldAlert } from 'lucide-react';

export default function KPICards() {
  const kpis = [
    {
      title: 'TOTAL KLAIM HISTORIS',
      value: '160,174',
      subtext: 'Data Latih Tervalidasi',
      detail: '40,043 Klaim Uji Test',
      icon: Database,
      accentBg: 'var(--secondary-light)',
      accentColor: 'var(--secondary)',
      category: 'Balanced 50:50'
    },
    {
      title: 'PREVALENSI OPERASIONAL',
      value: '5.00%',
      subtext: 'Asumsi Prevalensi Riil',
      detail: 'Bayes Prior Shift Calibrated',
      icon: ShieldAlert,
      accentBg: 'var(--warning-light)',
      accentColor: 'var(--warning)',
      category: 'Domain Baseline'
    },
    {
      title: 'NORMALIZED RECALL @ 5%',
      value: '0.9655',
      subtext: 'Mean 5-Fold CV (+-0.0054)',
      detail: 'Round 2 Retraining: 0.9659',
      icon: Award,
      accentBg: 'var(--primary-light)',
      accentColor: 'var(--primary)',
      category: 'Metrik Resmi #1'
    },
    {
      title: 'PROTECTION SCORE',
      value: '99.86%',
      subtext: 'Keadilan Demografi (Task D)',
      detail: 'Max FPR Gap = 0.00144 (0.144%)',
      icon: Target,
      accentBg: '#f1f5f9',
      accentColor: 'var(--accent-navy)',
      category: '1 - max(Gap)'
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '1.25rem',
      marginBottom: '3.5rem'
    }}>
      {kpis.map((kpi, idx) => {
        const Icon = kpi.icon;

        return (
          <div key={idx} className="white-card white-card-interactive" style={{ padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: kpi.accentBg,
                color: kpi.accentColor
              }}>
                <Icon size={20} />
              </div>
              
              <span style={{ fontSize: '0.73rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                {kpi.category}
              </span>
            </div>

            <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              {kpi.title}
            </div>

            <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-title)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '0.5rem' }}>
              {kpi.value}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ color: 'var(--text-body)', fontWeight: 500 }}>{kpi.subtext}</span>
              <span style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.73rem' }}>{kpi.detail}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
