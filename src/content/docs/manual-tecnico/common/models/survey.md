---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---
## Documentación Técnica de Survey.php

## Español

### Descripción General
El archivo `Survey.php` es una clase modelo que extiende ActiveRecord de Yii2, diseñada específicamente para gestionar encuestas en la aplicación. Representa una entidad de encuesta que puede contener múltiples secciones y rastrear respuestas de usuarios.

### Propósito
Esta clase sirve como modelo de datos para encuestas, implementando el patrón Active Record del framework Yii2. Permite a los desarrolladores gestionar encuestas, incluyendo sus propiedades, relaciones, reglas de validación y gestión del ciclo de vida de la encuesta.

### Estructura de Directorios
- Ubicación: `common/models/Survey.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveRecord`

### Componentes Principales

#### Definición de Clase
```php
class Survey extends \yii\db\ActiveRecord
```

#### Propiedades
- `id`: Clave primaria
- `title`: Título de la encuesta
- `description`: Descripción opcional de la encuesta
- `total_points`: Puntos totales disponibles en la encuesta
- `status`: Estado de la encuesta (borrador, publicada, archivada)
- `url`: URL opcional para la encuesta
- `created_by`: ID del usuario que creó la encuesta
- `updated_by`: ID del usuario que actualizó la encuesta
- `created_at`: Marca de tiempo de creación
- `updated_at`: Marca de tiempo de última actualización

#### Métodos Principales

1. **tableName()**
   - Propósito: Retorna el nombre de la tabla de la base de datos
   - Retorna: String 'survey'

2. **rules()**
   - Propósito: Define reglas de validación
   - Retorna: Array de reglas de validación
   - Valida:
     - Campos requeridos: title
     - Campos enteros: total_points, created_by, updated_by
     - Campos de texto: description, status, title, url
     - Clave foránea: created_by (existe en tabla User)

3. **attributeLabels()**
   - Propósito: Retorna etiquetas de atributos para visualización
   - Retorna: Array de etiquetas de atributos

4. **behaviors()**
   - Propósito: Define comportamientos del modelo
   - Retorna: Array que contiene TimestampBehavior

5. **Relaciones**
   - `getCreatedBy()`: Retorna el Usuario que creó la encuesta
   - `getResponses()`: Retorna todas las respuestas de esta encuesta
   - `getSections()`: Retorna todas las secciones de esta encuesta
   - `getSurveyResults()`: Retorna todos los resultados de la encuesta

### Ejemplo de Uso
```php
// Crear una nueva encuesta
$survey = new Survey();
$survey->title = 'Encuesta de Satisfacción del Cliente';
$survey->description = 'Ayúdanos a mejorar nuestros servicios';
$survey->total_points = 100;
$survey->status = 'draft';
$survey->created_by = Yii::$app->user->id;
$survey->save();

// Obtener secciones de la encuesta
$sections = $survey->sections;

// Obtener respuestas de la encuesta
$responses = $survey->responses;

// Obtener resultados de la encuesta
$results = $survey->surveyResults;
```

## Survey.php - Technical Documentation

## English

### Overview
The `Survey.php` file is a model class that extends Yii2's ActiveRecord, specifically designed for managing surveys in the application. It represents a survey entity that can contain multiple sections and track responses from users.

### Purpose
This class serves as the data model for surveys, implementing the Active Record pattern of the Yii2 framework. It enables developers to manage surveys, including their properties, relationships, validation rules, and survey lifecycle management.

### Directory Structure
- Location: `common/models/Survey.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveRecord`

### Key Components

#### Class Definition
```php
class Survey extends \yii\db\ActiveRecord
```

#### Properties
- `id`: Primary key
- `title`: Survey title
- `description`: Optional survey description
- `total_points`: Total points available in the survey
- `status`: Survey status (draft, published, archived)
- `url`: Optional URL for the survey
- `created_by`: User ID who created the survey
- `updated_by`: User ID who last updated the survey
- `created_at`: Timestamp of creation
- `updated_at`: Timestamp of last update

#### Main Methods

1. **tableName()**
   - Purpose: Returns the database table name
   - Returns: String 'survey'

2. **rules()**
   - Purpose: Defines validation rules
   - Returns: Array of validation rules
   - Validates:
     - Required fields: title
     - Integer fields: total_points, created_by, updated_by
     - String fields: description, status, title, url
     - Foreign key: created_by (exists in User table)

3. **attributeLabels()**
   - Purpose: Returns attribute labels for display
   - Returns: Array of attribute labels

4. **behaviors()**
   - Purpose: Defines model behaviors
   - Returns: Array containing TimestampBehavior

5. **Relationships**
   - `getCreatedBy()`: Returns the User who created the survey
   - `getResponses()`: Returns all responses for this survey
   - `getSections()`: Returns all sections in this survey
   - `getSurveyResults()`: Returns all survey results

### Usage Example
```php
// Create a new survey
$survey = new Survey();
$survey->title = 'Customer Satisfaction Survey';
$survey->description = 'Help us improve our services';
$survey->total_points = 100;
$survey->status = 'draft';
$survey->created_by = Yii::$app->user->id;
$survey->save();

// Get survey sections
$sections = $survey->sections;

// Get survey responses
$responses = $survey->responses;

// Get survey results
$results = $survey->surveyResults;
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Implements Yii2's Active Record pattern
- Uses TimestampBehavior for automatic timestamp management
- Supports multilingual labels through Yii::t()
- Manages survey lifecycle (draft, published, archived)
- Handles relationships with sections, responses, and results

### Best Practices / Mejores Prácticas
- Validate survey data before saving
- Use appropriate status transitions
- Maintain proper relationships with sections
- Consider performance when loading related data
- Follow Yii2's model patterns

### Related Components / Componentes Relacionados
- Section Model
- Response Model
- SurveyResult Model
- User Model
- SurveyController
- SurveySearch Model