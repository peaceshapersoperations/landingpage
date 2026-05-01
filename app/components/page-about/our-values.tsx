import Container from '../layouts/container';

const list = [
  {
    id: 1,
    title: 'Honesty over comfort',
    paragraph:
      'We tell institutions what their data shows, not what they want to hear. If the findings are uncomfortable, they needed to be found.',
  },
  {
    id: 2,
    title: 'Systems over events',
    paragraph:
      'A workshop changes a day. A system changes an institution. We design every engagement with the long term in mind.',
  },
  {
    id: 3,
    title: 'Context over templates',
    paragraph:
      ' Nigerian institutions are not smaller versions of Western ones. They have specific histories, specific power dynamics, and specific safety needs. We build for that specificity every time.',
  },
];

const OurValues = () => {
  return (
    <section className="bg-secondary/10">
      <Container className="pt-5 pb-20 md:py-20 space-y-10">
        <header className="flex justify-center text-accent text-[10px] md:text-base lg:text-sm capitalize tracking-wider gap-4">
          <h2 className="bg-accent/10 rounded-full px-4 py-2">Our Values</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1300px] mx-auto">
          {list.map((item) => (
            <article
              key={item.id}
              className="space-y-6 p-10 md:p-10 rounded-[30px] md:rounded-[40px] bg-white text-primary"
            >
              <h2 className="text-xl md:text-3xl md:max-w-[220px] leading-snug font-normal">
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed font-light">
                {item.paragraph}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurValues;
