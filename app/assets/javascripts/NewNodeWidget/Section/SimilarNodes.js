import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { navigateToNextSection } from '../actions';
import { SIMILAR_NODES } from '../models/sections';
import * as selectors from '../selectors';
import routes from '../../common/routes';
import I18n from '../../common/I18n';
import Alert from '../../common/Alert';
import { node, immutableListOf } from '../../common/propTypes';

import Section from './Section';

const { func, bool } = React.PropTypes;

class SimilarNodesSection extends Component {
  static propTypes = {
    similarNodes: immutableListOf(node),
    onClickAction: func.isRequired,
    loading: bool.isRequired
  };

  renderSimilarNodes() {
    const { similarNodes } = this.props;

    const items = similarNodes.map(node => (
      <li key={node.id}>
        <strong>{node.name}</strong> {node.address()}
        <a href={routes.editNodePath(node.id)} className="pull-right">
          <I18n scope="nodes.new.form.section.similar_nodes.go_edit" /> <i className="icon-chevron-right" />
        </a>
      </li>
    ));

    return (
      <ul className="nodes-new-content-section--similar-list">
        {items}
      </ul>
    );
  }

  renderNoSimilarNodes() {
    return <Alert><I18n scope="nodes.new.form.section.similar_nodes.empty" /></Alert>;
  }

  render() {
    const { similarNodes, loading, onClickAction } = this.props;
    let actionExtraScope;
    let titleScope;

    if (similarNodes.size > 0) {
      actionExtraScope = 'nodes.new.form.section.similar_nodes.go_new';
    } else {
      titleScope = 'nodes.new.form.section.similar_nodes.empty';
    }

    return (
      <Section
        section={SIMILAR_NODES}
        actionExtraScope={actionExtraScope}
        titleScope={titleScope}
        onClickAction={onClickAction}
        loading={loading}
      >
        {similarNodes.size > 0 ? this.renderSimilarNodes() : this.renderNoSimilarNodes()}
      </Section>
    );
  }
}

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
