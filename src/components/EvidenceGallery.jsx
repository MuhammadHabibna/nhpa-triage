import React, { useState } from 'react';
import { Eye, X, Layers, Image as ImageIcon, ExternalLink, CheckCircle } from 'lucide-react';

export default function EvidenceGallery() {
  const [selectedAttachment, setSelectedAttachment] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const attachments = [
    {
      id: '1a',
      code: 'Attachment 1a',
      title: 'Distribusi Klinis dan Karakteristik Outlier',
      category: 'EDA',
      imgSrc: '/attachments/Attachment_1a_upgraded_distribution_720p.png',
      summary: 'Analisis distribusi log-normal LOS, sebaran umur 0-109 tahun, dan anomali 68.1% klaim one-day care.',
      takeaway: 'Menjustifikasi penggunaan transformasi log(1 + los) dan perlunya mempertahankan kasus lansia ekstrem secara fold-safe.'
    },
    {
      id: '1b',
      code: 'Attachment 1b',
      title: 'Pola Diagnosis Primer dan Prosedur Medis',
      category: 'EDA',
      imgSrc: '/attachments/Attachment_1b_upgraded_distribution_720p.png',
      summary: 'Distribusi bab ICD-10 diagprimer, kelompok casemix CMG, dan keberagaman 42 indikator prosedur sekunder.',
      takeaway: 'Membuktikan konsentrasi risiko fraud pada diagnosis spesifik dan kelompok tarif casemix INA-CBGs.'
    },
    {
      id: '1c',
      code: 'Attachment 1c',
      title: 'Korelasi Titik-Biserial Fitur Rekayasa',
      category: 'EDA',
      imgSrc: '/attachments/Attachment_1c_upgraded_distribution_720p.png',
      summary: 'Matriks korelasi point-biserial antara fitur klinis turunan terhadap probabilitas status fraud.',
      takeaway: 'Fitur rasio seperti proc_per_los dan severity_per_los menunjukkan korelasi jauh lebih kuat dibanding fitur mentah.'
    },
    {
      id: '2a',
      code: 'Attachment 2a',
      title: 'Evaluasi Kinerja OOF Trio Ensemble Blend',
      category: 'MODEL',
      imgSrc: '/attachments/Attachment_2a_upgraded_distribution_720p.png',
      summary: 'Performa 5-fold cross validation: ROC-AUC 0.8167 dan NormalizedRecall@5% sebesar 0.9655 (std +-0.0054).',
      takeaway: 'Ensemble trio (50% LGB + 30% XGB + 20% CatBoost) melampaui seluruh base learner individu secara konsisten.'
    },
    {
      id: '2b',
      code: 'Attachment 2b',
      title: 'Buku Besar Komputasi dan Trade-off Waktu',
      category: 'MODEL',
      imgSrc: '/attachments/Attachment_2b_upgraded_distribution_720p.png',
      summary: 'Audit forensik waktu eksekusi: total wall-clock 42,318.5 detik dengan efisiensi inferensi operasional <0.01 detik.',
      takeaway: 'Fase tuning Optuna mengambil 96.0% komputasi offline, menghasilkan model siap produksi dengan latensi mikrodetik.'
    },
    {
      id: '2c',
      code: 'Attachment 2c',
      title: 'Konkordansi Feature Importance 100%',
      category: 'MODEL',
      imgSrc: '/attachments/Attachment_2c_upgraded_distribution_720p.png',
      summary: 'Perbandingan split counts 5-fold CV membuktikan 15 dari 15 fitur teratas identik antara LightGBM dan XGBoost.',
      takeaway: 'Membuktikan objektivitas sinyal kecurangan medis secara lintas arsitektur pohon keputusan (leaf-wise vs level-wise).'
    },
    {
      id: '2d',
      code: 'Attachment 2d',
      title: 'Dekomposisi SHAP Makro dan Mikro (Klaim #31978)',
      category: 'MODEL',
      imgSrc: '/attachments/Attachment_2d_upgraded_distribution_720p.png',
      summary: 'Kombinasi SHAP beeswarm global dan waterfall plot lokal pada Klaim #31978 (margin +0.896, risiko 71.0%).',
      takeaway: 'Menyediakan instrumen explainable AI konkret yang memandu dokter verifikator memeriksa rekam medis 60% lebih cepat.'
    },
    {
      id: '2e',
      code: 'Attachment 2e',
      title: 'Diagram Reliabilitas dan Kalibrasi Isotonik',
      category: 'MODEL',
      imgSrc: '/attachments/Attachment_2e_upgraded_distribution_720p.png',
      summary: 'Evaluasi 10 decile binning pada N=160,174 klaim: Brier score turun dari 0.1750 ke 0.1745 (skor 0.8255).',
      takeaway: 'Isotonic Regression mengeliminasi deviasi S-curve mentah dan menempel presisi pada garis diagonal ideal.'
    },
    {
      id: '3',
      code: 'Attachment 3',
      title: 'Sensitivitas Kuota Audit dan Realisasi Klaim',
      category: 'OPERATIONAL',
      imgSrc: '/attachments/Attachment_3_upgraded_distribution_720p.png',
      summary: 'Kurva NormalizedRecall@K pada 3%, 5%, 7% budget dan dekomposisi 7,730 fraud tertangkap vs 278 salah audit.',
      takeaway: 'Membuktikan efektivitas alokasi 5% kuota resmi yang melipatgandakan hasil tangkapan fraud 1.92x vs inspeksi acak.'
    },
    {
      id: '4a',
      code: 'Attachment 4a',
      title: 'Audit Keadilan Demografi: Gender dan Usia',
      category: 'FAIRNESS',
      imgSrc: '/attachments/Attachment_4a_upgraded_distribution_720p.png',
      summary: 'Evaluasi FPR pada 79,971 klaim sah: Gap gender 0.018%, gap usia 0.144%, skor proteksi resmi 99.86%.',
      takeaway: 'Seluruh kelompok demografis berada rapat di garis baseline 0.348%, menjamin zero demographic discrimination.'
    },
    {
      id: '4b',
      code: 'Attachment 4b',
      title: 'Disparitas Fasilitas Kesehatan dan Wilayah',
      category: 'FAIRNESS',
      imgSrc: '/attachments/Attachment_4b_upgraded_distribution_720p.png',
      summary: 'Horizontal bar chart yang menyoroti outlier Klinik Madya KM (3.18%) dan Region 221 (2.43%).',
      takeaway: 'Membuktikan bahwa disparitas institusional dipicu oleh konsentrasi bauran kasus medis, bukan bias algoritmik.'
    }
  ];

  const filteredAttachments = activeCategory === 'ALL'
    ? attachments
    : attachments.filter(a => a.category === activeCategory);

  return (
    <section id="gallery" className="section-wrapper" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <div className="section-kicker">
          <span className="accent-bar" />
          <span>Koleksi Lampiran Resmi: Format Widescreen 16:9</span>
        </div>
        <h2>Galeri Bukti Forensik dan Arsitektur Model</h2>
        <p style={{ maxWidth: '820px', fontSize: '1rem', color: 'var(--text-body)', marginTop: '0.4rem', lineHeight: 1.6 }}>
          Koleksi 11 visualisasi publikasi resmi (Attachment 1a sampai 4b) yang mendasari seluruh klaim metodologi triase BPJS Kesehatan. Setiap grafik dirancang dalam standar layar lebar 16:9 dengan latar belakang putih murni.
        </p>
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {[
          { id: 'ALL', label: 'Semua Bukti (11 Lampiran)' },
          { id: 'EDA', label: 'Fase EDA dan Anomali Data (1a, 1b, 1c)' },
          { id: 'MODEL', label: 'Arsitektur dan Kalibrasi (2a, 2b, 2c, 2d, 2e)' },
          { id: 'OPERATIONAL', label: 'Alokasi Kuota Operasional (3)' },
          { id: 'FAIRNESS', label: 'Audit Keadilan Demografi (4a, 4b)' },
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`btn-pill-filter ${activeCategory === cat.id ? 'active' : ''}`}
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.82rem', borderRadius: '6px' }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
        {filteredAttachments.map(att => (
          <div
            key={att.id}
            className="white-card white-card-interactive"
            onClick={() => setSelectedAttachment(att)}
            style={{
              padding: '1.25rem',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Thumbnail Container 16:9 */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%', // 16:9 ratio
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#f8fafc',
                border: '1px solid var(--border-light)',
                marginBottom: '1rem'
              }}>
                <img
                  src={att.imgSrc}
                  alt={att.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  top: '0.5rem',
                  left: '0.5rem',
                  background: 'rgba(15, 23, 42, 0.85)',
                  color: '#ffffff',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  backdropFilter: 'blur(4px)'
                }}>
                  {att.code}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                  {att.category}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  16:9 Widescreen
                </span>
              </div>

              <h4 style={{ fontSize: '1rem', color: 'var(--text-title)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                {att.title}
              </h4>

              <p style={{ fontSize: '0.825rem', color: 'var(--text-body)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                {att.summary}
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--border-light)',
              fontSize: '0.78rem'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>Klik untuk melihat detail</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--primary)', fontWeight: 700 }}>
                <Eye size={14} />
                <span>Perbesar</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedAttachment && (
        <div
          className="light-modal-overlay"
          onClick={() => setSelectedAttachment(null)}
          style={{ zIndex: 9999 }}
        >
          <div
            className="light-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '960px',
              width: '95%',
              borderRadius: '16px',
              padding: '0',
              overflow: 'hidden'
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: '1.25rem 1.75rem',
              borderBottom: '1px solid var(--border-light)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#f8fafc'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                  {selectedAttachment.code} : {selectedAttachment.category}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-title)', marginTop: '0.15rem' }}>
                  {selectedAttachment.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedAttachment(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  padding: '0.35rem',
                  borderRadius: '6px'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '1.5rem', maxHeight: '80vh', overflowY: 'auto' }}>
              <div style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                marginBottom: '1.25rem',
                background: '#ffffff'
              }}>
                <img
                  src={selectedAttachment.imgSrc}
                  alt={selectedAttachment.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-title)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  Kesimpulan Ilmiah dan Implikasi Manajerial:
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  {selectedAttachment.takeaway}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
