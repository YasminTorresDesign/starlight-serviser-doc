---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

## Documentación Técnica del Archivo `main.php`

## Español

### ¿Para qué es?
El archivo `main.php` es el archivo de configuración principal común para todas las aplicaciones del sistema. Define configuraciones globales, componentes compartidos y parámetros base del framework Yii2.

### Definición de la Carpeta
**Ubicación:** `common/config/main.php`
**Contexto:** Se encuentra en la carpeta de configuración común, aplicando configuraciones compartidas entre todas las aplicaciones.

### Propósito
- Establecer configuraciones globales del sistema
- Definir componentes compartidos
- Configurar internacionalización
- Establecer control de acceso RBAC
- Definir alias de rutas comunes

### Configuraciones Principales

1. **Configuraciones Base**
```php
'timeZone' => 'America/Bogota',
'sourceLanguage' => 'en-US',
'language' => 'es-CO',
```

2. **Alias del Sistema**
```php
'aliases' => [
    '@bower' => '@vendor/bower-asset',
    '@npm'   => '@vendor/npm-asset',
],
```

3. **Componentes**
```php
'components' => [
    'cache' => [
        'class' => \yii\caching\FileCache::class,
    ],
    'i18n' => [...],
    'authManager' => [...],
]
```

---

## Technical Documentation - `main.php` File

## English

### What is it for?
The `main.php` file is the common main configuration file for all system applications. It defines global configurations, shared components, and base parameters for the Yii2 framework.

### Folder Definition
**Location:** `common/config/main.php`
**Context:** Located in the common configuration folder, applying shared configurations across all applications.

### Purpose
- Establish global system configurations
- Define shared components
- Configure internationalization
- Set up RBAC access control
- Define common path aliases

### Main Configurations

1. **Base Settings**
```php
'timeZone' => 'America/Bogota',
'sourceLanguage' => 'en-US',
'language' => 'es-CO',
```

2. **System Aliases**
```php
'aliases' => [
    '@bower' => '@vendor/bower-asset',
    '@npm'   => '@vendor/npm-asset',
],
```

3. **Components**
```php
'components' => [
    'cache' => [
        'class' => \yii\caching\FileCache::class,
    ],
    'i18n' => [...],
    'authManager' => [...],
]
```

### Características Especiales / Special Features

#### Español
1. **Internacionalización (i18n)**
   - Configuración de idiomas
   - Rutas de archivos de traducción
   - Mapeo de mensajes

2. **Sistema de Caché**
   - Implementación de FileCache
   - Configuración de almacenamiento

3. **Control de Acceso (RBAC)**
   - Gestor de autenticación basado en BD
   - Soporte para jerarquías de permisos

#### English
1. **Internationalization (i18n)**
   - Language configuration
   - Translation file paths
   - Message mapping

2. **Cache System**
   - FileCache implementation
   - Storage configuration

3. **Access Control (RBAC)**
   - DB-based authentication manager
   - Permission hierarchy support

### Notas de Implementación / Implementation Notes

#### Español
- Configuración de zona horaria para Colombia
- Soporte multiidioma (español colombiano por defecto)
- Sistema de caché basado en archivos
- Gestión de permisos mediante base de datos

#### English
- Timezone configuration for Colombia
- Multilanguage support (Colombian Spanish by default)
- File-based cache system
- Database-driven permission management

