---
title: Base de datos
description:  Tabla 'survey'
---


## Documentación Técnica de la Tabla `survey`

## Información General

### Propósito
La tabla `survey` tiene por objeto almacenar información relacionada con encuestas o formularios dentro de la plataforma. Esta tabla permite la creación y gestión de encuestas, con campos que definen el título, la descripción, el estado, el puntaje total, y la URL asociada a la encuesta. Además, la tabla gestiona información relacionada con el creador de la encuesta, así como la fecha de creación y actualización de la misma. El estado de la encuesta permite gestionarlas en diferentes fases del ciclo de vida (borrador, publicada, archivada). Esto facilita el manejo de encuestas dentro de un sistema.

### Relaciones
La tabla `survey` tiene una relación N:1 con la tabla `user`, ya que cada encuesta `survey` es creada por un único usuario `user`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si un usuario es eliminado, las encuestas asociadas también se eliminan.
- `ON UPDATE RESTRICT`: No permite la modificación del `id` del usuario si hay encuestas asociadas.

La tabla `survey` tiene una relación 1:N con la tabla `survey_results`, ya que cada encuesta `survey` puede tener múltiples resultados `survey_results` asociados.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si una encuesta es eliminada, todos los resultados asociados también se eliminan.
- `ON UPDATE RESTRICT`: No permite la modificación del `id` de la encuesta si hay resultados asociados.

La tabla `survey` tiene una relación 1:N con la tabla `section`, ya que cada encuesta `survey` puede tener múltiples secciones `section` asociadas.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si una encuesta es eliminada, todas las secciones asociadas también se eliminan.
- `ON UPDATE RESTRICT`: No permite la modificación del `id` de la encuesta si hay secciones asociadas.

La tabla `survey` tiene una relación 1:N con la tabla `responses`, ya que cada encuesta `survey` puede tener múltiples respuestas `responses` asociadas.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si una encuesta es eliminada, todas las respuestas asociadas también se eliminan.
- `ON UPDATE RESTRICT`: No permite la modificación del `id` de la encuesta si hay respuestas asociadas.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `survey`;
CREATE TABLE `survey`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `total_points` int NULL DEFAULT NULL,
  `status` enum('draft','published','archived') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'draft',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-survey-created_by`(`created_by` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id	|int	|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único de la encuesta. Este campo es auto-incrementable y se utiliza como clave primaria.|
|title	|varchar(255)	|NOT NULL	|Título de la encuesta. Es obligatorio y se utiliza para identificar la encuesta.|
|description	|text	|NULL	|Descripción de la encuesta. Proporciona detalles adicionales sobre el propósito o el contenido de la encuesta.|
|total_points	|int	|NULL<br>DEFAULT NULL	|Puntaje total asociado a la encuesta. Este campo puede ser utilizado para asignar un valor total a la encuesta, dependiendo del tipo de evaluación.|
|status	|enum('draft','published','archived')	|NULL<br>DEFAULT 'draft'	|Estado de la encuesta. Permite gestionar las encuestas en diferentes fases: draft (borrador), published (publicada) y archived (archivada).|
|url	|varchar(255)	|NULL<br>DEFAULT NULL	|URL asociada a la encuesta. Puede ser utilizada para acceder a la encuesta en línea o para asociar una dirección web con la encuesta.|
|created_by	|int	|NULL	|Identificador del usuario que creó la encuesta. Este campo es una clave foránea que establece una relación con la tabla user.|
|updated_by	|int	|NULL	|Identificador del usuario que actualizó la encuesta por última vez. Es útil para rastrear cambios y modificaciones en la encuesta.|
|created_at	|timestamp	|NULL	|Fecha y hora de creación de la encuesta. Guarda el momento exacto en que la encuesta fue creada.|
|updated_at	|timestamp	|NULL	|Fecha y hora de la última actualización de la encuesta. Este campo registra el momento en que la encuesta fue modificada por última vez.|


## Ejemplo en SQL

**Consulta para obtener todas las encuestas creadas por un usuario específico**
``` sql
SELECT s.id AS survey_id, s.title, s.description, s.status, u.username AS created_by
FROM survey s
JOIN user u ON s.created_by = u.id
WHERE u.username = 'example_user';
```

**Consulta para obtener el puntaje total de los resultados por encuesta**
``` sql
SELECT s.title AS survey_title, SUM(sr.total_score) AS total_score
FROM survey_results sr
JOIN survey s ON sr.survey_id = s.id
GROUP BY s.id, s.title;
```  

**Consulta para contar encuestas que no tienen resultados todavía**
``` sql
SELECT s.id AS survey_id, s.title
FROM survey s
LEFT JOIN survey_results sr ON s.id = sr.survey_id
WHERE sr.id IS NULL;
```  