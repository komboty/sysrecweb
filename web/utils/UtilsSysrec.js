/**
 * Clase de utileria de SYSREC.
 */
class UtilsSysrec {

    /**
     * Realiza una peticion GET a la url. 
     * Si la peticion es correcta sigue el flujo, de lo contrario manda a errror.
     * 
     * @param {string} url URL de la peticion GET.
     * @param {string} code404 Codigo para del mensaje a mostrar para No autorizado.
     * @returns {Promise} con resultado de la peticion en JSON.
     */
    static fetchGet(url, code404) {
        return fetch(url, {
                method: 'GET'
            })
            .then(res => ErrorSysrec.isHTTPStatusOk(res, () => res.json(), code404))
    }

    /**
     * Realiza una peticion POST a la url.
     * Si la peticion es correcta sigue el flujo, de lo contrario manda a errror.
     * 
     * @param {string} url URL de la peticion POST.
     * @param {object} data datos a mandar en la peticion.
     * @param {string} code404 Codigo para del mensaje a mostrar para No autorizado.
     * @returns {Promise} con resultado de la peticion en JSON.
     */
    static fetchPost(url, data, code404) {
        return fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(res => ErrorSysrec.isHTTPStatusOk(res, () => res.json(), code404))
    }

    /**
     * Realiza una peticion POST a la url.
     * Si la peticion es correcta y la respuesta tiene Id sigue el flujo, de lo contrario manda a errror.
     * 
     * @param {string} url URL de la peticion POST.
     * @param {object} data datos a mandar en la peticion.
     * @param {string} code404 Codigo para del mensaje a mostrar para No autorizado.
     * @returns {Promise} con resultado de la peticion en JSON.
     */
    static fetchPostAndCheckId(url, data, code404) {
        return UtilsSysrec.fetchPost(url, data, code404)
            .then(res => {
                if (!res.id) {
                    throw new ErrorSysrec(CONST_MSG_ALERT.ERROR.CODE);
                }

                // Si la respuesta tiene Id.
                return res;
            })
    }

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
     * Obtiene el numero de elementos de un array.
     * 
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
     * Obtiene un Objeto por un id proporcionado.
     * 
     * @param {array} objects Array con Objetos.
     * @param {int} id Id del Objeto a encontrar.
     * @returns {} Si se encontro se regresa el Objeto, de lo contrario manda error.
     */
    static getObjectById(objects, id) {
        return objects.filter(object => object.id === id)[0];
    }

    /**
     * Agrupa todos los objetos por el valor que tiene la llave proporcionada.
     * @param {array} array Array con objetos a agrupar.
     * @param {string} keyValue Llave donde se encuentra el valor con el que se agrupara.
     * @returns 
     */
    static groupByValue(array, keyValue) {
        const group = {};
        let value = null;
        for (const object of array) {
            value = object[keyValue];
            if (Object.hasOwnProperty.call(group, value)) {
                group[value].push(object);
            } else {
                group[value] = [object];
            }
        }
        return group;
    }
}