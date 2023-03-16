const badgeMisProyectos = document.getElementById('badgeMisProyectos');
const bodyMisProyectos = document.getElementById('bodyMisProyectos');

/**
 * Obtiene Los Proyectos que tiene el Usuario.
 */
fetch(API_URL_WHIT_PARAMS.MIS_PROYECTOS, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(misProyectos => {
        // Si no se encontraron Proyectos, se termina el flujo.
        if (misProyectos === null) {
            return;
        }

        badgeMisProyectos.innerHTML = misProyectos.length;
        // console.log(misProyectos);

        for (const proyecto of misProyectos) {
            bodyMisProyectos.innerHTML += getHTMLProyecto(proyecto);
        }

    })
    .catch(error => error.message);

/**
 * Regresa el HTML de un Proyecto.
 * @param {object} proyecto Proyecto a poner formato.
 * @returns {string} HTML.
 */
function getHTMLProyecto(proyecto) {
    const invisEnviadas = getInvitaciones(proyecto, CONST_SHARED.ESTADO_INVITACION_ENVIADA);
    const invisAceptadas = getInvitaciones(proyecto, CONST_SHARED.ESTADO_INVITACION_ACEPTADA);
    const invisRechazadas = getInvitaciones(proyecto, CONST_SHARED.ESTADO_INVITACION_RECHAZADA);

    return '<div class="col">' +
        '<div class="card h-100 shadow-3-strong">' +
        '  <img src="../../sources/images/img_project.jpg" class="card-img-top"/>' +
        // '  <h5 class="card-header">' + proyecto.nombre + '</h5>' +
        '  <div class="card-body">' +
        '    <h5 class="card-title">' + proyecto.nombre + '</h5>' +
        '      <p class="card-text">' + proyecto.descripcion + '</p>' +
        '  </div>' +
        '  <div class="accordion">' +
        '    <div class="accordion-item">' +
        '      <h2 class="accordion-header" id="heading1Invi' + proyecto.id + '">' +
        '        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapse1Invi' + proyecto.id + '" aria-expanded="false" aria-controls="collapse1Invi' + proyecto.id + '">' +
        '          <a href="">' +
        '            <i class="fas fa-envelope fa-lg"></i>' +
        '            <span class="badge rounded-pill badge-notification bg-dark">' + invisEnviadas.length + '</span>' +
        '          </a>' +
        '          <div class="container">Invitaciones Enviadas</div>' +
        '        </button>' +
        '      </h2>' +
        '      <div id="collapse1Invi' + proyecto.id + '" class="accordion-collapse collapse" aria-labelledby="heading1Invi' + proyecto.id + '">' +
        '        <div class="accordion-body">' + getHTMLInvitaciones(invisEnviadas) + '</div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="accordion-item">' +
        '      <h2 class="accordion-header" id="heading2Invi' + proyecto.id + '">' +
        '        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapse2Invi' + proyecto.id + '" aria-expanded="false" aria-controls="collapse2Invi' + proyecto.id + '">' +
        '          <a href="">' +
        '            <i class="far fa-thumbs-up fa-lg"></i>' +
        '            <span class="badge rounded-pill badge-notification bg-dark">' + invisAceptadas.length + '</span>' +
        '          </a>' +
        '          <div class="container">Invitaciones Aceptadas</div>' +
        '        </button>' +
        '      </h2>' +
        '      <div id="collapse2Invi' + proyecto.id + '" class="accordion-collapse collapse" aria-labelledby="heading2Invi' + proyecto.id + '">' +
        '        <div class="accordion-body">' + getHTMLInvitaciones(invisAceptadas) + '</div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="accordion-item">' +
        '      <h2 class="accordion-header" id="heading3Invi' + proyecto.id + '">' +
        '        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapse3Invi' + proyecto.id + '" aria-expanded="false" aria-controls="collapse3Invi' + proyecto.id + '">' +
        '          <a href="">' +
        '            <i class="far fa-thumbs-down fa-lg"></i>' +
        '            <span class="badge rounded-pill badge-notification bg-dark">' + invisRechazadas.length + '</span>' +
        '          </a>' +
        '          <div class="container">Invitaciones Rechazadas</div>' +
        '        </button>' +
        '      </h2>' +
        '      <div id="collapse3Invi' + proyecto.id + '" class="accordion-collapse collapse" aria-labelledby="heading3Invi' + proyecto.id + '">' +
        '        <div class="accordion-body">' + getHTMLInvitaciones(invisRechazadas) + '</div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '</div>';
}

/**
 * Obtiene las Invitaciones de un Proyecto segun el estado proporcionado.
 * @param {object} proyecto Proyecto a obtener las invitaciones.
 * @param {string} estado Estado de las invitaciones a obtener.
 * @returns {object[]} Invitaciones con el estado proporcionado.
 */
function getInvitaciones(proyecto, estado) {
    let invitaciones = [];
    for (const invitacion of proyecto.invitaciones) {
        if (invitacion.estado === estado) {
            invitaciones.push(invitacion);
        }
    }
    return invitaciones;
}

/**
 * Regresa el HTML de las invitaciones.
 * @param {object} inivitaciones Invitaciones a poner formato.
 * @returns HTML
 */
function getHTMLInvitaciones(inivitaciones) {
    let html = '<ul class="list-group list-group-light">';
    for (const invitacion of inivitaciones) {
        html += '<li class="list-group-item d-flex justify-content-between align-items-center">' +
            '<div class="d-flex align-items-center">' +
            '  <img src="../../sources/images/img_user.png" style="width: 45px; height: 45px" class="rounded-circle" />' +
            '    <div class="ms-3">' +
            '      <p class="fw-bold mb-1">' + invitacion.nombre + '</p>' +
            '      <p class="text-muted mb-0">' + invitacion.correo + '</p>' +
            '    </div>' +
            '</div>' +
            // '<span class="badge rounded-pill badge-success">Active</span>' +
            '</li>';
    }
    html += '</ul>';
    return html;
}