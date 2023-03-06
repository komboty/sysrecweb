<?php
require_once('utils/Constants.php');

class ConnectionDB
{
    private $host;
    private $user;
    private $password;
    private $database;
    private $connection;

    public function __construct()
    {
        $this->host = ConstantsDB::HOST;
        $this->user = ConstantsDB::USER;
        $this->password = ConstantsDB::PASSWORD;
        $this->database = ConstantsDB::DATABASE;
        $this->connection = new mysqli($this->host, $this->user, $this->password, $this->database);
    }

    /**
     * Inicia una consulta parametrizada.
     * 
     * @param string $query consulta a parametrizar.
     * @return mysqli_stmt consulta parametrizada.
     */
    public function getPrepare(string $query) : mysqli_stmt
    {
        return $this->connection->prepare($query);
    }
}
