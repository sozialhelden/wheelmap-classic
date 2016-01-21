const React = require('react');
const { connect } = require('react-redux');
const Header = require('./nodes.widget_new.header');
const Breadcrumbs = require('./nodes.widget_new.breadcrumbs');
const { start, navigateToSection } = require('../reducers/nodes.widget_new');

const { sections } = require('./misc.types');
const { func } = React.PropTypes;

class Widget extends React.Component {
  static propTypes = {
    sections: sections.isRequired,
    onNavigate: func.isRequired
  };

  render() {
    let { sections, onNavigate, children } = this.props;

    return (
      <div className="nodes-new">
        <Header/>
        <Breadcrumbs sections={sections} onNavigate={onNavigate}/>
        {children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sections: state.get('sections')
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