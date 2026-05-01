import Container from '@/components/layouts/container';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const list = [
  {
    title: 'Organisational Safeguarding Policy',
    content:
      'Tailored to your sector covering staff conduct, reporting obligations, and beneficiary protection. Designed to meet NGO and donor compliance requirements.',
  },
  {
    title: 'Safer Recruitment Framework',
    content:
      'Screening and onboarding procedures that reduce safeguarding risks throughout your hiring process.',
  },
  {
    title: 'Reporting Pathway & Case Management',
    content:
      'Clear processes for how concerns are raised, managed, and escalated including protections for those who report issues.',
  },
  {
    title: 'Designated Safeguarding Officer Training',
    content:
      'Training for your internal safeguarding lead, customised to your organisation’s specific context and needs.',
  },
  {
    title: 'Whole-Organisation Staff Training',
    content:
      'Comprehensive training for everyone from leadership and field officers to administrative staff ensuring clear understanding of safeguarding responsibilities.',
  },
  {
    title: 'Safeguarding Risk Assessment',
    content:
      'A detailed written report identifying your organisation’s specific risks, along with a prioritised action plan.',
  },
  {
    title: 'Donor & Regulatory Compliance Support',
    content:
      'Review and alignment of your policies and documentation with funder and regulatory requirements.',
  },
  {
    title: 'Ongoing DSO Support',
    content:
      'Monthly or fortnightly check-ins, ongoing guidance, and a comprehensive end-of-support report.',
  },
];

const Organisation = () => {
  return (
    <section className="bg-secondary/10 pb-20">
      <Container>
        <div className="bg-white rounded-[40px] mx-auto max-w-[1300px] grid lg:grid-cols-2 overflow-hidden">
          <figure className={cn('relative', 'aspect-square lg:aspect-auto order-1 lg:order-2')}>
            <img
              src="others/2.jpg"
              className="w-full h-full object-cover"
              alt=""
            />

            <header className="absolute w-full h-full inset-0 bg-linear-to-b from-primary/20 via-primary/70 to-primary space-y-4 flex flex-col justify-end items-start p-6 lg:p-10 text-white">
              <h2 className="text-2xl lg:text-4xl font-light">For Organisations</h2>

              <p className="font-light leading-relaxed text-xs md:text-base max-w-md lg:mb-8">
                The Full Safeguarding System everything below, designed and
                installed as one integrated whole.
              </p>

              <Button colorScheme="secondary" size="sm" className="hidden md:flex w-auto">
                Book the full system
              </Button>
              <Button colorScheme="secondary" size="xs" className="flex md:hidden w-auto">
                Book the full system
              </Button>
            </header>
          </figure>

          <div className="p-5 lg:p-10 order-2 lg:order-1">
            <Accordion
              type="single"
              defaultValue="item-0"
              className="space-y-4"
              collapsible={false}
            >
              {list.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-primary/15"
                >
                  <AccordionTrigger className="text-sm md:text-base font-normal hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base leading-relaxed max-w-md font-light text-primary/90">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Organisation;
