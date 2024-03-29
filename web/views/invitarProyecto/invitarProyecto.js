const badgeInvitar = document.getElementById('badgeInvitar');
const bodyDesarrolladores = document.getElementById('bodyDesarrolladores');
const cardLoad = document.getElementById('cardLoad');

// Clase deafult para el div de Desarrolladores.
const classBodyDesarrolladores = bodyDesarrolladores.className;

/**
 * @type {Desarrollador[]}
 */
let desarrolladores = [];

/**
 * Obtiene Todos los Desarrolladores.
 */
APISysrec.fetchGet(API_URL_WHIT_PARAMS.USER_TIPO + CONST_SHARED.TIPO_DESARROLLADOR, CONST_MSG_ALERT.DEVELOPERS_NOT_FOUND.CODE)
    // Se ponen los Desarrolladores en HTML.
    .then(resDesarrolladores => {
        cleanScreen();
        badgeInvitar.innerHTML = UtilsSysrec.getLengthArray(resDesarrolladores);
        let desarrollador = null;
        for (const resDesarrollador of resDesarrolladores) {
            desarrollador = new Desarrollador(resDesarrollador);
            desarrolladores.push(desarrollador);
            bodyDesarrolladores.innerHTML += getHTMLDesarrollador(desarrollador);
        }
        bodyDesarrolladores.className += ' animaSlideFromRight';
    })
    // Si ocurrio una excepcion o error.
    .catch(error => {
        cleanScreen();
        ErrorSysrec.alert(error);
    });

/**
 * Limpia la pantalla.
 */
function cleanScreen() {
    bodyDesarrolladores.innerHTML = '';
    bodyDesarrolladores.className = classBodyDesarrolladores;
    cardLoad.innerHTML = '';
}


/**
 * Regresa el HTML de un Desarrollador.
 * @param {Desarrollador} desarrollador Desarrollador a poner formato.
 * @returns {string} HTML.
 */
function getHTMLDesarrollador(desarrollador) {
    const htmlDetalles = desarrollador.calificaciones.length ? getHTMLDetalles(desarrollador) : '';

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
        '          <p class="text-muted mb-0"><i class="fas fa-hiking fa-xs"></i> ' + (desarrollador.edad ? desarrollador.edad : '') + '</p>' +
        '          <span class="badge rounded-pill badge-' + UtilsSysrec.getColorByValue(desarrollador.promedioTotal) + '">' + UtilsSysrec.getRating(desarrollador.promedioTotal) + '</span>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    ' + htmlDetalles +
        '  </div>' +
        '  <div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">' +
        '    <a class="btn btn-link m-0 text-reset" role="button" onClick="onInvitar(' + desarrollador.id + ')" data-ripple-color="primary">' +
        '      Invitar<i class="fas fa-user-check ms-2"></i>' +
        '    </a>' +
        '  </div>' +
        '</div>' +
        '</div>';
}

/**
 * Regresa el HTML de detalles.
 * @param {Desarrollador} desarrollador Desarrollador a poner sus detalles.
 * @returns {string} HTML.
 */
function getHTMLDetalles(desarrollador) {
    return '<div class="accordion py-3">' +
        '<div class="accordion-item">' +
        '  <h2 class="accordion-header" id="headingHabils' + desarrollador.id + '">' +
        '    <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseHabils' + desarrollador.id + '" aria-expanded="false" aria-controls="collapseHabils' + desarrollador.id + '">' +
        '      <a href="#">' +
        '        <i class="fas fa-award fa-lg"></i>' +
        '        <span class="badge rounded-pill badge-notification bg-dark">' + UtilsSysrec.getLengthArray(desarrollador.habilidades) + '</span>' +
        '      </a>' +
        '      <div class="container">Habilidades</div>' +
        '    </button>' +
        '  </h2>' +
        '  <div id="collapseHabils' + desarrollador.id + '" class="accordion-collapse collapse" aria-labelledby="headingHabils' + desarrollador.id + '">' +
        '    <div class="accordion-body">' + getHTMLHabilidades(desarrollador.habilidades) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="accordion-item">' +
        '  <h2 class="accordion-header" id="headingParticipa' + desarrollador.id + '">' +
        '    <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseParticipa' + desarrollador.id + '" aria-expanded="false" aria-controls="collapseParticipa' + desarrollador.id + '">' +
        '      <a href="#">' +
        '        <i class="fas fa-users fa-lg"></i>' +
        '        <span class="badge rounded-pill badge-notification bg-dark">' + UtilsSysrec.getLengthArray(desarrollador.participaciones) + '</span>' +
        '      </a>' +
        '      <div class="container">Colaboraciones</div>' +
        '    </button>' +
        '  </h2>' +
        '  <div id="collapseParticipa' + desarrollador.id + '" class="accordion-collapse collapse" aria-labelledby="headingParticipa' + desarrollador.id + '">' +
        '    <div class="accordion-body">' + getHTMLParticipaciones(desarrollador.participaciones) + '</div>' +
        '  </div>' +
        '</div>' +
        '</div>';
}

/**
 * Regresa el HTML de las Habilidades.
 * @param {HabilidadDesarrollador[]} habilidades
 * @returns {string} HTML.
 */
function getHTMLHabilidades(habilidades) {
    let html = '';
    let color = 'secondary';
    for (const habilidad of habilidades) {
        // color = getColorByValue(habilidad.promedio);
        html += '<span class="badge badge-' + color + '">' +
            habilidad.nombre + ': ' + habilidad.promedio + ' ' + UtilsSysrec.getHTMLStars(habilidad.promedio, 'fa-xs') +
            '</span> ';
    }
    return html;
}

/**
 * Regresa el HTML de las Participaciones.
 * @param {ParticipacionDesarrollador[]} participaciones
 * @returns {string} HTML.
 */
function getHTMLParticipaciones(participaciones) {
    let html = '';
    let color = 'secondary';
    for (const participacion of participaciones) {
        // color = getColorByValue(participacion.promedio);
        html += '<span class="badge badge-' + color + '">' +
            participacion.proyecto + ': ' + participacion.promedio + ' ' + UtilsSysrec.getHTMLStars(participacion.promedio, 'fa-xs') +
            '</span> ';
    }
    return html;
}

/**
 * Realiza flujo para hacer una Invitacion a un Desarrollador.
 * @param {int} idDesarrollador 
 */
function onInvitar(idDesarrollador) {
    // Se obtiene el Desarrollador a invitar.
    const desarrollador = UtilsSysrec.getObjectById(desarrolladores, idDesarrollador);

    // Se obtienen los Proyectos que tiene el Reclutador.
    APISysrec.fetchGet(API_URL_WHIT_PARAMS.MIS_PROYECTOS, CONST_MSG_ALERT.PROJECT_NOT_FOUND.CODE)
        // Se lanza el Modal, si se da cancelar se manda a catch.
        .then(proyectos => {
            const proyectosReclutador = proyectos.map(proyecto => new Proyecto(proyecto));
            return openModalInvitacion(proyectosReclutador, desarrollador);
        })
        // Se hace la peticion al sevidor para registrar una Invitacion.
        .then(modalValues => APISysrec.fetchPostAndCheckId(
            API_URL.CONTROLLER_INVITACION, {
                'idUsuario': desarrollador.id,
                'idProyecto': modalValues.idProyecto,
                'comentario': modalValues.comentario,
            }))
        // Si se registro correctamente la Invitacion.
        .then(invitacion => AlertSysrec.okSuccess(CONST_MSG_ALERT.SAVE_INVITACTION.TITLE, CONST_MSG_ALERT.SAVE_INVITACTION.TEXT))
        // Si ocurrio una excepcion o error.
        .catch(error => ErrorSysrec.alert(error));
}

/**
 * Lanza Modal con el formulario para obtener los datos de registro de una invitacion.
 * @param {Proyecto[]} proyectosReclutador 
 * @param {Desarrollador} desarrollador
 * @returns {Promise} Modal.
 */
function openModalInvitacion(proyectosReclutador, desarrollador) {
    return ModalSysrec.openByHTML({
            title: 'Invitar a',
            html: getHTMLInvitar(proyectosReclutador, desarrollador),
            textBtnConfirm: 'Invitar <i class="fas fa-user-check ms-1"></i>',
            textBtnCancel: 'Cancelar <i class="fas fa-user-times ms-1"></i>',
            funPreConfirm: () => {
                const idProyecto = document.getElementById('swal2SelectProyect').value;
                const comentario = document.getElementById('swal2AreaComent').value;
                const proyecto = UtilsSysrec.getObjectById(proyectosReclutador, parseInt(idProyecto));

                // Si el Desarrollador ya tiene una invitacion aceptada por el Proyecto seleccionado.
                if (proyecto.hasUserInInvitacionesAceptadas(desarrollador.id)) {
                    Swal.showValidationMessage(CONST_MSG_ALERT.ERROR_USER_ACEPTADO.TEXT);
                }

                // Si el Desarrollador ya se le mando una invitacion al Proyecto seleccionado.
                if (proyecto.hasUserInInvitacionesEnviadas(desarrollador.id)) {
                    Swal.showValidationMessage(CONST_MSG_ALERT.ERROR_USER_INVITADO.TEXT);
                }

                return { 'idProyecto': idProyecto, 'comentario': comentario };
            }
        })
        // Se valida la respuesta del Modal.
        .then(resModal => ModalSysrec.getValues(resModal))
}

/**
 * Regresa el HTML de Invitacion.
 * @param {Proyecto[]} proyectosReclutador Proyectos del Reclutador.
 * @param {Desarrollador} desarrollador Desarrollador a invitar.
 * @returns {string} HTML.
 */
function getHTMLInvitar(proyectosReclutador, desarrollador) {
    let optionsProyectos = '';
    for (const proyecto of proyectosReclutador) {
        optionsProyectos += '  <option value="' + proyecto.id + '">' + proyecto.nombre + '</option>';
    }

    return '<div class="container py-1">' +
        '  <img src="../../sources/images/img_user.png" style="width: 45px; height: 45px" class="rounded-circle"/>' +
        '  <div class="ms-3 py-2">' +
        '    <p class="fw-bold mb-1">' + desarrollador.nombre + '</p>' +
        '    <p class="text-muted mb-0"><i class="fas fa-envelope fa-xs"></i> ' + desarrollador.correo + '</p>' +
        '    <p class="text-muted mb-0"><i class="fas fa-phone fa-xs"></i> ' + desarrollador.telefono + '</p>' +
        '    <p class="text-muted mb-0"><i class="fas fa-hiking fa-xs"></i> ' + (desarrollador.edad ? desarrollador.edad : '') + '</p>' +
        '    <span class="badge rounded-pill m-2 badge-' + UtilsSysrec.getColorByValue(desarrollador.promedioTotal) + '">' + UtilsSysrec.getRating(desarrollador.promedioTotal) + '</span>' +
        '  </div>' +
        '</div>' +
        '<div class="container">' +
        '  <div class="input-group input-group-lg mb-4">' +
        '    <select class="form-select" id="swal2SelectProyect" placeholder="Proyecto">' + optionsProyectos + '</select>' +
        '    <span class="input-group-text"><i class="fab fa-sketch" ></i></span>' +
        '  </div>' +
        '  <div class="input-group input-group-lg">' +
        '    <textarea class="form-control" id="swal2AreaComent" placeholder="Comentario"></textarea>' +
        '    <span class="input-group-text"><i class="fas fa-edit"></i></span>' +
        '  </div>' +
        '</div>';
}