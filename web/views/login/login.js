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
    }

    // Se realiza la peticion al servidor.
    fetch(API_URL.USUARIO_CONTROLLER, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(resJson => {
            if (resJson === null) {
                Swal.fire({
                    title: 'Usuario no encontrado',
                    text: 'Por favor, verifique sus datos',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        })
});