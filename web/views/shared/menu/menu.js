function cerrarSesion() {
    fetch(API_URL.CONTROLLER_SESSION, {
            method: 'DELETE',
        })
        .then(response => {
            // Si se encontro el registro del usuario en el servidor, continua el flujo.
            if (response.status === 200) {
                window.location.replace(WEB_URL.VIEW_LOGIN);
            }

            // Si existio un error en el servidor se manda error y termina el flujo.
            alertError(CONST_MESSAGE_ALERT.ERROR.TITLE, CONST_MESSAGE_ALERT.ERROR.TEXT);
            throw new Error(CONST_MESSAGE_ALERT.ERROR.TITLE);
        })
        .catch(error => error.message);
}