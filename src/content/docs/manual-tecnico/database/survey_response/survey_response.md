---
title: Base de datos
description:  Tabla 'survey_response'
---


## Documentación Técnica de la Tabla `survey_response`

## Información General

### Propósito
La tabla `survey_response` tiene por objeto almacenar las respuestas individuales proporcionadas por los usuarios a las preguntas de un sistema de encuestas o cuestionarios. Su función principal es registrar los datos relacionados con cada respuesta, ya sea seleccionando una opción predefinida o ingresando texto libre. La tabla también permite relacionar las respuestas con encuestas específicas, preguntas y usuarios.

### Relaciones
La tabla `survey_response` tiene una relación N:1 con la tabla `survey`, ya que una respuesta en `survey_response` está asociada a un único registro en `survey`, pero un registro en `survey` puede tener múltiples registros de `survey_response`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si una encuesta se elimina, todas las respuestas asociadas también se eliminarán.
- `ON UPDATE CASCADE`: Si el `id` de una encuesta cambia, la actualización se propaga a `survey_response`.

La tabla `survey_response` tiene una relación 1:N con la tabla `survey_response_answer`, ya que cada respuesta a una pregunta `survey_response_answer` pertenece a una única respuesta de encuesta `survey_response`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`:  Si una respuesta de encuesta se elimina, todas sus respuestas individuales también serán eliminadas.
- `ON UPDATE CASCADE`: Si el `id` de una respuesta de encuesta cambia, se actualiza en `survey_response_answer`.

La tabla `survey_response` tiene una relación N:1 con la tabla `user`, ya que Cada respuesta de encuesta está vinculada a un usuario específico que la realizó.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si un usuario es eliminado, sus respuestas también lo serán.
- `ON UPDATE CASCADE`: Si el `id` de un usuario cambia, la actualización se propaga.



## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `survey_response`;
CREATE TABLE `survey_response`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `survey_id` int NOT NULL,
  `user_id` int NOT NULL,
  `total_score` decimal(10, 2) NULL DEFAULT NULL,
  `status` enum('completed') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-response-survey`(`survey_id` ASC) USING BTREE,
  INDEX `idx-response-user`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk-response-survey` FOREIGN KEY (`survey_id`) REFERENCES `survey` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk-response-user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY|Identificador único de cada registro.|
|survey_id	|int	|NOT NULL<br>FOREIGN KEY	|Identificador de la encuesta asociada a la respuesta.|
|user_id	|int	|NOT NULL<br>FOREIGN KEY	|Identificador del usuario que proporcionó la respuesta.|
|total_score	|decimal(10,2)	|NULL<br>DEFAULT NULL	|Puntaje total obtenido en la encuesta.|
|status	|enum(completed)	|NULL<br>DEFAULT NULL	|Estado de la respuesta (solo permite completed)|
|created_at	|timestamp NULL	|DEFAULT CURRENT_TIMESTAMP	|Fecha y hora de creación de la respuesta.|


## Ejemplo en SQL

**Consulta para obtener todas las respuestas de un usuario específico en una encuesta**
``` sql
SELECT sr.id AS response_id, 
       s.title AS survey_title, 
       sr.total_score, 
       sr.status, 
       sr.created_at
FROM survey_response sr
JOIN survey s ON sr.survey_id = s.id
WHERE sr.user_id = 5;
```

**Consulta para obtener todas las respuestas a una encuesta específica, junto con las respuestas individuales de cada pregunta**
``` sql
SELECT sr.id AS response_id, 
       u.username AS respondent, 
       s.title AS survey_title, 
       sra.question_id, 
       sra.answer_text, 
       sra.calculated_score
FROM survey_response sr
JOIN survey s ON sr.survey_id = s.id
JOIN survey_response_answer sra ON sr.id = sra.response_id
JOIN user u ON sr.user_id = u.id
WHERE s.id = 3;
```  

**Consulta para contar cuántos usuarios han completado una encuesta específica**
``` sql
SELECT s.title AS survey_title, 
       COUNT(sr.id) AS completed_responses
FROM survey_response sr
JOIN survey s ON sr.survey_id = s.id
WHERE sr.status = 'completed' 
AND s.id = 2
GROUP BY s.id;
``` 