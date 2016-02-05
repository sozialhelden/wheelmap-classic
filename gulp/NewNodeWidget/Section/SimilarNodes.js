const React = require('react');
const { connect } = require('react-redux');

const { editNodePath } = global.Routes;

const Section = require('./Section');
const { navigateToNextSection, fetchSimilar } = require('../actions');
const { SIMILAR_NODES } = require('../models/sections');
const { nodeSelector, similarNodesSelector } = require('../selectors');
const Node = require('../../common/models/Node');

const { func } = React.PropTypes;

class SimilarNodesSection extends React.Component {
  static propTypes = {
    onMount: func.isRequired,
    onClickAction: func
  };

  componentWillMount() {
    this.props.onMount(this.props.node);
  }

  render() {
    let { similarNodes, onClickAction } = this.props,
      items = [];

    similarNodes.forEach(node => {
      items.push(
        <li key={node.id}>
          <strong>{node.name}</strong> {Node.address(node)}
          <a href={editNodePath(node.id)} className="pull-right">Mit diesem Ort fortfahren <i className="icon-chevron-right"/></a>
        </li>
      );
    });

    return (
      <Section section={SIMILAR_NODES} onClickAction={onClickAction}>
        <ul className="nodes-new-content-section--similar-list">
          {items}
        </ul>
      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    node: nodeSelector(state),
    similarNodes: similarNodesSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: (node) => dispatch(fetchSimilar(node)),
    onClickAction: (section) => dispatch(navigateToNextSection(section))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarNodesSection);