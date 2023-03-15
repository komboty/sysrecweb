<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IProyectoDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/connection/IConnectionDB.php');

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
    }

    public function getAll(): array
    {
        return [];
    }

    public function getByFundador(int $idFundador): array
    {
        $this->connectionDB->connectDB();
        $query = 'SELECT id, nombre, descripcion FROM Proyecto'
            . ' WHERE idUsuarioFundador = ? ';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param('i', $idFundador);
        $statement->execute();
        return $statement
            ->get_result()
            ->fetch_all(MYSQLI_ASSOC);
    }

    public function getByInvitado(int $idInvitado): array
    {
        return [];
    }
}
