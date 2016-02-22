const React = require('react');
const Loader = require('react-loader');

const SectionModel = require('../models/Section').default;
const I18n = require('../../common/I18n');

const { string, func, instanceOf, bool } = React.PropTypes;

class Section extends React.Component {
  static propTypes = {
    actionLabel: string.isRequired, // @TODO Use scope,
    section: instanceOf(SectionModel).isRequired,
    onClickAction: func.isRequired,
    loading: bool
  };

  static defaultProps = {
    actionLabel: 'Weiter',
    loading: false
  };

  onClickAction = (event) => {
    event.preventDefault();

    this.props.onClickAction();
  };

  render() {
    const { section, loading, children, actionLabel, onClickAction } = this.props;

    const sectionForms = React.Children.map(children, child => {
      return (
        <div className="nodes-new-content-section-form">
          {child}
        </div>
      )
    });

    return (
      <section className="nodes-new-content-section">
        <Loader loaded={!loading}>
          <h2><I18n scope={`nodes.new.form.section.${section}.title`}/></h2>
          {sectionForms}
          <div className="form-actions">
            <button className="btn btn-primary pull-right submit" onClick={this.onClickAction}>{actionLabel}</button>
          </div>
        </Loader>
      </section>
    );
  }
}

module.exports = Section;