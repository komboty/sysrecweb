<?php
// Constantes
require_once(dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/shared/Consts.php');
require_once(dirname(__FILE__) . '/ConstsMenu.php');
?>

<!-- Menu -->
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>

        <!-- Menu izquierdo colapsable -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Icono -->
            <a class="navbar-brand mt-2 mt-lg-0" onclick="UtilsSysrec.redirectToHome('<?php echo $_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_TIPO]; ?>')" style="cursor: pointer;">
                <img src="../../sources/images/logo_sysrec.png" height="35" alt="SYSREC Logo" />
            </a>
            <!-- Botones -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="btnMenu">
                <?php
                // Si el Usaurio es Reclutador
                if ($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_TIPO] == Consts::USER_TIPO_RECLUTADOR) {
                    echo '<li class="nav-item" style="cursor: pointer;">
                            <a class="nav-link" onclick="redirectToMisProyectos(' . "'" . $_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_TIPO] . "'" . ')">
                                <i class="fab fa-sketch fa-lg"></i>
                                <span class="badge rounded-pill badge-notification bg-dark" id="badgeMisProyectos"></span>'
                        . ConstsMenu::TITLE_MIS_PROYECTO_RECLUTADOR .
                        '   </a>
                        </li>
                        <li class="nav-item" style="cursor: pointer;">
                            <a class="nav-link" onclick="redirectToInvitar()">
                                <i class="fas fa-user-friends fa-lg"></i>
                                <span class="badge rounded-pill badge-notification bg-dark" id="badgeInvitar"></span>'
                        . ConstsMenu::TITLE_INVITAR_PROYECTO .
                        '   </a>
                        </li>
                        <li class="nav-item" style="cursor: pointer;">
                            <a class="nav-link" onclick="redirectToCrearProyecto()">
                                <i class="fas fa-plus-circle fa-lg"></i> ' . ConstsMenu::TITLE_CREAR_PROYECTO . '
                            </a>
                        </li>';

                    // Si el Usaurio es Desarrollador
                } elseif ($_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_TIPO] == Consts::USER_TIPO_DESARROLLADOR) {
                    echo '<li class="nav-item" style="cursor: pointer;">
                            <a class="nav-link" onclick="redirectToMisProyectos(' . "'" . $_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_TIPO] . "'" . ')">
                                <i class="fas fa-users fa-lg"></i>
                                <span class="badge rounded-pill badge-notification bg-dark" id="badgeMisProyectos"></span>'
                        . ConstsMenu::TITLE_MIS_PROYECTO_DESARROLLADOR .
                        '   </a>
                        </li>
                        <li class="nav-item" style="cursor: pointer;">
                            <a class="nav-link" onclick="redirectToInvitaciones()">
                                <i class="fas fa-envelope fa-lg"></i>
                                <span class="badge rounded-pill badge-notification bg-dark" id="badgeInvitaciones"></span>'
                        . ConstsMenu::TITLE_INVITACIONES .
                        '   </a>
                        </li>
                        <li class="nav-item" style="cursor: pointer;">
                            <a class="nav-link" onclick="redirectToMisCalificaciones(' . "'" . $_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_TIPO] . "'" . ')">
                                <i class="fas fa-star"></i>
                                <span class="badge rounded-pill badge-notification bg-dark" id="badgeMisCalificaciones"></span>'
                        . ConstsMenu::TITLE_MIS_CALIFICACIONES_DESARROLLADOR .
                        '   </a>
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
                    echo '<div style="margin-right: 0.3em;">' . explode("@", $_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_CORREO])[0] . '</div>';
                    ?>
                    <img src="../../sources/images/img_user.png" class="rounded-circle" height="22" alt="Portrait of a Woman" loading="lazy" />
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <!-- <li><a class="dropdown-item"><i class="fas fa-user-alt"></i> Mi Perfil</a></li>
                    <li><a class="dropdown-item"><i class="fas fa-user-cog"></i> Configuración</a></li> -->
                    <li><a class="dropdown-item" onclick="onCerrarSesion()"><i class="fas fa-sign-out-alt"></i> Salir</a></li>
                </ul>
            </div>
        </div>

    </div>
</nav>

<?php
function setBreadcrumb(string $url)
{
    $itemBreadcrumb = $url != '' ? '<li class="breadcrumb-item"><a><u>' . $url . '</u></a></li>' : '';

    echo '<nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item" onclick="UtilsSysrec.redirectToHome(' . "'" . $_SESSION[Consts::SESSION_KEY_USER][Consts::USER_KEY_TIPO] . "'" . ')" >
                            <a href="#"><i class="fas fa-home"></i></a>
                        </li>
                        ' . $itemBreadcrumb . '
                    </ol>
                </nav>
            </div>
        </nav>';
}
?>


<!-- Menu JavaScript -->
<script type="text/javascript" src="../shared/menu/menu.js"></script>