---
title: Manual Técnico AppSennovaLab
description: Documentación Técnica del Archivo `acceptance.suite.yml.example`
---

## Documentación Técnica del Archivo acceptance.suite.yml.example en la Carpeta appServiser/tests

## Español

### ¿Para qué es?
El archivo `acceptance.suite.yml.example` es un archivo de configuración de ejemplo para las pruebas de aceptación en Codeception. Define la configuración necesaria para ejecutar pruebas automatizadas que simulan la interacción real del usuario con la aplicación web.

### Definición del Archivo
Es un archivo de configuración YAML que sirve como plantilla para establecer los parámetros de las pruebas de aceptación. Los desarrolladores pueden copiar este archivo y renombrarlo a `acceptance.suite.yml` para configurar sus propias pruebas.

### Propósito
El propósito principal es:
- Definir la configuración base para las pruebas de aceptación
- Establecer los módulos necesarios para la ejecución de pruebas
- Configurar el navegador web y la URL base para las pruebas
- Integrar el framework Yii2 con las pruebas de aceptación

### Estructura y Configuración
1. **Configuración Principal:**
   ```yaml
   suite_namespace: frontend\tests\acceptance
   actor: AcceptanceTester
   ```
   - Define el namespace de las pruebas
   - Especifica la clase AcceptanceTester que se utilizará

2. **Módulos Habilitados:**
   - **WebDriver:**
     - URL base: http://localhost:8080
     - Navegador: Firefox
   - **Yii2:**
     - Inicialización básica del framework

### Parámetros de Configuración
- **suite_namespace:** Espacio de nombres para las pruebas
- **actor:** Clase principal para ejecutar las pruebas
- **modules:** Módulos necesarios para las pruebas
- **url:** URL base para las pruebas
- **browser:** Navegador web a utilizar

---

## English

### Technical Documentation for the acceptance.suite.yml.example File in the appServiser/tests Directory

### What is it for?
The `acceptance.suite.yml.example` file is an example configuration file for Codeception acceptance tests. It defines the necessary configuration to run automated tests that simulate real user interaction with the web application.

### File Definition
It is a YAML configuration file that serves as a template for setting up acceptance test parameters. Developers can copy this file and rename it to `acceptance.suite.yml` to configure their own tests.

### Purpose
The main purpose is to:
- Define the base configuration for acceptance tests
- Set up necessary modules for test execution
- Configure web browser and base URL for testing
- Integrate Yii2 framework with acceptance tests

### Structure and Configuration
1. **Main Configuration:**
   ```yaml
   suite_namespace: frontend\tests\acceptance
   actor: AcceptanceTester
   ```
   - Defines the test namespace
   - Specifies the AcceptanceTester class to be used

2. **Enabled Modules:**
   - **WebDriver:**
     - Base URL: http://localhost:8080
     - Browser: Firefox
   - **Yii2:**
     - Basic framework initialization

### Configuration Parameters
- **suite_namespace:** Namespace for tests
- **actor:** Main class for executing tests
- **modules:** Required modules for testing
- **url:** Base URL for testing
- **browser:** Web browser to use

