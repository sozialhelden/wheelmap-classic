import React, { PropTypes } from 'react';
import classNames from 'classnames';

const { string } = PropTypes;

function I18n({ scope, className, ...props }) {
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
    <span className={className} title={title} dangerouslySetInnerHTML={createMarkup()} {...props} />
  );
}

I18n.t = (scope) => {
  const translation = global.I18n.t(scope);

  if (translation.indexOf(scope) > -1) {
    return null;
  }

  return translation;
};

I18n.locale = global.I18n.locale;

I18n.propTypes = {
  scope: string.isRequired,
  className: string
};

export default I18n;
