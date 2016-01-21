const React = require('react');
const { List, Map, Set } = require('immutable');
const reduce = require('lodash/collection/reduce');
const Section = require('../models/nodes.widget_new.section');

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

    return reduce(prop.toObject(), function(error, value, key, iterable) {
      if (error != null)
        return error;

      return itemTypeChecker(iterable, key, component, location, `${propFullName}.get(${key})`);
    }, null);
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

const section = instanceOf(Section);
const sections = immutableListOf(section);

module.exports = {
  immutableList,
  immutableListOf,
  section,
  sections
};