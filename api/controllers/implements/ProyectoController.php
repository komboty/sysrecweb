<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/ConfigControllers.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');

/**
 *  Se atiende la peticion del cliente segun el verbo.
 */
switch ($_SERVER['REQUEST_METHOD']) {

        /**
     *  Si se quiere obtener uno o varios Proyectos registrados en el sistema.
     */
    case 'GET':
        // Se verifica que el Usuario tenga una sesion activa, si no es asi, se manda "No autorizado".
        session_start();
        if (!isset($_SESSION[Consts::SESSION_KEY_USER])) {
            header(ConfigControllers::HEADER_STATUS_UNAUTHORIZED);
            return;
        }

        // Si no existen el parametro en la peticion se manda error.
        if (!isset($_GET[Consts::GET_MIS_PROYECTOS])) {
            header(ConfigControllers::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        $dependencys = new DependencyInjection();
        $proyectoService = $dependencys->getProyectoService();

        // Se obtenen los Proyectos del Usuario logueado segun su tipo.
        switch ($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_TIPO]) {

            case Consts::USER_TIPO_DESARROLLADOR:
                $response = $proyectoService->getByInvitado($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_ID]);
                break;

            case Consts::USER_TIPO_RECLUTADOR:
                $response = $proyectoService->getByFundador($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_ID]);
                break;

                // Si el usuario no tiene un Rol de los anteriores, se manda "No autorizado".
            default:
                header(ConfigControllers::HEADER_STATUS_UNAUTHORIZED);
                return;
                break;
        }

        echo json_encode($response);
        break;
}
