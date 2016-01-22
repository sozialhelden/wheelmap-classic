const React = require('react');
const { connect } = require('react-redux');

const I18n = require('../common/I18n');

class Header extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <header className="nodes-new-header">
        <a href="/map" className="btn btn--back"><I18n scope="nodes.show.link.back" /></a>
        <h1><I18n scope="nodes.new.form.title" /></h1>
      </header>
    );
  }
}

module.exports = Header;