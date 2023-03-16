<?php
require_once(dirname(__FILE__) . '/IGenericService.php');
/**
 * Interface que define los servicios de una Invitacion.
 */
interface IInvitacionService extends IGenericService
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