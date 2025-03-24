---
title: Carpeta config/params
description: Carpeta config/params.
---

# params.php - Technical Documentation
# Documentación Técnica de params.php

## English

### Overview
The `params.php` file is a configuration file in Yii2 applications that defines global application parameters. These parameters are accessible throughout the application and are commonly used for storing application-wide settings, email configurations, and other global constants.

### Purpose
This file serves to:
- Define global application parameters
- Configure email settings
- Set up user-related parameters
- Store application-wide constants
- Configure service-specific settings
- Define environment-specific values
- Manage application-wide configurations
- Store reusable application values

### Directory Structure
- Location: `common/config/params.php`
- Type: PHP Configuration File
- Parent Directory: `common/config/`
- Related Files:
  - `params-local.php` (environment-specific parameters)
  - `main.php` (main application configuration)
  - `bootstrap.php` (application initialization)

### Key Components

#### Common Parameters
```php
return [
    'adminEmail' => 'admin@example.com',
    'supportEmail' => 'support@example.com',
    'senderEmail' => 'noreply@example.com',
    'senderName' => 'Example.com mailer',
    'user.passwordResetTokenExpire' => 3600,
    'user.passwordMinLength' => 8,
    'serviserEmail' => 'labserviser@gmail.com',
];
```

#### Environment-Specific Parameters
```php
return [
    'adminEmail' => 'miguel.carrillo.m@hotmail.com',
    'senderName' => 'Formulario de contacto SennovaLab',
    'serviserEmail' => 'labserviser@gmail.com',
];
```

### Usage Examples

#### Parameter Merging
```php
$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);
```

#### Accessing Parameters
```php
// In controllers or views
$adminEmail = Yii::$app->params['adminEmail'];
$passwordMinLength = Yii::$app->params['user.passwordMinLength'];
```

## Español

### Descripción General
El archivo `params.php` es un archivo de configuración en aplicaciones Yii2 que define parámetros globales de la aplicación. Estos parámetros son accesibles en toda la aplicación y se utilizan comúnmente para almacenar configuraciones de aplicación, configuraciones de correo electrónico y otras constantes globales.

### Propósito
Este archivo sirve para:
- Definir parámetros globales de la aplicación
- Configurar ajustes de correo electrónico
- Establecer parámetros relacionados con usuarios
- Almacenar constantes de aplicación
- Configurar ajustes específicos de servicios
- Definir valores específicos del entorno
- Gestionar configuraciones de aplicación
- Almacenar valores reutilizables

### Estructura de Directorios
- Ubicación: `common/config/params.php`
- Tipo: Archivo de Configuración PHP
- Directorio Padre: `common/config/`
- Archivos Relacionados:
  - `params-local.php` (parámetros específicos del entorno)
  - `main.php` (configuración principal de la aplicación)
  - `bootstrap.php` (inicialización de la aplicación)

### Componentes Principales

#### Parámetros Comunes
```php
return [
    'adminEmail' => 'admin@example.com',
    'supportEmail' => 'support@example.com',
    'senderEmail' => 'noreply@example.com',
    'senderName' => 'Example.com mailer',
    'user.passwordResetTokenExpire' => 3600,
    'user.passwordMinLength' => 8,
    'serviserEmail' => 'labserviser@gmail.com',
];
```

#### Parámetros Específicos del Entorno
```php
return [
    'adminEmail' => 'miguel.carrillo.m@hotmail.com',
    'senderName' => 'Formulario de contacto SennovaLab',
    'serviserEmail' => 'labserviser@gmail.com',
];
```

### Ejemplos de Uso

#### Combinación de Parámetros
```php
$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);
```

#### Acceso a Parámetros
```php
// En controladores o vistas
$adminEmail = Yii::$app->params['adminEmail'];
$passwordMinLength = Yii::$app->params['user.passwordMinLength'];
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Uses Yii2 parameter system
- Supports multiple environments
- Handles parameter merging
- Manages global settings
- Provides email configurations
- Supports user settings
- Follows PHP best practices
- Enables environment isolation

### Best Practices / Mejores Prácticas
- Keep sensitive data in local configs
- Use descriptive parameter names
- Follow Yii2 conventions
- Maintain clean parameter structure
- Document parameter purposes
- Use proper validation
- Keep parameters organized
- Use appropriate data types

### Related Components / Componentes Relacionados
- Yii2 Framework
- Email Configuration
- User Management
- Environment Settings
- Application Parameters
- Security Settings
- Service Configuration
- Global Constants