<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    // Cabecera y Estilos .
    require_once(dirname(dirname(__FILE__)) . '/shared/head.php');
    ?>
    <!-- MisCalificacionesDesarrollador CSS -->
    <!-- <link rel="stylesheet" href="misCalificacionesDesarrollador.css" /> -->
</head>

<body>
    <?php
    // Verificacion de Sesion existen y su tipo de Usuario sea correcto.
    require_once(dirname(dirname(__FILE__)) . '/shared/session.php');
    verifyHome(Consts::USER_TIPO_DESARROLLADOR);

    // Menu
    require_once(dirname(dirname(__FILE__)) . '/shared/menu/menu.php');
    setBreadcrumb(ConstsMenu::TITLE_MIS_CALIFICACIONES_DESARROLLADOR);
    ?>

    <!-- Card Calificaicones -->
    <section class="animaSlideFromRight">
        <div class="container py-3">
            <!-- Calificaicones -->
            <div class="row">
                <div class="col-md-3" id="bodyPromedios"></div>
                <div class="col">
                    <div id="titleCalificaicones"></div>
                    <div class="row row-cols-1 row-cols-md-4 g-4" id="bodyCalificaicones"></div>
                </div>
            </div>

            <!-- Efecto carga -->
            <div class="row py-4 row-cols-1 row-cols-md-4 g-4" id="cardLoad">
                <div class="col">
                    <div class="card h-100 shadow-3-strong">
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow"> <span class="placeholder col-6"></span> </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span> <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span> <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow-3-strong">
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow"> <span class="placeholder col-6"></span> </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span> <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span> <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow-3-strong">
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow"> <span class="placeholder col-6"></span> </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span> <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span> <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow-3-strong">
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow"> <span class="placeholder col-6"></span> </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span> <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span> <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php
    // JavaScripts
    require_once(dirname(dirname(__FILE__)) . '/shared/scripts.php');
    ?>
    <!-- MisCalificacionesDesarrollador JavaScript -->
    <script type="text/javascript" src="misCalificacionesDesarrollador.js"></script>
</body>

</html>