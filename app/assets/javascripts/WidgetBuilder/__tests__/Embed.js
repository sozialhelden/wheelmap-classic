jest.dontMock('../Embed');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const WidgetBuilderEmbed = require('../Embed');

describe("React WidgetEmbed component", function() {

  it("loads correctly", function() {
    let widget = { height: 300, width: 400, src: 'http://wheelmap.org/embed' };

    let component = TestUtils.renderIntoDocument(
      <WidgetBuilderEmbed widget={widget}/>
    );

    expect(component).not.toBeNull();
  });

});
