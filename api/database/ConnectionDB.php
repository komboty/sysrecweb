<?php
require_once(dirname(__FILE__) . '/ConfigDB.php');

/**
 * Clase que realiza la conexion a la base de datos.
 */
class ConnectionDB
{
    private $host;
    private $user;
    private $password;
    private $database;
    private $connection;

    public function __construct()
    {
        $this->host = ConfigDB::HOST;
        $this->user = ConfigDB::USER;
        $this->password = ConfigDB::PASSWORD;
        $this->database = ConfigDB::DATABASE;
        $this->connection = new mysqli($this->host, $this->user, $this->password, $this->database);
    }

    /**
     * Inicia una consulta parametrizada.
     * 
     * @param string $query consulta a parametrizar.
     * @return mysqli_stmt consulta parametrizada.
     */
    public function getPrepare(string $query): mysqli_stmt
    {
        return $this->connection->prepare($query);
    }
}
