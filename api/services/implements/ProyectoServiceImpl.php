<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IProyectoService.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/IProyectoDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/IInvitacionDAO.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');

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


    public function save($proyecto)
    {
        return $this->proyectoDAO->save($proyecto);
    }

    public function getAll(): array
    {
        return $this->proyectoDAO->getAll();
    }

    public function getByFundador(int $idFundador): array
    {
        $proyectos = $this->proyectoDAO->getByFundador($idFundador);
        foreach ($proyectos as &$proyecto) {
            $proyecto[Consts::PROJECT_KEY_INVITACIONES] = $this->invitacionDAO->getByProyecto($proyecto[Consts::PROJECT_KEY_ID]);
        }
        return $proyectos;
    }

    public function getByInvitado(int $idInvitado): array
    {
        $projectsAceptados = $this->proyectoDAO->getByInvitado($idInvitado, Consts::INVITACION_ESTADO_ACEPTADA);
        foreach ($projectsAceptados as &$projectAceptado) {
            $invitaciones = $this->invitacionDAO->getByProyecto($projectAceptado[Consts::PROJECT_KEY_ID]);
            $projectAceptado[Consts::PROJECT_KEY_INVITACIONES] = $this->filterAceptadas($invitaciones);
        }
        return $projectsAceptados;
    }

    private function filterAceptadas(array $invitaciones): array
    {
        $filter = array_filter($invitaciones, function ($invitacion) {
            return ($invitacion[Consts::INVITACION_KEY_ESTADO] == Consts::INVITACION_ESTADO_ACEPTADA);
        });
        return array_values($filter);
    }
}
