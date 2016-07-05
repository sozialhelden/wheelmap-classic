jest.unmock('../Preview');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import WidgetBuilderPreview from '../Preview';

describe('React WidgetPreview component', function () {
  it('loads correctly', function () {
    const widget = { height: 300, width: 400, src: 'http://wheelmap.org/embed' };

    const component = TestUtils.renderIntoDocument(
      <WidgetBuilderPreview widget={widget} />
    );

    expect(component).not.toBeNull();
  });
});
