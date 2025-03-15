---
title: Base de datos
description:  Tabla 'profile'
---


## Documentación Técnica de la Tabla `profile`

## Información General

### Propósito
La tabla `profile` tiene por objeto almacenar información personal y demográfica asociada a un usuario del sistema. Es una extensión de la tabla user y permite centralizar detalles como nombres, identificación gubernamental, género, y fecha de nacimiento. Este diseño apoya la personalización del sistema, el cumplimiento normativo y el acceso a datos adicionales para servicios específicos.

### Relaciones
La tabla `profile` tiene una relación 1:1 con la tabla `user`, ya que cada registro en la tabla `user` tiene asociado únicamente un solo registro de la tabla `profile`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Eliminar un usuario elimina automáticamente su perfil.
- `ON UPDATE CASCADE`: Los cambios en el `id` del usuario se reflejan en `profile`.

La tabla `profile` tiene una relación 1:1 (opcional) con la tabla `gov_id_type`, ya que un perfíl tiene asociado únicamente un registro de la tabla `gov_id_type`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: Impide eliminar un tipo de identificación mientras esté en uso.
- `ON UPDATE CASCADE`: Actualizaciones en el tipo de identificación se reflejan en `profile`.

La tabla `profile` tiene una relación 1:N con la tabla `address`, ya que un perfíl puede tener múltiples direcciones asociadas.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Eliminar un perfil elimina automáticamente todas las direcciones asociadas.
- `ON UPDATE CASCADE`: Los cambios en el `id` del perfil se reflejan en las direcciones.

La tabla `profile` tiene una relación 1:1 con la tabla `profile_info`, ya que un perfíl únicamente tendrá asociado una información de perfíl.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Eliminar un perfil elimina automáticamente su información extendida.
- `ON UPDATE CASCADE`: Los cambios en el `id` del perfil se reflejan en `profile_info`.


## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `profile`;
CREATE TABLE `profile`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci GENERATED ALWAYS AS (concat(`first_name`,_utf8mb4' ',`last_name`)) STORED,
  `gov_id_type` int NULL DEFAULT NULL,
  `gov_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `birth_date` date NULL DEFAULT NULL,
  `visibility` int NULL DEFAULT 1,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id` ASC) USING BTREE,
  INDEX `fk-profile-user`(`user_id` ASC) USING BTREE,
  INDEX `fk-profile-gov_id_type`(`gov_id_type` ASC) USING BTREE,
  CONSTRAINT `fk-profile-gov_id_type` FOREIGN KEY (`gov_id_type`) REFERENCES `gov_id_type` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk-profile-user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY|Identificador único de cada registro.|
|user_id	|int	|NOT NULL<br>FOREIGN KEY	|Relaciona el perfil con un usuario en la tabla user.|
|first_name	|varchar(255)	|Opcional	|Almacena el nombre del usuario asociado al perfil.|
|last_name	|varchar(255)	|Opcional	|Almacena el apellido del usuario asociado al perfil.|
|full_name	|varchar(255)	|Generado automáticamente (GENERATED)	|Campo generado automaticamente: Es la concatenación de first_name y last_name.|
|gov_id_type	|int	|Opcional<br>FOREIGN KEY	|Tipo de documento de identificación (relación con gov_id_type).|
|gov_id	|varchar(255)	|Opcional	|Registra el número de identificación.|
|gender	|varchar(255)	|Opcional	|Registra el género del usuario.|
|phone_number	|varchar(255)	|Opcional	|Registra el número de teléfono de contacto.|
|birth_date	|date	|Opcional	|Registra la fecha de nacimiento del usuario.|
|visibility	|int	|	|Determina la visibilidad del perfil en el sistema(e.g., público o privado).|
|created_by	|int	|Opcional	|Registra el usuario que creó el perfil.|
|updated_by	|int	|Opcional	|Registra el usuario que realizó la última actualización.|



## Ejemplo en SQL

**Consulta para listar perfiles con el tipo y número de identificación gubernamental**
``` sql
SELECT 
    p.full_name,
    g.name AS gov_id_type_name,
    p.gov_id
FROM 
    profile p
LEFT JOIN 
    gov_id_type g ON p.gov_id_type = g.id;
```

**Consulta para obtener todas las direcciones asociadas a un perfil específico**
``` sql
SELECT 
    p.full_name,
    a.address,
    a.city,
    a.state,
    a.country,
    a.postal_code
FROM 
    profile p
JOIN 
    address a ON p.id = a.profile_id
WHERE 
    p.id = 1;
```

**Consulta para contar cuántas direcciones tiene cada perfil**
``` sql
SELECT 
    p.full_name,
    COUNT(a.id) AS address_count
FROM 
    profile p
LEFT JOIN 
    address a ON p.id = a.profile_id
GROUP BY 
    p.id;
```