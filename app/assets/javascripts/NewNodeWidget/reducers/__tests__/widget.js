import { List, Map } from 'immutable';

import { ADDRESS } from '../../models/sections';
import * as actions from '../../actions';
import Node from '../../../common/models/Node';
import widgetReducer, { DEFAULT_STATE } from '../widget';

jest.unmock('../widget');
jest.unmock('../../actions');

describe('widget reducer', () => {
  it('initializes', () => {
    const state = widgetReducer(undefined, {});

    expect(state)
      .toEqualImmutable(DEFAULT_STATE);
  });

  it('activates section', () => {
    const activeSection = ADDRESS;

    const state = widgetReducer(DEFAULT_STATE, {
      type: actions.ACTIVATE_SECTION,
      payload: activeSection
    });

    expect(state)
      .toEqualImmutable(DEFAULT_STATE
        .set('activeSection', ADDRESS));
  });

  it('changes node', () => {
    const node = new Node();

    const state = widgetReducer(DEFAULT_STATE, {
      type: actions.CHANGE_NODE,
      payload: node
    });

    expect(state)
      .toEqualImmutable(DEFAULT_STATE
        .set('node', node));
  });

  it('changes map center', () => {
    const center = { lat: 14.5, lon: 13.5 };

    const state = widgetReducer(DEFAULT_STATE, {
      type: actions.CHANGE_MAP_CENTER,
      payload: center
    });

    expect(state)
      .toEqualImmutable(DEFAULT_STATE
        .set('mapCenter', new Map(center)));
  });

  it('changes map zoom', () => {
    const zoom = 16;

    const state = widgetReducer(DEFAULT_STATE, {
      type: actions.CHANGE_MAP_ZOOM,
      payload: 16
    });

    expect(state)
      .toEqualImmutable(DEFAULT_STATE
        .set('mapZoom', zoom));
  });

  it('sets similar nodes', () => {
    const similarNodes = [ new Node(), new Node() ];

    const state = widgetReducer(DEFAULT_STATE, {
      type: actions.SET_SIMILAR,
      payload: similarNodes
    });

    expect(state)
      .toEqualImmutable(DEFAULT_STATE
        .set('similarNodes', new List(similarNodes)));
  });

  it('sets errors', () => {
    const errors = { errorOne: 'first error', errorTwo: 'second error' };

    const state = widgetReducer(DEFAULT_STATE, {
      type: actions.SET_ERRORS,
      payload: errors
    });

    expect(state)
      .toEqualImmutable(DEFAULT_STATE
        .set('errors', new Map(errors)));
  });

  it('is loading', () => {
    let state = widgetReducer(DEFAULT_STATE, {
      type: actions.LOAD,
      payload: true
    });

    expect(state)
      .toEqualImmutable(DEFAULT_STATE
        .set('loading', true));

    state = widgetReducer(state, {
      type: actions.LOAD,
      payload: false
    });

    expect(state)
      .toEqualImmutable(DEFAULT_STATE
        .set('loading', false));
  });
});
