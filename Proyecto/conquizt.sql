-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2022 a las 18:56:13
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `conquizt`
--
CREATE DATABASE IF NOT EXISTS `conquizt` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `conquizt`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `idCategoria` int(11) NOT NULL,
  `tipoCategoria` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `civilizaciones`
--

CREATE TABLE `civilizaciones` (
  `idCivilizacion` int(11) NOT NULL,
  `tipoCivilizacion` varchar(20) NOT NULL,
  `descripcionFaccion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `civilizaciones`
--

INSERT INTO `civilizaciones` (`idCivilizacion`, `tipoCivilizacion`, `descripcionFaccion`) VALUES
(1, 'Mongoles', 'Los mongoles son un grupo étnico que se originó en lo que en la actualidad es Mongolia, Rusia y la República Popular China, en esta última principalmente en lo que hoy en día es la región autónoma de Mongolia Interior, y las repúblicas de Buriatia, Kalmukia, Tuvá y Yakutia de la Federación Rusa'),
(2, 'Francos', 'Los francos fueron una comunidad de pueblos procedentes de Baja Renania y de los territorios situados al este del Rin, que al igual que muchas otras tribus germánicas occidentales entró a formar parte del Imperio romano en su última etapa en calidad de foederati, asentándose en el Limes.'),
(3, 'Japoneses', 'Estos prisioneros deben realizar trabajos forzados en circunstancias atroces. Dispersos por todo el este asiático, los japoneses establecieron campos de internamiento, también conocidos como «campos japoneses» («Jappenkampen» en neerlandés).'),
(4, 'Vikingos', 'Vikingo es el principal nombre dado a los guerreros que realizaban incursiones de saqueos, provenientes de los pueblos nórdicos procedentes de Escandinavia, famosos por ser grandes navegantes y por llevar a cabo pillajes y ataques en Europa.'),
(5, 'Egipcios', 'El Antiguo Egipto o el Egipto Antiguo fue una civilización de la Antigüedad, que se originó a lo largo del cauce medio y bajo del río Nilo, cuya historia abarca más de tres milenios. Se la considera una de las más importantes de la humanidad'),
(6, 'Romanos', 'La Antigua Roma o Roma Antigua fue tanto la ciudad de Roma como el Estado que fundó en la Antigüedad. La civilización romana, de origen latino, se formó en el siglo VIII a. C. a partir de la agrupación de varios pueblos de la Italia central');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `idJugador` int(11) NOT NULL,
  `idUsuario` int(11) DEFAULT 1,
  `idPartida` int(11) DEFAULT NULL,
  `numJugador` int(11) DEFAULT NULL,
  `equipoJugador` int(11) NOT NULL DEFAULT 0,
  `nickname` varchar(60) DEFAULT 'Invitado',
  `color` varchar(25) DEFAULT 'rgba(255,255,255,0.99)',
  `idFaccion` int(11) DEFAULT 1,
  `ptsAcumulados` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`idJugador`, `idUsuario`, `idPartida`, `numJugador`, `equipoJugador`, `nickname`, `color`, `idFaccion`, `ptsAcumulados`) VALUES
(1, 1, 1, 1, 1, 'Jugador 1', 'rgba(255, 0, 0, 0.99)', 6, 0),
(2, 1, 1, 2, 2, 'Jugador 2', 'rgba(35, 15, 216, 0.99)', 2, 0),
(3, 1, 1, 3, 3, 'Invitado', 'rgba(255,255,255,0.99)', 1, 0),
(4, 1, 2, 1, 1, 'Invitado', 'rgba(255,255,255,0.99)', 1, 0),
(5, 1, 2, 2, 2, 'Invitado', 'rgba(255,255,255,0.99)', 1, 0),
(6, 1, 2, 3, 3, 'Invitado', 'rgba(255,255,255,0.99)', 1, 0),
(7, 1, 3, 1, 1, 'Jugador 1', 'rgba(255, 0, 0, 0.99)', 1, 3),
(8, 1, 3, 2, 2, 'Jugador 2', 'rgba(35, 15, 216, 0.99)', 2, 0),
(9, 1, 3, 3, 3, 'Jugador 3', 'rgba(15, 15, 15, 0.99)', 4, 0),
(10, 1, 4, 1, 1, 'Jugador 1', 'rgba(255, 0, 0, 0.99)', 1, 3),
(11, 1, 4, 2, 2, 'Jugador 2', 'rgba(35, 15, 216, 0.99)', 3, 0),
(12, 1, 4, 3, 3, 'Jugador 3', 'rgba(11, 200, 206, 0.99)', 4, 0),
(13, 1, 4, 4, 4, 'Jugador 4', 'rgba(206, 11, 164, 0.99)', 2, 6),
(14, 1, 5, 1, 1, 'Invitado', 'rgba(255,255,255,0.99)', 1, 0),
(15, 1, 5, 2, 2, 'Invitado', 'rgba(255,255,255,0.99)', 1, 0),
(16, 1, 5, 3, 3, 'Invitado', 'rgba(255,255,255,0.99)', 1, 0),
(17, 1, 6, 1, 1, 'Jugador 1', 'rgba(255, 0, 0, 0.99)', 3, 3),
(18, 1, 6, 2, 2, 'Jugador 2', 'rgba(35, 15, 216, 0.99)', 4, 0),
(19, 1, 6, 3, 3, 'Jugador 3', 'rgba(11, 200, 206, 0.99)', 2, 0),
(20, 1, 6, 4, 4, 'Jugador 4', 'rgba(15, 15, 15, 0.99)', 5, 0),
(21, 1, 7, 1, 1, 'Jugador 1', 'rgba(255, 0, 0, 0.99)', 2, 3),
(22, 1, 7, 2, 2, 'Jugador 2', 'rgba(35, 15, 216, 0.99)', 3, 6),
(23, 1, 7, 3, 3, 'Jugador 3', 'rgba(11, 200, 206, 0.99)', 6, 3),
(24, 1, 7, 4, 4, 'Jugador 4', 'rgba(216, 105, 15, 0.99)', 4, 0),
(25, 1, 8, 1, 1, 'Jugador 1', 'rgba(255, 0, 0, 0.99)', 2, 6),
(26, 1, 8, 2, 2, 'Jugador 2', 'rgba(81, 255, 0, 0.99)', 4, 0),
(27, 1, 8, 3, 3, 'Jugador 3', 'rgba(11, 200, 206, 0.99)', 2, 3),
(28, 1, 8, 4, 4, 'Jugador 4', 'rgba(15, 15, 15, 0.99)', 6, 3),
(29, 1, 9, 1, 1, 'Jugador 1', 'rgba(255, 0, 0, 0.99)', 2, 3),
(30, 1, 9, 2, 2, 'Jugador 2', 'rgba(35, 15, 216, 0.99)', 1, 0),
(31, 1, 10, 1, 1, 'Agustin', 'rgba(255, 0, 0, 0.99)', 6, 3),
(32, 1, 10, 2, 2, 'Carlitos', 'rgba(35, 15, 216, 0.99)', 4, 3),
(33, 1, 10, 3, 3, 'Juancito', 'rgba(216, 105, 15, 0.99)', 3, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidas`
--

CREATE TABLE `partidas` (
  `idPartida` int(11) NOT NULL,
  `ronda` int(2) NOT NULL DEFAULT 1,
  `modoJuego` enum('FFA','1vs1','2vs2','Triple') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `partidas`
--

INSERT INTO `partidas` (`idPartida`, `ronda`, `modoJuego`) VALUES
(1, 1, 'Triple'),
(2, 1, 'Triple'),
(3, 3, 'Triple'),
(4, 3, 'FFA'),
(5, 1, 'Triple'),
(6, 1, 'FFA'),
(7, 3, 'FFA'),
(8, 3, 'FFA'),
(9, 3, '1vs1'),
(10, 3, 'Triple');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `idPregunta` int(11) NOT NULL,
  `pregunta` varchar(200) DEFAULT NULL,
  `respuesta1` varchar(60) DEFAULT NULL,
  `respuesta2` varchar(60) DEFAULT NULL,
  `respuesta3` varchar(60) DEFAULT NULL,
  `respuesta4` varchar(60) DEFAULT NULL,
  `respuestaCorrecta` int(1) NOT NULL DEFAULT 1,
  `dificultad` enum('facil','intermedio','dificil') DEFAULT NULL,
  `idCivilizacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`idPregunta`, `pregunta`, `respuesta1`, `respuesta2`, `respuesta3`, `respuesta4`, `respuestaCorrecta`, `dificultad`, `idCivilizacion`) VALUES
(12, '¿Quién unificó al pueblo mongol como primer gran gobernante?', 'Balingiin Tserendorj', 'Mongke Jan', 'Ogodei Khan', 'Gengis Kan', 4, 'facil', 1),
(13, '¿Cuál fue la principal religión mongola?', 'Cristianismo', 'Hinduismo', 'Lamaísmo', 'Paganos', 3, 'intermedio', 1),
(14, '¿Cuál fue el nombre del \"Gran conquistador\" antes de ser llamado Gengis Kan?', 'Ogodei', 'Temuyin', 'Mulan', 'Genyui', 1, 'dificil', 1),
(15, '¿Cuál era la capital de francia en la actualidad?', 'Paris', 'Calais', 'Le Cateau', 'Neuve Chapelle', 1, 'facil', 2),
(16, '¿De que pueblo se origina el pueblo Frances?', 'Romanos', 'Hispanicos', 'Griegos', 'Galos', 4, 'intermedio', 2),
(17, '¿Cuál fue su batalla más sangrienta en la primera guerra mundial?', 'Batalla de Ypres', 'Batalla del Somme', 'Batalla de Verdún', 'Batalla del Marne', 2, 'dificil', 2),
(18, '¿En dónde se ubica Japón?', 'En una cordillera', 'En una meseta', 'En una Isla', 'En un archipiélago', 4, 'facil', 3),
(19, '¿Cómo se le denominaba a un terrateniente en el Japón feudal?', 'Shogun', 'Daimyo', 'Kami', 'Sessho', 2, 'intermedio', 3),
(20, '¿Cómo se denomina a la edad antigua?', 'Kodai', 'Kinsei', 'Gendai', 'Edo', 1, 'dificil', 3),
(21, '¿Cómo denominaban a sus esclavos?', 'Drakkar', 'Jarl', 'Thrall', 'Karl', 3, 'intermedio', 4),
(22, '¿En qué año se dice que dio inició la Era Vikinga?', '71 d.c.', '793 d.c.', '1003 d.c.', '563 d.c.', 2, 'dificil', 4),
(23, '¿Cuál de los 3 grupos vikingos atacó primero a los reinos Ingleses?', 'Germanos', 'Daneses', 'Noruegos', 'Suecos', 2, 'facil', 4),
(24, '¿Cuál es la actual capital de Egipto?', 'El Cairo', 'Alejandría', 'Luxor', 'Ankara', 1, 'facil', 5),
(25, '¿Qué tipo de gobierno tenían los egipcios?', 'Democracia', 'Teocracia', 'Monarquía', 'Imperio', 2, 'intermedio', 5),
(26, 'La temporada de crecida de la cosecha era entre…', 'Junio - Octubre', 'Octubre - Marzo', 'Marzo - Junio', 'Marzo - Octubre', 3, 'dificil', 5),
(27, '¿En cuántos continentes se extendió el Imperio Romano?', '4', '2', '3', '5', 3, 'facil', 6),
(28, '¿Dónde tuvo su origen Roma?', 'En Aventino como colonia griega', 'En Macedonia', 'Una provincia de Hispania', 'A orillas del río Tíber', 4, 'intermedio', 6),
(29, '¿En qué año se fundó Roma?', '753 a.c.', '1 d.c.', '183 a.c.', '83 d.c.', 1, 'dificil', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `territorioporpartida`
--

CREATE TABLE `territorioporpartida` (
  `idPartida` int(11) DEFAULT NULL,
  `idTerritorio` int(11) DEFAULT NULL,
  `idDuenioDelTerritorio` int(11) DEFAULT NULL,
  `idFaccion` int(11) DEFAULT NULL,
  `cantSoldados` int(11) DEFAULT 10,
  `dificultadPreguntas` enum('Fácil','Intermedio','Difícil') DEFAULT 'Fácil'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `territorioporpartida`
--

INSERT INTO `territorioporpartida` (`idPartida`, `idTerritorio`, `idDuenioDelTerritorio`, `idFaccion`, `cantSoldados`, `dificultadPreguntas`) VALUES
(1, 1, NULL, NULL, 10, 'Fácil'),
(1, 2, NULL, NULL, 10, 'Fácil'),
(1, 3, NULL, NULL, 10, 'Fácil'),
(1, 4, NULL, NULL, 10, 'Fácil'),
(1, 5, NULL, NULL, 10, 'Fácil'),
(1, 6, NULL, NULL, 10, 'Fácil'),
(1, 7, NULL, NULL, 10, 'Fácil'),
(1, 8, NULL, NULL, 10, 'Fácil'),
(1, 9, NULL, NULL, 10, 'Fácil'),
(1, 10, NULL, NULL, 10, 'Fácil'),
(1, 11, NULL, NULL, 10, 'Fácil'),
(1, 12, NULL, NULL, 10, 'Fácil'),
(1, 13, NULL, NULL, 10, 'Fácil'),
(1, 14, NULL, NULL, 10, 'Fácil'),
(1, 15, NULL, NULL, 10, 'Fácil'),
(1, 16, NULL, NULL, 10, 'Fácil'),
(1, 17, NULL, NULL, 10, 'Fácil'),
(1, 18, NULL, NULL, 10, 'Fácil'),
(1, 19, NULL, NULL, 10, 'Fácil'),
(1, 20, NULL, NULL, 10, 'Fácil'),
(1, 21, NULL, NULL, 10, 'Fácil'),
(1, 22, NULL, NULL, 10, 'Fácil'),
(1, 23, NULL, NULL, 10, 'Fácil'),
(1, 24, NULL, NULL, 10, 'Fácil'),
(1, 25, NULL, NULL, 10, 'Fácil'),
(1, 26, NULL, NULL, 10, 'Fácil'),
(1, 27, NULL, NULL, 10, 'Fácil'),
(1, 28, NULL, NULL, 10, 'Fácil'),
(1, 29, NULL, NULL, 10, 'Fácil'),
(1, 30, NULL, NULL, 10, 'Fácil'),
(1, 31, NULL, NULL, 10, 'Fácil'),
(1, 32, NULL, NULL, 10, 'Fácil'),
(1, 33, NULL, NULL, 10, 'Fácil'),
(1, 34, NULL, NULL, 10, 'Fácil'),
(1, 35, NULL, NULL, 10, 'Fácil'),
(2, 1, NULL, NULL, 10, 'Fácil'),
(2, 2, NULL, NULL, 10, 'Fácil'),
(2, 3, NULL, NULL, 10, 'Fácil'),
(2, 4, NULL, NULL, 10, 'Fácil'),
(2, 5, NULL, NULL, 10, 'Fácil'),
(2, 6, NULL, NULL, 10, 'Fácil'),
(2, 7, NULL, NULL, 10, 'Fácil'),
(2, 8, NULL, NULL, 10, 'Fácil'),
(2, 9, NULL, NULL, 10, 'Fácil'),
(2, 10, NULL, NULL, 10, 'Fácil'),
(2, 11, NULL, NULL, 10, 'Fácil'),
(2, 12, NULL, NULL, 10, 'Fácil'),
(2, 13, NULL, NULL, 10, 'Fácil'),
(2, 14, NULL, NULL, 10, 'Fácil'),
(2, 15, NULL, NULL, 10, 'Fácil'),
(2, 16, NULL, NULL, 10, 'Fácil'),
(2, 17, NULL, NULL, 10, 'Fácil'),
(2, 18, NULL, NULL, 10, 'Fácil'),
(2, 19, NULL, NULL, 10, 'Fácil'),
(2, 20, NULL, NULL, 10, 'Fácil'),
(2, 21, NULL, NULL, 10, 'Fácil'),
(2, 22, NULL, NULL, 10, 'Fácil'),
(2, 23, NULL, NULL, 10, 'Fácil'),
(2, 24, NULL, NULL, 10, 'Fácil'),
(2, 25, NULL, NULL, 10, 'Fácil'),
(2, 26, NULL, NULL, 10, 'Fácil'),
(2, 27, NULL, NULL, 10, 'Fácil'),
(2, 28, NULL, NULL, 10, 'Fácil'),
(2, 29, NULL, NULL, 10, 'Fácil'),
(2, 30, NULL, NULL, 10, 'Fácil'),
(2, 31, NULL, NULL, 10, 'Fácil'),
(2, 32, NULL, NULL, 10, 'Fácil'),
(2, 33, NULL, NULL, 10, 'Fácil'),
(2, 34, NULL, NULL, 10, 'Fácil'),
(2, 35, NULL, NULL, 10, 'Fácil'),
(3, 1, NULL, NULL, 10, 'Fácil'),
(3, 2, NULL, NULL, 10, 'Fácil'),
(3, 3, NULL, NULL, 10, 'Fácil'),
(3, 4, NULL, NULL, 10, 'Fácil'),
(3, 5, NULL, NULL, 10, 'Fácil'),
(3, 6, NULL, NULL, 10, 'Fácil'),
(3, 7, NULL, NULL, 10, 'Fácil'),
(3, 8, 7, 1, 33, 'Fácil'),
(3, 9, NULL, NULL, 10, 'Fácil'),
(3, 10, NULL, NULL, 10, 'Fácil'),
(3, 11, NULL, NULL, 10, 'Fácil'),
(3, 12, NULL, NULL, 10, 'Fácil'),
(3, 13, NULL, NULL, 10, 'Fácil'),
(3, 14, NULL, NULL, 10, 'Fácil'),
(3, 15, NULL, NULL, 10, 'Fácil'),
(3, 16, NULL, NULL, 10, 'Fácil'),
(3, 17, NULL, NULL, 10, 'Fácil'),
(3, 18, NULL, NULL, 10, 'Fácil'),
(3, 19, NULL, NULL, 10, 'Fácil'),
(3, 20, NULL, NULL, 10, 'Fácil'),
(3, 21, NULL, NULL, 10, 'Fácil'),
(3, 22, NULL, NULL, 10, 'Fácil'),
(3, 23, NULL, NULL, 10, 'Fácil'),
(3, 24, NULL, NULL, 10, 'Fácil'),
(3, 25, NULL, NULL, 10, 'Fácil'),
(3, 26, NULL, NULL, 10, 'Fácil'),
(3, 27, NULL, NULL, 10, 'Fácil'),
(3, 28, NULL, NULL, 10, 'Fácil'),
(3, 29, NULL, NULL, 10, 'Fácil'),
(3, 30, NULL, NULL, 10, 'Fácil'),
(3, 31, NULL, NULL, 10, 'Fácil'),
(3, 32, NULL, NULL, 10, 'Fácil'),
(3, 33, NULL, NULL, 10, 'Fácil'),
(3, 34, NULL, NULL, 10, 'Fácil'),
(3, 35, NULL, NULL, 10, 'Fácil'),
(5, 1, NULL, NULL, 10, 'Fácil'),
(5, 2, NULL, NULL, 10, 'Fácil'),
(5, 3, NULL, NULL, 10, 'Fácil'),
(5, 4, NULL, NULL, 10, 'Fácil'),
(5, 5, NULL, NULL, 10, 'Fácil'),
(5, 6, NULL, NULL, 10, 'Fácil'),
(5, 7, NULL, NULL, 10, 'Fácil'),
(5, 8, NULL, NULL, 10, 'Fácil'),
(5, 9, NULL, NULL, 10, 'Fácil'),
(5, 10, NULL, NULL, 10, 'Fácil'),
(5, 11, NULL, NULL, 10, 'Fácil'),
(5, 12, NULL, NULL, 10, 'Fácil'),
(5, 13, NULL, NULL, 10, 'Fácil'),
(5, 14, NULL, NULL, 10, 'Fácil'),
(5, 15, NULL, NULL, 10, 'Fácil'),
(5, 16, NULL, NULL, 10, 'Fácil'),
(5, 17, NULL, NULL, 10, 'Fácil'),
(5, 18, NULL, NULL, 10, 'Fácil'),
(5, 19, NULL, NULL, 10, 'Fácil'),
(5, 20, NULL, NULL, 10, 'Fácil'),
(5, 21, NULL, NULL, 10, 'Fácil'),
(5, 22, NULL, NULL, 10, 'Fácil'),
(5, 23, NULL, NULL, 10, 'Fácil'),
(5, 24, NULL, NULL, 10, 'Fácil'),
(5, 25, NULL, NULL, 10, 'Fácil'),
(5, 26, NULL, NULL, 10, 'Fácil'),
(5, 27, NULL, NULL, 10, 'Fácil'),
(5, 28, NULL, NULL, 10, 'Fácil'),
(5, 29, NULL, NULL, 10, 'Fácil'),
(5, 30, NULL, NULL, 10, 'Fácil'),
(5, 31, NULL, NULL, 10, 'Fácil'),
(5, 32, NULL, NULL, 10, 'Fácil'),
(5, 33, NULL, NULL, 10, 'Fácil'),
(5, 34, NULL, NULL, 10, 'Fácil'),
(5, 35, NULL, NULL, 10, 'Fácil'),
(6, 1, NULL, NULL, 10, 'Fácil'),
(6, 2, NULL, NULL, 10, 'Fácil'),
(6, 3, NULL, NULL, 10, 'Fácil'),
(6, 4, NULL, NULL, 10, 'Fácil'),
(6, 5, NULL, NULL, 10, 'Fácil'),
(6, 6, NULL, NULL, 10, 'Fácil'),
(6, 7, NULL, NULL, 10, 'Fácil'),
(6, 8, NULL, NULL, 10, 'Fácil'),
(6, 9, NULL, NULL, 10, 'Fácil'),
(6, 10, NULL, NULL, 10, 'Fácil'),
(6, 11, 17, 3, 31, 'Fácil'),
(6, 12, 17, 3, 10, 'Fácil'),
(6, 13, NULL, NULL, 10, 'Fácil'),
(6, 14, NULL, NULL, 10, 'Fácil'),
(6, 15, NULL, NULL, 10, 'Fácil'),
(6, 16, NULL, NULL, 10, 'Fácil'),
(6, 17, NULL, NULL, 10, 'Fácil'),
(6, 18, NULL, NULL, 10, 'Fácil'),
(6, 19, NULL, NULL, 10, 'Fácil'),
(6, 20, NULL, NULL, 10, 'Fácil'),
(6, 21, NULL, NULL, 10, 'Fácil'),
(6, 22, NULL, NULL, 10, 'Fácil'),
(6, 23, NULL, NULL, 10, 'Fácil'),
(6, 24, NULL, NULL, 10, 'Fácil'),
(6, 25, NULL, NULL, 10, 'Fácil'),
(6, 26, NULL, NULL, 10, 'Fácil'),
(6, 27, NULL, NULL, 10, 'Fácil'),
(6, 28, NULL, NULL, 10, 'Fácil'),
(6, 29, NULL, NULL, 10, 'Fácil'),
(6, 30, NULL, NULL, 10, 'Fácil'),
(6, 31, NULL, NULL, 10, 'Fácil'),
(6, 32, NULL, NULL, 10, 'Fácil'),
(6, 33, NULL, NULL, 10, 'Fácil'),
(6, 34, NULL, NULL, 10, 'Fácil'),
(6, 35, NULL, NULL, 10, 'Fácil'),
(8, 1, 28, 6, 36, 'Fácil'),
(8, 2, NULL, NULL, 10, 'Fácil'),
(8, 3, NULL, NULL, 10, 'Fácil'),
(8, 4, NULL, NULL, 10, 'Fácil'),
(8, 5, NULL, NULL, 10, 'Fácil'),
(8, 6, NULL, NULL, 10, 'Fácil'),
(8, 7, 27, 2, 37, 'Fácil'),
(8, 8, 25, 2, 24, 'Fácil'),
(8, 9, NULL, NULL, 10, 'Fácil'),
(8, 10, NULL, NULL, 10, 'Fácil'),
(8, 11, 25, 2, 32, 'Fácil'),
(8, 12, NULL, NULL, 10, 'Fácil'),
(8, 13, NULL, NULL, 10, 'Fácil'),
(8, 14, NULL, NULL, 10, 'Fácil'),
(8, 15, NULL, NULL, 10, 'Fácil'),
(8, 16, NULL, NULL, 10, 'Fácil'),
(8, 17, NULL, NULL, 10, 'Fácil'),
(8, 18, NULL, NULL, 10, 'Fácil'),
(8, 19, NULL, NULL, 10, 'Fácil'),
(8, 20, NULL, NULL, 10, 'Fácil'),
(8, 21, NULL, NULL, 10, 'Fácil'),
(8, 22, NULL, NULL, 10, 'Fácil'),
(8, 23, NULL, NULL, 10, 'Fácil'),
(8, 24, NULL, NULL, 10, 'Fácil'),
(8, 25, NULL, NULL, 10, 'Fácil'),
(8, 26, NULL, NULL, 10, 'Fácil'),
(8, 27, NULL, NULL, 10, 'Fácil'),
(8, 28, NULL, NULL, 10, 'Fácil'),
(8, 29, NULL, NULL, 10, 'Fácil'),
(8, 30, NULL, NULL, 10, 'Fácil'),
(8, 31, NULL, NULL, 10, 'Fácil'),
(8, 32, NULL, NULL, 10, 'Fácil'),
(8, 33, NULL, NULL, 10, 'Fácil'),
(8, 34, NULL, NULL, 10, 'Fácil'),
(8, 35, NULL, NULL, 10, 'Fácil'),
(9, 1, 29, 2, 25, 'Fácil'),
(9, 2, NULL, NULL, 10, 'Fácil'),
(9, 3, NULL, NULL, 10, 'Fácil'),
(9, 4, NULL, NULL, 10, 'Fácil'),
(9, 5, NULL, NULL, 10, 'Fácil'),
(9, 6, NULL, NULL, 10, 'Fácil'),
(9, 7, NULL, NULL, 10, 'Fácil'),
(9, 8, NULL, NULL, 10, 'Fácil'),
(9, 9, NULL, NULL, 10, 'Fácil'),
(9, 10, NULL, NULL, 10, 'Fácil'),
(9, 11, NULL, NULL, 10, 'Fácil'),
(9, 12, NULL, NULL, 10, 'Fácil'),
(9, 13, NULL, NULL, 10, 'Fácil'),
(9, 14, NULL, NULL, 10, 'Fácil'),
(9, 15, NULL, NULL, 10, 'Fácil'),
(9, 16, NULL, NULL, 10, 'Fácil'),
(9, 17, NULL, NULL, 10, 'Fácil'),
(9, 18, NULL, NULL, 10, 'Fácil'),
(9, 19, NULL, NULL, 10, 'Fácil'),
(9, 20, NULL, NULL, 10, 'Fácil'),
(9, 21, NULL, NULL, 10, 'Fácil'),
(9, 22, NULL, NULL, 10, 'Fácil'),
(9, 23, NULL, NULL, 10, 'Fácil'),
(9, 24, NULL, NULL, 10, 'Fácil'),
(9, 25, NULL, NULL, 10, 'Fácil'),
(9, 26, NULL, NULL, 10, 'Fácil'),
(9, 27, NULL, NULL, 10, 'Fácil'),
(9, 28, NULL, NULL, 10, 'Fácil'),
(9, 29, NULL, NULL, 10, 'Fácil'),
(9, 30, NULL, NULL, 10, 'Fácil'),
(9, 31, NULL, NULL, 10, 'Fácil'),
(9, 32, NULL, NULL, 10, 'Fácil'),
(9, 33, NULL, NULL, 10, 'Fácil'),
(9, 34, NULL, NULL, 10, 'Fácil'),
(9, 35, NULL, NULL, 10, 'Fácil'),
(10, 1, NULL, NULL, 10, 'Fácil'),
(10, 2, 32, 4, 22, 'Fácil'),
(10, 3, NULL, NULL, 10, 'Fácil'),
(10, 4, NULL, NULL, 10, 'Fácil'),
(10, 5, NULL, NULL, 10, 'Fácil'),
(10, 6, NULL, NULL, 10, 'Fácil'),
(10, 7, 33, 3, 31, 'Fácil'),
(10, 8, NULL, NULL, 10, 'Fácil'),
(10, 9, NULL, NULL, 10, 'Fácil'),
(10, 10, NULL, NULL, 10, 'Fácil'),
(10, 11, NULL, NULL, 10, 'Fácil'),
(10, 12, NULL, NULL, 10, 'Fácil'),
(10, 13, NULL, NULL, 10, 'Fácil'),
(10, 14, NULL, NULL, 10, 'Fácil'),
(10, 15, 31, 6, 32, 'Fácil'),
(10, 16, 33, 3, 24, 'Fácil'),
(10, 17, NULL, NULL, 10, 'Fácil'),
(10, 18, NULL, NULL, 10, 'Fácil'),
(10, 19, NULL, NULL, 10, 'Fácil'),
(10, 20, NULL, NULL, 10, 'Fácil'),
(10, 21, NULL, NULL, 10, 'Fácil'),
(10, 22, NULL, NULL, 10, 'Fácil'),
(10, 23, NULL, NULL, 10, 'Fácil'),
(10, 24, NULL, NULL, 10, 'Fácil'),
(10, 25, NULL, NULL, 10, 'Fácil'),
(10, 26, NULL, NULL, 10, 'Fácil'),
(10, 27, NULL, NULL, 10, 'Fácil'),
(10, 28, NULL, NULL, 10, 'Fácil'),
(10, 29, NULL, NULL, 10, 'Fácil'),
(10, 30, NULL, NULL, 10, 'Fácil'),
(10, 31, NULL, NULL, 10, 'Fácil'),
(10, 32, NULL, NULL, 10, 'Fácil'),
(10, 33, NULL, NULL, 10, 'Fácil'),
(10, 34, NULL, NULL, 10, 'Fácil'),
(10, 35, NULL, NULL, 10, 'Fácil');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `territorios`
--

CREATE TABLE `territorios` (
  `idTerritorio` int(11) NOT NULL,
  `nombreTerritorio` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `territorios`
--

INSERT INTO `territorios` (`idTerritorio`, `nombreTerritorio`) VALUES
(1, 'Atenas'),
(2, 'Roma'),
(3, 'Xian'),
(4, 'Angkor'),
(5, 'Petra'),
(6, 'Jerusalén'),
(7, 'Hattusa'),
(8, 'Tebas'),
(9, 'Alejandría'),
(10, 'Persépolis'),
(11, 'Constantinopla'),
(12, 'Pekín'),
(13, 'Cádiz'),
(14, 'Lisboa'),
(15, 'La Canea'),
(16, 'Varanasi'),
(17, 'Kutaisi'),
(18, 'Damasco'),
(19, 'Kirkuk'),
(20, 'Erbil'),
(21, 'Jaffa'),
(22, 'Polvdiv'),
(23, 'Jericó'),
(24, 'Beirut'),
(25, 'Luxor'),
(26, 'Alepo'),
(27, 'Argos'),
(28, 'Byblos'),
(29, 'Luoyang'),
(30, 'Pompeya'),
(31, 'Babilonia'),
(32, 'Menfis'),
(33, 'Coblenza'),
(34, 'Lárnaca'),
(35, 'Balij');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`) VALUES
(1, 'Invitado', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Indices de la tabla `civilizaciones`
--
ALTER TABLE `civilizaciones`
  ADD PRIMARY KEY (`idCivilizacion`);

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`idJugador`),
  ADD KEY `fk_jugadores_usuario` (`idUsuario`),
  ADD KEY `fk_jugadores_partida` (`idPartida`),
  ADD KEY `fk_jugadores_facciones` (`idFaccion`);

--
-- Indices de la tabla `partidas`
--
ALTER TABLE `partidas`
  ADD PRIMARY KEY (`idPartida`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`idPregunta`),
  ADD KEY `idCivilizacion` (`idCivilizacion`);

--
-- Indices de la tabla `territorioporpartida`
--
ALTER TABLE `territorioporpartida`
  ADD KEY `idPartida` (`idPartida`),
  ADD KEY `idTerritorio` (`idTerritorio`),
  ADD KEY `idD` (`idDuenioDelTerritorio`),
  ADD KEY `territorioporpartida_ibfk_4` (`idFaccion`);

--
-- Indices de la tabla `territorios`
--
ALTER TABLE `territorios`
  ADD PRIMARY KEY (`idTerritorio`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idCategoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `civilizaciones`
--
ALTER TABLE `civilizaciones`
  MODIFY `idCivilizacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `idJugador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `partidas`
--
ALTER TABLE `partidas`
  MODIFY `idPartida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `idPregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `territorios`
--
ALTER TABLE `territorios`
  MODIFY `idTerritorio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD CONSTRAINT `fk_jugadores_facciones` FOREIGN KEY (`idFaccion`) REFERENCES `civilizaciones` (`idCivilizacion`),
  ADD CONSTRAINT `fk_jugadores_partida` FOREIGN KEY (`idPartida`) REFERENCES `partidas` (`idPartida`),
  ADD CONSTRAINT `fk_jugadores_usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`idCivilizacion`) REFERENCES `civilizaciones` (`idCivilizacion`);

--
-- Filtros para la tabla `territorioporpartida`
--
ALTER TABLE `territorioporpartida`
  ADD CONSTRAINT `territorioporpartida_ibfk_1` FOREIGN KEY (`idPartida`) REFERENCES `partidas` (`idPartida`),
  ADD CONSTRAINT `territorioporpartida_ibfk_2` FOREIGN KEY (`idTerritorio`) REFERENCES `territorios` (`idTerritorio`),
  ADD CONSTRAINT `territorioporpartida_ibfk_3` FOREIGN KEY (`idDuenioDelTerritorio`) REFERENCES `jugadores` (`idJugador`),
  ADD CONSTRAINT `territorioporpartida_ibfk_4` FOREIGN KEY (`idFaccion`) REFERENCES `civilizaciones` (`idCivilizacion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
