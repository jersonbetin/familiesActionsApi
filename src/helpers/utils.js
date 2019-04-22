'use strict';
/**
 * @description retorna true si el parametro value esta definido
 *
 * @param {object} value
 * @returns
 */
function isDefined(value) {
  if(value === 'undefined' || value === null || value === undefined) {
    return false;
  }
  return true;
}

function isEmpty(value) {
  if(value === null || value === undefined || value.trim() === '') {
    return false;
  }
  return true;
}


/**
 * @description Esta funcion convierte un error de postgres a un formato legible.
 * @param {Object} error
 */
function parseError(error){
  const { message } = new Error(error);
  return {
    ...error,
    message
  };
}

/**
 * @description esta funcion devuelve un array de errores refactorizada para el cliente
 * @param {array} data
 */
function custromErrorValidation(data){
  const errors = data.map(item => {
    return {
      criteria: item.context.label,
      message: item.message
    };
  });

  return errors;
}

function validateData(data){
  return isDefined(data) ? data : [];
}

module.exports = {
  isDefined,
  parseError,
  custromErrorValidation,
  validateData,
  isEmpty
};
