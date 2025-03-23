---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica del Archivo `ProfileInfoQuery.php`

## Español

### ¿Para qué es?
El archivo `ProfileInfoQuery.php` es una clase de consulta ActiveQuery personalizada para el modelo ProfileInfo en la aplicación Yii2. Permite realizar consultas específicas y personalizadas para la información de perfiles de usuario.

### Definición de la Carpeta
**Ubicación:** `common/models/ProfileInfoQuery.php`
**Contexto:** Se encuentra en la carpeta de modelos comunes, proporcionando funcionalidad de consulta compartida para todas las aplicaciones.

### Propósito
- Extender funcionalidad de consultas para ProfileInfo
- Personalizar métodos de búsqueda
- Proporcionar métodos de consulta específicos
- Mantener la lógica de consulta centralizada
- Facilitar la reutilización de consultas comunes

### Estructura del Código
```php
namespace common\models;

class ProfileInfoQuery extends \yii\db\ActiveQuery
{
    /**
     * @return ProfileInfo[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @return ProfileInfo|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
```

---

## Technical Documentation - `ProfileInfoQuery.php` File

## English

### What is it for?
The `ProfileInfoQuery.php` file is a custom ActiveQuery class for the ProfileInfo model in the Yii2 application. It enables specific and customized queries for user profile information.

### Folder Definition
**Location:** `common/models/ProfileInfoQuery.php`
**Context:** Located in the common models folder, providing shared query functionality across all applications.

### Purpose
- Extend query functionality for ProfileInfo
- Customize search methods
- Provide specific query methods
- Maintain centralized query logic
- Facilitate common query reuse

### Code Structure
```php
namespace common\models;

class ProfileInfoQuery extends \yii\db\ActiveQuery
{
    /**
     * @return ProfileInfo[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @return ProfileInfo|array|null
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
   - Tipo de retorno: Array de ProfileInfo
   - Permite consultas personalizadas

2. **one()**
   - Retorna un único registro
   - Tipo de retorno: ProfileInfo|array|null
   - Útil para búsquedas específicas

#### English
1. **all()**
   - Returns all matching records
   - Return type: Array of ProfileInfo
   - Allows custom queries

2. **one()**
   - Returns a single record
   - Return type: ProfileInfo|array|null
   - Useful for specific searches

### Ejemplo de Uso / Usage Example

#### Español
```php
// Obtener todos los perfiles
$profiles = ProfileInfo::find()->all();

// Obtener un perfil específico
$profile = ProfileInfo::find()->one();
```

#### English
```php
// Get all profiles
$profiles = ProfileInfo::find()->all();

// Get a specific profile
$profile = ProfileInfo::find()->one();
```

### Notas de Implementación / Implementation Notes

#### Español
- Extiende yii\db\ActiveQuery
- Permite personalización de consultas
- Mantiene consistencia con el modelo base
- Facilita la adición de métodos personalizados
- Soporta encadenamiento de métodos

#### English
- Extends yii\db\ActiveQuery
- Allows query customization
- Maintains consistency with base model
- Facilitates custom method addition
- Supports method chaining


