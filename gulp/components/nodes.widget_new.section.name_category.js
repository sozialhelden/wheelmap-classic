const React = require('react');
const { connect } = require('react-redux');
const Section = require('./nodes.widget_new.section');
const ControlGroup = require('./common.form.control_group');
const Controls = require('./common.form.controls');
const Input = require('./common.form.input');
const { navigateToNextSection } = require('../reducers/nodes.widget_new');
const SectionModel = require('../models/nodes.widget_new.section');

const { section } = require('./misc.types');
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
        <ControlGroup labelFor="name" labelScope="activerecord.attributes.poi.name">
          <Controls>
            <Input name="name"/>
          </Controls>
        </ControlGroup>
        <ControlGroup labelFor="node_type_id" labelScope="activerecord.attributes.poi.type">
          <Controls>
            <Input name="node_type_id"/>
          </Controls>
        </ControlGroup>
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
    onClickNext: (section) => dispatch(navigateToNextSection(section))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameCategorySection);