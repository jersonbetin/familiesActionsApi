'use strict';
const auth = require('../utils/auth');
const { unauthorized } = require('../helpers/response');

function authenticate(req, res, next) {
  const { authorization: token } = req.headers;
  auth.decode(token)
    .then(
      result => {
        req.user = result;
        next();
      }
    )
    .catch(
      error => {
        unauthorized(res, error.message);
      }
    );
}

module.exports = {
  authenticate
};
