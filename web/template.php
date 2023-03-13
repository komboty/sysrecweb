<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    // Cabecera y Estilos .
    require_once(dirname(dirname(__FILE__)) . '/shared/head.php');
    ?>
    <!-- <link rel="stylesheet" href="homeDesarrollador.css" /> -->
</head>

<body>
    <?php
    // Verificacion de Sesion existen y su tipo de Usuario sea correcto.
    require_once(dirname(dirname(__FILE__)) . '/shared/session.php');
    verifyHome(Consts::USER_TIPO_DESARROLLADOR);

    // Menu
    require_once(dirname(dirname(__FILE__)) . '/shared/menu/menu.php');
    ?>

    <!-- Start your project here-->
    <div class="container">
        <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
            <div class="text-center">
                <img class="mb-4" src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" style="width: 250px; height: 90px" />
                <h5 class="mb-3">Thank you for using our product. We're glad you're with us.</h5>
                <p class="mb-3">MDB Team</p>
                <a class="btn btn-primary btn-lg" href="https://mdbootstrap.com/learn/mdb-foundations/basics/introduction/" target="_blank" role="button">Start MDB tutorial
                </a>
            </div>
        </div>
    </div>
    <!-- End your project here-->

    <?php
    // JavaScripts
    require_once(dirname(dirname(__FILE__)) . '/shared/scripts.php');
    ?>
    <!-- HomeDesarrollador JavaScript -->
    <!-- <script type="text/javascript" src="homeDesarrollador.js"></script> -->
</body>