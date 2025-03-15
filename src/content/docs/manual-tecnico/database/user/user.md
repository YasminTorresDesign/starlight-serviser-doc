---
title: Base de datos
description:  Tabla 'user'
---


## Documentación Técnica de la Tabla `user`

## Información General

### Propósito
La tabla `user` tiene por objeto la autenticación, autorización y seguimiento de los usuarios registrados. Contiene información clave necesaria para la administración de credenciales y los aspectos relacionados con cada cuenta.

### Relaciones
La tabla `user` tiene una relación 1:N con la tabla `notification`, ya que cada usuario registradoo en la tabla `user` tiene asociado uno o varios registros de notificaciones `notification`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si un usuario es eliminado, todas sus notificaciones también se eliminan.
- `ON UPDATE RESTRICT`: No se permite cambiar el `id` de un usuario si hay notificaciones asociadas.

La tabla `user` tiene una relación 1:N con la tabla `report`, ya que cada usuario registrado en la tabla `user` tiene asociado uno o varios registros de reportes `report`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si un usuario es eliminado, sus reportes también se eliminan.
- `ON UPDATE CASCADE`: Si se actualiza el `id` del usuario, los reportes se actualizan automáticamente.

La tabla `user` tiene una relación 1:N con la tabla `activity_log`, ya que cada usuario registrado en la tabla `user` tiene asociado uno o varios registros de actividad `activity_log`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Eliminar un usuario elimina su historial de actividades.
- `ON UPDATE RESTRICT`: No se permite cambiar el `id` del usuario si hay actividades asociadas.

La tabla `user` tiene una relación 1:N con la tabla `course_feedback`, ya que cada usuario registrado en la tabla `user` tiene asociado uno o varios registros de realimentación `course_feedback`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Eliminar un usuario elimina sus comentarios.
- `ON UPDATE CASCADE`: Cambios en el `id` del usuario se reflejan en sus comentarios.

La tabla `user` tiene una relación 1:N con la tabla `course_rating`, ya que cada usuario registrado en la tabla `user` tiene asociado uno o varios registros de calificación `course_rating`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Eliminar un usuario elimina sus calificaciones.
- `ON UPDATE CASCADE`: Cambios en el `id` del usuario se reflejan en sus calificaciones.

La tabla `user` tiene una relación 1:N con la tabla `enrollment`, ya que cada usuario registrado en la tabla `user` tiene asociado uno o varios registros de inscripción `enrollment`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Eliminar un usuario elimina sus inscripciones.
- `ON UPDATE CASCADE`: No se permite cambiar el `id` del usuario si hay inscripciones asociadas.

La tabla `user` tiene una relación 1:N con la tabla `auth_assignment`, ya que cada usuario registrado en la tabla `user` tiene asociado uno o varios registros de roles o permisos específicos `auth_assignment`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Eliminar un usuario elimina sus roles asignados.
- `ON UPDATE RESTRICT`: No se permite cambiar el `id` del usuario si hay roles asociados.

La tabla `user` tiene una relación 1:N con la tabla `enrollment_message`, ya que cada usuario registrado en la tabla `user` tiene asociado uno o varios registros de mensajes relacionados con las inscripciones a los cursos `enrollment_message`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Eliminar un usuario elimina sus mensajes.
- `ON UPDATE RESTRICT`: No se permite cambiar el `id` del usuario si hay mensajes asociados.

La tabla `user` tiene una relación 1:N con la tabla `mentorship`, ya que cada usuario registrado en la tabla `user` tiene asociado uno o varios registros de relaciones de mentoría `mentorship`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Eliminar un usuario elimina sus registros de mentoría.
- `ON UPDATE RESTRICT`: No se permite cambiar el `id` del usuario si hay registros asociados.

La tabla `user` tiene una relación 1:N con la tabla `survey_response`, ya que cada usuario registrado en la tabla `user` tiene asociado uno o varios registros de respuestas `survey_response`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Eliminar un usuario elimina sus respuestas.
- `ON UPDATE CASCADE`: Cambios en el `id` del usuario se reflejan en sus respuestas.


## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `auth_key` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_reset_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` smallint NOT NULL DEFAULT 10,
  `created_at` int NOT NULL,
  `updated_at` int NOT NULL,
  `verification_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username` ASC) USING BTREE,
  UNIQUE INDEX `email`(`email` ASC) USING BTREE,
  UNIQUE INDEX `password_reset_token`(`password_reset_token` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY|Identificador único de cada registro.|
|username	|varchar(255)	|NOT NULL<br>UNIQUE|Nombre de usuario único para autenticación.<BR>ON DELETE CASCADE: Si un usuario es eliminado, sus registros de actividad también lo son.<BR>ON UPDATE CASCADE: Los cambios en el id del usuario se propagan a esta tabla.|
|auth_key	|varchar(32)	|NOT NULL	|Clave utilizada para sesiones o tokens de autenticación.|
|password_hash	|varchar(255)	|NOT NULL	|Almacena contraseñas en formato seguro (hash).|
|password_reset_token	|varchar(255)|Opcional, UNIQUE|Token único para restablecer contraseñas.|
|email	|varchar(255)	|NOT NULL<br>UNIQUE	|Dirección de correo electrónico única para cada usuario.|
|status	|smallint	|NOT NULL<br>DEFAULT 10	|Estado del usuario (activo, inactivo, suspendido, etc.).|
|created_at	|int	|NOT NULL	|Fecha de creación de la cuenta (formato UNIX).|
|updated_at	|int	|NOT NULL	|Fecha de última modificación (formato UNIX).|
|verification_token	|varchar(255)	|Opcional	|Token para verificar cuentas durante el registro.|

## Ejemplo en SQL

**Consulta para obtener actividades de un usuario específico**
``` sql
SELECT 
    a.id AS activity_id, 
    u.username, 
    a.app, 
    a.activity_type, 
    a.description, 
    a.created_at
FROM 
    activity_log a
JOIN 
    user u ON a.user_id = u.id
WHERE 
    u.id = 1;
```

**Consulta para contar actividades por usuario**
``` sql
SELECT 
    u.username, 
    COUNT(a.id) AS total_activities
FROM 
    user u
LEFT JOIN 
    activity_log a ON u.id = a.user_id
GROUP BY 
    u.id;
```

**Consulta para obtener todas las notificaciones de un usuario específico**
``` sql
SELECT 
    n.id AS notification_id,
    n.type AS notification_type,
    n.content,
    n.read_status,
    n.created_at
FROM 
    notification n
JOIN 
    user u ON n.user_id = u.id
WHERE 
    u.username = 'johndoe';
```

**Consulta para registrar actividad de un usuario en el sistema**
``` sql
INSERT INTO activity_log (user_id, app, activity_type, description, ip_address, device, created_at)
VALUES (42, 'CourseApp', 'LOGIN', 'User logged into the system', '192.168.1.100', 'Chrome', UNIX_TIMESTAMP());
```

**Consulta para obtener el promedio de calificaciones dadas por un usuario**
``` sql
SELECT 
    AVG(cr.rating) AS average_rating
FROM 
    course_rating cr
JOIN 
    user u ON cr.user_id = u.id
WHERE 
    u.id = 42;
```

**Consulta para registrar actividad de un usuario en el sistema**
``` sql
INSERT INTO activity_log (user_id, app, activity_type, description, ip_address, device, created_at)
VALUES (42, 'CourseApp', 'LOGIN', 'User logged into the system', '192.168.1.100', 'Chrome', UNIX_TIMESTAMP());
```

**Consulta para obtener todos los mensajes enviados por un usuario en un curso específico**
``` sql
SELECT 
    em.message,
    em.created_at,
    c.name AS course_name
FROM 
    enrollment_message em
JOIN 
    enrollment e ON em.enrollment_id = e.id
JOIN 
    course c ON e.course_id = c.id
WHERE 
    em.sender_id = 42
AND 
    c.id = 15;
```