jest.dontMock('../Select');

const React = require('react');
const TestUtils = require('react-addons-test-utils');

const Select = require('../Select');

describe("React select component", function() {

  const items = [{ value: 1, label: 'one' }, { value: 2, label: 'two' }],
    renderer = TestUtils.createRenderer();

  it("loads correctly", function() {
    renderer.render(
      <Select/>
    );

    const element = renderer.getRenderOutput();

    expect(element).not.toBeNull();
  });

  it("renders it children as options", function() {
    renderer.render(
      <Select options={items}/>
    );

    const element = renderer.getRenderOutput();

    expect(element.props.children.length).toBe(2);
  });

});
