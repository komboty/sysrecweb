<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/ConfigControllers.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');

$dependencys = new DependencyInjection();

session_start();
if (!isset($_SESSION[Consts::SESSION_KEY_USER])) {
    header(ConfigControllers::HEADER_STATUS_UNAUTHORIZED);
    return;
}

// Se reliza la peticion del cliente segun el verbo.
switch ($_SERVER['REQUEST_METHOD']) {
    
    case 'GET':
        $usuarioService = $dependencys->getUsuarioService();

        // Si se quiere obtener un Usuario por su tipo.        
        if (isset($_GET[Consts::USER_KEY_TIPO])) {
            $response = $usuarioService->getByTipoUsuario($_GET[Consts::USER_KEY_TIPO]);

            // Si se quiere obtener todos los Usuarios.
        } else {
            $response = $usuarioService->getAll();
        }

        echo json_encode($response);
        break;
}
