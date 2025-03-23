---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de Quiz.php


## Español

### Descripción General
El archivo `Quiz.php` es una clase de modelo que representa cuestionarios en el sistema, extendiendo la clase ActiveRecord de Yii2. Maneja la gestión de cuestionarios dentro de cursos, incluyendo sus propiedades, relaciones y reglas de validación.

### Propósito
Esta clase sirve como modelo central para gestionar cuestionarios en el sistema, proporcionando funcionalidad para crear, actualizar y gestionar cuestionarios con varias propiedades como límites de tiempo, estado y asociaciones con cursos.

### Estructura de Directorios
- Ubicación: `common/models/Quiz.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveRecord`

### Componentes Principales

#### Definición de Clase
```php
class Quiz extends \yii\db\ActiveRecord
```

#### Propiedades
- `id`: Clave primaria
- `course_id`: Clave foránea al modelo Course
- `title`: Título del cuestionario
- `description`: Descripción del cuestionario
- `time_limit`: Límite de tiempo en minutos
- `status`: Estado del cuestionario
- `created_at`, `updated_at`: Marcas de tiempo

#### Métodos Principales

1. **tableName()**
   - Propósito: Define el nombre de la tabla de base de datos
   - Retorna: String 'quiz'

2. **rules()**
   - Propósito: Define reglas de validación
   - Valida:
     - Campos requeridos: course_id, title, created_at, updated_at
     - Campos enteros: course_id, time_limit, status, created_at, updated_at
     - Campos de texto: title, description

3. **Relaciones**
   - `getCourse()`: Relación belongs to con el modelo Course
   - `getQuizAttempts()`: Relación has many con el modelo QuizAttempt
   - `getQuizQuestions()`: Relación has many con el modelo QuizQuestion

### Ejemplo de Uso
```php
$quiz = new Quiz();
$quiz->course_id = 1;
$quiz->title = "Examen Final";
$quiz->description = "Examen final comprensivo";
$quiz->time_limit = 120; // 2 horas
$quiz->status = 1;
$quiz->save();
```

## Quiz.php - Technical Documentation

## English

### Overview
The `Quiz.php` file is a model class that represents quizzes in the system, extending Yii2's ActiveRecord class. It handles the management of quizzes within courses, including their properties, relationships, and validation rules.

### Purpose
This class serves as the core model for managing quizzes in the system, providing functionality for creating, updating, and managing quizzes with various properties such as time limits, status, and course associations.

### Directory Structure
- Location: `common/models/Quiz.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveRecord`

### Key Components

#### Class Definition
```php
class Quiz extends \yii\db\ActiveRecord
```

#### Properties
- `id`: Primary key
- `course_id`: Foreign key to Course model
- `title`: Quiz title
- `description`: Quiz description
- `time_limit`: Time limit in minutes
- `status`: Quiz status
- `created_at`, `updated_at`: Timestamps

#### Main Methods

1. **tableName()**
   - Purpose: Defines the database table name
   - Returns: String 'quiz'

2. **rules()**
   - Purpose: Defines validation rules
   - Validates:
     - Required fields: course_id, title, created_at, updated_at
     - Integer fields: course_id, time_limit, status, created_at, updated_at
     - String fields: title, description

3. **Relationships**
   - `getCourse()`: Belongs to relationship with Course model
   - `getQuizAttempts()`: Has many relationship with QuizAttempt model
   - `getQuizQuestions()`: Has many relationship with QuizQuestion model

### Usage Example
```php
$quiz = new Quiz();
$quiz->course_id = 1;
$quiz->title = "Final Exam";
$quiz->description = "Comprehensive final examination";
$quiz->time_limit = 120; // 2 hours
$quiz->status = 1;
$quiz->save();
```


## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Implements Yii2's ActiveRecord pattern
- Manages quiz attempts and questions
- Supports time-limited quizzes
- Includes status tracking
- Implements comprehensive validation rules

### Best Practices / Mejores Prácticas
- Always validate quiz data before saving
- Set appropriate time limits for different quiz types
- Maintain proper relationships with course and questions
- Consider performance implications for large quizzes
- Use appropriate status values for quiz state management

### Related Components / Componentes Relacionados
- Course Model
- QuizAttempt Model
- QuizQuestion Model
- QuizController
- QuizSearch Model