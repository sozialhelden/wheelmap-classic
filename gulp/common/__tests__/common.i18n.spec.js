jest.dontMock('../common.i18n');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const I18n = require('../common.i18n');

const VALID_KEY = 'valid.key';

describe("React translation component", function() {

  let component = null;

  let t = jest.genMockFn();

  t.mockImplementation(function(key) {
    if (key == VALID_KEY)
      return 'valid translation';

    return `[${key}]`;
  });

  global.I18n = { locale: 'en', t };

  it("loads correctly and resolves translations", function() {
    let key = VALID_KEY;

    component = TestUtils.renderIntoDocument(
      <I18n scope={key}/>
    );
    
    let node = ReactDOM.findDOMNode(component),
      translation = global.I18n.t(key);

    expect(node).toBeDefined();
    expect(node.textContent).toBe(translation);
  });

  it("notifies about missing translations", function() {
    let key = 'invalid.key';

    component = TestUtils.renderIntoDocument(
      <I18n scope={key}/>
    );

    let node = ReactDOM.findDOMNode(component);

    expect(node.textContent).toBe('invalid key');
    expect(node.className).toBe('translation-missing');
    expect(node.title).toBe('translation missing');
  });

});
