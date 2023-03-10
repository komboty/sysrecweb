<?php
require_once(dirname(__FILE__) . '/GenericController.php');
require_once(dirname(dirname(__FILE__)) . '/database/daos/UsuarioDAO.php');

/**
 * Clase que recibe las peticiones del cliente sobre Login.
 */
class LoginController extends GenericController
{
    private $usuarioDAO;

    public function __construct()
    {
        $this->usuarioDAO = new UsuarioDAO();
    }

    protected function requestGet($parameters)
    {
        session_start();
        if (isset($_SESSION['user'])) {
            echo json_encode($_SESSION['user']);
            return;
        }

        echo json_encode(null);
    }

    protected function requestPost($body)
    {        
        // Se busca el Usuario a loguearse.
        if (isset($body['correo']) && isset($body['contrasenia'])) {
            $usuario = $this->usuarioDAO->getByCorreoAndContrasenia($body['correo'], $body['contrasenia']);

            // Si existe el Usuario en la base de datos.
            if (isset($usuario)) {
                session_start();
                $_SESSION['user'] = $usuario;
                echo json_encode(array('tipo' => $usuario['tipo']));
                return;
            }
        }

        // Si la peticion no tiene todos los datos o No existe el Usuario en la base de datos.
        echo json_encode(null);
    }
}

$loginController = new LoginController;
$loginController->request($_SERVER['REQUEST_METHOD'], $_GET, json_decode(file_get_contents('php://input'), true));
