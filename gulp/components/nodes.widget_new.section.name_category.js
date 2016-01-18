const React = require('react');
const Section = require('./nodes.widget_new.section');
const ControlGroup = require('./common.form.control_group');
const Controls = require('./common.form.controls');
const Input = require('./common.form.input');

class NameCategorySection extends React.Component {
  render() {
    let { section, onClickNext } = this.props;

    return (
      <Section section={section} actionLabel="Weiter" onClickNext={onClickNext}>
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

module.exports = NameCategorySection;