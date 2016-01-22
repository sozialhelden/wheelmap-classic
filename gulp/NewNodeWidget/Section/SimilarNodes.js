const React = require('react');
const { connect } = require('react-redux');

const Section = require('./Section');
const { navigateToNextSection } = require('../reducer');
const SectionModel = require('../models/Section');

const { section } = require('../types');
const { func } = React.PropTypes;

class SimilarNodesSection extends React.Component {
  static propTypes = {
    section: section,
    onClickAction: func
  };

  render() {
    let { section, onClickAction } = this.props;

    return (
      <Section section={section} onClickAction={onClickAction}>

      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    section: state.get('sections').find(section => section.id === SectionModel.SIMILAR_NODES)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickAction: (section) => dispatch(navigateToNextSection())
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarNodesSection);