<?php

/**
 * Clase abstracta que gestiona las peticiones del cliente.
 */
abstract class GenericController
{
    /**
     * Gestiona las peticiones del cliente tipo GET.
     * 
     * @param $parameters Parametros de una peticion GET.
     */
    abstract protected function requestGet($parameters);

    /**
     * Gestiona las peticiones del cliente tipo POST.
     * 
     * @param $body Cuerpo de una peticion POST.
     */
    abstract protected function requestPost($body);

    /**
     * Gestiona las peticiones del cliente segun su verbo.
     * 
     * @param $requestMethod Tipo de peticion.
     * @param $parameters Parametros de una peticion GET.
     * @param $body Cuerpo de una peticion.
     */
    public function request($requestMethod, $parameters, $body)
    {
        switch ($requestMethod) {
            case 'GET':
                $this->requestGet($parameters);
                break;

            case 'POST':
                $this->requestPost($body);
                break;
        }
    }
}