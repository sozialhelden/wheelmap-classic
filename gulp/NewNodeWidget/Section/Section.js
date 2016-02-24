const React = require('react');
const Loader = require('react-loader');

const SectionModel = require('../models/Section').default;
const I18n = require('../../common/I18n');

const { string, func, instanceOf, bool } = React.PropTypes;

class Section extends React.Component {
  static propTypes = {
    actionLabelScope: string.isRequired,
    section: instanceOf(SectionModel).isRequired,
    onClickAction: func.isRequired,
    loading: bool
  };

  static defaultProps = {
    actionLabelScope: 'actions.next',
    loading: false
  };

  onClickAction = (event) => {
    event.preventDefault();

    this.props.onClickAction();
  };

  render() {
    const { section, loading, children, actionLabelScope, onClickAction } = this.props;

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
            <button className="btn btn-primary pull-right submit" onClick={this.onClickAction}>
              <I18n scope={actionLabelScope}/>
            </button>
          </div>
        </Loader>
      </section>
    );
  }
}

module.exports = Section;