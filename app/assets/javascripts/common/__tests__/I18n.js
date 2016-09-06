import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import I18n from '../I18n';

jest.unmock('../I18n');

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
    const key = VALID_KEY;

    component = TestUtils.renderIntoDocument(
      <div>
        <I18n scope={key} />
      </div>
    );

    const node = ReactDOM.findDOMNode(component); // eslint-disable-line react/no-find-dom-node
    const translation = global.I18n.t(key);

    expect(node).toBeDefined();
    expect(node.textContent).toBe(translation);
  });

  it('notifies about missing translations', () => {
    const key = 'invalid.key';

    component = TestUtils.renderIntoDocument(
      <div>
        <I18n scope={key} />
      </div>
    );

    const node = ReactDOM.findDOMNode(component).children[0]; // eslint-disable-line react/no-find-dom-node

    expect(node.textContent).toBe('invalid key');
    expect(node.className).toBe('translation-missing');
    expect(node.title).toBe('translation missing');
  });
});
