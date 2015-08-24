const React = require('react');
const classNames = require('classnames');
const { List } = require('immutable');

const I18n = require('../I18n');

const { string, bool, arrayOf } = React.PropTypes;
const { immutableListOf } = require('../types');

function Input(props) {
  let { className, type, required, placeholderScope, hintScope, errors, ...otherProps } = props;

  className = classNames(className, 'input', 'input--' + type, { required, has_error: errors.size > 0 });

  if (placeholderScope != null)
    otherProps.placeholder = I18n.t(placeholderScope);

  let hint = null,
    errorElements = [];

  if (hintScope != null)
    hint = <I18n scope={hintScope} className="hint"/>;

  errors.forEach((error, index) => {
    errorElements.push(<div key={index} className="error">{error}</div>);
  });

  return (
    <div className={className}>
      <input {...otherProps} type={type}/>
      {hint}
      {errorElements}
    </div>
  );
}

Input.defaultProps = {
  required: false,
  errors: List(),
  type: 'text'
};

Input.propTypes = {
  type: string.isRequired,
  required: bool.isRequired,
  placeholderScope: string,
  hintScope: string,
  errors: immutableListOf(string)
};

module.exports = Input;
