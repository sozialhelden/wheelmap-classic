const React = require('react');

const I18n = require('../I18n');

const { arrayOf, shape, string, bool, func, oneOfType } = React.PropTypes;

function Select({ options, empty, asScope, groupBy, ...props }) {
  let items = createItems(options, asScope);

  if (empty != null) {
    items.unshift(
      <option value="">{asScope ? I18n.t(empty) : empty}</option>
    );
  }

  return <select {...props}>{items}</select>;
}

function createItems(options, asScope) {
  return options.map((option, index) => {
    const { label, value, options, ...props } = option;

    if (value != null) {
      console.log(asScope ? I18n.t(label) : label);

      return (
        <option key={index} value={value} {...props}>
          {asScope ? I18n.t(label) : label}
        </option>
      );
    } else if (options != null) {
      return (
        <optgroup key={index} label={asScope ? I18n.t(label) : label}>
          {createItems(options, asScope)}
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
  asScope: bool.isRequired,
  empty: string
};

Select.defaultProps = {
  asScope: false
};

module.exports = Select;