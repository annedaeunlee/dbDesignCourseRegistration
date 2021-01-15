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
-- Table structure for table `enrollments`
--

DROP TABLE IF EXISTS `enrollments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enrollments` (
  `section_id` int NOT NULL,
  `student_id` int NOT NULL,
  `section_crn` int DEFAULT NULL,
  `student_student_id` int DEFAULT NULL,
  PRIMARY KEY (`section_id`,`student_id`),
  KEY `FKm6udep0gy94j9ue86m3o9repn` (`section_crn`),
  KEY `FKjw3x10w9mswhngwpg7gimmvxq` (`student_student_id`),
  CONSTRAINT `FKjw3x10w9mswhngwpg7gimmvxq` FOREIGN KEY (`student_student_id`) REFERENCES `students` (`student_id`),
  CONSTRAINT `FKm6udep0gy94j9ue86m3o9repn` FOREIGN KEY (`section_crn`) REFERENCES `section` (`crn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrollments`
--

LOCK TABLES `enrollments` WRITE;
/*!40000 ALTER TABLE `enrollments` DISABLE KEYS */;
INSERT INTO `enrollments` VALUES (1,1,1,1),(2,3,2,3),(2,5,2,5),(2,6,2,6),(2,8,2,8),(3,4,3,4),(3,8,3,8),(4,1,4,1),(5,3,5,3),(5,5,5,5),(5,8,5,8),(6,1,6,1),(6,3,6,3),(6,6,6,6),(8,4,8,4),(8,7,8,7),(10,3,10,3),(13,4,13,4),(13,6,13,6),(13,7,13,7),(14,1,14,1),(14,7,14,7),(15,5,15,5),(15,6,15,6),(16,3,16,3),(17,4,17,4);
/*!40000 ALTER TABLE `enrollments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-14 20:56:06
