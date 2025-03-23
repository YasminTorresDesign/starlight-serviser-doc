---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de QuizGradeQuery.php

## Español

### Descripción General
El archivo `QuizGradeQuery.php` es una clase ActiveQuery que extiende la clase ActiveQuery de Yii2, diseñada específicamente para manejar consultas de base de datos relacionadas con el modelo QuizGrade. Proporciona una forma segura de construir y ejecutar consultas para calificaciones de cuestionarios.

### Propósito
Esta clase sirve como constructor de consultas para la entidad QuizGrade, implementando el patrón Active Query del framework Yii2. Permite a los desarrolladores construir consultas complejas para recuperar calificaciones de cuestionarios con verificación de tipos y soporte IDE.

### Estructura de Directorios
- Ubicación: `common/models/QuizGradeQuery.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveQuery`

### Componentes Principales

#### Definición de Clase
```php
class QuizGradeQuery extends \yii\db\ActiveQuery
```

#### Métodos Principales

1. **all($db = null)**
   - Propósito: Ejecuta la consulta y retorna todos los resultados
   - Parámetros:
     - `$db`: Conexión de base de datos opcional
   - Retorna: Array de modelos QuizGrade

2. **one($db = null)**
   - Propósito: Ejecuta la consulta y retorna un único resultado
   - Parámetros:
     - `$db`: Conexión de base de datos opcional
   - Retorna: Modelo QuizGrade único o null

### Ejemplo de Uso
```php
// Obtener todas las calificaciones
$grades = QuizGrade::find()->all();

// Obtener una calificación específica
$grade = QuizGrade::find()->one();

// Obtener calificaciones con condiciones
$userGrades = QuizGrade::find()
    ->where(['user_id' => 1])
    ->andWhere(['is_correct' => true])
    ->all();

// Obtener calificaciones para un intento específico
$attemptGrades = QuizGrade::find()
    ->where(['quiz_attempt_id' => 1])
    ->orderBy(['quiz_question_id' => SORT_ASC])
    ->all();
```

## QuizGradeQuery.php - Technical Documentation

## English

### Overview
The `QuizGradeQuery.php` file is an ActiveQuery class that extends Yii2's ActiveQuery class, specifically designed for handling database queries related to the QuizGrade model. It provides a type-safe way to build and execute queries for quiz grades.

### Purpose
This class serves as a query builder for the QuizGrade entity, implementing the Active Query pattern of the Yii2 framework. It enables developers to build complex queries for retrieving quiz grades with proper type checking and IDE support.

### Directory Structure
- Location: `common/models/QuizGradeQuery.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveQuery`

### Key Components

#### Class Definition
```php
class QuizGradeQuery extends \yii\db\ActiveQuery
```

#### Main Methods

1. **all($db = null)**
   - Purpose: Executes the query and returns all results
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Array of QuizGrade models

2. **one($db = null)**
   - Purpose: Executes the query and returns a single result
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Single QuizGrade model or null

### Usage Example
```php
// Get all quiz grades
$grades = QuizGrade::find()->all();

// Get a specific quiz grade
$grade = QuizGrade::find()->one();

// Get grades with conditions
$userGrades = QuizGrade::find()
    ->where(['user_id' => 1])
    ->andWhere(['is_correct' => true])
    ->all();

// Get grades for a specific quiz attempt
$attemptGrades = QuizGrade::find()
    ->where(['quiz_attempt_id' => 1])
    ->orderBy(['quiz_question_id' => SORT_ASC])
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
- QuizGrade Model
- QuizAttempt Model
- QuizQuestion Model
- User Model
- Quiz Model