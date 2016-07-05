import words from 'lodash.words';

const routes = [
  'newNodeSectionPath',
  'rootPath'
];

const helpers = {};

routes.forEach(route => {
  const path = words(route).join('/');
  const helper = () => path;

  helpers[route] = jest.genMockFunction()
    .mockImpl(helper);

  helpers[route].toString = helper;
});

export default helpers;
