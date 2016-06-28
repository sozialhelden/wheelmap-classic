import React from 'react';
import classNames from 'classnames';
import { List } from 'immutable';

import I18n from '../I18n';
import { immutableListOf } from '../propTypes';

const { string, bool } = React.PropTypes;

function Input({ className, type, required, placeholderScope, hintScope, errors, ...props }) {
  let placeholder;

  className = classNames(className, 'input', `input--${type}`, { required, has_error: errors.size > 0 });

  if (placeholderScope != null) {
    placeholder = I18n.t(placeholderScope);
  }

  let hint = null;

  if (hintScope != null) {
    hint = <I18n scope={hintScope} className="hint" />;
  }

  const errorElements = errors.map((error, index) => (
    <div key={index} className="error">{error}</div>
  ));

  return (
    <div className={className}>
      <input {...props} placeholder={placeholder} type={type} />
      {hint}
      {errorElements}
    </div>
  );
}

Input.defaultProps = {
  required: false,
  errors: new List(),
  type: 'text'
};

Input.propTypes = {
  className: string,
  type: string.isRequired,
  required: bool.isRequired,
  placeholderScope: string,
  hintScope: string,
  errors: immutableListOf(string)
};

export default Input;
