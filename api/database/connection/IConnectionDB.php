<?php

/**
 * Interface que define la conexion a la base de datos.
 */
interface IConnectionDB
{
    /**
     * Regresa una conexion a la base de datos.
     * @return conexion a la base de datos.
     */
    public function connectDB();

    /**
     * Inicia una consulta parametrizada.
     * 
     * @param string $query consulta a parametrizar.
     * @return consulta parametrizada.
     */
    public function getPrepare(string $query);
}