const badgeMisProyectos = document.getElementById('badgeMisProyectos');
const bodyMisProyectos = document.getElementById('bodyMisProyectos');
const cardLoad = document.getElementById('cardLoad');

// Clase deafult para el div de Mis Proyectos.
const classBodyMisProyectos = bodyMisProyectos.className;

/**
 * Obtiene los Proyectos que tiene el Reclutador.
 */
fetch(API_URL_WHIT_PARAMS.MIS_PROYECTOS, {
        method: 'GET',
    })
    // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
    .then(res =>
        UtilsSysrec.isStatusOk(res, () => res.json(),
            msg404 = {
                title: CONST_MSG_ALERT.PROJECT_NOT_FOUND.TITLE,
                text: CONST_MSG_ALERT.PROJECT_NOT_FOUND.TEXT
            })
    )
    // Se ponen los Proyectos en HTML.
    .then(misProyectos => {
        cleanScreen();
        badgeMisProyectos.innerHTML = UtilsSysrec.getLengthArray(misProyectos);
        for (const proyecto of misProyectos) {
            bodyMisProyectos.innerHTML += getHTMLProyecto(proyecto);
        }
        bodyMisProyectos.className += ' animaSlideFromRight';
    })
    // Si ocurrio una excepcion o error.
    .catch(error => {
        cleanScreen();
        UtilsSysrec.catchErrorSysrec(error);
    });

/**
 * Limpia la pantalla.
 */
function cleanScreen() {
    bodyMisProyectos.innerHTML = '';
    bodyMisProyectos.className = classBodyMisProyectos;
    cardLoad.innerHTML = '';
}


/**
 * Regresa el HTML de un Proyecto.
 * @param {object} proyecto Proyecto a poner formato.
 * @returns {string} HTML.
 */
function getHTMLProyecto(proyecto) {
    const invisEnviadas = UtilsSysrec.getInvitacionesByEstado(proyecto.invitaciones, CONST_SHARED.ESTADO_INVITACION_ENVIADA);
    const invisAceptadas = UtilsSysrec.getInvitacionesByEstado(proyecto.invitaciones, CONST_SHARED.ESTADO_INVITACION_ACEPTADA);
    const invisRechazadas = UtilsSysrec.getInvitacionesByEstado(proyecto.invitaciones, CONST_SHARED.ESTADO_INVITACION_RECHAZADA);

    return '<div class="col">' +
        '<div class="card h-100 shadow-3-strong">' +
        '  <img src="../../sources/images/img_project.jpg" class="card-img-top"/>' +
        // '  <h4 class="card-header">' + proyecto.nombre + '</h4>' +
        '  <div class="card-body">' +
        '    <h4 class="card-title">' + proyecto.nombre + '</h4>' +
        '    <p class="card-text"></p>' +
        '    <div class="accordion">' +
        '      <div class="accordion-item">' +
        '        <h2 class="accordion-header" id="headingDesc' + proyecto.id + '">' +
        '          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseDesc' + proyecto.id + '" aria-expanded="false" aria-controls="collapseDesc' + proyecto.id + '">' +
        '            <a href="#">' +
        '              <i class="fas fa-info-circle"></i>' +
        '            </a>' +
        '            <div class="container">Descripción</div>' +
        '          </button>' +
        '        </h2>' +
        '        <div id="collapseDesc' + proyecto.id + '" class="accordion-collapse collapse" aria-labelledby="headingDesc' + proyecto.id + '">' +
        '          <div class="accordion-body">' + proyecto.descripcion + '</div>' +
        '        </div>' +
        '      </div>' +
        '      <div class="accordion-item">' +
        '        <h2 class="accordion-header" id="heading1Invi' + proyecto.id + '">' +
        '          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapse1Invi' + proyecto.id + '" aria-expanded="false" aria-controls="collapse1Invi' + proyecto.id + '">' +
        '            <a href="#">' +
        '              <i class="fas fa-envelope fa-lg"></i>' +
        '              <span class="badge rounded-pill badge-notification bg-dark">' + UtilsSysrec.getLengthArray(invisEnviadas) + '</span>' +
        '            </a>' +
        '            <div class="container">Invitaciones sin respuesta</div>' +
        '          </button>' +
        '        </h2>' +
        '        <div id="collapse1Invi' + proyecto.id + '" class="accordion-collapse collapse" aria-labelledby="heading1Invi' + proyecto.id + '">' +
        '          <div class="accordion-body">' + getHTMLInvitaciones(invisEnviadas) + '</div>' +
        '        </div>' +
        '      </div>' +
        '      <div class="accordion-item">' +
        '        <h2 class="accordion-header" id="heading2Invi' + proyecto.id + '">' +
        '          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapse2Invi' + proyecto.id + '" aria-expanded="false" aria-controls="collapse2Invi' + proyecto.id + '">' +
        '            <a href="#">' +
        '              <i class="far fa-thumbs-up fa-lg"></i>' +
        '              <span class="badge rounded-pill badge-notification bg-dark">' + UtilsSysrec.getLengthArray(invisAceptadas) + '</span>' +
        '            </a>' +
        '            <div class="container">Invitaciones Aceptadas</div>' +
        '          </button>' +
        '        </h2>' +
        '        <div id="collapse2Invi' + proyecto.id + '" class="accordion-collapse collapse" aria-labelledby="heading2Invi' + proyecto.id + '">' +
        '          <div class="accordion-body">' + getHTMLInvitaciones(invisAceptadas, true) + '</div>' +
        '        </div>' +
        '      </div>' +
        '      <div class="accordion-item">' +
        '        <h2 class="accordion-header" id="heading3Invi' + proyecto.id + '">' +
        '          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapse3Invi' + proyecto.id + '" aria-expanded="false" aria-controls="collapse3Invi' + proyecto.id + '">' +
        '            <a href="#">' +
        '              <i class="far fa-thumbs-down fa-lg"></i>' +
        '              <span class="badge rounded-pill badge-notification bg-dark">' + UtilsSysrec.getLengthArray(invisRechazadas) + '</span>' +
        '            </a>' +
        '            <div class="container">Invitaciones Rechazadas</div>' +
        '          </button>' +
        '        </h2>' +
        '        <div id="collapse3Invi' + proyecto.id + '" class="accordion-collapse collapse" aria-labelledby="heading3Invi' + proyecto.id + '">' +
        '          <div class="accordion-body">' + getHTMLInvitaciones(invisRechazadas) + '</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '</div>';
}

/**
 * Regresa el HTML de las invitaciones.
 * @param {object} inivitaciones Invitaciones a poner formato.
 * @param {boolean} isCalificar Si se quiere mostrar el boton de calificar.
 * @returns HTML
 */
function getHTMLInvitaciones(inivitaciones, isCalificar = false) {
    let html = '';
    let btnCalificar = '';

    for (const invitacion of inivitaciones) {
        if (isCalificar) {
            btnCalificar = '<div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">' +
                '  <a class="btn btn-link m-0 text-reset" role="button" onClick="onCalificar(' + invitacion.idUsuario + ')" data-ripple-color="primary">' +
                '    Calificar<i class="fas fa-star-half-alt ms-2"></i><i class="fas fa-star-half-alt ms-2"></i><i class="fas fa-star-half-alt ms-2"></i>' +
                '  </a>' +
                '</div>';
        }

        html += '<div class="card mb-3 h-100 shadow-3-strong">' +
            '  <div class="card-body">' +
            '    <div class="d-flex justify-content-between align-items-center">' +
            '      <div class="d-flex align-items-center">' +
            '        <img src="../../sources/images/img_user.png" style="width: 45px; height: 45px" class="rounded-circle"/>' +
            '        <div class="ms-3">' +
            '          <p class="fw-bold mb-1">' + invitacion.nombre + '</p>' +
            '          <p class="text-muted mb-0"><i class="fas fa-envelope fa-xs"></i> ' + invitacion.correo + '</p>' +
            '          <p class="text-muted mb-0"><i class="fas fa-phone fa-xs"></i> ' + invitacion.telefono + '</p>' +
            '        </div>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            btnCalificar +
            '</div>';
    }
    return html;
}

/**
 * Realiza flujo para hacer una Invitacion a un Desarrollador.
 * @param {int} idDesarrollador 
 */
function onCalificar(idUsuario) {

}