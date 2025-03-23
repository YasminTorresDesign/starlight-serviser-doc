---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de QuizGrade.php

## Español

### Descripción General
El archivo `QuizGrade.php` es una clase de modelo que representa calificaciones de cuestionarios en el sistema, extendiendo la clase ActiveRecord de Yii2. Maneja el almacenamiento y gestión de calificaciones individuales de preguntas dentro de intentos de cuestionarios, incluyendo las opciones elegidas, corrección y puntos obtenidos.

### Propósito
Esta clase sirve como modelo central para gestionar calificaciones de cuestionarios en el sistema, proporcionando funcionalidad para rastrear respuestas individuales a preguntas, su corrección y los puntos obtenidos para cada pregunta dentro de un intento de cuestionario.

### Estructura de Directorios
- Ubicación: `common/models/QuizGrade.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveRecord`

### Componentes Principales

#### Definición de Clase
```php
class QuizGrade extends \yii\db\ActiveRecord
```

#### Propiedades
- `id`: Clave primaria
- `quiz_attempt_id`: Clave foránea al modelo QuizAttempt
- `quiz_question_id`: Clave foránea al modelo QuizQuestion
- `user_id`: Clave foránea al modelo User
- `chosen_option`: La opción seleccionada por el usuario
- `is_correct`: Booleano que indica si la respuesta es correcta
- `points`: Puntos obtenidos por la pregunta

#### Métodos Principales

1. **tableName()**
   - Propósito: Define el nombre de la tabla de base de datos
   - Retorna: String 'quiz_grade'

2. **rules()**
   - Propósito: Define reglas de validación
   - Valida:
     - Campos requeridos: quiz_attempt_id, quiz_question_id, user_id, chosen_option
     - Campos enteros: quiz_attempt_id, quiz_question_id, user_id, chosen_option, is_correct, points
     - Validación de existencia para las claves foráneas

3. **Relaciones**
   - `getQuizAttempt()`: Relación belongs to con el modelo QuizAttempt
   - `getQuizQuestion()`: Relación belongs to con el modelo QuizQuestion
   - `getUser()`: Relación belongs to con el modelo User

### Ejemplo de Uso
```php
$grade = new QuizGrade();
$grade->quiz_attempt_id = 1;
$grade->quiz_question_id = 1;
$grade->user_id = 1;
$grade->chosen_option = 2;
$grade->is_correct = true;
$grade->points = 10;
$grade->save();
```

## QuizGrade.php - Technical Documentation

## English

### Overview
The `QuizGrade.php` file is a model class that represents quiz grades in the system, extending Yii2's ActiveRecord class. It handles the storage and management of individual question grades within quiz attempts, including the chosen options, correctness, and points earned.

### Purpose
This class serves as the core model for managing quiz grades in the system, providing functionality for tracking individual question responses, their correctness, and the points earned for each question within a quiz attempt.

### Directory Structure
- Location: `common/models/QuizGrade.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveRecord`

### Key Components

#### Class Definition
```php
class QuizGrade extends \yii\db\ActiveRecord
```

#### Properties
- `id`: Primary key
- `quiz_attempt_id`: Foreign key to QuizAttempt model
- `quiz_question_id`: Foreign key to QuizQuestion model
- `user_id`: Foreign key to User model
- `chosen_option`: The option selected by the user
- `is_correct`: Boolean indicating if the answer is correct
- `points`: Points earned for the question

#### Main Methods

1. **tableName()**
   - Purpose: Defines the database table name
   - Returns: String 'quiz_grade'

2. **rules()**
   - Purpose: Defines validation rules
   - Validates:
     - Required fields: quiz_attempt_id, quiz_question_id, user_id, chosen_option
     - Integer fields: quiz_attempt_id, quiz_question_id, user_id, chosen_option, is_correct, points
     - Existence validation for foreign keys

3. **Relationships**
   - `getQuizAttempt()`: Belongs to relationship with QuizAttempt model
   - `getQuizQuestion()`: Belongs to relationship with QuizQuestion model
   - `getUser()`: Belongs to relationship with User model

### Usage Example
```php
$grade = new QuizGrade();
$grade->quiz_attempt_id = 1;
$grade->quiz_question_id = 1;
$grade->user_id = 1;
$grade->chosen_option = 2;
$grade->is_correct = true;
$grade->points = 10;
$grade->save();
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Implements Yii2's ActiveRecord pattern
- Manages individual question grading
- Tracks user responses and correctness
- Supports point-based scoring
- Implements comprehensive validation rules

### Best Practices / Mejores Prácticas
- Always validate grade data before saving
- Ensure proper relationships with quiz attempts and questions
- Consider performance implications for large numbers of grades
- Use appropriate point values for different question types
- Maintain data integrity through foreign key constraints

### Related Components / Componentes Relacionados
- QuizAttempt Model
- QuizQuestion Model
- User Model
- Quiz Model
- QuizController#