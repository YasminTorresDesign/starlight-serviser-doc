---
title: Base de datos
description:  Tabla 'address'
---


## Documentación Técnica de la Tabla `address`

## Información General

### Propósito
La tabla `address` tiene por objeto almacenar información relacionada con las direcciones de usuarios o perfiles en el sistema, permite gestionar de forma estructurada múltiples direcciones asociadas a un perfil para facilitar la integración de la información con otras funcionalidades del sistema.

### Relaciones

**ACA VA LA IMAGEN: XXXXXXXXXXX**

La tabla `address` tiene una relación N:1 con la tabla `profile`, ya que un perfil puede tener múltiples direcciones y donde cada dirección este asociada a un único perfil.
La columna `profile_id` actúa como una clave foránea que referencia a la columna `id` de la tabla `profile`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Cuando un perfil es eliminado, todas las direcciones asociadas en la tabla `profile` tambien son eliminadas.
- `ON UPDATE CASCADE`: Si el valor de la clave primaria de un perfil cambia, el valor correspondiente en la tabla `address` se actualizará automáticamente.


## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `profile_id` int NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `postal_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_address-profile`(`profile_id` ASC) USING BTREE,
  CONSTRAINT `fk_address-profile` FOREIGN KEY (`profile_id`) REFERENCES `profile` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY|Identificador único de cada registro.|
|profile_id	|int	|NOT NULL<br>FOREIGN KEY	|Conecta esta dirección a un perfil en la tabla profile. (campo foráneo a la tabla profile).|
|address	|varchar(255)	|NOT NULL	|Almacena la dirección detallada, como dirección física (calle, número, etc.).|
|city	|varchar(255)	|NOT NULL	|Identifica la ciudad asociada a la dirección.|
|state	|varchar(255)	|Opcional	|Indica el estado o provincia, útil para países con divisiones territoriales claras.|
|country	|varchar(255)	|Opcional	|Registra el país donde está localizada la dirección.|
|postal_code	|varchar(255)	|Opcional	|Registra el código postal.|
|created_by	|int	|Opcional	|Registra el identificador del usuario que creó el registro.|
|updated_by	|int	|Opcional	|Registra el identificador del usuario que actualizó el registro.|
|created_at	|timestamp	|DEFAULT CURRENT_TIMESTAMP	|Registra la fecha y hora de creación del registro.|
|updated_at	|timestamp	|DEFAULT CURRENT_TIMESTAMP<br>ON UPDATE CURRENT_TIMESTAMP	|Registra la Fecha y hora de la última actualización del registro.|


## Ejemplo en SQL
**Consulta para obtener las direcciones de un perfil específico**


``` sql
SELECT 
    p.id AS profile_id,
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
    p.id AS profile_id,
    p.full_name,
    COUNT(a.id) AS address_count
FROM 
    profile p
LEFT JOIN 
    address a ON p.id = a.profile_id
GROUP BY 
    p.id;
```