USE sysrec;

INSERT INTO Usuario (idTipoUsuario, nombre, correo, contrasenia, telefono, edad, curriculum) VALUES
    (2, 'Josué Roldán Guzman', 'josue@gmail.com', '123', '5522232425', 33, NULL),
    (2, 'Brígida Ibañez Solís', 'brigida@gmail.com', '123', '5532333435', 35, NULL),
    (3, 'Ascensión Rincón Castejón', 'ascension@gmail.com', '123', '5542434445', 20, NULL),
    (3, 'María Dolores Blázquez', 'maria@gmail.com', '123', '5552535455', 22, NULL),
    (3, 'Luis Casanova Zabala', 'luis@gmail.com', '123', '5562636465', 24, NULL),
    (3, 'Maite Elías Rosell', 'maite@gmail.com', '123', '5572737475', 26, NULL);

INSERT INTO Proyecto (idUsuarioFundador, nombre, descripcion) VALUES
    (2, 'Google', 'Buscador de páginas web'),
    (2, 'Yahoo', 'Buscador de páginas web'),
    (3, 'ChatGPT', 'API de IA GPT-4');

INSERT INTO UsuarioProyecto (idUsuario, idProyecto) VALUES
    (4, 1),
    (5, 1),
    (6, 3);