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

    /**
     * Regresa el HTML de estrallas para la Calificacion.
     * @param {float} value Numero de estrellas.
     * @param {string} size Tamanio de las estrellas.
     * @returns HTML.
     */
    static getHTMLStars(value, size = '') {
        let html = '';
        for (let index = 0; index < parseInt(value); index++) {
            html += '<i class="fas fa-star ' + size + '"></i>';
        }
        if (value % 1 > 0) {
            html += '<i class="fas fa-star-half-alt ' + size + '"></i>';
        }
        return html;
    }

    /**
     * Obtiene un color segun el valor.
     * @param {float} value Valor a obtener el color.
     * @returns {string} Color.
     */
    static getColorByValue(value) {
        let color = 'secondary';

        if (value <= 5 && value > 3) {
            color = 'success';
        } else if (value <= 3 && value > 2) {
            color = 'warning';
        } else if (value <= 2 && value >= 1) {
            color = 'danger';
        }

        return color;
    }

    /**
     * Obtiene Rating segun el valor.
     * @param {float} value Valor a obtener el Rating.
     * @returns {string} Rating.
     */
    static getRating(value) {
        return value ? UtilsSysrec.getHTMLStars(value, 'fa-lg') + ' ' + value : 'Sin calificaciones';
    }

    /**
     * 
     * @param {*} element 
     * @param {*} animation 
     */
    static resetAnimation(element, animation) {
        element.classList.remove(animation);
        void element.offsetWidth;
        element.classList.add(animation);
    }
}