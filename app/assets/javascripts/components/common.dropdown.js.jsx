module.exports = React.createClass({

  handleClick: function(i){
    this.props.onSelection(this.props.items[i], i);
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
      <select
        id="widget_center"
        className="form-control provider-dropdown"
        onChange={this.onSearchUpdate}>
        {items}
      </select>
    );

  }

});
