<!DOCTYPE html>
<html lang="en">

<head>
    <!-- CSSs -->
    <?php require_once(dirname(dirname(__FILE__)) . '/shared/head.php'); ?>
    <!-- Login CSS -->
    <link rel="stylesheet" href="login.css" />
</head>

<body>
    <!-- Card Login -->
    <section>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-3-strong" style="border-radius: 1rem;">
                        <div class="text-center ">
                            <img src="../../sources/images/logo_sysrec.png" class="card-img-top logo" alt="SYSREC" />
                        </div>
                        <div class="card-body p-4 text-center">
                            <h3 class="mb-4">Iniciar Sesión</h3>
                            <!-- Formulario -->
                            <form class="d-grid gap-3 needs-validation" id="formLogin" novalidate>
                                <!-- <div class="mb-1">
                                    <div class="form-outline">
                                        <input type="email" id="inputEmail" class="form-control form-control-lg" required/>
                                        <label class="form-label" for="inputEmail">Email</label>
                                        <div class="invalid-feedback">Ingresa un dirección de correo correcta.</div>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-outline">
                                        <input type="password" id="inputPass" class="form-control form-control-lg" required/>
                                        <label class="form-label" for="inputPass">Contraseña</label>
                                        <div class="invalid-feedback">Ingresa una contraseña.</div>
                                    </div>
                                </div> -->
                                <div class="mb-1">
                                    <div class="form-outline">
                                        <i class="fas fa-at trailing"></i>
                                        <input type="email" id="inputEmail" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputEmail">Email</label>
                                        <div class="invalid-feedback">Ingresa un dirección de correo correcta.</div>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-outline">
                                        <i class="fas fa-key trailing"></i>
                                        <input type="password" id="inputPass" class="form-control form-control-lg form-icon-trailing" required />
                                        <label class="form-label" for="inputPass">Contraseña</label>
                                        <div class="invalid-feedback">Ingresa una contraseña.</div>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-lg btn-block" type="submit">Login <i class="fas fa-sign-in-alt"></i></button>
                            </form>
                            <!-- Boton crear cuenta -->
                            <hr class="my-4">
                            <button class="btn btn-lg btn-block btn-secondary" onclick="crearCuenta()">Crear cuenta <i class="fas fa-user-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- JavaScripts -->
    <?php require_once(dirname(dirname(__FILE__)) . '/shared/scripts.php'); ?>
    <!-- Login JavaScript -->
    <script type="text/javascript" src="login.js"></script>
</body>

</html>