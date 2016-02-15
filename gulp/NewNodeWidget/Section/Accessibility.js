const React = require('react');
const { bindActionCreators } = require('redux');
const { createStructuredSelector } = require('reselect');
const { connect } = require('react-redux');

const Section = require('./Section');
const { navigateToNextSection } = require('../actions');
const { ACCESSIBILITY } = require('../models/sections');
const Row = require('../../common/Row');
const Form = require('../../common/Form');
const StatusDropdown = require('../../common/StatusDropdown');
const selectors = require('../selectors');
const actions = require('../actions');

const { func } = React.PropTypes;

class AccessibilitySection extends React.Component {
  static propTypes = {
    onClickAction: func.isRequired,
    onChange: func.isRequired
  };

  onChangeStatus(attr, status) {
    const { onNodeChange, node } = this.props;

    onNodeChange(node.set(attr, status));
  }

  onChange(attr, event) {
    const { onNodeChange, node } = this.props;

    onNodeChange(node.set(attr, event.target.value));
  }

  render() {
    const { onClickAction, node } = this.props;

    return (
      <Section section={ACCESSIBILITY} onClickAction={onClickAction}>
        <div className="nodes-new-content-section--status-status">
          <Row>
            <Row.Span rows={6}>
              <StatusDropdown type="wheelchair"
                              status={node.wheelchair}
                              onChange={this.onChangeStatus.bind(this, 'wheelchair')}/>
            </Row.Span>
            <Row.Span rows={6}>
              <StatusDropdown type="toilet"
                              status={node.wheelchairToilet}
                              onChange={this.onChangeStatus.bind(this, 'wheelchairToilet')}/>
            </Row.Span>
          </Row>
        </div>
        <Form.ControlGroup labelFor="wheelchair_description" labelScope="activerecord.attributes.poi.note">
          <Form.Controls>
            <Form.Textarea name="wheelchair_description"
                           onChange={this.onChange.bind(this, 'wheelchairDescription')}
                           value={node.wheelchairDescription}
                           rows={5} />
          </Form.Controls>
        </Form.ControlGroup>
      </Section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  node: selectors.node
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClickAction: actions.navigateToNextSection,
    onNodeChange: actions.changeNode
  }, dispatch);
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccessibilitySection);