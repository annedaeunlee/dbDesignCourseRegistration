-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: project2
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `section`
--

DROP TABLE IF EXISTS `section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `section` (
  `crn` int NOT NULL AUTO_INCREMENT,
  `campus` varchar(255) DEFAULT NULL,
  `capacity` int DEFAULT NULL,
  `capacity_remaining` int DEFAULT NULL,
  `lecture_time` varchar(255) DEFAULT NULL,
  `professor` varchar(255) DEFAULT NULL,
  `course_idcourse` int DEFAULT NULL,
  PRIMARY KEY (`crn`),
  KEY `FKq90l27owdx2r5y2guehkllamr` (`course_idcourse`),
  CONSTRAINT `FKq90l27owdx2r5y2guehkllamr` FOREIGN KEY (`course_idcourse`) REFERENCES `course` (`idcourse`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section`
--

LOCK TABLES `section` WRITE;
/*!40000 ALTER TABLE `section` DISABLE KEYS */;
INSERT INTO `section` VALUES (1,'Boston',80,45,'9:00-10:30','Kevin Gold',1),(2,'Boston',80,16,'11:00-12:30','Raj Sundaram',1),(3,'Boston',45,5,'5:00-8:00','Jose Annunziato',2),(4,'Boston',125,0,'9:30-10:30','Stravos Trypakis',3),(5,'Boston',115,10,'2:00-3:00','Jason Hemann',3),(6,'Boston',115,10,'2:00-3:00','Jason Hemann',2),(7,'London',18,4,'6:00-9:30','Derek Curry',4),(8,'Canada',34,12,'6:00-9:30','Russell Pensyl',4),(9,'Boston',34,12,'1:30-2:30','John Rachlin',7),(10,'Online',50,24,'11:30-12:30','Brandon Mirosavich',7),(11,'Online',45,3,'3:30-5:30','Brandon Mirosavich',7),(12,'Online',45,3,'3:30-5:30','Jessie Richards',8),(13,'Boston',23,3,'4:30-6:30','Abby Jin',8),(14,'Boston',23,3,'10:30-11:30','Adam Smith',9),(15,'London',32,0,'3:30-6:30','John Wood',9),(16,'Boston',129,4,'9:30-11:30','Amanda Streigh',10),(17,'Online',150,0,'10:00-11:30','Kevin Gold',10);
/*!40000 ALTER TABLE `section` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-14 20:56:07
