const React = require('react');
const sortBy = require('mout/array/sortBy');

const Form = require('../../common/Form');
const I18n = require('../../common/I18n');
const Category = require('../../common/models/Category');
const NodeType = require('../../common/models/NodeType');

const { func, instanceOf, string } = React.PropTypes;
const { immutableMapOf } = require('../../common/types');

class NodeTypeSelect extends React.Component {
  static propTypes = {
    onChange: func,
    categories: immutableMapOf(instanceOf(Category)),
    nodeTypes: immutableMapOf(instanceOf(NodeType)),
    value: string
  };

  onChange = (event) => {
    this.props.onChange(event.target.value);
  };

  getOptions() {
    const { categories, nodeTypes } = this.props;

    const optGroups = categories.toArray().map(category => {
      const options = nodeTypes
        .filter(nodeType => nodeType.category === category.id)
        .toArray()
        .map(nodeType => {
          const label = I18n.t(`poi.name.${category.identifier}.${nodeType.identifier}`);

          return {
            label: label,
            value: nodeType.identifier
          }
        });

      return {
        label: I18n.t(`poi.category.${category.identifier}`),
        options: sortBy(options, 'label')
      };
    });

    return sortBy(optGroups, 'label');
  }

  render() {
    return (
      <Form.Select options={this.getOptions()} onChange={this.onChange} value={this.props.value} />
    );
  }
}

module.exports = NodeTypeSelect;