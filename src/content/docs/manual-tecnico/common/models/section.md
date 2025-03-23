---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de Section.php

## Español

### Descripción General
El archivo `Section.php` es una clase modelo que extiende ActiveRecord de Yii2, diseñada específicamente para gestionar secciones de encuestas. Representa una sección dentro de una encuesta que puede contener múltiples preguntas.

### Propósito
Esta clase sirve como modelo de datos para secciones de encuestas, implementando el patrón Active Record del framework Yii2. Permite a los desarrolladores gestionar secciones dentro de encuestas, incluyendo sus propiedades, relaciones y reglas de validación.

### Estructura de Directorios
- Ubicación: `common/models/Section.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveRecord`

### Componentes Principales

#### Definición de Clase
```php
class Section extends \yii\db\ActiveRecord
```

#### Propiedades
- `id`: Clave primaria
- `survey_id`: Clave foránea que enlaza con el modelo Survey
- `title`: Título de la sección
- `description`: Descripción opcional de la sección
- `order`: Orden de visualización de la sección
- `created_at`: Marca de tiempo de creación
- `updated_at`: Marca de tiempo de última actualización
- `created_by`: ID del usuario que creó la sección
- `updated_by`: ID del usuario que actualizó la sección

#### Métodos Principales

1. **tableName()**
   - Propósito: Retorna el nombre de la tabla de base de datos
   - Retorna: String 'section'

2. **rules()**
   - Propósito: Define reglas de validación
   - Retorna: Array de reglas de validación
   - Valida:
     - Campos requeridos: survey_id, title
     - Campos enteros: survey_id, order, created_by, updated_by
     - Campos de texto: description, title
     - Campos de fecha: created_at, updated_at
     - Clave foránea: survey_id (existe en tabla Survey)

3. **attributeLabels()**
   - Propósito: Retorna etiquetas de atributos para visualización
   - Retorna: Array de etiquetas de atributos

4. **behaviors()**
   - Propósito: Define comportamientos del modelo
   - Retorna: Array conteniendo TimestampBehavior

5. **getQuestions()**
   - Propósito: Retorna preguntas relacionadas
   - Retorna: ActiveQuery para el modelo Questions
   - Relación: hasMany

6. **getSurvey()**
   - Propósito: Retorna encuesta relacionada
   - Retorna: ActiveQuery para el modelo Survey
   - Relación: hasOne

### Ejemplo de Uso
```php
// Crear una nueva sección
$section = new Section();
$section->survey_id = 1;
$section->title = 'Introducción';
$section->description = 'Bienvenido a la encuesta';
$section->order = 1;
$section->save();

// Obtener sección con preguntas relacionadas
$section = Section::findOne(1);
$questions = $section->questions;

// Obtener encuesta de la sección
$survey = $section->survey;

// Actualizar sección
$section->title = 'Nuevo Título';
$section->save();
```

## Section.php - Technical Documentation

## English

### Overview
The `Section.php` file is a model class that extends Yii2's ActiveRecord, specifically designed for managing survey sections. It represents a section within a survey that can contain multiple questions.

### Purpose
This class serves as the data model for survey sections, implementing the Active Record pattern of the Yii2 framework. It enables developers to manage sections within surveys, including their properties, relationships, and validation rules.

### Directory Structure
- Location: `common/models/Section.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveRecord`

### Key Components

#### Class Definition
```php
class Section extends \yii\db\ActiveRecord
```

#### Properties
- `id`: Primary key
- `survey_id`: Foreign key linking to Survey model
- `title`: Section title
- `description`: Optional section description
- `order`: Display order of the section
- `created_at`: Timestamp of creation
- `updated_at`: Timestamp of last update
- `created_by`: User ID who created the section
- `updated_by`: User ID who last updated the section

#### Main Methods

1. **tableName()**
   - Purpose: Returns the database table name
   - Returns: String 'section'

2. **rules()**
   - Purpose: Defines validation rules
   - Returns: Array of validation rules
   - Validates:
     - Required fields: survey_id, title
     - Integer fields: survey_id, order, created_by, updated_by
     - String fields: description, title
     - Date fields: created_at, updated_at
     - Foreign key: survey_id (exists in Survey table)

3. **attributeLabels()**
   - Purpose: Returns attribute labels for display
   - Returns: Array of attribute labels

4. **behaviors()**
   - Purpose: Defines model behaviors
   - Returns: Array containing TimestampBehavior

5. **getQuestions()**
   - Purpose: Returns related questions
   - Returns: ActiveQuery for Questions model
   - Relationship: hasMany

6. **getSurvey()**
   - Purpose: Returns related survey
   - Returns: ActiveQuery for Survey model
   - Relationship: hasOne

### Usage Example
```php
// Create a new section
$section = new Section();
$section->survey_id = 1;
$section->title = 'Introduction';
$section->description = 'Welcome to the survey';
$section->order = 1;
$section->save();

// Get section with related questions
$section = Section::findOne(1);
$questions = $section->questions;

// Get section's survey
$survey = $section->survey;

// Update section
$section->title = 'New Title';
$section->save();
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Implements Yii2's Active Record pattern
- Uses TimestampBehavior for automatic timestamp management
- Supports multilingual labels through Yii::t()
- Implements proper validation rules
- Maintains referential integrity with Survey model

### Best Practices / Mejores Prácticas
- Always validate section data before saving
- Use transactions when creating sections with questions
- Maintain proper order of sections
- Keep section titles concise and descriptive
- Use appropriate validation rules

### Related Components / Componentes Relacionados
- Survey Model
- Question Model
- SectionQuery
- SectionSearch
- SectionController