module.exports = React.createClass({
  handleClick: function (i) {
    this.props.onSelection(this.props.items[i], i);
  },

  render: function() {
    var featureNodes = this.props.items.map((feature, index) => {
      var {properties, geometry} = feature;
      var {coordinates} = geometry;
      return (
        <li key={index}
          onClick={this.handleClick.bind(this, index)}
          style={{background: this.props.selectedItem == index ? 'green':'white'}}
          >
            {properties.name}
        </li>
      );
    });
    return (
      <ul className="form-wrapper" style={{background: 'white', zIndex: 999 }}>
        {featureNodes}
      </ul>
    );
  }
});
