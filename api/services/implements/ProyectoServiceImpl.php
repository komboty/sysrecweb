<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IProyectoService.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/IProyectoDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/IInvitacionDAO.php');

/**
 * Clase que realiza los servicios de un Proyecto.
 */
class ProyectoServiceImpl implements IProyectoService
{
    private $proyectoDAO;
    private $invitacionDAO;

    public function __construct(IProyectoDAO $proyectoDAO, IInvitacionDAO $invitacionDAO)
    {
        $this->proyectoDAO = $proyectoDAO;
        $this->invitacionDAO = $invitacionDAO;
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
        $proyectos = $this->proyectoDAO->getByFundador($idFundador);        
        for ($i=0; $i < count($proyectos); $i++) {
            $proyectos[$i]['invitaciones'] = $this->invitacionDAO->getByProyecto($proyectos[$i]['id']);
        }
        return $proyectos;
    }

    public function getByInvitado(int $idInvitado): array
    {
        return $this->proyectoDAO->getByInvitado($idInvitado);
    }
}
