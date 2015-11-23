module.exports = React.createClass({
  render: function() {
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
});