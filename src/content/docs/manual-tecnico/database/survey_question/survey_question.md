---
title: Base de datos
description:  Tabla 'survey_question'
---


## Documentación Técnica de la Tabla `survey_question`

## Información General

### Propósito
La tabla `question` tiene por objeto información relacionada con las preguntas en un sistema de encuestas, cuestionarios o evaluaciones. Cada pregunta está asociada a una sección específica dentro del formulario o evaluación, lo que permite estructurar los cuestionarios de manera jerárquica. Además, soporta múltiples tipos de preguntas (texto, opción múltiple, verdadero/falso, entre otros), y admite elementos multimedia como imágenes o videos para enriquecer la experiencia.


### Relaciones
La tabla `survey_question` tiene una relación N:1 con la tabla `survey`, ya que cada encuesta puede contener múltiples preguntas directamente relacionadas a ella, pero cada pregunta pertenece a una única encuesta.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No se puede eliminar una encuesta si tiene preguntas asociadas.
- `ON UPDATE CASCADE`: Si cambia el ID de la encuesta, se actualiza en las preguntas correspondientes.


La tabla `survey_question` tiene una relación N:1 con la tabla `survey_section`, ya que una sección puede contener múltiples preguntas, pero cada pregunta pertenece a una única sección.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No se puede eliminar una sección si tiene preguntas asociadas.
- `ON UPDATE CASCADE`: Si cambia el ID de la sección, se actualiza en las preguntas correspondientes.


La tabla `survey_question` tiene una relación 1:N con la tabla `survey_option`, ya que una pregunta puede tener asociada múltiples opciones.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si una pregunta es eliminada, todas sus opciones de respuesta asociadas también se eliminan.
- `ON UPDATE CASCADE`: Si el `id` de una pregunta cambia, también se actualiza en las opciones relacionadas.


La tabla `survey_question` tiene una relación 1:N con la tabla `survey_response_answer`, ya que cada respuesta almacenada está asociada a una pregunta específica.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE CASCADE`: Si una pregunta es eliminada, todas sus respuestas también se eliminan.
- `ON UPDATE CASCADE`: Si cambia el ID de una pregunta, se actualiza en las respuestas correspondientes.



## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `survey_question`;
CREATE TABLE `survey_question`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `survey_id` int NOT NULL,
  `section_id` int NOT NULL,
  `question_text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `question_type` enum('short_text','paragraph','multiple_choice','checkbox','drop_down_list','true_false','date','email','number','time','url') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `points` int NULL DEFAULT 1,
  `hint` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `explanation` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `media_type` enum('image','video','none') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'none',
  `media_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-question-section`(`section_id` ASC) USING BTREE,
  INDEX `idx-question-survey`(`survey_id` ASC) USING BTREE,
  CONSTRAINT `fk-question-section` FOREIGN KEY (`section_id`) REFERENCES `survey_section` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk-question-survey` FOREIGN KEY (`survey_id`) REFERENCES `survey` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 39 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY|Identificador único de cada registro.|
|survey_id	|int	|NOT NULL<br>FOREIGN KEY	|Referencia la encuesta a la que pertenece la pregunta.|
|section_id	|int	|Opcional<br>NULL<br>FOREIGN KEY	|Referencia a una sección dentro de la encuesta.|
|question_text	|text	|NOT NULL	|Contenido de la pregunta en formato de texto.|
|question_type	|enum('text','multiple_choice','checkbox','true_false','open')	|NOT NULL	|Tipo de pregunta, que define el formato de respuesta esperada.|
|is_required	|Boolean	|NOT NULL<br>DEFAULT 1	|Indica si la pregunta es obligatoria (1) u opcional (0).|
|max_score	|Decimal(10,2)	|NULL<br>DEFAULT NULL	|Puntaje máximo asignado a la pregunta.|
|created_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP	|Marca la fecha y hora de creación de la pregunta.|


## Ejemplo en SQL

**Consulta para listar todas las preguntas con su encuesta y sección correspondiente**
``` sql
SELECT 
    sq.id AS question_id,
    sq.question_text,
    s.title AS survey_title,
    ss.title AS section_title
FROM survey_question sq
JOIN survey s ON sq.survey_id = s.id
JOIN survey_section ss ON sq.section_id = ss.id;
```

**Consulta para contar cuántas respuestas ha recibido cada pregunta**
``` sql
SELECT 
    sq.id AS question_id,
    sq.question_text,
    COUNT(sra.id) AS total_answers
FROM survey_question sq
LEFT JOIN survey_response_answer sra ON sq.id = sra.question_id
GROUP BY sq.id, sq.question_text;
```  

**Consulta para obtener preguntas con más de una opción correcta (en preguntas de opción múltiple)**
``` sql
SELECT 
    sq.id AS question_id,
    sq.question_text,
    COUNT(so.id) AS correct_options
FROM survey_question sq
JOIN survey_option so ON sq.id = so.question_id
WHERE so.is_correct = 1
GROUP BY sq.id, sq.question_text
HAVING COUNT(so.id) > 1;
```