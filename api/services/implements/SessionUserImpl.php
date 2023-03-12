<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/ISessionUser.php');
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/shared/Consts.php');

/**
 * Clase que gestiona la sesion de un Usuario.
 */
class SessionUserImpl implements ISessionUser
{
    public function isSet(): bool
    {
        session_start();
        return isset($_SESSION[Consts::SESSION_KEY_USER]);
    }

    public function get()
    {
        session_start();
        return $_SESSION[Consts::SESSION_KEY_USER];
    }

    public function set($user)
    {
        session_start();
        $_SESSION[Consts::SESSION_KEY_USER] = $user;
    }

    public function destroy()
    {
        session_start();
        session_destroy();
    }
}
