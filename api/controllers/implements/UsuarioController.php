<?php
require_once(dirname(dirname(dirname(__FILE__))) . '/DependencyInjection.php');
require_once(dirname(dirname(__FILE__)) . '/utils/Validacion.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');

/**
 *  Se atiende la peticion del cliente segun el verbo.
 */
switch ($_SERVER['REQUEST_METHOD']) {

        /**
     * Si se quiere obtener uno o varios Usuarios registrados en el sistema. (Se debe estar logeado como Reclutador)
     * Todos los Usuarios: ?All (Sin valor)
     * Un Usuario: ?tipo=
     * Respuesta; [{'id': ,'nombre': ,'tipo': ,'correo': ,'telefono': ,'edad': ,
     *              'calificaciones': [{'id': ,'idProyecto': ,'nombreProyecto': ,'idHabilidad': ,'nombreHabilidad': ,'puntos': ,'comentario': 
     *                                  }, ...]
     *              }, ...]
     */
    case 'GET':
        // Se verifica que el Usuario tenga una sesion activa y de tipo Reclutador, si no es asi, se termina el Script.
        Validacion::isSessionReclutador();

        $dependencys = new DependencyInjection();
        $usuarioService = $dependencys->getUsuarioService();

        // Si se quiere obtener un Usuario por su tipo.
        if (isset($_GET[Consts::USER_KEY_TIPO])) {
            $usuarios = $usuarioService->getByTipoUsuario($_GET[Consts::USER_KEY_TIPO]);

            // Si se quiere obtener todos los Usuarios.
        } 
        // else if (isset($_GET[Consts::GET_ALL_USERS])) {
        //     $usuarios = $usuarioService->getAll();
        // }

        // Si no existen Usuarios en el sistema se manda error.
        if (empty($usuarios)) {
            header(Validacion::HEADER_STATUS_NOT_FOUND);
            return;
        }

        echo json_encode($usuarios);
        break;


        /**
         * Si se quiere registra un Usuario en el sistema. 
         * Peticion por JSON: { 'tipo': , 'nombre': , 'correo': , 'contrasenia': , 'telefono': , 'edad': , 'curriculum': }
         * Respuesta: {'id': }
         */
    case 'POST':
        $json = json_decode(file_get_contents('php://input'), true);

        // Si no existen los campos obligatorios se manda error.
        if (!(isset($json[Consts::USER_KEY_TIPO]) && isset($json[Consts::USER_KEY_NOMBRE]) &&
            isset($json[Consts::USER_KEY_CORREO]) && isset($json[Consts::USER_KEY_CONTRASENIA]) &&
            isset($json[Consts::USER_KEY_TELEFONO]))) {

            header(Validacion::HEADER_STATUS_BAD_REQUEST);
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
