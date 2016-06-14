import forOwn from 'mout/object/forOwn';
import isFunction from 'mout/lang/isFunction';

const actualActions = require.requireActual('../router'),
  actions = jest.genMockFromModule('../router');

module.exports = actions;

forOwn(actions, (action, key) => {
  if (action._isMockFunction)
    action.mockImpl(actualActions[key]);
});

forOwn(actions.push, (action, key) => {
  if (action._isMockFunction)
    action.mockImpl(actualActions.push[key]);
});

forOwn(actions.replace, (action, key) => {
  if (action._isMockFunction)
    action.mockImpl(actualActions.replace[key]);
});