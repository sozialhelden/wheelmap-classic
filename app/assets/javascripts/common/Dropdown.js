const React = require('react');
const ReactDOM = require('react-dom');
const classNames = require('classnames');

class Dropdown extends React.Component {
  render() {
    const { children, className, ...props } = this.props;

    return (
      <div className={classNames('dropdown', className)} {...props}>
        {children}
      </div>
    );
  }
}

Dropdown.Button = class Button extends React.Component {
  render() {
    const { children, className, ...props } = this.props;

    return (
      <div className={classNames('btn', className)} data-toggle="dropdown" {...props}>
        {children}
      </div>
    );
  }
};

Dropdown.Menu = class Menu extends React.Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <ul className="dropdown-menu" role="menu" {...props}>
        {children}
      </ul>
    );
  }
};

Dropdown.Item = class Item extends React.Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <li {...props}>
        {children}
      </li>
    );
  }
};

module.exports = Dropdown;