'use strict';
const bodyParser = require('body-parser');
const cors = require('cors');
const { port, env } = require('./config/utils');
const route = require('./router');
const { responses: { badRequest } } = require('./helpers');

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  app.use((req, res, next) => {
    //console.log(req.query);
    //console.log(req.body);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE.OPTIONS');
    res.header('Content-Type','application/json;  charset=utf-8');
    res.header('x-ver','1.0');
    next();
  });

  app.use('/api/v1', route);

  if(env === 'dev'){
    app.use(require('morgan')('dev'));
  }

  app.use((error, req, res, next) => {
    console.log(error);
    next();
  });

  app.all('*', (req,res) => {
    return badRequest(res, 'El recurso que esta consultando no existe');
  });

  function listenerHandler(){
    console.log(`Server listening at http://${env === 'dev' ? 'localhost' : ''}:${port}`);
  }

  app.listen(port, listenerHandler());
};

