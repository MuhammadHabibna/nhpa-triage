// Preset 500 Test Claims for Live Ingestion Demo (Derived from competition test set)
export const PRESET_SAMPLE_CLAIMS = [
  {
    "claim_id": "CLM_EC01011E56D8C7",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 53,
    "los": 0,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 401) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_0A432AE7C1D456",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 46,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_590743DDB6780E",
    "kdkc": 502,
    "dati2": 75,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 27,
    "los": 0,
    "severitylevel": 0,
    "cmg": "J",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 4,
    "dx_per_los": 0.0,
    "proc_per_los": 4.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23",
      "29_31",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "4 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 75"
      }
    ]
  },
  {
    "claim_id": "CLM_43C9C27A19AD4B",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 50,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 2.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_72D4B968C73B39",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 50,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 2.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_DA1E8AE4EC627A",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 37,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_F86DBD92CCBB4D",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 62,
    "los": 0,
    "severitylevel": 1,
    "cmg": "G",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 401) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_0B81ED6186A679",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 2,
    "dx_per_los": 2.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      }
    ]
  },
  {
    "claim_id": "CLM_3A9CE003BC2771",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 58,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 1601) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_465D2164961C44",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 53,
    "los": 0,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 401) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_D237995ED82DDD",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 53,
    "los": 0,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 401) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_53ADC5000F0F80",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 46,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_6B96F7EEF1E82E",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 48,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_08A471E509585E",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 73,
    "los": 0,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 401) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_84CC9F8AAD5D57",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_07BCD53018CABA",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 79,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_1A5786BF8C3553",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 48,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_660A04F249BE94",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 65,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 4,
    "dx_per_los": 1.0,
    "proc_per_los": 4.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [
      "00_13",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "4 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_475CE02A9C18D8",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 66,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 3,
    "dx_per_los": 2.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      }
    ]
  },
  {
    "claim_id": "CLM_724359CF315196",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 65,
    "los": 0,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 401) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_B1C1ADDA8A4763",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 48,
    "los": 0,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 401) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_E04005E20A863B",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 3,
    "n_proc": 1,
    "dx_per_los": 3.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "3 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_F0FF9AD25E9420",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 75,
    "los": 0,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 401) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_47B76EF0EE9C6D",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 58,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 4,
    "dx_per_los": 2.0,
    "proc_per_los": 4.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "00_13",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "4 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      }
    ]
  },
  {
    "claim_id": "CLM_34F8B209F5D1BD",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_4BD64149290DE4",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_BB215844708C6E",
    "kdkc": 1108,
    "dati2": 171,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 22,
    "los": 0,
    "severitylevel": 1,
    "cmg": "W",
    "diagprimer": "o00_o99",
    "n_dx2": 3,
    "n_proc": 2,
    "dx_per_los": 3.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "O00_O99",
      "Z00_Z99"
    ],
    "active_proc": [
      "71_73"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "3 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG W (o00_o99)"
      }
    ]
  },
  {
    "claim_id": "CLM_D7F9BD4E8F43BA",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 62,
    "los": 0,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 401) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_E83F51C8A790FB",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "L",
    "umur": 67,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 4,
    "dx_per_los": 1.0,
    "proc_per_los": 4.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [
      "00_13",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "4 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_638F87C634E6E1",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 67,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 1.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [
      "00_13",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_E6AAE69C3CE6AC",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 87,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_268C011692F310",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 53,
    "los": 0,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 401) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_91E006415A655A",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 79,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 3,
    "dx_per_los": 2.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59",
      "Z00_Z99"
    ],
    "active_proc": [
      "00_13",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      }
    ]
  },
  {
    "claim_id": "CLM_D628F0B14426ED",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_6B8E198190F2B5",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_BF64978BBAC71A",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_C4DB1300B115A9",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 63,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 2,
    "dx_per_los": 2.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      }
    ]
  },
  {
    "claim_id": "CLM_BCD21015137F50",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_C4DD8122667469",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_0C0675A5F0A882",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 67,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 1.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [
      "00_13",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_85DB3A719E1039",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_BD18924A1CDCA2",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_1B8E480A8F0D4C",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 49,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 3,
    "n_proc": 1,
    "dx_per_los": 3.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59",
      "Z00_Z99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "3 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_A97962FCBA158C",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 79,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_718F58B717B231",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 58,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 1601) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_9BDEC0798AD3FB",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 39,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_796CCC5FB2456B",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 74,
    "los": 0,
    "severitylevel": 1,
    "cmg": "G",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 401) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_648AAE2F68D033",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 50,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 2.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_263C8B463304E6",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 2,
    "dx_per_los": 2.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      }
    ]
  },
  {
    "claim_id": "CLM_591E0771FE0619",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_7AF7E4E772EE0B",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_518A9EE1B75459",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 58,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 1601) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_9F9A823B43251E",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 46,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 1.0,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_A383403543C678",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 79,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_A7CD45D0A8ABCC",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 45,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "z00_z99",
    "n_dx2": 2,
    "n_proc": 2,
    "dx_per_los": 2.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (z00_z99)"
      }
    ]
  },
  {
    "claim_id": "CLM_68E73B4F98CEB7",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 62,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 1601) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_C7447264BA404B",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 76,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_638EB69321B52E",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 34,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_ED57C0CE7D255B",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 53,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 2.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_FFC06ACDF21A60",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 48,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 1601) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_C73865B069DD9D",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 57,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_2F1387E1322F11",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 76,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_3DBFDE524FFA23",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 22,
    "los": 1,
    "severitylevel": 1,
    "cmg": "W",
    "diagprimer": "o00_o99",
    "n_dx2": 2,
    "n_proc": 2,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [
      "O00_O99",
      "Z00_Z99"
    ],
    "active_proc": [
      "71_73"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 1601) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG W (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_833BF15D654550",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 1,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_6F66269B17817B",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 53,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 2.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_9CA17ABACD6386",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 1,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_7446139F36B58C",
    "kdkc": 502,
    "dati2": 75,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 14,
    "los": 0,
    "severitylevel": 0,
    "cmg": "J",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23",
      "29_31"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 75"
      }
    ]
  },
  {
    "claim_id": "CLM_C933BC71A3C1DE",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 1,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_C64A024A48A7B9",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 57,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_0A2E2532D2F3C0",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 76,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_D499FCDEC7F851",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 1,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_2404B04707B0C2",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 57,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_766672F513764F",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 48,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 1601) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_DA55D0E6409120",
    "kdkc": 502,
    "dati2": 75,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 14,
    "los": 0,
    "severitylevel": 0,
    "cmg": "J",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23",
      "29_31"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 75"
      }
    ]
  },
  {
    "claim_id": "CLM_F539774CE28012",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 59,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 1601) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_5F65EC91BE68BF",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 62,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Facility Risk Cluster",
        "impact": "+0.26",
        "desc": "Tipe Faskes SC (KC 1601) memiliki klaster risiko tinggi"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_E760E107F52CBA",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 57,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_C090FC534E278D",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 57,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 3,
    "n_proc": 1,
    "dx_per_los": 3.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "3 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_E6F7A6BFBBCFE1",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 57,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_4AAC30FE3D1768",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 57,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.832931,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_48C4BE93AEF4A7",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 69,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 1.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [
      "00_13",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_52F648FA445400",
    "kdkc": 2103,
    "dati2": 454,
    "typeppk": "KM",
    "jkpst": "L",
    "umur": 85,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 454"
      }
    ]
  },
  {
    "claim_id": "CLM_4ED146D7FDC111",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 45,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 1.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_377190A50D1CEF",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "L",
    "umur": 63,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 1.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_C7810BB452C15D",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 25,
    "los": 2,
    "severitylevel": 1,
    "cmg": "W",
    "diagprimer": "o00_o99",
    "n_dx2": 2,
    "n_proc": 2,
    "dx_per_los": 0.667,
    "proc_per_los": 0.667,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "O00_O99",
      "Z00_Z99"
    ],
    "active_proc": [
      "71_73"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG W (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_AD7D3CEADC66A4",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "L",
    "umur": 60,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 1.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [
      "14_23",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_E6045F718DF201",
    "kdkc": 207,
    "dati2": 27,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 24,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 27"
      }
    ]
  },
  {
    "claim_id": "CLM_0E4B44350E0DB1",
    "kdkc": 207,
    "dati2": 27,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 35,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 27"
      }
    ]
  },
  {
    "claim_id": "CLM_EECA0CCB08114D",
    "kdkc": 2103,
    "dati2": 454,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 65,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 454"
      }
    ]
  },
  {
    "claim_id": "CLM_F01BB891ABD315",
    "kdkc": 104,
    "dati2": 7,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 72,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "g00_g99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 7"
      }
    ]
  },
  {
    "claim_id": "CLM_BD494ECC2C67C0",
    "kdkc": 207,
    "dati2": 27,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 45,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 27"
      }
    ]
  },
  {
    "claim_id": "CLM_570DE491AA9B08",
    "kdkc": 502,
    "dati2": 75,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 39,
    "los": 0,
    "severitylevel": 0,
    "cmg": "J",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23",
      "29_31"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 75"
      }
    ]
  },
  {
    "claim_id": "CLM_4C705B8CC76D95",
    "kdkc": 2606,
    "dati2": 364,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 37,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "a00_b99",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 1.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "A00_B99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 364"
      }
    ]
  },
  {
    "claim_id": "CLM_141529A3285ADC",
    "kdkc": 1013,
    "dati2": 111,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 14,
    "los": 1,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 111"
      }
    ]
  },
  {
    "claim_id": "CLM_8348D180EB0DAB",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_4C905B04A105C4",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 45,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 1.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_CDCE3509A82D51",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 64,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_46844033CDEAD8",
    "kdkc": 501,
    "dati2": 82,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 6,
    "los": 1,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 82"
      }
    ]
  },
  {
    "claim_id": "CLM_3CED8656A982DE",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "L",
    "umur": 43,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_C3DB5F99FA5564",
    "kdkc": 1314,
    "dati2": 195,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 24,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "h60_h95",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "R00_R99"
    ],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 195"
      }
    ]
  },
  {
    "claim_id": "CLM_9356E78028A379",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 4,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_D7503972556B2C",
    "kdkc": 502,
    "dati2": 75,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 10,
    "los": 0,
    "severitylevel": 0,
    "cmg": "J",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23",
      "29_31",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 75"
      }
    ]
  },
  {
    "claim_id": "CLM_7561CACFFF4BE7",
    "kdkc": 1314,
    "dati2": 195,
    "typeppk": "I4",
    "jkpst": "P",
    "umur": 41,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 195"
      }
    ]
  },
  {
    "claim_id": "CLM_BF57800A35082A",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 33,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 4,
    "dx_per_los": 0.0,
    "proc_per_los": 4.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "4 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_1C451B96F99632",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 57,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_43C0256F3FD781",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 17,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 2.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_E0BE3CDFBF03F9",
    "kdkc": 2103,
    "dati2": 454,
    "typeppk": "KM",
    "jkpst": "L",
    "umur": 69,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 454"
      }
    ]
  },
  {
    "claim_id": "CLM_1B352A64DF98A1",
    "kdkc": 1013,
    "dati2": 111,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 5,
    "los": 1,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 111"
      }
    ]
  },
  {
    "claim_id": "CLM_52F1CAE1BA9BB7",
    "kdkc": 2503,
    "dati2": 318,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "F00_F99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 318"
      }
    ]
  },
  {
    "claim_id": "CLM_8F1A6E253AB702",
    "kdkc": 2606,
    "dati2": 364,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 41,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "o00_o99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 364"
      }
    ]
  },
  {
    "claim_id": "CLM_134849CD78C0BA",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 46,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_EFF8C7083F1011",
    "kdkc": 2103,
    "dati2": 454,
    "typeppk": "KM",
    "jkpst": "L",
    "umur": 65,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 454"
      }
    ]
  },
  {
    "claim_id": "CLM_4D7245B72841D1",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "L",
    "umur": 64,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "z00_z99",
    "n_dx2": 4,
    "n_proc": 1,
    "dx_per_los": 4.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59",
      "Z00_Z99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "4 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_D4B5BA5B30FD0B",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 30,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 2.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_1DF87B3E7CA14D",
    "kdkc": 1013,
    "dati2": 111,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 14,
    "los": 1,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 111"
      }
    ]
  },
  {
    "claim_id": "CLM_8DD52455FA8E62",
    "kdkc": 501,
    "dati2": 82,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 12,
    "los": 1,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 82"
      }
    ]
  },
  {
    "claim_id": "CLM_19674609F2DD7E",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 55,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_A0BA532B818AAF",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 39,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_35ADE8BAC04A1B",
    "kdkc": 2103,
    "dati2": 454,
    "typeppk": "KM",
    "jkpst": "L",
    "umur": 64,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 454"
      }
    ]
  },
  {
    "claim_id": "CLM_1D71F2C07DEEC0",
    "kdkc": 2103,
    "dati2": 454,
    "typeppk": "KM",
    "jkpst": "L",
    "umur": 64,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 454"
      }
    ]
  },
  {
    "claim_id": "CLM_B980A11B749FAA",
    "kdkc": 1314,
    "dati2": 195,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 41,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "k00_k93",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [
      "R00_R99"
    ],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 195"
      }
    ]
  },
  {
    "claim_id": "CLM_4311901BF9A2CA",
    "kdkc": 2103,
    "dati2": 454,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 26,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 454"
      }
    ]
  },
  {
    "claim_id": "CLM_62314A4A51CDD0",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 58,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_7728F148DACB53",
    "kdkc": 502,
    "dati2": 75,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 39,
    "los": 0,
    "severitylevel": 0,
    "cmg": "J",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.792789,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23",
      "29_31"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 75"
      }
    ]
  },
  {
    "claim_id": "CLM_AEC67B31B4FC28",
    "kdkc": 501,
    "dati2": 82,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 2,
    "los": 1,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.78603,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 82"
      }
    ]
  },
  {
    "claim_id": "CLM_7BB45B2FF33AC5",
    "kdkc": 1301,
    "dati2": 217,
    "typeppk": "I1",
    "jkpst": "P",
    "umur": 75,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "n00_n99",
    "n_dx2": 1,
    "n_proc": 5,
    "dx_per_los": 1.0,
    "proc_per_los": 5.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.70018,
    "is_contradictory_claim": false,
    "active_dx": [
      "A00_B99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "5 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 217"
      }
    ]
  },
  {
    "claim_id": "CLM_D5732F387BA429",
    "kdkc": 2503,
    "dati2": 318,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 40,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.670027,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 318"
      }
    ]
  },
  {
    "claim_id": "CLM_DD4CB01667FC12",
    "kdkc": 2203,
    "dati2": 232,
    "typeppk": "SD",
    "jkpst": "L",
    "umur": 89,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.665371,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 232"
      }
    ]
  },
  {
    "claim_id": "CLM_91508E9756BEA8",
    "kdkc": 302,
    "dati2": 53,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 74,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.65389,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 53"
      }
    ]
  },
  {
    "claim_id": "CLM_406746F5F137D3",
    "kdkc": 207,
    "dati2": 27,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 3,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "a00_b99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.595209,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 27"
      }
    ]
  },
  {
    "claim_id": "CLM_76E1DF542BB42E",
    "kdkc": 905,
    "dati2": 483,
    "typeppk": "D ",
    "jkpst": "P",
    "umur": 4,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.595209,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 483"
      }
    ]
  },
  {
    "claim_id": "CLM_C5E5B102F48A8F",
    "kdkc": 1701,
    "dati2": 283,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 6,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.595209,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 283"
      }
    ]
  },
  {
    "claim_id": "CLM_BE68D08CAAA31A",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "KJ",
    "jkpst": "L",
    "umur": 36,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.428825,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_1A7531EEC773E9",
    "kdkc": 1303,
    "dati2": 216,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 33,
    "los": 7,
    "severitylevel": 2,
    "cmg": "M",
    "diagprimer": "s00_t98",
    "n_dx2": 2,
    "n_proc": 2,
    "dx_per_los": 0.25,
    "proc_per_los": 0.25,
    "severity_short_stay": 0,
    "fraud_probability": 0.428825,
    "is_contradictory_claim": false,
    "active_dx": [
      "S00_T98"
    ],
    "active_proc": [
      "76_77",
      "78_79"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 216"
      }
    ]
  },
  {
    "claim_id": "CLM_EDD4941FCD0ADF",
    "kdkc": 1005,
    "dati2": 118,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 33,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.428825,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 118"
      }
    ]
  },
  {
    "claim_id": "CLM_FA2D6A1C70A2C4",
    "kdkc": 1014,
    "dati2": 93,
    "typeppk": "I2",
    "jkpst": "L",
    "umur": 64,
    "los": 1,
    "severitylevel": 1,
    "cmg": "N",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.421068,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG N (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 93"
      }
    ]
  },
  {
    "claim_id": "CLM_27A4412B55B77D",
    "kdkc": 1008,
    "dati2": 128,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 50,
    "los": 7,
    "severitylevel": 3,
    "cmg": "M",
    "diagprimer": "l00_l99",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 0.25,
    "proc_per_los": 0.125,
    "severity_short_stay": 0,
    "fraud_probability": 0.421068,
    "is_contradictory_claim": false,
    "active_dx": [
      "A00_B99",
      "E00_E90"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 128"
      }
    ]
  },
  {
    "claim_id": "CLM_E7638EECD9E1EE",
    "kdkc": 1107,
    "dati2": 150,
    "typeppk": "SD",
    "jkpst": "L",
    "umur": 0,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "q00_q99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.421068,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 150"
      }
    ]
  },
  {
    "claim_id": "CLM_5144D78BC9107B",
    "kdkc": 1803,
    "dati2": 323,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 21,
    "los": 0,
    "severitylevel": 1,
    "cmg": "W",
    "diagprimer": "o00_o99",
    "n_dx2": 1,
    "n_proc": 4,
    "dx_per_los": 1.0,
    "proc_per_los": 4.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.407211,
    "is_contradictory_claim": false,
    "active_dx": [
      "O00_O99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "4 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG W (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 323"
      }
    ]
  },
  {
    "claim_id": "CLM_D026E3CC46EF6F",
    "kdkc": 1201,
    "dati2": 180,
    "typeppk": "SB",
    "jkpst": "L",
    "umur": 40,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.407211,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 180"
      }
    ]
  },
  {
    "claim_id": "CLM_8DA4C79744551F",
    "kdkc": 1006,
    "dati2": 131,
    "typeppk": "SD",
    "jkpst": "L",
    "umur": 37,
    "los": 0,
    "severitylevel": 1,
    "cmg": "N",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.407211,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG N (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 131"
      }
    ]
  },
  {
    "claim_id": "CLM_DA0EF58B478A5A",
    "kdkc": 1701,
    "dati2": 290,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.357836,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 290"
      }
    ]
  },
  {
    "claim_id": "CLM_7D2674302B718D",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "KL",
    "jkpst": "L",
    "umur": 50,
    "los": 1,
    "severitylevel": 1,
    "cmg": "G",
    "diagprimer": "g00_g99",
    "n_dx2": 2,
    "n_proc": 3,
    "dx_per_los": 1.0,
    "proc_per_los": 1.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.357836,
    "is_contradictory_claim": false,
    "active_dx": [
      "G00_G99",
      "H60_H95"
    ],
    "active_proc": [
      "00_13",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 1 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_132C159A9715F3",
    "kdkc": 1804,
    "dati2": 326,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 29,
    "los": 4,
    "severitylevel": 2,
    "cmg": "I",
    "diagprimer": "q00_q99",
    "n_dx2": 1,
    "n_proc": 7,
    "dx_per_los": 0.2,
    "proc_per_los": 1.4,
    "severity_short_stay": 0,
    "fraud_probability": 0.357836,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG I (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 326"
      }
    ]
  },
  {
    "claim_id": "CLM_2FF0A27FEE7CF8",
    "kdkc": 501,
    "dati2": 77,
    "typeppk": "D ",
    "jkpst": "P",
    "umur": 62,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.357836,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 77"
      }
    ]
  },
  {
    "claim_id": "CLM_944E136EDDB84B",
    "kdkc": 304,
    "dati2": 55,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 43,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.350225,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 55"
      }
    ]
  },
  {
    "claim_id": "CLM_3AB5C87197BF47",
    "kdkc": 1312,
    "dati2": 206,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 27,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "o00_o99",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 1.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.350225,
    "is_contradictory_claim": false,
    "active_dx": [
      "O00_O99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 206"
      }
    ]
  },
  {
    "claim_id": "CLM_9792A5DEEB4F5D",
    "kdkc": 2601,
    "dati2": 374,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 74,
    "los": 1,
    "severitylevel": 2,
    "cmg": "J",
    "diagprimer": "j00_j99",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 1,
    "fraud_probability": 0.304392,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Severity vs LOS Anomaly",
        "impact": "+0.38",
        "desc": "Tingkat keparahan Level 2 tanpa rawat inap memadai (LOS=1)"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 374"
      }
    ]
  },
  {
    "claim_id": "CLM_989B15F46A268C",
    "kdkc": 1108,
    "dati2": 151,
    "typeppk": "KB",
    "jkpst": "L",
    "umur": 62,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.304392,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 151"
      }
    ]
  },
  {
    "claim_id": "CLM_2F9BBCB488584F",
    "kdkc": 1301,
    "dati2": 217,
    "typeppk": "I3",
    "jkpst": "P",
    "umur": 9,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "a00_b99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.304392,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 217"
      }
    ]
  },
  {
    "claim_id": "CLM_CC29EB1894E0FB",
    "kdkc": 1201,
    "dati2": 180,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 72,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.284163,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 180"
      }
    ]
  },
  {
    "claim_id": "CLM_8A103C748D174D",
    "kdkc": 1014,
    "dati2": 93,
    "typeppk": "I2",
    "jkpst": "P",
    "umur": 36,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.284163,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 93"
      }
    ]
  },
  {
    "claim_id": "CLM_2BF09184AA6E50",
    "kdkc": 1104,
    "dati2": 144,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.284163,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 144"
      }
    ]
  },
  {
    "claim_id": "CLM_33E7EFA9BEB7FA",
    "kdkc": 1112,
    "dati2": 169,
    "typeppk": "KI",
    "jkpst": "L",
    "umur": 0,
    "los": 3,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.284163,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 169"
      }
    ]
  },
  {
    "claim_id": "CLM_5190D03B68E08B",
    "kdkc": 1018,
    "dati2": 221,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 50,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.275714,
    "is_contradictory_claim": false,
    "active_dx": [
      "G00_G99"
    ],
    "active_proc": [
      "E00_E99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 221"
      }
    ]
  },
  {
    "claim_id": "CLM_CAF80F4B07A45D",
    "kdkc": 1006,
    "dati2": 131,
    "typeppk": "SD",
    "jkpst": "L",
    "umur": 15,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.275714,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 131"
      }
    ]
  },
  {
    "claim_id": "CLM_130A9AEE818FC9",
    "kdkc": 601,
    "dati2": 90,
    "typeppk": "I3",
    "jkpst": "L",
    "umur": 77,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.260264,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 90"
      }
    ]
  },
  {
    "claim_id": "CLM_4393932184AA88",
    "kdkc": 1202,
    "dati2": 179,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 41,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.251815,
    "is_contradictory_claim": false,
    "active_dx": [
      "C00_D48"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 179"
      }
    ]
  },
  {
    "claim_id": "CLM_D58B90761E3982",
    "kdkc": 1003,
    "dati2": 223,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 58,
    "los": 2,
    "severitylevel": 1,
    "cmg": "N",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.333,
    "severity_short_stay": 0,
    "fraud_probability": 0.251815,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "58_62"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG N (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 223"
      }
    ]
  },
  {
    "claim_id": "CLM_67C1F916BC2FA7",
    "kdkc": 2605,
    "dati2": 395,
    "typeppk": "D ",
    "jkpst": "L",
    "umur": 8,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.251815,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 395"
      }
    ]
  },
  {
    "claim_id": "CLM_80AC2FF79A4BBA",
    "kdkc": 1112,
    "dati2": 168,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 6,
    "los": 1,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.237527,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 168"
      }
    ]
  },
  {
    "claim_id": "CLM_520BD1C0FAF41B",
    "kdkc": 1312,
    "dati2": 207,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 70,
    "los": 2,
    "severitylevel": 2,
    "cmg": "J",
    "diagprimer": "j00_j99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 0.333,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.237527,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 207"
      }
    ]
  },
  {
    "claim_id": "CLM_4BB3BE8C38866F",
    "kdkc": 1005,
    "dati2": 119,
    "typeppk": "D ",
    "jkpst": "L",
    "umur": 44,
    "los": 0,
    "severitylevel": 1,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.237527,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 119"
      }
    ]
  },
  {
    "claim_id": "CLM_E253376F1AFE6A",
    "kdkc": 2101,
    "dati2": 310,
    "typeppk": "I4",
    "jkpst": "L",
    "umur": 0,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "a00_b99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.224993,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 310"
      }
    ]
  },
  {
    "claim_id": "CLM_D272D9BC17A72D",
    "kdkc": 1104,
    "dati2": 144,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.224993,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 144"
      }
    ]
  },
  {
    "claim_id": "CLM_10541E813E63FD",
    "kdkc": 1201,
    "dati2": 180,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 28,
    "los": 0,
    "severitylevel": 0,
    "cmg": "D",
    "diagprimer": "c00_d48",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 1.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.224993,
    "is_contradictory_claim": false,
    "active_dx": [
      "D50_D89"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 180"
      }
    ]
  },
  {
    "claim_id": "CLM_1E49BB9C6F7A56",
    "kdkc": 601,
    "dati2": 90,
    "typeppk": "KI",
    "jkpst": "P",
    "umur": 36,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "o00_o99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.224993,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 90"
      }
    ]
  },
  {
    "claim_id": "CLM_F3153B75BC0F84",
    "kdkc": 2503,
    "dati2": 318,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 46,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "a00_b99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.224993,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 318"
      }
    ]
  },
  {
    "claim_id": "CLM_69EBBBAE79313F",
    "kdkc": 101,
    "dati2": 17,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 0,
    "los": 0,
    "severitylevel": 0,
    "cmg": "K",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.224993,
    "is_contradictory_claim": true,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 17"
      }
    ]
  },
  {
    "claim_id": "CLM_7D99F4BE011B22",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 71,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.212236,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_6BA49272C84F3C",
    "kdkc": 1312,
    "dati2": 208,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 54,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.212236,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 208"
      }
    ]
  },
  {
    "claim_id": "CLM_E143966D758105",
    "kdkc": 1107,
    "dati2": 150,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 20,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.212236,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 150"
      }
    ]
  },
  {
    "claim_id": "CLM_3B8350F3C5BC8C",
    "kdkc": 1103,
    "dati2": 174,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 42,
    "los": 0,
    "severitylevel": 1,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.212236,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 174"
      }
    ]
  },
  {
    "claim_id": "CLM_7ECA30E850F4C7",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "g00_g99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.212236,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_ACA035EEB09A83",
    "kdkc": 1504,
    "dati2": 261,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 18,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.208639,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 261"
      }
    ]
  },
  {
    "claim_id": "CLM_47568D70C19B28",
    "kdkc": 501,
    "dati2": 82,
    "typeppk": "KI",
    "jkpst": "P",
    "umur": 0,
    "los": 3,
    "severitylevel": 2,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 0.25,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.190456,
    "is_contradictory_claim": false,
    "active_dx": [
      "P00_P96"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 82"
      }
    ]
  },
  {
    "claim_id": "CLM_171DCCA7F05864",
    "kdkc": 1108,
    "dati2": 154,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 63,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.190456,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 154"
      }
    ]
  },
  {
    "claim_id": "CLM_3B369D6D8D518D",
    "kdkc": 405,
    "dati2": 70,
    "typeppk": "SB",
    "jkpst": "L",
    "umur": 0,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.190456,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 70"
      }
    ]
  },
  {
    "claim_id": "CLM_7E533384FA3C5E",
    "kdkc": 1112,
    "dati2": 168,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 0,
    "los": 4,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.190456,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 168"
      }
    ]
  },
  {
    "claim_id": "CLM_3F6FC05EC5ACB4",
    "kdkc": 404,
    "dati2": 64,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 22,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "o00_o99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.190456,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 64"
      }
    ]
  },
  {
    "claim_id": "CLM_90C13495FC573B",
    "kdkc": 902,
    "dati2": 112,
    "typeppk": "D ",
    "jkpst": "P",
    "umur": 20,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.190456,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 112"
      }
    ]
  },
  {
    "claim_id": "CLM_CE70D6BBAE0988",
    "kdkc": 1018,
    "dati2": 221,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 24,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.177815,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 221"
      }
    ]
  },
  {
    "claim_id": "CLM_D4ADB37D5C309B",
    "kdkc": 1101,
    "dati2": 173,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 0,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.177815,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 173"
      }
    ]
  },
  {
    "claim_id": "CLM_FE234FE9FEB9C7",
    "kdkc": 1009,
    "dati2": 121,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 21,
    "los": 1,
    "severitylevel": 2,
    "cmg": "O",
    "diagprimer": "o00_o99",
    "n_dx2": 4,
    "n_proc": 3,
    "dx_per_los": 2.0,
    "proc_per_los": 1.5,
    "severity_short_stay": 1,
    "fraud_probability": 0.173027,
    "is_contradictory_claim": false,
    "active_dx": [
      "O00_O99",
      "Z00_Z99"
    ],
    "active_proc": [
      "71_73",
      "74_75"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 1 hari rawat inap"
      },
      {
        "feature": "Severity vs LOS Anomaly",
        "impact": "+0.38",
        "desc": "Tingkat keparahan Level 2 tanpa rawat inap memadai (LOS=1)"
      },
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "4 komorbiditas tercatat per hari"
      }
    ]
  },
  {
    "claim_id": "CLM_72C697033C4029",
    "kdkc": 1201,
    "dati2": 180,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 23,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.173027,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 180"
      }
    ]
  },
  {
    "claim_id": "CLM_C046A3EF5CDDD0",
    "kdkc": 103,
    "dati2": 12,
    "typeppk": "SD",
    "jkpst": "L",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.173027,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 12"
      }
    ]
  },
  {
    "claim_id": "CLM_24C3938663DA70",
    "kdkc": 1013,
    "dati2": 123,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 71,
    "los": 5,
    "severitylevel": 3,
    "cmg": "A",
    "diagprimer": "a00_b99",
    "n_dx2": 3,
    "n_proc": 5,
    "dx_per_los": 0.5,
    "proc_per_los": 0.833,
    "severity_short_stay": 0,
    "fraud_probability": 0.166013,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99",
      "R00_R99",
      "Z00_Z99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG A (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 123"
      }
    ]
  },
  {
    "claim_id": "CLM_D298CF1C688925",
    "kdkc": 1107,
    "dati2": 150,
    "typeppk": "KI",
    "jkpst": "P",
    "umur": 0,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.166013,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 150"
      }
    ]
  },
  {
    "claim_id": "CLM_944486655F4B77",
    "kdkc": 101,
    "dati2": 9,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 64,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "m00_m99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.166013,
    "is_contradictory_claim": true,
    "active_dx": [
      "M00_M99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 9"
      }
    ]
  },
  {
    "claim_id": "CLM_F6BE790A57A834",
    "kdkc": 1016,
    "dati2": 117,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 50,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 4,
    "dx_per_los": 0.0,
    "proc_per_los": 4.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.166013,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "4 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 117"
      }
    ]
  },
  {
    "claim_id": "CLM_598BEF4900C4F4",
    "kdkc": 1806,
    "dati2": 329,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 9,
    "los": 3,
    "severitylevel": 1,
    "cmg": "E",
    "diagprimer": "e00_e90",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 0.25,
    "proc_per_los": 0.75,
    "severity_short_stay": 0,
    "fraud_probability": 0.166013,
    "is_contradictory_claim": false,
    "active_dx": [
      "A00_B99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG E (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 329"
      }
    ]
  },
  {
    "claim_id": "CLM_C93401A707BEC3",
    "kdkc": 2101,
    "dati2": 310,
    "typeppk": "I4",
    "jkpst": "L",
    "umur": 37,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.162318,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 310"
      }
    ]
  },
  {
    "claim_id": "CLM_A4F2E0A34481F0",
    "kdkc": 903,
    "dati2": 113,
    "typeppk": "D ",
    "jkpst": "L",
    "umur": 71,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "a00_b99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.162318,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 113"
      }
    ]
  },
  {
    "claim_id": "CLM_8CD103D9D6B78D",
    "kdkc": 407,
    "dati2": 57,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 32,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.162318,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 57"
      }
    ]
  },
  {
    "claim_id": "CLM_F32A83B1F2872F",
    "kdkc": 1603,
    "dati2": 303,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 21,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.156614,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 303"
      }
    ]
  },
  {
    "claim_id": "CLM_22B27F46E9BC0C",
    "kdkc": 1401,
    "dati2": 255,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 24,
    "los": 2,
    "severitylevel": 1,
    "cmg": "W",
    "diagprimer": "o00_o99",
    "n_dx2": 2,
    "n_proc": 0,
    "dx_per_los": 0.667,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.156614,
    "is_contradictory_claim": false,
    "active_dx": [
      "J00_J99",
      "O00_O99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG W (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 255"
      }
    ]
  },
  {
    "claim_id": "CLM_98AE0AD188558E",
    "kdkc": 601,
    "dati2": 375,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 22,
    "los": 3,
    "severitylevel": 1,
    "cmg": "W",
    "diagprimer": "o00_o99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.155821,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG W (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 375"
      }
    ]
  },
  {
    "claim_id": "CLM_5AB3D54E961D0E",
    "kdkc": 1311,
    "dati2": 190,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 7,
    "los": 2,
    "severitylevel": 1,
    "cmg": "G",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.147694,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 190"
      }
    ]
  },
  {
    "claim_id": "CLM_86AB6152E26348",
    "kdkc": 1001,
    "dati2": 135,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 4,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.147694,
    "is_contradictory_claim": false,
    "active_dx": [
      "E00_E90"
    ],
    "active_proc": [
      "E00_E99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 135"
      }
    ]
  },
  {
    "claim_id": "CLM_384869EA357E07",
    "kdkc": 1110,
    "dati2": 159,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 25,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.147694,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 159"
      }
    ]
  },
  {
    "claim_id": "CLM_6D2AB436783F37",
    "kdkc": 404,
    "dati2": 71,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 65,
    "los": 0,
    "severitylevel": 0,
    "cmg": "J",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.147694,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 71"
      }
    ]
  },
  {
    "claim_id": "CLM_A2760BD7396428",
    "kdkc": 602,
    "dati2": 108,
    "typeppk": "KJ",
    "jkpst": "L",
    "umur": 33,
    "los": 2,
    "severitylevel": 1,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.147694,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 108"
      }
    ]
  },
  {
    "claim_id": "CLM_F4B2C9DDC218FD",
    "kdkc": 1808,
    "dati2": 341,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 25,
    "los": 2,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.333,
    "severity_short_stay": 0,
    "fraud_probability": 0.147694,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 341"
      }
    ]
  },
  {
    "claim_id": "CLM_38F28C038C3F1C",
    "kdkc": 1701,
    "dati2": 283,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 79,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "i00_i99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.132827,
    "is_contradictory_claim": false,
    "active_dx": [
      "J00_J99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 283"
      }
    ]
  },
  {
    "claim_id": "CLM_AFA39A6CA512FC",
    "kdkc": 1306,
    "dati2": 211,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 46,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 1.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.132827,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 211"
      }
    ]
  },
  {
    "claim_id": "CLM_EE4FFE1AE9E5E1",
    "kdkc": 605,
    "dati2": 92,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 24,
    "los": 0,
    "severitylevel": 1,
    "cmg": "W",
    "diagprimer": "o00_o99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.132827,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "68_70"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG W (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 92"
      }
    ]
  },
  {
    "claim_id": "CLM_D7F6C101BB5A5E",
    "kdkc": 1306,
    "dati2": 211,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 85,
    "los": 1,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 2,
    "n_proc": 2,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.132827,
    "is_contradictory_claim": false,
    "active_dx": [
      "E00_E90",
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 211"
      }
    ]
  },
  {
    "claim_id": "CLM_8ADB472934F268",
    "kdkc": 1804,
    "dati2": 330,
    "typeppk": "D ",
    "jkpst": "L",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.132827,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 330"
      }
    ]
  },
  {
    "claim_id": "CLM_44E7799641B29C",
    "kdkc": 1603,
    "dati2": 303,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.132827,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 303"
      }
    ]
  },
  {
    "claim_id": "CLM_3E0713F6891301",
    "kdkc": 302,
    "dati2": 406,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 20,
    "los": 1,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.128644,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 406"
      }
    ]
  },
  {
    "claim_id": "CLM_D21518BD94953D",
    "kdkc": 905,
    "dati2": 116,
    "typeppk": "D ",
    "jkpst": "P",
    "umur": 69,
    "los": 2,
    "severitylevel": 2,
    "cmg": "L",
    "diagprimer": "s00_t98",
    "n_dx2": 1,
    "n_proc": 7,
    "dx_per_los": 0.333,
    "proc_per_los": 2.333,
    "severity_short_stay": 0,
    "fraud_probability": 0.128644,
    "is_contradictory_claim": false,
    "active_dx": [
      "E00_E90"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "7 prosedur dalam 2 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG L (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 116"
      }
    ]
  },
  {
    "claim_id": "CLM_1018C4D93796B1",
    "kdkc": 302,
    "dati2": 49,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 62,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.124269,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 49"
      }
    ]
  },
  {
    "claim_id": "CLM_43BD44A979152D",
    "kdkc": 1004,
    "dati2": 224,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 34,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.124269,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 224"
      }
    ]
  },
  {
    "claim_id": "CLM_1C690613A394E7",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 64,
    "los": 0,
    "severitylevel": 0,
    "cmg": "L",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.124269,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG L (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_0A1245BBC7FB66",
    "kdkc": 201,
    "dati2": 38,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 47,
    "los": 2,
    "severitylevel": 2,
    "cmg": "E",
    "diagprimer": "e00_e90",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 0.333,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.124269,
    "is_contradictory_claim": false,
    "active_dx": [
      "R00_R99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG E (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 38"
      }
    ]
  },
  {
    "claim_id": "CLM_E0D77268C444C1",
    "kdkc": 405,
    "dati2": 70,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 38,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.124269,
    "is_contradictory_claim": false,
    "active_dx": [
      "G00_G99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 70"
      }
    ]
  },
  {
    "claim_id": "CLM_076EA90345743F",
    "kdkc": 1306,
    "dati2": 185,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 55,
    "los": 1,
    "severitylevel": 1,
    "cmg": "L",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.124269,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG L (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 185"
      }
    ]
  },
  {
    "claim_id": "CLM_6CDAD4C425595F",
    "kdkc": 1312,
    "dati2": 206,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 38,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.111553,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 206"
      }
    ]
  },
  {
    "claim_id": "CLM_F34A6129168706",
    "kdkc": 1301,
    "dati2": 217,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 41,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.111553,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 217"
      }
    ]
  },
  {
    "claim_id": "CLM_BEE8878DB5933F",
    "kdkc": 1315,
    "dati2": 205,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 59,
    "los": 1,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 1.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.111553,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 1 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 205"
      }
    ]
  },
  {
    "claim_id": "CLM_2A663E64CD58C5",
    "kdkc": 1103,
    "dati2": 174,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 5,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "a00_b99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.111553,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 174"
      }
    ]
  },
  {
    "claim_id": "CLM_214317E4612D42",
    "kdkc": 1005,
    "dati2": 134,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.111553,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 134"
      }
    ]
  },
  {
    "claim_id": "CLM_0D357740AB82C0",
    "kdkc": 1806,
    "dati2": 329,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 71,
    "los": 0,
    "severitylevel": 0,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.109568,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 329"
      }
    ]
  },
  {
    "claim_id": "CLM_C5AA76856047D8",
    "kdkc": 2001,
    "dati2": 314,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 6,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.109568,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 314"
      }
    ]
  },
  {
    "claim_id": "CLM_9392E90629BF86",
    "kdkc": 1302,
    "dati2": 202,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 54,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.109568,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 202"
      }
    ]
  },
  {
    "claim_id": "CLM_562E8A4FC868FC",
    "kdkc": 1307,
    "dati2": 196,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "q00_q99",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 0.333,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.109568,
    "is_contradictory_claim": false,
    "active_dx": [
      "P00_P96"
    ],
    "active_proc": [
      "00_13",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 196"
      }
    ]
  },
  {
    "claim_id": "CLM_BFA964F0AD2FA6",
    "kdkc": 405,
    "dati2": 70,
    "typeppk": "KI",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 0.667,
    "severity_short_stay": 0,
    "fraud_probability": 0.109568,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 70"
      }
    ]
  },
  {
    "claim_id": "CLM_F5426C26570B40",
    "kdkc": 405,
    "dati2": 70,
    "typeppk": "KI",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 0.667,
    "severity_short_stay": 0,
    "fraud_probability": 0.109568,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 70"
      }
    ]
  },
  {
    "claim_id": "CLM_9D614EA684B60A",
    "kdkc": 1313,
    "dati2": 183,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 55,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "i00_i99",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 2.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.104185,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 183"
      }
    ]
  },
  {
    "claim_id": "CLM_54FC8890F53F8D",
    "kdkc": 702,
    "dati2": 441,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.104185,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 441"
      }
    ]
  },
  {
    "claim_id": "CLM_3618005203F53C",
    "kdkc": 2302,
    "dati2": 346,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 72,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.104185,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 346"
      }
    ]
  },
  {
    "claim_id": "CLM_77EF9D7668B0C5",
    "kdkc": 206,
    "dati2": 32,
    "typeppk": "SB",
    "jkpst": "L",
    "umur": 44,
    "los": 0,
    "severitylevel": 0,
    "cmg": "K",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.104185,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 32"
      }
    ]
  },
  {
    "claim_id": "CLM_02B5FFDFD17162",
    "kdkc": 1010,
    "dati2": 120,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 74,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [
      "C00_D48"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 120"
      }
    ]
  },
  {
    "claim_id": "CLM_1190211FB4D9CF",
    "kdkc": 1004,
    "dati2": 222,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 35,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 222"
      }
    ]
  },
  {
    "claim_id": "CLM_933545D0D97B80",
    "kdkc": 1301,
    "dati2": 217,
    "typeppk": "A ",
    "jkpst": "L",
    "umur": 33,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 217"
      }
    ]
  },
  {
    "claim_id": "CLM_9D494FFF75E1AB",
    "kdkc": 1306,
    "dati2": 198,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 6,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 198"
      }
    ]
  },
  {
    "claim_id": "CLM_DAB0A666A408AD",
    "kdkc": 1104,
    "dati2": 143,
    "typeppk": "KI",
    "jkpst": "L",
    "umur": 0,
    "los": 3,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 143"
      }
    ]
  },
  {
    "claim_id": "CLM_74A7A1DD07819C",
    "kdkc": 901,
    "dati2": 114,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 39,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [
      "M00_M99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 114"
      }
    ]
  },
  {
    "claim_id": "CLM_07377A318B762D",
    "kdkc": 1801,
    "dati2": 342,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [
      "C00_D48"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 342"
      }
    ]
  },
  {
    "claim_id": "CLM_B62E58FB614108",
    "kdkc": 1313,
    "dati2": 184,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 54,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 184"
      }
    ]
  },
  {
    "claim_id": "CLM_561BA4FA89D6A8",
    "kdkc": 1004,
    "dati2": 470,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 0,
    "los": 0,
    "severitylevel": 0,
    "cmg": "K",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 470"
      }
    ]
  },
  {
    "claim_id": "CLM_293608C92CFDAB",
    "kdkc": 1501,
    "dati2": 265,
    "typeppk": "I3",
    "jkpst": "P",
    "umur": 0,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 265"
      }
    ]
  },
  {
    "claim_id": "CLM_17328A58D4124E",
    "kdkc": 303,
    "dati2": 51,
    "typeppk": "I4",
    "jkpst": "L",
    "umur": 17,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 51"
      }
    ]
  },
  {
    "claim_id": "CLM_DBACC3F9ED7FBE",
    "kdkc": 1308,
    "dati2": 187,
    "typeppk": "I4",
    "jkpst": "L",
    "umur": 35,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 187"
      }
    ]
  },
  {
    "claim_id": "CLM_6034CA4F12ACB3",
    "kdkc": 2501,
    "dati2": 359,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 22,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "o00_o99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.097138,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 359"
      }
    ]
  },
  {
    "claim_id": "CLM_9491847C391DEE",
    "kdkc": 1202,
    "dati2": 176,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 48,
    "los": 0,
    "severitylevel": 0,
    "cmg": "J",
    "diagprimer": "j00_j99",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 1.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.084554,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 176"
      }
    ]
  },
  {
    "claim_id": "CLM_DBADD72854973B",
    "kdkc": 201,
    "dati2": 38,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 48,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.084554,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 38"
      }
    ]
  },
  {
    "claim_id": "CLM_831CCCE4451B6A",
    "kdkc": 2407,
    "dati2": 247,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 65,
    "los": 3,
    "severitylevel": 1,
    "cmg": "I",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 0.75,
    "severity_short_stay": 0,
    "fraud_probability": 0.084554,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG I (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 247"
      }
    ]
  },
  {
    "claim_id": "CLM_9E580FF4A10145",
    "kdkc": 2601,
    "dati2": 383,
    "typeppk": "I2",
    "jkpst": "L",
    "umur": 0,
    "los": 1,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.084554,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 383"
      }
    ]
  },
  {
    "claim_id": "CLM_93A77B00A525B5",
    "kdkc": 1006,
    "dati2": 131,
    "typeppk": "KM",
    "jkpst": "P",
    "umur": 56,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.082955,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 131"
      }
    ]
  },
  {
    "claim_id": "CLM_488AB7EC0FE80C",
    "kdkc": 1101,
    "dati2": 161,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 0,
    "los": 3,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.082955,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 161"
      }
    ]
  },
  {
    "claim_id": "CLM_2BE468E5CC3E6C",
    "kdkc": 1110,
    "dati2": 160,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 45,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "c00_d48",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.082955,
    "is_contradictory_claim": false,
    "active_dx": [
      "M00_M99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 160"
      }
    ]
  },
  {
    "claim_id": "CLM_539232529CFFE5",
    "kdkc": 902,
    "dati2": 112,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 59,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.082955,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 112"
      }
    ]
  },
  {
    "claim_id": "CLM_9D98DB5DD50C0A",
    "kdkc": 902,
    "dati2": 112,
    "typeppk": "I3",
    "jkpst": "P",
    "umur": 60,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.082955,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 112"
      }
    ]
  },
  {
    "claim_id": "CLM_AA47971D927805",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 74,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.078965,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_799CB6F91C5C58",
    "kdkc": 101,
    "dati2": 17,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 65,
    "los": 0,
    "severitylevel": 0,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.078965,
    "is_contradictory_claim": true,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 17"
      }
    ]
  },
  {
    "claim_id": "CLM_8697C276348CAE",
    "kdkc": 1006,
    "dati2": 131,
    "typeppk": "KM",
    "jkpst": "L",
    "umur": 29,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076458,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 131"
      }
    ]
  },
  {
    "claim_id": "CLM_63CD1E9961AB19",
    "kdkc": 1202,
    "dati2": 179,
    "typeppk": "A ",
    "jkpst": "L",
    "umur": 63,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "d50_d89",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076458,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 179"
      }
    ]
  },
  {
    "claim_id": "CLM_D30EA40BD0A072",
    "kdkc": 601,
    "dati2": 90,
    "typeppk": "I3",
    "jkpst": "P",
    "umur": 2,
    "los": 5,
    "severitylevel": 1,
    "cmg": "J",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076458,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 90"
      }
    ]
  },
  {
    "claim_id": "CLM_81CC5611BA6019",
    "kdkc": 1111,
    "dati2": 158,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 37,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076458,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 158"
      }
    ]
  },
  {
    "claim_id": "CLM_957A242EC91190",
    "kdkc": 1112,
    "dati2": 168,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 43,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076458,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 168"
      }
    ]
  },
  {
    "claim_id": "CLM_2AB735A16413A0",
    "kdkc": 1306,
    "dati2": 186,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 0,
    "los": 4,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 2,
    "n_proc": 0,
    "dx_per_los": 0.4,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076346,
    "is_contradictory_claim": false,
    "active_dx": [
      "P00_P96",
      "Z00_Z99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 186"
      }
    ]
  },
  {
    "claim_id": "CLM_C1AA1D197B41A2",
    "kdkc": 1603,
    "dati2": 303,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 34,
    "los": 0,
    "severitylevel": 0,
    "cmg": "N",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076346,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "39_45"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG N (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 303"
      }
    ]
  },
  {
    "claim_id": "CLM_EE870F1ED3C02B",
    "kdkc": 1101,
    "dati2": 173,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 70,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "i00_i99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076346,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 173"
      }
    ]
  },
  {
    "claim_id": "CLM_83F7C1A5FC22FC",
    "kdkc": 1308,
    "dati2": 212,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 69,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076346,
    "is_contradictory_claim": false,
    "active_dx": [
      "M00_M99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 212"
      }
    ]
  },
  {
    "claim_id": "CLM_F74E8DBD207E08",
    "kdkc": 903,
    "dati2": 113,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076346,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 113"
      }
    ]
  },
  {
    "claim_id": "CLM_86434847B1364F",
    "kdkc": 903,
    "dati2": 113,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076346,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 113"
      }
    ]
  },
  {
    "claim_id": "CLM_4AF13F324CA1B5",
    "kdkc": 604,
    "dati2": 85,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 16,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.076346,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 85"
      }
    ]
  },
  {
    "claim_id": "CLM_CE521E90805B16",
    "kdkc": 1801,
    "dati2": 342,
    "typeppk": "SB",
    "jkpst": "L",
    "umur": 0,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.070024,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 342"
      }
    ]
  },
  {
    "claim_id": "CLM_57284BE00C4B1A",
    "kdkc": 2103,
    "dati2": 437,
    "typeppk": "D ",
    "jkpst": "P",
    "umur": 33,
    "los": 2,
    "severitylevel": 1,
    "cmg": "J",
    "diagprimer": "j00_j99",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 0.333,
    "proc_per_los": 0.667,
    "severity_short_stay": 0,
    "fraud_probability": 0.069961,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 437"
      }
    ]
  },
  {
    "claim_id": "CLM_D7EB4C58E12EC0",
    "kdkc": 2501,
    "dati2": 442,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 1,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.069961,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 442"
      }
    ]
  },
  {
    "claim_id": "CLM_AB10BC7A52C90C",
    "kdkc": 1108,
    "dati2": 171,
    "typeppk": "SD",
    "jkpst": "L",
    "umur": 60,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.069961,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 171"
      }
    ]
  },
  {
    "claim_id": "CLM_C345F971CFAC77",
    "kdkc": 1312,
    "dati2": 209,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 5,
    "los": 0,
    "severitylevel": 0,
    "cmg": "L",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.069961,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG L (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 209"
      }
    ]
  },
  {
    "claim_id": "CLM_AE1BA963008A73",
    "kdkc": 301,
    "dati2": 50,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 2,
    "los": 0,
    "severitylevel": 0,
    "cmg": "J",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.069961,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "_32_38"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 50"
      }
    ]
  },
  {
    "claim_id": "CLM_28524CDCD943AF",
    "kdkc": 1112,
    "dati2": 168,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 41,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.069961,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 168"
      }
    ]
  },
  {
    "claim_id": "CLM_D74C3AB8440E00",
    "kdkc": 2401,
    "dati2": 351,
    "typeppk": "SB",
    "jkpst": "L",
    "umur": 77,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.069961,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 351"
      }
    ]
  },
  {
    "claim_id": "CLM_7DDFB598F20410",
    "kdkc": 1314,
    "dati2": 195,
    "typeppk": "D ",
    "jkpst": "P",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.065954,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 195"
      }
    ]
  },
  {
    "claim_id": "CLM_FEC0991D871D4F",
    "kdkc": 1011,
    "dati2": 137,
    "typeppk": "SB",
    "jkpst": "L",
    "umur": 62,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.065954,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 137"
      }
    ]
  },
  {
    "claim_id": "CLM_0A0EF36F4824CA",
    "kdkc": 1308,
    "dati2": 187,
    "typeppk": "SD",
    "jkpst": "L",
    "umur": 60,
    "los": 0,
    "severitylevel": 0,
    "cmg": "K",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.065954,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 187"
      }
    ]
  },
  {
    "claim_id": "CLM_573AC32189BC93",
    "kdkc": 1008,
    "dati2": 136,
    "typeppk": "KI",
    "jkpst": "L",
    "umur": 27,
    "los": 1,
    "severitylevel": 1,
    "cmg": "W",
    "diagprimer": "o00_o99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.065954,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "68_70"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG W (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 136"
      }
    ]
  },
  {
    "claim_id": "CLM_38479566D5AD2D",
    "kdkc": 904,
    "dati2": 115,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 22,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.065954,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 115"
      }
    ]
  },
  {
    "claim_id": "CLM_69BAC639A2455D",
    "kdkc": 1004,
    "dati2": 470,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 33,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.065954,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 470"
      }
    ]
  },
  {
    "claim_id": "CLM_792FB4F10EE780",
    "kdkc": 1201,
    "dati2": 178,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 77,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.061304,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 178"
      }
    ]
  },
  {
    "claim_id": "CLM_7332F22DBCD2B9",
    "kdkc": 1701,
    "dati2": 291,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 47,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "g00_g99",
    "n_dx2": 3,
    "n_proc": 1,
    "dx_per_los": 3.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.061304,
    "is_contradictory_claim": false,
    "active_dx": [
      "G00_G99",
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "3 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 291"
      }
    ]
  },
  {
    "claim_id": "CLM_2C4515591128E8",
    "kdkc": 901,
    "dati2": 114,
    "typeppk": "D ",
    "jkpst": "L",
    "umur": 24,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "a00_b99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.061304,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 114"
      }
    ]
  },
  {
    "claim_id": "CLM_DB9EAA1EB55BAC",
    "kdkc": 1306,
    "dati2": 210,
    "typeppk": "D ",
    "jkpst": "L",
    "umur": 47,
    "los": 1,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.061304,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 210"
      }
    ]
  },
  {
    "claim_id": "CLM_ED34C9D1F6566B",
    "kdkc": 102,
    "dati2": 1,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 56,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.061304,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 1"
      }
    ]
  },
  {
    "claim_id": "CLM_F86EE29740E5C8",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 19,
    "los": 0,
    "severitylevel": 0,
    "cmg": "K",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.058742,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_8AC7125025F5E9",
    "kdkc": 1016,
    "dati2": 117,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 67,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.058742,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 117"
      }
    ]
  },
  {
    "claim_id": "CLM_DAD0FD643A4A86",
    "kdkc": 904,
    "dati2": 115,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.333,
    "severity_short_stay": 0,
    "fraud_probability": 0.056627,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 115"
      }
    ]
  },
  {
    "claim_id": "CLM_E0847C96E5AB67",
    "kdkc": 1901,
    "dati2": 423,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 33,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.056627,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 423"
      }
    ]
  },
  {
    "claim_id": "CLM_49E8ACAEAC7FE9",
    "kdkc": 902,
    "dati2": 112,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 69,
    "los": 1,
    "severitylevel": 1,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.056627,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 112"
      }
    ]
  },
  {
    "claim_id": "CLM_40AEA0F03DD663",
    "kdkc": 1007,
    "dati2": 129,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 29,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.056627,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 129"
      }
    ]
  },
  {
    "claim_id": "CLM_968211E6B452A1",
    "kdkc": 1010,
    "dati2": 120,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 58,
    "los": 0,
    "severitylevel": 0,
    "cmg": "K",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.056627,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 120"
      }
    ]
  },
  {
    "claim_id": "CLM_E0AE077B38E675",
    "kdkc": 201,
    "dati2": 39,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 67,
    "los": 4,
    "severitylevel": 1,
    "cmg": "E",
    "diagprimer": "e00_e90",
    "n_dx2": 1,
    "n_proc": 4,
    "dx_per_los": 0.2,
    "proc_per_los": 0.8,
    "severity_short_stay": 0,
    "fraud_probability": 0.056627,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG E (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 39"
      }
    ]
  },
  {
    "claim_id": "CLM_88E62FEAFB1B2F",
    "kdkc": 405,
    "dati2": 70,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 28,
    "los": 2,
    "severitylevel": 1,
    "cmg": "G",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 6,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.056627,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "6 prosedur dalam 2 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 70"
      }
    ]
  },
  {
    "claim_id": "CLM_B1A18657836791",
    "kdkc": 1306,
    "dati2": 186,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 44,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "a00_b99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.054597,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "E00_E99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 186"
      }
    ]
  },
  {
    "claim_id": "CLM_2DAC0CA00080DC",
    "kdkc": 1011,
    "dati2": 137,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 68,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.054597,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 137"
      }
    ]
  },
  {
    "claim_id": "CLM_6B1B14AABBAB06",
    "kdkc": 1108,
    "dati2": 171,
    "typeppk": "KP",
    "jkpst": "L",
    "umur": 80,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.05259,
    "is_contradictory_claim": false,
    "active_dx": [
      "E00_E90"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 171"
      }
    ]
  },
  {
    "claim_id": "CLM_FB83F0AF10802D",
    "kdkc": 1308,
    "dati2": 187,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 71,
    "los": 3,
    "severitylevel": 3,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 3,
    "n_proc": 1,
    "dx_per_los": 0.75,
    "proc_per_los": 0.25,
    "severity_short_stay": 0,
    "fraud_probability": 0.05259,
    "is_contradictory_claim": false,
    "active_dx": [
      "C00_D48",
      "E00_E90",
      "R00_R99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 187"
      }
    ]
  },
  {
    "claim_id": "CLM_67E0A7721119B6",
    "kdkc": 1601,
    "dati2": 295,
    "typeppk": "D ",
    "jkpst": "P",
    "umur": 28,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.05259,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 295"
      }
    ]
  },
  {
    "claim_id": "CLM_C8C30A31FC5173",
    "kdkc": 1308,
    "dati2": 212,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 71,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.05259,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 212"
      }
    ]
  },
  {
    "claim_id": "CLM_B5CEF786C6C142",
    "kdkc": 1113,
    "dati2": 147,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 30,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "o00_o99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.05105,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 147"
      }
    ]
  },
  {
    "claim_id": "CLM_700C73349EFA5B",
    "kdkc": 1004,
    "dati2": 470,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 63,
    "los": 0,
    "severitylevel": 0,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.05105,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 470"
      }
    ]
  },
  {
    "claim_id": "CLM_60CF4876E5DD0A",
    "kdkc": 1312,
    "dati2": 209,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 9,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.05105,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 209"
      }
    ]
  },
  {
    "claim_id": "CLM_2DD96C6E8A40B9",
    "kdkc": 1308,
    "dati2": 212,
    "typeppk": "SB",
    "jkpst": "L",
    "umur": 38,
    "los": 2,
    "severitylevel": 2,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 0.333,
    "proc_per_los": 0.667,
    "severity_short_stay": 0,
    "fraud_probability": 0.05105,
    "is_contradictory_claim": false,
    "active_dx": [
      "E00_E90"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 212"
      }
    ]
  },
  {
    "claim_id": "CLM_746CBAC7220093",
    "kdkc": 1110,
    "dati2": 159,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.05105,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 159"
      }
    ]
  },
  {
    "claim_id": "CLM_3647E2D1B6D4B3",
    "kdkc": 1601,
    "dati2": 295,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 34,
    "los": 5,
    "severitylevel": 2,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 0.167,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.05105,
    "is_contradictory_claim": false,
    "active_dx": [
      "N00_N99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 295"
      }
    ]
  },
  {
    "claim_id": "CLM_5901A9001A2199",
    "kdkc": 406,
    "dati2": 66,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 56,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.05105,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 66"
      }
    ]
  },
  {
    "claim_id": "CLM_F2631F7BD634D2",
    "kdkc": 1309,
    "dati2": 194,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 43,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.05105,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 194"
      }
    ]
  },
  {
    "claim_id": "CLM_1CF691E31F7DFC",
    "kdkc": 1603,
    "dati2": 303,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 41,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.048975,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 303"
      }
    ]
  },
  {
    "claim_id": "CLM_46C19525373D57",
    "kdkc": 1301,
    "dati2": 217,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 43,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.048975,
    "is_contradictory_claim": false,
    "active_dx": [
      "G00_G99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 217"
      }
    ]
  },
  {
    "claim_id": "CLM_9A4498A5DF1414",
    "kdkc": 902,
    "dati2": 112,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 55,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "i00_i99",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.048975,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 112"
      }
    ]
  },
  {
    "claim_id": "CLM_EA6C448F71CD4D",
    "kdkc": 904,
    "dati2": 115,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 67,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.048975,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 115"
      }
    ]
  },
  {
    "claim_id": "CLM_929F09519F6666",
    "kdkc": 1001,
    "dati2": 135,
    "typeppk": "I2",
    "jkpst": "L",
    "umur": 42,
    "los": 4,
    "severitylevel": 3,
    "cmg": "J",
    "diagprimer": "g00_g99",
    "n_dx2": 10,
    "n_proc": 11,
    "dx_per_los": 2.0,
    "proc_per_los": 2.2,
    "severity_short_stay": 0,
    "fraud_probability": 0.048975,
    "is_contradictory_claim": false,
    "active_dx": [
      "A00_B99",
      "E00_E90",
      "G00_G99",
      "H60_H95"
    ],
    "active_proc": [
      "00_13",
      "29_31",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "11 prosedur dalam 4 hari rawat inap"
      },
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "10 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (g00_g99)"
      }
    ]
  },
  {
    "claim_id": "CLM_CCF2AA2DBF6777",
    "kdkc": 302,
    "dati2": 406,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 54,
    "los": 5,
    "severitylevel": 2,
    "cmg": "G",
    "diagprimer": "i00_i99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 0.167,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.048975,
    "is_contradictory_claim": false,
    "active_dx": [
      "G00_G99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 406"
      }
    ]
  },
  {
    "claim_id": "CLM_A03AD99BDF05C5",
    "kdkc": 801,
    "dati2": 106,
    "typeppk": "A ",
    "jkpst": "L",
    "umur": 60,
    "los": 2,
    "severitylevel": 2,
    "cmg": "G",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.048975,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 106"
      }
    ]
  },
  {
    "claim_id": "CLM_7CC7311BDE2F24",
    "kdkc": 2603,
    "dati2": 370,
    "typeppk": "D ",
    "jkpst": "P",
    "umur": 43,
    "los": 2,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 10,
    "dx_per_los": 0.0,
    "proc_per_los": 3.333,
    "severity_short_stay": 0,
    "fraud_probability": 0.04588,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "10 prosedur dalam 2 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 370"
      }
    ]
  },
  {
    "claim_id": "CLM_00A3FA73151251",
    "kdkc": 905,
    "dati2": 116,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 3,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.04588,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 116"
      }
    ]
  },
  {
    "claim_id": "CLM_0F4CF8E5A977E6",
    "kdkc": 1201,
    "dati2": 180,
    "typeppk": "D ",
    "jkpst": "P",
    "umur": 31,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.04588,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 180"
      }
    ]
  },
  {
    "claim_id": "CLM_D074AAB1938016",
    "kdkc": 1017,
    "dati2": 132,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 72,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.04588,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 132"
      }
    ]
  },
  {
    "claim_id": "CLM_FF36AD516C634F",
    "kdkc": 1110,
    "dati2": 159,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 30,
    "los": 1,
    "severitylevel": 1,
    "cmg": "W",
    "diagprimer": "o00_o99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 1.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.045315,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "68_70",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 1 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG W (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 159"
      }
    ]
  },
  {
    "claim_id": "CLM_591CBE47FA27A1",
    "kdkc": 1108,
    "dati2": 154,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.044544,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 154"
      }
    ]
  },
  {
    "claim_id": "CLM_7E927879ACBBB6",
    "kdkc": 1011,
    "dati2": 137,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 40,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.042754,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 137"
      }
    ]
  },
  {
    "claim_id": "CLM_4E58589D76796B",
    "kdkc": 905,
    "dati2": 116,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 50,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.042191,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 116"
      }
    ]
  },
  {
    "claim_id": "CLM_5FA52C7935624D",
    "kdkc": 1112,
    "dati2": 168,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 46,
    "los": 8,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.111,
    "severity_short_stay": 0,
    "fraud_probability": 0.040685,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 168"
      }
    ]
  },
  {
    "claim_id": "CLM_1DC3D7CC46EDF7",
    "kdkc": 1007,
    "dati2": 127,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.333,
    "severity_short_stay": 0,
    "fraud_probability": 0.040685,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 127"
      }
    ]
  },
  {
    "claim_id": "CLM_E5324A1BF0A306",
    "kdkc": 903,
    "dati2": 113,
    "typeppk": "KI",
    "jkpst": "P",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.040685,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 113"
      }
    ]
  },
  {
    "claim_id": "CLM_A16856E88EB3E8",
    "kdkc": 1312,
    "dati2": 206,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 32,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.040685,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 206"
      }
    ]
  },
  {
    "claim_id": "CLM_47DCFB4F90D69E",
    "kdkc": 903,
    "dati2": 113,
    "typeppk": "KI",
    "jkpst": "P",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.040685,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 113"
      }
    ]
  },
  {
    "claim_id": "CLM_59FB2ED338FB93",
    "kdkc": 1107,
    "dati2": 149,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.039476,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 149"
      }
    ]
  },
  {
    "claim_id": "CLM_15A41C159E1F16",
    "kdkc": 1701,
    "dati2": 283,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.333,
    "severity_short_stay": 0,
    "fraud_probability": 0.039476,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 283"
      }
    ]
  },
  {
    "claim_id": "CLM_77AA118F12E469",
    "kdkc": 304,
    "dati2": 45,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 17,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.039476,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 45"
      }
    ]
  },
  {
    "claim_id": "CLM_F1EE7E39D16B63",
    "kdkc": 1006,
    "dati2": 130,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 66,
    "los": 1,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.039476,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 130"
      }
    ]
  },
  {
    "claim_id": "CLM_75FEACDA03A6DB",
    "kdkc": 2002,
    "dati2": 412,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 23,
    "los": 3,
    "severitylevel": 2,
    "cmg": "O",
    "diagprimer": "o00_o99",
    "n_dx2": 6,
    "n_proc": 5,
    "dx_per_los": 1.5,
    "proc_per_los": 1.25,
    "severity_short_stay": 0,
    "fraud_probability": 0.039476,
    "is_contradictory_claim": false,
    "active_dx": [
      "A00_B99",
      "O00_O99",
      "Z00_Z99"
    ],
    "active_proc": [
      "52_57",
      "74_75",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG O (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 412"
      }
    ]
  },
  {
    "claim_id": "CLM_E09C94F9FCE752",
    "kdkc": 1307,
    "dati2": 196,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 13,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.039476,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 196"
      }
    ]
  },
  {
    "claim_id": "CLM_0DE418FA062DE7",
    "kdkc": 1110,
    "dati2": 160,
    "typeppk": "SD",
    "jkpst": "L",
    "umur": 5,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "g00_g99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.039476,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 160"
      }
    ]
  },
  {
    "claim_id": "CLM_5EDA641BB1019A",
    "kdkc": 901,
    "dati2": 114,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 61,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "g00_g99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.039476,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 114"
      }
    ]
  },
  {
    "claim_id": "CLM_9CC2CDE5A8B712",
    "kdkc": 1101,
    "dati2": 173,
    "typeppk": "A ",
    "jkpst": "L",
    "umur": 69,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 5,
    "n_proc": 1,
    "dx_per_los": 5.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.039476,
    "is_contradictory_claim": false,
    "active_dx": [
      "E00_E90",
      "I00_I99",
      "N00_N99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "5 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 173"
      }
    ]
  },
  {
    "claim_id": "CLM_3281F6262D811D",
    "kdkc": 1005,
    "dati2": 118,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 30,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.039476,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 118"
      }
    ]
  },
  {
    "claim_id": "CLM_30A8BAD9AD87D9",
    "kdkc": 1501,
    "dati2": 265,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 44,
    "los": 0,
    "severitylevel": 0,
    "cmg": "J",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.039476,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 265"
      }
    ]
  },
  {
    "claim_id": "CLM_A7F287A924A8F3",
    "kdkc": 1108,
    "dati2": 151,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 17,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.038678,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 151"
      }
    ]
  },
  {
    "claim_id": "CLM_DE5DB0945D6BCB",
    "kdkc": 1315,
    "dati2": 204,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 61,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.037546,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 204"
      }
    ]
  },
  {
    "claim_id": "CLM_E70AF5832B5433",
    "kdkc": 101,
    "dati2": 9,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 9,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.037546,
    "is_contradictory_claim": true,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 9"
      }
    ]
  },
  {
    "claim_id": "CLM_D81F7F508AE0D6",
    "kdkc": 1201,
    "dati2": 177,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 57,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.037546,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 177"
      }
    ]
  },
  {
    "claim_id": "CLM_253B5EAB03DB06",
    "kdkc": 1808,
    "dati2": 336,
    "typeppk": "KL",
    "jkpst": "P",
    "umur": 63,
    "los": 1,
    "severitylevel": 1,
    "cmg": "I",
    "diagprimer": "i00_i99",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 0.5,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.037546,
    "is_contradictory_claim": false,
    "active_dx": [
      "R00_R99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG I (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 336"
      }
    ]
  },
  {
    "claim_id": "CLM_277FA331C8C465",
    "kdkc": 904,
    "dati2": 115,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 45,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.033736,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 115"
      }
    ]
  },
  {
    "claim_id": "CLM_FD69DE5DDACC3B",
    "kdkc": 1202,
    "dati2": 179,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 43,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.033736,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 179"
      }
    ]
  },
  {
    "claim_id": "CLM_10A688180334C4",
    "kdkc": 1202,
    "dati2": 179,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 41,
    "los": 1,
    "severitylevel": 1,
    "cmg": "S",
    "diagprimer": "s00_t98",
    "n_dx2": 1,
    "n_proc": 7,
    "dx_per_los": 0.5,
    "proc_per_los": 3.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.033736,
    "is_contradictory_claim": false,
    "active_dx": [
      "S00_T98"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "7 prosedur dalam 1 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG S (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 179"
      }
    ]
  },
  {
    "claim_id": "CLM_8E841B41D2D7EE",
    "kdkc": 1315,
    "dati2": 205,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 43,
    "los": 4,
    "severitylevel": 1,
    "cmg": "L",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.033736,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG L (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 205"
      }
    ]
  },
  {
    "claim_id": "CLM_EBD445EB4A7075",
    "kdkc": 1309,
    "dati2": 193,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 25,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.033736,
    "is_contradictory_claim": false,
    "active_dx": [
      "A00_B99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 193"
      }
    ]
  },
  {
    "claim_id": "CLM_1FCD4F216BCD97",
    "kdkc": 1004,
    "dati2": 222,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.033736,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 222"
      }
    ]
  },
  {
    "claim_id": "CLM_AA379C422A4C50",
    "kdkc": 904,
    "dati2": 115,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 42,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.033736,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 115"
      }
    ]
  },
  {
    "claim_id": "CLM_014CE2C6321CDC",
    "kdkc": 1112,
    "dati2": 168,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 36,
    "los": 3,
    "severitylevel": 1,
    "cmg": "B",
    "diagprimer": "k00_k93",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 0.25,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.032374,
    "is_contradictory_claim": false,
    "active_dx": [
      "R00_R99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG B (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 168"
      }
    ]
  },
  {
    "claim_id": "CLM_BC1AB553F309B2",
    "kdkc": 1301,
    "dati2": 217,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 66,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.032374,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 217"
      }
    ]
  },
  {
    "claim_id": "CLM_824BEECFF98415",
    "kdkc": 1701,
    "dati2": 281,
    "typeppk": "KL",
    "jkpst": "L",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.032374,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 281"
      }
    ]
  },
  {
    "claim_id": "CLM_5CF3C460578C77",
    "kdkc": 2201,
    "dati2": 233,
    "typeppk": "A ",
    "jkpst": "L",
    "umur": 16,
    "los": 8,
    "severitylevel": 1,
    "cmg": "U",
    "diagprimer": "s00_t98",
    "n_dx2": 3,
    "n_proc": 11,
    "dx_per_los": 0.333,
    "proc_per_los": 1.222,
    "severity_short_stay": 0,
    "fraud_probability": 0.032374,
    "is_contradictory_claim": false,
    "active_dx": [
      "J00_J99",
      "S00_T98",
      "V01_Y98"
    ],
    "active_proc": [
      "14_23",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 233"
      }
    ]
  },
  {
    "claim_id": "CLM_75145E1DBA07A4",
    "kdkc": 1701,
    "dati2": 281,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 79,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 1.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.032374,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 281"
      }
    ]
  },
  {
    "claim_id": "CLM_131A675332852A",
    "kdkc": 404,
    "dati2": 65,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 5,
    "los": 3,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.25,
    "severity_short_stay": 0,
    "fraud_probability": 0.032374,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 65"
      }
    ]
  },
  {
    "claim_id": "CLM_EE57D7C78CF20D",
    "kdkc": 1314,
    "dati2": 195,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 46,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.032374,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 195"
      }
    ]
  },
  {
    "claim_id": "CLM_7F1F866CD30242",
    "kdkc": 1016,
    "dati2": 117,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 55,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.029876,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 117"
      }
    ]
  },
  {
    "claim_id": "CLM_0250AEF15F283C",
    "kdkc": 1602,
    "dati2": 301,
    "typeppk": "I3",
    "jkpst": "L",
    "umur": 32,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.029281,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 301"
      }
    ]
  },
  {
    "claim_id": "CLM_73BF864D4CE197",
    "kdkc": 1307,
    "dati2": 196,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 58,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.029281,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 196"
      }
    ]
  },
  {
    "claim_id": "CLM_F919913712AB6C",
    "kdkc": 1801,
    "dati2": 327,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 50,
    "los": 0,
    "severitylevel": 0,
    "cmg": "L",
    "diagprimer": "s00_t98",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 1.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.028448,
    "is_contradictory_claim": false,
    "active_dx": [
      "V01_Y98"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG L (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 327"
      }
    ]
  },
  {
    "claim_id": "CLM_1BA21CC70A616F",
    "kdkc": 1016,
    "dati2": 117,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 22,
    "los": 2,
    "severitylevel": 1,
    "cmg": "L",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.333,
    "severity_short_stay": 0,
    "fraud_probability": 0.028448,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG L (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 117"
      }
    ]
  },
  {
    "claim_id": "CLM_906B662CFAF36F",
    "kdkc": 905,
    "dati2": 116,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 26,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.028448,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 116"
      }
    ]
  },
  {
    "claim_id": "CLM_0EFA410162E127",
    "kdkc": 405,
    "dati2": 70,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 0,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.028448,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 70"
      }
    ]
  },
  {
    "claim_id": "CLM_07CBBA08E7AD28",
    "kdkc": 501,
    "dati2": 82,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 3,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.028448,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 82"
      }
    ]
  },
  {
    "claim_id": "CLM_61315AD2F2B118",
    "kdkc": 1003,
    "dati2": 496,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 61,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 2.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.027414,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 496"
      }
    ]
  },
  {
    "claim_id": "CLM_35E1C542BC3CAB",
    "kdkc": 902,
    "dati2": 112,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 73,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.027414,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 112"
      }
    ]
  },
  {
    "claim_id": "CLM_AC1F1B3932BB49",
    "kdkc": 1004,
    "dati2": 222,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 24,
    "los": 0,
    "severitylevel": 0,
    "cmg": "K",
    "diagprimer": "k00_k93",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.027414,
    "is_contradictory_claim": false,
    "active_dx": [
      "R00_R99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 222"
      }
    ]
  },
  {
    "claim_id": "CLM_9A462B9E5AB852",
    "kdkc": 404,
    "dati2": 71,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 73,
    "los": 8,
    "severitylevel": 2,
    "cmg": "I",
    "diagprimer": "i00_i99",
    "n_dx2": 2,
    "n_proc": 6,
    "dx_per_los": 0.222,
    "proc_per_los": 0.667,
    "severity_short_stay": 0,
    "fraud_probability": 0.027414,
    "is_contradictory_claim": false,
    "active_dx": [
      "D50_D89"
    ],
    "active_proc": [
      "39_45",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG I (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 71"
      }
    ]
  },
  {
    "claim_id": "CLM_9DE0CC975CAB34",
    "kdkc": 1111,
    "dati2": 158,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 58,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "g00_g99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.027414,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 158"
      }
    ]
  },
  {
    "claim_id": "CLM_2064A79C9DA6A0",
    "kdkc": 1202,
    "dati2": 179,
    "typeppk": "A ",
    "jkpst": "L",
    "umur": 46,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.027414,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 179"
      }
    ]
  },
  {
    "claim_id": "CLM_3BC928CACB2547",
    "kdkc": 1012,
    "dati2": 138,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 12,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "a00_b99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.027414,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 138"
      }
    ]
  },
  {
    "claim_id": "CLM_5E0E313D682E7D",
    "kdkc": 903,
    "dati2": 113,
    "typeppk": "D ",
    "jkpst": "P",
    "umur": 40,
    "los": 0,
    "severitylevel": 0,
    "cmg": "K",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 4,
    "dx_per_los": 0.0,
    "proc_per_los": 4.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.027414,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "4 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 113"
      }
    ]
  },
  {
    "claim_id": "CLM_E8B5896E71BC65",
    "kdkc": 1602,
    "dati2": 301,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 21,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.02689,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "29_31"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 301"
      }
    ]
  },
  {
    "claim_id": "CLM_51FCF31C4FCE15",
    "kdkc": 1805,
    "dati2": 340,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 1,
    "los": 3,
    "severitylevel": 1,
    "cmg": "J",
    "diagprimer": "j00_j99",
    "n_dx2": 1,
    "n_proc": 6,
    "dx_per_los": 0.25,
    "proc_per_los": 1.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.02689,
    "is_contradictory_claim": false,
    "active_dx": [
      "A00_B99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "6 prosedur dalam 3 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 340"
      }
    ]
  },
  {
    "claim_id": "CLM_39AE4EAE660388",
    "kdkc": 1307,
    "dati2": 215,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 55,
    "los": 1,
    "severitylevel": 1,
    "cmg": "K",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.02689,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "52_57"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 215"
      }
    ]
  },
  {
    "claim_id": "CLM_B4865FBDBBAA69",
    "kdkc": 902,
    "dati2": 112,
    "typeppk": "D ",
    "jkpst": "L",
    "umur": 33,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.02689,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 112"
      }
    ]
  },
  {
    "claim_id": "CLM_335C1A21F872A3",
    "kdkc": 1309,
    "dati2": 193,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 52,
    "los": 2,
    "severitylevel": 1,
    "cmg": "N",
    "diagprimer": "n00_n99",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 0.333,
    "proc_per_los": 0.667,
    "severity_short_stay": 0,
    "fraud_probability": 0.023411,
    "is_contradictory_claim": false,
    "active_dx": [
      "J00_J99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG N (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 193"
      }
    ]
  },
  {
    "claim_id": "CLM_EECCEDD8817AF7",
    "kdkc": 405,
    "dati2": 70,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 68,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.023411,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 70"
      }
    ]
  },
  {
    "claim_id": "CLM_AF4F216AE4A9A6",
    "kdkc": 1017,
    "dati2": 132,
    "typeppk": "SB",
    "jkpst": "L",
    "umur": 50,
    "los": 3,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 132"
      }
    ]
  },
  {
    "claim_id": "CLM_A7C54B5D992B5C",
    "kdkc": 401,
    "dati2": 69,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 41,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "g00_g99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [
      "G00_G99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 69"
      }
    ]
  },
  {
    "claim_id": "CLM_5BA46BB9535F07",
    "kdkc": 1012,
    "dati2": 138,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 0,
    "los": 8,
    "severitylevel": 3,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 4,
    "n_proc": 4,
    "dx_per_los": 0.444,
    "proc_per_los": 0.444,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [
      "P00_P96"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 138"
      }
    ]
  },
  {
    "claim_id": "CLM_DBD59E0C243169",
    "kdkc": 1901,
    "dati2": 350,
    "typeppk": "I3",
    "jkpst": "L",
    "umur": 50,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [
      "H60_H95"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 350"
      }
    ]
  },
  {
    "claim_id": "CLM_D8EF07394EC4F6",
    "kdkc": 1601,
    "dati2": 294,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 21,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "o00_o99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 294"
      }
    ]
  },
  {
    "claim_id": "CLM_C29B100AA38D63",
    "kdkc": 2602,
    "dati2": 392,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 58,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 392"
      }
    ]
  },
  {
    "claim_id": "CLM_8083366DB1FA89",
    "kdkc": 1005,
    "dati2": 118,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 8,
    "los": 3,
    "severitylevel": 1,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.25,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "E00_E99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 118"
      }
    ]
  },
  {
    "claim_id": "CLM_9AB9733DB65839",
    "kdkc": 1701,
    "dati2": 281,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 26,
    "los": 0,
    "severitylevel": 0,
    "cmg": "K",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 281"
      }
    ]
  },
  {
    "claim_id": "CLM_9925E9376C8E04",
    "kdkc": 1003,
    "dati2": 223,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 2,
    "los": 5,
    "severitylevel": 1,
    "cmg": "N",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG N (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 223"
      }
    ]
  },
  {
    "claim_id": "CLM_CE236074B2481B",
    "kdkc": 2202,
    "dati2": 230,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 0.667,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 230"
      }
    ]
  },
  {
    "claim_id": "CLM_768979729AA343",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 35,
    "los": 1,
    "severitylevel": 1,
    "cmg": "N",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "39_45"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG N (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_061466AF2BC242",
    "kdkc": 201,
    "dati2": 38,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 24,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 38"
      }
    ]
  },
  {
    "claim_id": "CLM_3DFB92B10C8FFE",
    "kdkc": 2201,
    "dati2": 233,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 233"
      }
    ]
  },
  {
    "claim_id": "CLM_A3E44F48C64DEA",
    "kdkc": 902,
    "dati2": 112,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 16,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.021891,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 112"
      }
    ]
  },
  {
    "claim_id": "CLM_9A1D245B8485FC",
    "kdkc": 301,
    "dati2": 50,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 15,
    "los": 0,
    "severitylevel": 0,
    "cmg": "J",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.01839,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 50"
      }
    ]
  },
  {
    "claim_id": "CLM_CE1F0AFC168BA7",
    "kdkc": 2302,
    "dati2": 346,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.01839,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 346"
      }
    ]
  },
  {
    "claim_id": "CLM_0F8B7AC2D35798",
    "kdkc": 604,
    "dati2": 431,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 87,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.01839,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 431"
      }
    ]
  },
  {
    "claim_id": "CLM_77C4A24CCEAA5E",
    "kdkc": 1005,
    "dati2": 134,
    "typeppk": "I4",
    "jkpst": "L",
    "umur": 2,
    "los": 5,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.167,
    "severity_short_stay": 0,
    "fraud_probability": 0.01839,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 134"
      }
    ]
  },
  {
    "claim_id": "CLM_08BA484010EDF5",
    "kdkc": 905,
    "dati2": 116,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 58,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 2,
    "n_proc": 0,
    "dx_per_los": 2.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.01839,
    "is_contradictory_claim": false,
    "active_dx": [
      "H00_H59"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 116"
      }
    ]
  },
  {
    "claim_id": "CLM_535E8FB4019A10",
    "kdkc": 201,
    "dati2": 38,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 52,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.01839,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 38"
      }
    ]
  },
  {
    "claim_id": "CLM_D91155E0766DED",
    "kdkc": 601,
    "dati2": 90,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 6,
    "los": 2,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.333,
    "severity_short_stay": 0,
    "fraud_probability": 0.017622,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 90"
      }
    ]
  },
  {
    "claim_id": "CLM_4269180624DFE7",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "I3",
    "jkpst": "L",
    "umur": 55,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.017622,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_3E333D5E6442A7",
    "kdkc": 1111,
    "dati2": 157,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 56,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.017622,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 157"
      }
    ]
  },
  {
    "claim_id": "CLM_4406C1C470BE7C",
    "kdkc": 903,
    "dati2": 113,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 44,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.017622,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 113"
      }
    ]
  },
  {
    "claim_id": "CLM_3993AE90949CF4",
    "kdkc": 2201,
    "dati2": 233,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 22,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.017622,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 233"
      }
    ]
  },
  {
    "claim_id": "CLM_87A003F44A7885",
    "kdkc": 1104,
    "dati2": 141,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.017622,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 141"
      }
    ]
  },
  {
    "claim_id": "CLM_7DA0732CB21F1D",
    "kdkc": 1308,
    "dati2": 212,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 48,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.017561,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 212"
      }
    ]
  },
  {
    "claim_id": "CLM_992F00FD9CE105",
    "kdkc": 1008,
    "dati2": 124,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 38,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "g00_g99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.017561,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 124"
      }
    ]
  },
  {
    "claim_id": "CLM_6C74FE4177583F",
    "kdkc": 1201,
    "dati2": 177,
    "typeppk": "SD",
    "jkpst": "L",
    "umur": 72,
    "los": 4,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 0.2,
    "proc_per_los": 0.2,
    "severity_short_stay": 0,
    "fraud_probability": 0.017561,
    "is_contradictory_claim": false,
    "active_dx": [
      "A00_B99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 177"
      }
    ]
  },
  {
    "claim_id": "CLM_FC7EDAE361D72F",
    "kdkc": 1306,
    "dati2": 186,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 37,
    "los": 4,
    "severitylevel": 1,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.017561,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 186"
      }
    ]
  },
  {
    "claim_id": "CLM_A035E52DB75A4D",
    "kdkc": 301,
    "dati2": 50,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 18,
    "los": 3,
    "severitylevel": 1,
    "cmg": "U",
    "diagprimer": "s00_t98",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 0.25,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.017561,
    "is_contradictory_claim": false,
    "active_dx": [
      "J00_J99"
    ],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 50"
      }
    ]
  },
  {
    "claim_id": "CLM_C4B461AFD88690",
    "kdkc": 1002,
    "dati2": 133,
    "typeppk": "I4",
    "jkpst": "L",
    "umur": 49,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.017561,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 133"
      }
    ]
  },
  {
    "claim_id": "CLM_0CD2DD72CD458C",
    "kdkc": 1312,
    "dati2": 206,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 59,
    "los": 2,
    "severitylevel": 2,
    "cmg": "N",
    "diagprimer": "n00_n99",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 0.333,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.016096,
    "is_contradictory_claim": false,
    "active_dx": [
      "D50_D89"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG N (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 206"
      }
    ]
  },
  {
    "claim_id": "CLM_DC27CF332325B3",
    "kdkc": 1003,
    "dati2": 223,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 30,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.016039,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 223"
      }
    ]
  },
  {
    "claim_id": "CLM_7769A416ED4F9C",
    "kdkc": 1016,
    "dati2": 117,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 68,
    "los": 4,
    "severitylevel": 1,
    "cmg": "L",
    "diagprimer": "l00_l99",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 0.2,
    "proc_per_los": 0.6,
    "severity_short_stay": 0,
    "fraud_probability": 0.015142,
    "is_contradictory_claim": false,
    "active_dx": [
      "L00_L99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG L (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 117"
      }
    ]
  },
  {
    "claim_id": "CLM_225E670E56A5FC",
    "kdkc": 1601,
    "dati2": 304,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 14,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.015142,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 304"
      }
    ]
  },
  {
    "claim_id": "CLM_D789DDC7E42D22",
    "kdkc": 302,
    "dati2": 54,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 59,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.015142,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 54"
      }
    ]
  },
  {
    "claim_id": "CLM_FE2C62A9C0BABE",
    "kdkc": 2301,
    "dati2": 240,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.015142,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 240"
      }
    ]
  },
  {
    "claim_id": "CLM_EADC09A36C76DD",
    "kdkc": 1008,
    "dati2": 136,
    "typeppk": "I2",
    "jkpst": "P",
    "umur": 48,
    "los": 2,
    "severitylevel": 1,
    "cmg": "N",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.015142,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "39_45",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG N (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 136"
      }
    ]
  },
  {
    "claim_id": "CLM_0E58233392E0EC",
    "kdkc": 301,
    "dati2": 50,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 33,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.015142,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 50"
      }
    ]
  },
  {
    "claim_id": "CLM_CAF1F4E04C5368",
    "kdkc": 201,
    "dati2": 38,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 52,
    "los": 1,
    "severitylevel": 1,
    "cmg": "B",
    "diagprimer": "k00_k93",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 0.5,
    "proc_per_los": 1.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.015142,
    "is_contradictory_claim": false,
    "active_dx": [
      "E00_E90"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 1 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG B (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 38"
      }
    ]
  },
  {
    "claim_id": "CLM_E818503FC25C3B",
    "kdkc": 1005,
    "dati2": 118,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 9,
    "los": 0,
    "severitylevel": 0,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.015142,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 118"
      }
    ]
  },
  {
    "claim_id": "CLM_20C4778801FD7E",
    "kdkc": 1602,
    "dati2": 301,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.01446,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 301"
      }
    ]
  },
  {
    "claim_id": "CLM_ADC11394D8EEB0",
    "kdkc": 1002,
    "dati2": 133,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 57,
    "los": 4,
    "severitylevel": 1,
    "cmg": "I",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.01446,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG I (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 133"
      }
    ]
  },
  {
    "claim_id": "CLM_458E8D5656A868",
    "kdkc": 1311,
    "dati2": 191,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 35,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.01446,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 191"
      }
    ]
  },
  {
    "claim_id": "CLM_31125EA475DFAF",
    "kdkc": 2401,
    "dati2": 351,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 70,
    "los": 2,
    "severitylevel": 2,
    "cmg": "K",
    "diagprimer": "a00_b99",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 0.333,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.01446,
    "is_contradictory_claim": false,
    "active_dx": [
      "A00_B99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 351"
      }
    ]
  },
  {
    "claim_id": "CLM_1E277CEEB6CF56",
    "kdkc": 101,
    "dati2": 17,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 4,
    "los": 3,
    "severitylevel": 1,
    "cmg": "A",
    "diagprimer": "a00_b99",
    "n_dx2": 1,
    "n_proc": 3,
    "dx_per_los": 0.25,
    "proc_per_los": 0.75,
    "severity_short_stay": 0,
    "fraud_probability": 0.013753,
    "is_contradictory_claim": false,
    "active_dx": [
      "S00_T98"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG A (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 17"
      }
    ]
  },
  {
    "claim_id": "CLM_51AB2FF0B47F33",
    "kdkc": 201,
    "dati2": 38,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 72,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.013753,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 38"
      }
    ]
  },
  {
    "claim_id": "CLM_38482D94EFAECB",
    "kdkc": 302,
    "dati2": 54,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 69,
    "los": 2,
    "severitylevel": 1,
    "cmg": "I",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.013753,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG I (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 54"
      }
    ]
  },
  {
    "claim_id": "CLM_07A01B0CE0B113",
    "kdkc": 1006,
    "dati2": 131,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 39,
    "los": 1,
    "severitylevel": 1,
    "cmg": "O",
    "diagprimer": "o00_o99",
    "n_dx2": 2,
    "n_proc": 2,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.013753,
    "is_contradictory_claim": false,
    "active_dx": [
      "O00_O99",
      "Z00_Z99"
    ],
    "active_proc": [
      "71_73",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG O (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 131"
      }
    ]
  },
  {
    "claim_id": "CLM_4916CF1491AFCC",
    "kdkc": 1012,
    "dati2": 138,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 13,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.013544,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 138"
      }
    ]
  },
  {
    "claim_id": "CLM_2D5DA2B07AC841",
    "kdkc": 101,
    "dati2": 17,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 14,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "g00_g99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.012629,
    "is_contradictory_claim": true,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 17"
      }
    ]
  },
  {
    "claim_id": "CLM_58225C62C9269F",
    "kdkc": 103,
    "dati2": 6,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 65,
    "los": 3,
    "severitylevel": 1,
    "cmg": "J",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.25,
    "severity_short_stay": 0,
    "fraud_probability": 0.012629,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG J (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 6"
      }
    ]
  },
  {
    "claim_id": "CLM_338406199167D0",
    "kdkc": 904,
    "dati2": 115,
    "typeppk": "KC",
    "jkpst": "P",
    "umur": 44,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.012629,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 115"
      }
    ]
  },
  {
    "claim_id": "CLM_09916CB6E931DE",
    "kdkc": 1002,
    "dati2": 133,
    "typeppk": "KJ",
    "jkpst": "L",
    "umur": 20,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.012629,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 133"
      }
    ]
  },
  {
    "claim_id": "CLM_DF131207B40E46",
    "kdkc": 2201,
    "dati2": 233,
    "typeppk": "A ",
    "jkpst": "P",
    "umur": 5,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.012629,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 233"
      }
    ]
  },
  {
    "claim_id": "CLM_8C9EFC2C83F216",
    "kdkc": 801,
    "dati2": 106,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 68,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.011862,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 106"
      }
    ]
  },
  {
    "claim_id": "CLM_CA1496DDC7E158",
    "kdkc": 1001,
    "dati2": 135,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 62,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.011862,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 135"
      }
    ]
  },
  {
    "claim_id": "CLM_1540C2CCF42941",
    "kdkc": 1108,
    "dati2": 171,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 35,
    "los": 2,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 0.333,
    "proc_per_los": 0.667,
    "severity_short_stay": 0,
    "fraud_probability": 0.011862,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 171"
      }
    ]
  },
  {
    "claim_id": "CLM_7001D4821CA4B0",
    "kdkc": 1501,
    "dati2": 460,
    "typeppk": "I3",
    "jkpst": "L",
    "umur": 66,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.011862,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 460"
      }
    ]
  },
  {
    "claim_id": "CLM_6A213FF7BFE070",
    "kdkc": 1008,
    "dati2": 125,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 0,
    "los": 3,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.011616,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 125"
      }
    ]
  },
  {
    "claim_id": "CLM_45444403F51963",
    "kdkc": 401,
    "dati2": 63,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 25,
    "los": 3,
    "severitylevel": 2,
    "cmg": "O",
    "diagprimer": "o00_o99",
    "n_dx2": 3,
    "n_proc": 2,
    "dx_per_los": 0.75,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.011616,
    "is_contradictory_claim": false,
    "active_dx": [
      "O00_O99",
      "Z00_Z99"
    ],
    "active_proc": [
      "74_75",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG O (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 63"
      }
    ]
  },
  {
    "claim_id": "CLM_C4AFE434B98EAF",
    "kdkc": 1110,
    "dati2": 159,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 65,
    "los": 2,
    "severitylevel": 1,
    "cmg": "H",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.333,
    "severity_short_stay": 0,
    "fraud_probability": 0.011616,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "00_13"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG H (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 159"
      }
    ]
  },
  {
    "claim_id": "CLM_7D7E564D21A772",
    "kdkc": 1104,
    "dati2": 142,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 17,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.011616,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 142"
      }
    ]
  },
  {
    "claim_id": "CLM_DE4FBE29F71537",
    "kdkc": 1001,
    "dati2": 135,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 54,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "n00_n99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.009792,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "39_45"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (n00_n99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 135"
      }
    ]
  },
  {
    "claim_id": "CLM_7C32C5601CBDE6",
    "kdkc": 1308,
    "dati2": 187,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 70,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.009792,
    "is_contradictory_claim": false,
    "active_dx": [
      "L00_L99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 187"
      }
    ]
  },
  {
    "claim_id": "CLM_FF0A879028B7A4",
    "kdkc": 2101,
    "dati2": 309,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 68,
    "los": 8,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 2,
    "n_proc": 4,
    "dx_per_los": 0.222,
    "proc_per_los": 0.444,
    "severity_short_stay": 0,
    "fraud_probability": 0.009792,
    "is_contradictory_claim": false,
    "active_dx": [
      "C00_D48",
      "N00_N99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 309"
      }
    ]
  },
  {
    "claim_id": "CLM_61ACB1445FB8A1",
    "kdkc": 101,
    "dati2": 17,
    "typeppk": "KJ",
    "jkpst": "L",
    "umur": 17,
    "los": 40,
    "severitylevel": 1,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 0.073,
    "severity_short_stay": 0,
    "fraud_probability": 0.009792,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 17"
      }
    ]
  },
  {
    "claim_id": "CLM_DA5BAC15FBD20D",
    "kdkc": 1801,
    "dati2": 342,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 6,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "j00_j99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 3.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.009792,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "3 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (j00_j99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 342"
      }
    ]
  },
  {
    "claim_id": "CLM_7DC054FF84E896",
    "kdkc": 104,
    "dati2": 41,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 69,
    "los": 5,
    "severitylevel": 1,
    "cmg": "G",
    "diagprimer": "g00_g99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 0.167,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.009792,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 41"
      }
    ]
  },
  {
    "claim_id": "CLM_4DD8AD8294ABC7",
    "kdkc": 1010,
    "dati2": 120,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 1,
    "los": 2,
    "severitylevel": 1,
    "cmg": "K",
    "diagprimer": "a00_b99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.009792,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 120"
      }
    ]
  },
  {
    "claim_id": "CLM_A8F624DC577B48",
    "kdkc": 405,
    "dati2": 70,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 42,
    "los": 3,
    "severitylevel": 1,
    "cmg": "K",
    "diagprimer": "c00_d48",
    "n_dx2": 0,
    "n_proc": 4,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.009426,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "39_45",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (c00_d48)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 70"
      }
    ]
  },
  {
    "claim_id": "CLM_42B9176E6026D0",
    "kdkc": 1104,
    "dati2": 143,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 19,
    "los": 2,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 5,
    "dx_per_los": 0.0,
    "proc_per_los": 1.667,
    "severity_short_stay": 0,
    "fraud_probability": 0.008917,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "78_79",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "5 prosedur dalam 2 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 143"
      }
    ]
  },
  {
    "claim_id": "CLM_2FCF508BFAD1F4",
    "kdkc": 301,
    "dati2": 50,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.008917,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 50"
      }
    ]
  },
  {
    "claim_id": "CLM_E681A73A89889F",
    "kdkc": 1308,
    "dati2": 212,
    "typeppk": "SB",
    "jkpst": "L",
    "umur": 27,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "q00_q99",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.008917,
    "is_contradictory_claim": false,
    "active_dx": [
      "S00_T98"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 212"
      }
    ]
  },
  {
    "claim_id": "CLM_4A7C2FC0C6904B",
    "kdkc": 303,
    "dati2": 43,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 36,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.008917,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 43"
      }
    ]
  },
  {
    "claim_id": "CLM_BEB4674A4D6E0E",
    "kdkc": 2201,
    "dati2": 233,
    "typeppk": "I3",
    "jkpst": "L",
    "umur": 45,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.008917,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 233"
      }
    ]
  },
  {
    "claim_id": "CLM_0F44641924C042",
    "kdkc": 1003,
    "dati2": 223,
    "typeppk": "SB",
    "jkpst": "P",
    "umur": 18,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.008917,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 223"
      }
    ]
  },
  {
    "claim_id": "CLM_90E11F480B3252",
    "kdkc": 301,
    "dati2": 50,
    "typeppk": "SD",
    "jkpst": "L",
    "umur": 9,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.008307,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 50"
      }
    ]
  },
  {
    "claim_id": "CLM_92D44B2FEC34DB",
    "kdkc": 1303,
    "dati2": 200,
    "typeppk": "I3",
    "jkpst": "P",
    "umur": 59,
    "los": 0,
    "severitylevel": 0,
    "cmg": "M",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.008307,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 200"
      }
    ]
  },
  {
    "claim_id": "CLM_9124AA5A4A8F37",
    "kdkc": 1315,
    "dati2": 204,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 54,
    "los": 0,
    "severitylevel": 0,
    "cmg": "M",
    "diagprimer": "g00_g99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.008307,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 204"
      }
    ]
  },
  {
    "claim_id": "CLM_DFEB41FCFCA9B7",
    "kdkc": 1306,
    "dati2": 186,
    "typeppk": "SD",
    "jkpst": "L",
    "umur": 17,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "h00_h59",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.008307,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (h00_h59)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 186"
      }
    ]
  },
  {
    "claim_id": "CLM_F2D97F0F250169",
    "kdkc": 301,
    "dati2": 50,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 56,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.007508,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 50"
      }
    ]
  },
  {
    "claim_id": "CLM_CCA889AEE0F42E",
    "kdkc": 1016,
    "dati2": 117,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 0,
    "los": 1,
    "severitylevel": 1,
    "cmg": "E",
    "diagprimer": "p00_p96",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.007508,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG E (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 117"
      }
    ]
  },
  {
    "claim_id": "CLM_FC125F86881BC6",
    "kdkc": 1002,
    "dati2": 133,
    "typeppk": "KI",
    "jkpst": "L",
    "umur": 0,
    "los": 2,
    "severitylevel": 1,
    "cmg": "P",
    "diagprimer": "p00_p96",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 0.333,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.007508,
    "is_contradictory_claim": false,
    "active_dx": [
      "Z00_Z99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG P (p00_p96)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 133"
      }
    ]
  },
  {
    "claim_id": "CLM_3D5042CF4351B1",
    "kdkc": 301,
    "dati2": 50,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 21,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "h60_h95",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.007114,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (h60_h95)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 50"
      }
    ]
  },
  {
    "claim_id": "CLM_A413D0D26E99A3",
    "kdkc": 207,
    "dati2": 35,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 52,
    "los": 3,
    "severitylevel": 1,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.006901,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 35"
      }
    ]
  },
  {
    "claim_id": "CLM_82CEB09AABE8BD",
    "kdkc": 101,
    "dati2": 9,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 83,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 2,
    "n_proc": 0,
    "dx_per_los": 2.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.006901,
    "is_contradictory_claim": true,
    "active_dx": [
      "I00_I99",
      "M00_M99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "2 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 9"
      }
    ]
  },
  {
    "claim_id": "CLM_99EC48CD6E63BF",
    "kdkc": 2202,
    "dati2": 229,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 48,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.006901,
    "is_contradictory_claim": false,
    "active_dx": [
      "S00_T98"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 229"
      }
    ]
  },
  {
    "claim_id": "CLM_EB9FB47D158F02",
    "kdkc": 2201,
    "dati2": 226,
    "typeppk": "SD",
    "jkpst": "P",
    "umur": 60,
    "los": 0,
    "severitylevel": 0,
    "cmg": "G",
    "diagprimer": "g00_g99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.005882,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG G (g00_g99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 226"
      }
    ]
  },
  {
    "claim_id": "CLM_9F02D56F643133",
    "kdkc": 1012,
    "dati2": 138,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 0,
    "los": 4,
    "severitylevel": 1,
    "cmg": "K",
    "diagprimer": "a00_b99",
    "n_dx2": 1,
    "n_proc": 4,
    "dx_per_los": 0.2,
    "proc_per_los": 0.8,
    "severity_short_stay": 0,
    "fraud_probability": 0.005882,
    "is_contradictory_claim": false,
    "active_dx": [
      "E00_E90"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 138"
      }
    ]
  },
  {
    "claim_id": "CLM_18257B9BA2B7D3",
    "kdkc": 1308,
    "dati2": 433,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 44,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.005196,
    "is_contradictory_claim": false,
    "active_dx": [
      "M00_M99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 433"
      }
    ]
  },
  {
    "claim_id": "CLM_574B9946CD4782",
    "kdkc": 904,
    "dati2": 115,
    "typeppk": "KC",
    "jkpst": "P",
    "umur": 57,
    "los": 3,
    "severitylevel": 2,
    "cmg": "I",
    "diagprimer": "i00_i99",
    "n_dx2": 2,
    "n_proc": 1,
    "dx_per_los": 0.5,
    "proc_per_los": 0.25,
    "severity_short_stay": 0,
    "fraud_probability": 0.005196,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG I (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 115"
      }
    ]
  },
  {
    "claim_id": "CLM_2F8FB3B10A0CD8",
    "kdkc": 1701,
    "dati2": 291,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 47,
    "los": 2,
    "severitylevel": 1,
    "cmg": "I",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.005183,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG I (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 291"
      }
    ]
  },
  {
    "claim_id": "CLM_032B8EB95CD777",
    "kdkc": 1601,
    "dati2": 302,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 3,
    "los": 7,
    "severitylevel": 1,
    "cmg": "K",
    "diagprimer": "q00_q99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 0.25,
    "severity_short_stay": 0,
    "fraud_probability": 0.005183,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "39_45",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 302"
      }
    ]
  },
  {
    "claim_id": "CLM_93F8E9FF663F79",
    "kdkc": 601,
    "dati2": 90,
    "typeppk": "KJ",
    "jkpst": "L",
    "umur": 49,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.005183,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 90"
      }
    ]
  },
  {
    "claim_id": "CLM_691BAB050AFB66",
    "kdkc": 1003,
    "dati2": 496,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 38,
    "los": 2,
    "severitylevel": 1,
    "cmg": "O",
    "diagprimer": "o00_o99",
    "n_dx2": 2,
    "n_proc": 2,
    "dx_per_los": 0.667,
    "proc_per_los": 0.667,
    "severity_short_stay": 0,
    "fraud_probability": 0.005183,
    "is_contradictory_claim": false,
    "active_dx": [
      "O00_O99",
      "Z00_Z99"
    ],
    "active_proc": [
      "63_67",
      "74_75"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG O (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 496"
      }
    ]
  },
  {
    "claim_id": "CLM_D7F371D62E8DAC",
    "kdkc": 1108,
    "dati2": 151,
    "typeppk": "KT",
    "jkpst": "P",
    "umur": 9,
    "los": 3,
    "severitylevel": 1,
    "cmg": "M",
    "diagprimer": "q00_q99",
    "n_dx2": 1,
    "n_proc": 2,
    "dx_per_los": 0.25,
    "proc_per_los": 0.5,
    "severity_short_stay": 0,
    "fraud_probability": 0.004743,
    "is_contradictory_claim": false,
    "active_dx": [
      "G00_G99"
    ],
    "active_proc": [
      "76_77",
      "78_79"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (q00_q99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 151"
      }
    ]
  },
  {
    "claim_id": "CLM_502F3E0B5DBFF3",
    "kdkc": 803,
    "dati2": 102,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 62,
    "los": 0,
    "severitylevel": 0,
    "cmg": "M",
    "diagprimer": "z00_z99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.004743,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG M (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 102"
      }
    ]
  },
  {
    "claim_id": "CLM_BBB12AF16666E8",
    "kdkc": 2202,
    "dati2": 228,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 51,
    "los": 0,
    "severitylevel": 0,
    "cmg": "K",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.00454,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 228"
      }
    ]
  },
  {
    "claim_id": "CLM_0FC0AB344D0FB2",
    "kdkc": 2202,
    "dati2": 228,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 50,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "r00_r99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.00454,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (r00_r99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 228"
      }
    ]
  },
  {
    "claim_id": "CLM_7A4DDF274C7009",
    "kdkc": 1801,
    "dati2": 327,
    "typeppk": "I3",
    "jkpst": "P",
    "umur": 45,
    "los": 2,
    "severitylevel": 1,
    "cmg": "K",
    "diagprimer": "a00_b99",
    "n_dx2": 1,
    "n_proc": 4,
    "dx_per_los": 0.333,
    "proc_per_los": 1.333,
    "severity_short_stay": 0,
    "fraud_probability": 0.00454,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG K (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 327"
      }
    ]
  },
  {
    "claim_id": "CLM_5F0E23B043C68A",
    "kdkc": 1114,
    "dati2": 162,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 68,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "m00_m99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.004487,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (m00_m99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 162"
      }
    ]
  },
  {
    "claim_id": "CLM_A61A4915DE761F",
    "kdkc": 2201,
    "dati2": 233,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 79,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.004487,
    "is_contradictory_claim": false,
    "active_dx": [
      "I00_I99"
    ],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 233"
      }
    ]
  },
  {
    "claim_id": "CLM_BC81BCB065F20E",
    "kdkc": 1001,
    "dati2": 135,
    "typeppk": "KJ",
    "jkpst": "L",
    "umur": 37,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.003204,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 135"
      }
    ]
  },
  {
    "claim_id": "CLM_A8CDAB5D181306",
    "kdkc": 1001,
    "dati2": 135,
    "typeppk": "KJ",
    "jkpst": "L",
    "umur": 36,
    "los": 0,
    "severitylevel": 0,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 3,
    "n_proc": 0,
    "dx_per_los": 3.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.003204,
    "is_contradictory_claim": false,
    "active_dx": [
      "F00_F99",
      "G00_G99",
      "V01_Y98"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Comorbidity Loading",
        "impact": "+0.31",
        "desc": "3 komorbiditas tercatat per hari"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 135"
      }
    ]
  },
  {
    "claim_id": "CLM_9529B62AC7EC4E",
    "kdkc": 2203,
    "dati2": 232,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 45,
    "los": 0,
    "severitylevel": 0,
    "cmg": "N",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.003204,
    "is_contradictory_claim": false,
    "active_dx": [
      "N00_N99"
    ],
    "active_proc": [
      "39_45"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG N (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 232"
      }
    ]
  },
  {
    "claim_id": "CLM_EF4A79708C6FE2",
    "kdkc": 1114,
    "dati2": 162,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 26,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "z00_z99",
    "n_dx2": 1,
    "n_proc": 0,
    "dx_per_los": 1.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.003204,
    "is_contradictory_claim": false,
    "active_dx": [
      "M00_M99"
    ],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (z00_z99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 162"
      }
    ]
  },
  {
    "claim_id": "CLM_22D1B1C7F4C821",
    "kdkc": 1104,
    "dati2": 142,
    "typeppk": "C ",
    "jkpst": "L",
    "umur": 66,
    "los": 3,
    "severitylevel": 1,
    "cmg": "I",
    "diagprimer": "i00_i99",
    "n_dx2": 0,
    "n_proc": 3,
    "dx_per_los": 0.0,
    "proc_per_los": 0.75,
    "severity_short_stay": 0,
    "fraud_probability": 0.003204,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG I (i00_i99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 142"
      }
    ]
  },
  {
    "claim_id": "CLM_CCF1B27140C9E2",
    "kdkc": 2201,
    "dati2": 226,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 55,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "e00_e90",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.003204,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (e00_e90)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 226"
      }
    ]
  },
  {
    "claim_id": "CLM_C30878FFCAC27B",
    "kdkc": 201,
    "dati2": 38,
    "typeppk": "I2",
    "jkpst": "L",
    "umur": 14,
    "los": 5,
    "severitylevel": 1,
    "cmg": "A",
    "diagprimer": "a00_b99",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 0.167,
    "severity_short_stay": 0,
    "fraud_probability": 0.00312,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG A (a00_b99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 38"
      }
    ]
  },
  {
    "claim_id": "CLM_652CF5D887837B",
    "kdkc": 1602,
    "dati2": 140,
    "typeppk": "C ",
    "jkpst": "P",
    "umur": 11,
    "los": 0,
    "severitylevel": 0,
    "cmg": "U",
    "diagprimer": "k00_k93",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.002107,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "14_23"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG U (k00_k93)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 140"
      }
    ]
  },
  {
    "claim_id": "CLM_A98233E2C5DE05",
    "kdkc": 2202,
    "dati2": 229,
    "typeppk": "SC",
    "jkpst": "L",
    "umur": 15,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Q",
    "diagprimer": "l00_l99",
    "n_dx2": 0,
    "n_proc": 2,
    "dx_per_los": 0.0,
    "proc_per_los": 2.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.002107,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "High Procedure Density / LOS",
        "impact": "+0.44",
        "desc": "2 prosedur dalam 0 hari rawat inap"
      },
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Q (l00_l99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 229"
      }
    ]
  },
  {
    "claim_id": "CLM_BF5EBAD03720A8",
    "kdkc": 2202,
    "dati2": 230,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 41,
    "los": 0,
    "severitylevel": 0,
    "cmg": "Z",
    "diagprimer": "s00_t98",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.002107,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG Z (s00_t98)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 230"
      }
    ]
  },
  {
    "claim_id": "CLM_73C1F8EFC3C625",
    "kdkc": 1104,
    "dati2": 143,
    "typeppk": "KJ",
    "jkpst": "L",
    "umur": 63,
    "los": 5,
    "severitylevel": 1,
    "cmg": "F",
    "diagprimer": "f00_f99",
    "n_dx2": 0,
    "n_proc": 0,
    "dx_per_los": 0.0,
    "proc_per_los": 0.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.002107,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG F (f00_f99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 143"
      }
    ]
  },
  {
    "claim_id": "CLM_0C5758C53CD5E4",
    "kdkc": 1103,
    "dati2": 166,
    "typeppk": "SC",
    "jkpst": "P",
    "umur": 31,
    "los": 3,
    "severitylevel": 1,
    "cmg": "O",
    "diagprimer": "o00_o99",
    "n_dx2": 4,
    "n_proc": 1,
    "dx_per_los": 1.0,
    "proc_per_los": 0.25,
    "severity_short_stay": 0,
    "fraud_probability": 0.002107,
    "is_contradictory_claim": false,
    "active_dx": [
      "O00_O99",
      "Z00_Z99"
    ],
    "active_proc": [
      "74_75"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG O (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 166"
      }
    ]
  },
  {
    "claim_id": "CLM_5117001B03EC7B",
    "kdkc": 1008,
    "dati2": 124,
    "typeppk": "B ",
    "jkpst": "L",
    "umur": 5,
    "los": 0,
    "severitylevel": 0,
    "cmg": "D",
    "diagprimer": "d50_d89",
    "n_dx2": 0,
    "n_proc": 1,
    "dx_per_los": 0.0,
    "proc_per_los": 1.0,
    "severity_short_stay": 0,
    "fraud_probability": 0.002107,
    "is_contradictory_claim": false,
    "active_dx": [],
    "active_proc": [
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG D (d50_d89)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 124"
      }
    ]
  },
  {
    "claim_id": "CLM_D81FBA477AF31D",
    "kdkc": 2202,
    "dati2": 230,
    "typeppk": "B ",
    "jkpst": "P",
    "umur": 34,
    "los": 4,
    "severitylevel": 1,
    "cmg": "O",
    "diagprimer": "o00_o99",
    "n_dx2": 3,
    "n_proc": 4,
    "dx_per_los": 0.6,
    "proc_per_los": 0.8,
    "severity_short_stay": 0,
    "fraud_probability": 0.001156,
    "is_contradictory_claim": false,
    "active_dx": [
      "O00_O99",
      "Z00_Z99"
    ],
    "active_proc": [
      "63_67",
      "74_75",
      "80_99"
    ],
    "shap_drivers": [
      {
        "feature": "Diagnosis-Mix Group Complexity",
        "impact": "+0.19",
        "desc": "Kategori CMG O (o00_o99)"
      },
      {
        "feature": "Regional Billing Frequency",
        "impact": "+0.15",
        "desc": "Pola pengajuan klaim wilayah Dati2 230"
      }
    ]
  }
];
