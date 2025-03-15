---
title: Base de datos
description:  Tabla 'course_lesson'
---


## Documentación Técnica de la Tabla `course_lesson`

## Información General

### Propósito
La tabla `course_lesson` tiene por objeto gestionar y almacenar las lecciones de un curso dentro de la plataforma. Cada lección está asociada a un curso (course) y, opcionalmente, a un módulo específico dentro del curso (course_module).
El propósito principal de esta tabla es proporcionar una estructura para organizar y presentar los contenidos de aprendizaje, incluyendo texto, videos y archivos adjuntos, en un orden definido para facilitar el consumo por parte de los usuarios.

### Relaciones
La tabla `course_lesson` tiene una relación N:1 con la tabla `course`, ya que un registro de curso `course` puede estar asociado con uno o varios registros de lecciones `course_lesson`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No se permite eliminar un curso si existen lecciones `course_lesson` asociadas a ese curso. Esto con el fin de preservar la integridad de los datos.
- `ON UPDATE CASCADE`: Si se cambia el valor del campo id en la tabla `course`, el sistema actualizará automáticamente el campo `lesson_id` en la tabla `course_lesson` para reflejar este cambio.

La tabla `course_module` tiene una relación 1:N con la tabla `course_lesson`, ya que un registro de curso `course_module` puede estar asociado con uno o varios registros de módulos de lección `course_lesson`.
Tambien se definen las siguientes acciones de Integridad Referencial:
- `ON DELETE RESTRICT`: No se permite eliminar un módulo si existen lecciones `course_lesson` asociadas a ese módulo. Esto con el fin de preservar la integridad de los datos.
- `ON UPDATE CASCADE`: Si se cambia el valor del campo id en la tabla `course_module`, el sistema actualizará automáticamente el campo `id` en la tabla `course_lesson` para reflejar este cambio.

## Creación de la tabla
El siguiente es el código `SQL` empleado para la creación de la tabla:
``` sql
DROP TABLE IF EXISTS `course_lesson`;
CREATE TABLE `course_lesson`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_id` int NOT NULL,
  `course_module_id` int NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `video_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `attachment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `order` int NULL DEFAULT 0,
  `created_by` int NULL DEFAULT NULL,
  `updated_by` int NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx-lesson-course_module_id`(`course_module_id` ASC) USING BTREE,
  INDEX `idx_lesson-course_id`(`course_id` ASC) USING BTREE,
  CONSTRAINT `fk-lesson-course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk-lesson-course_module_id` FOREIGN KEY (`course_module_id`) REFERENCES `course_module` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 42 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```

## Descripción de los campos
|Columna	|Tipo		|Restricciones	|Propósito	|
|:-------------:|:-------------:|:-------------:|:-------------|
|id		|int		|NOT NULL<br>AUTO_INCREMENT<br>PRIMARY KEY	|Identificador único de cada lección.|
|course_id	|int	|NOT NULL<br>FOREIGN KEY	|Identificador del curso al que pertenece la lección. Relacionado con la tabla course.|
|course_module_id	|int	|NULL<br>DEFAULT NULL	|Identificador del módulo del curso al que pertenece la lección. Relacionado con la tabla course_module.|
|title	|varchar(255)	|NOT NULL	|Título descriptivo de la lección.|
|content	|longtext	|NULL	|Contenido principal de la lección, como texto o información detallada.|
|video_url	|varchar(255)	|NULL<br>DEFAULT NULL	|URL del video asociado con la lección, si aplica.|
|attachment	|varchar(255)	|NULL<br>DEFAULT NULL	|Ruta o enlace a un archivo adjunto que complementa la lección.|
|order	|int	|NULL<br>DEFAULT 0	|Posición o secuencia de la lección dentro del curso o módulo.|
|created_by	|int	|NULL<br>DEFAULT NULL	|Identificador del usuario que creó la lección.|
|updated_by	|int	|NULL<br>DEFAULT NULL	|Identificador del usuario que realizó la última actualización en la lección.|
|created_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP	|Fecha y hora de creación de la lección.|
|updated_at	|timestamp	|NULL<br>DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP	|Fecha y hora de la última actualización de la lección.|


## Ejemplo en SQL

**Consulta para listar todas las lecciones de un curso específico**
``` sql
SELECT l.title AS lesson_title, c.title AS course_title
FROM lesson l
JOIN course c ON l.course_id = c.id
WHERE c.id = 1;
```

**Consulta para obtener todas las lecciones organizadas por módulo de un curso**
``` sql
SELECT m.title AS module_title, l.title AS lesson_title, l.order
FROM lesson l
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