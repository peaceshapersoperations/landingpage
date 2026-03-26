import {
  ArrowRight02Icon,
  ArrowUpRight01Icon,
  CallIcon,
  InstagramIcon,
  Linkedin01Icon,
  Mail02Icon,
} from '@hugeicons/core-free-icons';

export const navigation = {
  logo: {
    src: '/logo/icon.png',
    alt: 'Peace Shapers Africa',
  },
  list: [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'Schools', href: '/schools' },
    { id: 3, label: 'Organisations', href: '/organisations' },
    { id: 4, label: 'Safety Audits', href: '/safety-audits' },
    { id: 5, label: 'About', href: '/about' },
  ],
  button: {
    label: 'Work With Us',
    href: '/contact',
    variant: 'primary',
    icon: ArrowRight02Icon,
  },
};

export const footer = {
  sectionOne: {
    article: {
      heading: 'Your institution has people worth protecting.',
      paragraph:
        'Whether you’re leading a school, managing HR, or trying to identify safety risks, there’s a place to start.',
      button: {
        label: 'Work With Us',
        href: '/contact',
        icon: ArrowRight02Icon,
        variant: 'secondary',
      },
    },
    video: {
      src: '/video/footer.mp4',
      alt: 'Peace Shapers Africa',
    },
  },
  sectionTwo: {
    article: {
      heading: 'Peace Shapers Africa',
      color: 'text-white',
    },
  },
  sectionThree: {
    newsletter: {
      heading: 'Stay Connected to the Impact',
      paragraph:
        'Get stories, project updates, and opportunities delivered to your inbox, no spam, just meaningful change.',
      placeholder: 'Email Address',
      button: {
        label: 'Join the circle',
      },
      bg: 'bg-transparent',
    },

    lists: {
      navigation: {
        title: 'Navigation',
        list: [
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Schools',
            href: '/schools',
          },
          {
            label: 'Organisations',
            href: '/organisations',
          },
          {
            label: 'Safety Audits',
            href: '/safety-audits',
          },
          {
            label: 'About',
            href: '/about',
          },
        ],
      },

      contact: {
        title: 'Contact',
        list: [
          {
            icon: CallIcon,
            href: 'tel:+2348033333333',
            label: '+234 803 333 3333',
            iconAlt: {
              color: 'text-secondary',
              icon: ArrowUpRight01Icon,
            },
          },
          {
            icon: Mail02Icon,
            href: 'mailto:hello@peaceshapersafrica.org',
            label: 'info@peaceshapersafrica.org',
            iconAlt: {
              color: 'text-secondary',
              icon: ArrowUpRight01Icon,
            },
          },
        ],
      },

      social: {
        title: 'Socials',
        list: [
          {
            icon: InstagramIcon,
            href: 'https://www.instagram.com/peaceshapers/',
            label: 'Instagram',
            iconAlt: {
              color: 'text-secondary',
              icon: ArrowUpRight01Icon,
            },
          },
          {
            icon: Linkedin01Icon,
            href: 'https://linkedin.com/company/peace-shapers',
            label: 'LinkedIn',
            iconAlt: {
              color: 'text-secondary',
              icon: ArrowUpRight01Icon,
            },
          },
        ],
      },
    },
  },

  sectionFour: {
    copyright: {
      text: '© 2026 Peace Shapers Africa. All rights reserved.',
    },
    link: {
      label: 'Work with us',
      href: '/contact',
      icon: {
        color: 'text-white',
        bg: 'bg-secondary',
        icon: ArrowRight02Icon,
      },
    },
  },
};

export const scopes = [
  {
    name: 'NGOs',
    head: '/scope/ngo-head.png',
    image: '/scope/ngo.jpg',
  },
  {
    name: 'Schools',
    head: '/scope/schools-head.png',
    image: '/scope/schools.jpg',
  },
  {
    name: 'Hospitals',
    head: '/scope/hospital-head.png',
    image: '/scope/hospital.jpg',
  },
  {
    name: 'Organizations',
    head: '/scope/corporate-organizations-head.png',
    image: '/scope/corporate-organizations.jpg',
  },
];

export const why = [
  {
    heading: 'We are building something that does not yet exist in Nigeria.',
    image: '/why/1.jpg',
    colors: {
      heading: '',
      icon: {
        bg: '',
        text: ''
      },
      paragraph: ''
    },
    paragraph: [
      `Behavioural institutional safety as a defined professional field — the work of building the cultures, systems, and leadership capacities that determine whether schools and organisations are genuinely safe.`,
      `HSE safety exists. School discipline policies exist. What does not exist is an enterprise doing this work across both schools and organisations, with a standard, a faculty, and a replicable methodology. Built here, not imported.`,
    ],
  },
  {
    heading: 'We work on systems, not symptoms.',
    image: '/why/2.jpg',
    paragraph: [
      `Most organisations respond to safety incidents after they happen. We work on the conditions that produce them — the culture, the leadership behaviour, the reporting structures, the policies, and the skills that determine whether an institution is genuinely safe or simply reactive. `,
      `The difference between the two is not philosophical. It is measurable.`,
    ],
  },
  {
    heading: 'We stay after the workshop.',
    image: '/why/3.jpg',
    paragraph: [
      `Every engagement includes post-engagement architecture — written reports, follow-up sessions, commitment tracking, and ongoing support.`,
      `A workshop without follow-through is an expensive good day. We design every engagement with what happens after the day in mind.`,
    ],
  },
  {
    heading: 'We tell you what we find, not what you want to hear.',
    image: '/why/4.jpg',
    paragraph: [
      `The facilitator debrief report is an institutional safety intelligence document. The audit report names every gap we find, rated by risk level.`,
      ` We do not soften findings to protect relationships. Institutions that work with us know exactly where they stand`,
    ],
  },
  {
    heading: 'Our work is Nigerian-specific by design.',
    image: '/why/5.jpeg',
    paragraph: [
      `The dynamics that shape safety in Nigerian schools and workplaces — power distance, ethnic and regional complexity, economic pressure, the specific ways operates, the cultural norms around conflict and discipline — are not incidental. `,
      `They are the thing. Our frameworks are built around them. Generic models miss them entirely.`,
    ],
  },
];
