<?php
require_once(dirname(__FILE__) . '/GenericController.php');
require_once(dirname(dirname(__FILE__)) . '/database/daos/UsuarioDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/shared/Consts.php');

/**
 * Clase que recibe las peticiones del cliente sobre su sesion.
 */
class SessionController extends GenericController
{
    private $usuarioDAO;

    public function __construct()
    {
        $this->usuarioDAO = new UsuarioDAO();
    }

    protected function requestGet($parameters)
    {
        session_start();
        // Si existe sesion del Usuario en el servidor.
        if (isset($_SESSION[Consts::SESSION_KEY_USER])) {
            echo json_encode($_SESSION[Consts::SESSION_KEY_USER]);
            return;
        }

        echo json_encode(null);
    }

    protected function requestPost($body)
    {        
        // Se busca el Usuario a loguearse.
        if (isset($body[Consts::USER_KEY_CORREO]) && isset($body[Consts::USER_KEY_CONTRASENIA])) {
            $usuario = $this->usuarioDAO->getByCorreoAndContrasenia($body[Consts::USER_KEY_CORREO], $body[Consts::USER_KEY_CONTRASENIA]);

            // Si existe el Usuario en la base de datos, se inicia sesion en el servidor.
            if (isset($usuario)) {
                session_start();
                $_SESSION[Consts::SESSION_KEY_USER] = $usuario;
                $response = array(Consts::USER_KEY_TIPO => $usuario[Consts::USER_KEY_TIPO]);
                echo json_encode($response);
                return;
            }
        }

        // Si la peticion no tiene todos los datos o No existe el Usuario en la base de datos.
        echo json_encode(null);
    }

    protected function requestDelete($body)
    {
        session_start();
        session_destroy();
    }
}

$sessionController = new SessionController;
$sessionController->request($_SERVER['REQUEST_METHOD'], $_GET, json_decode(file_get_contents('php://input'), true));
