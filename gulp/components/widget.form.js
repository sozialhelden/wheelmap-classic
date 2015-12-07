let { Component } = require('react'),
  debounce = require('mout/function/debounce'),
  I18n = require('./common.i18n'),
  Select = require('./common.select'),
  Photon = require('./photon');

class WidgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: this.props.defaultWidth,
      height: this.props.defaultHeight
    };
  }

  onWidthChange = (event) => {
    let width = event.target.value,
      { minWidth, maxWidth } = this.props;

    this.setState({ width });

    if (width >= minWidth && width <= maxWidth)
      this.props.onWidthChange(width);
  }

  onHeightChange = (event) => {
    let height = event.target.value,
      { minHeight, maxHeight } = this.props;

    this.setState({ height });

    if (height >= minHeight && height <= maxHeight)
      this.props.onHeightChange(height);
  };

  onLocationChange = (item) => {
    this.props.onLocationChange(item);
  };

  onCategoriesChange = (event) => {
    this.props.onCategoriesChange(event.target.checked);
  };

  onProviderChange = (event) => {
    this.props.onProviderChange(event.target.value);
  };

  render() {
    let { providers, providerId } = this.props;

    let providerOptions = providers.map(function (provider) {
      return {value: provider.id, label: provider.name, selected: providerId === provider.id};
    });

    let providerSelect = null;

    if (providerOptions.length > 0) {
      providerSelect = (
        <div className="form-group">
          <label className="control-label" htmlFor="widget_providers">
            <I18n scope={'users.profile.widget.providers'}/>
          </label>
          <div className="form-wrapper">
            <Select id="widget_center"
                    options={providerOptions} empty={I18n.t('users.profile.widget.empty_provider')} value={providerId}
                    onChange={this.onProviderChange} className="form-control"/>
          </div>
        </div>
      );
    }

    return (
      <div className="user-form">
        <form acceptCharset="UTF-8" className="form-horizontal formtastic widget" id="edit_widget"
              noValidate="novalidate">
          <fieldset className="inputs">
            <legend>
              <I18n scope={'users.profile.widget.legends.settings'}/>
            </legend>

            <div className="form-group">
              <label className="control-label" htmlFor="widget_center">
                <I18n scope={'users.profile.widget.center'}/>
              </label>
              <span className="form-wrapper">
                <Photon url={'http://photon.komoot.de/api/'}
                        lang={I18n.locale}
                        limit={10}
                        placeholder={I18n.t('users.profile.widget.empty_center')}
                        searchPromptText={I18n.t('users.profile.widget.empty_center')}
                        onSelectLocation={this.onLocationChange} />
              </span>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="widget_width">
                <I18n scope={'users.profile.widget.width'}/>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_width" type="number" ref="width"
                       min={this.props.minWidth} max={this.props.maxWidth}
                       value={this.state.width} onChange={this.onWidthChange}/>
              </span>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="widget_height">
                <I18n scope={'users.profile.widget.height'}/>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_height" type="number" ref="height"
                       min={this.props.minHeight} max={this.props.maxHeight}
                       value={this.state.height} onChange={this.onHeightChange}/>
              </span>
            </div>

            {providerSelect}

            <div className="form-group">
              <label className="control-label" htmlFor="widget_categories">
                <I18n scope={'users.profile.widget.categories'}/>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_categories"
                       name="widget[categories]" type="checkbox"
                       checked={this.props.categories}
                       onChange={this.onCategoriesChange}/>
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default WidgetForm;