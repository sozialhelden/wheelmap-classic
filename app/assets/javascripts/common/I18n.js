const React = require('react');
const classNames = require('classnames');

class I18n extends React.Component {
  static t(scope) {
    let translation = global.I18n.t(scope);

    if (translation.indexOf(scope) > -1)
      return null;

    return translation;
  }

  render() {
    var { scope, className, ...props } = this.props,
      translation = I18n.t(scope), title, missingTranslation = false;

    // Translation was not found
    if (translation == null) {
      translation = scope.replace(/\./g, ' ');
      missingTranslation = true;
      title = 'translation missing';
    }

    // Use dangerouslySetInnerHTML as the translation string as translations can contain html elements
    function createMarkup() {
      return { __html: translation };
    }

    className = classNames(className, { 'translation-missing': missingTranslation })

    return (
      <span className={className} title={title} dangerouslySetInnerHTML={createMarkup()} {...props}></span>
    );
  }
}

module.exports = I18n;
