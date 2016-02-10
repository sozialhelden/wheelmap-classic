const React = require('react');

const SectionModel = require('../models/Section');
const I18n = require('../../common/I18n');

const { string, func, instanceOf } = React.PropTypes;

class Section extends React.Component {
  static propTypes = {
    actionLabel: string.isRequired, // @TODO Use scope,
    section: instanceOf(SectionModel).isRequired,
    onClickAction: func.isRequired
  };

  static defaultProps = {
    actionLabel: 'Weiter'
  };

  onClickAction = (event) => {
    event.preventDefault();

    this.props.onClickAction(this.props.section);
  };

  render() {
    const { section , children, actionLabel, onClickAction } = this.props;

    const sectionForms = React.Children.map(children, child => {
      return (
        <div className="nodes-new-content-section-form">
          {child}
        </div>
      )
    });

    return (
      <section className="nodes-new-content-section">
        <h2><I18n scope={`nodes.new.form.section.${section}.title`}/></h2>
        {sectionForms}
        <div className="form-actions">
          <button className="btn btn-primary pull-right submit" onClick={this.onClickAction}>{actionLabel}</button>
        </div>
      </section>
    );
  }
}

module.exports = Section;