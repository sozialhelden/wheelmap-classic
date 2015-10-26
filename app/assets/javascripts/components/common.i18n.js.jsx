module.exports = React.createClass({
  propTypes: {
    scope: React.PropTypes.string
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

    return (
      <span className={className} title={title}>{translation}</span>
    );
  }
});
