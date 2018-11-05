import LandingPage from './containers/pages/LandingPage';
import Home from './containers/pages/Home';

const routes = [
  {
    path: '/',
    component: LandingPage,
    exact: true,
    title: 'Landing Page'
  },
  {
    path: '/home',
    component: Home,
    exact: true,
    title: 'home'
  }
];

export default routes;
