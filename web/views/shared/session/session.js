Swal.fire({
        title: 'Tu sesión ha expirado ',
        text: 'Vuelve a iniciar sesión',
        icon: 'error',
        confirmButtonText: 'OK'
    })
    .then((result) => {
        window.location.replace(WEB_URL.VIEW_LOGIN);
    });