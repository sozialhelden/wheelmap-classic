const React = require('react');
const I18n = require('../I18n');

function ControlGroup(props) {
  let { children, label, labelScope, labelFor } = props;

  if (label === true) {
    label = <I18n scope={labelScope}/>;
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
  label: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.bool
  ]).isRequired,
  labelFor: function(props, propName) {
    if (props.label && typeof props[propName] !== 'string')
      return new Error('labelFor is null.');
  },
  labelScope: function(props, propName) {
    if (props.label === true && props[propName] == null)
      return new Error('labelScope is null.');
  }
};

module.exports = ControlGroup;
