---
title: Base de datos
description:  Tabla 'course'
---


## Documentación Técnica de la Tabla `course`

## Información General

### Propósito
La tabla `course` tiene por objeto gestionar la información sobre los cursos dispuestos en la plataforma. Esta tabla almacena datos básicos relacionados con los cursos ofrecidos, como el título, descripción, fechas de creación y actualización, y los usuarios responsables de su creación y modificación.

### Relaciones
La tabla `course` tiene una relación 1:N con la tabla `enrollment`, ya que un registro de curso `course` puede estar asociado con uno o varios registros de inscripciones `enrollment`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No permite eliminar un curso si tiene inscripciones asociadas.
- `ON UPDATE CASCADE`: Actualiza automáticamente el ID del curso en las inscripciones si este cambia.

La tabla `course` tiene una relación 1:N con la tabla `course_feedback`, ya que un registro de curso `course` puede estar asociado con uno o varios registros de comentarios `course_feedback`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Elimina automáticamente los comentarios asociados si se elimina un curso.
- `ON UPDATE RESTRICT`: No permite actualizar el ID del curso en los comentarios.

La tabla `course` tiene una relación 1:N con la tabla `course_rating`, ya que un registro de curso `course` puede estar asociado con uno o varios registros de calificaciones `course_rating`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Elimina automáticamente las calificaciones asociadas si se elimina un curso.
- `ON UPDATE RESTRICT`: No permite actualizar el ID del curso en las calificaciones.

La tabla `course` tiene una relación 1:N con la tabla `course_completion`, ya que un registro de curso `course` puede estar asociado con uno o varios registros de finalización `course_completion`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Elimina automáticamente los registros de finalización si se elimina un curso.
- `ON UPDATE RESTRICT`: No permite actualizar el ID del curso en los registros de finalización.

La tabla `course` tiene una relación 1:N con la tabla `course_lesson`, ya que un registro de curso `course` puede estar asociado con uno o varios registros de lecciones `course_lesson`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No permite eliminar un curso si tiene lecciones asociadas.
- `ON UPDATE CASCADE`: Actualiza automáticamente el ID del curso en las lecciones si este cambia.

La tabla `course` tiene una relación 1:N con la tabla `course_module`, ya que un registro de curso `course` puede estar asociado con uno o varios registros de módulos `course_module`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No permite eliminar un curso si tiene módulos asociados.
- `ON UPDATE CASCADE`: Actualiza automáticamente el ID del curso en los módulos si este cambia.


## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único para cada curso. Es la clave primaria de la tabla y se incrementa automáticamente.|
|title	|varchar(255)	|NOT NULL	|Título del curso. Es un campo obligatorio que identifica el curso de manera clara y concisa.|
|description	|text	|NULL	|Descripción detallada del curso, proporcionando información adicional sobre su contenido y objetivos.|
|created_by	|int	|NULL	|ID del usuario que creó el curso, referenciando probablemente a una tabla de usuarios.|
|updated_by	|int	|NULL	|ID del usuario que actualizó por última vez el curso, referenciando probablemente a una tabla de usuarios.|
|created_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP	|Fecha y hora en que el curso fue creado. Se asigna automáticamente al momento de la creación.|
|Updated_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP	|Fecha y hora de la última actualización del curso. Se actualiza automáticamente con cada modificación.|

## Ejemplo en SQL

**Consulta para listar comentarios y valoraciones de un curso**
``` sql
SELECT cf.id AS feedback_id, cf.user_id, cf.rating, cf.feedback, cf.created_at, c.title AS course_title
FROM course_feedback cf
JOIN course c ON cf.course_id = c.id
WHERE c.id = 1;
```

**Consulta para calcular la calificación promedio de un curso**
``` sql
SELECT c.id AS course_id, c.title AS course_title, AVG(cr.rating) AS average_rating
FROM course c
LEFT JOIN course_rating cr ON c.id = cr.course_id
WHERE c.id = 1
GROUP BY c.id, c.title;
```  

**Consulta para identificar los usuarios con mayor cantidad de comentarios y valoraciones en los cursos**
``` sql
SELECT cf.user_id, COUNT(cf.id) AS total_feedback, COUNT(cr.id) AS total_ratings
FROM course_feedback cf
LEFT JOIN course_rating cr ON cf.user_id = cr.user_id
GROUP BY cf.user_id
ORDER BY total_feedback DESC, total_ratings DESC
LIMIT 10;
```  

**Consulta para listar cursos junto con su calificación promedio y número de comentarios**
``` sql
SELECT c.id AS course_id, 
       c.title AS course_title, 
       AVG(cr.rating) AS average_rating, 
       COUNT(cf.id) AS total_feedback
FROM course c
LEFT JOIN course_rating cr ON c.id = cr.course_id
LEFT JOIN course_feedback cf ON c.id = cf.course_id
GROUP BY c.id, c.title
ORDER BY average_rating DESC;
```  