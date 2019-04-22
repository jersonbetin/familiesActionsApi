'use strict';
const { user: userModel } = require('../models');
const Auth = require('../utils/auth');
const { responses: { success, iternalError, unauthorized } } = require('../helpers');

class Session{
  constructor(){
    this.NAME = 'SESSION';
  }

  login(req, res){
    const { body: { user, password } } = req;
    userModel.findOne({ user, password })
      .then((result) => {
        if(result){
          const { _id, rol, name } = result;
          const token = Auth.createToken(_id, user, rol);
          success(res, 'Session finalizada con exito', { token, name });
        }else {
          unauthorized(res, 'Usuario y contraseña son invalidos');
        }
      })
      .catch(e => {
        iternalError(res, 'Error al intentar iniciar session', e);
      });
  }

  logout(req, res){
    console.log(req.user);
    res.send('');
  }
}

module.exports = Session;
