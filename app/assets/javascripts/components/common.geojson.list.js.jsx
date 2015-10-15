module.exports = React.createClass({

  handleClick: function (i) {
    this.props.onSelection(this.props.items[i], i);
  },

  render: function() {
    var items = this.props.items.map((feature, index) => {
      var {properties, geometry} = feature;
      var {coordinates} = geometry;
      return (
        <li
          key={index}
          onClick={this.handleClick.bind(this, index)}
          style={{background: this.props.selectedItem == index ? '#d2d0c8':'white'}}>
            {properties.name}
        </li>
      );
    });
    return (
      <ul
        style={{border: this.props.show ? '1px solid #ccc' : 0}}>
          {items}
      </ul>
    );
  }
});
