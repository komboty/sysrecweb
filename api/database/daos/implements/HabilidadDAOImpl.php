<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IHabilidadDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/connection/IConnectionDB.php');

/**
 * Clase que realiza las consultas a la tabla de Habilidad de la base de datos.
 */
class HabilidadDAOImpl implements IHabilidadDAO
{
    //Conexion a la base de datos.
    private $connectionDB;

    public function __construct(IConnectionDB $connectionDB)
    {
        $this->connectionDB = $connectionDB;
    }

    public function save($habilidad)
    {
    }

    public function getAll(): array
    {
        $this->connectionDB->connectDB();
        $query = 'SELECT h.id, h.nombre, ch.nombre as categoria FROM Habilidad as h'
            . ' JOIN CategoriaHabilidad as ch ON ch.id = h.idCategoriaHabilidad';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->execute();
        return $statement
            ->get_result()
            ->fetch_all(MYSQLI_ASSOC);
    }
}
