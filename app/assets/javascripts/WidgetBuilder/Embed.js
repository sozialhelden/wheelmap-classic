import React from 'react';

import I18n from '../common/I18n';

import { widget } from './propTypes';

class WidgetBuilderEmbed extends React.Component {
  static propTypes = {
    widget: widget.isRequired
  };

  shouldComponentUpdate(nextProps) {
    const widget = this.props.widget;
    const nextWidget = nextProps.widget;

    return widget.width !== nextWidget.width ||
      widget.height !== nextWidget.height ||
      widget.src !== nextWidget.src;
  }

  render() {
    const { width, height, src } = this.props.widget;
    const code = `<iframe width="${width}" height="${height}" src="${src}"></iframe>`;

    return (
      <div className="user-widget-embed">
        <h5>
          <I18n scope="users.profile.widget.legends.embed" />
        </h5>
        <textarea rows="3" className="user-widget-embed-code" value={code} readOnly />
        <p><I18n scope="users.profile.widget.legends.embed_explanation" /></p>
      </div>
    );
  }
}

export default WidgetBuilderEmbed;
