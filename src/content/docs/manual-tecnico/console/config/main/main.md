---
title: Carpeta config/main
description: Carpeta config/main.
---

# main.php - Technical Documentation
# Documentación Técnica de main.php

## English

### Overview
The `main.php` file is a core configuration file in Yii2 applications that defines the main application settings, components, and modules. It serves as the primary configuration file that is merged with environment-specific configurations to create the complete application setup.

### Purpose
This file serves to:
- Define core application components
- Configure application modules
- Set up database connections
- Configure mailer settings
- Define application parameters
- Set up routing rules
- Configure application behavior
- Define application aliases

### Directory Structure
- Location: `common/config/main.php`
- Type: PHP Configuration File
- Parent Directory: `common/config/`
- Related Files:
  - `main-local.php` (environment-specific settings)
  - `bootstrap.php` (initialization)
  - `params.php` (application parameters)
  - `test.php` (test environment settings)

### Key Components

#### Application Components
```php
'components' => [
    'db' => [
        'class' => \yii\db\Connection::class,
        'dsn' => 'mysql:host=localhost;dbname=yii2advanced',
        'username' => 'root',
        'password' => '',
        'charset' => 'utf8',
    ],
    'mailer' => [
        'class' => \yii\symfonymailer\Mailer::class,
        'viewPath' => '@common/mail',
    ],
]
```

#### Development Modules
```php
if (!YII_ENV_TEST) {
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => \yii\debug\Module::class,
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => \yii\gii\Module::class,
    ];
}
```

### Usage Examples

#### Configuration Merging
```php
$config = yii\helpers\ArrayHelper::merge(
    require __DIR__ . '/../../common/config/main.php',
    require __DIR__ . '/../../common/config/main-local.php',
    require __DIR__ . '/../config/main.php',
    require __DIR__ . '/../config/main-local.php'
);
```

#### Environment-Specific Settings
```php
return [
    'components' => [
        'request' => [
            'cookieValidationKey' => 'your-secret-key',
        ],
    ],
];
```

## Español

### Descripción General
El archivo `main.php` es un archivo de configuración central en aplicaciones Yii2 que define la configuración principal de la aplicación, componentes y módulos. Sirve como el archivo de configuración principal que se combina con configuraciones específicas del entorno para crear la configuración completa de la aplicación.

### Propósito
Este archivo sirve para:
- Definir componentes principales de la aplicación
- Configurar módulos de la aplicación
- Establecer conexiones a bases de datos
- Configurar ajustes del sistema de correo
- Definir parámetros de la aplicación
- Establecer reglas de enrutamiento
- Configurar el comportamiento de la aplicación
- Definir alias de la aplicación

### Estructura de Directorios
- Ubicación: `common/config/main.php`
- Tipo: Archivo de Configuración PHP
- Directorio Padre: `common/config/`
- Archivos Relacionados:
  - `main-local.php` (configuraciones específicas del entorno)
  - `bootstrap.php` (inicialización)
  - `params.php` (parámetros de la aplicación)
  - `test.php` (configuraciones del entorno de pruebas)

### Componentes Principales

#### Componentes de la Aplicación
```php
'components' => [
    'db' => [
        'class' => \yii\db\Connection::class,
        'dsn' => 'mysql:host=localhost;dbname=yii2advanced',
        'username' => 'root',
        'password' => '',
        'charset' => 'utf8',
    ],
    'mailer' => [
        'class' => \yii\symfonymailer\Mailer::class,
        'viewPath' => '@common/mail',
    ],
]
```

#### Módulos de Desarrollo
```php
if (!YII_ENV_TEST) {
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => \yii\debug\Module::class,
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => \yii\gii\Module::class,
    ];
}
```

### Ejemplos de Uso

#### Combinación de Configuraciones
```php
$config = yii\helpers\ArrayHelper::merge(
    require __DIR__ . '/../../common/config/main.php',
    require __DIR__ . '/../../common/config/main-local.php',
    require __DIR__ . '/../config/main.php',
    require __DIR__ . '/../config/main-local.php'
);
```

#### Configuraciones Específicas del Entorno
```php
return [
    'components' => [
        'request' => [
            'cookieValidationKey' => 'tu-clave-secreta',
        ],
    ],
];
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Uses Yii2 configuration format
- Supports multiple environments
- Handles component configuration
- Manages module settings
- Provides database configuration
- Configures mailer settings
- Supports development tools
- Follows PHP best practices

### Best Practices / Mejores Prácticas
- Keep sensitive data in local configs
- Use environment variables
- Follow Yii2 conventions
- Maintain clean configuration structure
- Document configuration changes
- Use proper security measures
- Keep configurations modular
- Use appropriate validation

### Related Components / Componentes Relacionados
- Yii2 Framework
- Database Configuration
- Mailer Settings
- Development Tools
- Environment Management
- Security Settings
- Application Parameters
- Routing Configuration