<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/utils/Validacion.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');


/**
 *  Se atiende la peticion del cliente segun el verbo.
 */
switch ($_SERVER['REQUEST_METHOD']) {

        /**
     * Si se quiere obtener uno o varios Proyectos registrados en el sistema. 
     * ?MisProyectos, Sin valor ya que regresan los Proyectos del Usuario almacenado en la sesion.
     * Respuesta: [{'id': ,'nombre': ,'descripcion': , 'fundador':, 'correo':, 'telefono':,
     *              'invitaciones':[{'id': ,'estado': ,'idUsuario': ,'nombre': ,'correo': ,'telefono': 
     *                              }, ...]
     *              }, ...]
     */
    case 'GET':
        // Se verifica que el Usuario tenga una sesion activa, si no es asi, se termina el Script.
        Validacion::isSession();

        // Si no existen el parametro en la peticion se manda error.
        if (!isset($_GET[Consts::GET_MIS_PROYECTOS])) {
            header(Validacion::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        $dependencys = new DependencyInjection();
        $proyectoService = $dependencys->getProyectoService();

        // Se obtenen los Proyectos del Usuario logueado segun su tipo.
        switch ($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_TIPO]) {

            case Consts::USER_TIPO_DESARROLLADOR:
                $proyectos = $proyectoService->getByInvitado($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_ID]);
                break;

            case Consts::USER_TIPO_RECLUTADOR:
                $proyectos = $proyectoService->getByFundador($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_ID]);
                break;

                // Si el usuario no tiene un Rol de los anteriores, se manda "No autorizado".
            default:
                header(Validacion::HEADER_STATUS_UNAUTHORIZED);
                return;
                break;
        }

        // Si no existen Proyectos en el sistema se manda error.
        if (empty($proyectos)) {
            header(Validacion::HEADER_STATUS_NOT_FOUND);
            return;
        }

        echo json_encode($proyectos);
        break;

        /**
         * Si se quiere registra un Proyecto en el sistema. 
         * Peticion por JSON: { 'idFundador': , 'nombre': , 'descripcion': }
         * Respuesta: {'id': }
         */
    case 'POST':
        // Se verifica que el Usuario tenga una sesion activa y de tipo Reclutador, si no es asi, se termina el Script.
        Validacion::isSessionReclutador();

        $json = json_decode(file_get_contents('php://input'), true);

        // Si no existen los campos obligatorios se manda error.
        if (!(isset($json[Consts::PROJECT_KEY_ID_FUNDADOR]) &&
            isset($json[Consts::PROJECT_KEY_NOMBRE]) &&
            isset($json[Consts::PROJECT_KEY_DESCRIPCION]))) {

            header(Validacion::HEADER_STATUS_BAD_REQUEST);
            return;
        }

        // Se registra el Usuario.
        $dependencys = new DependencyInjection();
        $proyectoService = $dependencys->getProyectoService();
        $idProyecto = $proyectoService->save($json);
        // Se regresa el id si se registro correctamente, sino es null.
        $response = array(Consts::PROJECT_KEY_ID => $idProyecto);
        echo json_encode($response);
        break;
}
