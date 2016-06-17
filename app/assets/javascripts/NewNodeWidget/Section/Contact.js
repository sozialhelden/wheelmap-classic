import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import Section from './Section';
import Form from '../../common/Form';
import { CONTACT } from '../models/sections';
import actions from '../actions';
import selectors from '../selectors';
import Node from '../../common/models/Node';
import { immutableMapOf, immutableListOf } from '../../common/propTypes';

const { func, string, instanceOf, bool } = React.PropTypes;

class ContactSection extends React.Component {
  static propTypes = {
    node: instanceOf(Node).isRequired,
    onClickAction: func.isRequired,
    onNodeChange: func.isRequired,
    loading: bool.isRequired,
    errors: immutableMapOf(immutableListOf(string)).isRequired
  };

  onChange = (attr, event) => {
    const { onNodeChange, node } = this.props;

    onNodeChange(node.set(attr, event.target.value));
  };

  render() {
    const { node, errors, onClickAction, loading } = this.props;

    return (
      <Section section={CONTACT} onClickAction={onClickAction} loading={loading}>
        <div>{/* Needed for having only one section */}
          <Form.ControlGroup labelFor="website" labelScope="activerecord.attributes.poi.website">
            <Form.Controls>
              <FormInput
                name="website"
                onChange={this.onChange}
                value={node.website}
                hintScope="formtastic.hints.website"
                errors={errors.get('website')}
              />
            </Form.Controls>
          </Form.ControlGroup>
          <Form.ControlGroup labelFor="phone" labelScope="activerecord.attributes.poi.phone">
            <Form.Controls>
              <FormInput
                name="phone"
                onChange={this.onChange}
                value={node.phone}
                hintScope="formtastic.hints.phone"
                errors={errors.get('phone')}
              />
            </Form.Controls>
          </Form.ControlGroup>
        </div>
      </Section>
    );
  }
}

class FormInput extends React.Component {
  static propTypes = {
    name: string.isRequired,
    onChange: func.isRequired
  };

  onChange = (event) => {
    const { name, onChange } = this.props;

    onChange(name, event);
  };

  render() {
    return (
      <Form.Input
        {...this.props}
        onChange={this.onChange}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  node: selectors.node,
  errors: selectors.errors,
  loading: selectors.loading
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClickAction: actions.navigateToNextSection,
    onNodeChange: actions.changeNode
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactSection);
