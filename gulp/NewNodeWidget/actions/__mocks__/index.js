import forOwn from 'mout/object/forOwn';
import isFunction from 'mout/lang/isFunction';

const actualActions = require.requireActual('../index'),
  actions = jest.genMockFromModule('../index');

module.exports = actions;

forOwn(actions, (action, key) => {
  if (!isFunction(action))
    return;

  action.mockImpl(actualActions[key]);
});