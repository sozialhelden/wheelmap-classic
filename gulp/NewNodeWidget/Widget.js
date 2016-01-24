const React = require('react');
const { connect } = require('react-redux');

const Header = require('./Header');
const Breadcrumbs = require('./Breadcrumbs');
const { navigateToSection } = require('./actions');
const { sectionsSelector, activeSectionSelector } = require('./selectors/widget');

const { immutableListOf } = require('../common/types');
const { func, arrayOf, string } = React.PropTypes;

class Widget extends React.Component {
  static propTypes = {
    sections: immutableListOf(string).isRequired,
    activeSection: string,
    onNavigate: func.isRequired
  };

  render() {
    let { sections, activeSection, onNavigate, children } = this.props;

    return (
      <div className="nodes-new">
        <Header/>
        <Breadcrumbs sections={sections} activeSection={activeSection} onNavigate={onNavigate}/>
        {children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sections: sectionsSelector(state),
    activeSection: activeSectionSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNavigate: (section) => dispatch(navigateToSection(section))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget);