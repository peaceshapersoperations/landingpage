import { HugeiconsIcon } from '@hugeicons/react';
import Container from '../layout/container';
import {
  SolarSystem01Icon,
  ServiceIcon,
  Audit01Icon,
} from '@hugeicons/core-free-icons';
import AnimateIn from '../ui/animate-in';

const WaysToWorkWithUs = () => {
  return (
    <section className="bg-[#5c5b76]">
      <Container className="max-w-360">
        <div className="pt-20 pb-20 lg:py-10 lg:pb-20 space-y-30">
          <section className="grid grid-cols-1 md:grid-cols-2 text-sm md:text-base text-white/50 lg:grid-cols-3 gap-20 md:gap-10">
            <AnimateIn animation="slideUp" delay={0}>
              <article className="space-y-4 flex flex-col items-center text-center rounded-[30px]">
                <div className="flex flex-col items-center text-center space-y-8">
                  <HugeiconsIcon
                    icon={SolarSystem01Icon}
                    size={60}
                    className="text-secondary"
                  />
                  <h4 className="text-xl md:text-2xl text-white font-medium">
                    The Full System
                  </h4>
                </div>

                <p className="font-light max-w-xs leading-relaxed">
                  For institutions ready to build from the ground up. Policy.
                  Training. Protocols. Ongoing support. Everything installed as
                  one integrated whole.
                </p>
              </article>
            </AnimateIn>

            <AnimateIn animation="slideUp" delay={100}>
              <article className="space-y-4 flex flex-col items-center text-center">
                <div className="flex flex-col items-center text-center space-y-8">
                  <HugeiconsIcon
                    icon={ServiceIcon}
                    size={60}
                    className="text-secondary"
                  />
                  <h4 className="text-xl md:text-2xl text-white font-medium">
                    A Single Service
                  </h4>
                </div>

                <p className="font-light max-w-xs leading-relaxed">
                  Not ready for the full system? Start with one thing a
                  training, a policy, a risk assessment. Every service is a
                  complete, standalone engagement.
                </p>
              </article>
            </AnimateIn>

            <AnimateIn animation="slideUp" delay={200}>
              <article className="flex flex-col items-center text-center space-y-4">
                <div className="flex flex-col items-center text-center space-y-8">
                  <HugeiconsIcon
                    icon={Audit01Icon}
                    size={60}
                    className="text-secondary"
                  />
                  <h4 className="text-xl md:text-2xl text-white font-medium">
                    A Safety Audit
                  </h4>
                </div>

                <p className="font-light max-w-xs leading-relaxed">
                  Not sure what you need? The audit finds your risks first and
                  tells you exactly what to address. No prior relationship
                  required.
                </p>
              </article>
            </AnimateIn>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default WaysToWorkWithUs;
