/**
 * Manda una Alerta de tipo Exito.
 * 
 * @param {string} title Titulo a mostrar en la alerta.
 * @param {string} text Mensaje a mostrar en la alerta.
 */
function alertSuccess(title, text) {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

/**
 * Manda una Alerta de tipo Error.
 * 
 * @param {string} title Titulo a mostrar en la alerta.
 * @param {string} text Mensaje a mostrar en la alerta.
 */
function alertError(title, text) {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'error',
        confirmButtonText: 'OK'
    });
}

/**
 * Manda una Alerta de tipo Exito, y redirecciona al Login.
 * 
 * @param {string} title Titulo a mostrar en la alerta.
 * @param {string} text Mensaje a mostrar en la alerta.
 */
function alertSuccessRedirectLogin(title, text) {
    alertSuccess(title, text)
        .then(() => {
            window.location.replace(WEB_URL.VIEW_LOGIN);
        });
}

/**
 * Manda una Alerta de tipo Error, y redirecciona al Login.
 * 
 * @param {string} title Titulo a mostrar en la alerta.
 * @param {string} text Mensaje a mostrar en la alerta.
 */
function alertErrorRedirectLogin(title, text) {
    alertError(title, text)
        .then(() => {
            window.location.replace(WEB_URL.VIEW_LOGIN);
        });
}