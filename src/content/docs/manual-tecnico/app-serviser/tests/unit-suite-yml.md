---
title: Manual Técnico AppServiser
description: Documentación Técnica del Archivo `unit.suite.yml`
---

## Documentación Técnica del Archivo unit.suite.yml en la Carpeta appServiser/tests/

## Español

### ¿Para qué es?
El archivo `unit.suite.yml` es un archivo de configuración esencial para las pruebas unitarias en el framework Codeception. Define la configuración necesaria para ejecutar pruebas que verifican el funcionamiento de unidades individuales de código.

### Definición del Archivo
Es un archivo de configuración YAML que establece los parámetros y módulos necesarios para ejecutar pruebas unitarias en el contexto de una aplicación Yii2.

### Propósito
El propósito principal es:
- Configurar el entorno para pruebas unitarias
- Definir los módulos necesarios para testing
- Establecer los componentes de Yii2 que se probarán
- Habilitar funcionalidades específicas para testing unitario

### Estructura y Configuración
```yaml
suite_namespace: frontend\tests\unit
actor: UnitTester
modules:
    enabled:
        - Yii2:
            part: [orm, email, fixtures]
        - Asserts
```

### Componentes Principales
- **suite_namespace:** Define el espacio de nombres para las pruebas unitarias
- **actor:** Especifica UnitTester como la clase principal de pruebas
- **modules:** Configura los módulos habilitados:
  - **Yii2:** Con componentes específicos:
    - orm: Para pruebas de base de datos
    - email: Para pruebas de correo electrónico
    - fixtures: Para datos de prueba
  - **Asserts:** Para realizar verificaciones y aserciones

---

## English

### Technical Documentation for the unit.suite.yml File in the appServiser/tests Directory

### What is it for?
The `unit.suite.yml` file is an essential configuration file for unit testing in the Codeception framework. It defines the necessary configuration to run tests that verify the functionality of individual code units.

### File Definition
It is a YAML configuration file that establishes the parameters and modules needed to run unit tests in the context of a Yii2 application.

### Purpose
The main purpose is to:
- Configure the environment for unit testing
- Define necessary modules for testing
- Establish Yii2 components to be tested
- Enable specific functionalities for unit testing

### Structure and Configuration
```yaml
suite_namespace: frontend\tests\unit
actor: UnitTester
modules:
    enabled:
        - Yii2:
            part: [orm, email, fixtures]
        - Asserts
```

### Main Components
- **suite_namespace:** Defines the namespace for unit tests
- **actor:** Specifies UnitTester as the main test class
- **modules:** Configures enabled modules:
  - **Yii2:** With specific components:
    - orm: For database testing
    - email: For email testing
    - fixtures: For test data
  - **Asserts:** For performing verifications and assertions
