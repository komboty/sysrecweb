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
    fetch(API_URL_WHIT_PARAMS.SESSION_USER, {
            method: 'GET',
        })
        // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
        .then(res => ErrorSysrec.isHTTPStatusOk(res, () => res.json()))
        // Se manda la peticion para registrar un Proyecto.
        .then(user => {
            // Se construte el json a enviar al servidor.
            const data = {
                'idFundador': user.id,
                'nombre': inputNombre.value,
                'descripcion': textDescripcion.value,
            };

            return fetch(API_URL.CONTROLLER_PROYECTO, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
        })
        // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
        .then(res => ErrorSysrec.isHTTPStatusOk(res, () => res.json()))
        .then(preoyecto => {
            // Si no se registro el Proyecto, se manda error.
            if (!preoyecto.id) {
                AlertSysrec.okError(CONST_MSG_ALERT.ERROR.TITLE, CONST_MSG_ALERT.ERROR.TEXT);
                return;
            }

            // Si se registro correctamente el Proyecto.
            AlertSysrec.okSuccessRedirect(CONST_MSG_ALERT.SAVE_PROJECT.TITLE, CONST_MSG_ALERT.SAVE_PROJECT.TEXT, WEB_URL.VIEW_CREAR_PROYECTO);
        })
        // Si ocurrio una excepcion o error.
        .catch(error => ErrorSysrec.alert(error));

});