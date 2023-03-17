<!-- Menu -->
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>

        <!-- Menu izquierdo colapsable -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Icono -->
            <a class="navbar-brand mt-2 mt-lg-0" onclick="redirectToHome('<?php echo $_SESSION[Consts::SESSION_KEY_USER][Consts::SESSION_USER_KEY_TIPO]; ?>')" style="cursor: pointer;">
                <img src="../../sources/images/logo_sysrec.png" height="45" alt="SYSREC Logo" />
            </a>
            <!-- Botones -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="btnMenu">
                <li class="nav-item" style="cursor: pointer;">
                    <a class="nav-link" onclick="onMisProyectos()">
                        <i class="fab fa-sketch fa-lg"></i>
                        <span class="badge rounded-pill badge-notification bg-dark" id="badgeMisProyectos"></span> Mis Proyectos
                    </a>
                </li>
                <?php
                // Si el Usaurio es Reclutador
                if ($_SESSION[Consts::SESSION_KEY_USER][Consts::SESSION_USER_KEY_TIPO] == Consts::USER_TIPO_RECLUTADOR) {
                    echo '<li class="nav-item" style="cursor: pointer;">
                            <a class="nav-link" onclick="onCrearProyecto()">
                                <i class="fas fa-plus-circle fa-lg"></i> Crear Proyecto
                            </a>
                        </li>';

                    // Si el Usaurio es Desarrollador
                } elseif ($_SESSION[Consts::SESSION_KEY_USER][Consts::SESSION_USER_KEY_TIPO] == Consts::USER_TIPO_DESARROLLADOR) {
                    echo '<li class="nav-item" style="cursor: pointer;">
                            <a class="nav-link" onclick="onMisProyectos()">
                                <i class="fas fa-envelope-square fa-lg"></i>
                                <span class="badge rounded-pill badge-notification bg-dark" id="badgeInvitaciones"></span> Invitaciones
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
                <a class="nav-link dropdown-toggle d-flex align-items-center" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <?php
                    // Nombre del Usurio
                    echo '<div style="margin-right: 0.3em;">' . explode("@", $_SESSION[Consts::SESSION_KEY_USER][Consts::SESSION_USER_KEY_CORREO])[0] . '</div>';
                    ?>
                    <img src="../../sources/images/img_user.png" class="rounded-circle" height="22" alt="Portrait of a Woman" loading="lazy" />
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <a class="dropdown-item"><i class="fas fa-user-alt"></i> Mi Perfil</a>
                    </li>
                    <li>
                        <a class="dropdown-item"><i class="fas fa-user-cog"></i> Configuración</a>
                    </li>
                    <li>
                        <a class="dropdown-item" onclick="onCerrarSesion()"><i class="fas fa-sign-out-alt"></i> Salir</a>
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