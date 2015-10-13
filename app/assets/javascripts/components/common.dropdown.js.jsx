module.exports = React.createClass({

  handleClick: function(i, e){
    this.props.onSelectedOption(e.target.value);
  },

  render: function () {
    var items = this.props.items.map((item, index) => {
      return (
        <option
          key={index}
          value={item.id}
          onClick={this.handleClick.bind(this, index)}>
            {item.name}
        </option>
      );
    });

    return (
      <span>
        <select
          id="widget_center"
          className="form-control provider-dropdown"
          onChange={this.onSearchUpdate}>
            {items}
        </select>
      </span>
    );

  }

});
