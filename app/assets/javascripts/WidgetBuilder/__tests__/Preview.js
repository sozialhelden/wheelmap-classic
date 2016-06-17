jest.dontMock('../Preview');

const React = require('react');
const TestUtils = require('react-addons-test-utils');

const WidgetBuilderPreview = require('../Preview');

describe('React WidgetPreview component', function () {
  it('loads correctly', function () {
    const widget = { height: 300, width: 400, src: 'http://wheelmap.org/embed' };

    const component = TestUtils.renderIntoDocument(
      <WidgetBuilderPreview widget={widget} />
    );

    expect(component).not.toBeNull();
  });
});
