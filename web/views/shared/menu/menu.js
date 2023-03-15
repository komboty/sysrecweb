/**
 * Elimina la sesion de un Usuario.
 */
function onCerrarSesion() {
    fetch(API_URL.CONTROLLER_SESSION, {
            method: 'DELETE',
        })
        .then(response => {
            // Si se elimino las sesion del Usuario en el servidor, se redirije al Login.
            if (response.status === 200) {
                window.location.replace(WEB_URL.VIEW_LOGIN);
            }

            // Si existio un error en el servidor se manda error y termina el flujo.
            alertError(CONST_MSG_ALERT.ERROR.TITLE, CONST_MSG_ALERT.ERROR.TEXT);
            throw new Error(CONST_MSG_ALERT.ERROR.TITLE);
        })
        .catch(error => error.message);
}