import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import CallToAction from '@/components/page-homepage/cta';
import Hero from '@/components/page-homepage/hero';
import TheProblem from '@/components/page-homepage/the-problem';
import TheSolution from '@/components/page-homepage/the-solution';
import WhyChoosePeaceShapers from '@/components/page-homepage/why-choose-peace-shapers';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TheProblem />
      <TheSolution />
      <WhyChoosePeaceShapers />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
