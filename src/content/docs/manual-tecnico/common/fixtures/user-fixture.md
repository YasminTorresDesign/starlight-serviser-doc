---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `fixtures`
---

## Documentación Técnica del Archivo `UserFixture.php`

## Español

### ¿Para qué es?
El archivo `UserFixture.php` es una clase de fixture que proporciona datos de prueba predefinidos para el modelo User en el entorno de pruebas de la aplicación Yii2.

### Definición de la Carpeta
**Ubicación:** `common/fixtures/UserFixture.php`
**Contexto:** Se encuentra en la carpeta de fixtures comunes, proporcionando datos de prueba compartidos para todas las aplicaciones.

### Propósito
- Proporcionar datos de prueba consistentes
- Facilitar pruebas automatizadas
- Simular datos de usuarios reales
- Mantener un estado conocido en pruebas
- Permitir pruebas repetibles y predecibles

### Estructura del Código
```php
namespace common\fixtures;

use yii\test\ActiveFixture;

class UserFixture extends ActiveFixture
{
    public $modelClass = 'common\models\User';
}
```

---

## Technical Documentation - `UserFixture.php` File

## English

### What is it for?
The `UserFixture.php` file is a fixture class that provides predefined test data for the User model in the Yii2 application testing environment.

### Folder Definition
**Location:** `common/fixtures/UserFixture.php`
**Context:** Located in the common fixtures folder, providing shared test data across all applications.

### Purpose
- Provide consistent test data
- Facilitate automated testing
- Simulate real user data
- Maintain known state in tests
- Enable repeatable and predictable testing

### Code Structure
```php
namespace common\fixtures;

use yii\test\ActiveFixture;

class UserFixture extends ActiveFixture
{
    public $modelClass = 'common\models\User';
}
```

### Características Principales / Main Features

#### Español
1. **Herencia**
   - Extiende de ActiveFixture
   - Hereda funcionalidad de carga de datos
   - Permite operaciones CRUD en pruebas

2. **Configuración**
   - Define el modelo asociado (User)
   - Permite personalización de datos
   - Facilita la gestión de estados

#### English
1. **Inheritance**
   - Extends ActiveFixture
   - Inherits data loading functionality
   - Enables CRUD operations in tests

2. **Configuration**
   - Defines associated model (User)
   - Allows data customization
   - Facilitates state management

### Ejemplo de Uso / Usage Example

#### Español
```php
// En una clase de prueba
public function fixtures()
{
    return [
        'user' => [
            'class' => UserFixture::class,
            'dataFile' => '@common/fixtures/data/user.php',
        ],
    ];
}
```

#### English
```php
// In a test class
public function fixtures()
{
    return [
        'user' => [
            'class' => UserFixture::class,
            'dataFile' => '@common/fixtures/data/user.php',
        ],
    ];
}
```

### Notas de Implementación / Implementation Notes

#### Español
- Requiere archivo de datos correspondiente
- Debe mantener consistencia con el modelo User
- Útil para pruebas unitarias y funcionales
- Facilita la creación de escenarios de prueba

#### English
- Requires corresponding data file
- Must maintain consistency with User model
- Useful for unit and functional testing
- Facilitates test scenario creation


