---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `test\support`
---

## Documentación Técnica de tests/_support/UnitTester.php

## Español

### Descripción General
El archivo `UnitTester.php` es un componente central del framework de pruebas Codeception que proporciona funcionalidad para pruebas unitarias. Extiende la clase `\Codeception\Actor` e incluye acciones generadas para escenarios de pruebas unitarias.

### Propósito
Este archivo sirve para:
- Proporcionar una clase base para pruebas unitarias
- Definir acciones y métodos comunes de prueba
- Habilitar la interacción con el framework de pruebas
- Soportar la ejecución de escenarios de prueba
- Permitir acciones de prueba personalizadas

### Estructura de Directorios
- Ubicación: `tests/_support/UnitTester.php`
- Tipo: Archivo de Clase PHP
- Directorio Padre: `tests/_support/`
- Espacio de Nombres: Varía según la aplicación (ej., `common\tests`, `backend\tests`, `frontend\tests`)

### Componentes Principales

#### Definición de Clase
```php
class UnitTester extends \Codeception\Actor
{
    use _generated\UnitTesterActions;
    
    /**
     * Define custom actions here
     */
}
```

#### Métodos Heredados
La clase hereda varios métodos de `\Codeception\Actor`:
- `wantToTest($text)`: Declara el propósito de una prueba
- `wantTo($text)`: Especifica lo que la prueba pretende lograr
- `execute($callable)`: Ejecuta una función callable
- `expectTo($prediction)`: Configura las expectativas de la prueba
- `verify($prediction)`: Verifica las condiciones de la prueba
- `amGoingTo($argumentation)`: Describe las próximas acciones de prueba
- `am($role)`: Establece el rol para la prueba
- `lookForwardTo($achieveValue)`: Especifica resultados esperados
- `comment($description)`: Agrega comentarios a la salida de la prueba
- `haveFriend($name, $actorClass = NULL)`: Crea dependencias de prueba

### Ejemplos de Uso

#### Estructura Básica de Prueba
```php
class MyTest extends \Codeception\Test\Unit
{
    protected UnitTester $tester;

    protected function _before()
    {
        // Código de configuración
    }

    public function testSomeFeature()
    {
        $this->tester->wantToTest('funcionalidad de la característica');
        $this->tester->expectTo('realizar acciones específicas');
        // Implementación de la prueba
    }
}
```

#### Uso de Acciones de Prueba
```php
public function testUserCreation()
{
    $this->tester->wantTo('crear un nuevo usuario');
    $this->tester->amGoingTo('completar el formulario de registro');
    // Implementación de la prueba
    $this->tester->verify('el usuario fue creado exitosamente');
}
```

## tests/_support/UnitTester.php - Technical Documentation

## English

### Overview
The `UnitTester.php` file is a core component of the Codeception testing framework that provides functionality for unit testing. It extends the `\Codeception\Actor` class and includes generated actions for unit testing scenarios.

### Purpose
This file serves to:
- Provide a base class for unit testing
- Define common testing actions and methods
- Enable interaction with the testing framework
- Support test scenario execution
- Allow for custom testing actions

### Directory Structure
- Location: `tests/_support/UnitTester.php`
- Type: PHP Class File
- Parent Directory: `tests/_support/`
- Namespace: Varies by application (e.g., `common\tests`, `backend\tests`, `frontend\tests`)

### Key Components

#### Class Definition
```php
class UnitTester extends \Codeception\Actor
{
    use _generated\UnitTesterActions;
    
    /**
     * Define custom actions here
     */
}
```

#### Inherited Methods
The class inherits several methods from `\Codeception\Actor`:
- `wantToTest($text)`: Declares the purpose of a test
- `wantTo($text)`: Specifies what the test aims to achieve
- `execute($callable)`: Executes a callable function
- `expectTo($prediction)`: Sets up test expectations
- `verify($prediction)`: Verifies test conditions
- `amGoingTo($argumentation)`: Describes upcoming test actions
- `am($role)`: Sets the role for the test
- `lookForwardTo($achieveValue)`: Specifies expected outcomes
- `comment($description)`: Adds comments to test output
- `haveFriend($name, $actorClass = NULL)`: Creates test dependencies

### Usage Examples

#### Basic Test Structure
```php
class MyTest extends \Codeception\Test\Unit
{
    protected UnitTester $tester;

    protected function _before()
    {
        // Setup code
    }

    public function testSomeFeature()
    {
        $this->tester->wantToTest('feature functionality');
        $this->tester->expectTo('perform specific actions');
        // Test implementation
    }
}
```

#### Using Test Actions
```php
public function testUserCreation()
{
    $this->tester->wantTo('create a new user');
    $this->tester->amGoingTo('fill in the registration form');
    // Test implementation
    $this->tester->verify('user was created successfully');
}
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Extends Codeception's Actor class
- Uses generated actions trait
- Supports PHP 7.4+ type declarations
- Integrates with PHPUnit
- Provides fluent interface for test actions
- Supports test dependencies and scenarios

### Best Practices / Mejores Prácticas
- Keep test methods focused and single-purpose
- Use descriptive method names
- Follow AAA pattern (Arrange, Act, Assert)
- Document test scenarios
- Use appropriate assertions
- Maintain test independence
- Clean up test data

### Related Components / Componentes Relacionados
- Codeception Testing Framework
- PHPUnit
- Test Cases
- Test Scenarios
- Test Dependencies
- Test Actions