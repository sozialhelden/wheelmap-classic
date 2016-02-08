const React = require('react');
const classNames = require('classnames');
const I18n = require('../I18n');

const { string, bool } = React.PropTypes;

function Input(props) {
  let { className, type, required, placeholderScope, hintScope, ...otherProps } = props;

  className = classNames(className, 'input', 'input--' + type, { required });

  if (placeholderScope != null)
    otherProps.placeholder = I18n.t(placeholderScope);

  let hint = null;

  if (hintScope != null)
    hint = <I18n scope={hintScope} className="hint"/>;

  return (
    <div className={className}>
      <input {...otherProps} type={type}/>
      {hint}
    </div>
  );
}

Input.defaultProps = {
  required: false,
  type: 'text'
};

Input.propTypes = {
  type: string.isRequired,
  required: bool.isRequired,
  placeholderScope: string,
  hintScope: string
};

module.exports = Input;
