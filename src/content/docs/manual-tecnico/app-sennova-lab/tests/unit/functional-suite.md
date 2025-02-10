---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `functional.suite.yml` 
---

# Documentación Técnica del Archivo `functional.suite.yml` en la carpeta `appSennovalab/tests/`

## Español

### ¿Para qué es?
El archivo `functional.suite.yml` es un archivo de configuración esencial para las pruebas funcionales en un proyecto Yii2 utilizando Codeception. Define la configuración necesaria para ejecutar pruebas que verifican la lógica de negocio y la funcionalidad de la aplicación.

### Definición de la Carpeta
Se encuentra en la carpeta `appSennovalab/tests/`, específicamente en el directorio de pruebas funcionales. Esta ubicación es estándar en la estructura de pruebas de Codeception para proyectos Yii2.

### Propósito
El propósito principal es configurar el entorno para las pruebas funcionales, definiendo:
- El espacio de nombres para las pruebas funcionales
- El actor que ejecutará las pruebas
- Los módulos necesarios para las pruebas funcionales

### Funciones
- **Configuración de Namespace**: 
  - Define `frontend\tests\functional` como el espacio de nombres
- **Definición del Actor**: 
  - Establece `FunctionalTester` como el actor principal
- **Módulos Habilitados**:
  - `Filesystem`: Para operaciones con archivos
  - `Yii2`: Para integración con el framework
  - `Asserts`: Para realizar aserciones en las pruebas

---

## English

### What is it for?
The `functional.suite.yml` file is an essential configuration file for functional testing in a Yii2 project using Codeception. It defines the necessary configuration to run tests that verify business logic and application functionality.

### Folder Definition
Located in the `appSennovalab/tests/` folder, specifically in the functional tests directory. This location is standard in the Codeception testing structure for Yii2 projects.

### Purpose
The main purpose is to configure the environment for functional testing by defining:
- The namespace for functional tests
- The actor that will execute the tests
- The necessary modules for functional testing

### Functions
- **Namespace Configuration**: 
  - Defines `frontend\tests\functional` as the namespace
- **Actor Definition**: 
  - Sets `FunctionalTester` as the main actor
- **Enabled Modules**:
  - `Filesystem`: For file operations
  - `Yii2`: For framework integration
  - `Asserts`: For making test assertions

```yaml:appSennovalab/tests/functional.suite.yml
suite_namespace: frontend\tests\functional
actor: FunctionalTester
modules:
    enabled:
        - Filesystem  # Para operaciones con archivos
        - Yii2       # Integración con el framework Yii2
        - Asserts    # Para realizar aserciones en las pruebas
```

### Ejemplo de Uso
```php
// Ejemplo de una prueba funcional usando esta configuración
class ExampleTest
{
    public function testSomeFeature(FunctionalTester $I)
    {
        $I->amOnPage('/');
        $I->see('Welcome');
        $I->seeFile('path/to/file');
    }
}
```