<?php
require_once(dirname(__FILE__) . '/IGenericService.php');
/**
 * Interface que define los servicios de un Proyecto.
 */
interface IProyectoService extends IGenericService
{
    /**
     * Obtiene todos los Proyectos de un Usuario Fundador.
     * 
     * @param int $idFundador Id del Usuario Fundador.
     * @return array Proyectos.
     */
    public function getByFundador(int $idFundador): array;

    /**
     * Obtiene todos los Proyectos de un Usuario Invitado.
     * 
     * @param int $idInvitado Id del Usuario Invitado.
     * @return array Proyectos.
     */
    public function getByInvitado(int $idInvitado): array;
}