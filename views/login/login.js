let formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', (event) => {
        event.preventDefault();

        // Se obtienen los elementos del formulario.
        let correo = document.getElementById("inputEmail");
        let contrasenia = document.getElementById("inputPass");

        // Se validan los datos del formulario.
        if (correo.value == "" || contrasenia.value == "") {
            return;
        }

        // Si estan bien los datos se manda al servidor.

    },
    false
);