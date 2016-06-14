const React = require('react');
const classNames = require('classnames');
const I18n = require('../I18n');

function Textarea(props) {
  let { className, required, placeholderScope, ...otherProps } = props;

  className = classNames(className, 'textarea', { required });

  if (placeholderScope != null)
    otherProps.placeholder = I18n.t(placeholderScope);

  return (
    <div className={className}>
      <textarea {...otherProps}/>
    </div>
  );
}

Textarea.defaultProps = {
  required: false
};

Textarea.propTypes = {
  required: React.PropTypes.bool.isRequired,
  placeholderScope: React.PropTypes.string
};

module.exports = Textarea;
