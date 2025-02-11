---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `acceptance.suite.yml.example
---

## Documentación Técnica del Archivo `acceptance.suite.yml.example` en la carpeta `appSennovalab/tests/`

## Español

### ¿Para qué es?
El archivo `acceptance.suite.yml.example` es un archivo de configuración de ejemplo para las pruebas de aceptación en un proyecto Yii2 utilizando Codeception. Define la configuración básica necesaria para ejecutar pruebas de aceptación automatizadas.

### Definición de la Carpeta
Se encuentra en la carpeta `tests` del proyecto, específicamente en `appSennovalab/tests/`. Este archivo sirve como plantilla que los desarrolladores pueden copiar y modificar para crear su propio archivo `acceptance.suite.yml`.

### Propósito
El propósito principal es proporcionar una configuración base para las pruebas de aceptación, definiendo:
- El espacio de nombres para las pruebas
- El actor que ejecutará las pruebas
- Los módulos necesarios y sus configuraciones

### Funciones
- **Configuración de Namespace**: Define el espacio de nombres `frontend\tests\acceptance` para las pruebas
- **Definición del Actor**: Establece `AcceptanceTester` como el actor principal
- **Configuración de Módulos**:
  - WebDriver: Configura el navegador y la URL base para las pruebas
  - Yii2: Inicializa el framework para las pruebas

---

## English

### What is it for?
The `acceptance.suite.yml.example` file is an example configuration file for acceptance testing in a Yii2 project using Codeception. It defines the basic configuration needed to run automated acceptance tests.

### Folder Definition
Located in the `tests` folder of the project, specifically in `appSennovalab/tests/`. This file serves as a template that developers can copy and modify to create their own `acceptance.suite.yml` file.

### Purpose
The main purpose is to provide a base configuration for acceptance testing by defining:
- The namespace for the tests
- The actor that will execute the tests
- The necessary modules and their configurations

### Functions
- **Namespace Configuration**: Defines the `frontend\tests\acceptance` namespace for tests
- **Actor Definition**: Sets `AcceptanceTester` as the main actor
- **Module Configuration**:
  - WebDriver: Configures the browser and base URL for testing
  - Yii2: Initializes the framework for testing

```yaml:appSennovalab/tests/acceptance.suite.yml.example
# Configuración básica para pruebas de aceptación
suite_namespace: frontend\tests\acceptance
actor: AcceptanceTester
modules:
    enabled:
        # Configuración del WebDriver para pruebas en navegador
        - WebDriver:
            url: http://localhost:8080  # URL base para pruebas
            browser: firefox            # Navegador a utilizar
        # Configuración del módulo Yii2
        - Yii2:
            part: init                 # Inicialización del framework
```