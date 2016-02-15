const React = require('react');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { createStructuredSelector } = require('reselect');

const Section = require('./Section');
const Form = require('../../common/Form');
const { CONTACT } = require('../models/sections');
const actions = require('../actions');
const selectors = require('../selectors');

const { func } = React.PropTypes;

class ContactSection extends React.Component {
  static propTypes = {
    onClickNext: func.isRequired,
    onNodeChange: func.isRequired
  };

  onChange(attr, event) {
    const { onNodeChange, node } = this.props;

    onNodeChange(node.set(attr, event.target.value));
  }

  render() {
    let { node, errors, onClickAction } = this.props;

    return (
      <Section section={CONTACT} onClickAction={onClickAction}>
        <div>{/* Needed for having only one section */}
          <Form.ControlGroup labelFor="website" labelScope="activerecord.attributes.poi.website">
            <Form.Controls>
              <Form.Input name="website"
                          onChange={this.onChange.bind(this, 'website')}
                          value={node.website}
                          hintScope="formtastic.hints.website"
                          errors={errors.get('website')} />
            </Form.Controls>
          </Form.ControlGroup>
          <Form.ControlGroup labelFor="phone" labelScope="activerecord.attributes.poi.phone">
            <Form.Controls>
              <Form.Input name="phone"
                          onChange={this.onChange.bind(this, 'phone')}
                          value={node.phone}
                          hintScope="formtastic.hints.phone"
                          errors={errors.get('phone')} />
            </Form.Controls>
          </Form.ControlGroup>
        </div>
      </Section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  node: selectors.node,
  errors: selectors.errors
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
)(ContactSection);