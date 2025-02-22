---
title: Manual Técnico AppServiser
description: Documentación Técnica del Archivo `functional.suite.yml`
---

## Documentación Técnica del Archivo functional.suite.yml en la Carpeta appServiser/tests

## Español

### ¿Para qué es?
El archivo `functional.suite.yml` es un archivo de configuración crucial para las pruebas funcionales en el framework Codeception. Define la configuración y los módulos necesarios para ejecutar pruebas que verifican la funcionalidad de la aplicación a nivel de lógica de negocio.

### Definición del Archivo
Es un archivo de configuración YAML que especifica cómo se deben ejecutar las pruebas funcionales, qué módulos están habilitados y cómo se debe comportar el entorno de pruebas funcionales.

### Propósito
El propósito principal es:
- Configurar el entorno para pruebas funcionales
- Definir los módulos necesarios para las pruebas
- Establecer el actor principal de las pruebas
- Integrar las funcionalidades de Yii2 en las pruebas

### Estructura y Configuración
```yaml
suite_namespace: frontend\tests\functional
actor: FunctionalTester
modules:
    enabled:
        - Filesystem
        - Yii2
        - Asserts
```

### Componentes Principales
- **suite_namespace:** Define el espacio de nombres para las pruebas funcionales
- **actor:** Especifica la clase FunctionalTester como ejecutor principal
- **modules:** Lista los módulos habilitados:
  - Filesystem: Para operaciones con archivos
  - Yii2: Integración con el framework
  - Asserts: Para realizar verificaciones

---

## English

### Technical Documentation for the functional.suite.yml File in the appServiser/tests  Directory

### What is it for?
The `functional.suite.yml` file is a crucial configuration file for functional testing in the Codeception framework. It defines the configuration and modules needed to run tests that verify application functionality at the business logic level.

### File Definition
It is a YAML configuration file that specifies how functional tests should be executed, which modules are enabled, and how the functional testing environment should behave.

### Purpose
The main purpose is to:
- Configure the environment for functional tests
- Define necessary modules for testing
- Establish the main test actor
- Integrate Yii2 functionalities into tests

### Structure and Configuration
```yaml
suite_namespace: frontend\tests\functional
actor: FunctionalTester
modules:
    enabled:
        - Filesystem
        - Yii2
        - Asserts
```

### Main Components
- **suite_namespace:** Defines the namespace for functional tests
- **actor:** Specifies the FunctionalTester class as the main executor
- **modules:** Lists enabled modules:
  - Filesystem: For file operations
  - Yii2: Framework integration
  - Asserts: For performing verifications
