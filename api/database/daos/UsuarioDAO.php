<?php
require_once('../ConnectionDB.php');

class UsuarioDAO
{
    //Conexion a la base de datos.
    private $connectionDB;

    public function __construct()
    {
        $this->connectionDB = new ConnectionDB();
    }

    /**
     * Obtiene un usuario registrado en la base de datos por su correo y contrasenia.
     * 
     * @param string $correo correo del usuario a obtener.
     * @param string $contrasenia contrasenia del usuario a obtener.
     * @return Usuario encontrado.
     */
    public function getByCorreoAndContrasenia(string $correo, string $contrasenia)
    {
    }
}
