module.exports = React.createClass({
  render: function () {
    let { options, empty } = this.props;

    let items = options.map((item, index) => {
      return <option key={index} {...item}>{item.label}</option>;
    });

    if (empty != null) items.unshift(<option>{empty}</option>);

    return <select id="widget_center" {...this.props}>{items}</select>;
  }
});
