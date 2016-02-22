import unCamelCase from 'mout/string/unCamelCase';

const routes = [
  'newNodeSectionPath'
];

const helpers = {};

routes.forEach(route => {
  const path = unCamelCase(route, '/'),
    helper = () => {
      return path;
    };

  helpers[route] = helper;
  helpers[route].toString = helper;
});


export default helpers;