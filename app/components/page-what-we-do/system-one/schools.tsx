import Container from '@/components/layouts/container';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const list = [
  {
    title: 'Child Safeguarding Policy',
    content:
      'Written specifically for your school — not a generic template. Covers definitions, roles, reporting procedures, safer recruitment, and online safety.',
  },
  {
    title: 'DSL Setup & Training',
    content:
      'We help identify, appoint, and train your Designated Safeguarding Lead (DSL) to effectively manage safeguarding responsibilities.',
  },
  {
    title: 'Whole-Staff Safeguarding Training',
    content:
      'Role-appropriate safeguarding training for all staff members — including teachers, security personnel, kitchen staff, and administrators.',
  },
  {
    title: 'Safe Recruitment Framework',
    content:
      'Establish screening and onboarding processes that reduce safeguarding risks during hiring.',
  },
  {
    title: 'Reporting Pathway & Disclosure Protocol',
    content:
      'Clear procedures ensuring every staff member knows what to do when a safeguarding concern is raised.',
  },
  {
    title: 'Safeguarding Risk Assessment',
    content:
      'A detailed written report identifying your school’s specific risks, along with a prioritised action plan.',
  },
  {
    title: 'Online Safety Framework',
    content:
      'Protocols covering device usage, social media, and staff-student online communication.',
  },
  {
    title: 'DSL Virtual Support (2–3 months)',
    content:
      'Fortnightly check-ins, real-time guidance, and a comprehensive end-of-support report.',
  },
];

const Schools = () => {
  return (
    <section className="bg-secondary/10 pb-20">
      <Container>
        <div className="bg-white rounded-[40px] mx-auto max-w-[1300px] grid lg:grid-cols-2 overflow-hidden">
          <figure className="relative aspect-square lg:aspect-auto">
            <img
              src="others/5.jpg"
              className="w-full h-full object-cover"
              alt=""
            />

            <header className="absolute w-full h-full inset-0 bg-linear-to-b from-primary/20 via-primary/70 to-primary space-y-4 flex flex-col justify-end items-start p-6 lg:p-10 text-white">
              <h2 className="text-2xl lg:text-4xl font-light">For Schools</h2>

              <p className="font-light leading-relaxed text-xs md:text-base max-w-md lg:mb-8">
                The Full Safeguarding System everything below, designed and
                installed as one integrated whole.
              </p>

              <Button
                colorScheme="secondary"
                size="sm"
                className="hidden md:flex w-auto"
              >
                Book the full system
              </Button>
              <Button
                colorScheme="secondary"
                size="xs"
                className="flex md:hidden w-auto"
              >
                Book the full system
              </Button>
            </header>
          </figure>

          <div className="p-5 lg:p-10">
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
                  <AccordionTrigger className="text-sm md:text-base font-normal text-primary hover:no-underline">
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

export default Schools;
