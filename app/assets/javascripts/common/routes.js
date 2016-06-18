import forOwn from 'mout/object/forOwn';

const routes = global.Routes;

// Wrap route helper if main locale differs from current locale
if (I18n.mainLocale !== I18n.locale) {
  forOwn(routes, (route, path) => {
    const routeWrapper = (...args) => {
      return `/${I18n.locale}${route(...args)}`;
    };

    routeWrapper.toString = () => {
      return `/${I18n.locale}${route.toString()}`;
    };

    routes[path] = routeWrapper;
  });
}

export default routes;
