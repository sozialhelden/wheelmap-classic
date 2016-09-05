import React, { PropTypes } from 'react';

const { array, arrayOf, shape, string, oneOfType } = PropTypes;

function createItems(options) {
  return options.map((option, index) => {
    const { label, value, options, ...props } = option;

    if (value != null) {
      return (
        <option key={index} value={value} {...props}>{label}</option>
      );
    }

    if (options != null) {
      return (
        <optgroup key={index} label={label} {...props}>
          {createItems(options)}
        </optgroup>
      );
    }

    return null;
  });
}

function Select({ options, empty, ...props }) {
  const items = createItems(options);

  if (empty != null) {
    items.unshift(<option value="">{empty}</option>);
  }

  return (
    <div className="custom-select">
      <select {...props}>{items}</select>
      <i className="icon-caret-down pull-right" />
    </div>
  );
}

const optionsType = arrayOf(shape({
  label: string.isRequired,
  value: string.isRequired
}));

Select.propTypes = {
  options: oneOfType([
    array, // Empty array
    arrayOf(shape({
      label: string.isRequired,
      options: optionsType
    })),
    optionsType
  ]).isRequired,
  empty: string
};

Select.defaultProps = {
  options: []
};

export default Select;
