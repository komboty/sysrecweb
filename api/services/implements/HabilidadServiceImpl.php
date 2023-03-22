<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IHabilidadService.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/IHabilidadDAO.php');

/**
 * Clase que realiza los servicios de una Habilidad.
 */
class HabilidadServiceImpl implements IHabilidadService
{
    private $habilidadDAO;

    public function __construct(IHabilidadDAO $habilidadDAO)
    {
        $this->habilidadDAO = $habilidadDAO;
    }

    public function save($usuario)
    {
        return $this->habilidadDAO->save($usuario);
    }

    public function getAll(): array
    {
        return $this->habilidadDAO->getAll();
    }
}
