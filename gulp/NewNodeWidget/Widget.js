const React = require('react');
const { connect } = require('react-redux');

const Header = require('./Header');
const Breadcrumbs = require('./Breadcrumbs');
const { start, navigateToSection } = require('./reducer');

const { sections } = require('./types');
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