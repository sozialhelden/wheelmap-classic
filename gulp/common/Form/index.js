const React = require('react');
const classNames = require('classnames');

const ControlGroup = require('./ControlGroup');
const Controls = require('./Controls');
const Input = require('./Input');
const Textarea = require('./Textarea');
const Select = require('./Select');

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

Form.ControlGroup = ControlGroup;
Form.Controls = Controls;
Form.Input = Input;
Form.Textarea = Textarea;
Form.Select = Select;

module.exports = Form;