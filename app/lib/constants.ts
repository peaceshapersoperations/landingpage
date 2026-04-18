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

export const safeguardingServices = [
  {
    title: 'Child Safeguarding Policy',
    content:
      'Written specifically for your school — not a generic template. Covers definitions, roles, reporting procedures, safer recruitment, and online safety.',
  },
  {
    title: 'DSL Setup and Training',
    content:
      'We help identify, appoint, and train your Designated Safeguarding Lead (DSL) to effectively manage safeguarding responsibilities.',
  },
  {
    title: 'Whole Staff Safeguarding Training',
    content:
      'Role-appropriate safeguarding training for all staff members — including teachers, security personnel, kitchen staff, and administrators.',
  },
  {
    title: 'Safe Recruitment Framework',
    content:
      'Establish screening and onboarding processes that reduce safeguarding risks during hiring.',
  },
  {
    title: 'Reporting Pathway and Disclosure Protocol',
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
    title: 'DSL Virtual Support 2 to 3 months',
    content:
      'Fortnightly check-ins, real-time guidance, and a comprehensive end-of-support report.',
  },
];

export const organisationalSafeguardingServices = [
  {
    title: 'Organisational Safeguarding Policy',
    content:
      'Tailored to your sector — covering staff conduct, reporting obligations, and beneficiary protection. Designed to meet NGO and donor compliance requirements.',
  },
  {
    title: 'Safer Recruitment Framework',
    content:
      'Screening and onboarding procedures that reduce safeguarding risks throughout your hiring process.',
  },
  {
    title: 'Reporting Pathway and Case Management',
    content:
      'Clear processes for how concerns are raised, managed, and escalated — including protections for those who report issues.',
  },
  {
    title: 'Designated Safeguarding Officer Training',
    content:
      'Training for your internal safeguarding lead, customised to your organisation’s specific context and needs.',
  },
  {
    title: 'Whole-Organisation Staff Training',
    content:
      'Comprehensive training for everyone — from leadership and field officers to administrative staff — ensuring clear understanding of safeguarding responsibilities.',
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

export const schoolViolencePreventionServices = [
  {
    title: 'School Violence Prevention & De-escalation Policy',
    content:
      'Defines how conflict is identified, responded to, and escalated. Clearly distinguishes between peer conflict, bullying, and safeguarding concerns.',
  },
  {
    title: 'Teacher De-escalation Training',
    content:
      'Practical skills focused on the critical 60 seconds that determine whether a difficult situation is resolved or escalates.',
  },
  {
    title: 'Support Staff Conflict Training',
    content:
      'Specialised training for security, kitchen, and administrative staff — often the first responders in conflict situations.',
  },
  {
    title: 'Trauma-Informed Practice Training',
    content:
      'Explains why traditional discipline approaches fail certain students and provides effective alternative strategies.',
  },
  {
    title: 'Student Peer Mediation Programme',
    content:
      'Establishes certified student mediators who resolve peer conflicts before escalation. A structured system that Peace Shapers develops for schools.',
  },
  {
    title: 'Bystander Intervention Training',
    content:
      'Guidance for students and staff on how to safely and effectively respond when they witness conflict or harm.',
  },
  {
    title: 'School Environment Risk Assessment',
    content:
      'Evaluation of physical and cultural factors contributing to conflict, with a prioritised action plan for improvement.',
  },
  {
    title: 'Post-Incident Review Protocol',
    content:
      'A structured approach to learning from incidents rather than simply returning to normal operations.',
  },
];

export const workplaceViolencePreventionServices = [
  {
    title: 'Workplace Violence Prevention & De-escalation Policy',
    content:
      'Defines how conflict between staff is recognised, reported, and managed — clearly distinguishing conflict, bullying, and harassment.',
  },
  {
    title: 'Staff De-escalation Training',
    content:
      'Training for all staff levels, adapted to your sector — including banking, NGOs, healthcare, government, and corporate environments.',
  },
  {
    title: 'Manager & Leadership De-escalation Training',
    content:
      'Focuses on handling difficult conversations, managing team conflict, and leading under pressure without passing stress downward.',
  },
  {
    title: 'Customer & Client Aggression Response Training',
    content:
      'Practical strategies for handling aggressive behaviour in customer-facing environments such as banks, hospitals, telecoms, retail, and public services.',
  },
  {
    title: 'Conflict Reporting & Documentation System',
    content:
      'Transforms incidents into institutional intelligence — helping identify patterns instead of treating issues as isolated events.',
  },
  {
    title: 'Post-Conflict Review Protocol',
    content:
      'A structured approach to learning from significant conflicts rather than simply returning to normal operations.',
  },
  {
    title: 'Psychological Safety Assessment',
    content:
      'Identifies areas where silence and fear create risk, supported by a prioritised action plan for improvement.',
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
