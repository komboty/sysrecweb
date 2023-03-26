/**
 * Clase de con las Peticiones a la API de SYSREC.
 */
class APISysrec {

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
     * Realiza una peticion PUT a la url.
     * Si la peticion es correcta sigue el flujo, de lo contrario manda a errror.
     * 
     * @param {string} url URL de la peticion PUT.
     * @param {object} data datos a mandar en la peticion.
     * @param {string} code404 Codigo para del mensaje a mostrar para No autorizado.
     * @returns {Promise} con resultado de la peticion en JSON.
     */
    static fetchPut(url, data, code404) {
        return fetch(url, {
                method: 'PUT',
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
        return APISysrec.fetchPost(url, data, code404)
            .then(res => {
                if (!res.id) {
                    throw new ErrorSysrec(CONST_MSG_ALERT.ERROR.CODE);
                }

                // Si la respuesta tiene Id.
                return res;
            })
    }

    /**
     * Realiza una peticion PUT a la url.
     * Si la peticion es correcta sigue el flujo, de lo contrario manda a errror.
     * 
     * @param {string} url URL de la peticion PUT.
     * @param {object} data datos a mandar en la peticion.
     * @param {string} code404 Codigo para del mensaje a mostrar para No autorizado.
     * @returns {Promise} con resultado de la peticion en JSON.
     */
    static fetchPutAndCheckRowsUpdate(url, data, code404) {
        return APISysrec.fetchPut(url, data, code404)
            .then(res => {
                if (res.actualizados < 1) {
                    throw new ErrorSysrec(CONST_MSG_ALERT.ERROR.CODE);
                }

                // Si la respuesta tiene mas de uno actualizado.
                return res;
            })
    }
}