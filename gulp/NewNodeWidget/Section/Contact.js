const React = require('react');
const { connect } = require('react-redux');

const Section = require('./Section');
const Form = require('../../common/Form');
const { CONTACT } = require('../models/sections');
const { navigateToNextSection, changeNode } = require('../actions');
const { nodeSelector } = require('../selectors');

const { func } = React.PropTypes;

class ContactSection extends React.Component {
  static propTypes = {
    onClickNext: func
  };

  render() {
    let { node, onClickAction, onChangeWebsite, onChangePhone } = this.props;

    return (
      <Section section={CONTACT} onClickAction={onClickAction}>
        <div>{/* Needed for having only one section */}
          <Form.ControlGroup labelFor="website" labelScope="activerecord.attributes.poi.website">
            <Form.Controls>
              <Form.Input name="website" onChange={onChangeWebsite} value={node.website} hintScope="formtastic.hints.website" />
            </Form.Controls>
          </Form.ControlGroup>
          <Form.ControlGroup labelFor="phone" labelScope="activerecord.attributes.poi.phone">
            <Form.Controls>
              <Form.Input name="phone" onChange={onChangePhone} value={node.phone} hintScope="formtastic.hints.phone" />
            </Form.Controls>
          </Form.ControlGroup>
        </div>
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
    onClickAction: section => dispatch(navigateToNextSection(section)),
    onChangeWebsite: event => dispatch(changeNode({ website: event.target.value })),
    onChangePhone: event => dispatch(changeNode({ phone: event.target.value }))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactSection);