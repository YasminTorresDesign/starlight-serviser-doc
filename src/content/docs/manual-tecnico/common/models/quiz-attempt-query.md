---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de QuizAttemptQuery.php

## Español

### Descripción General
El archivo `QuizAttemptQuery.php` es una clase ActiveQuery que extiende la clase ActiveQuery de Yii2, diseñada específicamente para manejar consultas de base de datos relacionadas con el modelo QuizAttempt. Proporciona una forma segura de construir y ejecutar consultas para intentos de cuestionarios.

### Propósito
Esta clase sirve como constructor de consultas para la entidad QuizAttempt, implementando el patrón Active Query del framework Yii2. Permite a los desarrolladores construir consultas complejas para recuperar intentos de cuestionarios con verificación de tipos y soporte IDE.

### Estructura de Directorios
- Ubicación: `common/models/QuizAttemptQuery.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveQuery`

### Componentes Principales

#### Definición de Clase
```php
class QuizAttemptQuery extends \yii\db\ActiveQuery
```

#### Métodos Principales

1. **all($db = null)**
   - Propósito: Ejecuta la consulta y retorna todos los resultados
   - Parámetros:
     - `$db`: Conexión de base de datos opcional
   - Retorna: Array de modelos QuizAttempt

2. **one($db = null)**
   - Propósito: Ejecuta la consulta y retorna un único resultado
   - Parámetros:
     - `$db`: Conexión de base de datos opcional
   - Retorna: Modelo QuizAttempt único o null

### Ejemplo de Uso
```php
// Obtener todos los intentos de cuestionarios
$attempts = QuizAttempt::find()->all();

// Obtener un intento específico
$attempt = QuizAttempt::find()->one();

// Obtener intentos con condiciones
$userAttempts = QuizAttempt::find()
    ->where(['user_id' => 1])
    ->andWhere(['status' => 1])
    ->all();
```

## QuizAttemptQuery.php - Technical Documentation

## English

### Overview
The `QuizAttemptQuery.php` file is an ActiveQuery class that extends Yii2's ActiveQuery class, specifically designed for handling database queries related to the QuizAttempt model. It provides a type-safe way to build and execute queries for quiz attempts.

### Purpose
This class serves as a query builder for the QuizAttempt entity, implementing the Active Query pattern of the Yii2 framework. It enables developers to build complex queries for retrieving quiz attempts with proper type checking and IDE support.

### Directory Structure
- Location: `common/models/QuizAttemptQuery.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveQuery`

### Key Components

#### Class Definition
```php
class QuizAttemptQuery extends \yii\db\ActiveQuery
```

#### Main Methods

1. **all($db = null)**
   - Purpose: Executes the query and returns all results
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Array of QuizAttempt models

2. **one($db = null)**
   - Purpose: Executes the query and returns a single result
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Single QuizAttempt model or null

### Usage Example
```php
// Get all quiz attempts
$attempts = QuizAttempt::find()->all();

// Get a specific quiz attempt
$attempt = QuizAttempt::find()->one();

// Get attempts with conditions
$userAttempts = QuizAttempt::find()
    ->where(['user_id' => 1])
    ->andWhere(['status' => 1])
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
- QuizAttempt Model
- Quiz Model
- User Model
- QuizGrade Model
- QuizController