<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IUsuarioService.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/IUsuarioDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/ICalificacionDAO.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');

/**
 * Clase que realiza los servicios de un Usuario.
 */
class UsuarioServiceImpl implements IUsuarioService
{
    private $usuarioDAO;
    private $calificacionDAO;

    public function __construct(IUsuarioDAO $usuarioDAO, ICalificacionDAO $calificacionDAO)
    {
        $this->usuarioDAO = $usuarioDAO;
        $this->calificacionDAO = $calificacionDAO;
    }

    public function save($usuario)
    {
        return $this->usuarioDAO->save($usuario);
    }

    public function getAll(): array
    {
        return $this->usuarioDAO->getAll();
    }

    public function getByTipoUsuario(string $tipoUsuario): array
    {
        $usuarios = $this->usuarioDAO->getByTipoUsuario($tipoUsuario);                
        foreach ($usuarios as &$usuario) {            
            $usuario[Consts::USER_KEY_CALIFICACIONES] = $this->calificacionDAO->getByUsuario($usuario[Consts::USER_KEY_ID]);
        }
        return $usuarios;
    }

    public function getByCorreoAndContrasenia(string $correo, string $contrasenia)
    {
        return $this->usuarioDAO->getByCorreoAndContrasenia($correo, $contrasenia);
    }
}
