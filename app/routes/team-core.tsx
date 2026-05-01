import Container from '@/components/layouts/container';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import Hero from '@/components/page-teams/hero';
import Member from '@/components/page-teams/member';
import { coreTeam } from '@/lib/constants';

export default function TeamCore() {
  return (
    <>
      <Navbar />
      <Hero variant='core' />

      <section className="bg-secondary/10 py-20 md:py-30">
        <Container className='space-y-10 md:space-y-15'>
          <header className="flex justify-center text-accent text-[10px] md:text-sm lg:text-sm capitalize tracking-wider gap-4">
            <h2 className="bg-accent/10 rounded-full px-4 py-2">Our Team</h2>
          </header>

          <div className="grid grid-cols-1 gap-10 place-items-center md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1200px]">
            {coreTeam.map((item) => (
              <Member variant='accent' key={item.name} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
