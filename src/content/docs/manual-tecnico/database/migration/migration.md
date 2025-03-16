---
title: Base de datos
description:  Tabla 'migration'
---


## Documentación Técnica de la Tabla `migration`

## Información General

### Propósito
La tabla `migration` tiene por objeto almacenar información relacionada con las migraciones de la base de datos.

### Relaciones
Esta tabla no tiene relaciones con otras tablas de la base de datos.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `migration`;
CREATE TABLE `migration`  (
  `version` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `apply_time` int NULL DEFAULT NULL,
  PRIMARY KEY (`version`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|version	|varchar(180)	|NOT NULL<br>PRIMARY KEY	|Identificador único para cada migración aplicada. Normalmente, se utiliza el nombre o código de versión.|
|apply_time	|int	|NULL<br>DEFAULT NULL	|Registro de la hora en que se aplicó la migración, en formato de tiempo Unix (timestamp).|