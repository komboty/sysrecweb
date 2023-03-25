<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/utils/Validacion.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');


/**
 *  Se atiende la peticion del cliente segun el verbo.
 */
switch ($_SERVER['REQUEST_METHOD']) {

        /**
     * Si se quiere obtener todas las Invitaciones registradas en el sistema.
     * ?All, Sin valor.
     * Respuesta: [{'id': ,'estado': ,'proyecto': ,'descripcion': ,'fundador': ,'correo': ,'telefono': }, ...]
     */
    case 'GET':
        // Se verifica que el Usuario tenga una sesion activa, si no es asi, se termina el Script.
        Validacion::isSession();

        // Si no existen el parametro en la peticion se manda error.
        if (!isset($_GET[Consts::GET_ALL_INVITACIONES])) {
            header(Validacion::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        $dependencys = new DependencyInjection();
        $invitacionesService = $dependencys->getInvitacionService();

        // Se obtenen las Invitaciones del Usuario logueado
        $invitaciones = $invitacionesService->getByUsuario($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_ID]);

        // Si no existen Invitaciones en el sistema se manda error.
        if (empty($invitaciones)) {
            header(Validacion::HEADER_STATUS_NOT_FOUND);
            return;
        }

        echo json_encode($invitaciones);
        break;


        /**
     * Si se quiere registra una Invitacion en el sistema.
     * Peticion por JSON: { 'idUsuario': , 'idProyecto': , 'comentario': }
     * Respuesta: {'id': }
     */
    case 'POST':
        // Se verifica que el Usuario tenga una sesion activa y de tipo Reclutador, si no es asi, se termina el Script.
        Validacion::isSessionReclutador();

        $json = json_decode(file_get_contents('php://input'), true);

        // Si no existen los campos obligatorios se manda error.
        if (!(isset($json[Consts::INVITACION_KEY_ID_USUARIO]) &&
            isset($json[Consts::INVITACION_KEY_ID_PROYECTO]) &&
            isset($json[Consts::INVITACION_KEY_COMENTARIO]))) {

            header(Validacion::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        // Se registra la invitacion.
        $dependencys = new DependencyInjection();
        $invitacionService = $dependencys->getInvitacionService();
        $idInvitacion = $invitacionService->save($json);
        // Se regresa el id si se registro correctamente, sino es null.
        $response = array(Consts::INVITACION_KEY_ID => $idInvitacion);
        echo json_encode($response);
        break;
}
