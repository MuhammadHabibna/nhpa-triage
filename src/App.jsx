import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import KPICards from './components/KPICards';
import EDACanvas from './components/EDACanvas';
import LiveTriageWorkbench from './components/LiveTriageWorkbench';
import SensitivityTable from './components/SensitivityTable';
import FairnessMonitor from './components/FairnessMonitor';
import OperationalCenter from './components/OperationalCenter';
import XAIModal from './components/XAIModal';
import Footer from './components/Footer';

import { PRESET_SAMPLE_CLAIMS } from './data/sampleClaims';
import { processClaimTriage } from './utils/triageEngine';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activePreset, setActivePreset] = useState('batch500');
  const [rawClaimsData, setRawClaimsData] = useState(PRESET_SAMPLE_CLAIMS);
  const [triageResult, setTriageResult] = useState(() => processClaimTriage(PRESET_SAMPLE_CLAIMS, 0.05));
  const [selectedClaim, setSelectedClaim] = useState(null);

  // Switch presets
  useEffect(() => {
    let dataToProcess = PRESET_SAMPLE_CLAIMS;

    if (activePreset === 'highrisk') {
      dataToProcess = PRESET_SAMPLE_CLAIMS.filter(c => c.fraud_probability >= 0.3);
    } else if (activePreset === 'outpatient') {
      dataToProcess = PRESET_SAMPLE_CLAIMS.filter(c => c.los === 0 && c.fraud_probability < 0.2);
    } else if (activePreset === 'batch500') {
      dataToProcess = PRESET_SAMPLE_CLAIMS;
    }

    setRawClaimsData(dataToProcess);
    setTriageResult(processClaimTriage(dataToProcess, 0.05));
  }, [activePreset]);

  // Handle custom data upload
  const handleCustomDataLoaded = (parsedData, label) => {
    setRawClaimsData(parsedData);
    setTriageResult(processClaimTriage(parsedData, 0.05));
  };

  // Update claim resolution status (Approve, Hold, Reject)
  const handleUpdateClaimStatus = (claimId, newStatus) => {
    setTriageResult((prev) => {
      const updatedAll = prev.allClaims.map((c) =>
        c.claim_id === claimId ? { ...c, auditor_status: newStatus } : c
      );
      const updatedAudit = prev.auditPortfolio.map((c) =>
        c.claim_id === claimId ? { ...c, auditor_status: newStatus } : c
      );
      const updatedFast = prev.fastTrackStream.map((c) =>
        c.claim_id === claimId ? { ...c, auditor_status: newStatus } : c
      );
      return {
        ...prev,
        allClaims: updatedAll,
        auditPortfolio: updatedAudit,
        fastTrackStream: updatedFast
      };
    });
  };

  // Export submission.csv format
  const handleExportSubmission = () => {
    const csvHeader = 'claim_id,fraud_probability\n';
    const csvRows = triageResult.allClaims
      .map((c) => `${c.claim_id},${c.fraud_probability.toFixed(6)}`)
      .join('\n');
    const blob = new Blob([csvHeader + csvRows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'submission.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Smooth Navigation
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-app)' }}>
      {/* Sticky Navbar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Landing Page Flow */}
      <main className="landing-container" style={{ flex: 1 }}>
        {/* Hero Section with Value Proposition & Interactive Card Mockup */}
        <HeroSection
          onExploreEDA={() => scrollToSection('eda')}
          onOpenSimulator={() => scrollToSection('simulator')}
        />

        {/* Section 1: Executive KPI Cards */}
        <div id="kpi" style={{ scrollMarginTop: '80px' }}>
          <KPICards />
        </div>

        {/* Section 2: Forensic EDA Canvas (Task A) */}
        <div id="eda" style={{ scrollMarginTop: '80px' }}>
          <EDACanvas />
        </div>

        {/* Section 3: Live 5% Triage Workbench & Sensitivity Table (Task B & C) */}
        <div id="simulator" style={{ scrollMarginTop: '80px' }}>
          <LiveTriageWorkbench
            triageResult={triageResult}
            onSelectClaim={setSelectedClaim}
            onUpdateClaimStatus={handleUpdateClaimStatus}
            onExportSubmission={handleExportSubmission}
            activePreset={activePreset}
            setActivePreset={setActivePreset}
            onDataLoaded={handleCustomDataLoaded}
          />
          <SensitivityTable />
        </div>

        {/* Section 4: Policyholder Protection & Fairness Center (Task D) */}
        <div id="fairness" style={{ scrollMarginTop: '80px' }}>
          <FairnessMonitor />
        </div>

        {/* Section 5: Operational Decision SOP & Governance (Task E) */}
        <div id="operational" style={{ scrollMarginTop: '80px' }}>
          <OperationalCenter />
        </div>
      </main>

      {/* Explainable AI Modal */}
      {selectedClaim && (
        <XAIModal
          claim={selectedClaim}
          onClose={() => setSelectedClaim(null)}
          onUpdateStatus={handleUpdateClaimStatus}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
