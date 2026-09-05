import React from 'react';
import { EDA_MASTER_DATA } from '../data/edaData';
import { TrendingUp, CheckCircle, Info } from 'lucide-react';

export default function SensitivityTable() {
  const sensitivityData = EDA_MASTER_DATA.capacity_allocation_sensitivity;

  return (
    <div className="white-card" style={{ padding: '1.75rem', marginBottom: '2.5rem', borderRadius: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-title)' }}>
            <TrendingUp size={18} color="var(--primary)" />
            <span>Analisis Sensitivitas Kapasitas Audit (3%, 5%, 7% Budget)</span>
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
            Simulasi operasional alokasi kuota audit pada seluruh populasi data latih berlabel (N = 160,174 klaim, Total Fraud P = 80,203 klaim).
          </p>
        </div>

        <span className="badge badge-emerald" style={{ borderRadius: '6px' }}>
          <CheckCircle size={13} />
          <span>Optimal pada 5% Kuota Resmi (NormRecall 0.9655)</span>
        </span>
      </div>

      <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-light)', marginBottom: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.85rem 1rem' }}>Kapasitas Audit</th>
              <th style={{ padding: '0.85rem 1rem' }}>Kuota Klaim (K)</th>
              <th style={{ padding: '0.85rem 1rem' }}>Fraud Terbukti (TP)</th>
              <th style={{ padding: '0.85rem 1rem' }}>Salah Audit (FP)</th>
              <th style={{ padding: '0.85rem 1rem' }}>Presisi Audit</th>
              <th style={{ padding: '0.85rem 1rem' }}>NormalizedRecall@K</th>
              <th style={{ padding: '0.85rem 1rem' }}>Lift vs Inspeksi Acak</th>
            </tr>
          </thead>
          <tbody>
            {sensitivityData.map((row, idx) => {
              const isOfficial = row.budget.includes('5%');
              return (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid var(--border-light)',
                    background: isOfficial ? '#ecfdf5' : '#ffffff',
                    fontWeight: isOfficial ? 700 : 400
                  }}
                >
                  <td style={{ padding: '0.85rem 1rem', color: isOfficial ? '#065f46' : 'var(--text-title)' }}>
                    {row.budget}
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>{row.k_audited.toLocaleString()} klaim</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#dc2626', fontWeight: 700 }}>{row.tp_captured.toLocaleString()} klaim</td>
                  <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>{row.fp_legit} klaim ({((row.fp_legit / row.k_audited) * 100).toFixed(2)}%)</td>
                  <td style={{ padding: '0.85rem 1rem' }}>{row.precision}</td>
                  <td style={{ padding: '0.85rem 1rem', color: 'var(--primary)', fontWeight: 800 }}>
                    {row.norm_recall.toFixed(4)}
                  </td>
                  <td style={{ padding: '0.85rem 1rem', color: '#047857', fontWeight: 700 }}>{row.lift}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '8px' }}>
        <Info size={15} color="var(--primary)" style={{ flexShrink: 0 }} />
        <span>
          Pada ambang 5% kuota resmi (K = 8,008 klaim), model menjaring 7,730 klaim fraud terkonfirmasi dengan presisi 96.53%, menghasilkan lift 1.92x lipat (+3,709 fraud tambahan) dibandingkan inspeksi acak konvensional (4,021 fraud).
        </span>
      </div>
    </div>
  );
}
