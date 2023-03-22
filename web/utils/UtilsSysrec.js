/**
 * Clase de utileria de SYSREC.
 */
class UtilsSysrec {

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
     * @param {array} objects Array con Objetos.
     * @param {int} id Id del Objeto a encontrar.
     * @returns {} Si se encontro se regresa el Objeto, de lo contrario manda error.
     */
    static getObjectById(objects, id) {
        return objects.filter(object => object.id === id)[0];
    }

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