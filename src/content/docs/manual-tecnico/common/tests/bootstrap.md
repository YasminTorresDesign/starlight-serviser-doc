---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `test\unit`
---

## Documentación Técnica del Archivo `_bootstrap.php`

## Español

### ¿Para qué es?
El archivo `_bootstrap.php` es un script de inicialización para el entorno de pruebas de la aplicación Yii2. Configura las constantes necesarias y carga las dependencias requeridas para ejecutar las pruebas automatizadas.

### Definición de la Carpeta
**Ubicación:** `common/tests/_bootstrap.php`
**Contexto:** Se encuentra en la carpeta de pruebas común, inicializando el entorno de testing compartido.

### Propósito
- Inicializar el entorno de pruebas
- Definir constantes fundamentales
- Cargar autoloader de Composer
- Incluir el framework Yii2
- Configurar el bootstrap común

### Estructura del Código
```php
// Definición de constantes
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'test');
defined('YII_APP_BASE_PATH') or define('YII_APP_BASE_PATH', __DIR__.'/../../');

// Carga de dependencias
require_once __DIR__ .  '/../../vendor/autoload.php';
require_once __DIR__ .  '/../../vendor/yiisoft/yii2/Yii.php';
require __DIR__ . '/../config/bootstrap.php';
```

---

## Technical Documentation - `_bootstrap.php` File

## English

### What is it for?
The `_bootstrap.php` file is an initialization script for the Yii2 application's testing environment. It configures necessary constants and loads required dependencies for running automated tests.

### Folder Definition
**Location:** `common/tests/_bootstrap.php`
**Context:** Located in the common tests folder, initializing the shared testing environment.

### Purpose
- Initialize testing environment
- Define fundamental constants
- Load Composer autoloader
- Include Yii2 framework
- Configure common bootstrap

### Code Structure
```php
// Constants definition
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'test');
defined('YII_APP_BASE_PATH') or define('YII_APP_BASE_PATH', __DIR__.'/../../');

// Dependencies loading
require_once __DIR__ .  '/../../vendor/autoload.php';
require_once __DIR__ .  '/../../vendor/yiisoft/yii2/Yii.php';
require __DIR__ . '/../config/bootstrap.php';
```

### Componentes Principales / Main Components

#### Español
1. **Constantes del Sistema**
   - YII_DEBUG: Modo de depuración
   - YII_ENV: Entorno de pruebas
   - YII_APP_BASE_PATH: Ruta base de la aplicación

2. **Carga de Archivos**
   - Autoloader de Composer
   - Framework Yii2
   - Bootstrap común

#### English
1. **System Constants**
   - YII_DEBUG: Debug mode
   - YII_ENV: Test environment
   - YII_APP_BASE_PATH: Application base path

2. **File Loading**
   - Composer autoloader
   - Yii2 framework
   - Common bootstrap

### Consideraciones de Uso / Usage Considerations

#### Español
1. **Configuración**
   - Asegurar rutas correctas
   - Verificar permisos de archivos
   - Mantener consistencia en entornos

2. **Mantenimiento**
   - Actualizar según cambios en dependencias
   - Verificar compatibilidad de versiones
   - Mantener sincronización con producción

#### English
1. **Configuration**
   - Ensure correct paths
   - Verify file permissions
   - Maintain environment consistency

2. **Maintenance**
   - Update according to dependency changes
   - Verify version compatibility
   - Maintain synchronization with production

### Notas Importantes / Important Notes

#### Español
- Archivo crítico para pruebas
- Requiere configuración correcta de paths
- Fundamental para CI/CD
- Base para todas las pruebas automatizadas

#### English
- Critical file for testing
- Requires correct path configuration
- Fundamental for CI/CD
- Base for all automated tests

Esta documentación proporciona una visión completa del archivo de inicialización de pruebas, destacando su importancia en el proceso de testing de la aplicación.
