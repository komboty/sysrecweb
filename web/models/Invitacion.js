class Invitacion {
    /**
     * @param {object} param0 
     * @param {int} param0.id
     * @param {string} param0.estado
     * @param {string} param0.comentario
     * @param {string} param0.proyecto
     * @param {string} param0.descripcion
     * @param {string} param0.fundador
     * @param {string} param0.correo
     * @param {string} param0.telefono
     */
    constructor({ id, estado, comentario, proyecto, descripcion, fundador, correo, telefono }) {
        this.id = id;
        this.estado = estado;
        this.comentario = comentario;
        this.proyecto = proyecto;
        this.descripcion = descripcion;
        this.fundador = fundador;
        this.correo = correo;
        this.telefono = telefono;
    }
}