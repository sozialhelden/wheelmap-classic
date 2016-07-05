import React from 'react';

class I18n extends React.Component {
  static locale = 'en';

  static t() {
    return 'translation';
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}

export default I18n;
