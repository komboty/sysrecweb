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

    public function save($calificacion)
    {
        $this->connectionDB->connectDB();
        $query = 'INSERT INTO Calificacion(idUsuario, idProyecto, idHabilidad, puntos, comentario) VALUES (?,?,?,?,?)';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param(
            'iiiis',
            $calificacion[Consts::CALIFICACION_KEY_ID_USUARIO],
            $calificacion[Consts::CALIFICACION_KEY_ID_PROYECTO],
            $calificacion[Consts::CALIFICACION_KEY_ID_HABILIDAD],
            $calificacion[Consts::CALIFICACION_KEY_PUNTOS],
            $calificacion[Consts::CALIFICACION_KEY_COMENTARIO]
        );
        // Si se registro correctamente la Calificacion se regresa el id.
        if ($statement->execute()) {
            return $statement->insert_id;
        }
        // Si no se registro la Calificacion en  la base de datos.
        return null;
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
