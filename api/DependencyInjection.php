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

require_once(dirname(__FILE__) . '/database/daos/interfaces/ICalificacionDAO.php');
require_once(dirname(__FILE__) . '/database/daos/implements/CalificacionDAOImpl.php');
require_once(dirname(__FILE__) . '/services/interfaces/ICalificacionService.php');
require_once(dirname(__FILE__) . '/services/implements/CalificacionServiceImpl.php');

require_once(dirname(__FILE__) . '/database/daos/interfaces/IHabilidadDAO.php');
require_once(dirname(__FILE__) . '/database/daos/implements/HabilidadDAOImpl.php');
require_once(dirname(__FILE__) . '/services/interfaces/IHabilidadService.php');
require_once(dirname(__FILE__) . '/services/implements/HabilidadServiceImpl.php');

class DependencyInjection
{
    // Data Base
    private $conexionBD;

    // DAO's
    private $usuarioDAO;
    private $proyectoDAO;
    private $invitacionDAO;
    private $calificacionDAO;
    private $habilidadDAO;

    // Services
    private $usuarioService;
    private $proyectoService;
    private $invitacionService;
    private $calificacionService;
    private $habilidadService;

    public function __construct()
    {
        // Data Base
        $this->conexionBD = new ConnectionDBImpl(ConfigDB::HOST, ConfigDB::USER, ConfigDB::PASSWORD, ConfigDB::NAME_DATABASE);

        // DAO's
        $this->usuarioDAO = new UsuarioDAOImpl($this->conexionBD);
        $this->proyectoDAO = new ProyectoDAOImpl($this->conexionBD);
        $this->invitacionDAO = new InvitacionDAOImpl($this->conexionBD);
        $this->calificacionDAO = new CalificacionDAOImpl($this->conexionBD);
        $this->habilidadDAO = new HabilidadDAOImpl($this->conexionBD);

        // Services
        $this->usuarioService = new UsuarioServiceImpl($this->usuarioDAO, $this->calificacionDAO);
        $this->proyectoService = new ProyectoServiceImpl($this->proyectoDAO, $this->invitacionDAO);
        $this->invitacionService = new InvitacionServiceImpl($this->invitacionDAO);
        $this->calificacionService = new CalificacionServiceImpl($this->calificacionDAO);
        $this->habilidadService = new HabilidadServiceImpl($this->habilidadDAO);
    }

    public function getConnectionDB(): IConnectionDB
    {
        return $this->conexionBD;
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

    public function getCalificacionService(): ICalificacionService
    {
        return $this->calificacionService;
    }

    public function getHabilidadService(): IHabilidadService
    {
        return $this->habilidadService;
    }
}
