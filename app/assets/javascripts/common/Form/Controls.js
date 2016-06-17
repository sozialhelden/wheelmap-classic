import React, { PropTypes } from 'react';

const { any } = PropTypes;

function Controls({ children }) {
  return (
    <div className="controls">
      {children}
    </div>
  );
}

Controls.propTypes = {
  children: any
};

export default Controls;
