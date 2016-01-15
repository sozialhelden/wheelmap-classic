const React = require('react');
const Section = require('./nodes.widget_new.section');

class ContactSection extends React.Component {
  render() {
    let { section, onClickNext } = this.props;

    return (
      <Section section={section} onClickNext={onClickNext}>

      </Section>
    );
  }
}

module.exports = ContactSection;