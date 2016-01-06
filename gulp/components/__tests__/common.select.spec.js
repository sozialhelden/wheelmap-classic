jest.dontMock('../common.select');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Select = require('../common.select');

describe("React select component", function() {

  let items = [{value: 1, label: 'one'}, {value:2, label: 'two'}];

  it("loads correctly", function() {
    let component = TestUtils.renderIntoDocument(
      <Select options={items} />
    );

    expect(component).toBeDefined();
  });

  it("renders it children as options", function() {
    let component = TestUtils.renderIntoDocument(
      <Select options={items} />
    );

    let nodes = TestUtils.scryRenderedDOMComponentsWithTag(component, 'option');
    expect(nodes.length).toBe(2);
  });

});
