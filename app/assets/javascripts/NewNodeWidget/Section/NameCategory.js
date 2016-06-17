import React from 'react';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Section from './Section';
import Form from '../../common/Form';
import NodeTypeSelect from './NodeTypeSelect';
import { NAME_CATEGORY } from '../models/sections';
import { categoriesSelector } from '../../common/selectors/categories';
import { nodeTypesSelector } from '../../common/selectors/nodeTypes';
import selectors from '../selectors';
import actions from '../actions';
import { node, category, nodeType, immutableListOf, immutableMap } from '../../common/propTypes';

const { func, bool } = React.PropTypes;

class NameCategorySection extends React.Component {
  static propTypes = {
    onClickNext: func.isRequired,
    onChange: func.isRequired,
    loading: bool.isRequired,
    node: node.isRequired,
    errors: immutableMap.isRequired,
    nodeTypes: immutableListOf(nodeType).isRequired,
    categories: immutableListOf(category).isRequired
  };

  onChangeName = (event) => {
    const { node, onChange } = this.props;

    onChange(node.set('name', event.target.value));
  };

  onChangeNodeType = (nodeType) => {
    const { node, onChange } = this.props;

    onChange(node.set('nodeType', nodeType));
  };

  render() {
    const { onClickNext, loading, node, errors, categories, nodeTypes } = this.props;

    return (
      <Section section={NAME_CATEGORY} onClickAction={onClickNext} loading={loading}>
        <div>{/* Needed for having only one section */}
          <Form.ControlGroup labelFor="name" labelScope="activerecord.attributes.poi.name">
            <Form.Controls>
              <Form.Input
                name="name"
                onChange={this.onChangeName}
                value={node.name}
                errors={errors.get('name')}
              />
            </Form.Controls>
          </Form.ControlGroup>
          <Form.ControlGroup labelFor="node_type_id" labelScope="activerecord.attributes.poi.type">
            <Form.Controls>
              <NodeTypeSelect
                categories={categories}
                nodeTypes={nodeTypes}
                onChange={this.onChangeNodeType}
                value={node.nodeType}
                errors={errors.get('nodeType')}
              />
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
  errors: selectors.errors,
  loading: selectors.loading
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClickNext: actions.navigateToNextSection,
    onChange: actions.changeNode
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameCategorySection);
