import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import WidgetBuilderForm from '../Form';

jest.unmock('../Form');

describe('React WidgetForm component', function () {
  it('loads correctly', function () {
    const changeWidth = jest.genMockFn();
    const changeHeight = jest.genMockFn();
    const changeCategories = jest.genMockFn();
    const changeProvider = jest.genMockFn();
    const changeLocation = jest.genMockFn();

    const component = TestUtils.renderIntoDocument(
      <WidgetBuilderForm
        widget={{ providers: [] }}
        changeWidth={changeWidth}
        changeHeight={changeHeight}
        changeCategories={changeCategories}
        changeProvider={changeProvider}
        changeLocation={changeLocation}
      />
    );

    expect(component).not.toBeNull();
  });

  xit('change dimensions', function () {
    const changeWidth = jest.genMockFn();
    const changeHeight = jest.genMockFn();
    const changeCategories = jest.genMockFn();
    const changeProvider = jest.genMockFn();
    const changeLocation = jest.genMockFn();

    const component = TestUtils.renderIntoDocument(
      <WidgetBuilderForm
        widget={{ providers: [] }}
        changeWidth={changeWidth}
        changeHeight={changeHeight}
        changeCategories={changeCategories}
        changeProvider={changeProvider}
        changeLocation={changeLocation}
      />
    );

    // @TODO fix this
    const node = ReactDOM.findDOMNode(component); // eslint-disable-line react/no-find-dom-node

    const width = node.getElementById('widget_width');
    const height = node.getElementById('widget_height');

    width.value = 200;
    TestUtils.Simulate.change(width);

    expect(changeWidth).toBeCalledWith(200);

    height.value = 900;
    TestUtils.Simulate.change(height);

    expect(changeHeight).toBeCalledWith(900);
  });
});
