<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IUsuarioDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/connection/IConnectionDB.php');
require_once(dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/shared/Consts.php');

/**
 * Clase que realiza las consultas a la tabla de Usuario de la base de datos.
 */
class UsuarioDAOImpl implements IUsuarioDAO
{
    //Conexion a la base de datos.
    private $connectionDB;

    public function __construct(IConnectionDB $connectionDB)
    {
        $this->connectionDB = $connectionDB;
    }

    public function save($usuario)
    {
        $this->connectionDB->connectDB();
        $query = 'INSERT INTO Usuario (idTipoUsuario, nombre, correo, contrasenia, telefono, edad, curriculum) VALUES'
            . '((SELECT id FROM TipoUsuario WHERE nombre = ?), ?, ?, ?, ?, ?, ?)';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param(
            'ssssssb',
            $usuario[Consts::USER_KEY_TIPO],
            $usuario[Consts::USER_KEY_NOMBRE],
            $usuario[Consts::USER_KEY_CORREO],
            $usuario[Consts::USER_KEY_CONTRASENIA],
            $usuario[Consts::USER_KEY_TELEFONO],
            $usuario[Consts::USER_KEY_EDAD],
            $usuario[Consts::USER_KEY_CURRICULUM]
        );
        // Si tiene curriculum se almacena en la base de datos.
        if (isset($usuario[Consts::USER_KEY_CURRICULUM])) {
            $statement->send_long_data(6, base64_decode($usuario[Consts::USER_KEY_CURRICULUM]));
        }
        // Si se registro correctamente el Usuario se regresa el id.
        if ($statement->execute()) {
            return $statement->insert_id;
        }
        // Si no se registro el Usuario en  la base de datos.
        return null;
    }

    public function getAll(): array
    {
        $this->connectionDB->connectDB();
        $query = 'SELECT u.id, u.nombre, t.nombre as tipo, u.correo, u.telefono, u.edad FROM Usuario as u'
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
        $query = 'SELECT u.id, u.nombre, t.nombre as tipo, u.correo, u.telefono, u.edad FROM Usuario as u'
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
        $query = 'SELECT u.id, u.nombre, t.nombre as tipo, u.correo, u.telefono, u.edad FROM Usuario as u'
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
