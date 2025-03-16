---
title: Base de datos
description:  Tabla 'country'
---


## Documentación Técnica de la Tabla `country`

## Información General

### Propósito
La tabla `country` tiene por objeto almacenar información relacionada con los países. Esta tabla permite gestionar y organizar datos clave sobre las naciones del mundo, como su código, nombre, ubicación geográfica, población, forma de gobierno, entre otros aspectos. Es útil para aplicaciones que requieren acceso a información detallada sobre países, como sistemas de información geográfica (GIS), bases de datos de comercio internacional, aplicaciones de estadísticas globales, o sistemas de administración de datos geopolíticos.
Esta tabla también permite asociar un país con su capital, forma de gobierno, y características sociales y económicas, como la esperanza de vida, la población y el año de independencia, lo que facilita un análisis más profundo de cada país.

### Relaciones
Esta tabla no tiene relaciones con otras tablas de la base de datos.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `country`;
CREATE TABLE `country`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `continent` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `region` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `surface_area` int NULL DEFAULT NULL,
  `independence_year` int NULL DEFAULT NULL,
  `population` int NULL DEFAULT NULL,
  `life_expectancy` float NULL DEFAULT NULL,
  `local_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `government_form` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `capital` int NULL DEFAULT NULL,
  `code_2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `currency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 239 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único para cada país. Es la clave primaria de la tabla y se incrementa automáticamente|
|code	|varchar(255)	|NOT NULL	|Código único que representa al país, usualmente el código de dos o tres letras (por ejemplo, 'USA' para Estados Unidos).|
|name	|varchar(255)	|NOT NULL	|Nombre oficial del país.|
|continent	|varchar(255)	|NULL	|Nombre del continente al que pertenece el país (por ejemplo, 'Asia', 'América del Sur').|
|region	|varchar(255)	|NULL	|Región geográfica o económica dentro del continente (por ejemplo, 'Europa Occidental', 'Este de África').|
|surface_area	|int	|NULL	|Área superficial del país en kilómetros cuadrados.|
|independence_year	|int	|NULL	|Año en el que el país adquirió su independencia.|
|population	|int	|NULL	|Población total del país en el año más reciente registrado.|
|life_expectancy	|float	|NULL	|Promedio de esperanza de vida de los habitantes del país.|
|local_name	|varchar(255)	|NULL	|Nombre del país en su idioma local.|
|government_form	|varchar(255)	|NULL	|Tipo de gobierno del país (por ejemplo, 'República', 'Monarquía').|
|capital	|int	|NULL	|ID de la ciudad capital, referenciado probablemente a otra tabla de ciudades.|
|code_2	|varchar(255)	|NOT NULL	|Código de dos letras (ISO 3166-1 alfa-2) que representa al país (por ejemplo, 'US' para Estados Unidos).|
|currency	|varchar(255)	|NULL	|Moneda oficial del país (por ejemplo, 'USD' para Estados Unidos, 'EUR' para la Eurozona).|

## Ejemplo en SQL

**Consulta para listar todos los países con su continente y población**
``` sql
SELECT 
    name AS Country,
    continent AS Continent,
    population AS Population
FROM 
    country
ORDER BY 
    population DESC;
```

**Consulta para encontrar países con una esperanza de vida mayor a 80 años**
``` sql
SELECT 
    name AS Country,
    life_expectancy AS LifeExpectancy
FROM 
    country
WHERE 
    life_expectancy > 80
ORDER BY 
    life_expectancy DESC;
```  