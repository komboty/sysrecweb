<?php

/**
 * Clase con funciones utilitarias.
 */
class Validacion
{
    const HEADER_STATUS_OK = 'HTTP/1.1 200 OK';
    const HEADER_STATUS_BAD_REQUEST = 'HTTP/1.1 400 Bad Request';
    const HEADER_STATUS_UNAUTHORIZED = 'HTTP/1.1 401 Unauthorized';
    const HEADER_STATUS_NOT_FOUND = 'HTTP/1.1 404 Not Found';

    /**
     * Vrifica que se tenga una sesion activa, 
     * si no es asi, se termina el Script donde se invoco.
     */
    public static function isSession()
    {
        session_start();
        if (!$_SESSION[Consts::SESSION_KEY_USER]) {
            header(Validacion::HEADER_STATUS_UNAUTHORIZED);
            exit();
        }
    }

    /**
     * Vrifica que se tenga una sesion activa y de tipo Reclutador, 
     * si no es asi, se termina el Script donde se invoco.
     */
    public static function isSessionReclutador()
    {
        session_start();
        if ($_SESSION[Consts::SESSION_KEY_USER][Consts::SESSION_USER_KEY_TIPO] != Consts::USER_TIPO_RECLUTADOR) {
            header(Validacion::HEADER_STATUS_UNAUTHORIZED);
            exit();
        }
    }
}
