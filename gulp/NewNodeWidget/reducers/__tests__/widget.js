jest.dontMock('../widget');

import { NAME_CATEGORY } from '../../models/sections';
import * as actions from '../../actions';
import { FETCH_CATEGORIES } from '../../../common/actions/categories';
import Node from '../../../common/models/Node';

const widgetReducer = require('../widget');

describe('widget reducer', () => {
  let state;

  beforeEach(() => {
    state = widgetReducer(undefined, {});
  });

  it('activate section', () => {
    const activeSection = NAME_CATEGORY,
      action = actions.activateSection(NAME_CATEGORY);

    state = widgetReducer(state, action);

    expect(state.get('activeSection'))
      .toEqual(activeSection);
  });

  it('changes node', () => {
    const node = new Node(),
      action = actions.changeNode(node);

    state = widgetReducer(state, action);

    expect(state.get('node'))
      .toEqual(node);
  });

  it('changes map center', () => {
    const center = { lat: 14.5, lon: 13.5 },
      action = actions.changeMapCenter(center);

    state = widgetReducer(state, action);

    expect(state.get('mapCenter'))
      .toEqual(center);
  });

  it('changes map zoom', () => {
    const zoom = 16,
      action = actions.changeMapZoom(16);

    state = widgetReducer(state, action);

    expect(state.get('mapZoom'))
      .toEqual(zoom);
  });

  it('sets similar nodes', () => {
    const similarNodes = [new Node(), new Node()],
      action = actions.setSimilar(similarNodes);

    state = widgetReducer(state, action);

    expect(state.get('similarNodes').toArray())
      .toEqual(similarNodes);
  });

  it('sets errors', () => {
    const errors = { errorOne: 'first error', errorTwo: 'second error' },
      action = actions.setErrors(errors);

    state = widgetReducer(state, action);

    expect(state.get('errors').toJS())
      .toEqual(errors);
  });

  it('is loading', () => {
    state = widgetReducer(state, actions.load(true));

    expect(state.get('loading'))
      .toEqual(true);

    state = widgetReducer(state, actions.load(false));

    expect(state.get('loading'))
      .toEqual(false);
  });
});