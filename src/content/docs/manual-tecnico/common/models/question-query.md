---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de QuestionQuery.php

## Español

### Descripción General
El archivo `QuestionQuery.php` es una clase ActiveQuery que extiende la clase ActiveQuery de Yii2, diseñada específicamente para manejar consultas de base de datos relacionadas con el modelo Question. Proporciona métodos para construir y ejecutar consultas de base de datos de manera segura y eficiente.

### Propósito
Esta clase sirve como constructor de consultas para la entidad Question, implementando el patrón Active Query del framework Yii2. Proporciona métodos para construir consultas complejas y recuperar registros Question de la base de datos.

### Estructura de Directorios
- Ubicación: `common/models/QuestionQuery.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveQuery`

### Componentes Principales

#### Definición de Clase
```php
class QuestionQuery extends \yii\db\ActiveQuery
```

#### Métodos Principales

1. **all($db = null)**
   - Propósito: Recupera todos los registros que coinciden con la consulta
   - Retorna: Array de objetos Question
   - Parámetros:
     - `$db`: Conexión a base de datos opcional

2. **one($db = null)**
   - Propósito: Recupera un único registro que coincide con la consulta
   - Retorna: Objeto Question único o null
   - Parámetros:
     - `$db`: Conexión a base de datos opcional

### Ejemplo de Uso
```php
// Obtener todas las preguntas
$questions = Question::find()->all();

// Obtener una única pregunta
$question = Question::find()->one();

// Obtener preguntas con condiciones
$questions = Question::find()
    ->where(['section_id' => 1])
    ->andWhere(['question_type' => 'multiple_choice'])
    ->all();
```

## QuestionQuery.php - Technical Documentation

## English

### Overview
The `QuestionQuery.php` file is an ActiveQuery class that extends Yii2's ActiveQuery class, specifically designed for handling database queries related to the Question model. It provides methods for constructing and executing database queries in a type-safe and efficient manner.

### Purpose
This class serves as a query builder for the Question entity, implementing the Active Query pattern of Yii2 framework. It provides methods to construct complex queries and retrieve Question records from the database.

### Directory Structure
- Location: `common/models/QuestionQuery.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveQuery`

### Key Components

#### Class Definition
```php
class QuestionQuery extends \yii\db\ActiveQuery
```

#### Main Methods

1. **all($db = null)**
   - Purpose: Retrieves all records matching the query
   - Returns: Array of Question objects
   - Parameters:
     - `$db`: Optional database connection

2. **one($db = null)**
   - Purpose: Retrieves a single record matching the query
   - Returns: Single Question object or null
   - Parameters:
     - `$db`: Optional database connection

### Usage Example
```php
// Get all questions
$questions = Question::find()->all();

// Get a single question
$question = Question::find()->one();

// Get questions with conditions
$questions = Question::find()
    ->where(['section_id' => 1])
    ->andWhere(['question_type' => 'multiple_choice'])
    ->all();
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- This class is part of Yii2's Active Record implementation
- It provides type-safe query building capabilities
- It's automatically generated and can be customized for specific query needs
- Supports all standard Yii2 query methods (where, andWhere, orWhere, etc.)

### Best Practices / Mejores Prácticas
- Use this class for all database queries related to the Question model
- Extend the class with custom query methods as needed
- Maintain type safety by using the provided methods
- Consider performance implications when building complex queries

### Related Components / Componentes Relacionados
- Question Model
- ActiveQuery Base Class
- Database Schema
- Active Record Pattern Implementation