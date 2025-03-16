---
title: Base de datos
description:  Tabla 'survey_section'
---


## Documentación Técnica de la Tabla `survey_section`

## Información General

### Propósito
La tabla `survey_section` tiene por objeto almacenar secciones o bloques dentro de una encuesta o formulario. Cada sección puede tener un título, una descripción y un orden, lo que permite organizar y estructurar el contenido de la encuesta.

### Relaciones
La tabla `survey_section` tiene una relación N:1 con la tabla `survey`, ya que un registro de encuesta `survey` puede estar asociado con uno o varios registros de `survey_section`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No se puede eliminar un `survey` si tiene secciones asociadas.
- `ON UPDATE CASCADE`: Si el `id` del `survey` cambia, se propaga a `survey_section`.

La tabla `survey_section` tiene una relación 1:N con la tabla `survey_question`, ya que un registro de sección `survey_section` puede estar asociado con uno o varios registros de `survey_question`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No se puede eliminar una `survey_section` si tiene preguntas asociadas.
- `ON UPDATE CASCADE`: Si el `id` de `survey_section` cambia, se actualiza en `survey_question`.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `survey_section`;
CREATE TABLE `survey_section`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `survey_id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `order` int NULL DEFAULT NULL,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-section-survey_id`(`survey_id` ASC) USING BTREE,
  CONSTRAINT `fk-section-survey_id` FOREIGN KEY (`survey_id`) REFERENCES `survey` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id	|int	|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único para cada sección de la encuesta. Es auto-incrementable y garantiza la unicidad de cada sección.|
|survey_id	|int	|NOT NULL	|Referencia a la encuesta a la que pertenece la sección. Este campo es una clave foránea que conecta esta tabla con la tabla survey.|
|title	|varchar(255)	|NOT NULL	|Título de la sección. Es un campo obligatorio que define el nombre de la sección.|
|description	|text	|NULL	|Descripción de la sección. Proporciona información adicional sobre el propósito o el contenido de la sección.|
|order	|int	|NULL<br>DEFAULT NULL	|Orden de aparición de la sección dentro de la encuesta. Este campo permite organizar las secciones en un orden específico, por ejemplo, 1, 2, 3, etc.|
|created_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP	|Fecha y hora de creación de la sección. Guarda el momento exacto en que la sección fue creada.|
|updated_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP	|Fecha y hora de la última actualización de la sección. Registra el momento en que la sección fue modificada por última vez.|
|created_by	|int	|NULL<br>DEFAULT NULL	|Identificador del usuario que creó la sección. Permite asociar la creación de la sección con un usuario específico.|
|updated_by	|int	|NULL<br>DEFAULT NULL	|Identificador del usuario que actualizó la sección por última vez. Permite asociar la modificación con un usuario.|


## Ejemplo en SQL

**Consulta para listar todas las secciones y preguntas de una encuesta específica**
``` sql
SELECT 
    ss.id AS section_id, 
    ss.title AS section_title, 
    sq.id AS question_id, 
    sq.question_text, 
    sq.question_type 
FROM survey_section ss
LEFT JOIN survey_question sq ON ss.id = sq.section_id
WHERE ss.survey_id = 1;
```

**Consulta para insertar una pregunta en una sección**
``` sql
INSERT INTO survey_question (survey_id, section_id, question_text, question_type, points, created_by) 
VALUES (1, 1, '¿Cuál es su edad?', 'number', 5, 1);
```  

**Consulta para listar todas las preguntas de una encuesta sin secciones**
``` sql
SELECT * FROM survey_question 
WHERE survey_id = 1 AND section_id IS NULL;
``` 