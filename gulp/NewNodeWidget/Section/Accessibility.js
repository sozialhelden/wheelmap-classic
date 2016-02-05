const React = require('react');
const { connect } = require('react-redux');

const Section = require('./Section');
const { navigateToNextSection } = require('../actions');
const { ACCESSIBILITY } = require('../models/sections');
const Row = require('../../common/Row');
const StatusDropdown = require('../../common/StatusDropdown');
const { nodeSelector } = require('../selectors');
const { changeNode } = require('../actions');

const { func } = React.PropTypes;

class AccessibilitySection extends React.Component {
  static propTypes = {
    onClickAction: func
  };

  render() {
    let { onClickAction, node, onWheelchairStatusChange, onToiletStatusChange } = this.props;

    return (
      <Section section={ACCESSIBILITY} onClickAction={onClickAction}>
        <Row>
          <Row.Span rows={6}>
            <StatusDropdown type="wheelchair" status={node.wheelchair} onChange={onWheelchairStatusChange}/>
          </Row.Span>
          <Row.Span rows={6}>
            <StatusDropdown type="toilet" status={node.wheelchairToilet} onChange={onToiletStatusChange}/>
          </Row.Span>
        </Row>
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
    onClickAction: (section) => dispatch(navigateToNextSection(section)),
    onWheelchairStatusChange: (wheelchair) => dispatch(changeNode({ wheelchair })),
    onToiletStatusChange: (wheelchairToilet) => dispatch(changeNode({ wheelchairToilet }))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccessibilitySection);