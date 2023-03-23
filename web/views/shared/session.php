<?php
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');

/**
 * Verifica que el Usuario este logeado y su tipo sea el mismo que el de la sesion actual.
 */
function verifyHome(string $tipoUsuario)
{
    // Si no existe sesion del Usuario en el servidor, se redirecciona al Login.
    if (!isset($_SESSION[Consts::SESSION_KEY_USER])) {
        require_once(dirname(__FILE__) . '/scripts.php');
        echo '<script type="text/javascript">
                AlertSysrec.okErrorRedirect(CONST_MSG_ALERT.USER_NOT_SESSION.TITLE, CONST_MSG_ALERT.USER_NOT_SESSION.TEXT, WEB_URL.VIEW_LOGIN);
            </script>';
        exit();
    }

    if ($_SESSION[Consts::SESSION_KEY_USER][Consts::SESSION_USER_KEY_TIPO] != $tipoUsuario) {
        require_once(dirname(__FILE__) . '/scripts.php');
        echo '<script type="text/javascript">
                AlertSysrec.okErrorRedirect(CONST_MSG_ALERT.PERMISSIONS_DENIED.TITLE, CONST_MSG_ALERT.PERMISSIONS_DENIED.TEXT, WEB_URL.VIEW_LOGIN);
            </script>';
        exit();
    }
}
