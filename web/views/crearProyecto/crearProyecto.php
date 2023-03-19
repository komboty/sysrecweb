<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    // Cabecera y Estilos .
    require_once(dirname(dirname(__FILE__)) . '/shared/head.php');
    ?>
    <!-- CrearProyecto CSS -->
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

    <!-- Card Crear Proyecto -->
    <section>
        <div class="container py-3 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-3-strong" style="border-radius: 1rem;">
                        <div class="text-center">
                            <img src="../../sources/images/img_project.jpg" class="card-img-top" />
                        </div>
                        <div class="card-body p-4 text-center">
                            <h3 class="mb-4">Crear Proyecto</h3>
                            <span class="badge badge-danger mb-4 col-md-12">* Campos obligatorios</span>
                            <!-- Formulario -->
                            <form class="d-grid gap-3 needs-validation" id="formCrearProyecto" novalidate>
                                <div class="mb-1">
                                    <div class="form-outline">
                                        <i class="fab fa-sketch trailing"></i>
                                        <input type="text" id="inputNombre" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputNombre">* Nombre</label>
                                        <div class="invalid-feedback">Ingresa un nombre.</div>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-outline">
                                        <i class="fas fa-edit trailing"></i>
                                        <textarea class="form-control" id="textDescripcion" rows="4" required></textarea>
                                        <label class="form-label" for="textDescripcion">* Descripción</label>
                                        <div class="invalid-feedback">Ingresa una descripción.</div>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-lg btn-block" type="submit">Entrar <i class="fas fa-sign-in-alt"></i></button>
                            </form>
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
    <!-- CrearProyecto JavaScript -->
    <script type="text/javascript" src="crearProyecto.js"></script>
</body>

</html>