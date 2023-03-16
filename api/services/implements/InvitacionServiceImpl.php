<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IInvitacionService.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/IInvitacionDAO.php');

/**
 * Clase que realiza los servicios de una Invitacion.
 */
class InvitacionServiceImpl implements IInvitacionService
{
    private $invitacionDAO;

    public function __construct(IInvitacionDAO $invitacionDAO)
    {
        $this->invitacionDAO = $invitacionDAO;
    }

    public function save($usuario)
    {
        return $this->invitacionDAO->save($usuario);
    }

    public function getAll(): array
    {
        return $this->invitacionDAO->getAll();
    }

    public function getByProyecto(int $idProyecto): array
    {
        return $this->invitacionDAO->getByProyecto($idProyecto);
    }

    public function getByUsuario(int $idUsuario): array
    {
        return $this->invitacionDAO->getByUsuario($idUsuario);
    }
}
