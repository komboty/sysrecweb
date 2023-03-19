// Formulario.
const formCrearProyecto = document.getElementById('formCrearProyecto');
// Elementos del formulario.
const inputNombre = document.getElementById('inputNombre');
const textDescripcion = document.getElementById('textDescripcion');

/**
 * Envia los datos al servidor para registrar un Proyecto.
 */
formCrearProyecto.addEventListener('submit', (event) => {
    event.preventDefault();

    // Se verifica que los datos del formulario sean validos.
    if (!(inputNombre.checkValidity() && textDescripcion.checkValidity())) {
        return;
    }

    // Si estan bien los datos se construte el json a enviar al servidor.
    const data = {
        'idFundador': 0,
        'nombre': inputNombre.value,
        'descripcion': textDescripcion.value,
    };

    // Primero se obtiene el id del Usuario que tiene sesion.
    fetch(API_URL_WHIT_PARAMS.SESSION_USER, {
            method: 'GET',
        })
        // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
        .then(res => isStatusOk(res, () => res.json()))
        // Se manda la peticion para registrar un Proyecto.
        .then(user => {
            data.idFundador = user.id;
            return fetch(API_URL.CONTROLLER_PROYECTO, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
        })
        // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
        .then(res => isStatusOk(res, () => res.json()))
        .then(preoyecto => {
            // Si no se registro el Proyecto, se manda error.
            if (!preoyecto.id) {
                alertError(CONST_MSG_ALERT.ERROR.TITLE, CONST_MSG_ALERT.ERROR.TEXT);
                return;
            }

            // Si se registro correctamente el Proyecto.
            alertSuccessRedirect(CONST_MSG_ALERT.SAVE_PROJECT.TITLE, CONST_MSG_ALERT.SAVE_PROJECT.TEXT, WEB_URL.VIEW_CREAR_PROYECTO);
        })
        // Si ocurrio una excepcion o error.
        .catch(error => catchSysrecWebError(error));

});