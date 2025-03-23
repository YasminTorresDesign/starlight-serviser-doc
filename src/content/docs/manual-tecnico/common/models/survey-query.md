---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de SurveyQuery.php

## Español

### Descripción General
El archivo `SurveyQuery.php` es una clase ActiveQuery que extiende ActiveQuery de Yii2, diseñada específicamente para manejar consultas de base de datos relacionadas con el modelo Survey. Proporciona construcción de consultas con seguridad de tipos y recuperación eficiente de datos para operaciones relacionadas con encuestas.

### Propósito
Esta clase sirve como constructor de consultas para el modelo Survey, implementando el patrón Active Query de Yii2. Permite a los desarrolladores construir consultas complejas con seguridad de tipos y soporte IDE, mientras mantiene operaciones eficientes de base de datos.

### Estructura de Directorios
- Ubicación: `common/models/SurveyQuery.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveQuery`

### Componentes Principales

#### Definición de Clase
```php
class SurveyQuery extends \yii\db\ActiveQuery
```

#### Métodos Principales

1. **all($db = null)**
   - Propósito: Ejecuta la consulta y retorna todos los resultados
   - Parámetros:
     - `$db`: Conexión opcional a la base de datos
   - Retorna: Array de modelos Survey
   - Uso: `Survey::find()->all()`

2. **one($db = null)**
   - Propósito: Ejecuta la consulta y retorna un único resultado
   - Parámetros:
     - `$db`: Conexión opcional a la base de datos
   - Retorna: Modelo Survey único o null
   - Uso: `Survey::find()->one()`

### Ejemplo de Uso
```php
// Obtener todas las encuestas
$surveys = Survey::find()->all();

// Obtener una encuesta específica
$survey = Survey::find()->one();

// Obtener encuestas con condiciones
$draftSurveys = Survey::find()
    ->where(['status' => 'draft'])
    ->all();

// Obtener encuestas con relaciones
$surveysWithSections = Survey::find()
    ->with('sections')
    ->all();
```

## SurveyQuery.php - Technical Documentation

## English

### Overview
The `SurveyQuery.php` file is an ActiveQuery class that extends Yii2's ActiveQuery, specifically designed for handling database queries related to the Survey model. It provides type-safe query building and efficient data retrieval for survey-related operations.

### Purpose
This class serves as a query builder for the Survey model, implementing Yii2's Active Query pattern. It enables developers to build complex queries with proper type safety and IDE support, while maintaining efficient database operations.

### Directory Structure
- Location: `common/models/SurveyQuery.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveQuery`

### Key Components

#### Class Definition
```php
class SurveyQuery extends \yii\db\ActiveQuery
```

#### Main Methods

1. **all($db = null)**
   - Purpose: Executes the query and returns all results
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Array of Survey models
   - Usage: `Survey::find()->all()`

2. **one($db = null)**
   - Purpose: Executes the query and returns a single result
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Single Survey model or null
   - Usage: `Survey::find()->one()`

### Usage Example
```php
// Get all surveys
$surveys = Survey::find()->all();

// Get a specific survey
$survey = Survey::find()->one();

// Get surveys with conditions
$draftSurveys = Survey::find()
    ->where(['status' => 'draft'])
    ->all();

// Get surveys with relations
$surveysWithSections = Survey::find()
    ->with('sections')
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
- Use type-safe query building
- Leverage IDE support for better development experience
- Consider query performance when building complex queries
- Use appropriate query methods based on needs
- Follow Yii2's query building patterns

### Related Components / Componentes Relacionados
- Survey Model
- Section Model
- Response Model
- SurveyResult Model
- SurveyController
- SurveySearch Model