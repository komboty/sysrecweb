<?php
require_once(dirname(__FILE__) . '/IConnectionDB.php');
require_once(dirname(dirname(__FILE__)) . '/ConfigDB.php');

/**
 * Clase que implementa la conexion a la base de datos.
 */
class ConnectionDBImpl implements IConnectionDB
{
    private string $host;
    private string $user;
    private string $password;
    private string $nameDatabase;
    private mysqli $connection;

    public function __construct(string $host, string $user, string $password, $nameDatabase)
    {
        $this->host = ConfigDB::HOST;
        $this->user = ConfigDB::USER;
        $this->password = ConfigDB::PASSWORD;
        $this->nameDatabase = ConfigDB::NAME_DATABASE;
    }

    public function connectDB(): mysqli
    {
        $this->connection = new mysqli($this->host, $this->user, $this->password, $this->nameDatabase);
        return $this->connection;
    }


    public function getPrepare(string $query): mysqli_stmt
    {
        return $this->connection->prepare($query);
    }
}
