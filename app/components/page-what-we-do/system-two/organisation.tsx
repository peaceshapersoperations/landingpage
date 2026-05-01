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
    title: "Workplace Violence Prevention & De-escalation Policy",
    content:
      "Defines how conflict between staff is recognised, reported, and managed — clearly distinguishing conflict, bullying, and harassment."
  },
  {
    title: "Staff De-escalation Training",
    content:
      "Training for all staff levels, adapted to your sector — including banking, NGOs, healthcare, government, and corporate environments."
  },
  {
    title: "Manager & Leadership De-escalation Training",
    content:
      "Focuses on handling difficult conversations, managing team conflict, and leading under pressure without passing stress downward."
  },
  {
    title: "Customer & Client Aggression Response Training",
    content:
      "Practical strategies for handling aggressive behaviour in customer-facing environments such as banks, hospitals, telecoms, retail, and public services."
  },
  {
    title: "Conflict Reporting & Documentation System",
    content:
      "Transforms incidents into institutional intelligence — helping identify patterns instead of treating issues as isolated events."
  },
  {
    title: "Post-Conflict Review Protocol",
    content:
      "A structured approach to learning from significant conflicts rather than simply returning to normal operations."
  },
  {
    title: "Psychological Safety Assessment",
    content:
      "Identifies areas where silence and fear create risk, supported by a prioritised action plan for improvement."
  }
];

const Organisation = () => {
  return (
    <section className="bg-secondary/10">
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
