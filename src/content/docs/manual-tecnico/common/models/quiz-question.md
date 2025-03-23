---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de QuizQuestion.php

## Español

### Descripción General
El archivo `QuizQuestion.php` es una clase de modelo que representa preguntas de cuestionarios en el sistema, extendiendo la clase ActiveRecord de Yii2. Maneja la gestión de preguntas dentro de cuestionarios, incluyendo sus propiedades, relaciones y reglas de validación.

### Propósito
Esta clase sirve como modelo central para gestionar preguntas de cuestionarios en el sistema, proporcionando funcionalidad para crear, actualizar y gestionar preguntas con varias propiedades como opciones, respuestas correctas y puntos.

### Estructura de Directorios
- Ubicación: `common/models/QuizQuestion.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveRecord`

### Componentes Principales

#### Definición de Clase
```php
class QuizQuestion extends \yii\db\ActiveRecord
```

#### Propiedades
- `id`: Clave primaria
- `quiz_id`: Clave foránea al modelo Quiz
- `question`: Texto de la pregunta
- `options`: Array JSON de posibles respuestas
- `correct_option`: Índice de la respuesta correcta
- `points`: Puntos otorgados por respuesta correcta
- `sort_order`: Orden de la pregunta en el cuestionario
- `created_at`, `updated_at`: Marcas de tiempo

#### Métodos Principales

1. **tableName()**
   - Propósito: Define el nombre de la tabla de base de datos
   - Retorna: String 'quiz_question'

2. **rules()**
   - Propósito: Define reglas de validación
   - Valida:
     - Campos requeridos: quiz_id, question, options, correct_option, created_at, updated_at
     - Campos enteros: quiz_id, correct_option, points, sort_order, created_at, updated_at
     - Campos de texto: question
     - Campos JSON: options
     - Validación de existencia para la clave foránea quiz_id

3. **Relaciones**
   - `getQuiz()`: Relación belongs to con el modelo Quiz
   - `getQuizGrades()`: Relación has many con el modelo QuizGrade

### Ejemplo de Uso
```php
$question = new QuizQuestion();
$question->quiz_id = 1;
$question->question = "¿Cuál es la capital de Francia?";
$question->options = json_encode([
    "Londres",
    "París",
    "Berlín",
    "Madrid"
]);
$question->correct_option = 1; // París
$question->points = 10;
$question->sort_order = 1;
$question->save();
```

## QuizQuestion.php - Technical Documentation

## English

### Overview
The `QuizQuestion.php` file is a model class that represents quiz questions in the system, extending Yii2's ActiveRecord class. It handles the management of questions within quizzes, including their properties, relationships, and validation rules.

### Purpose
This class serves as the core model for managing quiz questions in the system, providing functionality for creating, updating, and managing questions with various properties such as options, correct answers, and points.

### Directory Structure
- Location: `common/models/QuizQuestion.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveRecord`

### Key Components

#### Class Definition
```php
class QuizQuestion extends \yii\db\ActiveRecord
```

#### Properties
- `id`: Primary key
- `quiz_id`: Foreign key to Quiz model
- `question`: Question text
- `options`: JSON array of possible answers
- `correct_option`: Index of the correct answer
- `points`: Points awarded for correct answer
- `sort_order`: Order of question in quiz
- `created_at`, `updated_at`: Timestamps

#### Main Methods

1. **tableName()**
   - Purpose: Defines the database table name
   - Returns: String 'quiz_question'

2. **rules()**
   - Purpose: Defines validation rules
   - Validates:
     - Required fields: quiz_id, question, options, correct_option, created_at, updated_at
     - Integer fields: quiz_id, correct_option, points, sort_order, created_at, updated_at
     - String fields: question
     - JSON fields: options
     - Existence validation for quiz_id foreign key

3. **Relationships**
   - `getQuiz()`: Belongs to relationship with Quiz model
   - `getQuizGrades()`: Has many relationship with QuizGrade model

### Usage Example
```php
$question = new QuizQuestion();
$question->quiz_id = 1;
$question->question = "What is the capital of France?";
$question->options = json_encode([
    "London",
    "Paris",
    "Berlin",
    "Madrid"
]);
$question->correct_option = 1; // Paris
$question->points = 10;
$question->sort_order = 1;
$question->save();
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Implements Yii2's ActiveRecord pattern
- Manages question content and options
- Supports JSON storage for options
- Implements comprehensive validation rules
- Handles question ordering within quizzes

### Best Practices / Mejores Prácticas
- Always validate question data before saving
- Use appropriate point values for different question types
- Maintain proper question ordering
- Ensure options array is properly formatted
- Consider performance implications for large quizzes

### Related Components / Componentes Relacionados
- Quiz Model
- QuizGrade Model
- QuizController
- QuizQuestionQuery