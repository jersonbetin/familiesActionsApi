'user strict';
const { success, badRequest } = require('./response');

function answer(res, data, message = '', debug = false){
  if(!debug){
    console.log(JSON.stringify(data));
    if(data){
      const { respuesta: { Estado: { Exito, Mensaje } } } = data;
      if(Exito === 'true') {
        const { respuesta: { Resultado } } = data;
        success(res, Mensaje, Resultado);
      } else {
        const { respuesta: { Errores } } = data;
        badRequest(res, Mensaje, Errores);
      }
    }else {
      success(res, message, null);
    }
  }else {
    res.send(data);
  }
}

/**
 * @description Esta funcion arma un objeto de errores y da continuedad a una funcion que registra el error en un archivo, se reciben 5 parametros que son el required, response de express, el objeto error, un mensaje a responder al cliente y la funcion next.
 * @param {object} req
 * @param {object} res
 * @param {object} err
 * @param {string} message
 * @param {function} next
 */
function responseAndRegisterError(req, res, err, message, next){
  const error = {
    data: err,
    register: true,
    message: message
  };
  next(error, req, res);
}

module.exports = {
  answer,
  responseAndRegisterError
};
