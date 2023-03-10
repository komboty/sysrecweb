function cerrarSesion() {
    fetch(API_URL.CONTROLLER_SESSION, {
            method: 'DELETE',
        })
        .then(res => window.location.replace(WEB_URL.VIEW_LOGIN));
}