const React = require('react');
const classNames = require('classnames');
const I18n = require('../I18n');

function Input(props) {
  let { className, type, required, placeholderScope, ...otherProps } = props;

  className = classNames(className, 'input', 'input--' + type, { required });

  if (placeholderScope != null)
    otherProps.placeholder = I18n.t(placeholderScope);

  return (
    <div className={className}>
      <input {...otherProps} type={type}/>
    </div>
  );
}

Input.defaultProps = {
  required: false,
  type: 'text'
};

Input.propTypes = {
  type: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool.isRequired,
  placeholderScope: React.PropTypes.string
};

Input.contextTypes = {
  modelName: React.PropTypes.string
};

module.exports = Input;
