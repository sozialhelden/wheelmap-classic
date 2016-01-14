const React = require('react');
const I18n = require('./common.i18n');

class Section extends React.Component {
  renderForm() {
    return null;
  }

  render() {
    let { section } = this.props;

    return (
      <section className="nodes-new-content-section">
        <h2><I18n scope={'nodes.new.form.section.' + section.key + '.title'}/></h2>
        <div className="nodes-new-content-section-form">
          {this.renderForm()}
        </div>
      </section>
    );
  }
}

module.exports = Section;