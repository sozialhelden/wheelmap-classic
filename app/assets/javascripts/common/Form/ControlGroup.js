import React, { PropTypes } from 'react';

import I18n from '../I18n';

const { oneOfType, element, bool, any } = PropTypes;

function ControlGroup({ children, label, labelScope, labelFor }) {
  if (label === true) {
    label = <I18n scope={labelScope} />;
  } else if (label === false) {
    label = null;
  }

  if (label != null) {
    label = <label className="control-label" htmlFor={labelFor}>{label}</label>;
  }

  return (
    <div className="control-group">
      {label}
      {children}
    </div>
  );
}

ControlGroup.defaultProps = {
  label: true,
  labelScope: null
};

ControlGroup.propTypes = {
  label: oneOfType([ element, bool ]).isRequired,
  labelFor(props, propName) {
    if (props.label && typeof props[propName] !== 'string') {
      return new Error('labelFor is null.');
    }

    return null;
  },
  labelScope(props, propName) {
    if (props.label === true && props[propName] == null) {
      return new Error('labelScope is null.');
    }

    return null;
  },
  children: any
};

export default ControlGroup;
