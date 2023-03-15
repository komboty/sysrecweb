<?php
require_once(dirname(__FILE__) . '/IGenericDAO.php');
/**
 * Interface que define las consultas a la tabla de Proyecto de la base de datos.
 */
interface IProyectoDAO extends IGenericDAO
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
