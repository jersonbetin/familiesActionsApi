'use strict';
const jwt = require('jsonwebtoken');
const moment = require('moment');
const { jwtSecret } = require('../../config/utils');

class Auth {
  constructor(){
    this.options = {
      secretOrKey: jwtSecret
    };
  }

  static decode(token){
    return new Promise((resolve, reject) => {
      const decoded = jwt.decode(token, jwtSecret);
      if(decoded) {
        const { exp } = decoded;
        const today = moment().unix();
        if(today < exp) {
          const obj = decoded;
          if(obj.user){
            resolve(obj);
          } else {
            reject({ message: 'La informacion del token es invalida' });
          }
        } else {
          reject({ message: 'El token a expirado' });
        }
      } else {
        reject({ message: 'El token es invalido' });
      }
    });
  }

  static createToken(sub, user, rol, exp = null, iat = null){
    const payload = {
      sub,
      user,
      rol,
      iat: iat || moment().unix(),
      exp: exp || moment().add(10, 'day').unix()
    };

    return jwt.sign(payload, jwtSecret);
  }
}

module.exports = Auth;
