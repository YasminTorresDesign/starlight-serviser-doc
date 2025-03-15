---
title: Base de datos
description:  Tabla 'course_feedback'
---


## Documentación Técnica de la Tabla `course_feedback`

## Información General

### Propósito
La tabla `course_feedback` tiene por objeto almacenar las valoraciones y comentarios de los usuarios sobre los cursos que han realizado. Permite evaluar la calidad de los cursos, identificar áreas de mejora y recopilar opiniones de quienes participan. Además, facilita la generación de estadísticas sobre la satisfacción del usuario y la eficacia de los cursos ofrecidos en la plataforma.

### Relaciones
La tabla `course_feedback` tiene una relación N:1 con la tabla `course`, ya que un registro de curso `course` puede estar asociado con uno o varios registros de `course_feedback`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si un curso es eliminado, se eliminarán automáticamente todas las retroalimentaciones asociadas.
- `ON UPDATE RESTRICT`: No se permite actualizar el id de un curso referenciado.

La tabla `course_feedback` tiene una relación N:1 con la tabla `user`, ya que un registro de usuario `user` puede estar asociado con uno o varios registros de `course_feedback`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si un usuario es eliminado, se eliminarán automáticamente todas sus retroalimentaciones.
- `ON UPDATE RESTRICT`: No se permite actualizar el id de un usuario referenciado.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `course_feedback`;
CREATE TABLE `course_feedback`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_id` int NOT NULL,
  `user_id` int NOT NULL,
  `rating` int NOT NULL,
  `feedback` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `created_at` int NOT NULL,
  `updated_at` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-course_feedback-course_id`(`course_id` ASC) USING BTREE,
  INDEX `idx-course_feedback-user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk-course_feedback-course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk-course_feedback-user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único del registro de retroalimentación. Generado automáticamente.|
|course_id	|int	|NOT NULL	|Identificador del curso evaluado, referenciando la tabla course.|
|user_id	|int	|NOT NULL	|Identificador del usuario que proporciona la retroalimentación, referenciando la tabla user.|
|rating	|int	|NOT NULL	|Calificación numérica dada por el usuario al curso (por ejemplo, en una escala de 1 a 5).|
|feedback	|text	|opcional	|Comentarios o retroalimentación escrita proporcionada por el usuario sobre el curso.|
|created_at	|int	|NOT NULL	|Marca de tiempo (epoch) que indica la fecha y hora en que se creó el registro.|
|updated_at	|int	|NOT NULL	|Marca de tiempo (epoch) que indica la última fecha y hora en que se actualizó el registro.|

## Ejemplo en SQL

**Consulta para obtener todas las retroalimentaciones de un curso específico**
``` sql
SELECT cf.rating, cf.feedback, u.username
FROM course_feedback cf
JOIN user u ON cf.user_id = u.id
WHERE cf.course_id = 1;
```

**Consulta para contar el número de retroalimentaciones por curso**
``` sql
SELECT c.title, COUNT(cf.id) AS feedback_count
FROM course c
LEFT JOIN course_feedback cf ON c.id = cf.course_id
GROUP BY c.id, c.title;
```  

**Consulta para obtener la calificación promedio de cada curso**
``` sql
SELECT c.title, AVG(cf.rating) AS average_rating
FROM course c
JOIN course_feedback cf ON c.id = cf.course_id
GROUP BY c.id, c.title;
``` 