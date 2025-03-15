---
title: Base de datos
description:  Tabla 'auth_item_child'
---


## Documentación Técnica de la Tabla `auth_item_child`

## Información General

### Propósito
La tabla `auth_item_child` tiene por objeto establecer relaciones jerárquicas entre roles y permisos dentro de un sistema de control de acceso basado en roles (RBAC, Role-Based Access Control). Esta estructura permite organizar roles y permisos en una jerarquía, donde un rol "padre" hereda los permisos de sus "hijos". También facilita la reutilización de permisos comunes entre diferentes roles y la implementación de niveles de acceso escalonados.

### Relaciones
Entre las tablas `auth_item_child` y `auth_item` se define una relación jerárquica donde el elemento `parent` puede incluir a otro `child`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Cuando un elemento de autorización es eliminado, todos los registros asociados en la tabla `auth_item` tambien son eliminados.
- `ON UPDATE CASCADE`: Si el identificador de un elemento de autorización cambia, las relaciones jerárquicas asociadas se actualizan automáticamente.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `auth_item_child`;
CREATE TABLE `auth_item_child`  (
  `parent` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `child` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`parent`, `child`) USING BTREE,
  INDEX `child`(`child` ASC) USING BTREE,
  CONSTRAINT `auth_item_child_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `auth_item_child_ibfk_2` FOREIGN KEY (`child`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|parent		|varchar(64)		|NOT NULL<br>PRIMARY KEY<br>FOREIGN KEY	|Nombre del elemento padre (rol o permiso) que hereda a otros elementos.|
|child	|varchar(64)	|NOT NULL<br>PRIMARY KEY<br>FOREIGN KEY		|Nombre del elemento hijo (rol o permiso) que está subordinado al padre.|


## Ejemplo en SQL

**Consulta para obtener todos los permisos de un rol específico**
``` sql
SELECT 
    parent AS role, 
    child AS permission 
FROM 
    auth_item_child 
WHERE 
    parent = 'admin';
```

**Consulta para construir la jerarquía completa de roles y permisos**
``` sql
WITH RECURSIVE RoleHierarchy AS (
    SELECT 
        parent, 
        child 
    FROM 
        auth_item_child
    UNION ALL
    SELECT 
        ah.parent, 
        ac.child 
    FROM 
        auth_item_child ac
    INNER JOIN RoleHierarchy ah ON ac.parent = ah.child
)
SELECT * FROM RoleHierarchy;
```  