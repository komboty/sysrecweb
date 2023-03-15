<?php

/**
 * Interface que define consultas que todo DAO debe tener.
 */
interface IGenericDAO
{
    /**
     * Hace un registro.
     * 
     * @return registro.
     */
    public function save($data);

    /**
     * Obtiene todos los registros.
     * 
     * @return array registros encontrados.
     */
    public function getAll(): array;
}