/**
 * Obtiene la sesion del usuario. 
 * Si existe se una sesion se ejecuta la funcion, de lo contrario se redirecciona al login.
 */
function getSession(fun) {
    // Se realiza la peticion al servidor para obtener la sesion.
    fetch(API_URL.CONTROLLER_LOGIN, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(sesion => {
            // Si no se encontro la sesion del usuario en el servidor, se redirecciona al login.
            if (sesion === null) {
                window.location.replace(WEB_URL.VIEW_LOGIN);
                return null;
            }
            // Si se encontro la sesion del usuario en el servidor, se ejectuta la funcion pasandole la sesion.
            return fun(sesion);
        })
}