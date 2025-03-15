---
title: Base de datos
description:  Tabla 'survey_option'
---


## Documentación Técnica de la Tabla `survey_option`

## Información General

### Propósito
La tabla `survey_option` tiene por objeto almacenar las opciones de respuesta asociadas a preguntas de tipo múltiple o de selección en un sistema de encuestas, cuestionarios o evaluaciones. Su objetivo principal es proporcionar las posibles respuestas a las preguntas y marcar aquellas que son correctas, además de permitir la asignación de un peso o relevancia a cada opción.

### Relaciones
La tabla `survey_option` tiene una relación N:1 con la tabla `survey_question`, ya que una pregunta puede tener asociada múltiples opciones.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si una pregunta es eliminada, todas sus opciones de respuesta asociadas también se eliminan.
- `ON UPDATE CASCADE`: Si el `id` de una pregunta cambia, también se actualiza en las opciones relacionadas.

La tabla `survey_option` tiene una relación 1:N con la tabla `survey_response_selected_options`, ya que cada opción en `survey_option` que ha sido seleccionada como respuesta se almacena en la tabla `survey_response_selected_options`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`:  Si una opción es eliminada, todas las referencias a esta opción en `survey_response_selected_options` también se eliminan.
- `ON UPDATE CASCADE`: Si el `id` de una opción cambia, también se actualiza en las respuestas seleccionadas relacionadas.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `survey_option`;
CREATE TABLE `survey_option`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `survey_id` int NULL DEFAULT NULL,
  `section_id` int NULL DEFAULT NULL,
  `question_id` int NOT NULL,
  `option_text` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_correct` tinyint(1) NOT NULL DEFAULT 0,
  `weight` int NULL DEFAULT 0,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-option-question`(`question_id` ASC) USING BTREE,
  CONSTRAINT `fk-option-question` FOREIGN KEY (`question_id`) REFERENCES `survey_question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY|Identificador único de cada registro.|
|survey_id	|int		|NULL<br>FOREIGN KEY	|Referencia opcional al id de la encuesta en la que se encuentra la pregunta asociada a esta opción.|
|section_id	|int	|NULL<br>FOREIGN KEY	|Referencia opcional al id de la sección en la que se encuentra la pregunta asociada a esta opción.|
|question_id	|int	|NOT NULL<br>FOREIGN KEY	|Identificador de la pregunta asociada.|
|option_text	|varchar(500)	|NOT NULL	|Texto de la opción que representa una respuesta posible.|
|is_correct	|tinyint(1)	|NOT NULL<br>DEFAULT 0	|Indica si la opción es correcta (1) o no (0).|
|weight	|int	|NULL<br>DEFAULT 0	|Ponderación de la opción de respuesta.|
|created_by	|int	|NULL	|Id del usuario que creó el registro|
|updated_by	|int	|NULL	|Id del usuario que modificó el registro|
|created_at	|timestamp	|DEFAULT CURRENT_TIMESTAMP	|Fecha y hora de creación de la opción.|
|updated_at	|timestamp	|DEFAULT CURRENT_TIMESTAMP<br> ON UPDATE CURRENT_TIMESTAMP	|Fecha y hora de la última actualización de la opción.|


## Ejemplo en SQL

**Consulta para obtener todas las opciones de una encuesta específica**
``` sql
SELECT so.id AS option_id, so.option_text, so.is_correct, sq.question_text
FROM survey_option so
JOIN survey_question sq ON so.question_id = sq.id
WHERE sq.survey_id = 1;
```

**Consulta para listar preguntas y sus opciones de respuesta**
``` sql
SELECT sq.id AS question_id, sq.question_text, so.id AS option_id, so.option_text, so.is_correct
FROM survey_question sq
LEFT JOIN survey_option so ON sq.id = so.question_id
WHERE sq.survey_id = 1;
```  

**Consulta para obtener respuestas incorrectas seleccionadas en una encuesta**
``` sql
SELECT sro.id AS response_id, sq.question_text, so.option_text
FROM survey_response_selected_options sro
JOIN survey_option so ON sro.option_id = so.id
JOIN survey_question sq ON so.question_id = sq.id
WHERE so.is_correct = 0 AND sq.survey_id = 1;
``` 