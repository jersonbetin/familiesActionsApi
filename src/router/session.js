'use strict';
const Session = require('../controllers/session');
const auth = require('../middleware/auth');

module.exports = (router) => {
  const ctr = new Session();

  router.post('/sessions', ctr.login);
  router.delete('/sessions', auth.authenticate, ctr.logout);
};
