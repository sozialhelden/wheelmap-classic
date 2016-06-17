import React, { PropTypes } from 'react';
import classNames from 'classnames';

const { any, string } = PropTypes;

function Dropdown({ children, className, ...props }) {
  return (
    <div className={classNames('dropdown', className)} {...props}>
      {children}
    </div>
  );
}

Dropdown.propTypes = {
  children: any,
  className: string
};

function Button({ children, className, ...props }) {
  return (
    <div className={classNames('btn', className)} data-toggle="dropdown" {...props}>
      {children}
    </div>
  );
}

Button.propTypes = {
  children: any,
  className: string
};

function Menu({ children, ...props }) {
  return (
    <ul className="dropdown-menu" role="menu" {...props}>
      {children}
    </ul>
  );
}

Menu.propTypes = {
  children: any
};

function Item({ children, ...props }) {
  return (
    <li {...props}>
      {children}
    </li>
  );
}

Item.propTypes = {
  children: any
};

Dropdown.Button = Button;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
