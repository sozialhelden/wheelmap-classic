module.exports = React.createClass({
  propTypes: {
    scope: React.PropTypes.string
  },

  shouldComponentUpdate: function() {
    return false;
  },

  render: function () {
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
      <span className={className} title={title} dangerouslySetInnerHTML={createMarkup()}></span>
    );
  }
});
