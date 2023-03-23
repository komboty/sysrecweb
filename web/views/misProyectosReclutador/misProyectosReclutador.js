const badgeMisProyectos = document.getElementById('badgeMisProyectos');
const bodyMisProyectos = document.getElementById('bodyMisProyectos');
const cardLoad = document.getElementById('cardLoad');

// Clase deafult para el div de Mis Proyectos.
const classBodyMisProyectos = bodyMisProyectos.className;

/**
 * @type {Proyecto[]}
 */
let proyectos = [];
// /**
//  * @type {Habilidad[]}
//  */
let categoHabilidad = [];

/**
 * Obtiene los Proyectos que tiene el Reclutador.
 */
fetch(API_URL_WHIT_PARAMS.MIS_PROYECTOS, {
        method: 'GET',
    })
    // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
    .then(res => ErrorSysrec.isHTTPStatusOk(res, () => res.json(), CONST_MSG_ALERT.PROJECT_NOT_FOUND.CODE))
    // Se ponen los Proyectos en HTML.
    .then(misProyectos => {
        cleanScreen();
        badgeMisProyectos.innerHTML = UtilsSysrec.getLengthArray(misProyectos);
        let proyecto = null;
        for (const miProyecto of misProyectos) {
            proyecto = new Proyecto(miProyecto);
            bodyMisProyectos.innerHTML += getHTMLProyecto(proyecto);
            proyectos.push(proyecto);
        }
        bodyMisProyectos.className += ' animaSlideFromRight';
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
    bodyMisProyectos.innerHTML = '';
    bodyMisProyectos.className = classBodyMisProyectos;
    cardLoad.innerHTML = '';
}


/**
 * Regresa el HTML de un Proyecto.
 * @param {Proyecto} proyecto Proyecto a poner formato.
 * @returns {string} HTML.
 */
function getHTMLProyecto(proyecto) {
    const invisEnviadas = proyecto.getInvitacionesEnviadas();
    const invisAceptadas = proyecto.getInvitacionesAceptadas();
    const invisRechazadas = proyecto.getInvitacionesRechazadas();

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
        '          <div class="accordion-body">' + getHTMLInvitaciones(invisEnviadas, proyecto.id) + '</div>' +
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
        '          <div class="accordion-body">' + getHTMLInvitaciones(invisAceptadas, proyecto.id, true) + '</div>' +
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
        '          <div class="accordion-body">' + getHTMLInvitaciones(invisRechazadas, proyecto.id) + '</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '</div>';
}

/**
 * Regresa el HTML de las invitaciones.
 * @param {InvitacionProyecto} inivitaciones Invitaciones a poner formato.
 * @param {int} idProyecto Id del Proyecto de la invitacion.
 * @param {boolean} isCalificar Si se quiere mostrar el boton de calificar.
 * @returns HTML
 */
function getHTMLInvitaciones(inivitaciones, idProyecto, isCalificar = false) {
    let html = '';
    let btnCalificar = '';

    for (const invitacion of inivitaciones) {
        if (isCalificar) {
            btnCalificar = '<div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">' +
                '  <a class="btn btn-link m-0 text-reset" role="button" onClick="onCalificar(' + invitacion.idUsuario + ',' + idProyecto + ')" data-ripple-color="primary">' +
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
 * Realiza flujo para Calificar a un Desarrollador.
 * @param {int} idDesarrollador Id del Desarrollador a Calificar.
 * @param {int} idProyecto Id del Proyecto de la invitacion.
 */
function onCalificar(idDesarrollador, idProyecto) {
    // Se obtiene el Desarrollador a invitar.
    const proyecto = UtilsSysrec.getObjectById(proyectos, idProyecto);
    const invitacion = proyecto.getInvitacionesAceptadasByIdUser(idDesarrollador);

    // Se obtienen todas las Habilidades del servidor.
    fetch(API_URL_WHIT_PARAMS.HABILIDAD_ALL, {
            method: 'GET',
        })
        // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
        .then(res => ErrorSysrec.isHTTPStatusOk(res, () => res.json()))
        // 
        .then(resHabilidades => {
            // habilidades = resHabilidades.map(habilidad => new Habilidad(habilidad));
            categoHabilidad = UtilsSysrec.groupByValue(resHabilidades, 'categoria');
            return openModalCalificar(invitacion);
        })
        // Se hace la peticion al sevidor para registrar la Calificacion.
        .then((modalValues) => {
            const data = {
                'idUsuario': idDesarrollador,
                'idProyecto': idProyecto,
                'idHabilidad': modalValues.idHabilidad,
                'puntos': modalValues.puntos,
                'comentario': modalValues.comentario,
            };

            return fetch(API_URL.CONTROLLER_CALIFICACION, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
        })
        // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
        .then(res => ErrorSysrec.isHTTPStatusOk(res, () => res.json()))
        .then(invitacion => {
            // Si no se registro la Invitacion, se manda error.
            if (!invitacion.id) {
                AlertSysrec.okError(CONST_MSG_ALERT.ERROR.TITLE, CONST_MSG_ALERT.ERROR.TEXT);
                return;
            }

            // Si se registro correctamente la Invitacion.
            AlertSysrec.okSuccess(CONST_MSG_ALERT.SAVE_CALIFICACION.TITLE, CONST_MSG_ALERT.SAVE_CALIFICACION.TEXT);
        })
        // Si ocurrio una excepcion o error.
        .catch(error => ErrorSysrec.alert(error));
}

/**
 * Lanza Modal con el formulario para obtener los datos de registro de una o varias calificaciones.
 * @param {InvitacionProyecto} invitacion Invitacion aceptada con el Desarrollador.
 * @returns {Promise} Modal.
 */
function openModalCalificar(invitacion) {
    return ModalSysrec.openByHTML({
            title: 'Calificar a',
            html: getHTMLCalificar(invitacion),
            sizeX: '45em',
            textBtnConfirm: 'Aceptar <i class="fas fa-user-check" style="margin-left: 0.3em;"></i>',
            textBtnCancel: 'Cancelar <i class="fas fa-user-times" style="margin-left: 0.3em;"></i>',
            fundidOpen: () => starsListener(),
            funPreConfirm: () => {
                return {
                    'idHabilidad': document.getElementById('swal2SelectSkills').value,
                    'puntos': document.querySelectorAll('.stars i.active').length,
                    'comentario': document.getElementById('swal2AreaComent').value
                };
            }
        })
        // Se valida la respuesta del Modal.
        .then(resModal => ModalSysrec.getValues(resModal))
}

/**
 * Regresa el HTML para Calificar.
 * @param {InvitacionProyecto} invitacion Invitacion aceptada con el Desarrollador.
 * @returns {string} HTML.
 */
function getHTMLCalificar(invitacion) {
    let optionsCategorias = '';
    let categoDefault = '';
    let i = 0;
    for (const key in categoHabilidad) {
        if (i < 1) { categoDefault = key; }
        i++;
        optionsCategorias += '  <option value="' + key + '">' + key + '</option>';
    }

    return '<div class="container py-1">' +
        '  <img src="../../sources/images/img_user.png" style="width: 45px; height: 45px" class="rounded-circle"/>' +
        '  <div class="ms-3 py-2">' +
        '    <p class="fw-bold mb-1">' + invitacion.nombre + '</p>' +
        '    <p class="text-muted mb-0"><i class="fas fa-envelope fa-xs"></i> ' + invitacion.correo + '</p>' +
        '    <p class="text-muted mb-0"><i class="fas fa-phone fa-xs"></i> ' + invitacion.telefono + '</p>' +
        '  </div>' +
        '</div>' +
        '<div class="container py-2">' +
        '  <div class="input-group input-group-lg mb-4">' +
        '    <select class="form-select" id="swal2SelectCats" onchange="onSelectCategoria(event)">' + optionsCategorias + '</select>' +
        '    <select class="form-select" id="swal2SelectSkills">' + getHTMLHabilidades(categoDefault) + '</select>' +
        '    <span class="stars input-group-text">' +
        '      <i class="fas fa-star active"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>' +
        '    </span>' +
        '    <span class="input-group-text"><i class="fas fa-award"></i></span>' +
        '  </div>' +
        '  <div class="input-group input-group-lg">' +
        '    <textarea class="form-control" id="swal2AreaComent" placeholder="Comentario"></textarea>' +
        '    <span class="input-group-text"><i class="fas fa-edit"></i></span>' +
        '  </div>' +
        '</div>';
}

/**
 * Inserta opciones al select de las Habilidades, segun la Categoria seleccionada.
 * @param {*} event 
 */
function onSelectCategoria(event) {
    var categoria = event.target.value;
    document.getElementById('swal2SelectSkills').innerHTML = getHTMLHabilidades(categoria);
}

/**
 * Se regresan las opciones segun la Categoria proporcionada.
 * @param {string} categoria 
 */
function getHTMLHabilidades(categoria) {
    let optionsHabilidad = '';
    for (const habilidad of categoHabilidad[categoria]) {
        optionsHabilidad += '  <option value="' + habilidad.id + '">' + habilidad.nombre + '</option>';
    }
    return optionsHabilidad;
}

function starsListener() {
    const stars = document.querySelectorAll('.stars i');
    stars.forEach((star, index1) => {
        star.addEventListener('click', () => {
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
            })
        })
    })
}