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
    APISysrec.fetchPost(API_URL.CONTROLLER_SESSION, data, CONST_MSG_ALERT.USER_NOT_FOUND.CODE)
        // Dependiendo del tipo del Usuario, se redirige a su home.
        .then(usuario => UtilsSysrec.redirectToHome(usuario.tipo))
        // Si ocurrio una excepcion o error.
        .catch(error => ErrorSysrec.alert(error));
});

/**
 * Redirecciona a la pagina de crear cuenta.
 */
function onCrearCuenta() {
    window.location.replace(WEB_URL.VIEW_CREAR_USUARIO);
}