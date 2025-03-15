---
title: Base de datos
description:  Tabla 'course_rating'
---


## Documentación Técnica de la Tabla `course_rating`

## Información General

### Propósito
La tabla `course_rating` tiene por objeto almacenar las calificaciones asignadas por los usuarios a los cursos en la plataforma. Su propósito es recopilar y gestionar los datos relacionados con las opiniones de los usuarios sobre los cursos, facilitando la evaluación de la calidad de los mismos y proporcionando métricas útiles para el administrador.

### Relaciones
La tabla `course_rating` tiene una relación N:1 con la tabla `course`, ya que un registro de curso `course` puede estar asociado con uno o varios registros de `course_rating`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si se elimina un curso, también se eliminan sus calificaciones.
- `ON UPDATE RESTRICT`: No se permite actualizar el id de un curso referenciado.

La tabla `course_rating` tiene una relación N:1 con la tabla `user`, ya que un registro de usuario `user` puede estar asociado con uno o varios registros de `course_rating`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si se elimina un usuario, también se eliminan sus calificaciones.
- `ON UPDATE RESTRICT`: No se permite actualizar el id de un usuario referenciado.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `course_rating`;
CREATE TABLE `course_rating`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_id` int NOT NULL,
  `user_id` int NOT NULL,
  `rating` int NOT NULL,
  `created_at` int NOT NULL,
  `updated_at` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-course_rating-course_id`(`course_id` ASC) USING BTREE,
  INDEX `idx-course_rating-user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk-course_rating-course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk-course_rating-user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único de cada calificación, generado automáticamente.|
|course_id	|int	|NOT_NULL	|Identificador del curso calificado, referenciando la tabla course.|
|user_id	|int	|NOT NULL	|Identificador del usuario que asignó la calificación, referenciando la tabla user.|
|rating	|int	|NOT NULL	|Calificación asignada al curso, generalmente en una escala numérica (e.g., 1-5).|
|created_at	|int	|NOT NULL	|Marca de tiempo (timestamp) indicando cuándo se realizó la calificación.|
|updated_at	|int	|NOT NULL	|Marca de tiempo (timestamp) indicando la última actualización de la calificación.|


## Ejemplo en SQL

**Consulta para obtener las calificaciones de un curso específico con información del usuario**
``` sql
SELECT cr.rating, u.username, c.title
FROM course_rating cr
JOIN user u ON cr.user_id = u.id
JOIN course c ON cr.course_id = c.id
WHERE c.id = 1;
```

**Consulta para calcular la calificación promedio de cada curso**
``` sql
SELECT c.title, AVG(cr.rating) AS average_rating
FROM course c
JOIN course_rating cr ON c.id = cr.course_id
GROUP BY c.id, c.title;
```

**Consulta para listar todos los usuarios con la cantidad de cursos que han calificado**
``` sql
SELECT u.username, COUNT(cr.id) AS rated_courses
FROM user u
JOIN course_rating cr ON u.id = cr.user_id
GROUP BY u.id, u.username;
```