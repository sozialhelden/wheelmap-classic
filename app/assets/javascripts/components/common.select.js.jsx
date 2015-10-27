module.exports = React.createClass({
  render: function () {
    let { options, onChange, empty } = this.props;

    let items = options.map((item, index) => {
      return <option key={index} value={item.value}>{item.label}</option>;
    });

    if (empty != null) items.unshift(<option>{empty}</option>);

    return <select id="widget_center" {...this.props}>{items}</select>;
  }
});
