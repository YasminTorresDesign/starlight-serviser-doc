---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de QuizQuery.php

## Español

### Descripción General
El archivo `QuizQuery.php` es una clase ActiveQuery que extiende la clase ActiveQuery de Yii2, diseñada específicamente para manejar consultas de base de datos relacionadas con el modelo Quiz. Proporciona una forma segura de construir y ejecutar consultas para cuestionarios.

### Propósito
Esta clase sirve como constructor de consultas para la entidad Quiz, implementando el patrón Active Query del framework Yii2. Permite a los desarrolladores construir consultas complejas para recuperar cuestionarios con verificación de tipos y soporte IDE.

### Estructura de Directorios
- Ubicación: `common/models/QuizQuery.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveQuery`

### Componentes Principales

#### Definición de Clase
```php
class QuizQuery extends \yii\db\ActiveQuery
```

#### Métodos Principales

1. **all($db = null)**
   - Propósito: Ejecuta la consulta y retorna todos los resultados
   - Parámetros:
     - `$db`: Conexión de base de datos opcional
   - Retorna: Array de modelos Quiz

2. **one($db = null)**
   - Propósito: Ejecuta la consulta y retorna un único resultado
   - Parámetros:
     - `$db`: Conexión de base de datos opcional
   - Retorna: Modelo Quiz único o null

### Ejemplo de Uso
```php
// Obtener todos los cuestionarios
$quizzes = Quiz::find()->all();

// Obtener un cuestionario específico
$quiz = Quiz::find()->one();

// Obtener cuestionarios con condiciones
$courseQuizzes = Quiz::find()
    ->where(['course_id' => 1])
    ->andWhere(['status' => 1])
    ->all();

// Obtener cuestionarios activos para un curso
$activeQuizzes = Quiz::find()
    ->where(['course_id' => 1])
    ->andWhere(['status' => 1])
    ->orderBy(['created_at' => SORT_DESC])
    ->all();

// Obtener cuestionarios con límite de tiempo
$timedQuizzes = Quiz::find()
    ->where(['not', ['time_limit' => null]])
    ->all();
```

## QuizQuery.php - Technical Documentation

## English

### Overview
The `QuizQuery.php` file is an ActiveQuery class that extends Yii2's ActiveQuery class, specifically designed for handling database queries related to the Quiz model. It provides a type-safe way to build and execute queries for quizzes.

### Purpose
This class serves as a query builder for the Quiz entity, implementing the Active Query pattern of the Yii2 framework. It enables developers to build complex queries for retrieving quizzes with proper type checking and IDE support.

### Directory Structure
- Location: `common/models/QuizQuery.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveQuery`

### Key Components

#### Class Definition
```php
class QuizQuery extends \yii\db\ActiveQuery
```

#### Main Methods

1. **all($db = null)**
   - Purpose: Executes the query and returns all results
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Array of Quiz models

2. **one($db = null)**
   - Purpose: Executes the query and returns a single result
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Single Quiz model or null

### Usage Example
```php
// Get all quizzes
$quizzes = Quiz::find()->all();

// Get a specific quiz
$quiz = Quiz::find()->one();

// Get quizzes with conditions
$courseQuizzes = Quiz::find()
    ->where(['course_id' => 1])
    ->andWhere(['status' => 1])
    ->all();

// Get active quizzes for a course
$activeQuizzes = Quiz::find()
    ->where(['course_id' => 1])
    ->andWhere(['status' => 1])
    ->orderBy(['created_at' => SORT_DESC])
    ->all();

// Get quizzes with time limits
$timedQuizzes = Quiz::find()
    ->where(['not', ['time_limit' => null]])
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
- Quiz Model
- Course Model
- QuizAttempt Model
- QuizQuestion Model
- QuizController