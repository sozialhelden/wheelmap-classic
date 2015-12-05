let { Component } = require('react');

export default class extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    var { scope } = this.props,
      text = window.I18n.t(scope),
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
};
