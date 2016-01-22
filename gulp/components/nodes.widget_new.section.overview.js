const React = require('react');
const { connect } = require('react-redux');

const Section = require('./nodes.widget_new.section');
const SectionModel = require('../models/nodes.widget_new.section');
const { navigateToNextSection } = require('../reducers/nodes.widget_new');

class OverviewSection extends React.Component {
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
    section: state.get('sections').find(section => section.id === SectionModel.OVERVIEW)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickAction: (section) => dispatch(navigateToNextSection(section))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewSection);