const React = require('react');
const { connect } = require('react-redux');

const Section = require('./Section');
const { CONTACT } = require('../models/sections');
const { navigateToNextSection } = require('../actions');

const { func } = React.PropTypes;

class ContactSection extends React.Component {
  static propTypes = {
    onClickNext: func
  };

  render() {
    let { onClickAction } = this.props;

    return (
      <Section section={CONTACT} onClickAction={onClickAction}>

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
)(ContactSection);