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
    fetch(API_URL.CONTROLLER_LOGIN, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(usuario => {
            // Si no se encontro el registro del usuario en el servidor, se manda error y termina el script.
            if (usuario === null) {
                Swal.fire({
                    title: 'Usuario no encontrado',
                    text: 'Por favor, verifique sus datos',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return;
            }

            // Si se encontro el registro del usuario en el servidor, se redirige a su vista.
            switch (usuario.tipo) {
                case 'Desarrollador':
                    window.location.replace(WEB_URL.VIEW_HOME_DESARROLLADOR);
                    break;

                case 'Reclutador':
                    alert('WEB_URL.VIEW_HOME_RECLUTADOR')
                        // window.location.replace(WEB_URL.VIEW_HOME_RECLUTADOR);
                    break;
            }
        });
});