/**
 * Elimina la sesion de un Usuario.
 */
function onCerrarSesion() {
    fetch(API_URL.CONTROLLER_SESSION, {
            method: 'DELETE',
        })
        // Si se la peticion es correcta se redirige al Login, de lo contrario manda a catch.
        .then(res => isStatusOk(res, () => window.location.replace(WEB_URL.VIEW_LOGIN)))
        // Si ocurrio una excepcion o error.
        .catch(error => catchSysrecWebError(error));
}

/**
 * Redirecciona a la pagina donde se muetran los Proyectos que tiene el Usuario.
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
 * Redirecciona a la pagina para crear un Proyecto.
 */
function onCrearProyecto() {
    window.location.replace(WEB_URL.VIEW_CREAR_PROYECTO);
}

/**
 * Redirecciona a la pagina para Invitar un Usuario a un Proyecto.
 */
function onInvitar() {
    window.location.replace(WEB_URL.VIEW_INVITAR_PROYECTO);
}