'use strict';
const express = require('express');
const db = require('../config/db');

const users = require('./users');
const session = require('./session');

const route = express.Router();
const models = new db();

models.connect()
  .then(() => {
    route.get('/', (req, res) => {
      res.send({ msg: 'Welcome to api' });
    });

    users(route);
    session(route);
  })
  .catch((e) => {
    console.error(e);
  });



module.exports = route;
