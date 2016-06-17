import React from 'react';
import { connect } from 'react-redux';

import Section from './Section';
import actions from '../actions';
import { SIMILAR_NODES } from '../models/sections';
import selectors from '../selectors';
import { editNodePath } from '../../common/routes';
import I18n from '../../common/I18n';
import { node, immutableListOf } from '../../common/propTypes';

const { func, bool } = React.PropTypes;

function SimilarNodesSection({ similarNodes, loading, onClickAction }) {
  const items = [];

  similarNodes.forEach(node => {
    items.push(
      <li key={node.id}>
        <strong>{node.name}</strong> {node.address()}
        <a href={editNodePath(node.id)} className="pull-right">
          <I18n scope="nodes.new.form.section.similar_nodes.go_edit" /> <i className="icon-chevron-right" />
        </a>
      </li>
    );
  });

  return (
    <Section
      section={SIMILAR_NODES}
      actionExtraScope="nodes.new.form.section.similar_nodes.go_new"
      onClickAction={onClickAction}
      loading={loading}
    >
      <ul className="nodes-new-content-section--similar-list">
        {items}
      </ul>
    </Section>
  );
}

SimilarNodesSection.propTypes = {
  similarNodes: immutableListOf(node),
  onClickAction: func.isRequired,
  loading: bool.isRequired
};

function mapStateToProps(state) {
  return {
    node: selectors.node(state),
    similarNodes: selectors.similarNodes(state),
    loading: selectors.loading(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickAction: (section) => dispatch(actions.navigateToNextSection(section))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarNodesSection);
