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