<?php
require_once(dirname(__FILE__) . '/database/ConfigDB.php');

require_once(dirname(__FILE__) . '/database/connection/IConnectionDB.php');
require_once(dirname(__FILE__) . '/database/connection/ConnectionDBImpl.php');

require_once(dirname(__FILE__) . '/database/daos/interfaces/IUsuarioDAO.php');
require_once(dirname(__FILE__) . '/database/daos/implements/UsuarioDAOImpl.php');
require_once(dirname(__FILE__) . '/services/interfaces/IUsuarioService.php');
require_once(dirname(__FILE__) . '/services/implements/UsuarioServiceImpl.php');

require_once(dirname(__FILE__) . '/database/daos/interfaces/IProyectoDAO.php');
require_once(dirname(__FILE__) . '/database/daos/implements/ProyectoDAOImpl.php');
require_once(dirname(__FILE__) . '/services/interfaces/IProyectoService.php');
require_once(dirname(__FILE__) . '/services/implements/ProyectoServiceImpl.php');

require_once(dirname(__FILE__) . '/database/daos/interfaces/IInvitacionDAO.php');
require_once(dirname(__FILE__) . '/database/daos/implements/InvitacionDAOImpl.php');
require_once(dirname(__FILE__) . '/services/interfaces/IInvitacionService.php');
require_once(dirname(__FILE__) . '/services/implements/InvitacionServiceImpl.php');

class DependencyInjection
{
    // Data Base
    private $conexionBD;

    // DAO's
    private $usuarioDAO;
    private $proyectoDAO;
    private $invitacionDAO;

    // Services
    private $usuarioService;
    private $proyectoService;
    private $invitacionService;

    public function __construct()
    {
        // Data Base
        $this->conexionBD = new ConnectionDBImpl(ConfigDB::HOST, ConfigDB::USER, ConfigDB::PASSWORD, ConfigDB::NAME_DATABASE);

        // DAO's
        $this->usuarioDAO = new UsuarioDAOImpl($this->conexionBD);
        $this->proyectoDAO = new ProyectoDAOImpl($this->conexionBD);
        $this->invitacionDAO = new InvitacionDAOImpl($this->conexionBD);

        // Services
        $this->usuarioService = new UsuarioServiceImpl($this->usuarioDAO);
        $this->proyectoService = new ProyectoServiceImpl($this->proyectoDAO, $this->invitacionDAO);
        $this->invitacionService = new InvitacionServiceImpl($this->invitacionDAO);
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

    public function getProyectoService(): IProyectoService
    {
        return $this->proyectoService;
    }

    public function getInvitacionService(): IInvitacionService
    {
        return $this->invitacionService;
    }
}
