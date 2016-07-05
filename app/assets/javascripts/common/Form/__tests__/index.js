jest.unmock('../index');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Form from '../index';

describe('Common form React component', () => {
  const renderer = TestUtils.createRenderer();

  it('mounts correctly', function () {
    renderer.render(
      <Form />
    );

    const element = renderer.getRenderOutput();

    expect(element).not.toBeNull();
  });
});
