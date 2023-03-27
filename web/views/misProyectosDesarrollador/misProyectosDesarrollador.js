const badgeMisProyectos = document.getElementById('badgeMisProyectos');
const bodyMisProyectos = document.getElementById('bodyMisProyectos');
const cardLoad = document.getElementById('cardLoad');

// Clase deafult para el div de Mis Proyectos.
const classBodyMisProyectos = bodyMisProyectos.className;

// /**
//  * @type {Proyecto[]}
//  */
// let proyectos = [];
// // /**
// //  * @type {Habilidad[]}
// //  */
// let categoHabilidad = [];

/**
 * Obtiene los Proyectos que tiene el Reclutador.
 */
APISysrec.fetchGet(API_URL_WHIT_PARAMS.MIS_PROYECTOS, CONST_MSG_ALERT.PROJECT_NOT_FOUND.CODE)
    // Se ponen los Proyectos en HTML.
    .then(misProyectos => {
        cleanScreen();
        badgeMisProyectos.innerHTML = UtilsSysrec.getLengthArray(misProyectos);
        let proyecto = null;
        for (const miProyecto of misProyectos) {
            proyecto = new Proyecto(miProyecto);
            bodyMisProyectos.innerHTML += getHTMLProyecto(proyecto);
            // proyectos.push(proyecto);
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
        '              <i class="fas fa-info-circle fa-lg"></i>' +
        '            </a>' +
        '            <div class="container">Descripción</div>' +
        '          </button>' +
        '        </h2>' +
        '        <div id="collapseDesc' + proyecto.id + '" class="accordion-collapse collapse" aria-labelledby="headingDesc' + proyecto.id + '">' +
        '          <div class="accordion-body">' + proyecto.descripcion + '</div>' +
        '        </div>' +
        '      </div>' +
        '      <div class="accordion-item">' +
        '        <h2 class="accordion-header" id="headingFundador' + proyecto.id + '">' +
        '          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseFundador' + proyecto.id + '" aria-expanded="false" aria-controls="collapseFundador' + proyecto.id + '">' +
        '            <a href="#">' +
        '              <i class="far fa-handshake fa-lg"></i>' +
        '            </a>' +
        '            <div class="ms-2">Reclutador</div>' +
        '          </button>' +
        '        </h2>' +
        '        <div id="collapseFundador' + proyecto.id + '" class="accordion-collapse collapse" aria-labelledby="headingFundador' + proyecto.id + '">' +
        '          <div class="accordion-body">' +
        '            <div class="card mb-3 h-100 shadow-3-strong">' +
        '              <div class="card-body">' +
        '                <div class="d-flex justify-content-between align-items-center">' +
        '                  <div class="d-flex align-items-center">' +
        '                    <img src="../../sources/images/img_user.png" style="width: 45px; height: 45px" class="rounded-circle"/>' +
        '                    <div class="ms-3">' +
        '                      <p class="fw-bold mb-1">' + proyecto.fundador + '</p>' +
        '                      <p class="text-muted mb-0"><i class="fas fa-envelope fa-xs"></i> ' + proyecto.correo + '</p>' +
        '                      <p class="text-muted mb-0"><i class="fas fa-phone fa-xs"></i> ' + proyecto.telefono + '</p>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '        </div>' +
        '      </div>' +
        '      <div class="accordion-item">' +
        '        <h2 class="accordion-header" id="heading1Invi' + proyecto.id + '">' +
        '          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapse1Invi' + proyecto.id + '" aria-expanded="false" aria-controls="collapse1Invi' + proyecto.id + '">' +
        '            <a href="#">' +
        '              <i class="fas fa-users fa-lg"></i>' +
        '              <span class="badge rounded-pill badge-notification bg-dark">' + UtilsSysrec.getLengthArray(proyecto.invitaciones) + '</span>' +
        '            </a>' +
        '            <div class="container">Colaboradores</div>' +
        '          </button>' +
        '        </h2>' +
        '        <div id="collapse1Invi' + proyecto.id + '" class="accordion-collapse collapse" aria-labelledby="heading1Invi' + proyecto.id + '">' +
        '          <div class="accordion-body">' + getHTMLParticipantes(proyecto.invitaciones) + '</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '</div>';
}

/**
 * Regresa el HTML de los Participantes.
 * @param {InvitacionProyecto} participantes Participantes a poner formato.
 * @returns HTML
 */
function getHTMLParticipantes(participantes) {
    let html = '';
    for (const participante of participantes) {
        html += '<div class="card mb-3 h-100 shadow-3-strong">' +
            '  <div class="card-body">' +
            '    <div class="d-flex justify-content-between align-items-center">' +
            '      <div class="d-flex align-items-center">' +
            '        <img src="../../sources/images/img_user.png" style="width: 45px; height: 45px" class="rounded-circle"/>' +
            '        <div class="ms-3">' +
            '          <p class="fw-bold mb-1">' + participante.nombre + '</p>' +
            '          <p class="text-muted mb-0"><i class="fas fa-envelope fa-xs"></i> ' + participante.correo + '</p>' +
            '          <p class="text-muted mb-0"><i class="fas fa-phone fa-xs"></i> ' + participante.telefono + '</p>' +
            '        </div>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</div>';
    }
    return html;
}