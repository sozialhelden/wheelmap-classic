import { Component } from 'react';
import { connect } from 'react-redux';
import setParam from 'mout/queryString/setParam';
import debounce from 'mout/function/debounce';
import Form from './widget_builder.form';
import Embed from './widget_builder.embed';
import Preview from './widget_builder.preview';
import App from './widget_builder.app';
import { changeWidth, changeHeight, changeLocation, changeProvider, changeCategories, save } from '../actions/widget';

class WidgetBuilder extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.widget !== nextProps.widget;
  }

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

WidgetBuilder.Form = Form;
WidgetBuilder.Preview = Preview;
WidgetBuilder.Embed = Embed;
WidgetBuilder.App = App;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetBuilder);
