'use strict';
//const mongoose = require('mongoose');
const { user: userModel } = require('../models');
const { responses: { created, badRequest, iternalError, success }, utils: { isDefined } } = require('../helpers');

class Users {
  search(req, res){
    let criteria = {};
    const { query: { name } } = req;
    if(isDefined(name)){
      criteria = {
        'name.first': new RegExp(name, 'i')
      };
    }
    userModel.find(criteria, { password: 0 })
      .then( usr => {
        success(res, 'Usuarios consultados con exito', usr);
      })
      .catch(e => {
        iternalError(res, 'Error al consultar los usuarios', e);
      });
  }

  find(req, res){
    const { params: { user } } = req;
    console.log(user);
    userModel.findOne({ user }, { password: 0 })
      .then(usr => {
        success(res, '', usr);
      })
      .catch(e => {
        iternalError(res, 'Error al intentar consultar el usuario', e);
      });
  }

  add(req, res){
    const { body: { user } } = req;

    const newUser = new userModel(user);
    userModel.create(newUser)
      .then(usr => {
        created(res, 'Usuarios creados', usr);
      })
      .catch(e => {
        const { code } = e;
        if(code === 11000){
          return badRequest(res, 'El usuario ya se encuentra registrado');
        }
        iternalError(res, 'Error interno', e);
      });
  }


}

module.exports = Users;
