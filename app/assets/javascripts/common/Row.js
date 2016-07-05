import React, { PropTypes } from 'react';

const { number, any } = PropTypes;

function Row({ children }) {
  return <div className="row-fluid">{children}</div>;
}

Row.propTypes = {
  children: any
};

function Span(props) {
  const { children, rows } = props;
  const className = `span${rows}`;

  return <div className={className}>{children}</div>;
}

Span.defaultProps = {
  rows: 12
};

Span.propTypes = {
  rows: number,
  children: any
};

Row.Span = Span;

export default Row;
