const React = require('react');
const { connect } = require('react-redux');

class NodesWidgetNew extends React.Component {
  render() {
    return (
      <div className="nodes-new">
        <header className="nodes-new-header">
          <a href="/map" className="btn btn--back">zurück</a>
          <h1>Ort hinzufügen</h1>
        </header>
        <div className="nodes-new-breadcrumbs">
          <ul>
            <li>Test</li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(NodesWidgetNew);