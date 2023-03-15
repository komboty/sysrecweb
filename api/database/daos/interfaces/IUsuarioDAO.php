<?php
require_once(dirname(__FILE__) . '/IGenericDAO.php');
/**
 * Interface que define las consultas a la tabla de Usuario de la base de datos.
 */
interface IUsuarioDAO extends IGenericDAO
{
    /**
     * Obtiene todos los Usuarios de la base de datos por su tipo.
     * 
     * @param string $tipoUsuario Tipo de usuarios a obtener.
     * @return array Usuarios encontrados.
     */
    public function getByTipoUsuario(string $tipoUsuario): array;

    /**
     * Obtiene un Usuario registrado en la base de datos por su correo y contrasenia.
     * 
     * @param string $correo correo del usuario a obtener.
     * @param string $contrasenia contrasenia del usuario a obtener.
     * @return Usuario encontrado.
     */
    public function getByCorreoAndContrasenia(string $correo, string $contrasenia);
}
