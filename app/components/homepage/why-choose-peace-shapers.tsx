'use client';

import Container from '../layout/container';
import { motion } from 'framer-motion';
import StackingCards, { StackingCardItem } from '../ui/stacking-cards';

const peaceShapersFeatures = [
  {
    title: 'Systems, not awareness',
    description:
      'We focus on building the policies, protocols, and structures that prevent harm before it occurs.',
    // category: 'Approach',
    src: '/others/01.jpg',
  },
  {
    title: 'Built for Nigerian context',
    description:
      'Our approach reflects the realities of authority, reporting culture, and institutional dynamics in Nigeria.',
    // category: 'Context',
    src: '/others/02.jpg',
  },
  {
    title: 'Practical implementation',
    description:
      'We work directly with schools and organisations to install systems that staff can actually use.',
    // category: 'Implementation',
    src: '/others/3.jpg',
  },
  {
    title: 'Long term institutional change',
    description:
      'Our goal is not temporary interventions but sustainable safeguarding systems.',
    // category: 'Impact',
    src: '/others/4.jpg',
  },
];

const FeatureCard = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) => {
  return (
    <motion.div className="relative rounded-[40px] bg-primary grid grid-cols-1 md:grid-cols-2 origin-top overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-full aspect-4/3.5 overflow-hidden">
        <img src={src} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-8 md:p-10 lg:p-20 flex flex-col justify-center max-w-2xl text-white">
        <h3 className="text-2xl md:text-4xl font-normal mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyChoosePeaceShapers = () => {
  return (
    <section className="relative py-30 space-y-20">
      <header className="text-center text-3xl leading-11 md:text-3xl lg:text-4xl lg:leading-14 font-bold text-primary">
        <h2>Why Peace Shapers</h2>
      </header>

      <Container className="">
        <main className="relative flex w-full flex-col items-center justify-center">
          <StackingCards
            totalCards={peaceShapersFeatures.length}
            scaleMultiplier={0.05}
            className="space-y-20"
          >
            {peaceShapersFeatures.map((feature, i) => (
              <StackingCardItem key={`feature_${i}`} index={i}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  src={feature.src}
                />
              </StackingCardItem>
            ))}
          </StackingCards>
        </main>
      </Container>
    </section>
  );
};

export default WhyChoosePeaceShapers;
