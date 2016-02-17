const React = require('react');
const { bindActionCreators } = require('redux');
const { createStructuredSelector } = require('reselect');
const { connect } = require('react-redux');

const Section = require('./Section');
const Form = require('../../common/Form');
const NodeTypeSelect = require('./NodeTypeSelect');
const { NAME_CATEGORY } = require('../models/sections');
const { categoriesSelector } = require('../../common/selectors/categories');
const { nodeTypesSelector } = require('../../common/selectors/nodeTypes');
const selectors = require('../selectors');
const actions = require('../actions');

const { func } = React.PropTypes;

class NameCategorySection extends React.Component {
  static propTypes = {
    onClickNext: func.isRequired,
    onChange: func.isRequired
  };

  onChangeName(node, event) {
    this.props.onChange(node.set('name', event.target.value));
  }

  onChangeNodeType(node, nodeType) {
    this.props.onChange(node.set('nodeType', nodeType));
  }

  render() {
    const { onClickNext, node, errors, categories, nodeTypes } = this.props;

    return (
      <Section section={NAME_CATEGORY} actionLabel="Weiter" onClickAction={onClickNext}>
        <div>{/* Needed for having only one section */}
          <Form.ControlGroup labelFor="name" labelScope="activerecord.attributes.poi.name">
            <Form.Controls>
              <Form.Input name="name"
                          onChange={this.onChangeName.bind(this, node)}
                          value={node.name}
                          errors={errors.get('name')}/>
            </Form.Controls>
          </Form.ControlGroup>
          <Form.ControlGroup labelFor="node_type_id" labelScope="activerecord.attributes.poi.type">
            <Form.Controls>
              <NodeTypeSelect categories={categories}
                              nodeTypes={nodeTypes}
                              onChange={this.onChangeNodeType.bind(this, node)}
                              value={node.nodeType}
                              errors={errors.get('nodeType')}/>
            </Form.Controls>
          </Form.ControlGroup>
        </div>
      </Section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  categories: categoriesSelector,
  nodeTypes: nodeTypesSelector,
  node: selectors.node,
  errors: selectors.errors
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClickNext: actions.navigateToNextSection,
    onChange: actions.changeNode
  }, dispatch);
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameCategorySection);