import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { navigateToNextSection } from '../actions';
import { SIMILAR_NODES } from '../models/sections';
import * as selectors from '../selectors';
import { editNodePath } from '../../common/routes';
import I18n from '../../common/I18n';
import { node, immutableListOf } from '../../common/propTypes';

import Section from './Section';

const { func, bool } = React.PropTypes;

function SimilarNodesSection({ similarNodes, loading, onClickAction }) {
  const items = similarNodes.map(node => (
    <li key={node.id}>
      <strong>{node.name}</strong> {node.address()}
      <a href={editNodePath(node.id)} className="pull-right">
        <I18n scope="nodes.new.form.section.similar_nodes.go_edit" /> <i className="icon-chevron-right" />
      </a>
    </li>
  ));

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

const mapStateToProps = createStructuredSelector({
  node: selectors.node,
  similarNodes: selectors.similarNodes,
  loading: selectors.loading
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClickAction: navigateToNextSection
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarNodesSection);
