<?php
require_once(dirname(dirname(__FILE__)) . '/database/daos/UsuarioDAO.php');
/**
 * Archivo que recibe las peticiones del cliente.
 */

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':        
        $usuarioDAO = new UsuarioDAO();

        if (isset($_GET['tipo'])) {            
            $usuarios = $usuarioDAO->getByTipoUsuario($_GET['tipo']);
        } else {
            $usuarios = $usuarioDAO->getAll();
        }

        echo json_encode($usuarios);
        break;
}
