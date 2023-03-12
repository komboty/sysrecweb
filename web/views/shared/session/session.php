<?php
// Si no existe sesion del Usuario en el servidor, se redirecciona al Login.
if (!isset($_SESSION['user'])) {
    echo '<script type="text/javascript" src="../shared/session/session.js"></script>';
    die();
}
