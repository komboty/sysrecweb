/**
 * Alertas de SYSREC.
 */
class AlertSysrec {

    /**
     * Manda una Alerta.
     * 
     * @param {string} title Titulo a mostrar en la alerta.
     * @param {string} text Mensaje a mostrar en la alerta.
     */
    static ok(title, text, icon) {

        return Swal.mixin({
                customClass: { confirmButton: 'btn btn-primary btn-lg' },
                buttonsStyling: false
            })
            .fire({
                title: title,
                text: text,
                icon: icon,
                confirmButtonText: 'OK'
            });
    }

    /**
     * Manda una Alerta de tipo Exito.
     * 
     * @param {string} title Titulo a mostrar en la alerta.
     * @param {string} text Mensaje a mostrar en la alerta.
     */
    static okSuccess(title, text) {
        return AlertSysrec.ok(title, text, 'success');
    }

    /**
     * Manda una Alerta de tipo Warning.
     * 
     * @param {string} title Titulo a mostrar en la alerta.
     * @param {string} text Mensaje a mostrar en la alerta.
     */
    static okWarning(title, text) {
        return AlertSysrec.ok(title, text, 'warning');
    }

    /**
     * Manda una Alerta de tipo Error.
     * 
     * @param {string} title Titulo a mostrar en la alerta.
     * @param {string} text Mensaje a mostrar en la alerta.
     */
    static okError(title, text) {
        return AlertSysrec.ok(title, text, 'error');
    }

    /**
     * Manda una Alerta de tipo Exito, y redirecciona a la URL.
     * 
     * @param {string} title Titulo a mostrar en la alerta.
     * @param {string} text Mensaje a mostrar en la alerta.
     * @param {string} url URL a redireccionar.
     */
    static okSuccessRedirect(title, text, url) {
        AlertSysrec.okSuccess(title, text)
            .then(() => {
                window.location.replace(url);
            });
    }

    /**
     * Manda una Alerta de tipo Error, y redirecciona a la URL.
     * 
     * @param {string} title Titulo a mostrar en la alerta.
     * @param {string} text Mensaje a mostrar en la alerta.
     * @param {string} url URL a redireccionar.
     */
    static okErrorRedirect(title, text, url) {
        AlertSysrec.okError(title, text)
            .then(() => {
                window.location.replace(url);
            });
    }
}