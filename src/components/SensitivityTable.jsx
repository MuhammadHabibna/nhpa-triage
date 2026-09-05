import React from 'react';
import { EDA_MASTER_DATA } from '../data/edaData';
import { TrendingUp, CheckCircle } from 'lucide-react';

export default function SensitivityTable() {
  const sensitivityData = EDA_MASTER_DATA.capacity_allocation_sensitivity;

  return (
    <div className="white-card" style={{ padding: '1.75rem', marginBottom: '2.5rem', borderRadius: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-title)' }}>
            <TrendingUp size={18} color="var(--primary)" />
            <span>Analisis Sensitivitas Kapasitas Audit (3%, 5%, 7%)</span>
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
            Evaluasi efisiensi anggaran dan rasio tangkapan fraud jika kapasitas audit disesuaikan.
          </p>
        </div>

        <span className="badge badge-emerald" style={{ borderRadius: '6px' }}>
          <CheckCircle size={13} />
          <span>Optimal pada 5% Budget (0.9800)</span>
        </span>
      </div>

      <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.85rem 1rem' }}>Kapasitas Audit</th>
              <th style={{ padding: '0.85rem 1rem' }}>Kuota Klaim (K)</th>
              <th style={{ padding: '0.85rem 1rem' }}>Fraud Tertangkap (TP)</th>
              <th style={{ padding: '0.85rem 1rem' }}>Klaim Wajar Terpilih (FP)</th>
              <th style={{ padding: '0.85rem 1rem' }}>Presisi Audit</th>
              <th style={{ padding: '0.85rem 1rem' }}>NormalizedRecall@K</th>
              <th style={{ padding: '0.85rem 1rem' }}>Lift vs Acak</th>
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
                  <td style={{ padding: '0.85rem 1rem' }}>{row.k_audited.toLocaleString()}</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#dc2626', fontWeight: 700 }}>{row.tp_captured.toLocaleString()}</td>
                  <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>{row.fp_legit}</td>
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
    </div>
  );
}
