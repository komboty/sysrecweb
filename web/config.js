const SERVER = {
    'HOST': 'http://localhost',
    'API_CONTROLLERS': '/sysrecweb/api/controllers',
    'WEB_VIEWS': '/sysrecweb/web/views'
}

const API_URL = {
    'CONTROLLER_LOGIN': SERVER.HOST + SERVER.API_CONTROLLERS + '/LoginController.php',
    'CONTROLLER_USUARIO': SERVER.HOST + SERVER.API_CONTROLLERS + '/UsuarioController.php'
}

const WEB_URL = {
    'VIEW_LOGIN': SERVER.HOST + SERVER.WEB_VIEWS + '/login/login.php',
    'VIEW_HOME_DESARROLLADOR': SERVER.HOST + SERVER.WEB_VIEWS + '/homeDesarrollador/homeDesarrollador.php'
}