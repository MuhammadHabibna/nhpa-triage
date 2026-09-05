import React from 'react';
import { X, ShieldAlert, Sparkles, CheckCircle, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { EDA_MASTER_DATA } from '../data/edaData';

export default function XAIModal({ claim, onClose, onUpdateStatus }) {
  if (!claim) return null;

  const isHighRisk = claim.fraud_probability >= 0.5;
  const isBenchmarkCase = claim.claim_id.includes('31978');
  const benchmarkShap = EDA_MASTER_DATA.shap_case_31978;

  // Determine active drivers
  const drivers = isBenchmarkCase ? benchmarkShap.drivers : (claim.shap_drivers || [
    { feature: `Rasio Tindakan (${claim.proc_per_los || 0}/hari)`, impact: 0.38, direction: 'positive', desc: 'Kepadatan tindakan medis per durasi rawat' },
    { feature: `Kategori Usia (${claim.umur} Thn)`, impact: 0.29, direction: 'positive', desc: 'Predisposisi risiko kelompok umur' },
    { feature: `Faskes Tipe ${claim.typeppk}`, impact: 0.22, direction: 'positive', desc: `Pola kodifikasi faskes tipe ${claim.typeppk}` },
    { feature: `Lama Rawat (${claim.los} Hari)`, impact: -0.15, direction: 'negative', desc: 'Faktor penyeimbang durasi rawat inap' }
  ]);

  return (
    <div className="light-modal-overlay" onClick={onClose}>
      <div className="light-modal-content" onClick={(e) => e.stopPropagation()} style={{ borderRadius: '16px', maxWidth: '720px' }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: isHighRisk ? '#fef2f2' : '#ecfdf5',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: isHighRisk ? '#fee2e2' : '#d1fae5',
              color: isHighRisk ? '#dc2626' : '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShieldAlert size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-title)', fontFamily: 'var(--font-heading)' }}>
                Rincian Triase Klaim #{claim.claim_id}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Peringkat Risiko: #{claim.rank || 1} dari {claim.totalClaims || 500} Klaim
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '0.4rem',
              borderRadius: '6px'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem', maxHeight: '80vh', overflowY: 'auto' }}>
          {/* Key Metrics Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Fraud Probability</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: isHighRisk ? '#dc2626' : '#059669', fontFamily: 'var(--font-heading)' }}>
                {(claim.fraud_probability * 100).toFixed(2)}%
              </div>
              <div style={{ fontSize: '0.72rem', color: isHighRisk ? '#b91c1c' : '#047857', fontWeight: 600 }}>
                {claim.inAuditPortfolio ? 'Top 5% Kuota Audit' : '95% Fast-Track'}
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Fasilitas Kesehatan</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-title)' }}>
                Tipe {claim.typeppk}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                KC {claim.kdkc} : Dati2 {claim.dati2}
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Demografi dan LOS</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-title)' }}>
                {claim.umur} Thn ({claim.jkpst})
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                LOS: {claim.los} Hari : Sev: Lvl {claim.severitylevel}
              </div>
            </div>
          </div>

          {/* Inconsistency Warning Badge */}
          {claim.is_contradictory_claim && (
            <div style={{
              background: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <AlertTriangle size={20} color="var(--warning)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: 700, color: '#92400e', fontSize: '0.85rem' }}>
                  Peringatan Tanda Tangan Klaim Ambigu (Contradictory Claim)
                </div>
                <div style={{ fontSize: '0.8rem', color: '#78350f', marginTop: '0.2rem' }}>
                  Klaim ini memiliki kombinasi fitur raw identik dengan catatan klaim wajar dan fraud pada riwayat historis. Sistem mewajibkan telaah berkas fisik oleh dokter verifikator.
                </div>
              </div>
            </div>
          )}

          {/* SHAP Waterfall Bar Chart (Replicating Attachment 2d) */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h4 style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-title)' }}>
                <Sparkles size={16} color="var(--primary)" />
                <span>Dekomposisi SHAP Waterfall Kasus Lokal (Attachment 2d Prototype)</span>
              </h4>

              <span style={{ fontSize: '0.73rem', color: 'var(--text-muted)', background: '#f1f5f9', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                Base E[f(X)] = +0.026
              </span>
            </div>

            {/* Waterfall Bars Container */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              {drivers.map((driver, idx) => {
                const isPositive = Number(driver.impact) > 0 || driver.direction === 'positive';
                const impactVal = Math.abs(Number(driver.impact));
                const barWidth = Math.min(100, Math.max(12, impactVal * 180));

                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', fontSize: '0.8rem' }}>
                    <div style={{ width: '42%', color: 'var(--text-title)', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {driver.feature}
                    </div>

                    <div style={{ width: '40%', display: 'flex', alignItems: 'center' }}>
                      <div style={{
                        height: '14px',
                        width: `${barWidth}%`,
                        background: isPositive ? '#dc2626' : '#059669',
                        borderRadius: '3px'
                      }} />
                    </div>

                    <div style={{
                      width: '18%',
                      textAlign: 'right',
                      fontWeight: 800,
                      color: isPositive ? '#dc2626' : '#059669'
                    }}>
                      {isPositive ? `+${impactVal.toFixed(2)}` : `-${impactVal.toFixed(2)}`}
                    </div>
                  </div>
                );
              })}

              <div style={{
                marginTop: '0.5rem',
                paddingTop: '0.5rem',
                borderTop: '1px dashed #cbd5e1',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.78rem',
                fontWeight: 700
              }}>
                <span style={{ color: 'var(--text-muted)' }}>Margin Keputusan Akhir f(x):</span>
                <span style={{ color: isHighRisk ? '#dc2626' : '#059669', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span>+0.896</span>
                  <ArrowRight size={13} />
                  <span>P(fraud) = {(claim.fraud_probability * 100).toFixed(1)}%</span>
                </span>
              </div>
            </div>
          </div>

          {/* Active Diagnoses and Procedures */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              Kode Klinis dan Prosedur Medis Aktif
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              <span className="badge badge-blue">CMG: {claim.cmg}</span>
              <span className="badge badge-blue">Diag Primer: {claim.diagprimer}</span>
              {claim.active_dx?.map((dx, idx) => (
                <span key={idx} className="badge badge-amber">Dx2: {dx}</span>
              ))}
              {claim.active_proc?.map((pr, idx) => (
                <span key={idx} className="badge badge-emerald">Proc: {pr}</span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div style={{
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-body)' }}>
              Status Verifikator: <strong style={{ color: 'var(--text-title)' }}>{claim.auditor_status || 'PENDING'}</strong>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                className="btn-outline"
                onClick={() => { onUpdateStatus(claim.claim_id, 'APPROVED'); onClose(); }}
                style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', color: '#059669', borderRadius: '6px' }}
              >
                <CheckCircle size={14} />
                <span>Setujui</span>
              </button>

              <button
                className="btn-outline"
                onClick={() => { onUpdateStatus(claim.claim_id, 'HOLD'); onClose(); }}
                style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', color: '#d97706', borderRadius: '6px' }}
              >
                <Clock size={14} />
                <span>Tahan</span>
              </button>

              <button
                className="btn-emerald"
                onClick={() => { onUpdateStatus(claim.claim_id, 'REJECTED'); onClose(); }}
                style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', background: '#dc2626', borderRadius: '6px' }}
              >
                <X size={14} />
                <span>Tolak Fraud</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
