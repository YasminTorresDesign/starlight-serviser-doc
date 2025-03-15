---
title: Base de datos
description:  Tabla 'enrollment'
---


## Documentación Técnica de la Tabla `enrollment`

## Información General

### Propósito
La tabla `enrollment` tiene por objeto registrar la relación entre usuarios y cursos de la plataforma, llevar un control detallado de las inscripciones de los usuarios en los cursos, incluyendo información sobre el estado de la inscripción, las fechas de alta y baja, y el rol que desempeña el usuario dentro del curso. Este diseño permite administrar eficazmente la participación de los usuarios en la plataforma.

### Relaciones
La tabla `enrollment` tiene una relación N:1 con la tabla `user`, ya que varios registros de inscripción `enrollment` pueden estar asociados a un mismo usuario `user`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No permite eliminar un usuario si existen inscripciones asociadas.
- `ON UPDATE CASCADE`: Actualiza automáticamente el valor de la clave primaria si el ID del usuario cambia.

La tabla `enrollment` tiene una relación N:1 con la tabla `course`, ya que varios registros de inscripción `enrollment` pueden estar asociados a un mismo curso `course`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No permite eliminar un curso si tiene inscripciones asociadas.
- `ON UPDATE CASCADE`: Actualiza automáticamente el valor de la clave primaria si el ID del curso cambia.

La tabla `enrollment` tiene una relación 1:N con la tabla `enrollment_message`, ya que un registro de inscripción `enrollment` puede estar asociado con uno o varios registros de `enrollment_message`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Elimina automáticamente todos los mensajes relacionados si se elimina la inscripción.
- `ON UPDATE CASCADE`: Actualiza automáticamente los valores relacionados si el ID de la inscripción cambia.

La tabla `enrollment` tiene una relación 1:N con la tabla `mentorship`, ya que un registro de inscripción `enrollment` puede estar asociado con uno o varios registros de `mentorship`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Elimina automáticamente todas las mentorías relacionadas si se elimina la inscripción.
- `ON UPDATE CASCADE`: Actualiza automáticamente los valores relacionados si el ID de la inscripción cambia.


## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `enrollment`;
CREATE TABLE `enrollment`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_id` int NOT NULL,
  `user_id` int NOT NULL,
  `enrolled_at` timestamp NULL DEFAULT NULL,
  `dropped_at` timestamp NULL DEFAULT NULL,
  `status` smallint NULL DEFAULT NULL,
  `role` smallint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-enrollment-course_id`(`course_id` ASC) USING BTREE,
  INDEX `idx-enrollment-user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk-enrollment-course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk-enrollment-user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único de cada registro de inscripción, generado automáticamente.|
|course_id	|Int	|NOT NULL	|Identificador del curso en el que el usuario está inscrito, referenciando la tabla course.|
|user_id	|Int	|NOT NULL	|Identificador del usuario que se inscribió, referenciando la tabla user.|
|enrolled_at	|timestamp	|NULL<br>DEFAULT NULL	|Fecha y hora en que el usuario se inscribió al curso.|
|dropped_at	|timestamp	|NULL<br>DEFAULT NULL	|Fecha y hora en que el usuario abandonó el curso.|
|status	|smallint	|NULL<br>DEFAULT NULL	|Estado actual de la inscripción, que puede indicar si está activa, completada, abandonada, etc.|
|role	|smallint	|NULL<br>DEFAULT NULL	|Rol del usuario dentro del curso, como estudiante, instructor, administrador, etc.|


## Ejemplo en SQL

**Consulta para listar todas las inscripciones activas de un usuario específico**
``` sql
SELECT 
    e.id AS enrollment_id,
    u.username AS user,
    c.title AS course,
    e.enrolled_at,
    e.status
FROM 
    enrollment e
JOIN 
    user u ON e.user_id = u.id
JOIN 
    course c ON e.course_id = c.id
WHERE 
    u.username = 'nombre_usuario' AND e.status = 1;
```

**Consulta para ver todos los mensajes relacionados con una inscripción específica**
``` sql
SELECT 
    em.message,
    u.username AS sender,
    em.created_at
FROM 
    enrollment_message em
JOIN 
    user u ON em.sender_id = u.id
WHERE 
    em.enrollment_id = 123;
```  

**Consulta para listar las mentorías asignadas a un usuario específico**
``` sql
SELECT 
    u.username AS mentor,
    c.title AS course,
    e.id AS enrollment_id,
    m.created_at
FROM 
    mentorship m
JOIN 
    enrollment e ON m.enrollment_id = e.id
JOIN 
    course c ON e.course_id = c.id
JOIN 
    user u ON m.user_id = u.id
WHERE 
    u.username = 'nombre_mentor';
```  