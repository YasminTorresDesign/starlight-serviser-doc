---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

# Documentación Técnica del Archivo `test.php`

## Español

### ¿Para qué es?
El archivo `test.php` es un archivo de configuración principal para el entorno de pruebas en la aplicación Yii2. Define la configuración base común para todas las pruebas automatizadas del sistema.

### Definición de la Carpeta
**Ubicación:** `common/config/test.php`
**Contexto:** Se encuentra en la carpeta de configuración común, estableciendo parámetros compartidos para pruebas en todas las aplicaciones.

### Propósito
- Definir configuración base para pruebas
- Establecer la identidad del usuario para pruebas
- Configurar componentes comunes de prueba
- Mantener consistencia en el entorno de testing

### Estructura de Configuración
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

---

# Technical Documentation - `test.php` File

## English

### What is it for?
The `test.php` file is a main configuration file for the testing environment in the Yii2 application. It defines the common base configuration for all automated system tests.

### Folder Definition
**Location:** `common/config/test.php`
**Context:** Located in the common configuration folder, establishing shared parameters for testing across all applications.

### Purpose
- Define base configuration for tests
- Establish user identity for testing
- Configure common test components
- Maintain consistency in testing environment

### Configuration Structure
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

### Componentes Principales / Main Components

#### Español
1. **Identificación de la Aplicación**
   - ID: 'app-common-tests'
   - Define el identificador único para pruebas

2. **Configuración de Usuario**
   - Clase: yii\web\User
   - Modelo de identidad: common\models\User
   - Gestión de autenticación en pruebas

#### English
1. **Application Identification**
   - ID: 'app-common-tests'
   - Defines unique identifier for tests

2. **User Configuration**
   - Class: yii\web\User
   - Identity Model: common\models\User
   - Authentication management in tests

### Consideraciones de Uso / Usage Considerations

#### Español
1. **Implementación**
   - Base para todas las pruebas
   - Configuración extendible
   - Separación de entornos
   - Facilita pruebas unitarias

2. **Mantenimiento**
   - Actualizar según cambios en modelos
   - Mantener sincronizado con producción
   - Documentar modificaciones
   - Verificar compatibilidad

#### English
1. **Implementation**
   - Base for all tests
   - Extendable configuration
   - Environment separation
   - Facilitates unit testing

2. **Maintenance**
   - Update according to model changes
   - Keep synchronized with production
   - Document modifications
   - Verify compatibility

