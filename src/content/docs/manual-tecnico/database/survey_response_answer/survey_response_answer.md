---
title: Base de datos
description:  Tabla 'survey_response_answer'
---


## Documentación Técnica de la Tabla `survey_response_answer`

## Información General

### Propósito
La tabla `survey_response_answer` tiene por objeto almacenar las respuestas proporcionadas a preguntas dentro de un sistema de encuestas o formularios. Actúa como un registro detallado de las interacciones entre las preguntas (question) y las respuestas dadas por los usuarios, vinculándolas a una respuesta global (response_id).
Esta estructura permite registrar tanto respuestas seleccionadas de opciones predefinidas como respuestas abiertas, haciendo la tabla adaptable para diferentes tipos de cuestionarios.


### Relaciones
La tabla `survey_response_answer` tiene una relación N:1 con la tabla `survey_response`, ya que una respuesta puede pertenecer a una única respuesta global.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si se elimina una respuesta de la encuesta `survey_response`, se eliminan todas las respuestas asociadas `survey_response_answer`.
- `ON UPDATE CASCADE`: Si se actualiza el `id` de una respuesta, se reflejará en `survey_response_answer`.

La tabla `survey_response_answer` tiene una relación 1:N con la tabla `survey_question`, ya que una pregunta puede tener varias respuestas en diferentes encuestas.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`:  Si se elimina una pregunta, se eliminan todas las respuestas asociadas.
- `ON UPDATE CASCADE`: Si se actualiza el `id` de una pregunta, se reflejará en `survey_response_answer`.

La tabla `survey_response_answer` tiene una relación N:1 con la tabla `survey_response_selected_options`, ya que una respuesta puede tener varias opciones seleccionadas en caso de preguntas de selección múltiple.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`:  Si se elimina una respuesta, también se eliminan todas las opciones seleccionadas asociadas.
- `ON UPDATE CASCADE`: Si se actualiza el `id` de una respuesta, se reflejará en `survey_response_selected_options`.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `survey_response_answer`;
CREATE TABLE `survey_response_answer`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `response_id` int NOT NULL,
  `question_id` int NOT NULL,
  `answer_text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `calculated_score` decimal(10, 2) NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-answers-response_id`(`response_id` ASC) USING BTREE,
  INDEX `idx-answers-question_id`(`question_id` ASC) USING BTREE,
  CONSTRAINT `fk-answer-question` FOREIGN KEY (`question_id`) REFERENCES `survey_question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk-answer-response` FOREIGN KEY (`response_id`) REFERENCES `survey_response` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 85 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY|Identificador único de cada registro.|
|response_id	|int	|NOT NULL<br>FOREIGN KEY	|Identificador de la respuesta general de un usuario a una encuesta.|
|question_id	|int	|NOT NULL<br>FOREIGN KEY	|Identificador de la pregunta que se está respondiendo.|
|answer_text	|text	|Opcional<br>NULL	|Contiene la respuesta en texto libre (e.g., para preguntas abiertas).|
|calculated_score	|decimal(10,2)	|NULL	|Puntaje calculado en función de la respuesta del usuario|
|created_at	|timestamp	|DEFAULT CURRENT_TIMESTAMP	|Marca la fecha y hora de creación de la respuesta.|


## Ejemplo en SQL

**Consulta para obtener todas las respuestas de un usuario en una encuesta**
``` sql
SELECT s.title AS survey_title, q.question_text, a.answer_text, a.calculated_score
FROM survey_response_answer a
JOIN survey_response r ON a.response_id = r.id
JOIN survey_question q ON a.question_id = q.id
JOIN survey s ON r.survey_id = s.id
WHERE r.user_id = 3 AND s.id = 10;
```

**Consulta para contar el número de respuestas por pregunta en una encuesta**
``` sql
SELECT q.question_text, COUNT(a.id) AS total_responses
FROM survey_response_answer a
JOIN survey_question q ON a.question_id = q.id
JOIN survey_response r ON a.response_id = r.id
WHERE r.survey_id = 5
GROUP BY q.id;
```

**Consulta para obtener todas las opciones seleccionadas para una pregunta de selección múltiple**
``` sql
SELECT q.question_text, o.option_text
FROM survey_response_selected_options sro
JOIN survey_response_answer a ON sro.response_answer_id = a.id
JOIN survey_question q ON a.question_id = q.id
JOIN survey_option o ON sro.option_id = o.id
WHERE q.id = 15;
```