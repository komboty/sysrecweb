<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IUsuarioDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/connection/IConnectionDB.php');

/**
 * Clase que realiza las consultas a la tabla de Usuario de la base de datos.
 */
class UsuarioDAOImpl implements IUsuarioDAO
{
    //Conexion a la base de datos.
    private IConnectionDB $connectionDB;

    public function __construct(IConnectionDB $connectionDB)
    {
        $this->connectionDB = $connectionDB;
    }

    public function getAll(): array
    {
        $this->connectionDB->connectDB();
        $query = 'SELECT u.id, u.nombre, t.nombre as tipo, u.correo, u.telefono, u.edad, u.direccion FROM Usuario as u'
            . ' JOIN TipoUsuario as t ON u.idTipoUsuario = t.id';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->execute();
        return $statement
            ->get_result()
            ->fetch_all(MYSQLI_ASSOC);
    }

    public function getByTipoUsuario(string $tipoUsuario): array
    {
        $this->connectionDB->connectDB();
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

    public function getByCorreoAndContrasenia(string $correo, string $contrasenia)
    {
        $this->connectionDB->connectDB();
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
