import React from 'react';
import { X, ShieldAlert, Sparkles, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export default function XAIModal({ claim, onClose, onUpdateStatus }) {
  if (!claim) return null;

  const isHighRisk = claim.fraud_probability >= 0.5;

  return (
    <div className="light-modal-overlay" onClick={onClose}>
      <div className="light-modal-content" onClick={(e) => e.stopPropagation()} style={{ borderRadius: '16px' }}>
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
                Peringkat Risiko: #{claim.rank} dari {claim.totalClaims || 500} Klaim
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
        <div style={{ padding: '1.75rem' }}>
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
                KC {claim.kdkc} • Dati2 {claim.dati2}
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Demografi & LOS</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-title)' }}>
                {claim.umur} Thn ({claim.jkpst})
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                LOS: {claim.los} Hari • Sev: Lvl {claim.severitylevel}
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
                  Klaim ini memiliki atribut klinis identik dengan klaim sah dan fraud di riwayat historis. Wajibkan verifikasi dokumen fisik rekam medis.
                </div>
              </div>
            </div>
          )}

          {/* SHAP Attribution Drivers */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--text-title)' }}>
              <Sparkles size={16} color="var(--primary)" />
              <span>Faktor Utama Pemicu Risiko (Explainable AI - SHAP Values)</span>
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {claim.shap_drivers?.map((driver, idx) => (
                <div key={idx} style={{
                  background: '#f8fafc',
                  border: '1px solid var(--border-light)',
                  borderRadius: '8px',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-title)' }}>
                      {driver.feature}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {driver.desc}
                    </div>
                  </div>
                  <span style={{
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    color: driver.impact.startsWith('+') ? '#dc2626' : '#059669',
                    background: driver.impact.startsWith('+') ? '#fee2e2' : '#d1fae5',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px'
                  }}>
                    {driver.impact} log-odds
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Diagnoses & Procedures */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              Kode Klinis & Prosedur Medis
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
              Status Saat Ini: <strong style={{ color: 'var(--text-title)' }}>{claim.auditor_status || 'PENDING'}</strong>
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
