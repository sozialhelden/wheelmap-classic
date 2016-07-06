jest.unmock('../Select');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Select from '../Select';

describe('React select component', () => {
  const items = [ { value: 1, label: 'one' }, { value: 2, label: 'two' } ];
  const renderer = TestUtils.createRenderer();

  it('loads correctly', function () {
    renderer.render(
      <Select />
    );

    const element = renderer.getRenderOutput();

    expect(element).not.toBeNull();
  });

  it('renders it children as options', () => {
    renderer.render(
      <Select options={items} />
    );

    const element = renderer.getRenderOutput();

    expect(element.props.children.length).toBe(2);
  });
});
