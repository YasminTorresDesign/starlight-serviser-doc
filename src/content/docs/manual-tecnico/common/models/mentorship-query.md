---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica del Archivo `MentorshipQuery.php`

## Español

### ¿Para qué es?
El archivo `MentorshipQuery.php` es una clase de consulta activa (ActiveQuery) personalizada para el modelo Mentorship en la aplicación. Extiende la funcionalidad de consulta base de Yii2 para operaciones específicas con mentorías.

### Definición de la Carpeta
**Ubicación:** `common/models/MentorshipQuery.php`
**Contexto:** Se encuentra en la carpeta de modelos comunes, proporcionando funcionalidad de consulta compartida para el modelo Mentorship.

### Propósito
- Personalizar consultas para el modelo Mentorship
- Extender funcionalidad de ActiveQuery
- Proporcionar métodos específicos de consulta
- Mantener la lógica de consulta centralizada
- Facilitar la reutilización de consultas comunes

### Estructura del Código
```php
namespace common\models;

class MentorshipQuery extends \yii\db\ActiveQuery
{
    /**
     * {@inheritdoc}
     * @return Mentorship[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return Mentorship|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
```

---

## Technical Documentation - `MentorshipQuery.php` File

## English

### What is it for?
The `MentorshipQuery.php` file is a custom ActiveQuery class for the Mentorship model in the application. It extends Yii2's base query functionality for specific mentorship operations.

### Folder Definition
**Location:** `common/models/MentorshipQuery.php`
**Context:** Located in the common models folder, providing shared query functionality for the Mentorship model.

### Purpose
- Customize queries for Mentorship model
- Extend ActiveQuery functionality
- Provide specific query methods
- Maintain centralized query logic
- Facilitate common query reuse

### Code Structure
```php
namespace common\models;

class MentorshipQuery extends \yii\db\ActiveQuery
{
    public function all($db = null)
    {
        return parent::all($db);
    }

    public function one($db = null)
    {
        return parent::one($db);
    }
}
```

### Métodos Principales / Main Methods

#### Español
1. **all()**
   - Retorna todos los resultados de la consulta
   - Tipo de retorno: Mentorship[]|array
   - Permite conexión de BD personalizada

2. **one()**
   - Retorna un único resultado
   - Tipo de retorno: Mentorship|array|null
   - Permite conexión de BD personalizada

#### English
1. **all()**
   - Returns all query results
   - Return type: Mentorship[]|array
   - Allows custom DB connection

2. **one()**
   - Returns single result
   - Return type: Mentorship|array|null
   - Allows custom DB connection

### Ejemplo de Uso / Usage Example

#### Español
```php
// Obtener todas las mentorías
$mentorias = Mentorship::find()->all();

// Obtener una mentoría específica
$mentoria = Mentorship::find()->one();

// Consulta personalizada
$mentorias = Mentorship::find()
    ->where(['status' => 1])
    ->orderBy(['created_at' => SORT_DESC])
    ->all();
```

#### English
```php
// Get all mentorships
$mentorships = Mentorship::find()->all();

// Get specific mentorship
$mentorship = Mentorship::find()->one();

// Custom query
$mentorships = Mentorship::find()
    ->where(['status' => 1])
    ->orderBy(['created_at' => SORT_DESC])
    ->all();
```

### Notas de Implementación / Implementation Notes

#### Español
- Permite extensión para consultas personalizadas
- Mantiene tipado fuerte en retornos
- Facilita la mantenibilidad del código
- Soporta encadenamiento de métodos

#### English
- Allows extension for custom queries
- Maintains strong typing in returns
- Facilitates code maintainability
- Supports method chaining


