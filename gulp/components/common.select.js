let { Component } = require('react');

class Select extends Component {
  render () {
    let { options, empty } = this.props;

    let items = options.map((item, index) => {
      return <option key={index} {...item}>{item.label}</option>;
    });

    if (empty != null) items.unshift(<option value="">{empty}</option>);

    return <select {...this.props}>{items}</select>;
  }
}

export default Select;