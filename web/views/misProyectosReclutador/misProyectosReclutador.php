<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    // Cabecera y Estilos .
    require_once(dirname(dirname(__FILE__)) . '/shared/head.php');
    ?>
    <!-- Mis Proyectos Reclutador CSS -->
    <!-- <link rel="stylesheet" href="login.css" /> -->
</head>

<body>
    <?php
    // Verificacion de Sesion existen y su tipo de Usuario sea correcto.
    require_once(dirname(dirname(__FILE__)) . '/shared/session.php');
    verifyHome(Consts::USER_TIPO_RECLUTADOR);

    // Menu
    require_once(dirname(dirname(__FILE__)) . '/shared/menu/menu.php');
    ?>
    
    <section>
        <div class="container py-3">
            <!-- Mis Proyectos -->
            <div class="row row-cols-1 row-cols-md-3 g-4" id="bodyMisProyectos"></div>            
        </div>
    </section>


    <?php
    // JavaScripts
    require_once(dirname(dirname(__FILE__)) . '/shared/scripts.php');
    ?>
    <!-- Mis Proyectos Reclutador JavaScript -->
    <script type="text/javascript" src="misProyectosReclutador.js"></script>
</body>

</html>