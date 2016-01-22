const React = require('react');

const I18n = require('./common.i18n');

const { arrayOf, shape, string } = React.PropTypes;

function Select({ options, empty, ...props }) {
  const items = options.map(({ labelScope, value, ...props }, index) => {
    return (
      <option key={index} value={value} {...props}>
        {I18n.t(labelScope)}
      </option>
    );
  });

  if (emptyScope != null) items.unshift(<option value="">{I18n.t(emptyScope)}</option>);

  return <select {...props}>{items}</select>;
}

Select.propTypes = {
  options: arrayOf(shape({
    labelScope: string.isRequired,
    value: string.isRequired
  })).isRequired,
  emptyScope: string
};

module.exports = Select;