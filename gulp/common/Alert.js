const React = require('react');
const classNames = require('classnames');

const ICONS = {
  info: 'info-sign',
  alert: 'exclamation-sign',
  error: 'exclamation-sign'
};

function Alert(props) {
  let { children, type } = props,
    className = classNames('alert', `alert-${type}`),
    iconClassName = classNames(`icon-${ICONS[type]}`, 'icon-large');

  return <div className={className}>
    <i className={iconClassName}/> {children}
  </div>;
}

Alert.defaultProps = {
  type: 'info'
};

Alert.propTypes = {
  type: React.PropTypes.oneOf(['info', 'alert', 'error'])
};

module.exports = Alert;