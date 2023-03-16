// /**
//  * Obtiene la sesion del usuario.
//  */
// function getSession() {
//     // Se realiza la peticion al servidor para obtener la sesion.
//     return fetch(API_URL.CONTROLLER_SESSION, {
//             method: 'GET',
//         })
//         .then(res => res.json())
//         .then(sesion => {
//             // Si no se encontro la sesion del usuario en el servidor.
//             if (sesion === null) {
//                 return null;
//             }
//             // Si se encontro la sesion del usuario en el servidor.
//             return sesion;
//         })
//         .catch(error => error.message);
// }

/**
 * Redirecciona a un Home segun el tipo de Usuario. Si no hay Home se redirecciona al login.
 * 
 * @param {string} tipoUsuario Tipo de Usuario.
 */
function redirectToHome(tipoUsuario) {

    switch (tipoUsuario) {
        case CONST_SHARED.TIPO_DESARROLLADOR:
            window.location.replace(WEB_URL.VIEW_HOME_DESARROLLADOR);
            break;

        case CONST_SHARED.TIPO_RECLUTADOR:
            window.location.replace(WEB_URL.VIEW_HOME_RECLUTADOR);
            break;

            // default:
            //     window.location.replace(WEB_URL.VIEW_LOGIN);
            //     break;
    }
}