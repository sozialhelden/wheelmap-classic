import React from 'react';
import { List, Map } from 'immutable';
import every from 'mout/collection/every';

const { instanceOf } = React.PropTypes;

function checkImmutableOf(iterableTypChecker, itemTypeChecker) {
  function checkType(required, props, propName, component, location, propFullName) {
    const prop = props[propName];

    if (required && prop == null) {
      return new Error(`Required ${location} \`${propName}\` was not specified in \`${component}\`.`);
    }

    let error = iterableTypChecker(props, propName, component, location, propFullName);

    if (error != null) {
      return error;
    }

    every(prop.toObject(), function (item, key, iterable) {
      error = itemTypeChecker(iterable, key, component, location, `${propFullName}.get(${key})`);

      return error == null;
    });

    return error;
  }

  const immutableOfTypeChecker = checkType.bind(null, false);
  immutableOfTypeChecker.isRequired = checkType.bind(null, true);

  return immutableOfTypeChecker;
}

export const immutableList = instanceOf(List);
export const immutableMap = instanceOf(Map);
export const immutableListOf = checkImmutableOf.bind(null, immutableList);
export const immutableMapOf = checkImmutableOf.bind(null, immutableMap);
