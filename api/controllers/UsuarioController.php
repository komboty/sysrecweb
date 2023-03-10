<?php
require_once(dirname(__FILE__) . '/GenericController.php');
require_once(dirname(dirname(__FILE__)) . '/database/daos/UsuarioDAO.php');

/**
 * Clase que recibe las peticiones del cliente sobre Usuarios.
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
            $response = $this->usuarioDAO->getByTipoUsuario($parameters['tipo']);

            // Si se quiere obtener todos los Usuarios.
        } else {
            $response = $this->usuarioDAO->getAll();
        }

        echo json_encode($response);
    }

    protected function requestPost($body)
    {
    }
}

$usuarioController = new UsuarioController;
$usuarioController->request($_SERVER['REQUEST_METHOD'], $_GET, json_decode(file_get_contents('php://input'), true));
