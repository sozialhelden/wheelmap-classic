import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const { string } = PropTypes;

class I18n extends Component {
  static propTypes = {
    scope: string.isRequired,
    className: string
  };

  static get locale() {
    return global.I18n.locale;
  }

  static t(scope) {
    const translation = global.I18n.t(scope);

    if (translation.indexOf(scope) > -1) {
      return null;
    }

    return translation;
  }

  render() {
    const { scope, ...props } = this.props;
    let { className } = this.props;

    let translation = I18n.t(scope);
    let missingTranslation = false;
    let title;

    // Translation was not found
    if (translation == null) {
      translation = scope.replace(/\./g, ' ');
      missingTranslation = true;
      title = 'translation missing';
    }

    // Use dangerouslySetInnerHTML as the translation string as translations can contain html elements
    function createMarkup() {
      return { __html: translation };
    }

    className = classNames(className, { 'translation-missing': missingTranslation });

    return (
      <span {...props} className={className} title={title} dangerouslySetInnerHTML={createMarkup()} />
    );
  }
}

export default I18n;
