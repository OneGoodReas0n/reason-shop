import ProductsWrapper from '../wrappers/apparel';
import ClothesWrapper from '../wrappers/clothes';
import ShoesWrapper from '../wrappers/shoes';
import TshirtsWrapper from '../wrappers/tshirts';
import HoodiesWrapper from '../wrappers/hoodies';
import PantsWrapper from '../wrappers/pants';

const routes = [
   {
      name: 'home',
      url: '/',
      component: ProductsWrapper,
      exact: true,
   },
   {
      name: 'clothes',
      url: '/clothes',
      component: ClothesWrapper,
      exact: true,
   },
   {
      name: 'shoes',
      url: '/shoes',
      component: ShoesWrapper,
      exact: true,
   },
   {
      name: 'tshirts',
      url: '/tshirts',
      component: TshirtsWrapper,
      exact: true,
   },
   {
      name: 'hoodies',
      url: '/hoodies',
      component: HoodiesWrapper,
      exact: true,
   },
   {
      name: 'pants',
      url: '/pants',
      component: PantsWrapper,
      exact: true,
   },
];

const routesMap = {};

routes.forEach((route) => {
   routesMap[route.name] = route.url;
});

const getSomeRoutes = (...routeNames) => {
   return routes.filter((e) => routeNames.includes(e.name));
};

export default routes;

export { routesMap, getSomeRoutes };
