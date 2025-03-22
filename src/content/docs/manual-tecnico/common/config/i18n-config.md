---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

## Documentación Técnica del Archivo `i18n-config.php`

## Español

### ¿Para qué es?
El archivo `i18n-config.php` es un archivo de configuración para la internacionalización (i18n) en la aplicación, que define cómo se manejan las traducciones y los mensajes en diferentes idiomas.

### Definición de la Carpeta
**Ubicación:** `common/config/i18n-config.php`
**Contexto:** Se encuentra en la carpeta de configuración común, proporcionando configuraciones de internacionalización para toda la aplicación.

### Propósito
- Configurar el sistema de traducciones
- Definir idiomas soportados
- Establecer rutas de archivos de mensajes
- Configurar el comportamiento de traducción
- Gestionar la extracción de mensajes

### Configuraciones Principales

1. **Configuración Básica**
```php
[
    'sourcePath' => __DIR__ . DIRECTORY_SEPARATOR . '..',
    'languages' => ['es-CO'],
    'translator' => ['\Yii::t', 'Yii::t'],
]
```

2. **Gestión de Archivos**
```php
[
    'only' => ['*.php'],
    'except' => [
        '.*',
        '/.*',
        '/messages',
        '/tests',
        '/runtime',
        '/vendor',
        '/BaseYii.php',
    ]
]
```

---

## Technical Documentation - `i18n-config.php` File

## English

### What is it for?
The `i18n-config.php` file is a configuration file for internationalization (i18n) in the application, defining how translations and messages in different languages are handled.

### Folder Definition
**Location:** `common/config/i18n-config.php`
**Context:** Located in the common configuration folder, providing internationalization settings for the entire application.

### Purpose
- Configure the translation system
- Define supported languages
- Establish message file paths
- Configure translation behavior
- Manage message extraction

### Main Configurations

1. **Basic Configuration**
```php
[
    'sourcePath' => __DIR__ . DIRECTORY_SEPARATOR . '..',
    'languages' => ['es-CO'],
    'translator' => ['\Yii::t', 'Yii::t'],
]
```

2. **File Management**
```php
[
    'only' => ['*.php'],
    'except' => [
        '.*',
        '/.*',
        '/messages',
        '/tests',
        '/runtime',
        '/vendor',
        '/BaseYii.php',
    ]
]
```

### Características Especiales / Special Features

#### Español
1. **Opciones de Formato**
   - Formato PHP para archivos de mensajes
   - Soporte para base de datos (comentado)
   - Soporte para archivos PO gettext (comentado)

2. **Control de Mensajes**
   - Ordenamiento de mensajes
   - Marcado de mensajes no utilizados
   - Eliminación de mensajes obsoletos

#### English
1. **Format Options**
   - PHP format for message files
   - Database support (commented)
   - PO gettext file support (commented)

2. **Message Control**
   - Message sorting
   - Unused message marking
   - Obsolete message removal

### Ejemplo de Uso / Usage Example

```php
// Español
return [
    'sourcePath' => __DIR__ . '/..',
    'languages' => ['es-CO'],
    'format' => 'php',
    'messagePath' => __DIR__ . '/../messages/',
];

// English
return [
    'sourcePath' => __DIR__ . '/..',
    'languages' => ['es-CO'],
    'format' => 'php',
    'messagePath' => __DIR__ . '/../messages/',
];
```

### Notas de Configuración / Configuration Notes

#### Español
- Soporta múltiples formatos de salida
- Permite personalización de tablas de base de datos
- Incluye opciones para manejo de archivos PO
- Configurable para diferentes entornos
- Admite múltiples idiomas

#### English
- Supports multiple output formats
- Allows database table customization
- Includes PO file handling options
- Configurable for different environments
- Supports multiple languages


