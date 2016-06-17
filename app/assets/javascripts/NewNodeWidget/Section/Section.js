import React from 'react';
import Loader from 'react-loader';

import SectionModel from '../models/Section';
import I18n from '../../common/I18n';

const { string, func, instanceOf, bool, any } = React.PropTypes;

class Section extends React.Component {
  static propTypes = {
    actionLabelScope: string.isRequired,
    section: instanceOf(SectionModel).isRequired,
    onClickAction: func.isRequired,
    loading: bool.isRequired,
    actionExtraScope: string.isRequired,
    children: any
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
    const { section, loading, children, actionLabelScope, actionExtraScope } = this.props;

    let actionExtra;

    const sectionForms = React.Children.map(children, child => {
      return (
        <div className="nodes-new-content-section-form">
          {child}
        </div>
      );
    });

    if (actionExtraScope != null) {
      actionExtra = (
        <I18n
          scope={actionExtraScope}
          className="nodes-new-content-section-form-action-extra pull-right"
        />
      );
    }

    return (
      <section className="nodes-new-content-section">
        <Loader loaded={!loading}>
          <h2><I18n scope={`nodes.new.form.section.${section}.title`} /></h2>
          {sectionForms}
          <div className="form-actions">
            <button className="btn btn-primary pull-right submit" onClick={this.onClickAction}>
              <I18n scope={actionLabelScope} />
            </button>
            {actionExtra}
          </div>
        </Loader>
      </section>
    );
  }
}

export default Section;
