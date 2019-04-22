'use strict';
const { env: { PORT, NODE_ENV } } = process;
module.exports = {
  port: PORT || 3000,
  env: NODE_ENV || 'dev',
  db: {
    name: 'familiasEnAccion',
    port:'',
    user: NODE_ENV === 'prod' ? '' : '',
    password: NODE_ENV === 'prod' ? '' : ''
  },
  jwtSecret: 'mySecret'
};
