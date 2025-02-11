---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `unit.suite.yml`
---

## Documentación Técnica del Archivo `unit.suite.yml` en la carpeta `/appSennovalab/tests/`

## Español

### ¿Para qué es?
El archivo `unit.suite.yml` es un archivo de configuración fundamental para las pruebas unitarias en un proyecto Yii2 utilizando Codeception. Define la configuración necesaria para ejecutar pruebas que verifican el funcionamiento de unidades individuales de código.

### Definición de la Carpeta
Se encuentra en la carpeta `/appSennovalab/tests/`, que es el directorio principal de pruebas del proyecto. Esta ubicación es parte de la estructura estándar de pruebas en proyectos Yii2.

### Propósito
El propósito principal es configurar el entorno para las pruebas unitarias, estableciendo:
- El espacio de nombres específico para las pruebas unitarias
- El actor responsable de ejecutar las pruebas
- Los módulos y componentes necesarios para las pruebas unitarias

### Funciones
- **Configuración de Namespace**: 
  - Define `frontend\tests\unit` como el espacio de nombres para las pruebas unitarias
- **Definición del Actor**: 
  - Establece `UnitTester` como el actor principal
- **Módulos Habilitados**:
  - `Yii2`: Con componentes específicos habilitados:
    - `orm`: Para pruebas de base de datos
    - `email`: Para pruebas de funcionalidad de correo
    - `fixtures`: Para manejo de datos de prueba
  - `Asserts`: Para realizar verificaciones y aserciones

---

## English

### What is it for?
The `unit.suite.yml` file is a fundamental configuration file for unit testing in a Yii2 project using Codeception. It defines the necessary configuration to run tests that verify the functionality of individual code units.

### Folder Definition
Located in the `/appSennovalab/tests/` folder, which is the main testing directory of the project. This location is part of the standard testing structure in Yii2 projects.

### Purpose
The main purpose is to configure the environment for unit testing by establishing:
- The specific namespace for unit tests
- The actor responsible for executing the tests
- The necessary modules and components for unit testing

### Functions
- **Namespace Configuration**: 
  - Defines `frontend\tests\unit` as the namespace for unit tests
- **Actor Definition**: 
  - Sets `UnitTester` as the main actor
- **Enabled Modules**:
  - `Yii2`: With specific components enabled:
    - `orm`: For database testing
    - `email`: For email functionality testing
    - `fixtures`: For test data handling
  - `Asserts`: For performing verifications and assertions

```yaml:appSennovalab/tests/unit.suite.yml
suite_namespace: frontend\tests\unit
actor: UnitTester
modules:
    enabled:
        - Yii2:
            part: [orm, email, fixtures]
        - Asserts
```

### Ejemplo de Uso / Usage Example
```php
// Ejemplo de una prueba unitaria usando esta configuración
// Example of a unit test using this configuration
class ExampleTest extends \Codeception\Test\Unit
{
    public function testSomeFunction(UnitTester $I)
    {
        $I->assertEquals(2 + 2, 4);
        $I->seeInDatabase('users', ['email' => 'test@example.com']);
    }
}
```