<?php
require_once(dirname(dirname(__FILE__)) . '/database/daos/UsuarioDAO.php');
/**
 * Archivo que recibe las peticiones del cliente.
 */

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $usuarioDAO = new UsuarioDAO();

        // Si se quiere obtener un Usuario por su tipo.
        if (isset($_GET['tipo'])) {
            $usuarios = $usuarioDAO->getByTipoUsuario($_GET['tipo']);

            // Si se quiere obtener un Usuario por su correo y contrasenia.
        } elseif (isset($_GET['correo']) && isset($_GET['contrasenia'])) {
            $usuarios = $usuarioDAO->getByCorreoAndContrasenia($_GET['correo'], $_GET['contrasenia']);

            // Si se quiere obtener todos los Usuarios.
        } else {
            $usuarios = $usuarioDAO->getAll();
        }

        echo json_encode($usuarios);
        break;
}
