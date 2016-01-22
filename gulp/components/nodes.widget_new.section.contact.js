const React = require('react');
const { connect } = require('react-redux');

const Section = require('./nodes.widget_new.section');
const SectionModel = require('../models/nodes.widget_new.section');
const { navigateToNextSection } = require('../reducers/nodes.widget_new');

const { section } = require('./misc.types');
const { func } = React.PropTypes;

class ContactSection extends React.Component {
  static propTypes = {
    section: section,
    onClickNext: func
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
    section: state.get('sections').find(section => section.id === SectionModel.CONTACT)
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
)(ContactSection);