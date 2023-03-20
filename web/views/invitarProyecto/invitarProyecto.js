const bodyDesarrolladores = document.getElementById('bodyDesarrolladores');
const cardLoad = document.getElementById('cardLoad');

/**
 * Obtiene Todos los Desarrolladores.
 */
fetch(API_URL_WHIT_PARAMS.USER_TIPO + CONST_SHARED.TIPO_DESARROLLADOR, {
        method: 'GET',
    })
    // Si se la peticion es correcta sigue el flujo, de lo contrario manda a catch.
    .then(res => isStatusOk(res, () => res.json()))
    // Se ponen los Desarrolladores en HTML.
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
    const promedios = getPromedios(desarrollador.calificaciones);
    const promedioTotal = getPromedioTotal(promedios);
    const colorCard = getColorByValue(promedioTotal);
    const textBadgePromedio = desarrollador.calificaciones.length ? getHTMLStars(promedioTotal) + ' ' + promedioTotal : 'Sin calificaciones';

    return '<div class="col">' +
        '<div class="card mb-3 h-100 shadow-3-strong border border-' + colorCard + '">' +
        '  <div class="card-body">' +
        '    <div class="d-flex justify-content-between align-items-center">' +
        '      <div class="d-flex align-items-center">' +
        '        <img src="../../sources/images/img_user.png" style="width: 45px; height: 45px" class="rounded-circle"/>' +
        '        <div class="ms-3">' +
        '          <p class="fw-bold mb-1">' + desarrollador.nombre + '</p>' +
        '          <p class="text-muted mb-0"><i class="fas fa-envelope fa-xs"></i> ' + desarrollador.correo + '</p>' +
        '          <p class="text-muted mb-0"><i class="fas fa-phone fa-xs"></i> ' + desarrollador.telefono + '</p>' +
        '          <p class="text-muted mb-0"><i class="fas fa-hiking fa-xs"></i> ' + desarrollador.edad + '</p>' +
        '          <span class="badge rounded-pill badge-' + colorCard + '">' + textBadgePromedio + '</span>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="accordion py-3">' +
        '      <div class="accordion-item">' +
        '        <h2 class="accordion-header" id="headingHabils' + desarrollador.id + '">' +
        '          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseHabils' + desarrollador.id + '" aria-expanded="false" aria-controls="collapseHabils' + desarrollador.id + '">' +
        '            <a href="#">' +
        '              <i class="fas fa-clipboard-list fa-lg"></i>' +
        '              <span class="badge rounded-pill badge-notification bg-dark">' + promedios.length + '</span>' +
        '            </a>' +
        '            <div class="container">Calificaciones</div>' +
        '          </button>' +
        '        </h2>' +
        '        <div id="collapseHabils' + desarrollador.id + '" class="accordion-collapse collapse" aria-labelledby="headingHabils' + desarrollador.id + '">' +
        '          <div class="accordion-body">' + getHTMLCalificaciones(promedios) + '</div>' +
        '        </div>' +
        '      </div>' +
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

/**
 * Obtiene el promedio de cada Habiliad.
 * @param {array} calificaciones Calificaciones de cada Habilidad.
 * @returns {array} [{habilidad: , promedio: }, ...]
 */
function getPromedios(calificaciones) {
    let habilidades = {};
    for (const calificacion of calificaciones) {
        if (Object.hasOwnProperty.call(habilidades, calificacion.nombreHabilidad)) {
            habilidades[calificacion.nombreHabilidad].push(calificacion.puntos);
        } else {
            habilidades[calificacion.nombreHabilidad] = [calificacion.puntos];
        }
    }

    let promedios = [];
    let promedio;
    for (const [habilidad, puntos] of Object.entries(habilidades)) {
        promedio = puntos.reduce((acc, cur) => acc + cur, 0) / puntos.length;
        promedios.push({
            'habilidad': habilidad,
            'promedio': parseFloat(promedio.toFixed(1))
        });
    }
    return promedios;
}

/**
 * Obtiene el promedio total.
 * @param {array} promedios [{habilidad: , promedio: }, ...]
 * @returns {float} promedio total.
 */
function getPromedioTotal(promedios) {
    const promedioTotal = promedios.reduce((acc, cur) => acc + cur.promedio, 0) / promedios.length;
    return promedioTotal.toFixed(1);
}

/**
 * Obtiene un color segun el valor.
 * @param {float} value Valor a obtener el color.
 * @returns {string} Color.
 */
function getColorByValue(value) {
    let color = 'secondary';

    if (value <= 5 && value > 3) {
        color = 'success';
    } else if (value <= 3 && value > 2) {
        color = 'warning';
    } else if (value <= 2 && value >= 0) {
        color = 'danger';
    }

    return color;
}

/**
 * Regresa el HTML de las Calificaciones.
 * @param {array} calificaciones [{habilidad: , promedio: }, ...]
 * @returns {string} HTML.
 */
function getHTMLCalificaciones(calificaciones) {
    let html = '';
    let color;
    for (const calificacion of calificaciones) {
        color = getColorByValue(calificacion.promedio);
        html += '<span class="badge  badge-' + color + '">' + calificacion.habilidad + ': ' + calificacion.promedio + '</span>';
    }
    return html;
}

function getHTMLStars(value) {
    let html = '';
    for (let index = 0; index < parseInt(value); index++) {
        html += '<i class="fas fa-star"></i>';
    }
    if (value % 1 > 0) {
        html += '<i class="fas fa-star-half-alt"></i>';
    }
    return html;
}