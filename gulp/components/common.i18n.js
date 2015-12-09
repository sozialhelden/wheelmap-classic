let { Component } = require('react');

class I18n extends Component {
  static locale = global.I18n.locale;

  static t(scope) {
    return global.I18n.t(scope);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    var { scope } = this.props,
      text = I18n.t(scope),
      class_name, title, translation;

    translation = text;

    // Translation was not found
    if (!text && text.indexOf(scope) > -1) {
      translation = text;
      class_name = 'translation_missing';
      title = 'translation missing';
    }

    // Use dangerouslySetInnerHTML as the translation string can contain html elements
    function createMarkup() {
      return {__html: translation};
    }

    return (
      <span className={class_name} title={title} dangerouslySetInnerHTML={createMarkup()}></span>
    );
  }
}

export default I18n;
