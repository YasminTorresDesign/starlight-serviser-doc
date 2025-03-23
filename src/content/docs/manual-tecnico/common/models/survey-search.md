---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

# Documentación Técnica de SurveySearch.php

## Español

### Descripción General
El archivo `SurveySearch.php` es una clase modelo de búsqueda que extiende el modelo Survey, diseñada específicamente para manejar la funcionalidad de búsqueda en el framework Yii2. Proporciona capacidades de filtrado para varios atributos de encuesta y se integra con ActiveDataProvider para una recuperación eficiente de datos.

### Propósito
Esta clase sirve como modelo de búsqueda para la entidad Survey, implementando la funcionalidad de búsqueda a través de ActiveDataProvider y proporcionando capacidades de filtrado para varios atributos de encuesta. Permite a los desarrolladores construir consultas de búsqueda complejas con validación y filtrado apropiados.

### Estructura de Directorios
- Ubicación: `common/models/SurveySearch.php`
- Espacio de nombres: `common\models`
- Clase Padre: `Survey`

### Componentes Principales

#### Definición de Clase
```php
class SurveySearch extends Survey
```

#### Métodos Principales

1. **rules()**
   - Propósito: Define reglas de validación para parámetros de búsqueda
   - Retorna: Array de reglas de validación
   - Valida:
     - Campos enteros: id, total_points, created_by
     - Campos de texto: title, description, status, url, created_at, updated_at

2. **scenarios()**
   - Propósito: Define diferentes escenarios para validación del modelo
   - Retorna: Array de escenarios
   - Utiliza escenarios del Model padre

3. **search($params)**
   - Propósito: Crea y configura el proveedor de datos para resultados de búsqueda
   - Parámetros:
     - `$params`: Array de parámetros de búsqueda
   - Retorna: Instancia de ActiveDataProvider
   - Características:
     - Configura condiciones de consulta
     - Aplica filtros basados en parámetros de búsqueda
     - Maneja paginación y ordenamiento

### Ejemplo de Uso
```php
// Crear instancia del modelo de búsqueda
$searchModel = new SurveySearch();

// Configurar parámetros de búsqueda
$params = [
    'SurveySearch' => [
        'title' => 'Encuesta de Clientes',
        'status' => 'published',
        'total_points' => 100
    ]
];

// Obtener resultados de búsqueda
$dataProvider = $searchModel->search($params);

// Usar con GridView
echo GridView::widget([
    'dataProvider' => $dataProvider,
    'filterModel' => $searchModel,
    'columns' => [
        'id',
        'title',
        'description',
        'total_points',
        'status'
    ]
]);
```

# SurveySearch.php - Technical Documentation

## English

### Overview
The `SurveySearch.php` file is a search model class that extends the Survey model, specifically designed for handling search functionality in the Yii2 framework. It provides filtering capabilities for various survey attributes and integrates with ActiveDataProvider for efficient data retrieval.

### Purpose
This class serves as a search model for the Survey entity, implementing search functionality through ActiveDataProvider and providing filtering capabilities for various survey attributes. It enables developers to build complex search queries with proper validation and filtering.

### Directory Structure
- Location: `common/models/SurveySearch.php`
- Namespace: `common\models`
- Parent Class: `Survey`

### Key Components

#### Class Definition
```php
class SurveySearch extends Survey
```

#### Main Methods

1. **rules()**
   - Purpose: Defines validation rules for search parameters
   - Returns: Array of validation rules
   - Validates:
     - Integer fields: id, total_points, created_by
     - String fields: title, description, status, url, created_at, updated_at

2. **scenarios()**
   - Purpose: Defines different scenarios for model validation
   - Returns: Array of scenarios
   - Uses parent Model scenarios

3. **search($params)**
   - Purpose: Creates and configures the data provider for search results
   - Parameters:
     - `$params`: Array of search parameters
   - Returns: ActiveDataProvider instance
   - Features:
     - Configures query conditions
     - Applies filters based on search parameters
     - Handles pagination and sorting

### Usage Example
```php
// Create search model instance
$searchModel = new SurveySearch();

// Configure search parameters
$params = [
    'SurveySearch' => [
        'title' => 'Customer Survey',
        'status' => 'published',
        'total_points' => 100
    ]
];

// Get search results
$dataProvider = $searchModel->search($params);

// Use with GridView
echo GridView::widget([
    'dataProvider' => $dataProvider,
    'filterModel' => $searchModel,
    'columns' => [
        'id',
        'title',
        'description',
        'total_points',
        'status'
    ]
]);
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Implements Yii2's search model pattern
- Uses ActiveDataProvider for efficient data retrieval
- Supports grid filtering and sorting
- Handles pagination automatically
- Integrates with GridView widget

### Best Practices / Mejores Prácticas
- Validate search parameters before processing
- Use appropriate filter conditions
- Consider performance when building complex queries
- Implement proper error handling
- Follow Yii2's search model patterns

### Related Components / Componentes Relacionados
- Survey Model
- Section Model
- Response Model
- SurveyResult Model
- SurveyController
- SurveyQuery