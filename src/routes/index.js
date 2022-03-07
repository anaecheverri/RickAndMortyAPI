import Header from '../template/Header';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Footer from '../template/Footer';
import Filter from '../template/Filter';

const routes = {
  '?': Home,
  '?/contact': 'Contact',
}

const router = async() => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  const filter = null || document.getElementById('filter');
  const footer = null || document.getElementById('footer');

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  header.innerHTML = await Header();
  content.innerHTML = await render();
  filter.innerHTML = await Filter();
  footer.innerHTML = await Footer();
};

export default router;