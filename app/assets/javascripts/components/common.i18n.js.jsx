module.exports = React.createClass({
  propTypes: {
    scope: React.PropTypes.string,
    resolver: React.PropTypes.object
  },

  getInitialState: function() {
    return {
      className: 'translation_missing',
      title:     'translation missing',
      translation: ''
    };
  },


  getTranslation: function () {
    var text = this.resolver.t(this.props.scope);
    if (!text && text.indexOf(this.props.defaultKey)){
      this.setState({translation: text});
    } else {
      this.setState({
        className: '',
        title: '',
        translation: text
      });
    }
  },

  componentDidMount: function (){
    this.resolver = window.I18n;
    this.getTranslation();
  },

  render: function () {
    return (
      <span>
        <span className={this.state.className} title={this.state.title}>
          {this.state.translation}
        </span>
      </span>
    );
  }
});
