const React = require('react');
const { connect } = require('react-redux');

const Header = require('./Header');
const Breadcrumbs = require('./Breadcrumbs');
const Section = require('./models/Section');
const { navigateToSection } = require('./actions');
const selectors = require('./selectors');

const { immutableListOf } = require('../common/types');
const { func, instanceOf } = React.PropTypes;

class Widget extends React.Component {
  static propTypes = {
    sections: immutableListOf(instanceOf(Section)).isRequired,
    activeSection: instanceOf(Section),
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
    sections: selectors.sections(state),
    activeSection: selectors.activeSection(state)
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