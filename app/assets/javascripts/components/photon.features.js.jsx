module.exports = React.createClass({
  handleClick: function (i) {
    this.props.onSelection(this.props.items[i], i);
  },

  render: function() {
    var featureNodes = this.props.items.map(function(feature, index) {
      var p = feature.properties;
      var point = feature.geometry.coordinates;
      return (
        <li key={index}
          onClick={this.handleClick.bind(this, index)}
          style={{background: this.props.selectedItem == index ? 'green':'white'}}
          >
            {p.name}
        </li>
      );
    }.bind(this));
    return (
      <ul className="form-wrapper" style={{background: 'white', zIndex: 999 }}>
        {featureNodes}
      </ul>
    );
  }
});
