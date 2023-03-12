<?php
require_once(dirname(__FILE__) . '/UtilsController.php');
require_once(dirname(dirname(__FILE__)) . '/ConfigControllers.php');
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
     * Gestiona las peticiones del cliente tipo DELETE.
     * 
     * @param $body Cuerpo de una peticion DELETE.
     */
    abstract protected function requestDelete($body);

    /**
     * Gestiona las peticiones del cliente segun su verbo.
     * 
     * @param $requestMethod Tipo de peticion.
     * @param $parameters Parametros de una peticion GET.
     * @param $body Cuerpo de una peticion.
     * @param bool $checkSession True: Para que toda peticion verifique si existe una sesion del Usuario en el servidor.
     */
    public function request($requestMethod, $parameters, $body, bool $checkSession = true)
    {
        // Se verifica si existe una sesion del Usuario en el servidor.
        if ($checkSession && !UtilsController::isSessionUser()) {
            header(ConfigControllers::HEADER_STATUS_UNAUTHORIZED);
            return;
        }

        // Se reliza la peticion del cliente segun el verbo.
        switch ($requestMethod) {
            case 'GET':
                $this->requestGet($parameters);
                break;

            case 'POST':
                $this->requestPost($body);
                break;

            case 'DELETE':
                $this->requestDelete($body);
                break;
        }
    }
}
