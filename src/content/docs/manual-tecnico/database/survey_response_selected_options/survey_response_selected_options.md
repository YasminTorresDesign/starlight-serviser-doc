---
title: Base de datos
description:  Tabla 'survey_response_selected_options'
---


## Documentación Técnica de la Tabla `survey_response_selected_options`

## Información General

### Propósito
La tabla `survey_response_selected_options` tiene por objeto almacenar los resultados de encuestas completadas por los usuarios (respondientes) dentro del sistema, donde cada registro representa la participación de un usuario en una encuesta específica, registrando su puntaje total, el estado del resultado y las fechas relevantes de finalización y modificación.

### Relaciones
La tabla `survey_response_selected_options` tiene una relación N:1 con la tabla `survey_option`, ya que una opción puede ser seleccionada por múltiples respuestas.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si una opción `survey_option` es eliminada, también se eliminan todas las referencias a esa opción en `survey_response_selected_options`.
- `ON UPDATE CASCADE`: Si el `id` de una opción cambia, la actualización se propaga a `survey_response_selected_options`.

La tabla `survey_response_selected_options` tiene una relación N:1 con la tabla `survey_response_answer`, ya que una respuesta puede estar asociada con múltiples opciones seleccionadas.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si una respuesta `survey_response_answer` es eliminada, también se eliminan todas las opciones seleccionadas asociadas.
- `ON UPDATE CASCADE`: Si el `id` de una respuesta cambia, la actualización se propaga a `survey_response_selected_options`.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `survey_response_selected_options`;
CREATE TABLE `survey_response_selected_options`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `response_answer_id` int NOT NULL,
  `option_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk-response_selected_options-option`(`option_id` ASC) USING BTREE,
  INDEX `fk-response_selected_options-response_answer`(`response_answer_id` ASC) USING BTREE,
  CONSTRAINT `fk-response_selected_options-option` FOREIGN KEY (`option_id`) REFERENCES `survey_option` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk-response_selected_options-response_answer` FOREIGN KEY (`response_answer_id`) REFERENCES `survey_response_answer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id	|int	|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único y auto-incrementable de cada resultado de encuesta. Clave primaria de la tabla.|
|response_answer_id	|int	|NOT NULL<br>FOREIGN KEY	|Identificador de la respuesta del usuario a la pregunta.|
|option_id	|int	|NOT NULL<br>FOREIGN KEY	|Identificador de la opción seleccionada.|
|created_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP	|Fecha y hora en la que se registró la opción seleccionada.|


## Ejemplo en SQL

**Consulta para obtener todas las opciones seleccionadas para una respuesta específica**
``` sql
SELECT srs.id, sra.response_id, sq.question_text, so.option_text
FROM survey_response_selected_options srs
JOIN survey_response_answer sra ON srs.response_answer_id = sra.id
JOIN survey_option so ON srs.option_id = so.id
JOIN survey_question sq ON sra.question_id = sq.id
WHERE sra.id = 10;
```

**Consulta para obtener todas las respuestas con sus opciones seleccionadas por un usuario**
``` sql
SELECT sr.id AS response_id, sq.question_text, so.option_text
FROM survey_response sr
JOIN survey_response_answer sra ON sr.id = sra.response_id
JOIN survey_response_selected_options srs ON sra.id = srs.response_answer_id
JOIN survey_option so ON srs.option_id = so.id
JOIN survey_question sq ON sra.question_id = sq.id
WHERE sr.user_id = 3;
```  

**Consulta para contar cuántos usuarios han seleccionado una opción específica**
``` sql
SELECT option_id, COUNT(*) AS total_selecciones
FROM survey_response_selected_options
WHERE option_id = 5
GROUP BY option_id;
``` 