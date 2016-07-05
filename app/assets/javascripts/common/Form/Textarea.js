import React, { PropTypes } from 'react';
import classNames from 'classnames';

import I18n from '../I18n';

const { bool, string } = PropTypes;

function Textarea({ className, required, placeholderScope, ...props }) {
  let placeholder;

  className = classNames(className, 'textarea', { required });

  if (placeholderScope != null) {
    placeholder = I18n.t(placeholderScope);
  }

  return (
    <div className={className}>
      <textarea {...props} placeholder={placeholder} />
    </div>
  );
}

Textarea.defaultProps = {
  required: false
};

Textarea.propTypes = {
  className: string,
  required: bool.isRequired,
  placeholderScope: string
};

export default Textarea;
