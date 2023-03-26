<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IProyectoDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/connection/IConnectionDB.php');
require_once(dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/shared/Consts.php');

/**
 * Clase que realiza las consultas a la tabla de Proyecto de la base de datos.
 */
class ProyectoDAOImpl implements IProyectoDAO
{
    //Conexion a la base de datos.
    private $connectionDB;

    public function __construct(IConnectionDB $connectionDB)
    {
        $this->connectionDB = $connectionDB;
    }

    public function save($proyecto)
    {
        $this->connectionDB->connectDB();
        $query = 'INSERT INTO Proyecto (idUsuarioFundador, nombre, descripcion) VALUES (?, ?, ?)';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param(
            'iss',
            $proyecto[Consts::PROJECT_KEY_ID_FUNDADOR],
            $proyecto[Consts::PROJECT_KEY_NOMBRE],
            $proyecto[Consts::PROJECT_KEY_DESCRIPCION]
        );
        // Si se registro correctamente el Proyecto se regresa el id.
        if ($statement->execute()) {
            return $statement->insert_id;
        }
        // Si no se registro el Proyecto en  la base de datos.
        return null;
    }

    public function getAll(): array
    {
        return [];
    }

    public function getByFundador(int $idFundador): array
    {
        $this->connectionDB->connectDB();
        $query = 'SELECT id, nombre, descripcion FROM Proyecto'
            . ' WHERE idUsuarioFundador = ?';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param('i', $idFundador);
        $statement->execute();
        return $statement
            ->get_result()
            ->fetch_all(MYSQLI_ASSOC);
    }

    public function getByInvitado(int $idInvitado, string $estado): array
    {
        $this->connectionDB->connectDB();
        $query = 'SELECT p.id, p.nombre, p.descripcion, u.nombre as fundador, u.correo, u.telefono FROM Proyecto as p'
            . ' JOIN Invitacion as i ON p.id = i.idProyecto'
            . ' JOIN Usuario as u ON p.idUsuarioFundador = u.id'
            . ' WHERE i.idUsuario = ? AND i.idEstadoInvitacion = (SELECT id FROM EstadoInvitacion WHERE nombre = ?)';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param('is', $idInvitado, $estado);
        $statement->execute();
        return $statement
            ->get_result()
            ->fetch_all(MYSQLI_ASSOC);
    }
}
