---
title: Base de datos
description:  Tabla 'setting'
---


## Documentación Técnica de la Tabla `setting`

## Información General

### Propósito
La tabla `setting` tiene por objeto almacenar configuraciones las globales o parámetros clave que controlan el comportamiento de la plataforma. Esta estructura facilita la gestión centralizada de configuraciones sin necesidad de modificar el código fuente, donde cada registro representa una configuración específica del sistema, identificada por una clave única (key) y su valor asociado.

### Relaciones
Esta tabla no tiene relaciones con otras tablas de la base de datos.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `setting`;
CREATE TABLE `setting`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'string',
  `created_at` int NOT NULL,
  `updated_at` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `key`(`key` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id	|int	|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único y auto-incrementable para cada configuración. Clave primaria de la tabla.|
|key	|varchar(255)	|NOT NULL<br>UNIQUE	|Clave única que identifica la configuración dentro del sistema (ejemplo: "site_name", "max_login_attempts").|
|value	|text	|NOT NULL	|Valor asignado a la clave de configuración. Puede almacenar cualquier dato dependiendo del tipo.|
|description	|text	|NULL	|Descripción opcional que explica el propósito o uso de la configuración.|
|type	|varchar(255)	|NOT NULL<br>DEFAULT 'string'	|Tipo de dato del valor almacenado. Ejemplo: string, integer, boolean, etc.|
|created_at	|int	|NOT NULL	|Fecha y hora en formato UNIX timestamp cuando se creó el registro.|
|updated_at	|int	|NOT NULL	|Fecha y hora en formato UNIX timestamp cuando se actualizó el registro por última vez.|

