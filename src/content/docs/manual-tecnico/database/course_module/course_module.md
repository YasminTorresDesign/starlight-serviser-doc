---
title: Base de datos
description:  Tabla 'course_module'
---


## Documentación Técnica de la Tabla `course_module`

## Información General

### Propósito
La tabla `course_module` tiene por objeto representar los módulos o unidades que componen a cada uno de los cursos en la plataforma. Cada curso puede estar dividido en varios módulos, y la tabla almacena la información asociada a estos módulos, como su título, descripción y metadatos relacionados con su creación y actualización. Su propósito es estructurar los contenidos de los cursos, facilitando la gestión, presentación y personalización del aprendizaje.

### Relaciones
La tabla `course_module` tiene una relación N:1 con la tabla `course`, ya que un registro de curso `course` puede estar asociado con uno o varios registros de módulos de curso `course_module`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No se permite eliminar un curso si existen módulos `course_module` asociados a ese curso. Esto con el fin de preservar la integridad de los datos.
- `ON UPDATE CASCADE`: Si se cambia el valor del campo id en la tabla `course`, el sistema actualizará automáticamente el campo `course_id` en la tabla `course_module` para reflejar este cambio.

La tabla `course_module` tiene una relación 1:N con la tabla `course_lesson`, ya que un registro de curso `course_module` puede estar asociado con uno o varios registros de módulos de lección `course_lesson`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No se permite eliminar un módulo si existen lecciones `course_lesson` asociadas a ese módulo. Esto con el fin de preservar la integridad de los datos.
- `ON UPDATE CASCADE`: Si se cambia el valor del campo id en la tabla `course_module`, el sistema actualizará automáticamente el campo `id` en la tabla `course_lesson` para reflejar este cambio.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `course_module`;
CREATE TABLE `course_module`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-course_module-course_id`(`course_id` ASC) USING BTREE,
  CONSTRAINT `fk-course_module-course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único del módulo, generado automáticamente.|
|course_id	|int	|NOT NULL	|Identificador del curso al que pertenece el módulo, referenciando la tabla course.|
|title	|varchar(255)	|NOT NULL	|Título del módulo, utilizado para identificar su contenido de manera clara.|
|description	|text	|Opcional	|Descripción detallada del módulo, útil para brindar contexto o información adicional.|
|created_by	|int	|Opcional	|Identificador del usuario que creó el módulo, posiblemente un instructor o administrador.|
|updated_by	|int	|Opcional	|Identificador del usuario que actualizó por última vez el módulo.|
|created_at	|timestamp	|Opcional<br>DEFAULT CURRENT_TIMESTAMP	|Fecha y hora en que se creó el módulo. Por defecto, se asigna el momento actual al crear el registro.|
|updated_at	|timestamp	|Opcional<br>DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP	|Fecha y hora de la última actualización del módulo. Se actualiza automáticamente.|


## Ejemplo en SQL

**Consulta para listar todas las lecciones de un curso específico**
``` sql
SELECT l.title AS lesson_title, c.title AS course_title
FROM course_lesson l
JOIN course c ON l.course_id = c.id
WHERE c.id = 1;
```

**Consulta para obtener todas las lecciones organizadas por módulo de un curso**
``` sql
SELECT m.title AS module_title, l.title AS lesson_title, l.order
FROM course_lesson l
JOIN course_module m ON l.course_module_id = m.id
WHERE m.course_id = 1
ORDER BY m.id, l.order;
```  

**Consulta para contar el número de lecciones por módulo en un curso específico**
``` sql
SELECT m.title AS module_title, COUNT(l.id) AS lesson_count
FROM course_module m
LEFT JOIN course_lesson l ON m.id = l.course_module_id
WHERE m.course_id = 1
GROUP BY m.id, m.title;
```  