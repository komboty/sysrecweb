/**
 * Manda una Alerta.
 * 
 * @param {string} title Titulo a mostrar en la alerta.
 * @param {string} text Mensaje a mostrar en la alerta.
 */
function alert(title, text, icon) {

    return Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary btn-lg',
                // cancelButton: 'btn btn-danger btn-lg'
            },
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
function alertSuccess(title, text) {
    return alert(title, text, 'success');
}

/**
 * Manda una Alerta de tipo Warning.
 * 
 * @param {string} title Titulo a mostrar en la alerta.
 * @param {string} text Mensaje a mostrar en la alerta.
 */
function alertWarning(title, text) {
    return alert(title, text, 'warning');
}

/**
 * Manda una Alerta de tipo Error.
 * 
 * @param {string} title Titulo a mostrar en la alerta.
 * @param {string} text Mensaje a mostrar en la alerta.
 */
function alertError(title, text) {
    return alert(title, text, 'error');
}

/**
 * Manda una Alerta de tipo Exito, y redirecciona a la URL.
 * 
 * @param {string} title Titulo a mostrar en la alerta.
 * @param {string} text Mensaje a mostrar en la alerta.
 * @param {string} url URL a redireccionar.
 */
function alertSuccessRedirect(title, text, url) {
    alertSuccess(title, text)
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
function alertErrorRedirect(title, text, url) {
    alertError(title, text)
        .then(() => {
            window.location.replace(url);
        });
}