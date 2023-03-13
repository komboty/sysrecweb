const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    // Se obtienen los elementos del formulario.
    const correo = document.getElementById('inputEmail');
    const contrasenia = document.getElementById('inputPass');

    // Se validan los datos del formulario.
    if (correo.value === '' || contrasenia.value === '') {
        return;
    }

    // // Si estan bien los datos se construte el json a enviar al servidor.
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
        .then(response => {
            // Si se encontro el registro del usuario en el servidor, continua el flujo.
            if (response.status === 200) {
                return response.json();
            }

            // Si existio un error o no se encontro el registro del usuario en el servidor, 
            // se manda error y termina el flujo.
            let title = CONST_MESSAGE_ALERT.ERROR.TITLE;
            let text = CONST_MESSAGE_ALERT.ERROR.TEXT;

            if (response.status === 404) {
                title = CONST_MESSAGE_ALERT.USER_NOT_FOUND.TITLE;
                text = CONST_MESSAGE_ALERT.USER_NOT_FOUND.TEXT;
            }

            alertError(title, text);
            throw new Error(title);
        })
        .then(usuario => {
            // Dependiendo del tipo del usuario, se redirige a su home.
            redirectToHome(usuario.tipo);
        })
        .catch(error => error.message);
});