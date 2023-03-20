// /**
//  * Obtiene el Usuario almacenado en la sesion del servidor.
//  */
// function getSessionUser() {
//     // Se realiza la peticion al servidor para obtener el Usuario en la sesion.
//     return fetch(API_URL.CONTROLLER_SESSION + API_URL_WHIT_PARAMS.SESSION_USER, {
//             method: 'GET',
//         })
//         // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
//         .then(res =>        isStatusOk(res, () => res.json())
//         // Si ocurrio una excepcion o error.
//        .catch(error => catchSysrecWebError(error));
// }

/**
 * Redirecciona a un Home segun el tipo de Usuario. Si no hay Home se redirecciona al login.
 * 
 * @param {string} tipoUsuario Tipo de Usuario.
 */
function redirectToHome(tipoUsuario) {

    switch (tipoUsuario) {
        case CONST_SHARED.TIPO_DESARROLLADOR:
            window.location.replace(WEB_URL.VIEW_HOME_DESARROLLADOR);
            break;

        case CONST_SHARED.TIPO_RECLUTADOR:
            window.location.replace(WEB_URL.VIEW_HOME_RECLUTADOR);
            break;

            // default:
            //     window.location.replace(WEB_URL.VIEW_LOGIN);
            //     break;
    }
}

/**
 * Verifica que la peticion haya sido correcta. De lo contrario manda alert con error.
 * @param {*} response respuesta del servidor.
 * @param {*} fun Funcion a ejecutar, si el estado de la peticion fue Ok.
 * @returns 
 */
function isStatusOk(response, fun,
    msg404 = { title: CONST_MSG_ALERT.NOT_FOUND.TITLE, text: CONST_MSG_ALERT.NOT_FOUND.TEXT }
) {
    // Si la respuesta es OK, se regresa el valor que retorna la funcion al ejecutarla.
    if (response.status == 200) {
        return fun();
    }

    let msgThrow = '';
    switch (response.status) {

        // Si se realizo mal la peticion.
        // case 400:
        //     msgThrow = msg404.title;
        //     alertError(msgThrow, msg404.text);
        //     break;

        // Si no esta autorizado.
        // case 401:
        //     msgThrow = CONST_MSG_ALERT.PERMISSIONS_DENIED.TEXT;
        //     alertWarning(CONST_MSG_ALERT.PERMISSIONS_DENIED.TITLE, msgThrow);
        //     break;

        // Si no se encontro
        case 404:
            msgThrow = msg404.text;
            alertWarning(msg404.title, msgThrow);
            break;

            // Si existio otro error
        default:
            msgThrow = CONST_MSG_ALERT.ERROR.TEXT;
            alertError(CONST_MSG_ALERT.ERROR.TITLE, msgThrow);
            break;
    }

    throw new SysrecWebError(msgThrow);
}

/**
 * Manda error si la excepcion no es de SysrecWebError.
 * @param {*} error excepcion.
 */
function catchSysrecWebError(error) {
    if (!(error instanceof SysrecWebError)) {
        alertError(CONST_MSG_ALERT.ERROR_WEB.TITLE, CONST_MSG_ALERT.ERROR_WEB.TEXT);
    }
}

/**
 * Obtiene el numero de elementos de un array.
 * @param {array} array Array a obtener el numero de elementos.
 * @returns Numero de elementos, si no tiene, se manada cadena vacia.
 */
function getLengthArray(array) {
    return array.length ? array.length : '';
}

// /**
//  * Obtiene el numero de llaves de un objeto.
//  * @param {object} object Objeto a obtener el numero de llaves.
//  * @returns Numero de llaves, si no tiene, se manada cadena vacia.
//  */
// function getLengthKeys(object) {
//     const keys = Object.keys(object);
//     return keys.length ? keys.length : '';
// }