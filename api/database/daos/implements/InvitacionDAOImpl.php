<?php
require_once(dirname(dirname(__FILE__)) . '/interfaces/IInvitacionDAO.php');
require_once(dirname(dirname(dirname(__FILE__))) . '/connection/IConnectionDB.php');
require_once(dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/shared/Consts.php');

/**
 * Clase que realiza las consultas a la tabla de Invitacion de la base de datos.
 */
class InvitacionDAOImpl implements IInvitacionDAO
{
    //Conexion a la base de datos.
    private $connectionDB;

    public function __construct(IConnectionDB $connectionDB)
    {
        $this->connectionDB = $connectionDB;
    }

    public function save($invitacion)
    {
        // Se fija la invitacion como enviada.
        $invitacion[Consts::INVITACION_KEY_ESTADO] = Consts::INVITACION_ESTADO_ENVIADA;

        $this->connectionDB->connectDB();
        $query = 'INSERT INTO Invitacion (idEstadoInvitacion, idUsuario, idProyecto, comentario) VALUES'
            . '((SELECT id FROM EstadoInvitacion WHERE nombre = ?), ?, ?, ?)';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param(
            'siis',
            $invitacion[Consts::INVITACION_KEY_ESTADO],
            $invitacion[Consts::INVITACION_KEY_ID_USUARIO],
            $invitacion[Consts::INVITACION_KEY_ID_PROYECTO],
            $invitacion[Consts::INVITACION_KEY_COMENTARIO]
        );
        // Si se registro correctamente la Invitacion se regresa el id.
        if ($statement->execute()) {
            return $statement->insert_id;
        }
        // Si no se registro la Invitacion en  la base de datos.
        return null;
    }

    public function getAll(): array
    {
        return [];
    }

    public function getByProyecto(int $idProyecto): array
    {
        $this->connectionDB->connectDB();
        $query = 'SELECT i.id, ei.nombre as estado, i.idUsuario, u.nombre, u.correo, u.telefono FROM Invitacion as i'
            . ' JOIN Usuario as u ON i.idUsuario = u.id'
            . ' JOIN EstadoInvitacion as ei ON i.idEstadoInvitacion = ei.id'
            . ' WHERE i.idProyecto = ?';
        $statement = $this->connectionDB->getPrepare($query);
        $statement->bind_param('i', $idProyecto);
        $statement->execute();
        return $statement
            ->get_result()
            ->fetch_all(MYSQLI_ASSOC);
    }

    public function getByUsuario(int $idUsuario): array
    {
        return [];
    }
}
