<?php
require_once(dirname(__FILE__) . '/IGenericService.php');
/**
 * Interface que define los servicios de una Calificacion.
 */
interface ICalificacionService extends IGenericService
{
    /**
     * Obtiene todas las Calificaciones de un Usuario.
     * 
     * @param int $idUsuario Id del Usuario.
     * @return array Calificaciones encontradas.
     */
    public function getByUsuario(int $idUsuario): array;
}