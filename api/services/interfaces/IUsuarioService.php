<?php

/**
 * Interface que define los servicios de un Usuario.
 */
interface IUsuarioService
{
    /**
     * Obtiene todos los usuarios.
     * 
     * @return array Usuarios.
     */
    public function getAll(): array;

    /**
     * Obtiene todos los usuarios por un tipo.
     * 
     * @param string $tipoUsuario Tipo de usuarios a obtener.
     * @return array Usuarios.
     */
    public function getByTipoUsuario(string $tipoUsuario): array;

    /**
     * Obtiene un usuario por su correo y contrasenia.
     * 
     * @param string $correo correo del usuario a obtener.
     * @param string $contrasenia contrasenia del usuario a obtener.
     * @return Usuario.
     */
    public function getByCorreoAndContrasenia(string $correo, string $contrasenia);
}