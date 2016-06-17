import React from 'react';

import I18n from '../common/I18n';

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
