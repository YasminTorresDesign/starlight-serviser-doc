---
title: Base de datos
description:  Tabla 'gov_id_type'
---


## Documentación Técnica de la Tabla `gov_id_type`

## Información General

### Propósito
La tabla `gov_id_type` tiene por objeto almacenar los diferentes tipos de identificaciones gubernamentales que se pueden asociar a personas o entidades dentro del sistema. Su objetivo es centralizar la gestión de los tipos de identificación y permitir su uso uniforme en otras tablas relacionadas, como la de usuarios.

### Relaciones
La tabla `gov_id_type` tiene una relación 1:N con la tabla `profile`, ya que un registro de identificación `gov_id_type` puede estar asociado con uno o varios registros de perfil `profile`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No se permite eliminar un registro de la tabla `gov_id_type` si existe al menos un perfil en la tabla `profile` asociado a este, con el fin de evitar que queden perfiles con referencias inválidas en el campo `gov_id_type`.
- `ON UPDATE CASCADE`: Si se cambia el valor del campo `id` en la tabla `gov_id_type`, el sistema actualizará automáticamente el valor correspondiente en los perfiles asociados (`gov_id_type` en la tabla `profile`), con el fin de mantener la relación actualizada y evitar inconsistencias.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `gov_id_type`;
CREATE TABLE `gov_id_type`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `short_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único para cada tipo de identificación gubernamental.|
|short_name	|varchar(255)	|NULL<br>DEFAULT NULL	|Nombre corto o abreviación del tipo de identificación (por ejemplo, "CC" para "Cédula de Ciudadanía").|
|name	|varchar(255)	|NULL<br>DEFAULT NULL	|Nombre completo del tipo de identificación (por ejemplo, "Cédula de Ciudadanía").|


## Ejemplo en SQL

**Consulta para obtener perfiles con su tipo de documento**
``` sql
SELECT 
    p.id AS profile_id, 
    p.first_name, 
    p.last_name, 
    g.name AS document_type, 
    p.gov_id 
FROM 
    profile p
LEFT JOIN 
    gov_id_type g 
ON 
    p.gov_id_type = g.id;
```

**Consulta para contar cuántos perfiles tienen cada tipo de documento**
``` sql
SELECT 
    g.name AS document_type, 
    COUNT(p.id) AS profile_count 
FROM 
    gov_id_type g
LEFT JOIN 
    profile p 
ON 
    g.id = p.gov_id_type
GROUP BY 
    g.id, g.name;
```  