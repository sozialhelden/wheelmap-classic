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
          className={this.props.selectedItem == index ? 'selected' : null}>
            {properties.name}
        </li>
      );
    });
    return (
      <ul
        style={{display: this.props.show ? null : 'none'}}>
          {items}
      </ul>
    );
  }
});
