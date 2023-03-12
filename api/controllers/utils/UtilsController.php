<?php

/**
 * Clase con funciones utilitarias.
 */
class UtilsController
{
    /**
     * Verifica si existe sesion del Usuario en el servidor.
     * 
     * @return bool True si existe sesion del usuario, False si no existe.
     */
    public static function isSessionUser(): bool
    {
        session_start();
        return isset($_SESSION[Consts::SESSION_KEY_USER]);
    }
}
