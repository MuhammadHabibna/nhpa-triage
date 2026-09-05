import React from 'react';
import { Bar } from 'react-chartjs-2';
import { EDA_MASTER_DATA } from '../data/edaData';
import { Info, ShieldCheck } from 'lucide-react';
import protectionShieldSvg from '../assets/illustrations/protection_shield.svg';

export default function FairnessMonitor() {
  const { gender_fpr, age_fpr, protection_score } = EDA_MASTER_DATA.fairness_benchmarks;

  // Chart Gender FPR
  const genderChartData = {
    labels: ['Laki-laki (L)', 'Perempuan (P)'],
    datasets: [
      {
        label: 'False Positive Rate (FPR_g)',
        data: [gender_fpr.L * 100, gender_fpr.P * 100],
        backgroundColor: ['#0284c7', '#db2777'],
        borderRadius: 6,
      },
    ],
  };

  // Chart Age Groups FPR
  const ageChartData = {
    labels: ['0–17 Tahun', '18–39 Tahun', '40–59 Tahun', '60+ Tahun'],
    datasets: [
      {
        label: 'False Positive Rate (FPR_g)',
        data: [age_fpr['0-17'] * 100, age_fpr['18-39'] * 100, age_fpr['40-59'] * 100, age_fpr['60+'] * 100],
        backgroundColor: ['#059669', '#0284c7', '#d97706', '#7c3aed'],
        borderRadius: 6,
      },
    ],
  };

  const chartOptionsLight = {
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
          label: (context) => `FPR: ${context.parsed.y.toFixed(2)}% klaim wajar terpilih`
        }
      }
    },
    scales: {
      x: { grid: { color: '#f1f5f9' }, ticks: { color: '#64748b' } },
      y: {
        grid: { color: '#f1f5f9' },
        ticks: { color: '#64748b', callback: (val) => `${val}%` },
        min: 0,
        max: 8
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
            <span>Task D • Perlindungan Peserta & Audit Keadilan</span>
          </div>
          <h2>Evaluasi Disparitas Demografi & Keadilan Model</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-body)', marginTop: '0.4rem', lineHeight: 1.6 }}>
            Memastikan bahwa alokasi kuota audit 5% tidak menimbulkan disparitas beban verifikasi pada kelompok demografi terlindungi (Evaluasi False Positive Rate pada klaim sah).
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
                Policyholder Protection Index (PPI)
              </h3>
            </div>
            <p style={{ maxWidth: '700px', fontSize: '0.9rem', color: 'var(--text-body)' }}>
              Tingkat proteksi keadilan demografi dihitung menggunakan formula resmi: <code>1 - max(Gap_gender, Gap_age)</code>.
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
              Disparitas Sangat Minimal (A+)
            </span>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem', marginBottom: '2rem' }}>
        {/* Gender */}
        <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-title)' }}>Disparitas Gender (jkpst)</h4>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)' }}>Gap = {(gender_fpr.gap * 100).toFixed(2)}%</span>
          </div>
          <div style={{ height: '220px' }}>
            <Bar data={genderChartData} options={chartOptionsLight} />
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.85rem' }}>
            Perbedaan FPR antara laki-laki (4.82%) dan perempuan (5.18%) hanya 0.36%, membuktikan netralitas gender model.
          </p>
        </div>

        {/* Age */}
        <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-title)' }}>Disparitas Kelompok Umur</h4>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)' }}>Gap = {(age_fpr.gap * 100).toFixed(2)}%</span>
          </div>
          <div style={{ height: '220px' }}>
            <Bar data={ageChartData} options={chartOptionsLight} />
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.85rem' }}>
            Kelompok anak 0-17 tahun terlindungi dengan FPR terendah (4.12%), sedangkan lansia 60+ (5.70%) sedikit lebih tinggi karena komorbiditas alami.
          </p>
        </div>
      </div>

      {/* Non-discriminatory Guardrails */}
      <div className="white-card" style={{ padding: '1.75rem', background: '#f8fafc', borderRadius: '12px' }}>
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-title)', marginBottom: '1rem' }}>
          <Info size={18} color="var(--primary)" />
          <span>Pedoman Telaah Kontekstual Non-Diskriminatif</span>
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', fontSize: '0.85rem' }}>
          <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <strong style={{ color: 'var(--text-title)' }}>1. Kompleksitas Klinis Alami</strong>
            <p style={{ color: 'var(--text-body)', marginTop: '0.25rem' }}>
              Variasi minor pada lansia disebabkan frekuensi multidiagnosis riil di rumah sakit rujukan, bukan diskriminasi sistemik.
            </p>
          </div>
          <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <strong style={{ color: 'var(--text-title)' }}>2. Perlindungan Pediatrik</strong>
            <p style={{ color: 'var(--text-body)', marginTop: '0.25rem' }}>
              Anak-anak dan bayi terlindungi dari beban over-audit agar tidak menghambat penanganan medis darurat.
            </p>
          </div>
          <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <strong style={{ color: 'var(--text-title)' }}>3. Prosedur Banding Resmi</strong>
            <p style={{ color: 'var(--text-body)', marginTop: '0.25rem' }}>
              Setiap klaim yang ditahan dapat diajukan sanggahan resmi dengan telaah komite etik medis independen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
