---
title: Carpeta config/test
description: Carpeta config/test.
---

# test.php - Technical Documentation
# Documentación Técnica de test.php

## English

### Overview
The `test.php` file is a configuration file in Yii2 applications that defines test-specific settings and components. This file is used when running tests in the application and provides a separate configuration environment for testing purposes.

### Purpose
This file serves to:
- Configure test-specific application settings
- Set up test environment components
- Define test database connections
- Configure test-specific user components
- Set up test-specific asset management
- Define test URL management settings
- Configure test-specific request handling
- Set up test email components

### Directory Structure
- Location: `common/config/test.php`
- Type: PHP Configuration File
- Parent Directory: `common/config/`
- Related Files:
  - `test-local.php` (environment-specific test settings)
  - `main.php` (main application configuration)
  - `bootstrap.php` (application initialization)

### Key Components

#### Common Test Configuration
```php
return [
    'id' => 'app-common-tests',
    'basePath' => dirname(__DIR__),
    'components' => [
        'user' => [
            'class' => \yii\web\User::class,
            'identityClass' => 'common\models\User',
        ],
    ],
];
```

#### Frontend Test Configuration
```php
return [
    'id' => 'app-sennovalab-tests',
    'components' => [
        'assetManager' => [
            'basePath' => __DIR__ . '/../web/assets',
        ],
        'urlManager' => [
            'showScriptName' => true,
        ],
        'request' => [
            'cookieValidationKey' => 'test',
        ],
        'mailer' => [
            'messageClass' => \yii\symfonymailer\Message::class
        ]
    ],
];
```

### Usage Examples

#### Configuration Merging
```php
$config = yii\helpers\ArrayHelper::merge(
    require __DIR__ . '/common/config/main.php',
    require __DIR__ . '/common/config/main-local.php',
    require __DIR__ . '/common/config/test.php',
    require __DIR__ . '/common/config/test-local.php',
    require __DIR__ . '/console/config/main.php',
    require __DIR__ . '/console/config/main-local.php',
    require __DIR__ . '/console/config/test.php',
    require __DIR__ . '/console/config/test-local.php'
);
```

#### Test Database Configuration
```php
return [
    'components' => [
        'db' => [
            'dsn' => 'mysql:host=localhost;dbname=yii2advanced_test',
        ],
    ],
];
```

## Español

### Descripción General
El archivo `test.php` es un archivo de configuración en aplicaciones Yii2 que define configuraciones y componentes específicos para pruebas. Este archivo se utiliza al ejecutar pruebas en la aplicación y proporciona un entorno de configuración separado para fines de prueba.

### Propósito
Este archivo sirve para:
- Configurar ajustes específicos de prueba
- Establecer componentes del entorno de prueba
- Definir conexiones a bases de datos de prueba
- Configurar componentes de usuario para pruebas
- Establecer gestión de activos para pruebas
- Definir configuraciones de gestión de URLs para pruebas
- Configurar manejo de solicitudes para pruebas
- Establecer componentes de correo electrónico para pruebas

### Estructura de Directorios
- Ubicación: `common/config/test.php`
- Tipo: Archivo de Configuración PHP
- Directorio Padre: `common/config/`
- Archivos Relacionados:
  - `test-local.php` (configuraciones de prueba específicas del entorno)
  - `main.php` (configuración principal de la aplicación)
  - `bootstrap.php` (inicialización de la aplicación)

### Componentes Principales

#### Configuración Común de Pruebas
```php
return [
    'id' => 'app-common-tests',
    'basePath' => dirname(__DIR__),
    'components' => [
        'user' => [
            'class' => \yii\web\User::class,
            'identityClass' => 'common\models\User',
        ],
    ],
];
```

#### Configuración de Pruebas Frontend
```php
return [
    'id' => 'app-sennovalab-tests',
    'components' => [
        'assetManager' => [
            'basePath' => __DIR__ . '/../web/assets',
        ],
        'urlManager' => [
            'showScriptName' => true,
        ],
        'request' => [
            'cookieValidationKey' => 'test',
        ],
        'mailer' => [
            'messageClass' => \yii\symfonymailer\Message::class
        ]
    ],
];
```

### Ejemplos de Uso

#### Combinación de Configuraciones
```php
$config = yii\helpers\ArrayHelper::merge(
    require __DIR__ . '/common/config/main.php',
    require __DIR__ . '/common/config/main-local.php',
    require __DIR__ . '/common/config/test.php',
    require __DIR__ . '/common/config/test-local.php',
    require __DIR__ . '/console/config/main.php',
    require __DIR__ . '/console/config/main-local.php',
    require __DIR__ . '/console/config/test.php',
    require __DIR__ . '/console/config/test-local.php'
);
```

#### Configuración de Base de Datos de Pruebas
```php
return [
    'components' => [
        'db' => [
            'dsn' => 'mysql:host=localhost;dbname=yii2advanced_test',
        ],
    ],
];
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Uses Yii2 configuration system
- Supports multiple test environments
- Handles component configuration
- Manages test-specific settings
- Provides database configurations
- Supports user authentication
- Follows PHP best practices
- Enables test isolation

### Best Practices / Mejores Prácticas
- Keep test configurations separate
- Use descriptive component names
- Follow Yii2 conventions
- Maintain clean configuration structure
- Document test-specific settings
- Use proper validation
- Keep configurations organized
- Use appropriate data types

### Related Components / Componentes Relacionados
- Yii2 Framework
- Test Environment
- Database Configuration
- User Management
- Asset Management
- URL Management
- Request Handling
- Email Components