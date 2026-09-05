import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { EDA_MASTER_DATA } from '../data/edaData';
import { AlertCircle, Stethoscope, Network, Scale, Flame } from 'lucide-react';
import dataAnalysisSvg from '../assets/illustrations/data_analysis.svg';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function EDACanvas() {
  const [activeSubTab, setActiveSubTab] = useState('contradictions');

  // Chart 1: Contradictory Records Donut
  const contradictoryDonutData = {
    labels: ['Klaim Fraud (Label 1)', 'Klaim Wajar (Label 0)'],
    datasets: [
      {
        data: [EDA_MASTER_DATA.contradictory_records.fraud_in_ambiguous, EDA_MASTER_DATA.contradictory_records.legit_in_ambiguous],
        backgroundColor: ['#dc2626', '#0284c7'],
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  // Chart 2: Severity Distribution Bar Chart
  const severityLabels = ['Tingkat 0 (Rawat Jalan)', 'Tingkat 1 (Ringan)', 'Tingkat 2 (Sedang)', 'Tingkat 3 (Berat)'];
  const severityBarData = {
    labels: severityLabels,
    datasets: [
      {
        label: 'Klaim Wajar (Label 0)',
        data: [70120, 4820, 3100, 1931],
        backgroundColor: 'rgba(2, 132, 199, 0.75)',
        borderColor: '#0284c7',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Klaim Fraud (Label 1)',
        data: [69400, 5210, 3420, 2173],
        backgroundColor: 'rgba(220, 38, 38, 0.75)',
        borderColor: '#dc2626',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  // Chart 3: Clinical Paradox Fraud Rate Comparison
  const paradoxBarData = {
    labels: ['Severity >= 2 & LOS = 0', 'Prosedur >= 3 & LOS <= 1', 'Baseline Populasi (Train)'],
    datasets: [
      {
        label: 'Tingkat Kecurangan (% Fraud)',
        data: [
          EDA_MASTER_DATA.clinical_paradox.severity_high_los_zero.fraud_rate,
          EDA_MASTER_DATA.clinical_paradox.many_proc_short_stay.fraud_rate,
          50.07
        ],
        backgroundColor: ['#dc2626', '#d97706', '#94a3b8'],
        borderRadius: 6,
      }
    ]
  };

  // Chart 4: Calibration Curve (Raw vs Isotonic + Prior Corrected)
  const calibrationLineData = {
    labels: ['0.0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0'],
    datasets: [
      {
        label: 'Kalibrasi Sempurna (Ideal)',
        data: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        borderColor: '#94a3b8',
        borderDash: [5, 5],
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Raw Model Score (Train Prior 50%)',
        data: [0.08, 0.18, 0.29, 0.41, 0.50, 0.62, 0.71, 0.82, 0.89, 0.95, 0.99],
        borderColor: '#dc2626',
        backgroundColor: 'rgba(220, 38, 38, 0.05)',
        borderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'Isotonic + Prior Shift (Operasional 5%)',
        data: [0.002, 0.008, 0.019, 0.034, 0.050, 0.082, 0.145, 0.280, 0.510, 0.840, 0.980],
        borderColor: '#059669',
        backgroundColor: 'rgba(5, 150, 105, 0.1)',
        borderWidth: 3,
        pointRadius: 5,
      }
    ]
  };

  const chartOptionsLight = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#334155', font: { family: 'Plus Jakarta Sans', size: 12, weight: 600 } }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        titleColor: '#ffffff',
        bodyColor: '#e2e8f0',
        padding: 10,
        cornerRadius: 6
      }
    },
    scales: {
      x: {
        grid: { color: '#f1f5f9' },
        ticks: { color: '#64748b' }
      },
      y: {
        grid: { color: '#f1f5f9' },
        ticks: { color: '#64748b' }
      }
    }
  };

  return (
    <section id="eda" className="section-wrapper">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          {/* Clean Editorial Kicker */}
          <div className="section-kicker">
            <span className="accent-bar" />
            <span>Task A • Analisis Data Eksploratif (7 Fase)</span>
          </div>
          <h2>Bukti Empiris Karakteristik & Anomali Klaim</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-body)', marginTop: '0.4rem', lineHeight: 1.6 }}>
            Eksplorasi menyeluruh pada 160.174 klaim historis untuk mengidentifikasi rekod ambigu, anomali rasio prosedur klinis, dan kantung kemurnian fasilitas kesehatan.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '340px' }}>
            <img src={dataAnalysisSvg} alt="Data Analysis Illustration" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>

      {/* Sub-navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {[
          { id: 'contradictions', label: '1. Rekod Kontradiktif (5.361 Baris)', icon: AlertCircle },
          { id: 'clinical', label: '2. Spektrum & Paradoks Klinis', icon: Stethoscope },
          { id: 'clusters', label: '3. Klaster Faskes & Purity Pockets', icon: Network },
          { id: 'calibration', label: '4. Kalibrasi & Prior Shift (5%)', icon: Scale },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`btn-pill-filter ${isActive ? 'active' : ''}`}
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.82rem', borderRadius: '6px' }}
            >
              <Icon size={15} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Contradictions */}
      {activeSubTab === 'contradictions' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
          <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-title)', marginBottom: '0.5rem' }}>
              <AlertCircle size={20} color="var(--warning)" />
              <span>5.361 Rekod Kembar dengan Label Bertolak Belakang</span>
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginBottom: '1.5rem' }}>
              Ditemukan <strong>1.737 kelompok</strong> tanda tangan klaim yang 100% identik di fitur klinis dan administratif, namun memiliki label berlawanan (56.46% fraud vs 43.54% sah).
            </p>

            <div style={{ height: '240px', position: 'relative' }}>
              <Doughnut data={contradictoryDonutData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#334155' } } } }} />
            </div>
          </div>

          <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
            <h4 style={{ marginBottom: '0.85rem', color: 'var(--text-title)' }}>Contoh Kasus Rekod Ambigu (Data Latih train.csv)</h4>
            <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '1rem', border: '1px solid var(--border-light)', fontSize: '0.82rem', fontFamily: 'monospace', marginBottom: '1.25rem' }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>// Grup Klaim Bayi Identik (KC 101, Faskes A, LOS 0 Hari, Umur 0)</div>
              <div>• Baris 3472: CLM_CEC50733AD28C0 ➔ <span style={{ color: '#dc2626', fontWeight: 700 }}>Label 1 (FRAUD)</span></div>
              <div>• Baris 4803: CLM_B8C37A19DEE5A1 ➔ <span style={{ color: '#dc2626', fontWeight: 700 }}>Label 1 (FRAUD)</span></div>
              <div>• Baris 111825: CLM_FC19F01D1A2729 ➔ <span style={{ color: '#059669', fontWeight: 700 }}>Label 0 (WAJAR)</span></div>
            </div>

            <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px', padding: '0.9rem', fontSize: '0.85rem', color: '#92400e' }}>
              <strong>Mitigasi Rekayasa Fitur (Task B):</strong> Pipeline membangun indikator <code style={{ background: '#fef3c7', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>is_contradictory_claim</code> dan <code style={{ background: '#fef3c7', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>kdkc_inconsistency</code> agar auditor mendapatkan sinyal verifikasi manual berkas fisik.
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Clinical Paradox */}
      {activeSubTab === 'clinical' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
          <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-title)', marginBottom: '0.5rem' }}>
              <Flame size={20} color="var(--danger)" />
              <span>Paradoks Tingkat Keparahan vs Durasi Rawat</span>
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginBottom: '1.25rem' }}>
              Klaim dengan <strong>Severity Level 2/3 tapi LOS = 0 hari</strong> memiliki fraud rate mencapai <strong>77.6%</strong>, jauh melampaui rata-rata populasi.
            </p>

            <div style={{ height: '240px' }}>
              <Bar data={paradoxBarData} options={chartOptionsLight} />
            </div>
          </div>

          <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
            <h4 style={{ marginBottom: '0.85rem', color: 'var(--text-title)' }}>Distribusi Keparahan Klinis (Severity Level)</h4>
            <div style={{ height: '240px' }}>
              <Bar data={severityBarData} options={chartOptionsLight} />
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Clusters */}
      {activeSubTab === 'clusters' && (
        <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', color: 'var(--text-title)' }}>
            <Network size={20} color="var(--secondary)" />
            <span>Kantung Kemurnian (Purity Pockets) & Profil Faskes</span>
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginBottom: '1.5rem' }}>
            Klaster kombinasi <code>kdkc + cmg + typeppk + diagprimer</code> membentuk <strong>618+ kantung kemurnian</strong> dengan konsentrasi fraud &gt;95%.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: '#fef2f2', padding: '1.25rem', borderRadius: '8px', border: '1px solid #fecaca' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#991b1b', textTransform: 'uppercase' }}>Faskes Tipe A</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#dc2626', fontFamily: 'var(--font-heading)' }}>58.2% Fraud</div>
              <div style={{ fontSize: '0.8rem', color: '#b91c1c' }}>Kepadatan prosedur bedah tertinggi</div>
            </div>

            <div style={{ background: '#ecfdf5', padding: '1.25rem', borderRadius: '8px', border: '1px solid #a7f3d0' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#065f46', textTransform: 'uppercase' }}>Faskes Tipe D / Klinik</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#059669', fontFamily: 'var(--font-heading)' }}>41.5% Fraud</div>
              <div style={{ fontSize: '0.8rem', color: '#047857' }}>Dominan klaim rawat jalan wajar</div>
            </div>

            <div style={{ background: '#fffbeb', padding: '1.25rem', borderRadius: '8px', border: '1px solid #fde68a' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#92400e', textTransform: 'uppercase' }}>Kantor Cabang Berisiko</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d97706', fontFamily: 'var(--font-heading)' }}>KC 101, 202, 203</div>
              <div style={{ fontSize: '0.8rem', color: '#b45309' }}>Hotspot tanda tangan kontradiktif</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Calibration */}
      {activeSubTab === 'calibration' && (
        <div className="white-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', color: 'var(--text-title)' }}>
            <Scale size={20} color="var(--primary)" />
            <span>Kurva Reliabilitas Kalibrasi Probabilitas (Prior Shift 5%)</span>
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginBottom: '1.5rem' }}>
            Mengalibrasi raw output model menggunakan <strong>Isotonic Regression + Bayes Prior Shift</strong> agar skor mencerminkan prevalensi dunia nyata 5.0%.
          </p>

          <div style={{ height: '280px' }}>
            <Line data={calibrationLineData} options={chartOptionsLight} />
          </div>
        </div>
      )}
    </section>
  );
}
