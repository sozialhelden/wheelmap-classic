const React = require('react');

const { arrayOf, shape, string, func, oneOfType } = React.PropTypes;

function Select({ options, empty, groupBy, ...props }) {
  let items = createItems(options);

  if (empty != null)
    items.unshift(<option value="">{empty}</option>);

  return (
    <div className="custom-select">
      <select {...props}>{items}</select>
      <i className="icon-caret-down pull-right"/>
    </div>
  );
}

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
  });
}

const optionsType = arrayOf(shape({
  label: string.isRequired,
  value: string.isRequired
}));

Select.propTypes = {
  options: oneOfType([
    optionsType,
    arrayOf(shape({
      label: string.isRequired,
      options: optionsType
    }))
  ]).isRequired,
  empty: string
};

module.exports = Select;