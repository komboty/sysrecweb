<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    // Cabecera y Estilos .
    require_once(dirname(dirname(__FILE__)) . '/shared/head.php');
    ?>
    <link rel="stylesheet" href="registro.css" />
</head>

<body>

    <!-- Card Regsitro -->
    <section>
        <div class="container py-3 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-3-strong" style="border-radius: 1rem;">
                        <div class="text-center">
                            <img src="../../sources/images/logo_sysrec.png" class="card-img-top logo" alt="SYSREC" />
                        </div>
                        <div class="card-body p-4 text-center">
                            <h3 class="mb-4">Registro</h3>
                            <!-- Formulario -->
                            <form class="d-grid gap-3 needs-validation" id="formRegistro" novalidate>
                                <span class="badge badge-danger">* Campos obligatorios</span>
                                <div class="mb-1">
                                    <div class="form-outline">
                                        <i class="fas fa-user-alt trailing"></i>
                                        <input type="email" id="inputNombre" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputNombre">* Nombre</label>
                                        <div class="invalid-feedback">Ingresa un nombre.</div>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-outline">
                                        <i class="fas fa-at trailing"></i>
                                        <input type="email" id="inputEmail" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputEmail">* Email</label>
                                        <div class="invalid-feedback">Ingresa un dirección de correo correcta.</div>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-outline">
                                        <i class="fas fa-key trailing"></i>
                                        <input type="password" id="inputPass" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputPass">* Contraseña</label>
                                        <div class="invalid-feedback">Ingresa una contraseña.</div>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-outline">
                                        <i class="fas fa-key trailing"></i>
                                        <input type="password" id="inputPass2" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputPass2">* Repita su contraseña</label>
                                        <div class="invalid-feedback">Ingresa una contraseña.</div>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-outline">
                                        <i class="fas fa-phone trailing"></i>
                                        <input type="number" id="inputTelefono" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputTelefono">* Telefono</label>
                                        <div class="invalid-feedback">Ingresa solo números.</div>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-outline">
                                        <i class="fas fa-sort-numeric-up-alt trailing"></i>
                                        <input type="number" id="inputEdad" class="form-control form-control-lg form-icon-trailing" />
                                        <label class="form-label" for="inputEdad">Edad</label>
                                        <div class="invalid-feedback">Ingresa solo números.</div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="input-group input-group-lg">
                                        <label class="input-group-text" for="inputCV">CV</label>
                                        <input type="file" class="form-control form-control-lg" id="inputCV" />
                                        <div class="invalid-feedback">Ingresa tu Currículum en PDF.</div>
                                        <span class="input-group-text" for="inputCV"><i class="fas fa-file-pdf"></i></span>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-lg btn-block" type="submit">Crear cuenta <i class="fas fa-user-plus"></i></button>
                            </form>
                            <!-- Boton crear cuenta -->
                            <hr class="my-4">
                            <button class="btn btn-lg btn-block btn-secondary" onclick="iniciarSesion()">Iniciar Sesión <i class="fas fa-sign-in-alt"></i></button>
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
    <!-- Registro JavaScript -->
    <!-- <script type="text/javascript" src="registro.js"></script> -->
</body>

</html>