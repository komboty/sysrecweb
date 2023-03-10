<?php
require_once(dirname(__FILE__) . '/GenericController.php');
require_once(dirname(dirname(__FILE__)) . '/database/daos/UsuarioDAO.php');

/**
 * Clase que recibe las peticiones del cliente.
 */
class UsuarioController extends GenericController
{
    private $usuarioDAO;

    public function __construct()
    {
        $this->usuarioDAO = new UsuarioDAO();
    }

    protected function requestGet($parameters)
    {
        // Si se quiere obtener un Usuario por su tipo.
        if (isset($parameters['tipo'])) {
            $usuarios = $this->usuarioDAO->getByTipoUsuario($parameters['tipo']);

            // Si se quiere obtener todos los Usuarios.
        } else {
            $usuarios = $this->usuarioDAO->getAll();
        }

        echo json_encode($usuarios);
    }

    protected function requestPost($body)
    {
        // Si se quiere obtener un Usuario por su correo y contrasenia.
        if (isset($body['correo']) && isset($body['contrasenia'])) {
            $usuarios = $this->usuarioDAO->getByCorreoAndContrasenia($body['correo'], $body['contrasenia']);

            // .
        } else {
            $usuarios = null;
        }

        echo json_encode($usuarios);
    }
}

$usuarioController = new UsuarioController;
$usuarioController->request($_SERVER['REQUEST_METHOD'], $_GET, json_decode(file_get_contents('php://input'), true));
