const React = require('react');
const Section = require('./nodes.widget_new.section');
const ControlGroup = require('./common.form.control_group');
const Input = require('./common.form.input');

class NameCategorySection extends React.Component {
  render() {
    let { section, node, errors, onClickNext } = this.props;

    return (
      <Section section={section} actionLabel="Weiter" onClickNext={onClickNext}>
        <ControlGroup labelFor="name" labelScope="activerecord.attributes.poi.name">
          <Input name="name" node={node} errors={errors}/>
        </ControlGroup>
        <ControlGroup labelFor="node_type_id" labelScope="activerecord.attributes.poi.type">
          <Input name="node_type_id" node={node} errors={errors}/>
        </ControlGroup>
      </Section>
    );
  }
}

module.exports = NameCategorySection;