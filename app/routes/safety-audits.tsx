import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import AfterAudit from '@/components/page-safety-audits/after-audit';
import CallToAction from '@/components/page-safety-audits/cta';
import Hero from '@/components/page-safety-audits/hero';
import ThreeAuditPackages from '@/components/page-safety-audits/three-audit-packages';
import WhatIsSafetyAudits from '@/components/page-safety-audits/what-is-safety-audit';

const SafetyAudits = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsSafetyAudits />
      <ThreeAuditPackages />
      <AfterAudit />
      <CallToAction />
      <Footer />
    </>
  );
};

export default SafetyAudits;
