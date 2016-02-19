jest.dontMock('../index');

const React = require('react');
const TestUtils = require('react-addons-test-utils');

const Form = require('../index');

describe("Common form React component", function() {

  const renderer = TestUtils.createRenderer();

  it("mounts correctly", function() {
    renderer.render(
      <Form/>
    );

    const element = renderer.getRenderOutput();

    expect(element).not.toBeNull();
  });

});
