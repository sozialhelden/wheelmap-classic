const React = require('react');

function Controls(props) {
  return (
    <div className="controls">
      {props.children}
    </div>
  );
}

module.exports = Controls;
