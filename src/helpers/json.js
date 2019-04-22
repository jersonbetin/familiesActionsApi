'use strict';

function error(type, description, errors) {
  return {
    type,
    description,
    errors
  };
}

function response(type, data, message) {
  return {
    type,
    message,
    data
  };
}

module.exports = {
  error,
  response
};
