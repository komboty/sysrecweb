USE sysrec;

INSERT INTO Usuario (idTipoUsuario, nombre, correo, contrasenia, telefono, edad, curriculum) VALUES
    (2, 'Josué Roldán Guzman', 'josue@gmail.com', '123', '5522232425', 33, NULL),
    (2, 'Brígida Ibañez Solís', 'brigida@gmail.com', '123', '5532333435', 35, NULL),
    (3, 'Ascensión Rincón Castejón', 'ascension@gmail.com', '123', '5542434445', 20, NULL),
    (3, 'María Dolores Blázquez', 'maria@gmail.com', '123', '5552535455', 22, NULL),
    (3, 'Luis Casanova Zabala', 'luis@gmail.com', '123', '5562636465', 24, NULL),
    (3, 'Maite Elías Rosell', 'maite@gmail.com', '123', '5572737475', 26, NULL),
    (3, 'Vicente Peñalver Camino', 'vicente@gmail.com', '123', '5582838485', 27, NULL),
    (3, 'Yésica Cortés Parra', 'yesica@gmail.com', '123', '5592939495', 28, NULL),
    (3, 'Zaida María Pilar Rey Almansa', 'zaida@gmail.com', '123', '5512131415', 29, NULL),
    (3, 'Clara Valenciano Peña', 'calara@gmail.com', '123', '5522232425', 30, NULL),
    (3, 'Inocencio Suárez Galán', 'inocencio@gmail.com', '123', '5532333435', 31, NULL);

INSERT INTO Proyecto (idUsuarioFundador, nombre, descripcion) VALUES
    (2, 'Buscador de Google', 'Motor de búsqueda más utilizado en la Web y recibe cientos de millones de consultas cada día a través de sus diferentes servicios. Escrito en Python, C y C++. Fecha de lanzamiento en 1998. 129 idiomas. Número 1 en Ranking Similarweb de 2017'),
    (2, 'Yahoo! Search', 'Portal de búsquedas, usa el motor de búsqueda de Bing de Microsoft para potenciar los resultados. A nivel mundial, ocupa el tercer lugar por cuota en búsquedas en ordenadores y móviles.'),
    (2, 'DuckDuckGo', 'Motor de búsqueda que hace hincapié en la protección y privacidad. No muestra resultados procedentes de granjas de contenido.'),
    (3, 'ChatGPT', 'Prototipo de chatbot de inteligencia artificial desarrollado en 2022 que se especializa en el diálogo. Modelo de lenguaje con técnicas de aprendizaje tanto supervisadas como de refuerzo. Se basa en el modelo GPT-3.5, una versión mejorada de GPT-3.');

INSERT INTO Invitacion (idEstadoInvitacion, idUsuario, idProyecto, comentario) VALUES
    (2, 4, 1, 'Tuvimos la oportunidad de ver tu perfil y nos parece extraordinario; creemos que puede ser de tu interés nuestra invitación'),
    (2, 5, 1, 'Tuvimos la oportunidad de ver tu perfil y nos parece extraordinario; creemos que puede ser de tu interés nuestra invitación'),
    (1, 4, 2, 'Tuvimos la oportunidad de ver tu perfil y nos parece extraordinario; creemos que puede ser de tu interés nuestra invitación'),
    (1, 6, 2, 'Tuvimos la oportunidad de ver tu perfil y nos parece extraordinario; creemos que puede ser de tu interés nuestra invitación'),    
    (2, 4, 3, 'Tuvimos la oportunidad de ver tu perfil y nos parece extraordinario; creemos que puede ser de tu interés nuestra invitación'),
    (3, 7, 3, 'Tuvimos la oportunidad de ver tu perfil y nos parece extraordinario; creemos que puede ser de tu interés nuestra invitación'),
    (3, 4, 4, 'Queremos invitarte a participar en nuestro Proyecto'),
    (3, 8, 4, 'Queremos invitarte a participar en nuestro Proyecto'),
    (2, 9, 4, 'Queremos invitarte a participar en nuestro Proyecto');

INSERT INTO Calificacion (idUsuario, idProyecto, idHabilidad, puntos, comentario) VALUES
    (4, 1, 1, 4, 'Buen programador'),
    (4, 1, 62, 4, 'Comunicación asertiva'),
    (4, 1, 64, 5, 'Muy inteligente'),
    (4, 3, 1, 4, 'Buen estilo'),
    (4, 3, 67, 4, 'Aprende rapido'),
    (4, 3, 64, 5, 'Soluciones rapidas'),
    (5, 1, 1, 5, 'Estilo único'),
    (5, 1, 62, 3, 'Comunicativo'),
    (5, 1, 64, 3, 'Le cuesta dar soluciones rapidas'),
    (9, 4, 1, 2, 'Solo conoce HTML'),
    (9, 4, 62, 3, 'Es poco comunicativo'),
    (9, 4, 64, 1, 'Tarda mucho en entender');