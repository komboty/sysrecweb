<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/utils/Validacion.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');



/**
 *  Se atiende la peticion del cliente segun el verbo.
 */
switch ($_SERVER['REQUEST_METHOD']) {

        /**
     * Si se quiere obtener todas las Calificaciones de un Usuario registradas en el sistema.
     * ?All, Sin valor, ya que se obtiene de la Sesion.
     * Respuesta: [{ 'id', 'idProyecto', 'nombreProyecto', 'idHabilidad', 'nombreHabilidad', 'puntos', 'comentario' }, ...]
     */
    case 'GET':
        // Se verifica que el Usuario tenga una sesion activa, si no es asi, se manda "No autorizado".
        Validacion::isSession();

        // Si no existen el parametro en la peticion se manda error.
        if (!isset($_GET[Consts::GET_MIS_CALIFICACIONES])) {
            header(Validacion::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        $dependencys = new DependencyInjection();
        $calificaService = $dependencys->getCalificacionService();

        // Se obtenen las Calificaciones del Usuario logueado segun su tipo.
        switch ($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_TIPO]) {

            case Consts::USER_TIPO_DESARROLLADOR:
                $calificaciones = $calificaService->getByUsuario($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_ID]);
                break;

            case Consts::USER_TIPO_RECLUTADOR:
                // $calificaciones = $calificaService->getByFundador($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_ID]);
                break;

                // Si el usuario no tiene un Rol de los anteriores, se manda "No autorizado".
            default:
                header(Validacion::HEADER_STATUS_UNAUTHORIZED);
                return;
                break;
        }

        // Si no existen Calificaiones en el sistema se manda error.
        if (empty($calificaciones)) {
            header(Validacion::HEADER_STATUS_NOT_FOUND);
            return;
        }

        echo json_encode($calificaciones);
        break;


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
