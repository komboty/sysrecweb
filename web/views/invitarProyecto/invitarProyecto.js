const bodyDesarrolladores = document.getElementById('bodyDesarrolladores');
const cardLoad = document.getElementById('cardLoad');

/**
 * Obtiene los Usuarios del tipo Desarrollador.
 */
fetch(API_URL_WHIT_PARAMS.USER_TIPO + CONST_SHARED.TIPO_DESARROLLADOR, {
        method: 'GET',
    })
    // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
    .then(res => isStatusOk(res, () => res.json()))
    // Se ponen los Proyectos en HTML.
    .then(desarrolladores => {
        cleanScreen();
        for (const desarrollador of desarrolladores) {
            bodyDesarrolladores.innerHTML += getHTMLDesarrollador(desarrollador);
        }

    })
    // Si ocurrio una excepcion o error.
    .catch(error => {
        cleanScreen();
        catchSysrecWebError(error);
    });

/**
 * Limpia la pantalla.
 */
function cleanScreen() {
    bodyDesarrolladores.innerHTML = '';
    cardLoad.innerHTML = '';
}


/**
 * Regresa el HTML de un Desarrollador.
 * @param {object} desarrollador Desarrollador a poner formato.
 * @returns {string} HTML.
 */
function getHTMLDesarrollador(desarrollador) {
    return '<div class="col">' +
        '<div class="card mb-3 h-100 shadow-3-strong">' +
        '  <div class="card-body">' +
        '    <div class="d-flex justify-content-between align-items-center">' +
        '      <div class="d-flex align-items-center">' +
        '        <img src="../../sources/images/img_user.png" style="width: 45px; height: 45px" class="rounded-circle"/>' +
        '        <div class="ms-3">' +
        '          <p class="fw-bold mb-1">' + desarrollador.nombre + '</p>' +
        '          <p class="text-muted mb-0"><i class="fas fa-envelope fa-xs"></i> ' + desarrollador.correo + '</p>' +
        '          <p class="text-muted mb-0"><i class="fas fa-phone fa-xs"></i> ' + desarrollador.telefono + '</p>' +
        '          <p class="text-muted mb-0"><i class="fas fa-hiking fa-xs"></i> ' + desarrollador.edad + '</p>' +
        '        </div>' +
        '      </div>' +
        // '      <span class="badge rounded-pill badge-warning">Awaiting</span>' +
        '    </div>' +
        '  </div>' +
        '  <div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">' +
        '    <a class="btn btn-link m-0 text-reset" role="button" data-ripple-color="primary">' +
        '      Invitar<i class="fas fa-user-check ms-2"></i>' +
        '    </a>' +
        '  </div>' +
        '</div>' +
        '</div>';
}