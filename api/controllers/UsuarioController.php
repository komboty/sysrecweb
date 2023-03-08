<?php
require_once(dirname(dirname(__FILE__)) . '/database/daos/UsuarioDAO.php');
/**
 * Archivo que recibe las peticiones del cliente.
 */
// header('Content-Type: application/json');
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST');
// header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Authorization, X-Requested-With');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $usuarioDAO = new UsuarioDAO();

        // Si se quiere obtener un Usuario por su tipo.
        if (isset($_GET['tipo'])) {
            $usuarios = $usuarioDAO->getByTipoUsuario($_GET['tipo']);

            // Si se quiere obtener todos los Usuarios.
        } else {
            $usuarios = $usuarioDAO->getAll();
        }

        echo json_encode($usuarios);
        break;

    case 'POST':
        $usuarioDAO = new UsuarioDAO();
        $json = json_decode(file_get_contents('php://input'), true);        

        // Si se quiere obtener un Usuario por su correo y contrasenia.
        if (isset($json['correo']) && isset($json['contrasenia'])) {            
            $usuarios = $usuarioDAO->getByCorreoAndContrasenia($json['correo'], $json['contrasenia']);

            // Si se quiere obtener todos los Usuarios.
        } else {
            $usuarios = array();
        }

        echo json_encode($usuarios);
        break;
}
