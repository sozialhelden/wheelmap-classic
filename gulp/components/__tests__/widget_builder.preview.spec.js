jest.dontMock('../widget_builder.preview');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const WidgetBuilderPreview = require('../widget_builder.preview');

describe("React WidgetPreview component", function() {

  it("loads correctly", function() {
    let widget = { height: 300, width: 400, src: 'http://wheelmap.org/embed' };

    var component = TestUtils.renderIntoDocument(
      <WidgetBuilderPreview widget={widget}/>
    );

    expect(component).toBeDefined();
  });

});
