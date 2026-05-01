import { type RouteConfig } from '@react-router/dev/routes';

export default [
  {
    path: '/',
    file: 'routes/home.tsx',
  },
  {
    path: '/about',
    file: 'routes/about.tsx',
  },
  {
    path: '/who-we-work-with',
    file: 'routes/who-we-work-with.tsx',
  },
  {
    path: '/contact',
    file: 'routes/contact.tsx',
  },
  {
    path: '/what-we-do',
    file: 'routes/what-we-do.tsx',
  },
  {
    path: '/safety-audits',
    file: 'routes/safety-audits.tsx',
  },

  // Team
  {
    path: '/core-team',
    file: 'routes/team-core.tsx',
  },
  {
    path: '/board-of-advisors',
    file: 'routes/team-advisors.tsx',
  },
  {
    path: '/faculty-of-education',
    file: 'routes/team-education.tsx',
  },
] satisfies RouteConfig;
