const SERVER = {
    'HOST': 'http://localhost',
    'API_CONTROLLERS': '/sysrecweb/api/controllers',
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