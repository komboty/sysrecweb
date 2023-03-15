<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/ConfigControllers.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');

/**
 *  Se atiende la peticion del cliente segun el verbo.
 */
switch ($_SERVER['REQUEST_METHOD']) {

        /**
     *  Si se quiere obtener uno o varios Usuarios registrados en el sistema.
     */
    case 'GET':
        // Se verifica que el usuario tenga una sesion activa, si no es asi, se manda "No autorizado".
        session_start();
        if (!isset($_SESSION[Consts::SESSION_KEY_USER])) {
            header(ConfigControllers::HEADER_STATUS_UNAUTHORIZED);
            return;
        }

        $dependencys = new DependencyInjection();
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


        /**
         *  Si se quiere registra un Usuario en el sistema. (Peticion por JSON)
         */
    case 'POST':
        $json = json_decode(file_get_contents('php://input'), true);

        // Si no existen los campos obligatorios se manda error.
        if (!(isset($json[Consts::USER_KEY_TIPO]) && isset($json[Consts::USER_KEY_NOMBRE]) &&
            isset($json[Consts::USER_KEY_CORREO]) && isset($json[Consts::USER_KEY_CONTRASENIA]) &&
            isset($json[Consts::USER_KEY_TELEFONO]))) {

            header(ConfigControllers::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        // Se registra el Usuario.
        $dependencys = new DependencyInjection();
        $usuarioService = $dependencys->getUsuarioService();        
        $idUsuario = $usuarioService->save($json);      
        // Se regresa el id si se registro correctamente, sino es null.
        $response = array(Consts::USER_KEY_ID => $idUsuario);
        echo json_encode($response);
        break;
}
