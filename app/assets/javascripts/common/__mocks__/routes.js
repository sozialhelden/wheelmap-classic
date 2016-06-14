import unCamelCase from 'mout/string/unCamelCase';

const routes = [
  'newNodeSectionPath',
  'rootPath'
];

const helpers = {};

routes.forEach(route => {
  const path = unCamelCase(route, '/'),
    helper = () => {
      return path;
    };

  helpers[route] = jest.genMockFunction()
    .mockImpl(helper);

  helpers[route].toString = helper;
});

module.exports = helpers;