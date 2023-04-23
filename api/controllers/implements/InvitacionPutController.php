<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/utils/Validacion.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');


/**
 *  Se atiende la peticion del cliente segun el verbo.
 */
switch ($_SERVER['REQUEST_METHOD']) {

        /**
     * Si se quiere actualizar una Invitacion en el sistema.
     * Peticion por JSON: { 'id': , <Atributo a Actualizar>: , }
     * Respuesta: {'actualizados': }
     */
    case 'POST':
        // Se verifica que el Usuario tenga una sesion activa, si no es asi, se termina el Script.
        Validacion::isSession();

        $json = json_decode(file_get_contents('php://input'), true);

        // Si no existen los campos obligatorios se manda error.
        if (!(isset($json[Consts::INVITACION_KEY_ID]))) {
            header(Validacion::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        $dependencys = new DependencyInjection();
        $invitacionService = $dependencys->getInvitacionService();

        // Si se quiere actualizar el esatdo de una Invitacion.
        if (isset($json[Consts::INVITACION_KEY_ESTADO])) {
            $rowActualizados = $invitacionService->updateEstado($json[Consts::INVITACION_KEY_ID], $json[Consts::INVITACION_KEY_ESTADO]);
        } else {
            header(Validacion::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        $response = array(Consts::UPDATE_KEY_ROWS => $rowActualizados);
        echo json_encode($response);
        break;
}
