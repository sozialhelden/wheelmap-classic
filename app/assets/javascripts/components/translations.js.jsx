import React, { PropTypes, Component } from 'react';

module.exports = React.createClass({
  propTypes: {
    defaultKey: React.PropTypes.string,
  },

  getInitialState: function() {
    return {
      className: 'translation_missing',
      title:     '',
      translation: ''
    };
  },

  getTranslation: function () {
    var data = I18n.t(this.props.defaultKey);
    this.setState({className: ''});
    this.setState({title: ''});
    this.setState({translation: data});
  },

  componentDidMount: function (){
    this.getTranslation();
  },

  render: function () {
    return (
      <span>
        <span className={this.state.className}
            title={this.state.title}>
          {this.state.translation}
        </span>
      </span>
    );
  }
});
