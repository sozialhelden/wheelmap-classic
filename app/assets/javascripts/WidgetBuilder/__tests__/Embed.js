import React from 'react';
import TestUtils from 'react-addons-test-utils';

import WidgetBuilderEmbed from '../Embed';

jest.unmock('../Embed');

describe('React WidgetEmbed component', function () {
  it('loads correctly', function () {
    const widget = { height: 300, width: 400, src: 'http://wheelmap.org/embed' };

    const component = TestUtils.renderIntoDocument(
      <WidgetBuilderEmbed widget={widget} />
    );

    expect(component).not.toBeNull();
  });
});
