'use strict';

const { error, response } = require('./json');
const { validateData } = require('./utils');

/**
 *@description funcion que retorna un 200 como respuesta de exito, esta
 * recibe 3 parametros, el objeto response, la data que se va a devolver y un mensaje de informacion al usuario.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {array} data (array con la informacion para responder)
 * @param {string} message (mensaje personalizado al usuario)
 * @returns
 */
function success (res, description, rows) {
  const data = validateData(rows);
  return (
    res.status(200)
      .send(
        response(
          'ok',
          data,
          description
        )
      )
  );
}


/**
 *@description funcion que retorna un 201 como respuesta al crear algun registro, esta
 * recibe 3 parametros, el objeto response, la data que se va a devolver y un mensaje de informacion al usuario.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {array} data (array con la informacion para responder)
 * @param {string} message (mensaje personalizado al usuario)
 * @returns
 */
function created(res, description, rows) {
  const data = validateData(rows);
  return (
    res.status(201)
      .send(
        response(
          'Creado satisfactoriamente',
          data,
          description
        )
      )
  );
}


/**
 *@description funcion que retorna un 204 como respuesta de cuando no se encuentra contenido, esta
 * recibe 3 parametros, el objeto response, la data que se va a devolver y un mensaje de informacion al usuario.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {array} data (array con la informacion para responder)
 * @param {string} message (mensaje personalizado al usuario)
 * @returns
 */
function noContent(res, description, rows) {
  const data = validateData(rows);
  return (
    res.status(204)
      .send(
        response(
          'La informacion a la que esta accediendo no existe',
          description,
          data
        )
      )
  );
}

/**
 *@description funcion que retorna un 400 como respuesta cuando no se encuentra la informacion buscada, este
 * recibe 2 parametros, el objeto response y un mensaje de error al usuario que especificara que sucedio.
 * @param {object} res
 * @param {string} description
 * @param {object} errors
 * @returns
 */
function badRequest(res, description, errors= undefined) {
  return (
    res.status(400)
      .send(
        error(
          'La solicitud que intenta hacer no es valida.',
          description,
          errors
        )
      )
  );
}

/**
 *@description funcion que retorna un 401 como respuesta cuando no se tiene autorizacion a algun recurso, este
 * recibe 2 parametros, el objeto response y un mensaje de error al usuario que especificara que sucedio.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {string} description (mensaje personalizado al usuario)
 * @param {object} errors
 * @returns
 */
function unauthorized(res, description, errors= undefined) {
  return (
    res.status(401)
      .send(
        error(
          'La autenticacion es invalida',
          description,
          errors
        )
      )
  );
}

/**
 *@description funcion que retorna un 403 como respuesta cuando no se permisos a algun recurso, este
 * recibe 2 parametros, el objeto response y un mensaje de error al usuario que especificara que sucedio.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {string} description (mensaje personalizado al usuario)
 * @param {object} errors
 * @returns
 */
function forbidden(res, description, errors= undefined) {
  return (
    res.status(403)
      .send(
        error(
          'No tienes provilegios suficientes para realizar la solicitud',
          description,
          errors
        )
      )
  );
}

/**
 *@description funcion que retorna un 404 como respuesta cuando no se permisos a algun recurso, este
 * recibe 2 parametros, el objeto response y un mensaje de error al usuario que especificara que sucedio.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {string} description (mensaje personalizado al usuario)
 * @param {object} errors
 * @returns
 */
function notFound(res, description, errors= undefined) {
  return (
    res.status(404)
      .send(
        error(
          'La solicitud no existe',
          description,
          errors
        )
      )
  );
}

/**
 *@description funcion que retorna un 405 como respuesta cuando el método HTTP que está consultando no esta
 * permitido para este usuario, este  recibe 2 parametros, el objeto response y un mensaje de error
 * al usuario que especificara que sucedio.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {string} description (mensaje personalizado al usuario)
 * @param {object} errors
 * @returns
 */
function methodNotAllowed(res, description, errors= undefined) {
  return (
    res.status(405)
      .send(
        error(
          'El método HTTP que está consultando no esta permitido para este usuario',
          description,
          errors
        )
      )
  );
}

/**
 *@description funcion que retorna un 410 como respuesta cuando el recurso no se encuentra disponible ya, este
 * recibe 2 parametros, el objeto response y un mensaje de error al usuario que especificara que sucedio.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {string} description (mensaje personalizado al usuario)
 * @param {object} errors
 * @returns
 */
function gone(res, description, errors= undefined) {
  return (
    res.status(410)
      .send(
        error(
          'Este recurso ya no estan disponible',
          description,
          errors
        )
      )
  );
}

/**
 *@description funcion que retorna un 415 como respuesta cuando se proporciono un tipo de contenido incorrecto, este
 * recibe 2 parametros, el objeto response y un mensaje de error al usuario que especificara que sucedio.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {string} description (mensaje personalizado al usuario)
 * @param {object} errors
 * @returns
 */
function unsopportedMediaType(res, description, errors= undefined) {
  return(
    res.status(415)
      .send(
        error(
          'Se proporciono un tipo de contenido incorrecto como parte de la solicitud',
          description,
          errors
        )
      )
  );
}

/**
 *@description funcion que retorna un 422 como respuesta cuando se generan errores de validacion, este
 * recibe 2 parametros, el objeto response y un mensaje de error al usuario que especificara que sucedio.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {string} description (mensaje personalizado al usuario)
 * @param {object} errors
 * @returns
 */
function unprocessableEntity(res, description, errors= undefined) {
  return (
    res.status(422)
      .send(
        error(
          'Error de validacion',
          description,
          errors
        )
      )
  );
}

/**
 *@description funcion que retorna un 429 como respuesta cuando hay limitacion de velocidad y la solicitud se
 * rechaza, este recibe 2 parametros, el objeto response y un mensaje de error al usuario que
 * especificara que sucedio.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {string} description (mensaje personalizado al usuario)
 * @param {object} errors
 * @returns
 */
function tooManyRequests(res, description, errors= undefined) {
  return (
    res.status(429)
      .send(
        error(
          'Solicitud rechazada debido a la limitación de la velocidad',
          description,
          errors
        )
      )
  );
}

/**
 *@description funcion que retorna un 500 como respuesta cuando hay un error interno en el servidor,
 * este recibe 2 parametros, el objeto response y un mensaje de error al usuario que
 * especificara que sucedio.
 * @param {object} res (objeto para renderizar la respuesta)
 * @param {string} description (mensaje personalizado al usuario)
 * @param {object} errors
 * @returns
 */
function iternalError(res, description, errors= undefined){
  return (
    res.status(500)
      .send(
        error(
          'Error interno del servidor',
          description,
          errors
        )
      )
  );
}

module.exports = {
  success,
  created,
  noContent,
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  methodNotAllowed,
  gone,
  unsopportedMediaType,
  unprocessableEntity,
  tooManyRequests,
  iternalError
};
