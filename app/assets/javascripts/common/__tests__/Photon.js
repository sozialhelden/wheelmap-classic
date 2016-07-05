jest.unmock('../Photon');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Photon from '../Photon';

describe('React Photon component', () => {
  it('loads correctly', function () {
    const component = TestUtils.renderIntoDocument(
      <Photon />
    );

    expect(component).toBeDefined();
  });
});
