---
title: Base de datos
description:  Tabla 'auth_assignment'
---


## Documentación Técnica de la Tabla `auth_assignment`

## Información General

### Propósito
La tabla `auth_assignment` tiene por objeto gestionar la asignación de roles o permisos (denominados items de autenticación) a los usuarios en un sistema basado en control de acceso. Esta tabla actúa como una relación entre la tabla auth_item, que define roles y permisos, y la tabla user, que almacena la información de los usuarios del sistema.

### Relaciones
La tabla `auth_assignment` tiene una relación N:1 con la tabla `auth_item`, ya que un usuario puede tener múltiples asignaciones.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Al eliminar un rol/permiso en `auth_item`, se eliminan todas las asignaciones asociadas en `auth_assignment`.
- `ON UPDATE CASCADE`: Al actualizar el nombre de un rol/permiso, se reflejan los cambios en `auth_assignment`.

La tabla `auth_assignment` tiene una relación N:1 con la tabla `user`, ya que un usuario puede tener múltiples asignaciones.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`:  Al eliminar un usuario, se eliminan todas sus asignaciones en `auth_assignment`.
- `ON UPDATE CASCADE`: Al actualizar el `id` de un usuario, se reflejan los cambios en `auth_assignment`.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `auth_assignment`;
CREATE TABLE `auth_assignment`  (
  `item_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int NOT NULL,
  `created_at` int NULL DEFAULT NULL,
  PRIMARY KEY (`item_name`, `user_id`) USING BTREE,
  INDEX `idx-auth_assignment-user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `auth_assignment_ibfk_1` FOREIGN KEY (`item_name`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `auth_assignment_ibkf_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|item_name		|varchar		|NOT NULL<br>FOREIGN KEY	|Nombre del rol o permiso asignado al usuario. Referencia a la tabla auth_item.|
|user_id	|int	|NOT NULL<br>FOREIGN KEY	|Identificador del usuario al que se le asigna el rol o permiso. Referencia a user.|
|created_at	|int	|Opcional<br>DEFAULT NULL	|Marca de tiempo que indica cuándo se creó la asignación.|

## Ejemplo en SQL
**Consulta para listar todos los roles/permisos asignados a un usuario específico**
``` sql
SELECT aa.item_name, ai.description, ai.type
FROM auth_assignment aa
JOIN auth_item ai ON aa.item_name = ai.name
JOIN user u ON aa.user_id = u.id
WHERE u.username = 'example_user';
```

**Consulta para obtener todos los usuarios con un rol específico**
``` sql
SELECT u.id AS user_id, u.username, u.email
FROM auth_assignment aa
JOIN user u ON aa.user_id = u.id
WHERE aa.item_name = 'admin';
```  

**Consulta para contar cuántos usuarios tienen asignado cada rol/permiso**
``` sql
SELECT ai.name AS role_or_permission, COUNT(aa.user_id) AS total_users
FROM auth_item ai
LEFT JOIN auth_assignment aa ON ai.name = aa.item_name
WHERE ai.type = 1  -- 1 para roles, 2 para permisos
GROUP BY ai.name;
```  