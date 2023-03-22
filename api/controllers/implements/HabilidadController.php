<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/ConfigControllers.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');

/**
 *  Se atiende la peticion del cliente segun el verbo.
 */
switch ($_SERVER['REQUEST_METHOD']) {

        /**
     * Si se quiere obtener todas las Habilidades registradas en el sistema.
     * ?All, Sin valor.
     * Respuesta: [{'id': ,'nombre': ,'categoria': }, ...]
     */
    case 'GET':
        // Se verifica que el Usuario tenga una sesion activa, si no es asi, se manda "No autorizado".
        session_start();
        if (!isset($_SESSION[Consts::SESSION_KEY_USER])) {
            header(ConfigControllers::HEADER_STATUS_UNAUTHORIZED);
            return;
        }

        // Si no existen el parametro en la peticion se manda error.
        if (!isset($_GET[Consts::GET_ALL_HABILIDADES])) {
            header(ConfigControllers::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        $dependencys = new DependencyInjection();
        $habilidadService = $dependencys->getHabilidadService();
        $habilidades = $habilidadService->getAll();
        echo json_encode($habilidades);
        break;
}
