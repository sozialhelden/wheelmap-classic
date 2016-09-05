import React, { Component } from 'react';

import I18n from '../common/I18n';

import { widget } from './propTypes';

class WidgetBuilderPreview extends Component {
  static propTypes = {
    widget: widget.isRequired
  };

  shouldComponentUpdate(nextProps) {
    const widget = this.props.widget;
    const nextWidget = nextProps.widget;

    return widget.width !== nextWidget.width ||
      widget.height !== nextWidget.height ||
      widget.src !== nextWidget.src ||
      widget.categories !== nextWidget.categories;
  }

  componentDidUpdate(prevProps) {
    const widget = this.props.widget;
    const prevWidget = prevProps.widget;

    if (widget.src !== prevWidget.src || widget.categories !== prevWidget.categories) {
      this.iframe.contentWindow.location.reload();
    }
  }

  render() {
    const { width, height, src } = this.props.widget;

    return (
      <div className="user-widget-preview">
        <h5>
          <I18n scope="users.profile.widget.legends.preview" />
        </h5>
        <div className="user-widget-preview-area">
          <iframe
            className="user-widget-preview-frame"
            width={width}
            height={height}
            src={src}
            ref={iframe => (this.iframe = iframe)}
          />
        </div>
      </div>
    );
  }
}

export default WidgetBuilderPreview;
