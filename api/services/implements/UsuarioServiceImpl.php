<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IUsuarioService.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/IUsuarioDAO.php');

/**
 * Clase que realiza los servicios de un Usuario.
 */
class UsuarioServiceImpl implements IUsuarioService
{
    private $usuarioDAO;

    public function __construct(IUsuarioDAO $usuarioDAO)
    {
        $this->usuarioDAO = $usuarioDAO;
    }

    public function getAll(): array
    {
        return $this->usuarioDAO->getAll();
    }

    public function getByTipoUsuario(string $tipoUsuario): array
    {
        return $this->usuarioDAO->getByTipoUsuario($tipoUsuario);
    }

    public function getByCorreoAndContrasenia(string $correo, string $contrasenia)
    {
        return $this->usuarioDAO->getByCorreoAndContrasenia($correo, $contrasenia);
    }
}
