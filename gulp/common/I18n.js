const React = require('react');

class I18n extends React.Component {
  static t(scope) {
    let translation = global.I18n.t(scope);

    if (translation.indexOf(scope) > -1)
      return null;

    return translation;
  }

  render() {
    var { scope, ...props } = this.props,
      translation = I18n.t(scope),
      class_name, title;

    // Translation was not found
    if (translation == null) {
      translation = scope.replace(/\./g, ' ');
      class_name = 'translation-missing';
      title = 'translation missing';
    }

    // Use dangerouslySetInnerHTML as the translation string as translations can contain html elements
    function createMarkup() {
      return { __html: translation };
    }

    return (
      <span className={class_name} title={title} dangerouslySetInnerHTML={createMarkup()} {...props}></span>
    );
  }
}

module.exports = I18n;
