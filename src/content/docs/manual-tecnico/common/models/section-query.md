---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de SectionQuery.php
## Español

### Descripción General
El archivo `SectionQuery.php` es una clase ActiveQuery que extiende la clase ActiveQuery de Yii2, diseñada específicamente para manejar consultas de base de datos relacionadas con el modelo Section. Proporciona una forma segura de construir y ejecutar consultas para secciones de encuestas.

### Propósito
Esta clase sirve como constructor de consultas para la entidad Section, implementando el patrón Active Query del framework Yii2. Permite a los desarrolladores construir consultas complejas para recuperar secciones de encuestas con verificación de tipos y soporte IDE.

### Estructura de Directorios
- Ubicación: `common/models/SectionQuery.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveQuery`

### Componentes Principales

#### Definición de Clase
```php
class SectionQuery extends \yii\db\ActiveQuery
```

#### Métodos Principales

1. **all($db = null)**
   - Propósito: Ejecuta la consulta y retorna todos los resultados
   - Parámetros:
     - `$db`: Conexión de base de datos opcional
   - Retorna: Array de modelos Section

2. **one($db = null)**
   - Propósito: Ejecuta la consulta y retorna un único resultado
   - Parámetros:
     - `$db`: Conexión de base de datos opcional
   - Retorna: Modelo Section único o null

### Ejemplo de Uso
```php
// Obtener todas las secciones
$sections = Section::find()->all();

// Obtener una sección específica
$section = Section::find()->one();

// Obtener secciones para una encuesta específica
$surveySections = Section::find()
    ->where(['survey_id' => 1])
    ->orderBy(['order' => SORT_ASC])
    ->all();

// Obtener secciones con condiciones
$activeSections = Section::find()
    ->where(['survey_id' => 1])
    ->andWhere(['>', 'order', 0])
    ->orderBy(['order' => SORT_ASC])
    ->all();
```

## SectionQuery.php - Technical Documentation

## English

### Overview
The `SectionQuery.php` file is an ActiveQuery class that extends Yii2's ActiveQuery class, specifically designed for handling database queries related to the Section model. It provides a type-safe way to build and execute queries for survey sections.

### Purpose
This class serves as a query builder for the Section entity, implementing the Active Query pattern of the Yii2 framework. It enables developers to build complex queries for retrieving survey sections with proper type checking and IDE support.

### Directory Structure
- Location: `common/models/SectionQuery.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveQuery`

### Key Components

#### Class Definition
```php
class SectionQuery extends \yii\db\ActiveQuery
```

#### Main Methods

1. **all($db = null)**
   - Purpose: Executes the query and returns all results
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Array of Section models

2. **one($db = null)**
   - Purpose: Executes the query and returns a single result
   - Parameters:
     - `$db`: Optional database connection
   - Returns: Single Section model or null

### Usage Example
```php
// Get all sections
$sections = Section::find()->all();

// Get a specific section
$section = Section::find()->one();

// Get sections for a specific survey
$surveySections = Section::find()
    ->where(['survey_id' => 1])
    ->orderBy(['order' => SORT_ASC])
    ->all();

// Get sections with conditions
$activeSections = Section::find()
    ->where(['survey_id' => 1])
    ->andWhere(['>', 'order', 0])
    ->orderBy(['order' => SORT_ASC])
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
- Section Model
- Survey Model
- Question Model
- SectionSearch
- SectionController