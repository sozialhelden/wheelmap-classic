jest.dontMock('../Embed');

const React = require('react');
const TestUtils = require('react-addons-test-utils');

const WidgetBuilderEmbed = require('../Embed');

describe('React WidgetEmbed component', function () {
  it('loads correctly', function () {
    const widget = { height: 300, width: 400, src: 'http://wheelmap.org/embed' };

    const component = TestUtils.renderIntoDocument(
      <WidgetBuilderEmbed widget={widget} />
    );

    expect(component).not.toBeNull();
  });
});
