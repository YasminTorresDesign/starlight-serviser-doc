---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de QuizAttempt.php

## Español

### Descripción General
El archivo `QuizAttempt.php` es una clase de modelo que representa intentos de cuestionarios en el sistema, extendiendo la clase ActiveRecord de Yii2. Maneja el seguimiento de los intentos de los usuarios para completar cuestionarios, incluyendo tiempo, puntuación e información de estado.

### Propósito
Esta clase sirve como modelo central para gestionar intentos de cuestionarios en el sistema, proporcionando funcionalidad para rastrear cuándo los usuarios inician y finalizan cuestionarios, sus puntuaciones y si aprobaron el cuestionario.

### Estructura de Directorios
- Ubicación: `common/models/QuizAttempt.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveRecord`

### Componentes Principales

#### Definición de Clase
```php
class QuizAttempt extends \yii\db\ActiveRecord
```

#### Propiedades
- `id`: Clave primaria
- `quiz_id`: Clave foránea al modelo Quiz
- `user_id`: Clave foránea al modelo User
- `started_at`: Marca de tiempo cuando comenzó el intento
- `finished_at`: Marca de tiempo cuando finalizó el intento (nullable)
- `status`: Estado del intento
- `score`: Puntuación del usuario (nullable)
- `is_passed`: Booleano que indica si el intento fue aprobado (nullable)

#### Métodos Principales

1. **tableName()**
   - Propósito: Define el nombre de la tabla de base de datos
   - Retorna: String 'quiz_attempt'

2. **rules()**
   - Propósito: Define reglas de validación
   - Valida:
     - Campos requeridos: quiz_id, user_id, started_at
     - Campos enteros: quiz_id, user_id, started_at, finished_at, status, score, is_passed
     - Validación de existencia para las claves foráneas quiz_id y user_id

3. **Relaciones**
   - `getQuiz()`: Relación belongs to con el modelo Quiz
   - `getQuizGrades()`: Relación has many con el modelo QuizGrade
   - `getUser()`: Relación belongs to con el modelo User

### Ejemplo de Uso
```php
$attempt = new QuizAttempt();
$attempt->quiz_id = 1;
$attempt->user_id = 1;
$attempt->started_at = time();
$attempt->status = 1;
$attempt->save();

// Más tarde cuando se completa el cuestionario
$attempt->finished_at = time();
$attempt->score = 85;
$attempt->is_passed = true;
$attempt->save();
```

## QuizAttempt.php - Technical Documentation

## English

### Overview
The `QuizAttempt.php` file is a model class that represents quiz attempts in the system, extending Yii2's ActiveRecord class. It handles the tracking of user attempts to complete quizzes, including timing, scoring, and status information.

### Purpose
This class serves as the core model for managing quiz attempts in the system, providing functionality for tracking when users start and finish quizzes, their scores, and whether they passed the quiz.

### Directory Structure
- Location: `common/models/QuizAttempt.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveRecord`

### Key Components

#### Class Definition
```php
class QuizAttempt extends \yii\db\ActiveRecord
```

#### Properties
- `id`: Primary key
- `quiz_id`: Foreign key to Quiz model
- `user_id`: Foreign key to User model
- `started_at`: Timestamp when the attempt started
- `finished_at`: Timestamp when the attempt finished (nullable)
- `status`: Attempt status
- `score`: User's score (nullable)
- `is_passed`: Boolean indicating if the attempt passed (nullable)

#### Main Methods

1. **tableName()**
   - Purpose: Defines the database table name
   - Returns: String 'quiz_attempt'

2. **rules()**
   - Purpose: Defines validation rules
   - Validates:
     - Required fields: quiz_id, user_id, started_at
     - Integer fields: quiz_id, user_id, started_at, finished_at, status, score, is_passed
     - Existence validation for quiz_id and user_id foreign keys

3. **Relationships**
   - `getQuiz()`: Belongs to relationship with Quiz model
   - `getQuizGrades()`: Has many relationship with QuizGrade model
   - `getUser()`: Belongs to relationship with User model

### Usage Example
```php
$attempt = new QuizAttempt();
$attempt->quiz_id = 1;
$attempt->user_id = 1;
$attempt->started_at = time();
$attempt->status = 1;
$attempt->save();

// Later when quiz is completed
$attempt->finished_at = time();
$attempt->score = 85;
$attempt->is_passed = true;
$attempt->save();
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Implements Yii2's ActiveRecord pattern
- Manages quiz attempt timing and scoring
- Tracks user progress through quizzes
- Supports multiple attempts per quiz
- Implements comprehensive validation rules

### Best Practices / Mejores Prácticas
- Always validate attempt data before saving
- Set appropriate status values for different attempt states
- Maintain proper relationships with quiz and user models
- Consider performance implications for large numbers of attempts
- Use appropriate status values for attempt state management

### Related Components / Componentes Relacionados
- Quiz Model
- QuizGrade Model
- User Model
- QuizController
- QuizAttemptQuery