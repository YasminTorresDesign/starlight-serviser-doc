---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `FunctionalTester.php`
---

## Documentación Técnica del Archivo `FunctionalTester.php` en la Carpeta `appSennovaLab/tests/_support`

## Español

### ¿Para qué es?
El archivo `FunctionalTester.php` se utiliza para definir un tester funcional en la aplicación. Este archivo extiende la funcionalidad de los tests funcionales, permitiendo a los desarrolladores escribir pruebas que simulan la interacción del usuario con la aplicación.

### Definición del Archivo
El archivo `FunctionalTester.php` es una clase que extiende la clase base `Codeception\Actor`. Proporciona métodos personalizados que pueden ser utilizados en las pruebas funcionales para interactuar con la aplicación de manera más sencilla y legible.

### Propósito
El propósito del archivo `FunctionalTester.php` es facilitar la creación de pruebas funcionales al proporcionar métodos que encapsulan acciones comunes que un usuario podría realizar en la aplicación, como iniciar sesión, navegar por páginas y verificar resultados.

### Estructura Común
- **Métodos personalizados:** Cada método en esta clase puede representar una acción que el tester puede realizar, como `amGoingTo`, `wantToTest`, y otros métodos que encapsulan la lógica de prueba.

#### Ejemplo de contenido:
```php
<?php
namespace appSennovaLab\tests\_support;
use Codeception\Actor;

class FunctionalTester extends Actor {
    public function amGoingTo($text) {
        $this->comment("Estoy a punto de: $text");
    }
    
    public function wantToTest($feature) {
        $this->comment("Quiero probar: $feature");
    }
}
```

### Parámetros de Salida
Los parámetros de salida del archivo `FunctionalTester.php` se refieren a las acciones que se pueden realizar en las pruebas funcionales. Algunos ejemplos de resultados esperados son:
- **Acciones encapsuladas:** Se espera que los métodos personalizados faciliten la escritura de pruebas más legibles y mantenibles.
- **Interacción con la aplicación:** Se espera que las pruebas simulen correctamente la interacción del usuario con la aplicación.

---

## English

### Technical Documentation for the FunctionalTester.php File in the appSennovaLab/tests/_support Directory

### What is it for?
The `FunctionalTester.php` file is used to define a functional tester in the application. This file extends the functionality of functional tests, allowing developers to write tests that simulate user interaction with the application.

### Definition of the File
The `FunctionalTester.php` file is a class that extends the `Codeception\Actor` base class. It provides custom methods that can be used in functional tests to interact with the application in a more straightforward and readable manner.

### Purpose
The purpose of the `FunctionalTester.php` file is to facilitate the creation of functional tests by providing methods that encapsulate common actions a user might perform in the application, such as logging in, navigating pages, and verifying results.

### Common Structure
- **Custom Methods:** Each method in this class can represent an action that the tester can perform, such as `amGoingTo`, `wantToTest`, and other methods that encapsulate testing logic.

#### Example content:
```php
<?php
namespace appSennovaLab\tests\_support;
use Codeception\Actor;

class FunctionalTester extends Actor {
    public function amGoingTo($text) {
        $this->comment("I am about to: $text");
    }
    
    public function wantToTest($feature) {
        $this->comment("I want to test: $feature");
    }
}
```

### Output Parameters
The output parameters of the `FunctionalTester.php` file refer to the actions that can be performed in functional tests. Some examples of expected results are:
- **Encapsulated Actions:** Custom methods are expected to facilitate writing more readable and maintainable tests.
- **Interaction with the Application:** Tests are expected to correctly simulate user interaction with the application.

