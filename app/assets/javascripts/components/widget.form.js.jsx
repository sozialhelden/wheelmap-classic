module.exports = React.createClass({
  // propTypes: {
  //   height: React.PropTypes.string,
  //   width: React.PropTypes.string
  // },

  onWidthChange: function (e) {
    this.props.onWidthChange(e.target.value)
  },

  onHeightChange: function (e) {
    this.props.onHeightChange(e.target.value)
  },

  render: function () {
    return (
      <div className="user-form">

        <form accept-charset="UTF-8" action="/en/widgets/1" className="form-horizontal formtastic widget" id="edit_widget" method="post" novalidate="novalidate">
          // <div style={{margin: 0, padding: 0, display: 'inline'}}>
          // <input name="utf8" type="hidden" value="✓"/>
          // <input name="_method" type="hidden" value="put"/>
          // <input name="authenticity_token" type="hidden" value="ngHe6Fhv4/YgCQW/6Jh+seYArHZbGC2AoALgmk4dPko="/></div>
          <fieldset className="inputs">
            <legend>
              <span>
                <span className="translation_missing" title="translation missing: en.users.profile.widget.legend.settings">
                </span>
              </span>
            </legend>
            <div className="number input optional numeric stringish form-group" id="widget_width_input">
              <label className=" control-label" for="widget_width">
                <span className="translation_missing" title="translation missing: en.activerecord.attributes.widget.width">
                  Width
                </span>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_width" name="widget[height]" step="any" type="number" defaultValue={this.props.width} onChange={this.onWidthChange}/>
              </span>
            </div>
            <div className="number input optional numeric stringish form-group" id="widget_height_input">
              <label className=" control-label" for="widget_height">
                <span className="translation_missing" title="translation missing: en.activerecord.attributes.widget.height">
                  Height
                </span>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_height" name="widget[height]" step="any" type="number" defaultValue={this.props.height} onChange={this.onHeightChange}/>
              </span>
            </div>
          </fieldset>
          <fieldset className="form-actions">
            <input className="btn" id="widget_submit_action" name="commit" type="submit" value="Save"/>
          </fieldset>
        </form>
      </div>
    );
  }
});
