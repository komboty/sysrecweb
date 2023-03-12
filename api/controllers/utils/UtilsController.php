<?php

/**
 * Clase con funciones utilitarias.
 */
class UtilsController
{
    const HEADER_STATUS_OK = 'HTTP/1.1 200 OK';
    const HEADER_STATUS_BAD_REQUEST = 'HTTP/1.1 400 Bad Request';
    const HEADER_STATUS_UNAUTHORIZED = 'HTTP/1.1 401 Unauthorized';
    const HEADER_STATUS_NOT_FOUND = 'HTTP/1.1 404 Not Found';

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
