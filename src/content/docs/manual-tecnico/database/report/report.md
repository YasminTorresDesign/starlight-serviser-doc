---
title: Base de datos
description:  Tabla 'report'
---


## Documentación Técnica de la Tabla `report`

## Información General

### Propósito
La tabla `report` tiene por objeto almacenar registros de informes generados por los usuarios dentro del sistema, donde cada informe puede ser de diferente tipo y tiene asociados varios atributos como la descripción, el estado del informe y la relación con el usuario que lo generó. Permite un seguimiento organizado de los informes generados por los usuarios, con una estructura que facilite su consulta, actualización y gestión en el sistema. Esto es útil para sistemas de seguimiento de actividad, incidencias, o generación de reportes específicos.


### Relaciones
La relación entre la tabla `report` y la tabla `user` es una relación N:1, pues un usuario puede generar múltiples reportes y donde cada reporte está asociado a un único usuario.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si un usuario es eliminado de la tabla `user`, todos los reportes asociados a ese usuario también serán eliminados automáticamente.
- `ON UPDATE RESTRICT`: No se permite actualizar el valor de `id` en la tabla `user` si existen reportes relacionados.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `report`;
CREATE TABLE `report`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `status` smallint NOT NULL DEFAULT 0,
  `created_at` int NOT NULL,
  `updated_at` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-report-user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk-report-user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id	|int	|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único para cada informe. Es un campo auto-incrementable que garantiza la unicidad de los informes.|
|user_id	|int	|NOT NULL	|Referencia al usuario que genera el informe. Es una clave foránea que apunta a la tabla user.|
|type	|varchar(255)	|NOT NULL	|Tipo o categoría del informe. Este campo puede usarse para clasificar el informe en diferentes categorías o tipos.|
|description	|text	|NULL	|Descripción detallada del informe. Permite que el usuario proporcione más información sobre el informe generado.|
|status	|smallint	|NOT NULL<br>DEFAULT 0	|Estado del informe. Un valor de 0 podría indicar que el informe está en estado "pendiente", mientras que otros valores podrían representar diferentes estados como "en proceso" o "finalizado".|
|created_at	|int	|NOT NULL	|Fecha y hora de creación del informe. El valor es un timestamp que representa el momento en que se generó el informe.|
|updated_at	|int	|NOT NULL	|Fecha y hora de la última actualización del informe. Este campo permite saber cuándo fue actualizado el informe por última vez.|


## Ejemplo en SQL

**Consulta para obtener todos los reportes de un usuario**
``` sql
SELECT 
    r.id AS report_id, 
    r.type, 
    r.description, 
    r.status, 
    r.created_at, 
    r.updated_at 
FROM 
    report r
JOIN 
    user u 
ON 
    r.user_id = u.id
WHERE 
    u.id = 1;
```

**Consulta para identificar usuarios con más reportes**
``` sql
SELECT 
    u.username, 
    COUNT(r.id) AS report_count 
FROM 
    report r
JOIN 
    user u 
ON 
    r.user_id = u.id
GROUP BY 
    u.id
ORDER BY 
    report_count DESC;
```  