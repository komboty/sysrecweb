/**
 * Excepcion de SYSREC.
 */
class ErrorSysrec extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }

    /**
     * Verifica que la peticion haya sido correcta. De lo contrario manda un ErrorSysrec.
     * @param {*} response respuesta del servidor.
     * @param {*} fun Funcion a ejecutar, si el estado de la peticion fue Ok.
     * @returns 
     */
    static isHTTPStatusOk(response, fun, code404 = CONST_MSG_ALERT.NOT_FOUND.CODE) {

        switch (response.status) {
            // Si la respuesta es OK, se regresa el valor que retorna la funcion al ejecutarla.
            case 200:
                return fun();

                // Si se realizo mal la peticion.
                // case 400:

                // Si no esta autorizado.
            case 401:
                throw new ErrorSysrec(CONST_MSG_ALERT.PERMISSIONS_DENIED.CODE);

                // Si no se encontro
            case 404:
                throw new ErrorSysrec(code404);

                // Si existio otro error
            default:
                throw new ErrorSysrec(CONST_MSG_ALERT.ERROR.CODE);
        }
    }

    /**
     * Manda Alert segun el error.
     * @param {*} error excepcion.
     */
    static alert(error) {
        // Si el error es probocado por SYSREC.
        if (error instanceof ErrorSysrec) {
            AlertSysrec.okError(CONST_MSG_ALERT[error.message].TITLE, CONST_MSG_ALERT[error.message].TEXT);
            return;
        }

        // Si se cerro el MODAL.
        if (error.message === MODAL.ACTION_CANCEL) {
            return;
        }

        // Cualquier error.
        AlertSysrec.okError(CONST_MSG_ALERT.ERROR_FATAL.TITLE, CONST_MSG_ALERT.ERROR_FATAL.TEXT);
        console.log(error);
    }
}