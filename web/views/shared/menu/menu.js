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

/**
 * Redirecciona a los Proyectos que tiene el Reclutador.
 */
function onMisProyectos(tipoUsuario) {
    switch (tipoUsuario) {
        case CONST_SHARED.TIPO_DESARROLLADOR:
            // window.location.replace(WEB_URL.VIEW_HOME_DESARROLLADOR);
            break;

        case CONST_SHARED.TIPO_RECLUTADOR:
            window.location.replace(WEB_URL.VIEW_MIS_PROYECTOS_RECLUTADOR);
            break;

            // default:
            //     window.location.replace(WEB_URL.VIEW_LOGIN);
            //     break;
    }

}

/**
 * Redirecciona a crear un Proyecto.
 */
function onCrearProyecto() {
    window.location.replace(WEB_URL.VIEW_CREAR_PROYECTO);
}