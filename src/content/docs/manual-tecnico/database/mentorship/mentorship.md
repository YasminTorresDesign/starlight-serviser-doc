---
title: Base de datos
description:  Tabla 'mentorship'
---


## Documentación Técnica de la Tabla `mentorship`

## Información General

### Propósito
La tabla `mentorship` tiene por objeto gestionar las relaciones de mentoría entre usuarios y las inscripciones (enrollment) en la plataforma. El propósito es establecer un vínculo entre un usuario (mentor o estudiante) y la inscripción específica del curso, permitiendo el seguimiento de actividades de mentoría asociadas a la inscripción. Este diseño facilita el seguimiento de las interacciones de apoyo educativo, promoviendo la personalización del aprendizaje y la supervisión individual.

### Relaciones
La tabla `mentorship` tiene una relación N:1 con la tabla `enrollment`, ya que un registro de inscripción `enrollment` puede estar asociado con uno o varios registros de `mentorship`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Al eliminar una inscripción, se eliminan todas las asignaciones de mentor relacionadas.
- `ON UPDATE CASCADE`: Si se actualiza el `id` de una inscripción, se actualiza automáticamente en las asignaciones relacionadas.

La tabla `mentorship` tiene una relación N:1 con la tabla `user`, ya que un registro de usuario `user` puede estar asociado con uno o varios registros de `mentorship`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No se permite eliminar un usuario si tiene asignaciones de mentor activas.
- `ON UPDATE CASCADE`: Si se actualiza el `id` de un usuario, se actualiza automáticamente en las asignaciones de mentor relacionadas.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `mentorship`;
CREATE TABLE `mentorship`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `enrollment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_mentorship_enrollment`(`enrollment_id` ASC) USING BTREE,
  INDEX `fk_mentorship_user`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk_mentorship_enrollment` FOREIGN KEY (`enrollment_id`) REFERENCES `enrollment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_mentorship_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único de cada registro de mentoría.|
|enrollment_id	|int	|NOT NULL	|Identificador de la inscripción asociada al registro de mentoría. Relacionado con la tabla enrollment.|
|user_id	|int	|NOT NULL	|Identificador del usuario involucrado en la relación de mentoría (mentor o tutorizado). Relacionado con la tabla user.|
|created_by	|int	|NULL<br>DEFAULT NULL	|Identificador del usuario que creó el registro de mentoría.|
|updated_by	|int	|NULL<br>DEFAULT NULL	|Identificador del usuario que realizó la última actualización en el registro de mentoría.|
|created_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP	|Fecha y hora en que se creó el registro de mentoría.|
|updated_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP	|Fecha y hora de la última actualización del registro de mentoría.|


## Ejemplo en SQL

**Consulta para listar todos los mentores asignados a una inscripción específica**
``` sql
SELECT m.id AS mentorship_id, u.username AS mentor, e.id AS enrollment_id
FROM mentorship m
JOIN user u ON m.user_id = u.id
JOIN enrollment e ON m.enrollment_id = e.id
WHERE e.id = 10;
```

**Consulta para obtener todas las inscripciones con sus mentores asignados**
``` sql
SELECT e.id AS enrollment_id, e.course_id, u.username AS mentor
FROM mentorship m
JOIN enrollment e ON m.enrollment_id = e.id
JOIN user u ON m.user_id = u.id;
```  

**Consulta para contar el número de inscripciones que tiene un mentor específico**
``` sql
SELECT u.username AS mentor, COUNT(m.id) AS total_enrollments
FROM mentorship m
JOIN user u ON m.user_id = u.id
WHERE u.id = 5
GROUP BY u.username;
``` 