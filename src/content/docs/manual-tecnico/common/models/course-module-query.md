---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica del Archivo `CourseModuleQuery.php`

## Español

### ¿Para qué es?
El archivo `CourseModuleQuery.php` es una clase de consulta ActiveQuery personalizada para el modelo CourseModule en la aplicación. Extiende la funcionalidad de consulta base de Yii2 para módulos de cursos.

### Definición de la Carpeta
**Ubicación:** `common/models/CourseModuleQuery.php`
**Contexto:** Se encuentra en la carpeta de modelos comunes, proporcionando funcionalidad de consulta compartida para módulos de cursos.

### Propósito
- Personalizar consultas para módulos de cursos
- Extender funcionalidad de ActiveQuery
- Proporcionar métodos de consulta específicos
- Mantener la lógica de consulta centralizada
- Facilitar la recuperación de datos de módulos

### Estructura del Código
```php
namespace common\models;

class CourseModuleQuery extends \yii\db\ActiveQuery
{
    /**
     * @return CourseModule[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @return CourseModule|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
```

---

## Technical Documentation - `CourseModuleQuery.php` File

## English

### What is it for?
The `CourseModuleQuery.php` file is a custom ActiveQuery class for the CourseModule model in the application. It extends Yii2's base query functionality for course modules.

### Folder Definition
**Location:** `common/models/CourseModuleQuery.php`
**Context:** Located in the common models folder, providing shared query functionality for course modules.

### Purpose
- Customize queries for course modules
- Extend ActiveQuery functionality
- Provide specific query methods
- Maintain centralized query logic
- Facilitate module data retrieval

### Code Structure
```php
namespace common\models;

class CourseModuleQuery extends \yii\db\ActiveQuery
{
    /**
     * @return CourseModule[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @return CourseModule|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
```

### Métodos Principales / Main Methods

#### Español
1. **all()**
   - Retorna todos los registros coincidentes
   - Tipo de retorno: CourseModule[] o array
   - Permite consultas personalizadas

2. **one()**
   - Retorna un único registro
   - Tipo de retorno: CourseModule, array o null
   - Útil para búsquedas específicas

#### English
1. **all()**
   - Returns all matching records
   - Return type: CourseModule[] or array
   - Allows custom queries

2. **one()**
   - Returns a single record
   - Return type: CourseModule, array or null
   - Useful for specific searches

### Ejemplo de Uso / Usage Example

#### Español
```php
// Obtener todos los módulos
$modules = CourseModule::find()->all();

// Obtener un módulo específico
$module = CourseModule::find()->one();
```

#### English
```php
// Get all modules
$modules = CourseModule::find()->all();

// Get a specific module
$module = CourseModule::find()->one();
```

### Notas de Implementación / Implementation Notes

#### Español
- Permite extensión para consultas personalizadas
- Mantiene la herencia de ActiveQuery
- Facilita la tipificación de retornos
- Soporta encadenamiento de métodos
- Comentado método `active()` para futura implementación

#### English
- Allows extension for custom queries
- Maintains ActiveQuery inheritance
- Facilitates return type hinting
- Supports method chaining
- Commented `active()` method for future implementation

Esta documentación proporciona una visión completa de la clase de consulta personalizada para módulos de cursos, destacando su funcionalidad y posibilidades de extensión.
