const React = require('react');
const { List, Map, Set } = require('immutable');
const every = require('mout/collection/every');

const { instanceOf } = React.PropTypes;

function checkImmutableOf(iterableTypChecker, itemTypeChecker) {
  function checkType(required, props, propName, component, location, propFullName) {
    let prop = props[propName];

    if (required && prop == null) {
      return new Error(`Required ${locationName} \`${propName}\` was not specified in \`${component}\`.`);
    }

    let error = iterableTypChecker(props, propName, component, location, propFullName);

    if (error != null)
      return error;

    every(prop.toObject(), function(item, key, iterable) {
      error = itemTypeChecker(iterable, key, component, location, `${propFullName}.get(${key})`);

      return error == null;
    });

    return error;
  }

  let immutableOfTypeChecker = checkType.bind(null, false);
  immutableOfTypeChecker.isRequired = checkType.bind(null, true);

  return immutableOfTypeChecker;
}

const immutableList = instanceOf(List);
const immutableMap = instanceOf(Map);
const immutableSet = instanceOf(Set);
const immutableListOf = checkImmutableOf.bind(null, immutableList);
const immutableMapOf = checkImmutableOf.bind(null, immutableMap);
const immutableSetOf = checkImmutableOf.bind(null, immutableSet);

module.exports = {
  immutableList,
  immutableListOf,
  immutableMap,
  immutableMapOf,
  immutableSet,
  immutableSetOf
};