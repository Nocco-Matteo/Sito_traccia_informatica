-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: registro
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assenza`
--

DROP TABLE IF EXISTS `assenza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assenza` (
  `data_ora_assenza` datetime DEFAULT NULL,
  `fk_studente` int(11) NOT NULL,
  `fk_dipendente` int(11) DEFAULT NULL,
  `fk_lezione` int(11) NOT NULL,
  PRIMARY KEY (`fk_studente`,`fk_lezione`),
  KEY `fk_dipendente` (`fk_dipendente`),
  KEY `assenza_FK` (`fk_lezione`),
  CONSTRAINT `assenza_FK` FOREIGN KEY (`fk_lezione`) REFERENCES `lezione` (`id`),
  CONSTRAINT `assenza_ibfk_1` FOREIGN KEY (`fk_studente`) REFERENCES `studente` (`id`),
  CONSTRAINT `assenza_ibfk_2` FOREIGN KEY (`fk_dipendente`) REFERENCES `dipendente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assenza`
--

LOCK TABLES `assenza` WRITE;
/*!40000 ALTER TABLE `assenza` DISABLE KEYS */;
INSERT INTO `assenza` VALUES (NULL,2,2,2),(NULL,3,3,3),(NULL,4,4,4),(NULL,5,5,5),(NULL,6,1,6),(NULL,7,2,7),(NULL,8,3,8),(NULL,9,4,9),(NULL,10,5,10);
/*!40000 ALTER TABLE `assenza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classe`
--

DROP TABLE IF EXISTS `classe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `fk_istituto` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `classe_FK` (`fk_istituto`),
  CONSTRAINT `classe_FK` FOREIGN KEY (`fk_istituto`) REFERENCES `istituto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classe`
--

LOCK TABLES `classe` WRITE;
/*!40000 ALTER TABLE `classe` DISABLE KEYS */;
INSERT INTO `classe` VALUES (1,'1A',1),(2,'1A',2),(3,'1A',3),(4,'1B',1),(5,'1B',2),(6,'1B',3),(7,'2B',1),(8,'2B',2),(9,'2B',3),(10,'2A',1),(11,'2A',2),(12,'2A',3);
/*!40000 ALTER TABLE `classe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compresenze`
--

DROP TABLE IF EXISTS `compresenze`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compresenze` (
  `fk_lezione` int(11) DEFAULT NULL,
  `fk_dipendente` int(11) DEFAULT NULL,
  KEY `fk_lezione` (`fk_lezione`),
  KEY `fk_dipendente` (`fk_dipendente`),
  CONSTRAINT `compresenze_ibfk_1` FOREIGN KEY (`fk_lezione`) REFERENCES `lezione` (`id`),
  CONSTRAINT `compresenze_ibfk_2` FOREIGN KEY (`fk_dipendente`) REFERENCES `dipendente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compresenze`
--

LOCK TABLES `compresenze` WRITE;
/*!40000 ALTER TABLE `compresenze` DISABLE KEYS */;
INSERT INTO `compresenze` VALUES (1,3),(2,3),(5,4),(2,4);
/*!40000 ALTER TABLE `compresenze` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dipendente`
--

DROP TABLE IF EXISTS `dipendente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dipendente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `cognome` varchar(100) DEFAULT NULL,
  `data_di_nascita` datetime DEFAULT NULL,
  `cf` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `fk_ruolo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dipendente_FK` (`fk_ruolo`),
  CONSTRAINT `dipendente_FK` FOREIGN KEY (`fk_ruolo`) REFERENCES `ruolo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dipendente`
--

LOCK TABLES `dipendente` WRITE;
/*!40000 ALTER TABLE `dipendente` DISABLE KEYS */;
INSERT INTO `dipendente` VALUES (1,'Maria','Rossi','1970-01-01 00:00:00','RSSMRA70A01H501U','maria.rossi','password1','maria.rossi@example.com',1),(2,'Luca','Bianchi','1971-02-02 00:00:00','BNCLCU71B02H501V','luca.bianchi','password2','luca.bianchi@example.com',1),(3,'Giulia','Verdi','1972-03-03 00:00:00','VRDGIL72C03H501W','giulia.verdi','password3','giulia.verdi@example.com',2),(4,'Giovanni','Neri','1973-04-04 00:00:00','NRIGNN73D04H501X','giovanni.neri','password4','giovanni.neri@example.com',2),(5,'Francesca','Contis','1974-05-05 00:00:00','CNTFNC74E05H501Y','francesca.conti','password5','francesca.conti@example.com',3);
/*!40000 ALTER TABLE `dipendente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insegnamento`
--

DROP TABLE IF EXISTS `insegnamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insegnamento` (
  `fk_dipendente` int(11) DEFAULT NULL,
  `fk_materia` int(11) DEFAULT NULL,
  KEY `fk_dipendente` (`fk_dipendente`),
  KEY `insegnamento_FK` (`fk_materia`),
  CONSTRAINT `insegnamento_FK` FOREIGN KEY (`fk_materia`) REFERENCES `materia` (`id`),
  CONSTRAINT `insegnamento_ibfk_1` FOREIGN KEY (`fk_dipendente`) REFERENCES `dipendente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insegnamento`
--

LOCK TABLES `insegnamento` WRITE;
/*!40000 ALTER TABLE `insegnamento` DISABLE KEYS */;
INSERT INTO `insegnamento` VALUES (1,1),(2,1),(4,4),(2,1),(5,9);
/*!40000 ALTER TABLE `insegnamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `istituto`
--

DROP TABLE IF EXISTS `istituto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `istituto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipologia` varchar(100) DEFAULT NULL,
  `indirizzo` varchar(100) DEFAULT NULL,
  `articolazione` varchar(100) DEFAULT NULL,
  `opzione` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `istituto`
--

LOCK TABLES `istituto` WRITE;
/*!40000 ALTER TABLE `istituto` DISABLE KEYS */;
INSERT INTO `istituto` VALUES (1,'Liceo','classico','',''),(2,'Tecnico','informatica e telecomunicazioni','informatica',''),(3,'Professionale','servizi per l\'enogastronomia e l\'ospitalità alberghiera','enogastronomia','prodotti dolciari artigianali e industriali');
/*!40000 ALTER TABLE `istituto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lezione`
--

DROP TABLE IF EXISTS `lezione`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lezione` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data_ora_lezione` datetime DEFAULT NULL,
  `fk_dipendente` int(11) DEFAULT NULL,
  `fk_classe` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_dipendente` (`fk_dipendente`),
  KEY `lezione_FK` (`fk_classe`),
  CONSTRAINT `lezione_FK` FOREIGN KEY (`fk_classe`) REFERENCES `classe` (`id`),
  CONSTRAINT `lezione_ibfk_1` FOREIGN KEY (`fk_dipendente`) REFERENCES `dipendente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lezione`
--

LOCK TABLES `lezione` WRITE;
/*!40000 ALTER TABLE `lezione` DISABLE KEYS */;
INSERT INTO `lezione` VALUES (1,'2022-01-01 19:00:00',1,1),(2,'2022-01-02 20:00:00',2,1),(3,'2022-01-03 21:00:00',1,2),(4,'2022-01-04 22:00:00',2,3),(5,'2022-01-05 13:00:00',1,3),(6,'2022-01-06 14:00:00',1,1),(7,'2022-01-07 15:00:00',2,2),(8,'2022-01-08 16:00:00',1,2),(9,'2022-01-09 17:00:00',2,3),(10,'2022-01-10 18:00:00',2,1);
/*!40000 ALTER TABLE `lezione` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materia` (
  `nome` varchar(100) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES ('Arte',1),('Educazione Fisica',2),('Geografia',3),('Informatica',4),('Inglese',5),('Italiano',6),('Matematica',7),('Musica',8),('Scienze',9),('Storia',10);
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruolo`
--

DROP TABLE IF EXISTS `ruolo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ruolo` (
  `tipologia` varchar(300) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruolo`
--

LOCK TABLES `ruolo` WRITE;
/*!40000 ALTER TABLE `ruolo` DISABLE KEYS */;
INSERT INTO `ruolo` VALUES ('Principale',1),('Laboratorio',2),('Sostegno',3);
/*!40000 ALTER TABLE `ruolo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studente`
--

DROP TABLE IF EXISTS `studente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `cognome` varchar(100) DEFAULT NULL,
  `data_di_nascita` datetime DEFAULT NULL,
  `cf` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `fk_classe` int(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_classe` (`fk_classe`),
  CONSTRAINT `studente_ibfk_1` FOREIGN KEY (`fk_classe`) REFERENCES `classe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studente`
--

LOCK TABLES `studente` WRITE;
/*!40000 ALTER TABLE `studente` DISABLE KEYS */;
INSERT INTO `studente` VALUES (2,'Mario','Rossi','2000-01-01 00:00:00','RSSMRA00A01H501U','mario.rossi','password1',1,'mario.rossi@example.com'),(3,'Luigi','Bianchi','2000-02-02 00:00:00','BNCLGU00B02H501V','luigi.bianchi','password2',1,'luigi.bianchi@example.com'),(4,'Anna','Verdi','2000-03-03 00:00:00','VRDANN00C03H501W','anna.verdi','password3',1,'anna.verdi@example.com'),(5,'Giuseppe','Neri','2000-04-04 00:00:00','NRIGSP00D04H501X','giuseppe.neri','password4',1,'giuseppe.neri@example.com'),(6,'Francesca','Conti','2000-05-05 00:00:00','CNTFNC00E05H501Y','francesca.conti','password5',1,'francesca.conti@example.com'),(7,'Marco','Ferrari','2000-06-06 00:00:00','FRRMRC00F06H501Z','marco.ferrari','password6',2,'marco.ferrari@example.com'),(8,'Laura','Esposito','2000-07-07 00:00:00','SPSLRA00G07H502A','laura.esposito','password7',2,'laura.esposito@example.com'),(9,'Sara','Ricci','2000-08-08 00:00:00','RCCSRA00H08H502B','sara.ricci','password8',2,'sara.ricci@example.com'),(10,'Andrea','Vitale','2000-09-09 00:00:00','VTLNDR00I09H502C','andrea.vitale','password9',2,'andrea.vitale@example.com'),(11,'Alessandro','Russo','2000-10-10 00:00:00','RSSLSN00J10H502D','alessandro.russo','password10',2,'alessandro.russo@example.com'),(12,'Paolo','Romano','2000-11-11 00:00:00','RMNPLA00K11H502E','paolo.romano','password11',3,'paolo.romano@example.com'),(13,'Chiara','Lombardi','2000-12-12 00:00:00','LMBCHR00L12H502F','chiara.lombardi','password12',3,'chiara.lombardi@example.com'),(14,'Simone','Greco','2001-01-13 00:00:00','GRCSMN01A13H502G','simone.greco','password13',3,'simone.greco@example.com'),(15,'Giovanni','Bruno','2001-02-14 00:00:00','BRNGNN01B14H502H','giovanni.bruno','password14',3,'giovanni.bruno@example.com'),(16,'Roberta','Costa','2001-03-15 00:00:00','CSTRBR01C15H502I','roberta.costa','password15',3,'roberta.costa@example.com');
/*!40000 ALTER TABLE `studente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'registro'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-23 17:47:09
