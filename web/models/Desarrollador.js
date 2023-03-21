class Desarrollador {
    /**
     * @param {object} param0 
     * @param {int} param0.id
     * @param {string} param0.nombre
     * @param {string} param0.tipo
     * @param {string} param0.correo
     * @param {string} param0.telefono
     * @param {int} param0.edad
     * @param {CalificacionDesarrollador[]} param0.calificaciones
     */
    constructor({ id, nombre, tipo, correo, telefono, edad, calificaciones }) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.correo = correo;
        this.telefono = telefono;
        this.edad = edad;
        this.calificaciones = calificaciones;
        this.promedioTotal = calificaciones.length ? this.calculaPromedioTotal() : 0;
        this.habilidades = calificaciones.length ? this.getHabiliadades() : [];
        this.participaciones = calificaciones.length ? this.getParticipaciones() : [];
    }

    /**
     * Regresa el promedio total.
     */
    calculaPromedioTotal() {
        const promedioTotal = this.calificaciones.reduce((acc, cur) => acc + cur.puntos, 0) / this.calificaciones.length;
        return parseFloat(promedioTotal.toFixed(1));
    }

    /**
     * Regresa las Habiliades.
     */
    getHabiliadades() {
        // Se agrupa por Habilid y se ponen sus calificaciones.
        let groupByHabilid = {};
        for (const calificacion of this.calificaciones) {
            if (Object.hasOwnProperty.call(groupByHabilid, calificacion.nombreHabilidad)) {
                groupByHabilid[calificacion.nombreHabilidad].push(calificacion.puntos);
            } else {
                groupByHabilid[calificacion.nombreHabilidad] = [calificacion.puntos];
            }
        }

        // Se saca el promedio de cada Habilidad.
        let habilidades = [];
        let promedio = 0;
        let habilidad = null;
        for (const [nombreHabilidad, puntos] of Object.entries(groupByHabilid)) {
            promedio = puntos.reduce((acc, cur) => acc + cur, 0) / puntos.length;
            habilidad = new HabilidadDesarrollador({
                nombre: nombreHabilidad,
                promedio: parseFloat(promedio.toFixed(1))
            });
            habilidades.push(habilidad);
        }

        // Se ordenan los promedios.
        habilidades.sort(function(a, b) { return b.promedio - a.promedio });
        return habilidades;
    }

    /**
     * Regresa las Participaciones
     */
    getParticipaciones() {
        // Se agrupa por Proyecto y se ponen sus calificaciones.
        let groupByProyecto = {};
        let idProyecto = '';
        for (const calificacion of this.calificaciones) {
            idProyecto = calificacion.idProyecto + '';
            if (Object.hasOwnProperty.call(groupByProyecto, idProyecto)) {
                groupByProyecto[idProyecto].puntos.push(calificacion.puntos);
            } else {
                groupByProyecto[idProyecto] = {
                    'idProyecto': calificacion.idProyecto,
                    'nombreProyecto': calificacion.nombreProyecto,
                    'puntos': [calificacion.puntos]
                };
            }
        }

        // Se saca el promedio de cada Proyecto.
        let participaciones = [];
        let promedio = 0;
        let participacion = null;
        for (const [idProyecto, calificaProyecto] of Object.entries(groupByProyecto)) {
            promedio = calificaProyecto.puntos.reduce((acc, cur) => acc + cur, 0) / calificaProyecto.puntos.length;
            participacion = new ParticipacionDesarrollador({
                idProyecto: idProyecto,
                proyecto: calificaProyecto.nombreProyecto,
                promedio: parseFloat(promedio.toFixed(1))
            });
            participaciones.push(participacion);
        }

        // Se ordenan los promedios.
        participaciones.sort(function(a, b) { return b.promedio - a.promedio });
        return participaciones;
    }
}