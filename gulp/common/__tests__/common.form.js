jest.dontMock('../common.form');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Form = require('../common.form');

describe("Common form React component", function() {

  it("mounts correctly", function() {
    const component = TestUtils.renderIntoDocument(
      <Form />
    );

    expect(component).toBeDefined();
  });

});
