import forOwn from 'mout/object/forOwn';

const actualActions = require.requireActual('../router');
export const actions = jest.genMockFromModule('../router');

forOwn(actions, (action, key) => {
  if (action._isMockFunction) {
    action.mockImpl(actualActions[key]);
  }
});

forOwn(actions.push, (action, key) => {
  if (action._isMockFunction) {
    action.mockImpl(actualActions.push[key]);
  }
});

forOwn(actions.replace, (action, key) => {
  if (action._isMockFunction) {
    action.mockImpl(actualActions.replace[key]);
  }
});
