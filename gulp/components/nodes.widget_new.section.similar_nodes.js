const React = require('react');
const { connect } = require('react-redux');

const Section = require('./nodes.widget_new.section');
const { navigateToNextSection } = require('../reducers/nodes.widget_new');
const SectionModel = require('../models/nodes.widget_new.section');

const { section } = require('./misc.types');
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