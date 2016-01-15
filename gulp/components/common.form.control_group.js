const React = require('react');
const I18n = require('./common.i18n');
const Input = require('./common.form.input');
const Controls = require('./common.form.controls');

class ControlGroup extends React.Component {
  static defaultProps = {
    label: true,
    labelScope: null
  };

  static propTypes = {
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

  static contextTypes = {
    modelName: React.PropTypes.string
  };

  render() {
    let { children, label, labelScope, labelFor } = this.props,
      { modelName } = this.context;

    if (label === true) {
      label = <I18n scope={labelScope}/>;
    } else if (label === false) {
      label = null;
    }

    if (label != null) {
      label = <label className="control-label" htmlFor={Input.getId(labelFor, modelName)}>{label}</label>;
    }

    return (
      <div className="control-group">
        {label}
        <Controls>
          {children}
        </Controls>
      </div>
    );
  }
}

module.exports = ControlGroup;
