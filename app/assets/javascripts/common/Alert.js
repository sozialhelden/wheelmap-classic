import React, { PropTypes } from 'react';
import classNames from 'classnames';

const { oneOf, any } = PropTypes;

const ICONS = {
  info: 'info-sign',
  alert: 'exclamation-sign',
  error: 'exclamation-sign'
};

function Alert({ children, type }) {
  const className = classNames('alert', `alert-${type}`);
  const iconClassName = classNames(`icon-${ICONS[type]}`, 'icon-large');

  return (
    <div className={className}>
      <i className={iconClassName} /> {children}
    </div>
  );
}

Alert.defaultProps = {
  type: 'info'
};

Alert.propTypes = {
  type: oneOf([ 'info', 'alert', 'error' ]),
  children: any
};

module.exports = Alert;
