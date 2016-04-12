const React = require('react');

class I18n extends React.Component {
  static locale = 'en';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }

  static t() {
    return 'translation';
  }
}

module.exports = I18n;