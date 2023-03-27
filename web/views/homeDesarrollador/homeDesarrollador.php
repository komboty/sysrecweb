<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    // Cabecera y Estilos .
    require_once(dirname(dirname(__FILE__)) . '/shared/head.php');
    ?>
    <!-- HomeDesarrollador CSS -->
    <!-- <link rel="stylesheet" href="login.css" /> -->
</head>

<body>
    <?php
    // Verificacion de Sesion existen y su tipo de Usuario sea correcto.
    require_once(dirname(dirname(__FILE__)) . '/shared/session.php');
    verifyHome(Consts::USER_TIPO_DESARROLLADOR);

    // Menu
    require_once(dirname(dirname(__FILE__)) . '/shared/menu/menu.php');
    setBreadcrumb('');
    ?>

    <section class="animaSlideFromRight">
        <div class="container py-3">
            <div class="card mb-3 shadow-3-strong">
                <div class="card-body">
                    <div class="text-center">
                        <h3 class="py-2">¡Hola!</h3>
                        <h3><?php echo $_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_NOMBRE] ?></h3>
                        <p class="text-muted mb-0"><i class="fas fa-envelope fa-xs"></i> <?php echo $_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_CORREO] ?></p>
                        <p class="text-muted mb-0"><i class="fas fa-phone fa-xs"></i> <?php echo $_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_TELEFONO] ?></p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <?php
    // JavaScripts
    require_once(dirname(dirname(__FILE__)) . '/shared/scripts.php');
    ?>
    <!-- HomeDesarrollador JavaScript -->
    <script type="text/javascript" src="homeDesarrollador.js"></script>
</body>

</html>