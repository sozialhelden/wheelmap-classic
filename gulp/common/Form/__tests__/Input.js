jest.dontMock('../Input');

const React = require('react');
const TestUtils = require('react-addons-test-utils');

const Input = require('../Input');

describe("Common form input React component", function() {

  const renderer = TestUtils.createRenderer();

  it("mounts correctly", function() {
    renderer.render(
      <Input name="test" />
    );

    const element = renderer.getRenderOutput();

    expect(element).not.toBeNull();

    const inputElement = element.props.children[0];

    expect(inputElement.props.type).toEqual('text');
  });

});
