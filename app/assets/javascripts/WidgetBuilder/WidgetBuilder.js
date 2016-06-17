const React = require('react');
const { connect } = require('react-redux');

const Form = require('./Form');
const Embed = require('./Embed');
const Preview = require('./Preview');
const { changeWidth, changeHeight, changeLocation, changeProvider, changeCategories, save } = require('./actions');

const { func } = React.PropTypes;
const { widget } = require('./propTypes');

class WidgetBuilder extends React.Component {
  static propTypes = {
    widget: widget.isRequired,
    save: func.isRequired,
    changeWidth: func.isRequired,
    changeHeight: func.isRequired,
    changeLocation: func.isRequired,
    changeProvider: func.isRequired,
    changeCategories: func.isRequired
  };

  componentDidUpdate() {
    this.props.save();
  }

  render() {
    const {
      widget,
      changeWidth,
      changeHeight,
      changeLocation,
      changeProvider,
      changeCategories
    } = this.props;

    return (
      <div className="widget-panel">
        <Form
          widget={widget} changeWidth={changeWidth}
          changeHeight={changeHeight} changeLocation={changeLocation}
          changeProvider={changeProvider} changeCategories={changeCategories}
        />
        <Preview widget={widget} />
        <Embed widget={widget} />
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
