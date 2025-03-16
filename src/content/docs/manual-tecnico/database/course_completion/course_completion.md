---
title: Base de datos
description:  Tabla 'course_completion'
---


## Documentación Técnica de la Tabla `course_completion`

## Información General

### Propósito
La tabla `course_completion` tiene por objeto registrar la finalización de cursos por parte de los usuarios de la plataforma. Almacena información sobre qué usuario completó un curso específico y en qué momento lo hizo, lo cual permite llevar un registro detallado del progreso de los usuarios y generar estadísticas de rendimiento.
Esta tabla es útil para emitir certificados de finalización, generar reportes de progreso y analizar tasas de finalización de los cursos.

### Relaciones
La tabla `course_completion` tiene una relación N:1 con la tabla `course`, ya que un registro de curso `course` puede estar asociado con uno o varios registros de `course_completion`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si se elimina un curso, se eliminan todos los registros asociados en `course_completion`.
- `ON UPDATE RESTRICT`: No se permite actualizar el `id` de un curso referenciado.

La tabla `course_completion` tiene una relación N:1 con la tabla `user`, ya que un registro de usuario `user` puede estar asociado con uno o varios registros de `course_completion`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si se elimina un usuario, se eliminan todos los registros asociados en `course_completion`.
- `ON UPDATE RESTRICT`: No se permite actualizar el id de un usuario referenciado.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `course_completion`;
CREATE TABLE `course_completion`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_id` int NOT NULL,
  `user_id` int NOT NULL,
  `completed_at` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-course_completion-course_id`(`course_id` ASC) USING BTREE,
  INDEX `idx-course_completion-user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk-course_completion-course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk-course_completion-user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único para cada registro de finalización de curso. Generado automáticamente.|
|course_id	|int	|NOT NULL	|Identificador del curso completado, referenciando la tabla course.|
|user_id	|int	|NOT NULL	|Identificador del usuario que completó el curso, referenciando la tabla user.|
|completed_at	|int	|NOT NULL	|Marca de tiempo (epoch) indicando la fecha y hora en que el usuario completó el curso.|

## Ejemplo en SQL

**Consulta para listar los usuarios que han completado un curso específico**
``` sql
SELECT u.username, c.title, cc.completed_at
FROM course_completion cc
JOIN user u ON cc.user_id = u.id
JOIN course c ON cc.course_id = c.id
WHERE c.id = 1;
```

**Consulta para obtener la cantidad de usuarios que han completado cada curso**
``` sql
SELECT c.title, COUNT(cc.id) AS completions
FROM course c
JOIN course_completion cc ON c.id = cc.course_id
GROUP BY c.id, c.title;
```

**Consulta para listar todos los cursos completados por un usuario específico**
``` sql
SELECT c.title, cc.completed_at
FROM course_completion cc
JOIN course c ON cc.course_id = c.id
WHERE cc.user_id = 1;
```