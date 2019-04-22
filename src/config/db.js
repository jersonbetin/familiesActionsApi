'use strict';
const mongoose = require('mongoose');
const { db: { name, password, user, port }, env } = require('../config/utils');

class MongoDB {
  constructor(){
    this.db = null;
    this.URI = env === 'prod' ? `mongodb://${user}:${password}@ds047315.mongolab.com:${port}/${name}`: `mongodb://localhost:27017/${name}`;
  }

  connect(){
    return new Promise((resolve, reject) => {
      console.log(this.URI);
      mongoose.connect(this.URI, { useNewUrlParser: true, useCreateIndex: true })
        .then( () => {
          console.log('Base de datos de Familias en accion conectada');
          resolve();
        })
        .catch(e => {
          console.log(`Error de conexion: ${e}`);
          reject(e);
        });
    });
  }
}

module.exports = MongoDB;
