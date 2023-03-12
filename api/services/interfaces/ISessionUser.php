<?php

/**
 * Interface que define como se gestionara la sesion de un Usuario.
 */
interface ISessionUser
{
    /**
     * Verifica si existe la sesion del Usuario en el servidor.
     * 
     * @return bool True si existe sesion del usuario, False si no existe.
     */
    public function isSet(): bool;

    /**
     * Obtiene la sesion actual del Usuario en el servidor.
     * 
     * @return sesion del Usuario.
     */
    public function get();

    /**
     * Asigna los datos a la sesion actual.
     * 
     * @param $user Usuario a almacenar en la sesion.
     */
    public function set($user);

    /**
     * Elimina la sesion actual del Usuario en el servidor.
     */
    public function destroy();
}