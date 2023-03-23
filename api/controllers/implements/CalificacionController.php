<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/utils/Validacion.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');



/**
 *  Se atiende la peticion del cliente segun el verbo.
 */
switch ($_SERVER['REQUEST_METHOD']) {

        /**
     * Si se quiere registra una Calificacion en el sistema. 
     * Peticion por JSON: {'idUsuario': ,'idProyecto': ,'idHabilidad': ,'puntos': ,'comentario': }
     * Respuesta: {'id': }
     */
    case 'POST':
        // Se verifica que el Usuario tenga una sesion activa y de tipo Reclutador, si no es asi, se termina el Script.
        Validacion::isSessionReclutador();

        $json = json_decode(file_get_contents('php://input'), true);

        // Si no existen los campos obligatorios se manda error.
        if (!(isset($json[Consts::CALIFICACION_KEY_ID_USUARIO]) &&
            isset($json[Consts::CALIFICACION_KEY_ID_PROYECTO]) &&
            isset($json[Consts::CALIFICACION_KEY_ID_HABILIDAD]) &&
            isset($json[Consts::CALIFICACION_KEY_PUNTOS]) &&
            isset($json[Consts::CALIFICACION_KEY_COMENTARIO]))) {

            header(Validacion::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        // Se registra la Calificacion.
        $dependencys = new DependencyInjection();
        $calificacionService = $dependencys->getCalificacionService();
        $idCalificacion = $calificacionService->save($json);
        // Se regresa el id si se registro correctamente, sino es null.
        $response = array(Consts::CALIFICACION_KEY_ID => $idCalificacion);
        echo json_encode($response);
        break;
}
