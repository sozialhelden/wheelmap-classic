jest.dontMock('../I18n');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import I18n from '../I18n';

const VALID_KEY = 'valid.key';

describe('React translation component', () => {
  let component = null;

  const t = jest.genMockFn();

  t.mockImplementation(function (key) {
    if (key === VALID_KEY) {
      return 'valid translation';
    }

    return `[${key}]`;
  });

  global.I18n = { locale: 'en', t };

  it('loads correctly and resolves translations', () => {
    let key = VALID_KEY;

    component = TestUtils.renderIntoDocument(
      <I18n scope={key} />
    );

    const node = ReactDOM.findDOMNode(component);
    const translation = global.I18n.t(key);

    expect(node).toBeDefined();
    expect(node.textContent).toBe(translation);
  });

  it('notifies about missing translations', () => {
    let key = 'invalid.key';

    component = TestUtils.renderIntoDocument(
      <I18n scope={key} />
    );

    const node = ReactDOM.findDOMNode(component);

    expect(node.textContent).toBe('invalid key');
    expect(node.className).toBe('translation-missing');
    expect(node.title).toBe('translation missing');
  });
});
