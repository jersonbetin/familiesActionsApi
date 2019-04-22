'use strict';
const users = require('../controllers/users');
const auth = require('../middleware/auth');

module.exports = (route) => {
  const ctr = new users();
  route.get('/users', auth.authenticate, ctr.search);
  route.get('/users/:user', auth.authenticate, ctr.find);
  route.post('/users', auth.authenticate, ctr.add);
};
