const React = require('react');
const classNames = require('classnames');

function Alert(props) {
  let { children, type } = props,
    className = classNames('alert', 'alert-' + type);

  return <div className={className}>
    <i className="icon-info-sign icon-large"/> {children}
  </div>;
}

Alert.defaultProps = {
  type: 'info'
};

Alert.propTypes = {
  type: React.PropTypes.oneOf(['info', 'alert', 'error'])
};

module.exports = Alert;