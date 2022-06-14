DROP DATABASE IF EXISTS conquizt;

CREATE DATABASE conquizt;

USE conquizt;

CREATE TABLE civilizaciones(

    idCivilizacion INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipoCivilizacion VARCHAR(20) NOT NULL

);

CREATE TABLE jugadores(

    idJugador INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(12) NOT NULL,
    ptsAcumulados INTEGER

);

CREATE TABLE categoria(

    idCategoria INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipoCategoria VARCHAR(20) NOT NULL

);
