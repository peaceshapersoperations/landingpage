import Hero from '../components/homepage/hero';
import TwoSystems from '@/components/homepage/two-systems';
import TheProblem from '@/components/homepage/the-problem';
import WhoWeWorkWith from '@/components/homepage/who-we-work-with';
import WaysToWorkWithUs from '@/components/homepage/ways-to-work-with-us';
import WhyChoosePeaceShapers from '@/components/homepage/why-choose-peace-shapers';

const Home = () => {
  return (
    <>
      <Hero />
      <TheProblem />
      <TwoSystems />
      <WaysToWorkWithUs />
      <WhoWeWorkWith />
      <WhyChoosePeaceShapers />
    </>
  );
};

export default Home;
