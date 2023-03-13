const formRegistro = document.getElementById('formRegistro');
const inputPass = document.getElementById('inputPass');
const inputPass2 = document.getElementById('inputPass2');
const classInputPass = inputPass.className;

function isValidPass(event) {
    const isIquals = inputPass.value === inputPass2.value
    const verify = isIquals ? ' is-valid' : ' is-invalid';
    inputPass2.className = classInputPass + verify + ' active';
    return isIquals;
}

inputPass.addEventListener('change', isValidPass);
inputPass2.addEventListener('keyup', isValidPass);



formRegistro.addEventListener('submit', (event) => {
    event.preventDefault();

    // Se obtienen los elementos del formulario.
    const checkDeveloper = document.getElementById('checkDeveloper');
    const checkReclutador = document.getElementById('checkReclutador');
    const inputNombre = document.getElementById('inputNombre');
    const inputEmail = document.getElementById('inputEmail');
    const inputTel = document.getElementById('inputTel');
    const inputEdad = document.getElementById('inputEdad');
    const inputCV = document.getElementById('inputCV');

    // Se validan los datos del formulario a que contengan un valor.
    if (inputNombre.value === '' || inputEmail.value === '' || inputPass.value === '' ||
        inputPass2.value === '' || inputTel.value === '') {
        return;
    }

    // Si las contrasenias no son iguales.
    if (!isValidPass()) {
        alertError(CONST_MSG_ALERT.PASS_NOT_EQUALS.TITLE, CONST_MSG_ALERT.PASS_NOT_EQUALS.TEXT);
        return;
    }

    // Si estan bien los datos se construte el json a enviar al servidor.
    const data = {
        'tipo': checkDeveloper.checked ? CONST_USER.TIPO_DESARROLLADOR : CONST_USER.TIPO_RECLUTADOR,
        'nombre': inputNombre.value,
        'correo': inputEmail.value,
        'contrasenia': inputPass.value,
        'telefono': inputTel.value,
        'edad': inputEdad.value ? inputEdad.value : null,
        'curriculum': inputCV.value ? inputCV.value : null,
    };

    //     // Se realiza la peticion al servidor para loguearse.
    //     fetch(API_URL.CONTROLLER_SESSION, {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(data)
    //         })
    //         .then(response => {
    //             // Si se encontro el registro del usuario en el servidor, continua el flujo.
    //             if (response.status === 200) {
    //                 return response.json();
    //             }

    //             // Si existio un error o no se encontro el registro del usuario en el servidor, 
    //             // se manda error y termina el flujo.
    //             let title = CONST_MSG_ALERT.ERROR.TITLE;
    //             let text = CONST_MSG_ALERT.ERROR.TEXT;

    //             if (response.status === 404) {
    //                 title = CONST_MSG_ALERT.USER_NOT_FOUND.TITLE;
    //                 text = CONST_MSG_ALERT.USER_NOT_FOUND.TEXT;
    //             }

    //             alertError(title, text);
    //             throw new Error(title);
    //         })
    //         .then(usuario => {
    //             // Dependiendo del tipo del usuario, se redirige a su home.
    //             redirectToHome(usuario.tipo);
    //         })
    //         .catch(error => error.message);
});

function iniciarSesion() {
    window.location.replace(WEB_URL.VIEW_LOGIN);
}