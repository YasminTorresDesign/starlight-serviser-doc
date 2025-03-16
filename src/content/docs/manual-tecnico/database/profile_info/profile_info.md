---
title: Base de datos
description:  Tabla 'profile_info'
---


## Documentación Técnica de la Tabla `profile_info`

## Información General

### Propósito
La tabla `profile_info` tiene por objeto almacenar información adicional relacionada con los perfiles de los usuarios dentro de un sistema. Este tipo de información incluye detalles como la foto de perfil, biografía, enlaces a redes sociales, ocupación y experiencia profesional, proporciona una vista más detallada del usuario y mejorar la personalización de la experiencia, permitiendo a los usuarios incluir información relevante para ser visualizada por otros dentro de la plataforma.

### Relaciones
La relación entre la tabla `profile` y la tabla `profile_info` es una relación uno a uno:

Cada registro en la tabla profile puede tener, como máximo, un registro asociado en la tabla profile_info.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si un perfil es eliminado de la tabla `profile`, su información adicional en `profile_info` se elimina automáticamente.
- `ON UPDATE RESTRICT`: Si se actualiza el valor de id en la tabla `profile`, el valor correspondiente en `profile_info` también se actualiza.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `profile_info`;
CREATE TABLE `profile_info`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `profile_id` int NOT NULL,
  `profile_picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `bio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `website` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `social_links` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `occupation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `company` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `industry` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `years_experience` int NULL DEFAULT NULL,
  `visibility` int NULL DEFAULT 1,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk-profile_info-profile`(`profile_id` ASC) USING BTREE,
  CONSTRAINT `fk-profile_info-profile` FOREIGN KEY (`profile_id`) REFERENCES `profile` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id	|int	|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único de la información del perfil. Auto-incrementado para generar un ID único para cada registro.|
|profile_id	|int	|NOT NULL	|Referencia al id del perfil asociado. Es una clave foránea que apunta a la tabla profile.|
|profile_picture	|varchar(255)	|NULL DEFAULT NULL	|URL o ruta de la imagen del perfil del usuario. Permite almacenar la ubicación de la foto del perfil.|
|bio	|varchar(255)	|NULL<br>DEFAULT NULL	|Biografía o descripción corta del usuario.|
|website	|varchar(255)	|NULL<br>DEFAULT NULL	|Enlace al sitio web personal o profesional del usuario.|
|social_links	|varchar(255)	|NULL<br>DEFAULT NULL	|Enlaces a redes sociales del usuario, como LinkedIn, Twitter, etc.|
|occupation	|varchar(255)	|NULL<br>DEFAULT NULL	|Ocupación o cargo actual del usuario.|
|company	|varchar(255)	|NULL<br>DEFAULT NULL	|Nombre de la empresa en la que trabaja el usuario.|
|industry	|varchar(255)	|NULL<br>DEFAULT NULL	|Industria o sector en el que se desempeña el usuario|
|years_experience	|int	|NULL<br>DEFAULT NULL	|Número de años de experiencia laboral del usuario.|
|visibility	|int	|NULL<br>DEFAULT 1	|Establece la visibilidad del perfil del usuario. Un valor de 1 generalmente indica que el perfil es visible, mientras que 0 indicaría que no lo es.|
|created_by	|int	|NULL<br>DEFAULT NULL	|Identificador del usuario que creó este registro de perfil.|
|updated_by	|int	|NULL<br>DEFAULT NULL	|Identificador del usuario que actualizó este registro de perfil.|
|created_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP	|Fecha y hora de la creación del registro de perfil.|
|updated_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP	|Fecha y hora de la última actualización del registro de perfil.|


## Ejemplo en SQL

**Consulta para obtener información completa de un perfil**
``` sql
SELECT 
    p.id AS profile_id, 
    p.first_name, 
    p.last_name, 
    p.full_name, 
    p.gender, 
    p.phone_number, 
    p.birth_date, 
    pi.profile_picture, 
    pi.bio, 
    pi.website, 
    pi.social_links, 
    pi.occupation, 
    pi.company, 
    pi.industry, 
    pi.years_experience 
FROM 
    profile p
LEFT JOIN 
    profile_info pi 
ON 
    p.id = pi.profile_id
WHERE 
    p.id = 1;
```

**Consulta para listar perfiles con ocupación y empresa**
``` sql
SELECT 
    p.full_name, 
    pi.occupation, 
    pi.company 
FROM 
    profile p
JOIN 
    profile_info pi 
ON 
    p.id = pi.profile_id
WHERE 
    pi.occupation IS NOT NULL;
```  