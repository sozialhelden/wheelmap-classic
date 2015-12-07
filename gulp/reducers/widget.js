import { Map } from 'immutable';
import { UPDATE_WIDGET } from '../actions/widget';

export default function(state = Map(), action) {
  switch (action.type) {
    case UPDATE_WIDGET:
      return state.mergeDeepIn(['widget'], action.widget);
  }
}