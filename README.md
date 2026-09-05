# 🛡️ NHPA Triage — BPJS Health Insurance Fraud Detection & 5% Audit Allocation

> **Interactive Decision Support Dashboard for High-Stakes Medical Claim Auditing**  
> Developed for **Data Analytics Competition (DAC) — Pesta Rakyat Statistika (PRS) ITS 2026**  
> **Team:** Sains Data, Universitas Negeri Surabaya (UNESA)  
> **Authors:** Ferliyana Ronnan & Muhammad Habib Nur Aiman

[![Vite](https://img.shields.io/badge/Vite-8.2.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.5.1-FF6384?logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 📌 Executive Summary

Under the regulatory mandate of the **Nusantara Health Protection Agency (NHPA)**, insurance verification teams must operate under a strict **5% audit capacity constraint** ($K = \lfloor 0.05 \times N \rfloor$). Traditional random inspections capture only ~50% fraud yield, leading to massive financial leakage and administrative fatigue.

**NHPA Triage** combines forensic feature engineering, a 3-algorithm gradient boosted ensemble (LightGBM + XGBoost + CatBoost), isotonic probability calibration with Bayesian prior-shift correction, SHAP local explainability, and demographic parity safeguards to deliver:

- **0.9655 Normalized Recall @ 5%** (Captures **7,730 of 8,008** audited claims as confirmed fraud — **1.92x Lift** over random inspection).
- **99.86% Policyholder Protection Score** ($0.99856$), guaranteeing algorithmic fairness across gender and age groups.
- **Explainable AI (XAI)** decomposition for every claim alert to empower medical verifiers during dispute audits.

---

## 🚀 Key Modules & Dashboard Features

1. **Executive KPI Command Center:** Real-time visibility into historical claims ($N = 160,174$), operational prevalence ($5.00\%$), NormalizedRecall@5%, and protection scores.
2. **Forensic EDA Canvas (7 Phases):** Clinical length-of-stay anomaly detection, procedure complexity ratios, point-biserial correlations, and facility volume clusters.
3. **Live 5% Triage Simulator & Workbench:** Interactive claim search, calibrated probability scoring, dynamic audit threshold slider, and CSV export for operational inspectors.
4. **XAI Claim Decomposer (SHAP Waterfall):** Transparent attribution of risk factors for any contested medical claim.
5. **Demographic Parity & Fairness Monitor:** Real-time auditing of False Positive Rates ($FPR_g$) across gender, age groups, facility types (`typeppk`), and geographic regions (`dati2`).
6. **Governance & SOP Verification Guide:** Standard Operating Procedures aligned with BPJS fraud prevention circulars.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite
- **Visuals & Charts:** Chart.js + react-chartjs-2
- **Icons:** Lucide React
- **Styling:** Modern Vanilla CSS Design Tokens (Glassmorphism, Nordic Slate, Clean White Theme)
- **Deployment:** Vercel SPA Ready

---

## 💻 Local Development Setup

```bash
# Clone repository
git clone https://github.com/MuhammadHabibna/nhpa-triage.git
cd nhpa-triage

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## 📄 License & Attribution

Developed for academic and competition evaluation in **DAC PRS ITS 2026**.  
Copyright © 2026 Sains Data UNESA. All rights reserved.
