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
    title: "School Violence Prevention & De-escalation Policy",
    content:
      "Defines how conflict is identified, responded to, and escalated. Clearly distinguishes between peer conflict, bullying, and safeguarding concerns."
  },
  {
    title: "Teacher De-escalation Training",
    content:
      "Practical skills focused on the critical 60 seconds that determine whether a difficult situation is resolved or escalates."
  },
  {
    title: "Support Staff Conflict Training",
    content:
      "Specialised training for security, kitchen, and administrative staff — often the first responders in conflict situations."
  },
  {
    title: "Trauma-Informed Practice Training",
    content:
      "Explains why traditional discipline approaches fail certain students and provides effective alternative strategies."
  },
  {
    title: "Student Peer Mediation Programme",
    content:
      "Establishes certified student mediators who resolve peer conflicts before escalation. A structured system that Peace Shapers develops for schools."
  },
  {
    title: "Bystander Intervention Training",
    content:
      "Guidance for students and staff on how to safely and effectively respond when they witness conflict or harm."
  },
  {
    title: "School Environment Risk Assessment",
    content:
      "Evaluation of physical and cultural factors contributing to conflict, with a prioritised action plan for improvement."
  },
  {
    title: "Post-Incident Review Protocol",
    content:
      "A structured approach to learning from incidents rather than simply returning to normal operations."
  }
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
