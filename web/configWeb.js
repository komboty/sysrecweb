const SERVER = {
    'HOST': 'http://localhost', // 'https://sysrecweb.000webhostapp.com',
    'API_CONTROLLERS': '/sysrecweb/api/controllers/implements',
    'WEB_VIEWS': '/sysrecweb/web/views'
}

const API_URL = {
    'CONTROLLER_SESSION': SERVER.HOST + SERVER.API_CONTROLLERS + '/SessionController.php',
    'CONTROLLER_USUARIO': SERVER.HOST + SERVER.API_CONTROLLERS + '/UsuarioController.php',
    'CONTROLLER_PROYECTO': SERVER.HOST + SERVER.API_CONTROLLERS + '/ProyectoController.php',
    'CONTROLLER_INVITACION': SERVER.HOST + SERVER.API_CONTROLLERS + '/InvitacionController.php',
    'CONTROLLER_HABILIDAD': SERVER.HOST + SERVER.API_CONTROLLERS + '/HabilidadController.php',
    'CONTROLLER_CALIFICACION': SERVER.HOST + SERVER.API_CONTROLLERS + '/CalificacionController.php'
}

const API_URL_WHIT_PARAMS = {
    'MIS_PROYECTOS': API_URL.CONTROLLER_PROYECTO + '?MisProyectos',
    'SESSION_USER': API_URL.CONTROLLER_SESSION + '?User',
    'USER_TIPO': API_URL.CONTROLLER_USUARIO + '?tipo=',
    'HABILIDAD_ALL': API_URL.CONTROLLER_HABILIDAD + '?All',
    'INVITACION_ALL': API_URL.CONTROLLER_INVITACION + '?All',
}

const WEB_URL = {
    'VIEW_LOGIN': SERVER.HOST + SERVER.WEB_VIEWS + '/login/login.php',
    'VIEW_CREAR_USUARIO': SERVER.HOST + SERVER.WEB_VIEWS + '/crearUsuario/crearUsuario.php',
    'VIEW_HOME_DESARROLLADOR': SERVER.HOST + SERVER.WEB_VIEWS + '/homeDesarrollador/homeDesarrollador.php',
    'VIEW_HOME_RECLUTADOR': SERVER.HOST + SERVER.WEB_VIEWS + '/homeReclutador/homeReclutador.php',
    'VIEW_MIS_PROYECTOS_RECLUTADOR': SERVER.HOST + SERVER.WEB_VIEWS + '/misProyectosReclutador/misProyectosReclutador.php',
    'VIEW_MIS_PROYECTOS_DESARROLLADOR': SERVER.HOST + SERVER.WEB_VIEWS + '/misProyectosDesarrollador/misProyectosDesarrollador.php',
    'VIEW_CREAR_PROYECTO': SERVER.HOST + SERVER.WEB_VIEWS + '/crearProyecto/crearProyecto.php',
    'VIEW_INVITAR_PROYECTO': SERVER.HOST + SERVER.WEB_VIEWS + '/invitarProyecto/invitarProyecto.php',
    'VIEW_INVITACIONES': SERVER.HOST + SERVER.WEB_VIEWS + '/invitacionesDesarrollador/invitacionesDesarrollador.php',
}

const CONST_SHARED = {
    'TIPO_DESARROLLADOR': 'Desarrollador',
    'TIPO_RECLUTADOR': 'Reclutador',
    'ESTADO_INVITACION_ENVIADA': 'Enviada',
    'ESTADO_INVITACION_ACEPTADA': 'Aceptada',
    'ESTADO_INVITACION_RECHAZADA': 'Rechazada'
}

const CONST_MSG_ALERT = {
    // ERRORs
    'ERROR': { 'CODE': 'ERROR', 'TITLE': 'Error', 'TEXT': 'Por favor, inténtalo más tarde' },
    'ERROR_FATAL': { 'CODE': 'ERROR_FATAL', 'TITLE': 'Error Fatal', 'TEXT': 'Por favor, inténtalo más tarde' },
    'PERMISSIONS_DENIED': { 'CODE': 'PERMISSIONS_DENIED', 'TITLE': 'Error', 'TEXT': 'No cuentas con las credenciales necesarias' },
    'NOT_FOUND': { 'CODE': 'NOT_FOUND', 'TITLE': 'Error', 'TEXT': 'No se encontro' },
    'PASS_NOT_EQUALS': { 'CODE': 'PASS_NOT_EQUALS', 'TITLE': 'Error', 'TEXT': 'Las contraseñas no coinciden' },
    'USER_NOT_FOUND': { 'CODE': 'USER_NOT_FOUND', 'TITLE': 'Error', 'TEXT': 'Por favor, verifique sus datos' },
    'PROJECT_NOT_FOUND': { 'CODE': 'PROJECT_NOT_FOUND', 'TITLE': 'Ups!', 'TEXT': 'No se encontro ningún Proyecto' },
    'DEVELOPERS_NOT_FOUND': { 'CODE': 'DEVELOPERS_NOT_FOUND', 'TITLE': 'Ups!', 'TEXT': 'No se encontro ningún Desarrollador' },
    'INVITATIONS_NOT_FOUND': { 'CODE': 'INVITATIONS_NOT_FOUND', 'TITLE': 'Ups!', 'TEXT': 'No tienes ninguna Invitación' },
    'USER_NOT_SESSION': { 'CODE': 'USER_NOT_SESSION', 'TITLE': 'Tu sesión ha expirado', 'TEXT': 'Por favor, vuelve a iniciar sesión' },
    'ERROR_USER_INVITADO': { 'CODE': 'ERROR_USER_INVITADO', 'TITLE': 'Desarrollador invitado', 'TEXT': 'El desarrollador ya tiene una invitación a este Proyecto, aún no la responde' },
    'ERROR_USER_ACEPTADO': { 'CODE': 'ERROR_USER_ACEPTADO', 'TITLE': 'Desarrollador aceptado', 'TEXT': 'El desarrollador ya Acepto la invitacion a este Proyecto' },


    // OKs
    'SAVE_USER': { 'TITLE': 'Registro exitoso', 'TEXT': 'Su cuenta se ha registrado correctamente' },
    'SAVE_PROJECT': { 'TITLE': 'Registro exitoso', 'TEXT': 'Su proyecto se ha registrado correctamente' },
    'SAVE_INVITACTION': { 'TITLE': 'Invitación enviada', 'TEXT': 'Se ha mandado correctamente' },
    'SAVE_CALIFICACION': { 'TITLE': 'Registro exitoso', 'TEXT': 'La calificación se ha registrado correctamente' },
    'RESPONSE_INVITACTION': { 'TITLE': 'Respuesta enviada', 'TEXT': 'Tu respuesta se ha mandado correctamente' },
}

const MODAL = {
    ACTION_CANCEL: 'MODAL_ACTION_CANCEL'
}