<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    // Cabecera y Estilos .
    require_once(dirname(dirname(__FILE__)) . '/shared/head.php');
    ?>
    <!-- Registro CSS -->
    <link rel="stylesheet" href="registro.css" />
</head>

<body>

    <!-- Card Regsitro -->
    <section>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-10">
                    <div class="card shadow-3-strong" style="border-radius: 1rem;">
                        <div class="text-center">
                            <img src="../../sources/images/logo_sysrec.png" class="card-img-top logo" alt="SYSREC" />
                        </div>
                        <div class="card-body p-4 text-center">
                            <h3 class="mb-4">Registro</h3>
                            <!-- Formulario -->                            
                            <span class="badge badge-danger mb-4 col-md-12">* Campos obligatorios</span>
                            <div class="mb-4 col-md-12 btn-group">
                                <input type="radio" class="btn-check" name="options" id="checkDeveloper" autocomplete="off" checked />
                                <label class="btn btn-outline-dark btn-lg btn-block" data-mdb-ripple-color="gray" for="checkDeveloper"><i class="far fa-address-card"></i> Desarrollador</label>

                                <input type="radio" class="btn-check" name="options" id="checkReclutador" autocomplete="off" />
                                <label class="btn btn-outline-dark btn-lg btn-block" data-mdb-ripple-color="gray" for="checkReclutador"><i class="far fa-handshake"></i> Reclutador</label>
                            </div>
                            <form class="row needs-validation" id="formRegistro" novalidate>
                                <div class="mb-4 col-md-6">
                                    <div class="form-outline">
                                        <i class="fas fa-user-alt trailing"></i>
                                        <input type="text" id="inputNombre" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputNombre">* Nombre</label>
                                        <div class="invalid-feedback">Ingresa un nombre.</div>
                                    </div>
                                </div>
                                <div class="mb-4 col-md-6">
                                    <div class="form-outline">
                                        <i class="fas fa-at trailing"></i>
                                        <input type="email" id="inputEmail" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputEmail">* Email</label>
                                        <div class="invalid-feedback">Ingresa un dirección de correo correcta.</div>
                                    </div>
                                </div>
                                <div class="mb-4 col-md-6">
                                    <div class="form-outline">
                                        <i class="fas fa-key trailing"></i>
                                        <input type="password" id="inputPass" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputPass">* Contraseña</label>
                                        <div class="invalid-feedback">Ingresa una contraseña.</div>
                                    </div>
                                </div>
                                <div class="mb-4 col-md-6">
                                    <div class="form-outline">
                                        <i class="fas fa-key trailing"></i>
                                        <input type="password" id="inputPass2" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputPass2">* Repita su contraseña</label>
                                        <div class="invalid-feedback">La contraseña no coincide con la anterior.</div>
                                    </div>
                                </div>
                                <div class="mb-4 col-md-6">
                                    <div class="form-outline">
                                        <i class="fas fa-phone trailing"></i>
                                        <input type="number" id="inputTel" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputTel">* Telefono</label>
                                        <div class="invalid-feedback">Ingresa solo números.</div>
                                    </div>
                                </div>
                                <div class="mb-4 col-md-6">
                                    <div class="form-outline">
                                        <i class="fas fa-sort-numeric-up-alt trailing"></i>
                                        <input type="number" id="inputEdad" class="form-control form-control-lg form-icon-trailing" />
                                        <label class="form-label" for="inputEdad">Edad</label>
                                        <div class="invalid-feedback">Ingresa solo números.</div>
                                    </div>
                                </div>
                                <div class="mb-4 col-md-12">
                                    <div class="input-group input-group-lg">
                                        <label class="input-group-text" for="inputCV">CV</label>
                                        <input type="file" class="form-control form-control-lg" accept="application/pdf" id="inputCV" />
                                        <div class="invalid-feedback">Ingresa tu Currículum en PDF.</div>
                                        <span class="input-group-text" for="inputCV"><i class="fas fa-file-pdf fa-lg"></i></span>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-lg btn-block" type="submit">Crear cuenta <i class="fas fa-user-plus"></i></button>
                            </form>
                            <!-- Boton crear cuenta -->
                            <hr class="my-4">
                            <button class="btn btn-lg btn-block btn-secondary" onclick="onIniciarSesion()">Iniciar Sesión <i class="fas fa-sign-in-alt"></i></button>
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
    <script type="text/javascript" src="registro.js"></script>
</body>

</html>