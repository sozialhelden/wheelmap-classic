Wheelmap.ToolbarSearch = React.createClass({
  render: function() {
    return (
      <form action="/search" className="toolbar-searchbar-form" method="GET">
        {/* @TODO Fix for mobile */}
        <button className="btn btn-info toolbar-toggle-searchbar" data-toggle="searchbar" data-target=".toolbar-searchbar-form">
          <i className="icon-search icon-light"></i>
        </button>
        <div className="input-append">
          <input id="search" className="search-input" placeholder="Nach Ort suchen" type="text" name="q" autoComplete="off" />
          <button className="btn btn-info" type="submit" value="Finden"><i className="icon-search icon-light"></i></button>
        </div>
      </form>
    );
  }
});