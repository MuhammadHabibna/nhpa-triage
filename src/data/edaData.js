// Precomputed 7-Phase EDA Statistics for Forensic Showcase
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
    "SB": {
      "legit": 5648,
      "fraud": 4422
    },
    "C ": {
      "legit": 15280,
      "fraud": 18613
    },
    "B ": {
      "legit": 14776,
      "fraud": 15979
    },
    "SC": {
      "legit": 22229,
      "fraud": 18000
    },
    "A ": {
      "legit": 3711,
      "fraud": 3118
    },
    "SD": {
      "legit": 5784,
      "fraud": 6582
    },
    "I3": {
      "legit": 1986,
      "fraud": 1817
    },
    "GD": {
      "legit": 57,
      "fraud": 167
    },
    "I2": {
      "legit": 1536,
      "fraud": 1151
    },
    "KO": {
      "legit": 84,
      "fraud": 54
    },
    "D ": {
      "legit": 1735,
      "fraud": 2977
    },
    "KL": {
      "legit": 724,
      "fraud": 656
    },
    "KI": {
      "legit": 1517,
      "fraud": 1650
    },
    "KM": {
      "legit": 1225,
      "fraud": 2215
    },
    "I4": {
      "legit": 1176,
      "fraud": 1175
    },
    "I1": {
      "legit": 318,
      "fraud": 526
    },
    "KP": {
      "legit": 119,
      "fraud": 79
    },
    "KJ": {
      "legit": 1202,
      "fraud": 486
    },
    "KT": {
      "legit": 61,
      "fraud": 46
    },
    "HD": {
      "legit": 103,
      "fraud": 11
    },
    "KG": {
      "legit": 80,
      "fraud": 53
    },
    "KB": {
      "legit": 169,
      "fraud": 226
    },
    "KC": {
      "legit": 299,
      "fraud": 73
    },
    "SA": {
      "legit": 123,
      "fraud": 82
    },
    "KU": {
      "legit": 29,
      "fraud": 45
    }
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
    "gender_fpr": {
      "L": 0.0482,
      "P": 0.0518,
      "gap": 0.0036
    },
    "age_fpr": {
      "0-17": 0.0412,
      "18-39": 0.0495,
      "40-59": 0.0521,
      "60+": 0.057,
      "gap": 0.0158
    },
    "protection_score": 0.9842
  },
  "capacity_allocation_sensitivity": [
    {
      "budget": "3%",
      "k_audited": 1201,
      "tp_captured": 1184,
      "fp_legit": 17,
      "precision": "98.58%",
      "norm_recall": 0.9858,
      "lift": "19.7x"
    },
    {
      "budget": "5% (Official)",
      "k_audited": 2002,
      "tp_captured": 1962,
      "fp_legit": 40,
      "precision": "98.00%",
      "norm_recall": 0.98,
      "lift": "19.6x"
    },
    {
      "budget": "7%",
      "k_audited": 2803,
      "tp_captured": 2705,
      "fp_legit": 98,
      "precision": "96.50%",
      "norm_recall": 0.965,
      "lift": "19.3x"
    }
  ]
};
