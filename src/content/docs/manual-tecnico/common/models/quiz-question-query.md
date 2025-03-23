---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de QuizQuestionQuery.php
## Español

### Descripción General
El archivo `QuizQuestionQuery.php` es una clase ActiveQuery que extiende la clase ActiveQuery de Yii2, diseñada específicamente para manejar consultas de base de datos relacionadas con el modelo QuizQuestion. Proporciona una forma segura de construir y ejecutar consultas para preguntas de cuestionarios.

### Propósito
Esta clase sirve como constructor de consultas para la entidad QuizQuestion, implementando el patrón Active Query del framework Yii2. Permite a los desarrolladores construir consultas complejas para recuperar preguntas de cuestionarios con verificación de tipos y soporte IDE.

### Estructura de Directorios
- Ubicación: `common/models/QuizQuestionQuery.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveQuery`

### Componentes Principales

#### Definición de Clase
```php
class QuizQuestionQuery extends \yii\db\ActiveQuery
```

#### Métodos Principales

1. **all($db = null)**
   - Propósito: Ejecuta la consulta y retorna todos los resultados
   - Parámetros:
     - `$db`: Conexión de base de datos opcional
   - Retorna: Array de modelos QuizQuestion

2. **one($db = null)**
   - Propósito: Ejecuta la consulta y retorna un único resultado
   - Parámetros:
     - `$db`: Conexión de base de datos opcional
   - Retorna: Modelo QuizQuestion único o null

### Ejemplo de Uso
```php
// Obtener todas las preguntas
$questions = QuizQuestion::find()->all();

// Obtener una pregunta específica
$question = QuizQuestion::find()->one();

// Obtener preguntas para un cuestionario específico
$quizQuestions = QuizQuestion::find()
    ->where(['quiz_id' => 1])
    ->orderBy(['sort_order' => SORT_ASC])
    ->all();

// Obtener preguntas con puntos específicos
$highValueQuestions = QuizQuestion::find()
    ->where(['>=', 'points', 10])
    ->all();

// Obtener preguntas con condiciones
$activeQuestions = QuizQuestion::find()
    ->where(['quiz_id' => 1])
    ->andWhere(['>', 'points', 0])
    ->orderBy(['sort_order' => SORT_ASC])
    ->all();
```

## QuizQuestionQuery.php - Technical Documentation

## English

### Overview
The `QuizQuestionQuery.php` file is an ActiveQuery class that extends Yii2's ActiveQuery class, specifically designed for handling database queries related to the QuizQuestion model. It provides a type-safe way to build and execute queries for quiz questions.

### Purpose
This class serves as a query builder for the QuizQuestion entity, implementing the Active Query pattern of the Yii2 framework. It enables developers to build complex queries for retrieving quiz questions with proper type checking and IDE support.

### Directory Structure
- Location: `common/models/QuizQuestionQuery.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveQuery`

### Key Components

#### Class Definition
```php
class QuizQuestionQuery extends \yii\db\ActiveQuery
```

#### Main Methods

1. **all($db = null)**
   - Purpose: Executes the query and returns all results
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Array of QuizQuestion models

2. **one($db = null)**
   - Purpose: Executes the query and returns a single result
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Single QuizQuestion model or null

### Usage Example
```php
// Get all quiz questions
$questions = QuizQuestion::find()->all();

// Get a specific quiz question
$question = QuizQuestion::find()->one();

// Get questions for a specific quiz
$quizQuestions = QuizQuestion::find()
    ->where(['quiz_id' => 1])
    ->orderBy(['sort_order' => SORT_ASC])
    ->all();

// Get questions with specific points
$highValueQuestions = QuizQuestion::find()
    ->where(['>=', 'points', 10])
    ->all();

// Get questions with conditions
$activeQuestions = QuizQuestion::find()
    ->where(['quiz_id' => 1])
    ->andWhere(['>', 'points', 0])
    ->orderBy(['sort_order' => SORT_ASC])
    ->all();
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Implements Yii2's Active Query pattern
- Provides type-safe query building
- Supports IDE autocompletion
- Enables method chaining for complex queries
- Integrates with Yii2's query builder

### Best Practices / Mejores Prácticas
- Use method chaining for complex queries
- Leverage type safety for better code quality
- Consider query performance when building complex queries
- Use appropriate query methods based on expected results
- Follow Yii2's query builder patterns

### Related Components / Componentes Relacionados
- QuizQuestion Model
- Quiz Model
- QuizGrade Model
- QuizController