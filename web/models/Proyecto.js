class Proyecto {
    /**
     * @param {object} param0 
     * @param {int} param0.id
     * @param {string} param0.nombre
     * @param {string} param0.descripcion
     * @param {InvitacionProyecto[]} param0.invitaciones
     */
    constructor({ id, nombre, descripcion, invitaciones }) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.invitaciones = invitaciones.map(invitacion => new InvitacionProyecto(invitacion));
    }

    /**
     * Regresa todas las Invitaciones con el estado enviada.
     * @returns {InvitacionProyecto[]}
     */
    getInvitacionesEnviadas() {
        return this.invitaciones.filter(invitacion => invitacion.estado === CONST_SHARED.ESTADO_INVITACION_ENVIADA);
    }

    /**
     * Regresa todas las Invitaciones con el estado aceptada.
     * @returns {InvitacionProyecto[]}
     */
    getInvitacionesAceptadas() {
        return this.invitaciones.filter(invitacion => invitacion.estado === CONST_SHARED.ESTADO_INVITACION_ACEPTADA);
    }

    /**
     * Regresa todas las Invitaciones con el estado rechazada.
     * @returns {InvitacionProyecto[]}
     */
    getInvitacionesRechazadas() {
        return this.invitaciones.filter(invitacion => invitacion.estado === CONST_SHARED.ESTADO_INVITACION_RECHAZADA);
    }

    /**
     * Verifica si el Id de un Usuario se encunetra en las Invitaciones con el estado enviada.
     * @returns {boolean}
     */
    hasUserInInvitacionesEnviadas(idUser) {
        return this.getInvitacionesEnviadas().map(invitacion => invitacion.idUsuario).includes(idUser);
    }

    /**
     * Verifica si el Id de un Usuario se encunetra en las Invitaciones con el estado aceptada.
     * @returns {boolean}
     */
    hasUserInInvitacionesAceptadas(idUser) {
        return this.getInvitacionesAceptadas().map(invitacion => invitacion.idUsuario).includes(idUser);
    }

    /**
     * Regresa la Invitacion aceptada por un Usuario.
     * @param {int} idUser Id del Usuario que acepto la Invitacion.
     * @returns {InvitacionProyecto}
     */
    getInvitacionesAceptadasByIdUser(idUser) {
        return this.getInvitacionesAceptadas().filter(invitacion => invitacion.idUsuario === idUser)[0];
    }
}