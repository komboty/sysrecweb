const formRegistro = document.getElementById('formRegistro');
const inputPass = document.getElementById('inputPass');
const inputPass2 = document.getElementById('inputPass2');

// Clase deafult para la contrasenia 2.
const classInputPass2 = inputPass2.className;

// Eventos para validar las contrasenias.
inputPass.addEventListener('change', isValidPass);
inputPass2.addEventListener('keyup', isValidPass);

/**
 * Envia los datos al servidor para registrar un Usuario.
 */
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


    // Se verifica que los datos del formulario sean validos.
    if (!(inputNombre.checkValidity() && inputEmail.checkValidity() && inputPass.checkValidity() &&
            inputPass2.checkValidity() && inputTel.checkValidity() && inputEdad.checkValidity())) {
        return;
    }

    // Si las contrasenias no son iguales, se manda error.
    if (!isValidPass()) {
        alertError(CONST_MSG_ALERT.PASS_NOT_EQUALS.TITLE, CONST_MSG_ALERT.PASS_NOT_EQUALS.TEXT);
        return;
    }

    // Si estan bien los datos se construte el json a enviar al servidor.
    const data = {
        'tipo': checkDeveloper.checked ? CONST_SHARED.TIPO_DESARROLLADOR : CONST_SHARED.TIPO_RECLUTADOR,
        'nombre': inputNombre.value,
        'correo': inputEmail.value,
        'contrasenia': inputPass.value,
        'telefono': inputTel.value,
        'edad': inputEdad.value ? inputEdad.value : null
    };

    new Promise((resolve, reject) => {
            if (inputCV.files[0]) {
                resolve(getBase64(inputCV.files[0]));
            } else {
                resolve(null);
            }
        })
        .then(file => {
            data.curriculum = file
            return fetch(API_URL.CONTROLLER_USUARIO, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
        })
        .then(response => {
            // Si se encontro el registro del usuario en el servidor, continua el flujo.
            if (response.status === 200) {
                return response.json();
            }

            // Si existio un error, se manda error y termina el flujo.
            alertError(CONST_MSG_ALERT.ERROR.TITLE, CONST_MSG_ALERT.ERROR.TEXT);
            throw new Error(title);
        })
        .then(usuario => {
            // Si se registro correctamente el usuario, se redirige al Login.
            if (usuario.id) {
                alertSuccessRedirectLogin(CONST_MSG_ALERT.SAVE_USER.TITLE, CONST_MSG_ALERT.SAVE_USER.TEXT);
                return;
            }

            // Si ocurrio un error.
            alertError(CONST_MSG_ALERT.ERROR.TITLE, CONST_MSG_ALERT.ERROR.TEXT);
        })
        .catch(error => error);
    // Se realiza la peticion al servidor para loguearse.

});

/**
 * Valida que las dos contrasenias sean iguales.
 * 
 * @param {*} event 
 * @returns true si son iguales, false si son distintas.
 */
function isValidPass(event) {
    const isIquals = inputPass.value === inputPass2.value
    const verify = isIquals ? ' is-valid' : ' is-invalid';
    inputPass2.className = classInputPass2 + verify + ' active';
    return isIquals;
}


function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
    });
}

/**
 * Redirecciona a la pagina de Login.
 */
function onIniciarSesion() {
    window.location.replace(WEB_URL.VIEW_LOGIN);
}