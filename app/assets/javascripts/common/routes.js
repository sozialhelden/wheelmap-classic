const map = require('mout/object/map');

let routes = global.Routes;

// Wrap route helper if main locale differs from current locale
if (I18n.mainLocale !== I18n.locale) {
  routes = map(routes, route => {
    const routeWrapper = (...args) => {
      return `/${I18n.locale}${route(...args)}`;
    };

    routeWrapper.toString = () => {
      return `/${I18n.locale}${route.toString()}`;
    };

    return routeWrapper;
  });
}

module.exports = routes;