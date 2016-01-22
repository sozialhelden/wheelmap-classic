jest.dontMock('../common.form.input');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Input = require('../common.form.input');

describe("Common form input React component", function() {

  it("mounts correctly", function() {
    const inputContainer = TestUtils.renderIntoDocument(
      <Input name="test" />
    );

    const input = TestUtils.findRenderedDOMComponentWithTag(inputContainer, 'input');

    expect(input).toBeDefined();

    const inputNode = ReactDOM.findDOMNode(input);

    expect(input.type).toEqual('text');
  });

});
