<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/ICalificacionDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/connection/IConnectionDB.php');

/**
 * Clase que realiza las consultas a la tabla de Calificaion de la base de datos.
 */
class CalificacionDAOImpl implements ICalificacionDAO
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

    public function getByUsuario(int $idUsuario): array
    {
        $this->connectionDB->connectDB();
        $query = 'SELECT c.id, c.idProyecto, p.nombre as nombreProyecto, c.idHabilidad, h.nombre as nombreHabilidad, c.puntos, c.comentario FROM Calificacion as c'
            . ' JOIN Proyecto as p on p.id = c.idProyecto'
            . ' JOIN Habilidad as h on h.id = c.idHabilidad'
            . ' WHERE c.idUsuario = ?';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param('i', $idUsuario);
        $statement->execute();
        return $statement
            ->get_result()
            ->fetch_all(MYSQLI_ASSOC);
    }
}
