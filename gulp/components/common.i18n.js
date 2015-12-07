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
      className, title, translation;

    translation = text;

    if (!text && text.indexOf(scope) > -1) {
      translation = text;
      className = 'translation_missing';
      title = 'translation missing';
    }

    function createMarkup() {
      return {__html: translation};
    }

    return (
      <span className={className} title={title} dangerouslySetInnerHTML={createMarkup()} />
    );
  }
}

export default I18n;
