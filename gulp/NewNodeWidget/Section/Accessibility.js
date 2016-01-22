const React = require('react');
const { connect } = require('react-redux');

const Section = require('./Section');
const { navigateToNextSection } = require('../actions');
const { ACCESSIBILITY } = require('../models/sections');

const { func } = React.PropTypes;

class AccessibilitySection extends React.Component {
  static propTypes = {
    onClickAction: func
  };

  render() {
    let { onClickAction } = this.props;

    return (
      <Section section={ACCESSIBILITY} onClickAction={onClickAction}>

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
)(AccessibilitySection);