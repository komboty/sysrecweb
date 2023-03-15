<?php

/**
 * Interface que define los metodos que debe tener todos los servicios.
 */
interface IGenericService
{
    /**
     * Regsitra uno.
     */
    public function save($data);

    /**
     * Obtiene todos.
     * 
     * @return array.
     */
    public function getAll(): array;
}