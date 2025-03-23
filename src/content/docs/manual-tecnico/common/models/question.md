---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

# Documentación Técnica de Question.php

## Español

### Descripción General
El archivo `Question.php` es una clase de modelo que representa preguntas en el sistema, extendiendo la clase ActiveRecord de Yii2. Maneja la gestión de preguntas dentro de secciones, incluyendo sus propiedades, relaciones y reglas de validación.

### Propósito
Esta clase sirve como modelo central para gestionar preguntas en el sistema, proporcionando funcionalidad para crear, actualizar y gestionar preguntas con varios tipos, archivos adjuntos multimedia y capacidades de puntuación.

### Estructura de Directorios
- Ubicación: `common/models/Question.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveRecord`

### Componentes Principales

#### Definición de Clase
```php
class Question extends \yii\db\ActiveRecord
```

#### Propiedades
- `id`: Clave primaria
- `section_id`: Clave foránea al modelo Section
- `question_text`: El contenido real de la pregunta
- `question_type`: Tipo de pregunta (texto, opción múltiple, casilla de verificación, verdadero/falso, abierta)
- `points`: Puntos otorgados por respuesta correcta
- `hint`: Pista opcional para la pregunta
- `explanation`: Explicación de la respuesta correcta
- `media_type`: Tipo de medio (imagen, video, ninguno)
- `media_url`: URL al medio asociado
- `created_at`, `updated_at`: Marcas de tiempo
- `created_by`, `updated_by`: Referencias a usuarios

#### Métodos Principales

1. **tableName()**
   - Propósito: Define el nombre de la tabla de base de datos
   - Retorna: String 'question'

2. **rules()**
   - Propósito: Define reglas de validación
   - Valida:
     - Campos requeridos: section_id, question_text, question_type
     - Campos enteros: section_id, points, created_by, updated_by
     - Campos de texto: question_text, question_type, hint, explanation, media_type
     - Campos de fecha: created_at, updated_at
     - Campo URL: media_url

3. **behaviors()**
   - Propósito: Define comportamientos del modelo
   - Implementa: TimestampBehavior para gestión automática de marcas de tiempo

4. **Relaciones**
   - `getAnswers()`: Relación has many con el modelo Answers
   - `getOptions()`: Relación has many con el modelo Options
   - `getResponses()`: Relación has many con el modelo Responses
   - `getSection()`: Relación belongs to con el modelo Section

### Ejemplo de Uso
```php
$question = new Question();
$question->section_id = 1;
$question->question_text = "¿Cuál es la capital de Francia?";
$question->question_type = "multiple_choice";
$question->points = 10;
$question->save();
```

## Question.php - Technical Documentation

## English

### Overview
The `Question.php` file is a model class that represents questions in the system, extending Yii2's ActiveRecord class. It handles the management of questions within sections, including their properties, relationships, and validation rules.

### Purpose
This class serves as the core model for managing questions in the system, providing functionality for creating, updating, and managing questions with various types, media attachments, and scoring capabilities.

### Directory Structure
- Location: `common/models/Question.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveRecord`

### Key Components

#### Class Definition
```php
class Question extends \yii\db\ActiveRecord
```

#### Properties
- `id`: Primary key
- `section_id`: Foreign key to Section model
- `question_text`: The actual question content
- `question_type`: Type of question (text, multiple_choice, checkbox, true_false, open)
- `points`: Points awarded for correct answer
- `hint`: Optional hint for the question
- `explanation`: Explanation of the correct answer
- `media_type`: Type of media (image, video, none)
- `media_url`: URL to associated media
- `created_at`, `updated_at`: Timestamps
- `created_by`, `updated_by`: User references

#### Main Methods

1. **tableName()**
   - Purpose: Defines the database table name
   - Returns: String 'question'

2. **rules()**
   - Purpose: Defines validation rules
   - Validates:
     - Required fields: section_id, question_text, question_type
     - Integer fields: section_id, points, created_by, updated_by
     - String fields: question_text, question_type, hint, explanation, media_type
     - Date fields: created_at, updated_at
     - URL field: media_url

3. **behaviors()**
   - Purpose: Defines model behaviors
   - Implements: TimestampBehavior for automatic timestamp management

4. **Relationships**
   - `getAnswers()`: Has many relationship with Answers model
   - `getOptions()`: Has many relationship with Options model
   - `getResponses()`: Has many relationship with Responses model
   - `getSection()`: Belongs to relationship with Section model

### Usage Example
```php
$question = new Question();
$question->section_id = 1;
$question->question_text = "What is the capital of France?";
$question->question_type = "multiple_choice";
$question->points = 10;
$question->save();
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Implements Yii2's ActiveRecord pattern
- Uses TimestampBehavior for automatic timestamp management
- Supports multiple question types
- Includes media attachment capabilities
- Implements comprehensive validation rules

### Best Practices / Mejores Prácticas
- Always validate question data before saving
- Use appropriate question types for different scenarios
- Include helpful hints and explanations
- Consider media attachments for better engagement
- Maintain proper relationships with other models

### Related Components / Componentes Relacionados
- Section Model
- Answers Model
- Options Model
- Responses Model
- QuestionSearch Model