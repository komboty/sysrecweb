class InvitacionProyecto {
    /**
     * @param {object} param0 
     * @param {int} param0.id
     * @param {string} param0.estado
     * @param {int} param0.idUsuario
     * @param {string} param0.nombre
     * @param {string} param0.correo
     * @param {string} param0.telefono
     */
    constructor({ id, estado, idUsuario, nombre, correo, telefono }) {
        this.id = id;
        this.estado = estado;
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
    }
}