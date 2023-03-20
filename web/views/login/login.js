const formLogin = document.getElementById('formLogin');

/**
 * Envia los datos al servidor para logearse un Usuario.
 */
formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    // Se obtienen los elementos del formulario.
    const correo = document.getElementById('inputEmail');
    const contrasenia = document.getElementById('inputPass');

    // Se verifica que los datos del formulario sean validos.
    if (!(correo.checkValidity() && contrasenia.checkValidity())) {
        return;
    }

    // Si estan bien los datos se construye el json a enviar al servidor.
    const data = {
        'correo': correo.value,
        'contrasenia': contrasenia.value
    };

    // Se realiza la peticion al servidor para loguearse.
    fetch(API_URL.CONTROLLER_SESSION, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
        .then(res =>
            UtilsSysrec.isStatusOk(res, () => res.json(),
                msg404 = {
                    title: CONST_MSG_ALERT.USER_NOT_FOUND.TITLE,
                    text: CONST_MSG_ALERT.USER_NOT_FOUND.TEXT
                })
        )
        // Dependiendo del tipo del Usuario, se redirige a su home.
        .then(usuario => UtilsSysrec.redirectToHome(usuario.tipo))
        // Si ocurrio una excepcion o error.
        .catch(error => UtilsSysrec.catchErrorSysrec(error));
});

/**
 * Redirecciona a la pagina de crear cuenta.
 */
function onCrearCuenta() {
    window.location.replace(WEB_URL.VIEW_CREAR_USUARIO);
}