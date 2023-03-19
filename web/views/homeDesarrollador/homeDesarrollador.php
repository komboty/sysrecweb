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

    <!-- Accordion -->
    <section>
        <div class="container py-3">
            <div class="accordion" id="accordionDeveloper">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingMisProyectos">
                        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseMisProyectos" aria-expanded="false" aria-controls="collapseMisProyectos">
                            <i class="fab fa-sketch fa-sm me-2 opacity-70"></i> Mis Proyectos
                        </button>
                    </h2>
                    <div id="collapseMisProyectos" class="accordion-collapse collapse" aria-labelledby="headingMisProyectos">
                        <div class="accordion-body" id="bodyMisProyectos"></div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingInvitaciones">
                        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseInvitaciones" aria-expanded="false" aria-controls="collapseInvitaciones">
                            <i class="fas fa-envelope fa-sm me-2 opacity-70"></i> Invitaciones
                        </button>
                    </h2>
                    <div id="collapseInvitaciones" class="accordion-collapse collapse" aria-labelledby="headingInvitaciones">
                        <div class="accordion-body" id="bodyInvitaciones"></div>
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