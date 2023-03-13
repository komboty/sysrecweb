<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>    
    <?php 
    // Cabecera y Estilos .
    require_once(dirname(dirname(__FILE__)) . '/shared/head.php'); 
    ?>
    <!-- <link rel="stylesheet" href="login.css" /> -->
</head>

<body>
    <?php
    // Verificacion de Sesion existen y su tipo de Usuario sea correcto.
    require_once(dirname(dirname(__FILE__)) . '/shared/session.php');    
    verifyHome(Consts::USER_TIPO_DESARROLLADOR);

    // Menu
    require_once(dirname(dirname(__FILE__)) . '/shared/menu/menu.php'); 
    ?>

    <?php 
    // JavaScripts
    require_once(dirname(dirname(__FILE__)) . '/shared/scripts.php'); 
    ?>
    <!-- HomeDesarrollador JavaScript -->
    <!-- <script type="text/javascript" src="homeDesarrollador.js"></script> -->
</body>
</html>