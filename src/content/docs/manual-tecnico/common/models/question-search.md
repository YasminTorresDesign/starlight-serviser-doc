---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de QuestionSearch.php

## Español

### Descripción General
El archivo `QuestionSearch.php` es una clase de modelo de búsqueda que extiende el modelo Question, diseñada específicamente para manejar la funcionalidad de búsqueda en el framework Yii2. Proporciona métodos para filtrar y buscar registros de preguntas en la base de datos.

### Propósito
Esta clase sirve como modelo de búsqueda para la entidad Question, implementando funcionalidad de búsqueda a través de ActiveDataProvider y proporcionando capacidades de filtrado para varios atributos de preguntas.

### Estructura de Directorios
- Ubicación: `common/models/QuestionSearch.php`
- Espacio de nombres: `common\models`
- Clase Padre: `Question`

### Componentes Principales

#### Definición de Clase
```php
class QuestionSearch extends Question
```

#### Métodos Principales

1. **rules()**
   - Propósito: Define reglas de validación para parámetros de búsqueda
   - Retorna: Array de reglas de validación
   - Valida:
     - Campos enteros: id, section_id, points, created_by, updated_by
     - Campos de texto: question_text, question_type, hint, explanation, media_type, media_url
     - Campos de fecha: created_at, updated_at

2. **scenarios()**
   - Propósito: Define diferentes escenarios para la validación del modelo
   - Retorna: Escenarios del modelo
   - Implementación: Utiliza escenarios del modelo padre

3. **search($params)**
   - Propósito: Crea y configura el proveedor de datos para resultados de búsqueda
   - Parámetros:
     - `$params`: Array de parámetros de búsqueda
   - Retorna: Instancia de ActiveDataProvider
   - Características:
     - Configura condiciones de consulta
     - Aplica filtros basados en parámetros de búsqueda
     - Maneja validación
     - Retorna resultados filtrados

### Ejemplo de Uso
```php
$searchModel = new QuestionSearch();
$dataProvider = $searchModel->search($params);

// En un archivo de vista
GridView::widget([
    'dataProvider' => $dataProvider,
    'filterModel' => $searchModel,
    'columns' => [
        'id',
        'question_text',
        'question_type',
        'points',
        // ... otras columnas
    ],
]);
```

## QuestionSearch.php - Technical Documentation

## English

### Overview
The `QuestionSearch.php` file is a search model class that extends the Question model, specifically designed for handling search functionality in the Yii2 framework. It provides methods for filtering and searching question records in the database.

### Purpose
This class serves as a search model for the Question entity, implementing search functionality through ActiveDataProvider and providing filtering capabilities for various question attributes.

### Directory Structure
- Location: `common/models/QuestionSearch.php`
- Namespace: `common\models`
- Parent Class: `Question`

### Key Components

#### Class Definition
```php
class QuestionSearch extends Question
```

#### Main Methods

1. **rules()**
   - Purpose: Defines validation rules for search parameters
   - Returns: Array of validation rules
   - Validates:
     - Integer fields: id, section_id, points, created_by, updated_by
     - String fields: question_text, question_type, hint, explanation, media_type, media_url
     - Date fields: created_at, updated_at

2. **scenarios()**
   - Purpose: Defines different scenarios for model validation
   - Returns: Model scenarios
   - Implementation: Uses parent Model scenarios

3. **search($params)**
   - Purpose: Creates and configures the data provider for search results
   - Parameters:
     - `$params`: Array of search parameters
   - Returns: ActiveDataProvider instance
   - Features:
     - Configures query conditions
     - Applies filters based on search parameters
     - Handles validation
     - Returns filtered results

### Usage Example
```php
$searchModel = new QuestionSearch();
$dataProvider = $searchModel->search($params);

// In a view file
GridView::widget([
    'dataProvider' => $dataProvider,
    'filterModel' => $searchModel,
    'columns' => [
        'id',
        'question_text',
        'question_type',
        'points',
        // ... other columns
    ],
]);
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- This class is part of Yii2's search implementation
- It uses ActiveDataProvider for efficient data retrieval
- Implements filtering for all question attributes
- Supports both exact and partial matching searches
- Integrates with GridView widget for display

### Best Practices / Mejores Prácticas
- Use this class for all question-related searches
- Implement additional search conditions as needed
- Maintain proper validation rules
- Consider performance implications of search filters
- Use appropriate filter types for different fields

### Related Components / Componentes Relacionados
- Question Model
- ActiveDataProvider
- GridView Widget
- Search Forms
- Question Controller