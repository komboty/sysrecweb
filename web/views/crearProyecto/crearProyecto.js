// Formulario.
const formCrearProyecto = document.getElementById('formCrearProyecto');

/**
 * Envia los datos al servidor para registrar un Proyecto.
 */
formCrearProyecto.addEventListener('submit', (event) => {
    event.preventDefault();

    // Elementos del formulario.
    const inputNombre = document.getElementById('inputNombre');
    const textDescripcion = document.getElementById('textDescripcion');

    // Se verifica que los datos del formulario sean validos.
    if (!(inputNombre.checkValidity() && textDescripcion.checkValidity())) {
        return;
    }

    // Primero se obtiene el id del Usuario que tiene sesion.
    UtilsSysrec.fetchGet(API_URL_WHIT_PARAMS.SESSION_USER)
        // Se manda la peticion para registrar un Proyecto.
        .then(user => UtilsSysrec.fetchPostAndCheckId(
            API_URL.CONTROLLER_PROYECTO, {
                'idFundador': user.id,
                'nombre': inputNombre.value,
                'descripcion': textDescripcion.value,
            }))
        // Si se registro correctamente el Proyecto.
        .then(proyecto => AlertSysrec.okSuccessRedirect(CONST_MSG_ALERT.SAVE_PROJECT.TITLE, CONST_MSG_ALERT.SAVE_PROJECT.TEXT, WEB_URL.VIEW_CREAR_PROYECTO))
        // Si ocurrio una excepcion o error.
        .catch(error => ErrorSysrec.alert(error));

});