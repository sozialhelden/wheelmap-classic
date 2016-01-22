const React = require('react');
const { connect } = require('react-redux');

const Section = require('./Section');
const Form = require('../../common/Form');
const { navigateToNextSection } = require('../reducer');
const SectionModel = require('../models/Section');

const { section } = require('../types');
const { func } = React.PropTypes;

class NameCategorySection extends React.Component {
  static propTypes = {
    section: section,
    onClickNext: func
  };

  render() {
    let { section, onClickNext } = this.props;

    return (
      <Section section={section} actionLabel="Weiter" onClickAction={onClickNext}>
        <Form.ControlGroup labelFor="name" labelScope="activerecord.attributes.poi.name">
          <Form.Controls>
            <Form.Input name="name"/>
          </Form.Controls>
        </Form.ControlGroup>
        <Form.ControlGroup labelFor="node_type_id" labelScope="activerecord.attributes.poi.type">
          <Form.Controls>
            <Form.Input name="node_type_id"/>
          </Form.Controls>
        </Form.ControlGroup>
      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    section: state.get('sections').find(section => section.id === SectionModel.NAME_CATEGORY)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickNext: section => dispatch(navigateToNextSection(section))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameCategorySection);