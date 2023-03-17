const SERVER = {
    'HOST': 'http://localhost', // 'https://sysrecweb.000webhostapp.com',
    'API_CONTROLLERS': '/sysrecweb/api/controllers/implements',
    'WEB_VIEWS': '/sysrecweb/web/views'
}

const API_URL = {
    'CONTROLLER_SESSION': SERVER.HOST + SERVER.API_CONTROLLERS + '/SessionController.php',
    'CONTROLLER_USUARIO': SERVER.HOST + SERVER.API_CONTROLLERS + '/UsuarioController.php',
    'CONTROLLER_PROYECTO': SERVER.HOST + SERVER.API_CONTROLLERS + '/ProyectoController.php'
}

const API_URL_WHIT_PARAMS = {
    'MIS_PROYECTOS': API_URL.CONTROLLER_PROYECTO + '?MisProyectos'
}

const WEB_URL = {
    'VIEW_LOGIN': SERVER.HOST + SERVER.WEB_VIEWS + '/login/login.php',
    'VIEW_REGISTRO': SERVER.HOST + SERVER.WEB_VIEWS + '/registro/registro.php',
    'VIEW_HOME_DESARROLLADOR': SERVER.HOST + SERVER.WEB_VIEWS + '/homeDesarrollador/homeDesarrollador.php',
    'VIEW_HOME_RECLUTADOR': SERVER.HOST + SERVER.WEB_VIEWS + '/homeReclutador/homeReclutador.php',
    'VIEW_MIS_PROYECTOS_RECLUTADOR': SERVER.HOST + SERVER.WEB_VIEWS + '/misProyectosReclutador/misProyectosReclutador.php'
}

const CONST_SHARED = {
    'TIPO_DESARROLLADOR': 'Desarrollador',
    'TIPO_RECLUTADOR': 'Reclutador',
    'ESTADO_INVITACION_ENVIADA': 'Enviada',
    'ESTADO_INVITACION_ACEPTADA': 'Aceptada',
    'ESTADO_INVITACION_RECHAZADA': 'Rechazada',
}

const CONST_MSG_ALERT = {
    // ERRORs
    'ERROR': { 'TITLE': 'Error', 'TEXT': 'Por favor, inténtalo más tarde' },
    'PASS_NOT_EQUALS': { 'TITLE': 'Error', 'TEXT': 'Las contraseñas no coinciden' },
    'USER_NOT_FOUND': { 'TITLE': 'Usuario no encontrado', 'TEXT': 'Por favor, verifique sus datos' },
    'USER_NOT_SESSION': { 'TITLE': 'Tu sesión ha expirado', 'TEXT': 'Por favor, vuelve a iniciar sesión' },
    'PERMISSIONS_DENIED': { 'TITLE': 'Error', 'TEXT': 'No cuentas con las credenciales necesarias' },

    // OKs
    'SAVE_USER': { 'TITLE': 'Registro exitoso', 'TEXT': 'Su cuenta se ha registrado correctamente' },
}