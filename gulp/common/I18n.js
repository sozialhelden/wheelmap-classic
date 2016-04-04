const React = require('react');

class I18n extends React.Component {
  static t(scope) {
    let translation = global.I18n.t(scope);

    if (translation.indexOf(scope) > -1)
      return null;

    return translation;
  }

  render() {
    var { scope, className, ...props } = this.props,
      translation = I18n.t(scope),
      className, title;

    // Translation was not found
    if (translation == null) {
      translation = scope.replace(/\./g, ' ');
      className += ' translation-missing';
      title = 'translation missing';
    }

    // Use dangerouslySetInnerHTML as the translation string as translations can contain html elements
    function createMarkup() {
      return { __html: translation };
    }

    return (
      <span className={className} title={title} dangerouslySetInnerHTML={createMarkup()} {...props}></span>
    );
  }
}

module.exports = I18n;
