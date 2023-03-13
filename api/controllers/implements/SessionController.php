<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/ConfigControllers.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');

$dependencys = new DependencyInjection();

$body = json_decode(file_get_contents('php://input'), true);
session_start();

// Se reliza la peticion del cliente segun el verbo.
switch ($_SERVER['REQUEST_METHOD']) {

    case 'POST':
        // Si no existen correo ni contrasenia en la peticion se manda error.     
        if (!isset($body[Consts::USER_KEY_CORREO]) && !isset($body[Consts::USER_KEY_CONTRASENIA])) {
            header(ConfigControllers::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        // Se busca el Usuario a loguearse.
        $usuarioService = $dependencys->getUsuarioService();
        $usuario = $usuarioService->getByCorreoAndContrasenia($body[Consts::USER_KEY_CORREO], $body[Consts::USER_KEY_CONTRASENIA]);

        // Si no existe el Usuario en la base de datos.        
        if (!isset($usuario)) {
            header(ConfigControllers::HEADER_STATUS_NOT_FOUND);
            return;
        }

        // Si existe el Usuario en la base de datos, se asigna a la sesion del servidor.        
        $_SESSION[Consts::SESSION_KEY_USER] = $usuario;
        $response = array(Consts::USER_KEY_TIPO => $usuario[Consts::USER_KEY_TIPO]);
        echo json_encode($response);
        break;

    case 'DELETE':
        session_destroy();
        break;
}