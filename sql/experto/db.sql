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
-- Table structure for table `expertos`
--

DROP TABLE IF EXISTS `expertos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `expertos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `nombre_completo` varchar(50) DEFAULT NULL,
  `numero_telefonico` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `cargo` varchar(50) DEFAULT NULL,
  `tiempo_experiencia` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `expertos`
--
LOCK TABLES `expertos` WRITE;
/*!40000 ALTER TABLE `expertos` DISABLE KEYS */;
INSERT INTO `expertos` VALUES 
('1','samuel.ingeniero','1234','Samuel González','3212345678','samuel.ingeniero@gmail.com','Ingeniero','7 años'),
('2','raul.hernandez','abcd','Raúl Hernández','3156789123','raul.hernandez@gmail.com','Desarrollador','5 años'),
('3','laura.martinez','efgh','Laura Martínez','3134567890','laura.martinez@gmail.com','Transportista','4 años'),
('4','ana.perez','ijkl','Ana Pérez','3145678901','ana.perez@gmail.com','Creadora de Contenido','3 años'),
('5','carlos.rodriguez','mnop','Carlos Rodríguez','3123456789','carlos.rodriguez@gmail.com','Abogado','6 años'),
('6','maria.santos','qrst','María Santos','3109876543','maria.santos@gmail.com','Diseñadora Gráfica','4 años'),
('7','pedro.lopez','uvwx','Pedro López','3167890123','pedro.lopez@gmail.com','Médico','8 años'),
('8','claudia.gomez','yz12','Claudia Gómez','3178901234','claudia.gomez@gmail.com','Psicóloga','5 años'),
('9','juan.torres','3456','Juan Torres','3190123456','juan.torres@gmail.com','Ingeniero Civil','6 años'),
('10','patricia.ortiz','7890','Patricia Ortiz','3132109876','patricia.ortiz@gmail.com','Contadora','4 años'),
('11','diana.mendoza','WXYZ','Diana Mendoza','3145678901','diana.mendoza@gmail.com','Nutricionista','7 años'),
('12','andres.lopez','ABCD','Andrés López','3132109876','andres.lopez@gmail.com','Arquitecto','5 años'),
('13','martha.rosales','EFGH','Martha Rosales','3167890123','martha.rosales@gmail.com','Psiquiatra','6 años'),
('14','felipe.garcia','IJKL','Felipe García','3101234567','felipe.garcia@gmail.com','Abogado','4 años'),
('15','luisa.pineda','MNOP','Luisa Pineda','3198765432','luisa.pineda@gmail.com','Ingeniera de Software','8 años'),
('16','carolina.ruiz','QRST','Carolina Ruiz','3123456789','carolina.ruiz@gmail.com','Diseñadora de Moda','3 años'),
('17','eduardo.mora','UVWX','Eduardo Mora','3112345678','eduardo.mora@gmail.com','Ingeniero Eléctrico','9 años'),
('18','silvia.fernandez','YZ12','Silvia Fernández','3178901234','silvia.fernandez@gmail.com','Contadora','4 años'),
('19','manuel.gutierrez','3456','Manuel Gutiérrez','3156789123','manuel.gutierrez@gmail.com','Médico','6 años'),
('20','julia.ramirez','7890','Julia Ramírez','3189012345','julia.ramirez@gmail.com','Dentista','7 años');
UNLOCK TABLES;
