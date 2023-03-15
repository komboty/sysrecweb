<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IProyectoService.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/IProyectoDAO.php');

/**
 * Clase que realiza los servicios de un Proyecto.
 */
class ProyectoServiceImpl implements IProyectoService
{
    private $proyectoDAO;

    public function __construct(IProyectoDAO $proyectoDAO)
    {
        $this->proyectoDAO = $proyectoDAO;
    }

    public function save($usuario)
    {
        return $this->proyectoDAO->save($usuario);
    }

    public function getAll(): array
    {
        return $this->proyectoDAO->getAll();
    }

    public function getByFundador(int $idFundador): array
    {
        return $this->proyectoDAO->getByFundador($idFundador);
    }

    public function getByInvitado(int $idInvitado): array
    {
        return $this->proyectoDAO->getByInvitado($idInvitado);
    }
}
