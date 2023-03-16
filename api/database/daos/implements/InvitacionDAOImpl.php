<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IInvitacionDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/connection/IConnectionDB.php');

/**
 * Clase que realiza las consultas a la tabla de Invitacion de la base de datos.
 */
class InvitacionDAOImpl implements IInvitacionDAO
{
    //Conexion a la base de datos.
    private $connectionDB;

    public function __construct(IConnectionDB $connectionDB)
    {
        $this->connectionDB = $connectionDB;
    }

    public function save($proyecto)
    {
    }

    public function getAll(): array
    {
        return [];
    }

    public function getByProyecto(int $idProyecto): array
    {
        $this->connectionDB->connectDB();
        $query = 'SELECT i.id, ei.nombre as estado, i.idUsuario, u.nombre, u.correo FROM Invitacion as i'
            . ' JOIN Usuario as u ON i.idUsuario = u.id'
            . ' JOIN EstadoInvitacion as ei ON i.idEstadoInvitacion = ei.id'
            . ' WHERE i.idProyecto = ?';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param('i', $idProyecto);
        $statement->execute();
        return $statement
            ->get_result()
            ->fetch_all(MYSQLI_ASSOC);
    }

    public function getByUsuario(int $idUsuario): array
    {
        return [];
    }
}
