const badgeMisCalificaciones = document.getElementById('badgeMisCalificaciones');
const titleCalificaicones = document.getElementById('titleCalificaicones');
const bodyCalificaicones = document.getElementById('bodyCalificaicones');
const bodyPromedios = document.getElementById('bodyPromedios');
const cardLoad = document.getElementById('cardLoad');

const KEY_PROYECTO = 'proyecto';
const KEY_HABILIDAD = 'habilidad';
const calificaciones = {};
const textCard = {};

/**
 * Obtiene Todas las Califiaciones.
 */
APISysrec.fetchGet(API_URL_WHIT_PARAMS.MIS_CALIFICACIONES, CONST_MSG_ALERT.RATINGS_NOT_FOUND.CODE)
    // Se ponen las Califiaciones en HTML.
    .then(resCalifiaciones => {
        cleanScreen();
        badgeMisCalificaciones.innerHTML = UtilsSysrec.getLengthArray(resCalifiaciones);
        const desarrollador = new Desarrollador({ calificaciones: resCalifiaciones });
        bodyPromedios.innerHTML = getHTMLPromedios(desarrollador);
        calificaciones[KEY_PROYECTO] = UtilsSysrec.groupByValue(resCalifiaciones, 'nombreProyecto');
        calificaciones[KEY_HABILIDAD] = UtilsSysrec.groupByValue(resCalifiaciones, 'nombreHabilidad');
        textCard[KEY_PROYECTO] = { 'iconTitle': '<i class="fab fa-sketch"></i>', 'iconKey': '<i class="fas fa-award fa-xs"></i>', 'key': 'nombreHabilidad' };
        textCard[KEY_HABILIDAD] = { 'iconTitle': '<i class="fas fa-award"></i>', 'iconKey': '<i class="fab fa-sketch fa-xs"></i>', 'key': 'nombreProyecto' };
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
    titleCalificaicones.innerHTML = '';
    bodyCalificaicones.innerHTML = '';
    bodyPromedios.innerHTML = '';
    cardLoad.innerHTML = '';
}


/**
 * Regresa HTML con los promedios de las Calificaiones.
 * @param {Desarrollador} desarrollador Desarrollador con Calificaiones a poner formato.
 * @returns {string} HTML.
 */
function getHTMLPromedios(desarrollador) {
    return '<div class="card mb-3 shadow-3-strong">' +
        '<h5 class="card-header text-center py-4">Promedio' +
        '    <span class="badge rounded-pill badge-' + UtilsSysrec.getColorByValue(desarrollador.promedioTotal) + '">' + UtilsSysrec.getRating(desarrollador.promedioTotal) + '</span>' +
        '</h5>' +
        '<div class="card-body">' +
        '  <div class="accordion">' +
        '    <div class="accordion-item">' +
        '      <h2 class="accordion-header" id="headingHabils">' +
        '        <button class="accordion-button" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseHabils" aria-expanded="true" aria-controls="collapseHabils">' +
        '          <a href="#">' +
        '            <i class="fas fa-award fa-lg"></i>' +
        '            <span class="badge rounded-pill badge-notification bg-dark">' + UtilsSysrec.getLengthArray(desarrollador.habilidades) + '</span>' +
        '          </a>' +
        '          <div class="container">Por Habilidades</div>' +
        '        </button>' +
        '      </h2>' +
        '      <div id="collapseHabils" class="accordion-collapse collapse show" aria-labelledby="headingHabils">' +
        '        <div class="accordion-body">' + getHTMLHabilidades(desarrollador.habilidades) + '</div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="accordion-item">' +
        '      <h2 class="accordion-header" id="headingParticipa">' +
        '        <button class="accordion-button" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseParticipa" aria-expanded="true" aria-controls="collapseParticipa">' +
        '          <a href="#">' +
        '            <i class="fas fa-users fa-lg"></i>' +
        '            <span class="badge rounded-pill badge-notification bg-dark">' + UtilsSysrec.getLengthArray(desarrollador.participaciones) + '</span>' +
        '          </a>' +
        '          <div class="container">Por Colaboraciones</div>' +
        '        </button>' +
        '      </h2>' +
        '      <div id="collapseParticipa" class="accordion-collapse collapse show" aria-labelledby="headingParticipa">' +
        '        <div class="accordion-body">' + getHTMLParticipaciones(desarrollador.participaciones) + '</div>' +
        '      </div>' +
        '    </div>' +
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
    for (const habilidad of habilidades) {
        html += '<span class="badge badge-secondary" style="cursor: pointer;" ' +
            '           onclick="getHTMLCalificaciones(' + "'" + habilidad.nombre + "', '" + KEY_HABILIDAD + "'" + ')">' +
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
    for (const participacion of participaciones) {
        html += '<span class="badge badge-secondary" style="cursor: pointer;" ' +
            '           onclick="getHTMLCalificaciones(' + "'" + participacion.proyecto + "', '" + KEY_PROYECTO + "'" + ')">' +
            participacion.proyecto + ': ' + participacion.promedio + ' ' + UtilsSysrec.getHTMLStars(participacion.promedio, 'fa-xs') +
            '</span> ';
    }
    return html;
}

/**
 * Regresa HTML con las Calificaiones.
 * @param {string} nombre Nombre de las calificacion.
 * @param {string} filtro Grupo de calificacion (Habilidad o Proyecto).
 * @returns {string} HTML.
 */
function getHTMLCalificaciones(nombre, filtro) {
    let html = '';
    for (const calificacion of calificaciones[filtro][nombre]) {
        html += '<div class="col">' +
            '<div class="card mb-0 h-100 shadow-3-strong">' +
            '  <div class="card-body mb-0">' +
            '    <h5 class="text-muted mb-2">' + UtilsSysrec.getHTMLStars(calificacion.puntos, 'fa-xs') + ' ' + calificacion.puntos + '</h5>' +
            '    <h6 class="fw-bold mb-0">' + textCard[filtro].iconKey + ' ' + calificacion[textCard[filtro].key] + '</h6>' +
            '  </div>' +
            '  <div class="accordion">' +
            '    <div class="accordion-item">' +
            '      <h1 class="accordion-header" id="headingComent' + calificacion.id + '">' +
            '        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseComent' + calificacion.id + '" aria-expanded="false" aria-controls="collapseComent' + calificacion.id + '">' +
            '          <a href="#"><i class="fas fa-comment-alt"></i></a>' +
            '          <div class="container">Comentario</div>' +
            '        </button>' +
            '      </h1>' +
            '      <div id="collapseComent' + calificacion.id + '" class="accordion-collapse collapse" aria-labelledby="headingComent' + calificacion.id + '">' +
            '        <div class="accordion-body">' + calificacion.comentario + '</div>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</div>' +
            '</div>';
    }

    titleCalificaicones.innerHTML = '<div class="card mb-3 shadow-3-strong">' +
        '  <div class="card-body mb-0">' +
        '          <h4 class="mb-0">' +
        textCard[filtro].iconTitle +
        '            <span class="badge rounded-pill badge-notification bg-dark">' + UtilsSysrec.getLengthArray(calificaciones[filtro][nombre]) + '</span> ' +
        nombre +
        '          </h4>' +
        '  </div>' +
        '</div>' +
        '</div>';
    bodyCalificaicones.innerHTML = html;
    UtilsSysrec.resetAnimation(titleCalificaicones, 'animaSlideFromRight');
    UtilsSysrec.resetAnimation(bodyCalificaicones, 'animaSlideFromRight');
}