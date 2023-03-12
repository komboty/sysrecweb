<?php

/**
 * Interface que define las consultas a la tabla de Usuario de la base de datos.
 */
interface IUsuarioDAO
{
    /**
     * Obtiene todos los usuarios de la base de datos.
     * 
     * @return array Usuarios encontrados.
     */
    public function getAll(): array;

    /**
     * Obtiene todos los usuarios de la base de datos por su tipo.
     * 
     * @param string $tipoUsuario Tipo de usuarios a obtener.
     * @return array Usuarios encontrados.
     */
    public function getByTipoUsuario(string $tipoUsuario): array;

    /**
     * Obtiene un usuario registrado en la base de datos por su correo y contrasenia.
     * 
     * @param string $correo correo del usuario a obtener.
     * @param string $contrasenia contrasenia del usuario a obtener.
     * @return Usuario encontrado.
     */
    public function getByCorreoAndContrasenia(string $correo, string $contrasenia);
}