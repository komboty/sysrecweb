/**
 * Clase de utileria de SYSREC.
 */
class UtilsSysrec {

    // /**
    //  * Obtiene el Usuario almacenado en la sesion del servidor.
    //  */
    // static getSessionUser() {
    //     // Se realiza la peticion al servidor para obtener el Usuario en la sesion.
    //     return fetch(API_URL.CONTROLLER_SESSION + API_URL_WHIT_PARAMS.SESSION_USER, {
    //             method: 'GET',
    //         })
    //         // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
    //         .then(res =>        UtilsSysrec.isStatusOk(res, () => res.json())
    //         // Si ocurrio una excepcion o error.
    //        .catch(error => UtilsSysrec.catchErrorSysrec(error));
    // }

    /**
     * Redirecciona a un Home segun el tipo de Usuario. Si no hay Home se redirecciona al login.
     * 
     * @param {string} tipoUsuario Tipo de Usuario.
     */
    static redirectToHome(tipoUsuario) {

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
    static isStatusOk(response, fun,
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
            //     AlertSysrec.okError(msgThrow, msg404.text);
            //     break;

            // Si no esta autorizado.
            // case 401:
            //     msgThrow = CONST_MSG_ALERT.PERMISSIONS_DENIED.TEXT;
            //     AlertSysrec.okWarning(CONST_MSG_ALERT.PERMISSIONS_DENIED.TITLE, msgThrow);
            //     break;

            // Si no se encontro
            case 404:
                msgThrow = msg404.text;
                AlertSysrec.okWarning(msg404.title, msgThrow);
                break;

                // Si existio otro error
            default:
                msgThrow = CONST_MSG_ALERT.ERROR.TEXT;
                AlertSysrec.okError(CONST_MSG_ALERT.ERROR.TITLE, msgThrow);
                break;
        }

        throw new ErrorSysrec(msgThrow);
    }

    /**
     * Manda error si la excepcion no es de ErrorSysrec.
     * @param {*} error excepcion.
     */
    static catchErrorSysrec(error) {
        if (!(error instanceof ErrorSysrec)) {
            AlertSysrec.okError(CONST_MSG_ALERT.ERROR_WEB.TITLE, CONST_MSG_ALERT.ERROR_WEB.TEXT);
        }
    }

    /**
     * Obtiene el numero de elementos de un array.
     * @param {array} array Array a obtener el numero de elementos.
     * @returns Numero de elementos, si no tiene, se manada cadena vacia.
     */
    static getLengthArray(array) {
        return array.length ? array.length : '';
    }

    // /**
    //  * Obtiene el numero de llaves de un objeto.
    //  * @param {object} object Objeto a obtener el numero de llaves.
    //  * @returns Numero de llaves, si no tiene, se manada cadena vacia.
    //  */
    // static getLengthKeys(object) {
    //     const keys = Object.keys(object);
    //     return keys.length ? keys.length : '';
    // }

    /**
     * Obtiene un Proyecto por un id proporcionado.
     * @param {array} proyectos.
     * @param {int} idProyecto Id del Proyecto a encontrar.
     * @returns {} Si se encontro se regresa el Proyecto, de lo contrario manda error.
     */
    static getProyectoById(proyectos, idProyecto) {
        return proyectos.filter(proyecto => proyecto.id === parseInt(idProyecto))[0];
    }

    /**
     * Obtiene Invitaciones por un esatdo proporcionado.
     * @param {array} invitaciones.
     * @param {string} estado Estado de la Invitacion a encontrar.
     * @returns {array} Se regresan las Invitaciones con el esatdo proporcionado.
     */
    static getInvitacionesByEstado(invitaciones, estado) {
        return invitaciones.filter(invitacion => invitacion.estado === estado);
    }

    /**
     * Verifica si el id de un Usuario esta en las Invitaciones proporcionadas.
     * @param {array} invitaciones.
     * @param {int} idUsuario Id del Usuario a verificar.
     * @returns {boolean} Se regresan true si esta el id en las Invitaciones, de lo contrario false.
     */
    static includeIdUsuario(invitaciones, idUsuario) {
        return invitaciones.map(invitacion => invitacion.idUsuario).includes(idUsuario);
    }
}