<?php
session_start();
// Si no existe sesion del Usuario en el servidor, se redirecciona al Login.
if (!isset($_SESSION['user'])) {
    require_once(dirname(dirname(__FILE__)) . '/scripts.php');
    echo '<script type="text/javascript" src="../shared/session/session.js"></script>';
    die();
}
