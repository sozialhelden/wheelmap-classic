import { Component } from 'react';
import { connect } from 'react-redux';
import setParam from 'mout/queryString/setParam';
import debounce from 'mout/function/debounce';
import Form from './widget.form';
import Embed from './widget.embed';
import Preview from './widget.preview';
import App from './widget.app';
import { changeWidth, changeHeight, changeLocation, changeProvider, changeCategories } from '../actions/widget';

class Widget extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.widget !== nextProps.widget;
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
    changeCategories: showCategories => dispatch(changeCategories(showCategories))
  };
}

Widget.Form = Form;
Widget.Preview = Preview;
Widget.Embed = Embed;
Widget.App = App;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget);
