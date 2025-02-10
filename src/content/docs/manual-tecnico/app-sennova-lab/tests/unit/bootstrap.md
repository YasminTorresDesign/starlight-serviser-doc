---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `_bootstrap.php`
---

## Documentación Técnica del Archivo `_bootstrap.php` en la Carpeta appSennovaLab/tests/unit

### Español

### ¿Para qué es?
El archivo `_bootstrap.php` es un archivo de inicialización crucial en el entorno de pruebas de una aplicación Yii2. Se encarga de configurar el entorno necesario para ejecutar las pruebas de la aplicación.

### Definición de la Carpeta
Este archivo se encuentra en la carpeta `tests` de la aplicación Sennovalab, específicamente en `appSennovalab/tests/`. Esta carpeta contiene todos los archivos relacionados con las pruebas automatizadas de la aplicación.

### Propósito
El propósito principal es establecer las constantes y cargar las dependencias necesarias para ejecutar las pruebas de la aplicación. Define el entorno de pruebas y asegura que todos los componentes necesarios estén disponibles.

### Funciones
- **Definición de constantes de entorno**:
  - `YII_DEBUG`: Habilita el modo de depuración
  - `YII_ENV`: Establece el entorno como 'test'
  - `YII_APP_BASE_PATH`: Define la ruta base de la aplicación

- **Carga de archivos esenciales**:
  - Carga el autoloader de Composer
  - Inicializa el framework Yii2
  - Carga las configuraciones de bootstrap comunes y específicas

---

### English

### What is it for?
The `_bootstrap.php` file is a crucial initialization file in the testing environment of a Yii2 application. It is responsible for setting up the necessary environment to run application tests.

### Folder Definition
This file is located in the `tests` folder of the Sennovalab application, specifically in `appSennovalab/tests/`. This folder contains all files related to automated testing of the application.

### Purpose
The main purpose is to establish constants and load the necessary dependencies to run application tests. It defines the testing environment and ensures that all required components are available.

### Functions
- **Environment Constants Definition**:
  - `YII_DEBUG`: Enables debug mode
  - `YII_ENV`: Sets the environment as 'test'
  - `YII_APP_BASE_PATH`: Defines the application base path

- **Essential Files Loading**:
  - Loads Composer's autoloader
  - Initializes Yii2 framework
  - Loads common and specific bootstrap configurations

```php
// Ejemplo de código comentado / Code example with comments
<?php

// Define las constantes de depuración y entorno si no están definidas
// Defines debug and environment constants if not defined
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'test');
defined('YII_APP_BASE_PATH') or define('YII_APP_BASE_PATH', __DIR__.'/../../');

// Carga las dependencias necesarias / Loads necessary dependencies
require_once YII_APP_BASE_PATH . '/vendor/autoload.php';
require_once YII_APP_BASE_PATH . '/vendor/yiisoft/yii2/Yii.php';
require_once YII_APP_BASE_PATH . '/common/config/bootstrap.php';
require_once __DIR__ . '/../config/bootstrap.php';
```