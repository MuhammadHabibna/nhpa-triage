import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { EDA_MASTER_DATA } from '../data/edaData';
import { Info, ShieldCheck, Users, Building2 } from 'lucide-react';
import protectionShieldSvg from '../assets/illustrations/protection_shield.svg';

export default function FairnessMonitor() {
  const [activeTab, setActiveTab] = useState('demographics'); // 'demographics' | 'facilities'
  const { baseline_fpr, gender_fpr, age_fpr, protection_score, facility_disparity, regional_disparity } = EDA_MASTER_DATA.fairness_benchmarks;

  // Chart 1: Gender FPR (Attachment 4a Left)
  const genderChartData = {
    labels: ['Perempuan (P)', 'Laki-laki (L)'],
    datasets: [
      {
        label: 'FPR Kelompok (%)',
        data: [gender_fpr.P * 100, gender_fpr.L * 100],
        backgroundColor: ['#db2777', '#0284c7'],
        borderRadius: 6,
        barThickness: 45
      },
    ],
  };

  // Chart 2: Age Groups FPR (Attachment 4a Right)
  const ageChartData = {
    labels: ['0-17 Thn (Pediatrik)', '60+ Thn (Lansia)', '40-59 Thn (Madya)', '18-39 Thn (Muda)'],
    datasets: [
      {
        label: 'FPR Kelompok (%)',
        data: [
          age_fpr['0-17'] * 100,
          age_fpr['60+'] * 100,
          age_fpr['40-59'] * 100,
          age_fpr['18-39'] * 100
        ],
        backgroundColor: ['#059669', '#7c3aed', '#d97706', '#0284c7'],
        borderRadius: 6,
        barThickness: 32
      },
    ],
  };

  // Chart 3: Facility Types FPR (Attachment 4b Left: Horizontal Bar)
  const facilityChartData = {
    labels: facility_disparity.map(f => `${f.type} (${f.label})`),
    datasets: [
      {
        label: 'False Positive Rate (%)',
        data: facility_disparity.map(f => (f.fpr * 100).toFixed(3)),
        backgroundColor: facility_disparity.map(f => f.fpr > 0.01 ? '#dc2626' : (f.fpr === 0 ? '#10b981' : '#0284c7')),
        borderRadius: 4,
        barThickness: 16
      }
    ]
  };

  // Chart 4: Regional Top-10 FPR (Attachment 4b Right: Horizontal Bar)
  const regionalChartData = {
    labels: regional_disparity.map(r => r.label),
    datasets: [
      {
        label: 'False Positive Rate (%)',
        data: regional_disparity.map(r => (r.fpr * 100).toFixed(3)),
        backgroundColor: regional_disparity.map(r => r.fpr > 0.01 ? '#dc2626' : (r.fpr === 0 ? '#10b981' : '#0284c7')),
        borderRadius: 4,
        barThickness: 16
      }
    ]
  };

  const demographicOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0f172a',
        titleColor: '#ffffff',
        bodyColor: '#e2e8f0',
        padding: 10,
        cornerRadius: 6,
        callbacks: {
          label: (context) => `FPR: ${Number(context.parsed.y).toFixed(3)}% (Baseline: 0.348%)`
        }
      }
    },
    scales: {
      x: { grid: { color: '#f1f5f9' }, ticks: { color: '#64748b' } },
      y: {
        grid: { color: '#f1f5f9' },
        ticks: { color: '#64748b', callback: (val) => `${val}%` },
        min: 0,
        max: 0.6
      }
    }
  };

  const horizontalBarOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0f172a',
        titleColor: '#ffffff',
        bodyColor: '#e2e8f0',
        padding: 10,
        cornerRadius: 6,
        callbacks: {
          label: (context) => `FPR: ${Number(context.parsed.x).toFixed(3)}% (Baseline: 0.348%)`
        }
      }
    },
    scales: {
      x: {
        grid: { color: '#f1f5f9' },
        ticks: { color: '#64748b', callback: (val) => `${val}%` },
        min: 0,
        max: 3.5
      },
      y: {
        grid: { color: '#f1f5f9' },
        ticks: { color: '#334155', font: { size: 11, weight: 600 } }
      }
    }
  };

  return (
    <section id="fairness" className="section-wrapper">
      {/* Header with Clean Editorial Kicker */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <div className="section-kicker">
            <span className="accent-bar" />
            <span>Task D: Perlindungan Peserta dan Audit Keadilan Algoritmik</span>
          </div>
          <h2>Evaluasi Disparitas Demografi dan Keadilan Model</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-body)', marginTop: '0.4rem', lineHeight: 1.6 }}>
            Memastikan bahwa alokasi kuota audit 5% tidak menimbulkan disparitas beban verifikasi pada kelompok demografi terlindungi. Evaluasi False Positive Rate (FPR) dihitung khusus pada seluruh 79,971 klaim sah (legitimate claims).
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '320px' }}>
            <img src={protectionShieldSvg} alt="Protection Shield Illustration" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>

      {/* Top Banner: Protection Index Score */}
      <div className="white-card" style={{
        padding: '2rem',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)',
        border: '1px solid #a7f3d0',
        borderRadius: '12px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <ShieldCheck size={26} color="var(--primary)" />
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-title)' }}>
                Policyholder Protection Score (PPS)
              </h3>
            </div>
            <p style={{ maxWidth: '700px', fontSize: '0.9rem', color: 'var(--text-body)' }}>
              Tingkat proteksi keadilan demografi dihitung menggunakan formula resmi: <code>1 - max(Gap_gender, Gap_age) = 1 - 0.00144 = 0.99856</code>.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '1.25rem 2rem',
            borderRadius: '10px',
            border: '1px solid #a7f3d0',
            textAlign: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '0.73rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Fairness Protection Score
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
              {(protection_score * 100).toFixed(2)}%
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>
              Rasio Paritas Sempurna (A+)
            </span>
          </div>
        </div>
      </div>

      {/* Sub-Tab Selector: Demographics vs Facilities/Regional */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setActiveTab('demographics')}
          className={`btn-pill-filter ${activeTab === 'demographics' ? 'active' : ''}`}
          style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Users size={16} />
          <span>1. Demografi: Gender dan Kelompok Usia (Attachment 4a)</span>
        </button>

        <button
          onClick={() => setActiveTab('facilities')}
          className={`btn-pill-filter ${activeTab === 'facilities' ? 'active' : ''}`}
          style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Building2 size={16} />
          <span>2. Provider dan Regional: Tipe Faskes dan Wilayah Top-10 (Attachment 4b)</span>
        </button>
      </div>

      {/* Tab 1: Demographics Grid (Attachment 4a) */}
      {activeTab === 'demographics' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem', marginBottom: '2rem' }}>
          {/* Gender */}
          <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-title)' }}>Disparitas Gender (jkpst)</h4>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)', background: 'var(--primary-light)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                Gap: {gender_fpr.gap_pct} (0.00018)
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Baseline FPR Nasional: 0.348% (278 FP dari 79,971 klaim sah)
            </div>
            <div style={{ height: '220px' }}>
              <Bar data={genderChartData} options={demographicOptions} />
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-body)', marginTop: '1rem', background: '#f8fafc', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
              Perempuan: 0.339% (147 FP dari 43,337 klaim sah) vs Laki-laki: 0.358% (131 FP dari 36,634 klaim sah). Rasio keseimbangan mencapai 99.98%.
            </div>
          </div>

          {/* Age */}
          <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-title)' }}>Disparitas Kelompok Umur (umur)</h4>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)', background: 'var(--primary-light)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                Gap: {age_fpr.gap_pct} (0.00144)
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Baseline FPR Nasional: 0.348% (Garis Batas Acuan Paritas)
            </div>
            <div style={{ height: '220px' }}>
              <Bar data={ageChartData} options={demographicOptions} />
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-body)', marginTop: '1rem', background: '#f8fafc', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
              Anak 0-17 tahun terlindungi dengan FPR terendah (0.265%, 54 FP). Lansia 60+ terlindungi pada FPR 0.340% (51 FP), berada di bawah rata-rata nasional.
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Facilities and Regions (Attachment 4b) */}
      {activeTab === 'facilities' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem', marginBottom: '2rem' }}>
          {/* Facility Types */}
          <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-title)' }}>Tipe Fasilitas Kesehatan (typeppk)</h4>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#dc2626', background: '#fee2e2', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                KM Outlier: 3.18%
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Garis Vertikal Baseline: 0.348% (RS Kelas B 0.33%, RS Kelas C 0.41%)
            </div>
            <div style={{ height: '260px' }}>
              <Bar data={facilityChartData} options={horizontalBarOptions} />
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-body)', marginTop: '0.75rem', background: '#f8fafc', padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
              Klinik Madya (KM) mencatat FPR 3.18% (39 FP dari 1,225 klaim) akibat konsentrasi tindakan rawat jalan kompleks (case-mix concentration), bukan bias diskriminatif institusional.
            </div>
          </div>

          {/* Regional Top-10 */}
          <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-title)' }}>Wilayah Regional Terbesar (dati2 Top-10)</h4>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#dc2626', background: '#fee2e2', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                Region 221 Outlier: 2.43%
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Empat Wilayah Terbesar (38, 112, 113, 117): FPR 0.00% (0 FP)
            </div>
            <div style={{ height: '260px' }}>
              <Bar data={regionalChartData} options={horizontalBarOptions} />
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-body)', marginTop: '0.75rem', background: '#f8fafc', padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
              Wilayah 38, 112, 113, dan 117 yang menampung 5,929 klaim sah mencatat paritas sempurna dengan 0 klaim salah audit (0.00% FPR). Disparitas terpusat di Region 221 (17 FP).
            </div>
          </div>
        </div>
      )}

      {/* Non-discriminatory Guardrails */}
      <div className="white-card" style={{ padding: '1.75rem', background: '#f8fafc', borderRadius: '12px' }}>
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-title)', marginBottom: '1rem' }}>
          <Info size={18} color="var(--primary)" />
          <span>Pedoman Telaah Kontekstual Non-Diskriminatif</span>
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', fontSize: '0.85rem' }}>
          <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <strong style={{ color: 'var(--text-title)' }}>1. Perlindungan Kelompok Rentan</strong>
            <p style={{ color: 'var(--text-body)', marginTop: '0.25rem' }}>
              Anak-anak (0.265%) dan lansia (0.340%) mencatat tingkat audit keliru di bawah baseline nasional (0.348%), menjamin tidak ada hambatan administratif bagi populasi rentan.
            </p>
          </div>
          <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <strong style={{ color: 'var(--text-title)' }}>2. Cerminan Bauran Kasus Medis</strong>
            <p style={{ color: 'var(--text-body)', marginTop: '0.25rem' }}>
              Disparitas pada faskes KM dan Region 221 mencerminkan variasi kodifikasi klinis dan konsentrasi kasus, bukan diskriminasi sistemik model terhadap provider.
            </p>
          </div>
          <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <strong style={{ color: 'var(--text-title)' }}>3. Prosedur Banding Resmi</strong>
            <p style={{ color: 'var(--text-body)', marginTop: '0.25rem' }}>
              Setiap klaim yang masuk ke kuota audit 5% tetap ditelaah oleh verifikator medis manusia independen sebelum dilakukan penundaan pembayaran.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
