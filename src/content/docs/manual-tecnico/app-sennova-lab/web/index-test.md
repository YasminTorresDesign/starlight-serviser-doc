---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `index-test.php`
---

## Documentación Técnica del Archivo `index-test.php` en `/appSennovalab/web/`

## Español

### ¿Para qué es?
El archivo `index-test.php` es el punto de entrada para el entorno de pruebas de la aplicación SennovaLab. Configura y ejecuta la aplicación en modo de prueba, permitiendo realizar pruebas funcionales y de aceptación sin afectar el entorno de producción.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/web/`, directorio público de la aplicación. Esta ubicación es crucial para el acceso a pruebas web y sigue las convenciones de Yii2 para entornos de testing.

### Propósito
El propósito principal es:
- Inicializar el entorno de pruebas
- Configurar parámetros de testing
- Cargar configuraciones específicas de prueba
- Proteger el acceso al entorno de pruebas
- Facilitar pruebas automatizadas

### Funciones
- **Componentes Principales**:
  - Control de acceso IP
  - Configuración de debug
  - Carga de dependencias
  - Inicialización de la aplicación
  - Gestión de configuraciones

### Características Técnicas / Technical Features
- Control de acceso por IP
- Modo debug habilitado
- Configuración específica de pruebas
- Carga de configuraciones en cascada
- Sistema de autoloading
- Gestión de dependencias
- Manejo de errores personalizado

### Configuraciones de Prueba / Test Configurations
1. **Entorno**:
   - Debug activado
   - Modo test
   - Configuraciones locales
   - Logs específicos

2. **Seguridad**:
   - Acceso restringido por IP
   - Validaciones de seguridad
   - Protección de datos
   - Control de acceso

3. **Dependencias**:
   - Autoloader Composer
   - Framework Yii2
   - Configuraciones comunes
   - Bootstrapping
---

## English

### What is it for?
The `index-test.php` file is the entry point for SennovaLab's testing environment. It configures and runs the application in test mode, allowing functional and acceptance testing without affecting the production environment.

### Folder Definition
Located in `/appSennovalab/web/`, application's public directory. This location is crucial for web test access and follows Yii2 conventions for testing environments.

### Purpose
The main purpose is to:
- Initialize testing environment
- Configure testing parameters
- Load test-specific configurations
- Protect test environment access
- Facilitate automated testing

### Functions
- **Main Components**:
  - IP access control
  - Debug configuration
  - Dependencies loading
  - Application initialization
  - Configuration management

```php:appSennovalab/web/index-test.php
<?php

// Control de acceso por IP / IP access control
if (!in_array(@$_SERVER['REMOTE_ADDR'], ['127.0.0.1', '::1'])) {
    die('You are not allowed to access this file.');
}

// Configuración del entorno / Environment configuration
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'test');

// Carga de dependencias / Dependencies loading
require __DIR__ . '/../../vendor/autoload.php';
require __DIR__ . '/../../vendor/yiisoft/yii2/Yii.php';
require __DIR__ . '/../../common/config/bootstrap.php';
require __DIR__ . '/../config/bootstrap.php';

// Configuración de la aplicación / Application configuration
$config = yii\helpers\ArrayHelper::merge(
    require __DIR__ . '/../../common/config/main.php',
    require __DIR__ . '/../../common/config/main-local.php',
    require __DIR__ . '/../../common/config/test.php',
    require __DIR__ . '/../../common/config/test-local.php',
    require __DIR__ . '/../config/main.php',
    require __DIR__ . '/../config/main-local.php',
    require __DIR__ . '/../config/test.php',
    require __DIR__ . '/../config/test-local.php'
);

// Inicialización y ejecución / Initialization and execution
(new yii\web\Application($config))->run();
```


