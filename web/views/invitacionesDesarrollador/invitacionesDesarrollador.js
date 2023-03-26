const bodyInviRecibidas = document.getElementById('bodyInviRecibidas');
const bodyInviAceptadas = document.getElementById('bodyInviAceptadas');
const bodyInviRechazadas = document.getElementById('bodyInviRechazadas');
const cardLoad = document.getElementById('cardLoad');

/**
 * @type {Invitacion[]}
 */
let invitaciones = [];

/**
 * Obtiene Todos los Desarrolladores.
 */
APISysrec.fetchGet(API_URL_WHIT_PARAMS.INVITACION_ALL, CONST_MSG_ALERT.INVITATIONS_NOT_FOUND.CODE)
    // Se ponen las Invitaciones en HTML.
    .then(resInvitaciones => {
        cleanScreen();
        let invitacion = null;
        for (const resInvitacion of resInvitaciones) {
            invitacion = new Invitacion(resInvitacion);
            invitaciones.push(invitacion);

            switch (invitacion.estado) {
                case CONST_SHARED.ESTADO_INVITACION_ENVIADA:
                    bodyInviRecibidas.innerHTML += getHTMLInvitacion(invitacion, true);
                    break;

                case CONST_SHARED.ESTADO_INVITACION_ACEPTADA:
                    bodyInviAceptadas.innerHTML += getHTMLInvitacion(invitacion);
                    break;

                case CONST_SHARED.ESTADO_INVITACION_RECHAZADA:
                    bodyInviRechazadas.innerHTML += getHTMLInvitacion(invitacion);
                    break;
            }
        }
        setBadges();
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
    bodyInviRecibidas.innerHTML = '';
    bodyInviAceptadas.innerHTML = '';
    bodyInviRechazadas.innerHTML = '';
    cardLoad.innerHTML = '';
}

/**
 * Asigna el numero de Inivtaciones que tiene cada Tab.
 */
function setBadges() {
    const groupInvi = UtilsSysrec.groupByValue(invitaciones, 'estado');
    const numRecibidas = groupInvi[CONST_SHARED.ESTADO_INVITACION_ENVIADA];
    const numAceptadas = groupInvi[CONST_SHARED.ESTADO_INVITACION_ACEPTADA];
    const numRechazadas = groupInvi[CONST_SHARED.ESTADO_INVITACION_RECHAZADA];

    const badgeRecibidas = document.getElementById('badgeRecibidas');
    const badgeAceptadas = document.getElementById('badgeAceptadas');
    const badgeRechazadas = document.getElementById('badgeRechazadas');

    badgeRecibidas.innerHTML = numRecibidas ? numRecibidas.length : 0;
    badgeAceptadas.innerHTML = numAceptadas ? numAceptadas.length : 0;
    badgeRechazadas.innerHTML = numRechazadas ? numRechazadas.length : 0;
}

/**
 * Regresa el HTML de una Invitacion.
 * @param {Invitacion} invitacion 
 * @param {boolean} isRecibida 
 * @returns 
 */
function getHTMLInvitacion(invitacion, isRecibida = false) {
    let btnRespuesta = '';

    if (isRecibida) {
        btnRespuesta = '<div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">' +
            '  <a class="btn btn-link m-0 text-reset" role="button" onClick="onRespoderInvitacion(' + invitacion.id + ')" data-ripple-color="primary">' +
            '    Responder<i class="fas fa-reply ms-2"></i>' +
            '  </a>' +
            '</div>';
    }

    return '<div class="col">' +
        '<div class="card h-100 shadow-3-strong">' +
        '  <img src="../../sources/images/img_project.jpg" class="card-img-top"/>' +
        // '  <h4 class="card-header">' + proyecto.nombre + '</h4>' +
        '  <div class="card-body">' +
        '    <h4 class="card-title">' + invitacion.proyecto + '</h4>' +
        '    <p class="card-text"></p>' +
        '    <div class="accordion">' +
        '      <div class="accordion-item">' +
        '        <h2 class="accordion-header" id="headingDesc' + invitacion.id + '">' +
        '          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseDesc' + invitacion.id + '" aria-expanded="false" aria-controls="collapseDesc' + invitacion.id + '">' +
        '            <a href="#">' +
        '              <i class="fas fa-info-circle fa-lg"></i>' +
        '            </a>' +
        '            <div class="container">Descripción</div>' +
        '          </button>' +
        '        </h2>' +
        '        <div id="collapseDesc' + invitacion.id + '" class="accordion-collapse collapse" aria-labelledby="headingDesc' + invitacion.id + '">' +
        '          <div class="accordion-body">' + invitacion.descripcion + '</div>' +
        '        </div>' +
        '      </div>' +
        '      <div class="accordion-item">' +
        '        <h2 class="accordion-header" id="headingFundador' + invitacion.id + '">' +
        '          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseFundador' + invitacion.id + '" aria-expanded="false" aria-controls="collapseFundador' + invitacion.id + '">' +
        '            <a href="#">' +
        '              <i class="far fa-handshake fa-lg"></i>' +
        '            </a>' +
        '            <div class="container">Reclutador</div>' +
        '          </button>' +
        '        </h2>' +
        '        <div id="collapseFundador' + invitacion.id + '" class="accordion-collapse collapse" aria-labelledby="headingFundador' + invitacion.id + '">' +
        '          <div class="accordion-body">' +
        '            <div class="card mb-3 h-100 shadow-3-strong">' +
        '              <div class="card-body">' +
        '                <div class="d-flex justify-content-between align-items-center">' +
        '                  <div class="d-flex align-items-center">' +
        '                    <img src="../../sources/images/img_user.png" style="width: 45px; height: 45px" class="rounded-circle"/>' +
        '                    <div class="ms-3">' +
        '                      <p class="fw-bold mb-1">' + invitacion.fundador + '</p>' +
        '                      <p class="text-muted mb-0"><i class="fas fa-envelope fa-xs"></i> ' + invitacion.correo + '</p>' +
        '                      <p class="text-muted mb-0"><i class="fas fa-phone fa-xs"></i> ' + invitacion.telefono + '</p>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '        </div>' +
        '      </div>' +
        '      <div class="accordion-item">' +
        '        <h2 class="accordion-header" id="headingComent' + invitacion.id + '">' +
        '          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseComent' + invitacion.id + '" aria-expanded="false" aria-controls="collapseComent' + invitacion.id + '">' +
        '            <a href="#">' +
        '              <i class="fas fa-comment-alt fa-lg"></i>' +
        '            </a>' +
        '            <div class="container">Comentario</div>' +
        '          </button>' +
        '        </h2>' +
        '        <div id="collapseComent' + invitacion.id + '" class="accordion-collapse collapse" aria-labelledby="headingComent' + invitacion.id + '">' +
        '          <div class="accordion-body">' + invitacion.comentario + '</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        btnRespuesta +
        '</div>' +
        '</div>';
}

/**
 * Realiza flujo para responder una Invitacion.
 * @param {int} idInvitacion Id del Desarrollador a Calificar.
 */
function onRespoderInvitacion(idInvitacion) {
    // Se obtiene la invitacion.
    const invitacion = UtilsSysrec.getObjectById(invitaciones, idInvitacion);

    // Se lanza Modal para responder una Invitacion.
    openModalResponder(invitacion)
        // Se hace la peticion al sevidor para registrar la Calificacion.
        .then(modalValues => APISysrec.fetchPutAndCheckRowsUpdate(
            API_URL.CONTROLLER_INVITACION, {
                'id': idInvitacion,
                'estado': modalValues.respuesta
            }))
        // Si se registro correctamente la Invitacion.
        .then(actualizados => AlertSysrec.okSuccessRedirect(CONST_MSG_ALERT.RESPONSE_INVITACTION.TITLE, CONST_MSG_ALERT.RESPONSE_INVITACTION.TEXT, WEB_URL.VIEW_INVITACIONES))
        // Si ocurrio una excepcion o error.
        .catch(error => ErrorSysrec.alert(error));
}

/**
 * Lanza Modal para responder una Invitacion.
 * @param {Invitacion} invitacion Invitacion del Desarrollador.
 * @returns {Promise} Modal.
 */
function openModalResponder(invitacion) {
    return ModalSysrec.openByHTML({
            title: 'Responder a',
            html: getHTMLResponder(invitacion),
            textBtnConfirm: 'Enviar <i class="fas fa-reply ms-1" ></i>',
            textBtnCancel: 'Cancelar <i class="far fa-times-circle ms-1" ></i>',
            funPreConfirm: () => {
                return {
                    'respuesta': document.getElementById('checkAceptar').checked ?
                        CONST_SHARED.ESTADO_INVITACION_ACEPTADA : CONST_SHARED.ESTADO_INVITACION_RECHAZADA
                };
            }
        })
        // Se valida la respuesta del Modal.
        .then(resModal => ModalSysrec.getValues(resModal))
}

/**
 * Regresa el HTML para Responder.
 * @param {Invitacion} invitacion Invitacion del Desarrollador.
 * @returns {string} HTML.
 */
function getHTMLResponder(invitacion) {

    return '<div class="container py-1">' +
        '  <img src="../../sources/images/img_user.png" style="width: 45px; height: 45px" class="rounded-circle"/>' +
        '  <div class="ms-3 py-2">' +
        '    <p class="fw-bold mb-1">' + invitacion.fundador + '</p>' +
        '    <p class="text-muted mb-0"><i class="fas fa-envelope fa-xs"></i> ' + invitacion.correo + '</p>' +
        '    <p class="text-muted mb-0"><i class="fas fa-phone fa-xs"></i> ' + invitacion.telefono + '</p>' +
        '  </div>' +
        '</div>' +
        '<div class="container py-3">' +
        '    <h4 class="mb-3"><i class="fab fa-sketch fa-xs"></i> ' + invitacion.proyecto + '</h4>' +
        '    <div class="col-md-12 btn-group">' +
        '      <input type="radio" class="btn-check" name="options" id="checkAceptar" autocomplete="off" checked />' +
        '      <label class="btn btn-outline-dark btn-lg btn-block" data-mdb-ripple-color="gray" for="checkAceptar">' +
        '        <i class="far fa-thumbs-up"></i> Aceptar' +
        '      </label>' +
        '      <input type="radio" class="btn-check" name="options" id="checkRechazar" autocomplete="off" />' +
        '      <label class="btn btn-outline-dark btn-lg btn-block" data-mdb-ripple-color="gray" for="checkRechazar">' +
        '        <i class="far fa-thumbs-down"></i> Rechazar' +
        '      </label>' +
        '    </div>' +
        '</div>';
}