<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/ICalificacionService.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/ICalificacionDAO.php');

/**
 * Clase que realiza los servicios de una Calificacion.
 */
class CalificacionServiceImpl implements ICalificacionService
{
    private $calificacionDAO;

    public function __construct(ICalificacionDAO $calificacionDAO)
    {
        $this->calificacionDAO = $calificacionDAO;
    }

    public function save($usuario)
    {
        return $this->calificacionDAO->save($usuario);
    }

    public function getAll(): array
    {
        return $this->calificacionDAO->getAll();
    }

    public function getByUsuario(int $idUsuario): array
    {
        return $this->calificacionDAO->getByUsuario($idUsuario);
    }
}
