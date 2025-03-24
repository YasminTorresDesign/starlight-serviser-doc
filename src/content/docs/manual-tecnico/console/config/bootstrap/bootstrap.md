---
title: Carpeta config/bootstrap
description: Carpeta config/bootstrap.
---


# bootstrap.php - Technical Documentation
# Documentación Técnica de bootstrap.php

## English

### Overview
The `bootstrap.php` file is a crucial initialization file in Yii2 applications that sets up the basic environment and loads essential components. It's responsible for defining constants, loading required files, and preparing the application for execution.

### Purpose
This file serves to:
- Define application environment constants
- Load core Yii2 framework files
- Initialize application configuration
- Set up autoloading
- Configure environment-specific settings
- Prepare the application for execution

### Directory Structure
- Location: `common/config/bootstrap.php`
- Type: PHP Configuration File
- Parent Directory: `common/config/`
- Related Files:
  - `vendor/autoload.php`
  - `vendor/yiisoft/yii2/Yii.php`
  - `common/config/main.php`
  - `common/config/main-local.php`

### Key Components

#### Environment Constants
```php
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');
defined('YII_APP_BASE_PATH') or define('YII_APP_BASE_PATH', __DIR__.'/../../');
```

#### Required Files
```php
require_once YII_APP_BASE_PATH . '/vendor/autoload.php';
require_once YII_APP_BASE_PATH . '/vendor/yiisoft/yii2/Yii.php';
require_once YII_APP_BASE_PATH . '/common/config/bootstrap.php';
```

### Usage Examples

#### Application Configuration
```php
$config = yii\helpers\ArrayHelper::merge(
    require __DIR__ . '/../../common/config/main.php',
    require __DIR__ . '/../../common/config/main-local.php',
    require __DIR__ . '/../config/main.php',
    require __DIR__ . '/../config/main-local.php'
);
```

#### Application Initialization
```php
$application = new yii\console\Application($config);
$exitCode = $application->run();
exit($exitCode);
```

## Español

### Descripción General
El archivo `bootstrap.php` es un archivo de inicialización crucial en aplicaciones Yii2 que configura el entorno básico y carga componentes esenciales. Es responsable de definir constantes, cargar archivos requeridos y preparar la aplicación para su ejecución.

### Propósito
Este archivo sirve para:
- Definir constantes del entorno de la aplicación
- Cargar archivos principales del framework Yii2
- Inicializar la configuración de la aplicación
- Configurar el autoloading
- Establecer configuraciones específicas del entorno
- Preparar la aplicación para su ejecución

### Estructura de Directorios
- Ubicación: `common/config/bootstrap.php`
- Tipo: Archivo de Configuración PHP
- Directorio Padre: `common/config/`
- Archivos Relacionados:
  - `vendor/autoload.php`
  - `vendor/yiisoft/yii2/Yii.php`
  - `common/config/main.php`
  - `common/config/main-local.php`

### Componentes Principales

#### Constantes de Entorno
```php
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');
defined('YII_APP_BASE_PATH') or define('YII_APP_BASE_PATH', __DIR__.'/../../');
```

#### Archivos Requeridos
```php
require_once YII_APP_BASE_PATH . '/vendor/autoload.php';
require_once YII_APP_BASE_PATH . '/vendor/yiisoft/yii2/Yii.php';
require_once YII_APP_BASE_PATH . '/common/config/bootstrap.php';
```

### Ejemplos de Uso

#### Configuración de la Aplicación
```php
$config = yii\helpers\ArrayHelper::merge(
    require __DIR__ . '/../../common/config/main.php',
    require __DIR__ . '/../../common/config/main-local.php',
    require __DIR__ . '/../config/main.php',
    require __DIR__ . '/../config/main-local.php'
);
```

#### Inicialización de la Aplicación
```php
$application = new yii\console\Application($config);
$exitCode = $application->run();
exit($exitCode);
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Uses Yii2 framework conventions
- Supports multiple environments
- Handles autoloading
- Manages configuration merging
- Provides environment isolation
- Supports debugging modes
- Follows PHP best practices

### Best Practices / Mejores Prácticas
- Keep environment-specific settings separate
- Use constants for configuration
- Follow Yii2 conventions
- Maintain clean code structure
- Document configuration changes
- Use proper error handling
- Keep sensitive data secure

### Related Components / Componentes Relacionados
- Yii2 Framework
- Application Configuration
- Environment Management
- Autoloading System
- Error Handling
- Debug Mode
- Development Workflow