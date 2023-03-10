<?php
require_once(dirname(dirname(__FILE__)) . '/ConnectionDB.php');

/**
 * Clase que realiza consultas a la informacion de los Usuarios dentro de la base de datos.
 */
class UsuarioDAO
{
    //Conexion a la base de datos.
    private $connectionDB;

    public function __construct()
    {
        $this->connectionDB = new ConnectionDB();
    }

    /**
     * Obtiene todos los usuarios de la base de datos.
     * 
     * @return array Usuarios encontrados.
     */
    public function getAll(): array
    {
        $query = 'SELECT u.id, u.nombre, t.nombre as tipo, u.correo, u.telefono, u.edad, u.direccion FROM Usuario as u'
            . ' JOIN TipoUsuario as t ON u.idTipoUsuario = t.id';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->execute();
        return $statement
            ->get_result()
            ->fetch_all(MYSQLI_ASSOC);
    }

    /**
     * Obtiene todos los usuarios de la base de datos por su tipo.
     * 
     * @param string $tipoUsuario Tipo de usuarios a obtener.
     * @return Usuarios encontrados.
     */
    public function getByTipoUsuario(string $tipoUsuario): array
    {
        $query = 'SELECT u.id, u.nombre, t.nombre as tipo, u.correo, u.telefono, u.edad, u.direccion FROM Usuario as u'
            . ' JOIN TipoUsuario as t ON u.idTipoUsuario = t.id'
            . ' WHERE t.nombre = ?';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param('s', $tipoUsuario);
        $statement->execute();
        return $statement
            ->get_result()
            ->fetch_all(MYSQLI_ASSOC);
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
        $query = 'SELECT u.id, u.nombre, t.nombre as tipo, u.correo, u.telefono, u.edad, u.direccion FROM Usuario as u'
            . ' JOIN TipoUsuario as t ON u.idTipoUsuario = t.id'
            . ' WHERE u.correo = ? and u.contrasenia = ?';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param('ss', $correo, $contrasenia);
        $statement->execute();
        return $statement
            ->get_result()
            ->fetch_assoc();
    }
}
