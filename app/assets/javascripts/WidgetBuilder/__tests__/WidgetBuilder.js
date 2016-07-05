jest.unmock('../WidgetBuilder');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import WidgetBuilder from '../WidgetBuilder';

describe('React Widget component', function () {
  it('loads correctly', function () {
    const component = TestUtils.renderIntoDocument(
      <WidgetBuilder.WrappedComponent
        width={100}
        height={400}
        lat={50}
        lon={50}
        providers={[]}
        categories={[]}
        src={'http://src.src'}
        resource={'http://resource.src'}
      />
    );

    expect(component).not.toBeNull();
  });
});
