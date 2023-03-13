<!-- Menu -->
<nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>

        <!-- Menu izquierdo colapsable -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Icono -->
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
                <img src="../../sources/images/logo_sysrec.png" height="45" alt="SYSREC Logo" />
            </a>
            <!-- Botones -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fab fa-sketch"></i> Proyectos
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-address-card"></i> Desarrolladores
                    </a>
                </li>
                <?php
                // Invitaciones de Desarrollador
                if ($_SESSION[Consts::SESSION_KEY_USER][Consts::SESSION_USER_KEY_TIPO] == Consts::USER_TIPO_DESARROLLADOR) {
                    echo '<li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fas fa-envelope-square"></i> Invitaciones
                            </a>
                        </li>';
                }

                ?>
            </ul>
        </div>

        <!-- Menu derecho -->
        <div class="d-flex align-items-center">
            <!-- Perfil -->
            <div class="dropdown">

                <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <?php
                    // Nombre del Usurio
                    echo '<div style="margin-right: .2em;">' . explode("@", $_SESSION[Consts::SESSION_KEY_USER][Consts::SESSION_USER_KEY_CORREO])[0] . '</div>';
                    ?>
                    <i class="fas fa-user-circle"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                    <li>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-user-alt"></i> Mi Perfil
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-user-cog"></i> Configuración
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" onclick="cerrarSesion()">
                            <i class="fas fa-sign-out-alt"></i> Cerrar sesión
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</nav>

<?php 
// Constantes
require_once(dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/shared/Consts.php'); 
?>
<!-- Menu JavaScript -->
<script type="text/javascript" src="../shared/menu/menu.js"></script>