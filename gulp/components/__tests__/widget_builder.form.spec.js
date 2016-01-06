jest.dontMock('../widget_builder.form');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const WidgetBuilderForm = require('../widget_builder.form');

describe("React WidgetForm component", function() {

  it("loads correctly", function() {
    var component = TestUtils.renderIntoDocument(
      <WidgetBuilderForm widget={{ providers: [] }} />
    );

    expect(component).toBeDefined();
  });

  it("validates dimensions", function() {
    var changeWidth = jest.genMockFn(),
      changeHeight = jest.genMockFn();

    var component = TestUtils.renderIntoDocument(
      <WidgetBuilderForm widget={{ providers: [] }} changeWidth={changeWidth} changeHeight={changeHeight} />
    );

    var { width, height } = component.refs;

    width.value = 200;
    TestUtils.Simulate.change(width);

    expect(changeWidth).toBeCalledWith(200);

    height.value = 900;
    TestUtils.Simulate.change(height);

    expect(changeHeight).toBeCalledWith(900);
  });

});
