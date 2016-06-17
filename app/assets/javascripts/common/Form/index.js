import React, { PropTypes } from 'react';
import classNames from 'classnames';

import ControlGroup from './ControlGroup';
import Controls from './Controls';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';

const { string, any } = PropTypes;

function Form({ children, className, type }) {
  className = classNames(className, `form-${type}`);

  return (
    <form className={className}>
      {children}
    </form>
  );
}

Form.propTypes = {
  className: string,
  type: string,
  children: any
};

Form.defaultProps = {
  type: 'horizontal'
};

Form.ControlGroup = ControlGroup;
Form.Controls = Controls;
Form.Input = Input;
Form.Textarea = Textarea;
Form.Select = Select;

export default Form;
