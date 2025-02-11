---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `index.php`
---


## Documentación Técnica del Archivo `index.php` en `/appSennovalab/web/`

## Español

### ¿Para qué es?
El archivo `index.php` es el punto de entrada principal de la aplicación web SennovaLab. Actúa como el controlador frontal que inicializa y ejecuta la aplicación Yii2, gestionando todas las solicitudes web entrantes.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/web/`, directorio público principal de la aplicación. Esta ubicación es fundamental ya que es el único directorio accesible directamente desde la web en la arquitectura Yii2.

### Propósito
El propósito principal es:
- Inicializar la aplicación web
- Configurar el entorno de ejecución
- Cargar dependencias necesarias
- Gestionar la configuración de la aplicación
- Ejecutar el ciclo de solicitud-respuesta

### Funciones
- **Componentes Principales**:
  - Definición del entorno
  - Carga de autoloader
  - Inicialización de Yii2
  - Carga de configuraciones
  - Ejecución de la aplicación

### Características Técnicas / Technical Features
- Configuración del modo debug
- Sistema de autoloading
- Gestión de dependencias
- Fusión de configuraciones
- Inicialización del framework
- Manejo de errores
- Control de entorno

### Componentes del Sistema / System Components
1. **Inicialización**:
   - Definiciones de constantes
   - Carga de Composer
   - Bootstrap de la aplicación
   - Configuración del entorno

2. **Configuración**:
   - Configuraciones comunes
   - Configuraciones locales
   - Parámetros de la aplicación
   - Variables de entorno

3. **Ejecución**:
   - Creación de la aplicación
   - Procesamiento de solicitudes
   - Manejo de respuestas
   - Gestión de errores

### Flujo de Ejecución / Execution Flow
1. Definición de constantes de entorno
2. Carga del autoloader de Composer
3. Inclusión del framework Yii2
4. Carga de configuraciones bootstrap
5. Fusión de configuraciones
6. Creación de la instancia de aplicación
7. Ejecución de la aplicación
---

## English

### What is it for?
The `index.php` file is the main entry point of the SennovaLab web application. It acts as the front controller that initializes and runs the Yii2 application, managing all incoming web requests.

### Folder Definition
Located in `/appSennovalab/web/`, the application's main public directory. This location is fundamental as it's the only directory directly accessible from the web in Yii2's architecture.

### Purpose
The main purpose is to:
- Initialize the web application
- Configure the execution environment
- Load necessary dependencies
- Manage application configuration
- Execute the request-response cycle

### Functions
- **Main Components**:
  - Environment definition
  - Autoloader loading
  - Yii2 initialization
  - Configuration loading
  - Application execution

```php:appSennovalab/web/index.php
<?php

// Definición del entorno / Environment definition
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');

// Carga de dependencias / Dependencies loading
require __DIR__ . '/../../vendor/autoload.php';
require __DIR__ . '/../../vendor/yiisoft/yii2/Yii.php';
require __DIR__ . '/../../common/config/bootstrap.php';
require __DIR__ . '/../config/bootstrap.php';

// Configuración de la aplicación / Application configuration
$config = yii\helpers\ArrayHelper::merge(
    require __DIR__ . '/../../common/config/main.php',
    require __DIR__ . '/../../common/config/main-local.php',
    require __DIR__ . '/../config/main.php',
    require __DIR__ . '/../config/main-local.php'
);

// Inicialización y ejecución / Initialization and execution
(new yii\web\Application($config))->run();
```



