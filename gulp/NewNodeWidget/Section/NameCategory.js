const React = require('react');
const { connect } = require('react-redux');

const Section = require('./Section');
const Form = require('../../common/Form');
const NodeTypeSelect = require('./NodeTypeSelect');
const { navigateToNextSection, tryFetchCategories, changeNode } = require('../actions');
const { NAME_CATEGORY } = require('../models/sections');
const { categoriesSelector } = require('../../common/selectors/categories');
const { nodeTypesSelector } = require('../../common/selectors/nodeTypes');
const { nodeSelector } = require('../selectors');

const { func } = React.PropTypes;

class NameCategorySection extends React.Component {
  static propTypes = {
    onMount: func.isRequired,
    onClickNext: func.isRequired
  };

  componentWillMount() {
    this.props.onMount();
  }

  render() {
    const { onClickNext, node, categories, nodeTypes, onChangeName, onChangeNodeType } = this.props;

    return (
      <Section section={NAME_CATEGORY} actionLabel="Weiter" onClickAction={onClickNext}>
        <Form.ControlGroup labelFor="name" labelScope="activerecord.attributes.poi.name">
          <Form.Controls>
            <Form.Input name="name" onChange={onChangeName} value={node.name} />
          </Form.Controls>
        </Form.ControlGroup>
        <Form.ControlGroup labelFor="node_type_id" labelScope="activerecord.attributes.poi.type">
          <Form.Controls>
            <NodeTypeSelect categories={categories} nodeTypes={nodeTypes} onChange={onChangeNodeType} value={node.nodeType} />
          </Form.Controls>
        </Form.ControlGroup>
      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: categoriesSelector(state),
    nodeTypes: nodeTypesSelector(state),
    node: nodeSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: section => dispatch(tryFetchCategories()),
    onClickNext: section => dispatch(navigateToNextSection(section)),
    onChangeName: event => dispatch(changeNode('name', event.target.value)),
    onChangeNodeType: nodeType => dispatch(changeNode('nodeType', nodeType))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameCategorySection);