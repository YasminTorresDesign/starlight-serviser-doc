---
title: Base de datos
description:  Tabla 'auth_item'
---


## Documentación Técnica de la Tabla `auth_item`

## Información General

### Propósito
La tabla `auth_item` tiene por objeto definir los roles y permisos utilizados en un sistema de control de acceso basado en autenticación. Cada registro en esta tabla representa un rol o permiso con información adicional, como su tipo, descripción, y reglas asociadas.

### Relaciones
La tabla `auth_item` tiene una relación 1:N con la tabla `auth_rule`, ya que una regla en `auth_rule` puede ser asociada a múltiples elementos en `auth_item`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE SET NULL`: Al eliminar una regla en `auth_rule`, los elementos de `auth_item` que la referencian tendrán el campo `rule_name` establecido en `NULL`.
- `ON UPDATE CASCADE`: Si se actualiza el nombre de una regla, el cambio se propaga en los elementos de `auth_item`.

La tabla `auth_item` tiene una relación 1:N con la tabla `auth_item_child` y de forma recursiva, ya que un elemento en `auth_item` puede actuar como padre (`parent`) o hijo (`child`) en la jerarquía definida por `auth_item_child`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Al eliminar un elemento en `auth_item`, se eliminan automáticamente todas las relaciones jerárquicas donde actúe como padre o hijo
- `ON UPDATE CASCADE`: Si se actualiza el nombre de un elemento, el cambio se refleja en las relaciones jerárquicas correspondientes.

La tabla `auth_item` tiene una relación 1:N con la tabla `auth_assignment`, ya que un elemento en `auth_item` (rol o permiso) puede estar asignado a múltiples usuarios mediante `auth_assignment`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Al eliminar un elemento en `auth_item`, se eliminan automáticamente todas las asignaciones relacionadas en `auth_assignment`.
- `ON UPDATE CASCADE`: Si se actualiza el nombre de un elemento en `auth_item`, el cambio se refleja en las asignaciones correspondientes.


## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `auth_item`;
CREATE TABLE `auth_item`  (
  `name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` smallint NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `rule_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `data` blob NULL,
  `created_at` int NULL DEFAULT NULL,
  `updated_at` int NULL DEFAULT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  INDEX `rule_name`(`rule_name` ASC) USING BTREE,
  INDEX `idx-auth_item-type`(`type` ASC) USING BTREE,
  CONSTRAINT `auth_item_ibfk_1` FOREIGN KEY (`rule_name`) REFERENCES `auth_rule` (`name`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|name		|varchar		|NOT NULL<br>PRIMARY KEY	|Nombre único del rol o permiso. Identifica el elemento de autenticación.|
|type	|smallint	|NOT NULL<br>INDEX		|Indica si es un rol (valores típicos: 1) o un permiso (2).|
|description	|text	|Opcional	|Descripción del rol o permiso, útil para documentación.|
|rule_name	|varchar(64)	|Opcional<br>FOREIGN KEY	|Nombre de la regla asociada (referencia a auth_rule).|
|data	|blob	|Opcional	|Datos adicionales para el rol o permiso, utilizados para reglas personalizadas.|
|created_at	|int	|Opcional	|Marca de tiempo de la creación del registro.|
|updated_at	|int	|Opcional	|Marca de tiempo de la última actualización.|

## Ejemplo en SQL

**Consulta para agregar un nuevo elemento con una regla específica**
``` sql
INSERT INTO auth_item (name, type, rule_name, created_at)
VALUES ('admin_role', 1, 'admin_rule', UNIX_TIMESTAMP());
```

**Consulta para insertar una relación entre elementos**
``` sql
INSERT INTO auth_item_child (parent, child)
VALUES ('admin_role', 'edit_permission');
```  

**Consulta para obtener todos los permisos asignados directa o indirectamente a un rol**
``` sql
WITH RECURSIVE RoleHierarchy AS (
    SELECT parent, child
    FROM auth_item_child
    WHERE parent = 'admin_role'
    UNION ALL
    SELECT aic.parent, aic.child
    FROM auth_item_child aic
    INNER JOIN RoleHierarchy rh ON aic.parent = rh.child
)
SELECT DISTINCT child AS permission
FROM RoleHierarchy;
```  