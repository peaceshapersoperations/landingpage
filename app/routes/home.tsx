import Container from '@/components/layout/container';
import HeroSection from '@/components/hero-section';
import AnchorStatement from '@/components/anchor-statement';
import HowWeWork from '@/components/how-we-work';
import WhoWeWorkWith from '@/components/who-we-work-with';
import ProblemWeSolve from '@/components/problem-we-solve';
import WhyChoosePeaceShapers from '@/components/why-choose-peace-shapers';

export const brands = [
  {
    href: '/brands/1.png',
  },
];

const Home = () => {
  return (
    <>
      <HeroSection />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="md:-mt-15"
      >
        <path
          fill="#f3f4f6"
          fill-opacity="1"
          d="M0,320L48,288C96,256,192,192,288,176C384,160,480,192,576,218.7C672,245,768,267,864,245.3C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <AnchorStatement />

      <svg
        className="bg-gray-100 md:-mt-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffff"
          fill-opacity="1"
          d="M0,320L48,288C96,256,192,192,288,165.3C384,139,480,149,576,160C672,171,768,181,864,192C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <HowWeWork />

      <WhoWeWorkWith />

      <ProblemWeSolve />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f6"
          fill-opacity="1"
          d="M0,96L48,133.3C96,171,192,245,288,229.3C384,213,480,107,576,96C672,85,768,171,864,208C960,245,1056,235,1152,202.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <WhyChoosePeaceShapers />
    </>
  );
};

export default Home;
