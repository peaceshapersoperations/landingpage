import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import CallToAction from '@/components/page-what-we-do/cta';
import Hero from '@/components/page-what-we-do/hero';
import Header from '@/components/page-what-we-do/system-one/header';
import Organisation from '@/components/page-what-we-do/system-one/organisation';
import Schools from '@/components/page-what-we-do/system-one/schools';
import SystemTwo from '@/components/page-what-we-do/system-two/header';
import SchoolsTwo from '@/components/page-what-we-do/system-two/schools';
import OrganisationTwo from '@/components/page-what-we-do/system-two/organisation';

const WhatWeDo = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Header />
      <Schools />
      <Organisation />
      <SystemTwo />
      <SchoolsTwo />
      <OrganisationTwo />
      <CallToAction />
      <Footer />
    </>
  );
};

export default WhatWeDo;
