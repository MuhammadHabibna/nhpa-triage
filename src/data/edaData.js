// Precomputed EDA and Validation Statistics for NHPA Triage
// Source of truth: notebook_info mcgg.ipynb and inpo emcigege.ipynb
export const EDA_MASTER_DATA = {
  "total_train_records": 160174,
  "train_fraud_rate": 0.5007,
  "severity_distribution": {
    "0": {
      "0": 51508,
      "1": 21947,
      "2": 4844,
      "3": 1672
    },
    "1": {
      "0": 55679,
      "1": 16932,
      "2": 5137,
      "3": 2455
    }
  },
  "age_groups_distribution": {
    "0-17": {
      "legit": 20360,
      "fraud": 19765
    },
    "18-39": {
      "legit": 20786,
      "fraud": 20605
    },
    "40-59": {
      "legit": 23823,
      "fraud": 24021
    },
    "60+": {
      "legit": 15002,
      "fraud": 15812
    }
  },
  "gender_distribution": {
    "L": {
      "legit": 36634,
      "fraud": 37650
    },
    "P": {
      "legit": 43337,
      "fraud": 42553
    }
  },
  "typeppk_distribution": {
    "SB": { "legit": 5648, "fraud": 4422 },
    "C ": { "legit": 15280, "fraud": 18613 },
    "B ": { "legit": 14776, "fraud": 15979 },
    "SC": { "legit": 22229, "fraud": 18000 },
    "A ": { "legit": 3711, "fraud": 3118 },
    "SD": { "legit": 5784, "fraud": 6582 },
    "I3": { "legit": 1986, "fraud": 1817 },
    "GD": { "legit": 57, "fraud": 167 },
    "I2": { "legit": 1536, "fraud": 1151 },
    "KO": { "legit": 84, "fraud": 54 },
    "D ": { "legit": 1735, "fraud": 2977 },
    "KL": { "legit": 724, "fraud": 656 },
    "KI": { "legit": 1517, "fraud": 1650 },
    "KM": { "legit": 1225, "fraud": 2215 },
    "I4": { "legit": 1176, "fraud": 1175 },
    "I1": { "legit": 318, "fraud": 526 },
    "KP": { "legit": 119, "fraud": 79 },
    "KJ": { "legit": 1202, "fraud": 486 },
    "KT": { "legit": 61, "fraud": 46 },
    "HD": { "legit": 103, "fraud": 11 },
    "KG": { "legit": 80, "fraud": 53 },
    "KB": { "legit": 169, "fraud": 226 },
    "KC": { "legit": 299, "fraud": 73 },
    "SA": { "legit": 123, "fraud": 82 },
    "KU": { "legit": 29, "fraud": 45 }
  },
  "contradictory_records": {
    "total_ambiguous_rows": 5361,
    "total_ambiguous_groups": 1737,
    "fraud_in_ambiguous": 3027,
    "legit_in_ambiguous": 2334,
    "pct_of_train": 3.35
  },
  "clinical_paradox": {
    "severity_high_los_zero": {
      "total_claims": 364,
      "fraud_rate": 76.37
    },
    "many_proc_short_stay": {
      "total_claims": 6534,
      "fraud_rate": 58.19
    }
  },
  "fairness_benchmarks": {
    "baseline_fpr": 0.00348,
    "baseline_fpr_pct": "0.348%",
    "gender_fpr": {
      "L": 0.003576,
      "P": 0.003392,
      "gap": 0.00018,
      "gap_pct": "0.018%"
    },
    "age_fpr": {
      "0-17": 0.002652,
      "18-39": 0.004089,
      "40-59": 0.003694,
      "60+": 0.003400,
      "gap": 0.00144,
      "gap_pct": "0.144%"
    },
    "protection_score": 0.99856,
    "protection_score_pct": "99.86%",
    "facility_disparity": [
      { "type": "KM", "label": "Klinik Madya", "fpr": 0.031837, "fp": 39, "legit": 1225, "ratio_vs_baseline": "9.2x" },
      { "type": "I1", "label": "Faskes Kelas I1", "fpr": 0.025157, "fp": 8, "legit": 318, "ratio_vs_baseline": "7.2x" },
      { "type": "GD", "label": "Gawat Darurat Khusus", "fpr": 0.017544, "fp": 1, "legit": 57, "ratio_vs_baseline": "5.0x" },
      { "type": "D", "label": "Rumah Sakit Kelas D", "fpr": 0.014986, "fp": 26, "legit": 1735, "ratio_vs_baseline": "4.3x" },
      { "type": "KB", "label": "Klinik Pratama KB", "fpr": 0.011834, "fp": 2, "legit": 169, "ratio_vs_baseline": "3.4x" },
      { "type": "C", "label": "Rumah Sakit Kelas C", "fpr": 0.004123, "fp": 63, "legit": 15280, "ratio_vs_baseline": "1.2x" },
      { "type": "B", "label": "Rumah Sakit Kelas B", "fpr": 0.003316, "fp": 49, "legit": 14776, "ratio_vs_baseline": "1.0x" },
      { "type": "A", "label": "Rumah Sakit Kelas A", "fpr": 0.002425, "fp": 9, "legit": 3711, "ratio_vs_baseline": "0.7x" },
      { "type": "HD", "label": "Klinik Hemodialisis", "fpr": 0.000000, "fp": 0, "legit": 103, "ratio_vs_baseline": "0.0x" }
    ],
    "regional_disparity": [
      { "code": "221", "label": "Wilayah Regional 221", "fpr": 0.024251, "fp": 17, "legit": 701, "ratio_vs_baseline": "7.0x" },
      { "code": "217", "label": "Wilayah Regional 217", "fpr": 0.006211, "fp": 11, "legit": 1771, "ratio_vs_baseline": "1.8x" },
      { "code": "116", "label": "Wilayah Regional 116", "fpr": 0.005882, "fp": 5, "legit": 850, "ratio_vs_baseline": "1.7x" },
      { "code": "173", "label": "Wilayah Regional 173", "fpr": 0.003463, "fp": 4, "legit": 1155, "ratio_vs_baseline": "1.0x" },
      { "code": "90", "label": "Wilayah Regional 90", "fpr": 0.003347, "fp": 4, "legit": 1195, "ratio_vs_baseline": "1.0x" },
      { "code": "115", "label": "Wilayah Regional 115", "fpr": 0.001605, "fp": 2, "legit": 1246, "ratio_vs_baseline": "0.5x" },
      { "code": "38", "label": "Wilayah Regional 38", "fpr": 0.000000, "fp": 0, "legit": 1530, "ratio_vs_baseline": "0.0x" },
      { "code": "112", "label": "Wilayah Regional 112", "fpr": 0.000000, "fp": 0, "legit": 1472, "ratio_vs_baseline": "0.0x" },
      { "code": "113", "label": "Wilayah Regional 113", "fpr": 0.000000, "fp": 0, "legit": 1481, "ratio_vs_baseline": "0.0x" },
      { "code": "117", "label": "Wilayah Regional 117", "fpr": 0.000000, "fp": 0, "legit": 1446, "ratio_vs_baseline": "0.0x" }
    ]
  },
  "capacity_allocation_sensitivity": [
    {
      "budget": "3% Budget",
      "k_audited": 4805,
      "tp_captured": 4710,
      "fp_legit": 95,
      "precision": "98.02%",
      "norm_recall": 0.9802,
      "lift": "1.95x"
    },
    {
      "budget": "5% Budget (Baseline Resmi)",
      "k_audited": 8008,
      "tp_captured": 7730,
      "fp_legit": 278,
      "precision": "96.53%",
      "norm_recall": 0.9653,
      "norm_recall_cv_mean": 0.9655,
      "norm_recall_round2": 0.9659,
      "lift": "1.92x (+92.3%)"
    },
    {
      "budget": "7% Budget",
      "k_audited": 11212,
      "tp_captured": 10686,
      "fp_legit": 526,
      "precision": "95.31%",
      "norm_recall": 0.9531,
      "lift": "1.91x"
    }
  ],
  "calibration_deciles": [
    { "bin": "Bin 1 [0.0-0.1)", "pred": 0.0721, "obs_raw": 0.0524, "obs_iso": 0.0718, "count": 40436, "gap_raw": "+0.0197", "gap_iso": "-0.0003" },
    { "bin": "Bin 2 [0.1-0.2)", "pred": 0.1519, "obs_raw": 0.1315, "obs_iso": 0.1522, "count": 14687, "gap_raw": "+0.0204", "gap_iso": "+0.0003" },
    { "bin": "Bin 3 [0.2-0.3)", "pred": 0.2517, "obs_raw": 0.2240, "obs_iso": 0.2515, "count": 8810, "gap_raw": "+0.0277", "gap_iso": "-0.0002" },
    { "bin": "Bin 4 [0.3-0.4)", "pred": 0.3514, "obs_raw": 0.3255, "obs_iso": 0.3518, "count": 7674, "gap_raw": "+0.0259", "gap_iso": "+0.0004" },
    { "bin": "Bin 5 [0.4-0.5)", "pred": 0.4579, "obs_raw": 0.4419, "obs_iso": 0.4575, "count": 8045, "gap_raw": "+0.0160", "gap_iso": "-0.0004" },
    { "bin": "Bin 6 [0.5-0.6)", "pred": 0.5548, "obs_raw": 0.5449, "obs_iso": 0.5551, "count": 6210, "gap_raw": "+0.0099", "gap_iso": "+0.0003" },
    { "bin": "Bin 7 [0.6-0.7)", "pred": 0.6463, "obs_raw": 0.6599, "obs_iso": 0.6460, "count": 8132, "gap_raw": "-0.0136", "gap_iso": "-0.0003" },
    { "bin": "Bin 8 [0.7-0.8)", "pred": 0.7483, "obs_raw": 0.7628, "obs_iso": 0.7485, "count": 11116, "gap_raw": "-0.0145", "gap_iso": "+0.0002" },
    { "bin": "Bin 9 [0.8-0.9)", "pred": 0.8459, "obs_raw": 0.8628, "obs_iso": 0.8462, "count": 17803, "gap_raw": "-0.0169", "gap_iso": "+0.0003" },
    { "bin": "Bin 10 [0.9-1.0]", "pred": 0.9479, "obs_raw": 0.9554, "obs_iso": 0.9476, "count": 37261, "gap_raw": "-0.0075", "gap_iso": "-0.0003" }
  ],
  "calibration_summary": {
    "brier_raw": 0.1750,
    "brier_isotonic": 0.1745,
    "calibration_score_raw": 0.8250,
    "calibration_score_isotonic": 0.8255,
    "uplift": "+0.0005",
    "compute_time_sec": 0.04
  },
  "feature_importance_concordance": [
    { "rank": 1, "feature": "umur", "category": "Demografi", "lgb": 6466.6, "xgb": 23075.2 },
    { "rank": 2, "feature": "dati2_freq", "category": "Regional Freq", "lgb": 5896.4, "xgb": 14956.2 },
    { "rank": 3, "feature": "dati2", "category": "Regional Code", "lgb": 5380.6, "xgb": 12478.2 },
    { "rank": 4, "feature": "kdkc_freq", "category": "Provider Freq", "lgb": 4784.0, "xgb": 11079.2 },
    { "rank": 5, "feature": "kdkc", "category": "Provider Code", "lgb": 4502.6, "xgb": 11558.2 },
    { "rank": 6, "feature": "kdkc_inconsistency", "category": "Inkonsistensi", "lgb": 4433.0, "xgb": 10788.4 },
    { "rank": 7, "feature": "diagprimer", "category": "Diagnosis Utama", "lgb": 4383.2, "xgb": 14260.4 },
    { "rank": 8, "feature": "cmg", "category": "Casemix Group", "lgb": 2952.4, "xgb": 10471.2 },
    { "rank": 9, "feature": "typeppk", "category": "Tipe Faskes", "lgb": 2817.0, "xgb": 10887.2 },
    { "rank": 10, "feature": "proc_per_los", "category": "Rasio Tindakan", "lgb": 2575.4, "xgb": 7090.0 },
    { "rank": 11, "feature": "severity_per_los", "category": "Rasio Severity", "lgb": 1963.8, "xgb": 5735.4 },
    { "rank": 12, "feature": "dx_per_los", "category": "Rasio Diagnosis", "lgb": 1613.8, "xgb": 5030.0 },
    { "rank": 13, "feature": "case_complexity", "category": "Kompleksitas", "lgb": 1417.0, "xgb": 4992.6 },
    { "rank": 14, "feature": "los", "category": "Lama Rawat", "lgb": 1411.8, "xgb": 4233.0 },
    { "rank": 15, "feature": "proc80_99", "category": "Prosedur Spesifik", "lgb": 1037.0, "xgb": 3564.8 }
  ],
  "shap_case_31978": {
    "claim_id": "CLM_031978",
    "base_value": 0.026,
    "final_margin": 0.896,
    "fraud_probability": 0.710,
    "risk_level": "HIGH RISK AUDIT",
    "drivers": [
      { "feature": "umur = 66 (Lansia)", "impact": 0.37, "direction": "positive", "desc": "Predisposisi usia geriatrik pada pola klaim intensif" },
      { "feature": "diagprimer = g00_g99 (Saraf)", "impact": 0.26, "direction": "positive", "desc": "Diagnosis primer sistem saraf ICD-10 berbiaya tinggi" },
      { "feature": "57 Fitur Agregat Lainnya", "impact": 0.22, "direction": "positive", "desc": "Kontribusi kumulatif fitur sekunder dan administratif" },
      { "feature": "cmg = Q", "impact": 0.07, "direction": "positive", "desc": "Kelompok casemix INA-CBGs kategori Q" },
      { "feature": "dati2_freq = 0.020", "impact": 0.07, "direction": "positive", "desc": "Kepadatan volume regional tingkat kabupaten/kota" },
      { "feature": "los = 0 (One-Day Care)", "impact": 0.06, "direction": "positive", "desc": "Rawat jalan hari yang sama dengan severity berat" },
      { "feature": "dati2 = 113", "impact": 0.06, "direction": "positive", "desc": "Lokasi fasilitas pada wilayah kode 113" },
      { "feature": "severity_per_los = 0", "impact": -0.06, "direction": "negative", "desc": "Penyesuaian rasio keparahan dasar" },
      { "feature": "kdkc_freq = 0.020", "impact": -0.07, "direction": "negative", "desc": "Volume moderat kantor cabang operasional" },
      { "feature": "kdkc_inconsistency = 0.043", "impact": -0.12, "direction": "negative", "desc": "Tingkat inkonsistensi cabang relatif rendah" }
    ]
  }
};
