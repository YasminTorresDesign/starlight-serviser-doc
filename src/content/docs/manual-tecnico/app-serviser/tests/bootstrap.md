---
title: Manual Técnico AppServiser
description: Documentación Técnica del Archivo `_bootstrap.php`
---

## Documentación Técnica del Archivo _bootstrap.php en la Carpeta appServiser/tests

## Español

### ¿Para qué es?
El archivo `_bootstrap.php` es un archivo de inicialización crucial que configura el entorno de pruebas para la aplicación. Este archivo se ejecuta antes de que cualquier prueba comience, estableciendo las constantes y dependencias necesarias para el entorno de testing.

### Definición del Archivo
Es un archivo de configuración PHP que define constantes fundamentales y carga los archivos necesarios para ejecutar las pruebas de la aplicación. Se encuentra en la carpeta de tests y es parte de la estructura de pruebas del framework Yii2.

### Propósito
El propósito principal es:
- Establecer el entorno de pruebas
- Definir constantes críticas del sistema
- Cargar las dependencias necesarias
- Inicializar el framework Yii2 para pruebas

### Estructura y Funciones
1. **Definición de Constantes:**
   - `YII_DEBUG`: Habilita el modo de depuración
   - `YII_ENV`: Establece el entorno como 'test'
   - `YII_APP_BASE_PATH`: Define la ruta base de la aplicación

2. **Carga de Archivos:**
   - Carga el autoloader de Composer
   - Inicializa el framework Yii2
   - Carga las configuraciones de bootstrap comunes
   - Carga las configuraciones específicas de pruebas

### Parámetros de Salida
- No tiene parámetros de salida directos
- Prepara el entorno para la ejecución de pruebas
- Asegura que todas las dependencias estén disponibles

---

## English

### Technical Documentation for the _bootstrap.php File in the appServiser/tests Directory

### What is it for?
The `_bootstrap.php` file is a crucial initialization file that configures the testing environment for the application. This file runs before any tests begin, setting up necessary constants and dependencies for the testing environment.

### File Definition
It is a PHP configuration file that defines fundamental constants and loads the necessary files to run application tests. It is located in the tests folder and is part of the Yii2 framework testing structure.

### Purpose
The main purpose is to:
- Set up the testing environment
- Define critical system constants
- Load necessary dependencies
- Initialize the Yii2 framework for testing

### Structure and Functions
1. **Constants Definition:**
   - `YII_DEBUG`: Enables debug mode
   - `YII_ENV`: Sets environment as 'test'
   - `YII_APP_BASE_PATH`: Defines application base path

2. **File Loading:**
   - Loads Composer's autoloader
   - Initializes Yii2 framework
   - Loads common bootstrap configurations
   - Loads test-specific configurations

### Output Parameters
- No direct output parameters
- Prepares the environment for test execution
- Ensures all dependencies are available
