<?php
require_once(dirname(dirname(__FILE__)) . '/utils/GenericController.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/database/daos/interfaces/IUsuarioDAO.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');

/**
 * Clase que recibe las peticiones del cliente sobre Usuarios.
 */
class UsuarioController extends GenericController
{
    private IUsuarioDAO $usuarioDAO;

    public function __construct(IUsuarioDAO $usuarioDAO)
    {
        $this->usuarioDAO = $usuarioDAO;
    }

    protected function requestGet($parameters)
    {
        // Si se quiere obtener un Usuario por su tipo.
        if (isset($parameters[Consts::USER_KEY_TIPO])) {
            $response = $this->usuarioDAO->getByTipoUsuario($parameters[Consts::USER_KEY_TIPO]);

            // Si se quiere obtener todos los Usuarios.
        } else {
            $response = $this->usuarioDAO->getAll();
        }

        echo json_encode($response);
    }

    protected function requestPost($body)
    {
    }

    protected function requestDelete($body)
    {
    }
}

// Se recibe las peticiones del cliente. 
$dependencys = new DependencyInjection();
$usuarioController = new UsuarioController($dependencys->getUsuarioDAO());
$usuarioController->request($_SERVER['REQUEST_METHOD'], $_GET, json_decode(file_get_contents('php://input'), true));
