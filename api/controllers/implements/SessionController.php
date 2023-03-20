<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/ConfigControllers.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');

/**
 *  Se atiende la peticion del cliente segun el verbo.
 */
switch ($_SERVER['REQUEST_METHOD']) {

        /**
     * Si se quiere obtener datos de la sesion actual del servidor.
     * Datos del Usuario: ?User (Sin valor)
     * Respuesta: {'id': ,'nombre': ,'tipo': ,'correo': ,'telefono': ,'edad': }
     */
    case 'GET':
        session_start();

        // Si se quiere obtener el Usuario de la sesion.
        if (isset($_GET[Consts::GET_SESSION_USERS])) {
            $response = $_SESSION[Consts::SESSION_KEY_USER];
        }

        echo json_encode($response);
        break;


        /**
         * Si se quiere iniciar sesion en el servidor.
         * Peticion por JSON: {'correo': , 'contrasenia': }
         * Respuesta: {'tipo': }
         */
    case 'POST':
        $json = json_decode(file_get_contents('php://input'), true);

        // Si no existen correo ni contrasenia en la peticion se manda error.
        if (!(isset($json[Consts::USER_KEY_CORREO]) && isset($json[Consts::USER_KEY_CONTRASENIA]))) {
            header(ConfigControllers::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        // Se busca el Usuario a loguearse.
        $dependencys = new DependencyInjection();
        $usuarioService = $dependencys->getUsuarioService();
        $usuario = $usuarioService->getByCorreoAndContrasenia($json[Consts::USER_KEY_CORREO], $json[Consts::USER_KEY_CONTRASENIA]);

        // Si no existe el Usuario en la base de datos se manda error.
        if (!isset($usuario)) {
            header(ConfigControllers::HEADER_STATUS_NOT_FOUND);
            return;
        }

        // Si existe el Usuario en la base de datos, se asigna a la sesion del servidor.
        session_start();
        $_SESSION[Consts::SESSION_KEY_USER] = $usuario;
        // Se regresa el tipo de Usuario.
        $response = array(Consts::USER_KEY_TIPO => $usuario[Consts::USER_KEY_TIPO]);
        echo json_encode($response);
        break;


        /**
         * Si se quiere eliminar la sesion del servidor. (Sin parametros)
         */
    case 'DELETE':
        session_start();
        session_destroy();
        break;
}
