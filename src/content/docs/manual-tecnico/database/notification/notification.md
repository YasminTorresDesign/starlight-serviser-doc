---
title: Base de datos
description:  Tabla 'notification'
---


## Documentación Técnica de la Tabla `notification`

## Información General

### Propósito
La tabla `notification` tiene por objeto almacenar las notificaciones asociadas a los usuarios dentro del sistema. Cada notificación contiene información relevante para un usuario, como el tipo de notificación, su contenido, y el estado de lectura. Esta tabla permite al administrador del sistema enviar notificaciones a los usuarios, quienes pueden marcar las notificaciones como leídas o no leídas.

### Relaciones
La tabla `notification` tiene una relación N:1 con la tabla `user`, ya que un registro de usuario `user` puede estar asociado con uno o varios registros de notificación `notification`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si un usuario es eliminado de la tabla `user`, todas las notificaciones asociadas a ese usuario en la tabla `notification` se eliminarán automáticamente.
- `ON UPDATE RESTRICT`: Impide la actualización del valor de `id` en la tabla `user` si hay notificaciones asociadas que dependen de dicho identificador.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `notification`;
CREATE TABLE `notification`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `type` smallint NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `read_status` smallint NOT NULL DEFAULT 0,
  `created_at` int NOT NULL,
  `updated_at` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-notification-user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk-notification-user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id	|int	|NOT NULL<br>AUT_INCREMENT<br>PRIMARY KEY	|Identificador único de la notificación. Auto-incrementado para generar un ID único para cada registro.|
|user_id	|int	|NOT NULL	|Referencia al id del usuario al que se le está enviando la notificación. Es una clave foránea que apunta a la tabla user.|
|type	|smallint	|NOT NULL	|Tipo de notificación (por ejemplo, 0 podría ser para un mensaje general, 1 para una alerta, etc.).|
|content	|text	|NOT NULL	|Contenido de la notificación, que puede ser un texto largo, mensaje o detalle informativo para el usuario.|
|read_status	|smallint	|NOT NULL<BR>DEFAULT 0	|Estado de lectura de la notificación. Un valor de 0 indica que no ha sido leída, mientras que 1 indica que ha sido leída.|
|created_at	|int	|NOT NULL	|Fecha y hora en que la notificación fue creada, usualmente en formato de timestamp Unix.|
|updated_at	|int	|NOT NULL	|Fecha y hora en que la notificación fue actualizada, también en formato de timestamp Unix.|

## Ejemplo en SQL

**Consulta para obtener notificaciones de un usuario específico**
``` sql
SELECT 
    n.id AS notification_id, 
    n.type, 
    n.content, 
    n.read_status, 
    n.created_at 
FROM 
    notification n
JOIN 
    user u 
ON 
    n.user_id = u.id
WHERE 
    u.username = 'ejemplo_usuario';
```

**Consulta para listar usuarios con más notificaciones**
``` sql
SELECT 
    u.id AS user_id, 
    u.username, 
    COUNT(n.id) AS total_notifications 
FROM 
    user u
LEFT JOIN 
    notification n 
ON 
    u.id = n.user_id 
GROUP BY 
    u.id, u.username
ORDER BY 
    total_notifications DESC
LIMIT 10;
```  