<?php
require_once(dirname(__FILE__) . '/IGenericDAO.php');
/**
 * Interface que define las consultas a la tabla de Invitacion de la base de datos.
 */
interface IInvitacionDAO extends IGenericDAO
{
    /**
     * Obtiene todas las Invitaciones de un Proyecto.
     * 
     * @param int $idProyecto Id del Proyecto.
     * @return array Invitaciones encontradas.
     */
    public function getByProyecto(int $idProyecto): array;

    /**
     * Obtiene todas las Invitaciones de un Usuario.
     * 
     * @param int $idUsuario Id del Usuario.
     * @return array Invitaciones encontradas.
     */
    public function getByUsuario(int $idUsuario): array;
}
