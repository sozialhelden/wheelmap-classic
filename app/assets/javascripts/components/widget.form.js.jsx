module.exports = React.createClass({
  // propTypes: {
  //   height: React.PropTypes.string,
  //   width: React.PropTypes.string
  // },

  getInitialState: function () {
    return {
      height: this.props.height,
      width: this.props.width
    };
  },

  handleUpdate: function (widget) {
    console.log(this.state);
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: widget,
      success: function(data) {
        console.log(this.props.url, data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  onWidthChange: function (e) {
    this.props.onWidthChange(e.target.value);
  },

  onHeightChange: function (e) {
    this.props.onHeightChange(e.target.value);
  },

  // TODO: generate these in template as well.
  // <div style={{margin: 0, padding: 0, display: 'inline'}}>
  // <input name="utf8" type="hidden" value="✓"/>
  // <input name="_method" type="hidden" value="put"/>
  // <input name="authenticity_token" type="hidden" value="ngHe6Fhv4/YgCQW/6Jh+seYArHZbGC2AoALgmk4dPko="/></div>
  render: function () {
    return (
      <div className="user-form">
        <form accept-charset="UTF-8"
              className="form-horizontal formtastic widget"
              id="edit_widget" novalidate="novalidate">
          <fieldset className="inputs">
            <legend>
              <Translations
                defaultKey={'users.profile.widget.legend.settings'}>
              </Translations>
            </legend>

            <div className="number input optional numeric stringish form-group"
              id="widget_center_input">
              <label className=" control-label" for="widget_center">
                <Translations
                  defaultKey={'activerecord.attributes.widget.center'}>
                </Translations>
              </label>
              <Photon url={'http://photon.komoot.de/api/'}
                lang={I18n.locale} limit={10}></Photon>
            </div>

            <div className="number input optional numeric stringish form-group"
              id="widget_width_input">
              <label className=" control-label" for="widget_width">
                <Translations
                  defaultKey={'activerecord.attributes.widget.width'}>
                </Translations>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_width"
                  name="widget[height]" step="any" type="number"
                  value={this.props.width} onChange={this.onWidthChange}/>
              </span>
            </div>
            <div className="number input optional numeric stringish form-group"
              id="widget_height_input">
              <label className=" control-label" for="widget_height">
                <Translations
                  defaultKey={'activerecord.attributes.widget.height'}>
                </Translations>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_height"
                  name="widget[height]" step="any" type="number"
                  value={this.props.height}
                  onChange={this.onHeightChange}/>
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
});
