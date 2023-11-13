-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: proyecto
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `micronegocios`
--

DROP TABLE IF EXISTS `micronegocios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `micronegocios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `campo` varchar(50) DEFAULT NULL,
  `tiempo_en_mercado` varchar(50) DEFAULT NULL,
  `vacantes` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `micronegocios`
--

LOCK TABLES `micronegocios` WRITE;
/*!40000 ALTER TABLE `micronegocios` DISABLE KEYS */;
INSERT INTO `micronegocios` VALUES 
(1, 'Surtifamiliar', '1234', 'servicioalcliente@surtifamiliar.com', 'Supermercados', '10 años', 8),
(2, 'La14', 'abcd', 'contacto@la14.com', 'Supermercados', '8 años', 6),
(3, 'ElRinconDelSabor', '5678', 'info@rincondelsabor.com', 'Restaurantes', '3 años', 4),
(4, 'CaliElectronics', 'efgh', 'info@calielectronics.com', 'Electrónica', '6 años', 3),
(5, 'DulcesCali', 'ijkl', 'contacto@dulcescali.com', 'Alimentos', '4 años', 5),
(6, 'ModaCali', 'mnop', 'info@modacali.com', 'Moda', '7 años', 2),
(7, 'FerreteriaCali', 'qrst', 'servicio@ferreteriacali.com', 'Ferretería', '9 años', 7),
(8, 'SaludCali', 'uvwx', 'contacto@saludcali.com', 'Salud', '5 años', 1),
(9, 'LibreriaCali', 'yz12', 'info@libreriadecali.com', 'Librería', '2 años', 9),
(10, 'BellezaCali', '3456', 'info@bellezacali.com', 'Belleza', '4 años', 4),
(11, 'LaComarca', 'WXYZ', 'info@lacomarca.com', 'Restaurante', '6 años', 5),
(12, 'CasaDelDeporte', 'AB12', 'contacto@casadeldeporte.com', 'Deportes', '7 años', 3),
(13, 'TechCali', 'CD34', 'info@techcali.com', 'Tecnología', '4 años', 6),
(14, 'ArteCali', 'EF56', 'contacto@artecali.com', 'Arte', '3 años', 2),
(15, 'MueblesCali', 'GH78', 'info@mueblescali.com', 'Muebles', '8 años', 4),
(16, 'CafeteriaCali', 'IJ90', 'contacto@cafeteriacali.com', 'Cafetería', '5 años', 1),
(17, 'LibrosyMas', 'KL12', 'info@librosymas.com', 'Librería', '9 años', 7),
(18, 'FitnessCali', 'MN34', 'contacto@fitnesscali.com', 'Fitness', '2 años', 8),
(19, 'JugueteriaCali', 'OP56', 'info@jugueteriacali.com', 'Juguetería', '4 años', 5),
(20, 'DecoracionCali', 'QR78', 'contacto@decoracioncali.com', 'Decoración', '7 años', 3);
/*!40000 ALTER TABLE `micronegocios` ENABLE KEYS */;
UNLOCK TABLES;