<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    // Cabecera y Estilos .
    require_once(dirname(dirname(__FILE__)) . '/shared/head.php');
    ?>
    <!-- InvitacionesDesarrollador CSS -->
    <link rel="stylesheet" href="invitacionesDesarrollador.css" />
</head>

<body>
    <?php
    // Verificacion de Sesion existen y su tipo de Usuario sea correcto.
    require_once(dirname(dirname(__FILE__)) . '/shared/session.php');
    verifyHome(Consts::USER_TIPO_DESARROLLADOR);

    // Menu
    require_once(dirname(dirname(__FILE__)) . '/shared/menu/menu.php');
    setBreadcrumb(ConstsMenu::TITLE_INVITACIONES);
    ?>

    <section>
        <!-- Tabs Invitaciones -->
        <ul class="nav nav-tabs nav-justified mb-3 py-2" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="tab-recibidas" data-mdb-toggle="tab" href="#tabs-recibidas" role="tab" aria-controls="tabs-recibidas" aria-selected="true">
                    <i class="fas fa-envelope-open-text fa-lg"></i> Recibidas
                    <span class="badge bg-dark ms-1" id="badgeRecibidas"></span>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="tab-aceptadas" data-mdb-toggle="tab" href="#tabs-aceptadas" role="tab" aria-controls="tabs-aceptadas" aria-selected="false">
                    <i class="fas fa-thumbs-up fa-lg"></i> Aceptadas
                    <span class="badge bg-dark ms-1" id="badgeAceptadas"></span>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="tab-rechazadas" data-mdb-toggle="tab" href="#tabs-rechazadas" role="tab" aria-controls="tabs-rechazadas" aria-selected="false">
                    <i class="fas fa-thumbs-down fa-lg"></i> Rechazadas
                    <span class="badge bg-dark ms-1" id="badgeRechazadas"></span>
                </a>
            </li>
        </ul>

        <!-- Tabs content -->
        <div class="tab-content">
            <div class="tab-pane fade show active" id="tabs-recibidas" role="tabpanel" aria-labelledby="tab-recibidas">
                <div class="container animaSlideFromRight">
                    <div class="row row-cols-1 row-cols-md-3 g-4" id="bodyInviRecibidas"></div>
                </div>
            </div>
            <div class="tab-pane fade" id="tabs-aceptadas" role="tabpanel" aria-labelledby="tab-aceptadas">
                <div class="container animaSlideFromRight">
                    <div class="row row-cols-1 row-cols-md-3 g-4" id="bodyInviAceptadas"></div>
                </div>
            </div>
            <div class="tab-pane fade" id="tabs-rechazadas" role="tabpanel" aria-labelledby="tab-rechazadas">
                <div class="container animaSlideFromRight">
                    <div class="row row-cols-1 row-cols-md-3 g-4" id="bodyInviRechazadas"></div>
                </div>
            </div>
        </div>
        <!-- Tabs content -->


    </section>

    <!-- Efecto carga -->
    <div class="container py-3 animaSlideFromRight">
        <div class="row py-4 row-cols-1 row-cols-md-3 g-4" id="cardLoad">
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


    <?php
    // JavaScripts
    require_once(dirname(dirname(__FILE__)) . '/shared/scripts.php');
    ?>
    <!-- InvitacionesDesarrollador JavaScript -->
    <script type="text/javascript" src="invitacionesDesarrollador.js"></script>
</body>

</html>