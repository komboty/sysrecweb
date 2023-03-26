<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    // Cabecera y Estilos .
    require_once(dirname(dirname(__FILE__)) . '/shared/head.php');
    ?>
    <!-- HomeReclutador CSS -->
    <!-- <link rel="stylesheet" href="login.css" /> -->
</head>

<body>
    <?php
    // Verificacion de Sesion existen y su tipo de Usuario sea correcto.
    require_once(dirname(dirname(__FILE__)) . '/shared/session.php');
    verifyHome(Consts::USER_TIPO_RECLUTADOR);

    // Menu
    require_once(dirname(dirname(__FILE__)) . '/shared/menu/menu.php');
    setBreadcrumb('');
    ?>

    <section class="animaSlideFromRight">
        <div class="container py-3">
            <div class="card text-center">
                <div class="card-header">
                    <h4>¡Hola! <?php echo $_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_NOMBRE] ?></h4>
                </div>
                <!-- <div class="card-footer text-muted"></div> -->
            </div>
        </div>
    </section>

    <?php
    // JavaScripts
    require_once(dirname(dirname(__FILE__)) . '/shared/scripts.php');
    ?>
    <!-- HomeReclutador JavaScript -->
    <script type="text/javascript" src="homeReclutador.js"></script>
</body>

</html>