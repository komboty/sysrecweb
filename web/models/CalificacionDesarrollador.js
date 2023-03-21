class CalificacionDesarrollador {
    /**
     * @param {object} param0
     * @param {string} param0.id
     * @param {int} param0.idProyecto
     * @param {string} param0.nombreProyecto
     * @param {int} param0.idHabilidad
     * @param {string} param0.nombreHabilidad
     * @param {int} param0.puntos
     * @param {string} param0.comentario
     */
    constructor({ id, idProyecto, nombreProyecto, idHabilidad, nombreHabilidad, puntos, comentario }) {
        this.id = id;
        this.idProyecto = idProyecto;
        this.nombreProyecto = nombreProyecto;
        this.idHabilidad = idHabilidad;
        this.nombreHabilidad = nombreHabilidad;
        this.puntos = puntos;
        this.comentario = comentario;
    }
}