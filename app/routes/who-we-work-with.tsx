import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import Hero from '@/components/page-who-we-work-with/hero';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef, useMemo } from 'react';

const WhoWeWorkWith = () => {
  const originalList = [
    {
      id: 1,
      image: 'others/1.jpg',
      label: 'Primary Schools',
      category: 'schools',
    },
    {
      id: 2,
      image: 'others/2.jpg',
      label: 'Secondary Schools',
      category: 'schools',
    },
    {
      id: 3,
      image: 'others/3.jpg',
      label: 'Boarding Schools',
      category: 'schools',
    },
    {
      id: 4,
      image: 'others/4.jpg',
      label: 'International Schools',
      category: 'schools',
    },
    {
      id: 5,
      image: 'others/5.jpg',
      label: 'Private companies',
      category: 'Organisations',
    },
    {
      id: 6,
      image: 'others/1.jpg',
      label: 'NGOs & development organisations',
      category: 'Organisations',
    },
    {
      id: 7,
      image: 'others/2.jpg',
      label: 'Faith-based organisations & churches',
      category: 'Organisations',
    },
    {
      id: 8,
      image: 'others/3.jpg',
      label: 'Hospitals & healthcare institutions',
      category: 'Organisations',
    },
    {
      id: 9,
      image: 'others/4.jpg',
      label: 'Government agencies & MDAs',
      category: 'Organisations',
    },
  ];

  const list = useMemo(() => originalList, []);

  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const intervalRef = useRef<number | null>(null);

  // autoplay (paused on hover)
  useEffect(() => {
    if (hovered !== null) return;

    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % list.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [list.length, hovered]);

  const activeIndex = hovered !== null ? hovered : current;
  const activeItem = list[activeIndex];

  return (
    <>
      <Navbar />
      <Hero />

      <section className="bg-secondary/10 space-y-10 md:space-y-10 min-h-svh py-10 flex flex-col items-center justify-center">
        <div className="space-y-2">
          <header className="flex justify-center text-secondary text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
            <h2 className="bg-secondary/10 rounded-full px-4 py-2">
              Who we work with
            </h2>
          </header>

          {/* TEXT */}
          <article className="flex flex-col items-center text-center justify-center px-10 max-w-xs md:max-w-xl h-[120px] md:h-[230px] overflow-hidden">
            <h1 className="text-4xl lg:text-7xl text-primary capitalize transition-all duration-500 ease-out">
              {activeItem.label}
            </h1>
          </article>
        </div>

        {/* IMAGES */}
        <div className="flex flex-wrap justify-center gap-2">
          {list.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <figure
                key={item.id}
                onClick={() => setCurrent(index)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  'cursor-pointer p-1 md:p-2 rounded-xl md:rounded-4xl transition-transform duration-500 ease-in-out will-change-transform',
                  isActive ? 'scale-105 z-20 bg-secondary' : 'hover:scale-110',
                )}
              >
                <div
                  className={cn(
                    'h-full w-18 md:w-40 aspect-square relative rounded-lg md:rounded-2xl overflow-hidden',
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </figure>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WhoWeWorkWith;
