CREATE DATABASE sysrec;
USE sysrec;

CREATE TABLE TipoUsuario (
    id int NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (nombre)
);

CREATE TABLE EstadoInvitacion (
    id int NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (nombre)
);

CREATE TABLE CategoriaHabilidad (
    id int NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (nombre)
);

CREATE TABLE Habilidad (
    id int NOT NULL AUTO_INCREMENT,
    idCategoriaHabilidad int NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idCategoriaHabilidad) REFERENCES CategoriaHabilidad(id),
    UNIQUE (nombre)
);

CREATE TABLE Usuario (
    id int NOT NULL AUTO_INCREMENT,
    idTipoUsuario int NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    contrasenia VARCHAR(255) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    edad int,
    direccion VARCHAR(255),
    curriculum BLOB,
    PRIMARY KEY (id),
    FOREIGN KEY (idTipoUsuario) REFERENCES TipoUsuario(id),
    UNIQUE (correo)
);

CREATE TABLE Proyecto (
    id int NOT NULL AUTO_INCREMENT,
    idUsuarioFundador int NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idUsuarioFundador) REFERENCES Usuario(id)
);

CREATE TABLE Invitacion (
    id int NOT NULL AUTO_INCREMENT,
    idEstadoInvitacion int NOT NULL,
    idUsuario int NOT NULL,
    idProyecto int NOT NULL,
    comentario VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (idEstadoInvitacion) REFERENCES EstadoInvitacion(id),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id),
    FOREIGN KEY (idProyecto) REFERENCES Proyecto(id)
);

CREATE TABLE UsuarioProyecto (    
    idUsuario int NOT NULL,
    idProyecto int NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id),
    FOREIGN KEY (idProyecto) REFERENCES Proyecto(id)
);

CREATE TABLE Calificacion (
    id int NOT NULL AUTO_INCREMENT,    
    idUsuario int NOT NULL,
    idProyecto int NOT NULL,
    idHabilidad int NOT NULL,
    puntos int NOT NULL,
    comentario VARCHAR(255),
    PRIMARY KEY (id),    
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id),
    FOREIGN KEY (idProyecto) REFERENCES Proyecto(id),
    FOREIGN KEY (idHabilidad) REFERENCES Habilidad(id)
);