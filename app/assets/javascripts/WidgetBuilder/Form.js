import React, { Component, PropTypes } from 'react';

import I18n from '../common/I18n';
import Select from '../common/Form/Select';
import Photon from '../common/Photon';
import { widget } from './propTypes';

const { func, any } = PropTypes;

class WidgetBuilderForm extends Component {
  static propTypes = {
    changeWidth: func.isRequired,
    changeHeight: func.isRequired,
    changeCategories: func.isRequired,
    changeProvider: func.isRequired,
    changeLocation: func.isRequired,
    widget: widget.isRequired,
    children: any
  };

  onWidthChange = (event) => {
    this.props.changeWidth(parseInt(event.target.value, 10));
  };

  onHeightChange = (event) => {
    this.props.changeHeight(parseInt(event.target.value, 10));
  };

  onCategoriesChange = (event) => {
    this.props.changeCategories(event.target.checked);
  };

  onProviderChange = (event) => {
    this.props.changeProvider(event.target.value);
  };

  renderProviderSelect() {
    const { widget } = this.props;
    const { providers, providerId } = widget;
    const providerOptions = providers.map(function (provider) {
      return { value: provider.id, label: provider.name, selected: providerId === provider.id };
    });

    let providerSelect = null;

    if (providerOptions.length > 0) {
      providerSelect = (
        <div className="form-group">
          <label className="control-label" htmlFor="widget_providers">
            <I18n scope={'users.profile.widget.providers'} />
          </label>
          <div className="form-wrapper">
            <Select
              id="widget_center"
              options={providerOptions}
              empty={I18n.t('users.profile.widget.empty_provider')}
              value={providerId}
              onChange={this.onProviderChange}
              className="form-control"
            />
          </div>
        </div>
      );
    }

    return providerSelect;
  }

  render() {
    const { widget, changeLocation } = this.props;
    const { width, height, categories } = widget;

    return (
      <div className="user-form">
        <form
          acceptCharset="UTF-8"
          className="form-horizontal formtastic widget"
          id="edit_widget"
          noValidate="novalidate"
        >
          <fieldset className="inputs">
            <legend>
              <I18n scope={'users.profile.widget.legends.settings'} />
            </legend>

            <div className="form-group">
              <label className="control-label" htmlFor="widget_center">
                <I18n scope={'users.profile.widget.center'} />
              </label>
              <span className="form-wrapper">
                <Photon
                  url={'//photon.komoot.de/api/'}
                  lang={I18n.locale}
                  limit={10}
                  placeholder={I18n.t('users.profile.widget.empty_center')}
                  searchPromptText={I18n.t('users.profile.widget.empty_center')}
                  onSelectLocation={this.props.changeLocation}
                />
              </span>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="widget_width">
                <I18n scope={'users.profile.widget.width'} />
              </label>
              <span className="form-wrapper">
                <input
                  className="form-control"
                  id="widget_width"
                  type="number"
                  value={width}
                  onChange={this.onWidthChange}
                />
              </span>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="widget_height">
                <I18n scope={'users.profile.widget.height'} />
              </label>
              <span className="form-wrapper">
                <input
                  className="form-control"
                  id="widget_height"
                  type="number"
                  value={height}
                  onChange={this.onHeightChange}
                />
              </span>
            </div>

            {this.renderProviderSelect()}

            <div className="form-group">
              <label className="control-label" htmlFor="widget_categories">
                <I18n scope={'users.profile.widget.categories'} />
              </label>
              <span className="form-wrapper">
                <input
                  className="form-control"
                  id="widget_categories"
                  type="checkbox"
                  checked={categories}
                  onChange={this.onCategoriesChange}
                />
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default WidgetBuilderForm;
