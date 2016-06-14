const React = require('react');
const { connect } = require('react-redux');
const setParam = require('mout/queryString/setParam');
const debounce = require('mout/function/debounce');

const Form = require('./Form');
const Embed = require('./Embed');
const Preview = require('./Preview');
const { changeWidth, changeHeight, changeLocation, changeProvider, changeCategories, save } = require('./actions');

class WidgetBuilder extends React.Component {
  componentDidUpdate() {
    this.props.save();
  }

  render() {
    return (
      <div className="widget-panel">
        <Form widget={this.props.widget} changeWidth={this.props.changeWidth}
              changeHeight={this.props.changeHeight} changeLocation={this.props.changeLocation}
              changeProvider={this.props.changeProvider} changeCategories={this.props.changeCategories}/>
        <Preview widget={this.props.widget}/>
        <Embed widget={this.props.widget}/>
      </div>
    );
  }
}

function mapStateToProps(widget) {
  return { widget };
}

function mapDispatchToProps(dispatch) {
  return {
    changeWidth: width => dispatch(changeWidth(width)),
    changeHeight: height => dispatch(changeHeight(height)),
    changeLocation: location => dispatch(changeLocation(location)),
    changeProvider: providerId => dispatch(changeProvider(providerId)),
    changeCategories: showCategories => dispatch(changeCategories(showCategories)),
    save: () => dispatch(save())
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetBuilder);
