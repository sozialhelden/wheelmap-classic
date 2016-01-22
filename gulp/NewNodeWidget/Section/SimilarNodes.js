const React = require('react');
const { connect } = require('react-redux');

const Section = require('./Section');
const { navigateToNextSection } = require('../actions');
const { SIMILAR_NODES } = require('../models/sections');

const { func } = React.PropTypes;

class SimilarNodesSection extends React.Component {
  static propTypes = {
    onClickAction: func
  };

  render() {
    let { onClickAction } = this.props;

    return (
      <Section section={SIMILAR_NODES} onClickAction={onClickAction}>

      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onClickAction: (section) => dispatch(navigateToNextSection(section))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarNodesSection);