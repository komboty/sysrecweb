<?php
require_once(dirname(__FILE__) . '/database/connection/IConnectionDB.php');
require_once(dirname(__FILE__) . '/database/daos/interfaces/IUsuarioDAO.php');
require_once(dirname(__FILE__) . '/services/interfaces/IUsuarioService.php');
require_once(dirname(__FILE__) . '/services/interfaces/ISessionUser.php');
require_once(dirname(__FILE__) . '/database/connection/ConnectionDBImpl.php');
require_once(dirname(__FILE__) . '/database/daos/implements/UsuarioDAOImpl.php');
require_once(dirname(__FILE__) . '/services/implements/UsuarioServiceImpl.php');
require_once(dirname(__FILE__) . '/services/implements/SessionUserImpl.php');
require_once(dirname(__FILE__) . '/database/ConfigDB.php');

class DependencyInjection
{
    // Data Base
    private $conexionBD;
    // DAO's
    private $usuarioDAO;
    // Services
    private $usuarioService;
    private $sessionUser;

    public function __construct()
    {
        // Data Base
        $this->conexionBD = new ConnectionDBImpl(ConfigDB::HOST, ConfigDB::USER, ConfigDB::PASSWORD, ConfigDB::NAME_DATABASE);

        // DAO's
        $this->usuarioDAO = new UsuarioDAOImpl($this->conexionBD);

        // Services
        $this->usuarioService = new UsuarioServiceImpl($this->usuarioDAO);
        $this->sessionUser = new SessionUserImpl();
    }

    public function getConnectionDB(): IConnectionDB
    {
        return $this->conexionBD;
    }

    public function getUsuarioDAO(): IUsuarioDAO
    {
        return $this->usuarioDAO;
    }

    public function getUsuarioService(): IUsuarioService
    {
        return $this->usuarioService;
    }

    public function getSessionUser(): ISessionUser
    {
        return $this->sessionUser;
    }
}
