<?php

/**
 * Clase con la constantes compartidas por la api y la web.
 */
class Consts
{
    const UPDATE_KEY_ROWS = 'actualizados';

    /**
     * Constantes de Usuarios
     */
    const SESSION_KEY_USER = 'user';
    
    const USER_KEY_ID = 'id';
    const USER_KEY_TIPO = 'tipo';
    const USER_KEY_NOMBRE = 'nombre';
    const USER_KEY_CORREO = 'correo';
    const USER_KEY_CONTRASENIA = 'contrasenia';    
    const USER_KEY_TELEFONO = 'telefono';
    const USER_KEY_EDAD = 'edad';
    const USER_KEY_CURRICULUM = 'curriculum';
    const USER_KEY_CALIFICACIONES = 'calificaciones';

    const USER_TIPO_DESARROLLADOR = 'Desarrollador';
    const USER_TIPO_RECLUTADOR = 'Reclutador';

    const GET_ALL_USERS = 'All';
    const GET_SESSION_USERS = 'User';
    const GET_MIS_PROYECTOS = 'MisProyectos';
    const GET_ALL_HABILIDADES = 'All';
    const GET_ALL_INVITACIONES = 'All';


    /**
     * Constantes de Proyectos
     */
    const PROJECT_KEY_ID = 'id';
    const PROJECT_KEY_ID_FUNDADOR = 'idFundador';
    const PROJECT_KEY_NOMBRE = 'nombre';
    const PROJECT_KEY_DESCRIPCION = 'descripcion';
    const PROJECT_KEY_INVITACIONES = 'invitaciones';


    /**
     * Constantes de Invitaciones
     */
    const INVITACION_KEY_ID = 'id';
    const INVITACION_KEY_ESTADO = 'estado';
    const INVITACION_KEY_ID_USUARIO = 'idUsuario';
    const INVITACION_KEY_ID_PROYECTO = 'idProyecto';
    const INVITACION_KEY_COMENTARIO = 'comentario';

    const INVITACION_ESTADO_ENVIADA = 'Enviada';

    /**
     * Constantes de Calificacion
     */
    const CALIFICACION_KEY_ID = 'id';    
    const CALIFICACION_KEY_ID_USUARIO = 'idUsuario';
    const CALIFICACION_KEY_ID_PROYECTO = 'idProyecto';
    const CALIFICACION_KEY_ID_HABILIDAD = 'idHabilidad';
    const CALIFICACION_KEY_PUNTOS = 'puntos';
    const CALIFICACION_KEY_COMENTARIO = 'comentario';
}
