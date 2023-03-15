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
        console.log(misProyectos);

        for (const proyecto of misProyectos) {
            bodyMisProyectos.innerHTML += '<div class="col">' +
                '<div class="card h-100 shadow-3-strong">' +
                // '  <img src="" class="card-img-top"/>' +
                // '  <h5 class="card-header">' + proyecto.nombre + '</h5>' +
                '  <div class="card-body">' +
                '    <h5 class="card-title">' + proyecto.nombre + '</h5>' +
                '      <p class="card-text">' + proyecto.descripcion + '</p>' +
                '  </div>' +
                '  <div class="card-footer">' +
                '    <small class="text-muted"> Colaboradores:' +
                '        <ul class="list-group list-group-light list-group-small">' +
                '          <li class="list-group-item px-4">Cras justo odio</li>' +
                '          <li class="list-group-item px-4">Dapibus ac facilisis in</li>' +
                '          <li class="list-group-item px-4">Vestibulum at eros</li>' +
                '        </ul>' +
                '    </small>' +
                '  </div>' +
                '</div>' +
                '</div>'
        }

    })
    .catch(error => error.message);