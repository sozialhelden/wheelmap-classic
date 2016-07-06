import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Form from './Form';
import Embed from './Embed';
import Preview from './Preview';
import { changeWidth, changeHeight, changeLocation, changeProvider, changeCategories, save } from './actions';
import { widget } from './propTypes';

const { func } = React.PropTypes;

class WidgetBuilder extends Component {
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
  return bindActionCreators({
    changeWidth,
    changeHeight,
    changeLocation,
    changeProvider,
    changeCategories,
    save
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetBuilder);
