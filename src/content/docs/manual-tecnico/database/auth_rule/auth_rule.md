---
title: Base de datos
description:  Tabla 'auth_rule'
---


## Documentación Técnica de la Tabla `auth_rule`

## Información General

### Propósito
La tabla `auth_rule` tiene por objeto almacenar las reglas asociadas con los elementos de autenticación, como roles y permisos, dentro de un sistema de control de acceso. En un modelo RBAC (Role-Based Access Control), las reglas pueden determinar condiciones adicionales para que ciertos roles o permisos sean aplicados. Por ejemplo, una regla puede especificar que un permiso solo es válido en ciertas circunstancias, como para usuarios de un determinado grupo o en un contexto específico.
Esta tabla permite la creación de reglas personalizadas para el control de acceso, lo que puede ser útil para sistemas más complejos que requieren condiciones adicionales más allá de una simple asignación de permisos.

### Relaciones
La tabla `auth_rule` tiene una relación 1:N con la tabla y `auth_item`, ya que un registro en `auth_rule` puede estar asociado con uno o varios registros en `auth_item`.
No todos los registros en `auth_item` necesitan estar vinculados a una regla, por lo que `rule_name` puede ser NULL.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE SET NULL`: Si una regla es eliminada de la tabla `auth_rule`, los elementos de autorización que estaban asociados con esta regla no se eliminan, pero el valor de `rule_name` en auth_item se establece en NULL.
- `ON UPDATE CASCADE`: Si el nombre de una regla cambia, se actualizan automáticamente las referencias en `auth_item`.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `auth_rule`;
CREATE TABLE `auth_rule`  (
  `name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` blob NULL,
  `created_at` int NULL DEFAULT NULL,
  `updated_at` int NULL DEFAULT NULL,
  PRIMARY KEY (`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|name		|varchar(64)	|NOT NULL<br>PRIMARY KEY	|Nombre único de la regla. Actúa como identificador principal de la regla.|
|data	|blob	|NULL	|Almacena datos adicionales relacionados con la regla. Generalmente, información en formato binario que describe las condiciones de la regla.|
|created_at	|int	|NULL	|Marca temporal de cuando la regla fue creada.|
|updated_at	|int	|NULL	|Marca temporal de cuando la regla fue actualizada.|

## Ejemplo en SQL

**Consulta para listar todos los elementos con una regla asociada**
``` sql
SELECT 
    ai.name AS auth_item_name,
    ai.type AS auth_item_type,
    ar.name AS rule_name,
    ar.created_at AS rule_created_at
FROM 
    auth_item ai
LEFT JOIN 
    auth_rule ar ON ai.rule_name = ar.name
WHERE 
    ai.rule_name IS NOT NULL;
```

**Consulta para obtener todos los elementos que no tienen regla asociada**
``` sql
SELECT 
    name, 
    type, 
    description 
FROM 
    auth_item 
WHERE 
    rule_name IS NULL;
```  