import {
  ArrowRight02Icon,
  ArrowUpRight01Icon,
  CallIcon,
  InstagramIcon,
  Linkedin01Icon,
  Mail02Icon,
} from '@hugeicons/core-free-icons';

export const navLinks = [
  {
    id: 1,
    label: 'Home',
    path: '/',
  },
  {
    id: 2,
    label: 'About',
    path: '/about',
  },
  {
    id: 3,
    label: 'What We Do',
    path: '/what-we-do',
  },
  {
    id: 4,
    label: 'Who we work with',
    path: '/who-we-work-with',
  },
  {
    id: 5,
    label: 'Safety Audits',
    path: '/safety-audits',
  },
  {
    id: 6,
    label: 'Contact',
    path: '/contact',
  },
];

export const scopes = [
  {
    name: 'Schools',
    head: '/scope/schools-head.png',
    image: '/scope/schools.jpg',
  },
  {
    name: 'Organizations',
    head: '/scope/corporate-organizations-head.png',
    image: '/scope/corporate-organizations.jpg',
  },
];

export const footer = {
  sectionOne: {
    article: {
      heading:
        'Your institution has people worth protecting. The system that protects them doesn’t build itself.',
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
            href: 'tel:+2348162213205',
            label: '+2348162213205',
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
