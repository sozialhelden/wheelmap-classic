jest.unmock('../Input');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Input from '../Input';

describe('Common form input React component', () => {
  const renderer = TestUtils.createRenderer();

  it('mounts correctly', function () {
    renderer.render(
      <Input name="test" />
    );

    const element = renderer.getRenderOutput();

    expect(element).not.toBeNull();

    const inputElement = element.props.children[0];

    expect(inputElement.props.type).toEqual('text');
  });
});
