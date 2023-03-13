const SERVER = {
    'HOST': 'http://localhost', // 'https://sysrecweb.000webhostapp.com',
    'API_CONTROLLERS': '/sysrecweb/api/controllers/implements',
    'WEB_VIEWS': '/sysrecweb/web/views'
}

const API_URL = {
    'CONTROLLER_SESSION': SERVER.HOST + SERVER.API_CONTROLLERS + '/SessionController.php',
    'CONTROLLER_USUARIO': SERVER.HOST + SERVER.API_CONTROLLERS + '/UsuarioController.php'
}

const WEB_URL = {
    'VIEW_LOGIN': SERVER.HOST + SERVER.WEB_VIEWS + '/login/login.php',
    'VIEW_HOME_DESARROLLADOR': SERVER.HOST + SERVER.WEB_VIEWS + '/homeDesarrollador/homeDesarrollador.php'
}

const CONST_USER = {
    'TIPO_DESARROLLADOR': 'Desarrollador',
    'TIPO_RECLUTADOR': 'Reclutador'
}

const CONST_MESSAGE_ALERT = {
    'ERROR': { 'TITLE': 'Error', 'TEXT': 'Por favor, inténtalo más tarde' },
    'USER_NOT_FOUND': { 'TITLE': 'Usuario no encontrado', 'TEXT': 'Por favor, verifique sus datos' },
    'USER_NOT_SESSION': { 'TITLE': 'Tu sesión ha expirado', 'TEXT': 'Por favor, vuelve a iniciar sesión' },
    'PERMISSIONS_DENIED': { 'TITLE': 'Error', 'TEXT': 'No cuentas con las credenciales necesarias' }
}