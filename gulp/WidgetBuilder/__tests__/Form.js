jest.dontMock('../form');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const WidgetBuilderForm = require('../Form');

describe("React WidgetForm component", function() {

  it("loads correctly", function() {
    const component = TestUtils.renderIntoDocument(
      <WidgetBuilderForm widget={{ providers: [] }} />
    );

    expect(component).not.toBeNull();
  });

  xit("change dimensions", function() {
    const changeWidth = jest.genMockFn(),
      changeHeight = jest.genMockFn();

    const component = TestUtils.renderIntoDocument(
      <WidgetBuilderForm widget={{ providers: [] }} changeWidth={changeWidth} changeHeight={changeHeight} />
    );

    // @TODO fix this
    const node = ReactDOM.findDOMNode(component);

    const width = node.getElementById('widget_width'),
      height = node.getElementById('widget_height');

    width.value = 200;
    TestUtils.Simulate.change(width);

    expect(changeWidth).toBeCalledWith(200);

    height.value = 900;
    TestUtils.Simulate.change(height);

    expect(changeHeight).toBeCalledWith(900);
  });

});
