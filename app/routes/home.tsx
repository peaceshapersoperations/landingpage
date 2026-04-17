import Hero from '../components/homepage/hero';
import TheSolution from '@/components/homepage/the-solution';
import TheProblem from '@/components/homepage/the-problem';
import WhyChoosePeaceShapers from '@/components/homepage/why-choose-peace-shapers';
import OurImpact from '@/components/homepage/our-impact';

const Home = () => {
  return (
    <>
      <Hero />
      <TheProblem />
      <TheSolution />
      <OurImpact />
      <WhyChoosePeaceShapers />
    </>
  );
};

export default Home;
