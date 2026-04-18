import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('what-we-do', 'routes/what-we-do.tsx'),
  route('who-we-work-with', 'routes/who-we-work-with.tsx'),
] satisfies RouteConfig;
