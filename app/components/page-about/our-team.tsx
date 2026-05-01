import { Link } from 'react-router';
import { allTeamsPictures } from '@/lib/constants';
import Container from '../layouts/container';
import { Marquee } from '@/components/ui/marquee';
import { Button } from '../ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

const OurTeam = () => {
  const chunkSize = Math.ceil(allTeamsPictures.length / 4);

  const first = allTeamsPictures.slice(0, chunkSize);
  const second = allTeamsPictures.slice(chunkSize, chunkSize * 2);
  const third = allTeamsPictures.slice(chunkSize * 2, chunkSize * 3);
  const fourth = allTeamsPictures.slice(chunkSize * 3);

  const teamTexts = [
    `Peace Shapers engagements are led and delivered by trained specialists practitioners
with field experience in child protection, safeguarding, conflict resolution, violence
prevention, organisational development, and emergency response.`,
    `We are not generalists with an interest in safety. Every member of the Peace Shapers team
has worked in the specific Nigerian contexts our clients operate in — schools, hospitals,
NGOs, corporate organisations, and government institutions. We bring that specificity to
every engagement`,
    `The work of institutional safety is too wide for any single person to carry alone. We build the
system together — with the people who know the field.`,
  ];

  return (
    <>
      <section
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.3' stroke-opacity='0.05'%3E%3Cpath d='M0 10Q25 0 50 10T100 10'/%3E%3Cpath d='M0 15Q25 5 50 15T100 15'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        className="bg-secondary/10"
      >
        <Container>
          <div className="relative py-5 md:pt-20 md:pb-30 space-y-10 md:space-y-15 mx-auto max-w-[1300px]">
            <div className="flex justify-center text-secondary text-[10px] md:text-sm lg:text-sm capitalize tracking-wider gap-4">
              <h2 className="bg-secondary/10 rounded-full px-4 py-2">
                Our Team
              </h2>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-10 xl:gap-20 place-items-center bg-white px-0 rounded-[40px] justify-start items-center overflow-hidden">
              <div className="relative z-20 grid grid-cols-3 h-70 md:h-100 lg:h-150 xl:h-170">
                <Marquee vertical pauseOnHover speed="slow" className="h-full">
                  {first.map((picture) => (
                    <img
                      key={picture.id}
                      src={picture.image}
                      alt=""
                      className="w-full h-20 md:h-48 object-cover rounded-lg"
                    />
                  ))}
                </Marquee>

                <Marquee
                  vertical
                  pauseOnHover
                  reverse
                  speed="slow"
                  className="h-full"
                >
                  {second.map((picture) => (
                    <img
                      key={picture.id}
                      src={picture.image}
                      alt=""
                      className="w-full h-20 md:h-48 object-cover rounded-lg"
                    />
                  ))}
                </Marquee>

                <Marquee vertical pauseOnHover speed="slow" className="h-full">
                  {third.map((picture) => (
                    <img
                      key={picture.id}
                      src={picture.image}
                      alt=""
                      className="w-full h-20 md:h-48 object-cover rounded-lg"
                    />
                  ))}
                </Marquee>

                {/* <Marquee
                  vertical
                  reverse
                  pauseOnHover
                  speed="slow"
                  className="h-full"
                >
                  {fourth.map((picture) => (
                    <img
                      key={picture.id}
                      src={picture.image}
                      alt=""
                      className="w-full h-20 md:h-48 object-cover rounded-lg"
                    />
                  ))}
                </Marquee> */}
              </div>

              <div className="relative z-20 flex pb-12 px-6 flex-col justify-center space-y-8 xl:pr-30">
                <div className="grid gap-1">
                  <Link
                    to="/core-team"
                    className="flex items-center gap-1 hover:gap-2 text-primary hover:text-primary/70 transition-all duration-300 cursor-pointer text-lg md:text-3xl"
                  >
                    Core Teams
                    <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                  </Link>
                  <Link
                    to="/faculty-of-education"
                    className="flex items-center gap-1 hover:gap-2 text-primary hover:text-primary/70 transition-all duration-300 cursor-pointer text-lg md:text-3xl"
                  >
                    Faculty of Education & Training
                    <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                  </Link>
                  <Link
                    to="/board-of-advisors"
                    className="flex items-center gap-1 hover:gap-2 text-primary hover:text-primary/70 transition-all duration-300 cursor-pointer text-lg md:text-3xl"
                  >
                    Board of advisors
                    <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                  </Link>
                </div>

                <div className="space-y-8">
                  {teamTexts.map((t) => (
                    <p
                      className="font-light text-sm leading-relaxed text-primary"
                      key={t}
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>

              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="black"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
