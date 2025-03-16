---
title: Base de datos
description:  Tabla 'activity_log'
---


## Documentación Técnica de la Tabla `activity_log`

## Información General

### Propósito
La tabla `activity_log` tiene por objeto registrar y centralizar información clave sobre las actividades realizadas por los usuarios dentro de la aplicación. Entrega un historial detallado de las interacciones en el aplicativo.

### Relaciones
La tabla `activity_log` tiene una relación N:1 con la tabla `user`, ya que un usuario puede tener múltiples registros en el historial de actividades y donde cada actividad está asociada a un único usuario.
La columna `user_id` actúa como una clave foránea que referencia a la columna `id` de la tabla `user`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Cuando un usuario es eliminado, todos los registros asociados en la tabla `activity_log` tambien son eliminados.
- `ON UPDATE CASCADE`: Si el valor de la clave primaria del usuario cambia, el valor correspondiente en la tabla `activity_log` se actualizará automáticamente.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `activity_log`;
CREATE TABLE `activity_log`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `app` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `activity_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ip_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `device` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `browser` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `additional_data` json NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-activity_log-user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk_activity_log-user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY|Identificador único de cada registro.|
|user_id	|int		|NOT NULL	|Relaciona el registro con un usuario de la tabla user.<br>ON DELETE CASCADE: Si un usuario es eliminado, sus registros de actividad también lo son.<br>ON UPDATE CASCADE: Los cambios en el id del usuario se propagan a esta tabla.|
|app		|varchar(255)	|NOT NULL	|Identifica la aplicación o módulo donde ocurrió la actividad.|
|activity_type	|varchar(255)	|NOT NULL	|Describe el tipo de actividad realizada (e.g., login, update).|
|description	|text		|Opcional	|Proporciona detalles adicionales de la actividad para facilitar su comprensión.|
|created_at	|timestamp	|NOT NULL<br>DEFAULT CURRENT_TIMESTAMP|Registra la fecha y hora de creación de la actividad.|
|ip_address	|varchar(255)	|Opcional	|Permite rastrear la dirección IP desde donde se realizó la actividad.|
|device		|varchar(255)	|Opcional	|Proporciona información sobre el dispositivo desde el cual se realiza el registro.|
|browser	|varchar(255)	|Opcional	|Indica el navegador web empleado para el registro.|
|location	|varchar(255)	|Opcional	|Almacena la ubicación del usuario (puede inferirse mediante IP).|
|additional_data	|json	|Opcional	|Registra datos adicionales en formato JSON, flexibles según la actividad. El formato json permite registrar información variable sin alterar el esquema.|

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