<?php
require_once(dirname(dirname(__FILE__)) . '/utils/GenericController.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/IUsuarioDAO.php');
require_once(dirname(dirname(__FILE__))  . '/ConfigControllers.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');
require_once(dirname(dirname(dirname(__FILE__)))  . '/DependencyInjection.php');

/**
 * Clase que recibe las peticiones del cliente sobre su sesion.
 */
class SessionController extends GenericController
{
    private IUsuarioDAO $usuarioDAO;

    public function __construct(IUsuarioDAO $usuarioDAO)
    {
        $this->usuarioDAO = $usuarioDAO;
    }

    protected function requestGet($parameters)
    {
        echo json_encode($_SESSION[Consts::SESSION_KEY_USER]);
    }

    protected function requestPost($body)
    {
        // Si no existen correo ni contrasenia en la peticion se manda error.     
        if (!isset($body[Consts::USER_KEY_CORREO]) && !isset($body[Consts::USER_KEY_CONTRASENIA])) {
            header(ConfigControllers::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        // Se busca el Usuario a loguearse.
        $usuario = $this->usuarioDAO->getByCorreoAndContrasenia($body[Consts::USER_KEY_CORREO], $body[Consts::USER_KEY_CONTRASENIA]);

        // Si no existe el Usuario en la base de datos.        
        if (!isset($usuario)) {
            header(ConfigControllers::HEADER_STATUS_NOT_FOUND);
            return;
        }

        // Si existe el Usuario en la base de datos, se inicia sesion en el servidor.
        session_start();
        $_SESSION[Consts::SESSION_KEY_USER] = $usuario;
        $response = array(Consts::USER_KEY_TIPO => $usuario[Consts::USER_KEY_TIPO]);
        echo json_encode($response);
    }

    protected function requestDelete($body)
    {
        session_destroy();
    }
}

// Se recibe las peticiones del cliente. 
$dependencys = new DependencyInjection();
$sessionController = new SessionController($dependencys->getUsuarioDAO());

// Si se quiere loguear un Usuario se debe quitar la revision de sesion.
$checkSession = $_SERVER['REQUEST_METHOD'] != 'POST';
$sessionController->request($_SERVER['REQUEST_METHOD'], $_GET, json_decode(file_get_contents('php://input'), true), $checkSession);
