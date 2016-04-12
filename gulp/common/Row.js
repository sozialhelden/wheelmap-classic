const React = require('react');

function Row(props) {
  return <div className="row-fluid">{props.children}</div>;
}


function Span(props) {
  let { children, rows } = props,
    className = 'span' + rows;

  return <div className={className}>{children}</div>;
}

Span.defaultProps = {
  rows: 12
};

Span.propTypes = {
  rows: React.PropTypes.number
};

Row.Span = Span;

module.exports = Row;