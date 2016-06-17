import forOwn from 'mout/object/forOwn';
import isFunction from 'mout/lang/isFunction';

const actualActions = require.requireActual('../index');
const actions = jest.genMockFromModule('../index');

forOwn(actions, (action, key) => {
  if (!isFunction(action)) {
    return;
  }

  action.mockImpl(actualActions[key]);
});

export default actions;
