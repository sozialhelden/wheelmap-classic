const React = require('react');
const { connect } = require('react-redux');

const Section = require('./Section');
const { navigateToNextSection, tryFetchSimilar } = require('../actions');
const { SIMILAR_NODES } = require('../models/sections');
const { nodeSelector } = require('../selectors');

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
    let { onClickAction } = this.props;

    return (
      <Section section={SIMILAR_NODES} onClickAction={onClickAction}>

      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    node: nodeSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: (node) => dispatch(tryFetchSimilar(node)),
    onClickAction: (section) => dispatch(navigateToNextSection(section))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarNodesSection);