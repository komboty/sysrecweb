<?php
require_once(dirname(__FILE__) . '/IGenericDAO.php');
/**
 * Interface que define las consultas a la tabla de Calificacion de la base de datos.
 */
interface ICalificacionDAO extends IGenericDAO
{
    /**
     * Obtiene todas las Calificaciones de un Usuario.
     * 
     * @param int $idUsuario Id del Usuario.
     * @return array Calificaciones encontradas.
     */
    public function getByUsuario(int $idUsuario): array;
}
