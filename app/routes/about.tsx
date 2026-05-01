import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import CallToAction from '@/components/page-about/cta';
import Hero from '@/components/page-about/hero';
import OurStory from '@/components/page-about/our-story';
import OurTeam from '@/components/page-about/our-team';
import OurValues from '@/components/page-about/our-values'

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurStory />
      <OurValues />
      <OurTeam />
      <CallToAction />
      <Footer />
    </>
  );
};

export default About;
