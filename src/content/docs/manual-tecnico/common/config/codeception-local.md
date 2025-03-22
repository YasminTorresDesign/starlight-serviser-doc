---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

## Documentación Técnica del Archivo `codeception-local.php`

## Español

### ¿Para qué es?
El archivo `codeception-local.php` es un archivo de configuración local para pruebas usando Codeception en el framework Yii2. Define configuraciones específicas para el entorno de pruebas local.

### Definición de la Carpeta
**Ubicación:** `common/config/codeception-local.php`
**Contexto:** Se encuentra en la carpeta de configuración común, proporcionando configuraciones de prueba compartidas entre todas las aplicaciones.

### Propósito
- Configurar el entorno de pruebas local
- Fusionar múltiples configuraciones
- Establecer parámetros de seguridad
- Definir componentes específicos para pruebas
- Mantener configuraciones sensibles fuera del control de versiones

### Estructura Principal
```php
return yii\helpers\ArrayHelper::merge(
    require __DIR__ . '/main.php',
    require __DIR__ . '/main-local.php',
    require __DIR__ . '/test.php',
    require __DIR__ . '/test-local.php',
    [
        'components' => [
            'request' => [
                'cookieValidationKey' => '8pmKpfUlLIkE_uWyUplkUUZVI_4xHFND',
            ],
        ],
    ]
);
```

---

## Technical Documentation - `codeception-local.php` File

## English

### What is it for?
The `codeception-local.php` file is a local configuration file for testing using Codeception in the Yii2 framework. It defines specific configurations for the local testing environment.

### Folder Definition
**Location:** `common/config/codeception-local.php`
**Context:** Located in the common configuration folder, providing shared test configurations across all applications.

### Purpose
- Configure local testing environment
- Merge multiple configurations
- Set security parameters
- Define test-specific components
- Keep sensitive configurations out of version control

### Main Structure
```php
return yii\helpers\ArrayHelper::merge(
    require __DIR__ . '/main.php',
    require __DIR__ . '/main-local.php',
    require __DIR__ . '/test.php',
    require __DIR__ . '/test-local.php',
    [
        'components' => [
            'request' => [
                'cookieValidationKey' => '8pmKpfUlLIkE_uWyUplkUUZVI_4xHFND',
            ],
        ],
    ]
);
```

### Características Especiales / Special Features

#### Español
1. **Fusión de Configuraciones**
   - Configuración principal (`main.php`)
   - Configuración local (`main-local.php`)
   - Configuración de pruebas (`test.php`)
   - Configuración local de pruebas (`test-local.php`)

2. **Componentes Configurados**
   - Componente de solicitud (request)
   - Clave de validación de cookies
   - Configuraciones específicas de prueba

#### English
1. **Configuration Merging**
   - Main configuration (`main.php`)
   - Local configuration (`main-local.php`)
   - Test configuration (`test.php`)
   - Local test configuration (`test-local.php`)

2. **Configured Components**
   - Request component
   - Cookie validation key
   - Test-specific configurations

### Notas de Seguridad / Security Notes

#### Español
- La clave de validación de cookies debe mantenerse segura
- El archivo no debe incluirse en el control de versiones
- Las configuraciones sensibles deben estar solo en archivos locales
- Se recomienda usar diferentes claves para diferentes entornos

#### English
- Cookie validation key must be kept secure
- File should not be included in version control
- Sensitive configurations should only be in local files
- Different keys recommended for different environments


