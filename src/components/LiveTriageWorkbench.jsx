import React, { useState, useMemo, useRef } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Search,
  Download,
  Upload,
  PlayCircle,
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { parseCSVFile } from '../utils/triageEngine';

export default function LiveTriageWorkbench({
  triageResult,
  onSelectClaim,
  onUpdateClaimStatus,
  onExportSubmission,
  activePreset,
  setActivePreset,
  onDataLoaded
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [typeFilter, setTypeFilter] = useState('ALL');
  
  // Pagination & Display Limit state
  const [pageSize, setPageSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const fileInputRef = useRef(null);

  const { allClaims, stats } = triageResult;

  // Filter logic
  const filteredClaims = useMemo(() => {
    return allClaims.filter((claim) => {
      const matchSearch =
        claim.claim_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(claim.kdkc).includes(searchTerm) ||
        claim.diagprimer.toLowerCase().includes(searchTerm.toLowerCase());

      const matchStatus =
        statusFilter === 'ALL' ||
        (statusFilter === 'AUDIT_ONLY' && claim.inAuditPortfolio) ||
        (statusFilter === 'FAST_TRACK' && !claim.inAuditPortfolio) ||
        (statusFilter === 'INCONSISTENT' && claim.is_contradictory_claim);

      const matchType = typeFilter === 'ALL' || claim.typeppk === typeFilter;

      return matchSearch && matchStatus && matchType;
    });
  }, [allClaims, searchTerm, statusFilter, typeFilter]);

  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, typeFilter, pageSize]);

  const totalFiltered = filteredClaims.length;
  const isShowAll = pageSize === 'ALL';
  const effectivePageSize = isShowAll ? totalFiltered : Number(pageSize);
  const totalPages = Math.max(1, Math.ceil(totalFiltered / effectivePageSize));

  const startIndex = isShowAll ? 0 : (currentPage - 1) * effectivePageSize;
  const endIndex = isShowAll ? totalFiltered : Math.min(startIndex + effectivePageSize, totalFiltered);
  const displayedClaims = useMemo(() => {
    return filteredClaims.slice(startIndex, endIndex);
  }, [filteredClaims, startIndex, endIndex]);

  const handleAuditAction = (claimId, action) => {
    onUpdateClaimStatus(claimId, action);
    if (action === 'REJECTED') {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#dc2626', '#d97706', '#059669']
      });
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const parsedData = await parseCSVFile(file);
      setActivePreset('custom');
      onDataLoaded(parsedData, file.name);
      const kQuota = Math.max(1, Math.floor(0.05 * parsedData.length));
      alert(
        `[KONFIRMASI] Berkas valid berhasil dimuat.\n\n` +
        `• Nama Berkas: ${file.name}\n` +
        `• Total Klaim Terbaca: ${parsedData.length.toLocaleString()} klaim\n` +
        `• Kuota Audit 5% Dialokasikan: ${kQuota.toLocaleString()} klaim prioritas teratas\n\n` +
        `Tabel triase di bawah telah diperbarui dengan data berkas Anda.`
      );
    } catch (err) {
      alert(err.message || 'Gagal memproses file CSV.');
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <section id="simulator" className="section-wrapper" style={{ paddingTop: '1rem' }}>
      {/* Header with Clean Editorial Kicker */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div className="section-kicker">
          <span className="accent-bar" />
          <span>Task B dan C: Alokasi Kapasitas Audit 5%</span>
        </div>
        <h2>Meja Kerja Triase Klaim dan Portofolio Audit</h2>
        <p style={{ maxWidth: '800px', fontSize: '1rem', color: 'var(--text-body)', marginTop: '0.4rem' }}>
          Sistem menyortir klaim secara desenden berdasarkan skor risiko terkalibrasi dan mengalokasikan <strong>Top 5% kuota audit ({stats.k} klaim)</strong> untuk verifikasi manual, sedangkan 95% sisa klaim lolos otomatis ke jalur persetujuan cepat (fast-track).
        </p>
      </div>

      {/* Preset Ingestion Bar */}
      <div className="white-card" style={{ padding: '1.25rem 1.5rem', marginBottom: '1.5rem', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={18} color="var(--primary)" />
            <strong style={{ fontSize: '0.9rem', color: 'var(--text-title)' }}>
              Pilih Batch Pengujian Data atau Unggah Berkas Baru:
            </strong>
          </div>
          <span className="badge badge-emerald">Bayes Prior Shift: 5.0%</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
          <button
            className={`btn-pill-filter ${activePreset === 'batch500' ? 'active' : ''}`}
            onClick={() => setActivePreset('batch500')}
            style={{ justifyContent: 'center', padding: '0.6rem 0.9rem', fontSize: '0.82rem', borderRadius: '6px' }}
          >
            <PlayCircle size={15} />
            <span>500 Klaim Uji (Campuran)</span>
          </button>

          <button
            className={`btn-pill-filter ${activePreset === 'highrisk' ? 'active' : ''}`}
            onClick={() => setActivePreset('highrisk')}
            style={{ justifyContent: 'center', padding: '0.6rem 0.9rem', fontSize: '0.82rem', borderRadius: '6px' }}
          >
            <AlertTriangle size={15} />
            <span>Klaster Risiko Tinggi</span>
          </button>

          <button
            className={`btn-pill-filter ${activePreset === 'outpatient' ? 'active' : ''}`}
            onClick={() => setActivePreset('outpatient')}
            style={{ justifyContent: 'center', padding: '0.6rem 0.9rem', fontSize: '0.82rem', borderRadius: '6px' }}
          >
            <CheckCircle2 size={15} />
            <span>Klaim Wajar Rawat Jalan</span>
          </button>

          <button
            className="btn-emerald"
            onClick={() => fileInputRef.current?.click()}
            style={{ justifyContent: 'center', padding: '0.6rem 0.9rem', fontSize: '0.82rem', borderRadius: '6px' }}
          >
            <Upload size={15} />
            <span>Unggah Berkas .CSV</span>
          </button>
          <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".csv" style={{ display: 'none' }} />
        </div>
      </div>

      {/* Main Table Card */}
      <div className="white-card" style={{ padding: '1.5rem', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        
        {/* Table Top Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          {/* Search Input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1 1 240px', maxWidth: '340px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-light)',
              borderRadius: '6px',
              padding: '0.45rem 0.85rem',
              width: '100%'
            }}>
              <Search size={15} color="var(--text-muted)" />
              <input
                type="text"
                placeholder="Cari ID Klaim / Faskes / Diagnosa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-title)',
                  fontSize: '0.82rem',
                  width: '100%',
                  fontFamily: 'var(--font-body)'
                }}
              />
            </div>
          </div>

          {/* Filter Pills & Export */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
            {[
              { id: 'ALL', label: 'Semua' },
              { id: 'AUDIT_ONLY', label: `Top 5% Kuota (${stats.k})` },
              { id: 'FAST_TRACK', label: '95% Fast-Track' },
              { id: 'INCONSISTENT', label: 'Sinyal Ambigu' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setStatusFilter(f.id)}
                className={`btn-pill-filter ${statusFilter === f.id ? 'active' : ''}`}
                style={{ borderRadius: '6px' }}
              >
                {f.label}
              </button>
            ))}

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                color: 'var(--text-title)',
                padding: '0.35rem 0.65rem',
                borderRadius: '6px',
                fontSize: '0.78rem',
                cursor: 'pointer',
                outline: 'none',
                fontWeight: 600
              }}
            >
              <option value="ALL">Semua Faskes</option>
              <option value="A">Tipe A</option>
              <option value="B">Tipe B</option>
              <option value="C">Tipe C</option>
              <option value="D">Tipe D</option>
              <option value="SC">Tipe Khusus (SC)</option>
            </select>

            <button className="btn-outline" onClick={onExportSubmission} style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem', borderRadius: '6px' }}>
              <Download size={13} />
              <span>Unduh .CSV</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div style={{ overflowX: 'auto', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '0.85rem 1rem', width: '60px' }}>Rank</th>
                <th style={{ padding: '0.85rem 1rem' }}>ID Klaim</th>
                <th style={{ padding: '0.85rem 1rem' }}>Fasilitas & KC</th>
                <th style={{ padding: '0.85rem 1rem' }}>Demografi & CMG</th>
                <th style={{ padding: '0.85rem 1rem' }}>LOS & Keparahan</th>
                <th style={{ padding: '0.85rem 1rem' }}>Rasio Klinis</th>
                <th style={{ padding: '0.85rem 1rem' }}>Fraud Probability</th>
                <th style={{ padding: '0.85rem 1rem' }}>Alokasi Triase</th>
                <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Aksi Verifikator</th>
              </tr>
            </thead>
            <tbody>
              {displayedClaims.map((claim) => {
                const isAudit = claim.inAuditPortfolio;
                const isCutoffBorder = isAudit && claim.rank === stats.k && statusFilter === 'ALL';
                const probPct = (claim.fraud_probability * 100).toFixed(2);

                return (
                  <React.Fragment key={claim.claim_id}>
                    <tr
                      onClick={() => onSelectClaim(claim)}
                      style={{
                        borderBottom: '1px solid var(--border-light)',
                        background: isAudit ? '#fff5f5' : '#ffffff',
                        cursor: 'pointer',
                        transition: 'background var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = isAudit ? '#fee2e2' : '#f8fafc')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = isAudit ? '#fff5f5' : '#ffffff')}
                    >
                      {/* Rank */}
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 800, color: isAudit ? '#dc2626' : 'var(--text-muted)' }}>
                        #{claim.rank}
                      </td>

                      {/* Claim ID */}
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--text-title)', fontFamily: 'monospace' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span>{claim.claim_id}</span>
                          {claim.is_contradictory_claim && (
                            <span title="Peringatan: Tanda tangan klinis ambigu / kontradiktif">
                              <AlertTriangle size={14} color="var(--warning)" />
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Faskes */}
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <div style={{ fontWeight: 600, color: 'var(--text-title)' }}>Tipe {claim.typeppk}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>KC {claim.kdkc} : Dati2 {claim.dati2}</div>
                      </td>

                      {/* Demografi */}
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <div>{claim.umur} Thn ({claim.jkpst})</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{claim.cmg} : {claim.diagprimer}</div>
                      </td>

                      {/* LOS / Severity */}
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <div style={{ color: claim.severity_short_stay ? '#dc2626' : 'var(--text-title)', fontWeight: claim.severity_short_stay ? 700 : 500 }}>
                          LOS: {claim.los} Hari
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tingkat {claim.severitylevel}</div>
                      </td>

                      {/* Rasio Klinis */}
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <div style={{ fontSize: '0.75rem' }}>
                          dx/los: <strong style={{ color: claim.dx_per_los > 1.5 ? '#d97706' : 'var(--text-body)' }}>{claim.dx_per_los}</strong>
                        </div>
                        <div style={{ fontSize: '0.75rem' }}>
                          proc/los: <strong style={{ color: claim.proc_per_los > 1.5 ? '#dc2626' : 'var(--text-body)' }}>{claim.proc_per_los}</strong>
                        </div>
                      </td>

                      {/* Probability Meter */}
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', minWidth: '90px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: 800, color: isAudit ? '#dc2626' : '#059669', fontSize: '0.85rem' }}>
                              {probPct}%
                            </span>
                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                              p={claim.fraud_probability.toFixed(4)}
                            </span>
                          </div>
                          <div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{
                              width: `${probPct}%`,
                              height: '100%',
                              background: isAudit ? '#dc2626' : '#059669'
                            }} />
                          </div>
                        </div>
                      </td>

                      {/* Status */}
                      <td style={{ padding: '0.85rem 1rem' }}>
                        {isAudit ? (
                          <span className="badge badge-crimson">
                            <ShieldAlert size={12} />
                            <span>Audit Prioritas</span>
                          </span>
                        ) : (
                          <span className="badge badge-emerald">
                            <CheckCircle2 size={12} />
                            <span>Fast-Track Lolos</span>
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }} onClick={(e) => e.stopPropagation()}>
                        <select
                          value={claim.auditor_status || 'PENDING'}
                          onChange={(e) => handleAuditAction(claim.claim_id, e.target.value)}
                          style={{
                            background: claim.auditor_status === 'APPROVED' ? '#ecfdf5' : claim.auditor_status === 'REJECTED' ? '#fef2f2' : '#ffffff',
                            border: `1px solid ${claim.auditor_status === 'APPROVED' ? '#059669' : claim.auditor_status === 'REJECTED' ? '#dc2626' : '#cbd5e1'}`,
                            color: claim.auditor_status === 'APPROVED' ? '#065f46' : claim.auditor_status === 'REJECTED' ? '#991b1b' : 'var(--text-title)',
                            padding: '0.35rem 0.65rem',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            outline: 'none'
                          }}
                        >
                          <option value="PENDING">Pilih Aksi...</option>
                          <option value="APPROVED">Setujui Klaim</option>
                          <option value="HOLD">Tahan Sementara</option>
                          <option value="REJECTED">Tolak (Fraud)</option>
                        </select>
                      </td>
                    </tr>

                    {/* Cutoff Banner at K mark if inside view */}
                    {isCutoffBorder && (
                      <tr>
                        <td colSpan={9} style={{ padding: '0' }}>
                          <div className="cutoff-banner">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                              <ShieldAlert size={18} />
                              <span>BATAS ALOKASI AUDIT 5.0% (K = {stats.k} KLAIM TERATAS)</span>
                            </div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'none' }}>
                              95% Sisa Klaim di Bawah Garis Ini Lolos Otomatis (Fast-Track)
                            </span>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination & Limit Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.25rem',
          marginTop: '0.5rem',
          borderTop: '1px solid var(--border-light)',
          fontSize: '0.85rem'
        }}>
          {/* Row Count Info */}
          <div style={{ color: 'var(--text-muted)' }}>
            Menampilkan <strong>{totalFiltered > 0 ? startIndex + 1 : 0} - {endIndex}</strong> dari <strong>{totalFiltered}</strong> klaim
            {statusFilter !== 'ALL' && <span style={{ color: 'var(--primary)', marginLeft: '0.4rem' }}>({statusFilter})</span>}
          </div>

          {/* Page Size Selector & Show All Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Tampilkan:</span>
              {[15, 25, 50].map((size) => (
                <button
                  key={size}
                  onClick={() => setPageSize(size)}
                  className={`btn-pill-filter ${pageSize === size ? 'active' : ''}`}
                  style={{ padding: '0.2rem 0.55rem', fontSize: '0.75rem', borderRadius: '6px' }}
                >
                  {size}
                </button>
              ))}
              <button
                onClick={() => setPageSize(isShowAll ? 15 : 'ALL')}
                className={`btn-pill-filter ${isShowAll ? 'active' : ''}`}
                style={{ padding: '0.2rem 0.65rem', fontSize: '0.75rem', fontWeight: 700, borderRadius: '6px' }}
              >
                {isShowAll ? 'Batasi 15 Baris' : `Tampilkan Semua (${totalFiltered})`}
              </button>
            </div>

            {/* Pagination Prev/Next Buttons */}
            {!isShowAll && totalPages > 1 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="btn-outline"
                  style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem', opacity: currentPage === 1 ? 0.4 : 1, borderRadius: '6px' }}
                >
                  <ChevronLeft size={14} />
                  <span>Sebelumnya</span>
                </button>

                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-title)', padding: '0 0.3rem' }}>
                  {currentPage} / {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="btn-outline"
                  style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem', opacity: currentPage === totalPages ? 0.4 : 1, borderRadius: '6px' }}
                >
                  <span>Selanjutnya</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
