const React = require('react');
const classNames = require('classnames');

function Input(props) {
  let { name, type, required, size, value } = props,
    className = classNames('input', 'input--' + type, { required }),
    id = name;

  return (
    <div className={className}>
      <input name={name}
             id={id}
             type={type}
             size={size}
             value={value}/>
    </div>
  );
}

Input.defaultProps = {
  required: false,
  type: 'text'
};

Input.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool.isRequired,
  size: React.PropTypes.number
};

Input.contextTypes = {
  modelName: React.PropTypes.string
};

module.exports = Input;
