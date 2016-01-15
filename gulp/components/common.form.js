const React = require('react');
const classNames = require('classnames');

function Form(props) {
  let { children, className, type } = props;

  className = classNames(className, 'form-' + type);

  return (
    <form className={className}>
      {children}
    </form>
  );
}

Form.propTypes = {
  className: React.PropTypes.string,
  type: React.PropTypes.string
};

Form.defaultProps = {
  type: 'horizontal'
};

module.exports = Form;