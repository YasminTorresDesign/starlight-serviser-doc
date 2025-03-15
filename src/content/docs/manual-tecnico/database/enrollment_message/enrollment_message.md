---
title: Base de datos
description:  Tabla 'enrollment_message'
---


## Documentación Técnica de la Tabla `enrollment_message`

## Información General

### Propósito
La tabla `enrollment_message` tiene por objeto registrar mensajes intercambiados entre usuarios en el contexto de una inscripción (enrollment). Esto permite gestionar la comunicación asociada a un curso o actividad educativa específica, lo que facilita la interacción entre los participantes que participan de este, sin importar el rol que desempeñen. También soporta la jerarquía de mensajes mediante el campo parent_id, lo que permite gestionar conversaciones organizadas (hilos de mensajes).

### Relaciones
La tabla `enrollment_message` tiene una relación N:1 con la tabla `enrollment`, ya que un registro de inscripción `enrollment` puede estar asociado con uno o varios registros de `enrollment_message`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Al eliminar una inscripción, se eliminan automáticamente todos los mensajes asociados.
- `ON UPDATE CASCADE`: Si se actualiza el `id` de una inscripción, se actualiza automáticamente en los mensajes relacionados.

La tabla `enrollment_message` tiene una relación N:1 con la tabla `user`, ya que un registro de usuario `user` puede estar asociado con uno o varios registros de `enrollment_message`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No se permite eliminar un usuario si tiene inscripciones activas.
- `ON UPDATE CASCADE`: Si se actualiza el `id` de un usuario, se actualiza automáticamente en las inscripciones relacionadas.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `enrollment_message`;
CREATE TABLE `enrollment_message`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `enrollment_id` int NOT NULL,
  `sender_id` int NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `read_status` int NULL DEFAULT 0,
  `parent_id` int NULL DEFAULT NULL,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_message-user`(`sender_id` ASC) USING BTREE,
  INDEX `fk_message_enrollment`(`enrollment_id` ASC) USING BTREE,
  CONSTRAINT `fk_message-user` FOREIGN KEY (`sender_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_message_enrollment` FOREIGN KEY (`enrollment_id`) REFERENCES `enrollment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único de cada mensaje, generado automáticamente.|
|enrollment_id	|int	|NOT NULL	|Identificador de la inscripción asociada al mensaje, referenciando la tabla enrollment.|
|sender_id	|int	|NOT NULL	|Identificador del usuario que envió el mensaje, referenciando la tabla user.|
|message	|text	|NOT NULL	|Contenido del mensaje enviado por el usuario.|
|read_status	|int	|NULL<br>DEFAULT 0	|Estado de lectura del mensaje: 0 para no leído, 1 para leído (o más estados según el diseño).|
|parent_id	|int	|NULL<br>DEFAULT NULL	|Identificador del mensaje padre en caso de ser una respuesta (gestión de hilos de mensajes).|
|created_by	|int	|NULL<br>DEFAULT NULL	|Identificador del usuario que creó el mensaje (auditoría).|
|updated_by	|int	|NULL<br>DEFAULT NULL	|Identificador del usuario que realizó la última modificación del mensaje (auditoría).|
|created_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP	|Fecha y hora en que se creó el mensaje.|
|updated_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP	|Fecha y hora en que se actualizó por última vez el mensaje.|


## Ejemplo en SQL

**Consulta para listar todos los mensajes de una inscripción específica**
``` sql
SELECT em.message, u.username AS sender, em.created_at
FROM enrollment_message em
JOIN user u ON em.sender_id = u.id
WHERE em.enrollment_id = 5
ORDER BY em.created_at;
```

**Consulta para obtener el conteo de mensajes no leídos por usuario en una inscripción**
``` sql
SELECT u.username, COUNT(em.id) AS unread_messages
FROM enrollment_message em
JOIN user u ON em.sender_id = u.id
WHERE em.enrollment_id = 5 AND em.read_status = 0
GROUP BY u.username;
```  

**Consulta para listar todos los usuarios con inscripciones y el número de mensajes enviados por inscripción**
``` sql
SELECT u.username, e.id AS enrollment_id, COUNT(em.id) AS message_count
FROM user u
JOIN enrollment e ON u.id = e.user_id
LEFT JOIN enrollment_message em ON e.id = em.enrollment_id
GROUP BY u.username, e.id;
``` 