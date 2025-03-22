---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

## Documentación Técnica del Archivo `bootstrap.php`

## Español

### ¿Para qué es?
El archivo `bootstrap.php` es un script de configuración inicial que define los alias de rutas fundamentales para el sistema multiapp de Yii2, permitiendo la navegación entre diferentes componentes de la aplicación.

### Definición de la Carpeta
**Ubicación:** `common/config/bootstrap.php`
**Contexto:** Se encuentra en la carpeta de configuración común, siendo uno de los primeros archivos en cargarse durante el inicio de la aplicación.

### Propósito
- Definir alias de rutas del sistema
- Establecer la estructura de directorios
- Facilitar la navegación entre aplicaciones
- Configurar rutas base del framework
- Mantener consistencia en las referencias de archivos

### Estructura de Alias
```php
Yii::setAlias('@common', dirname(__DIR__));
Yii::setAlias('@appSennovalab', dirname(dirname(__DIR__)) . '/appSennovalab');
Yii::setAlias('@appServiser', dirname(dirname(__DIR__)) . '/appServiser');
Yii::setAlias('@appServiserAdmin', dirname(dirname(__DIR__)) . '/appServiserAdmin');
Yii::setAlias('@console', dirname(dirname(__DIR__)) . '/console');
```

---

## Technical Documentation - `bootstrap.php` File

## English

### What is it for?
The `bootstrap.php` file is an initial configuration script that defines fundamental path aliases for the Yii2 multi-app system, enabling navigation between different application components.

### Folder Definition
**Location:** `common/config/bootstrap.php`
**Context:** Located in the common configuration folder, being one of the first files loaded during application startup.

### Purpose
- Define system path aliases
- Establish directory structure
- Facilitate navigation between applications
- Configure framework base paths
- Maintain consistency in file references

### Alias Structure
```php
Yii::setAlias('@common', dirname(__DIR__));
Yii::setAlias('@appSennovalab', dirname(dirname(__DIR__)) . '/appSennovalab');
Yii::setAlias('@appServiser', dirname(dirname(__DIR__)) . '/appServiser');
Yii::setAlias('@appServiserAdmin', dirname(dirname(__DIR__)) . '/appServiserAdmin');
Yii::setAlias('@console', dirname(dirname(__DIR__)) . '/console');
```

### Componentes Definidos / Defined Components

#### Español
1. **Alias Principales**
   - `@common`: Componentes compartidos
   - `@appSennovalab`: Aplicación Sennovalab
   - `@appServiser`: Aplicación Serviser
   - `@appServiserAdmin`: Panel administrativo
   - `@console`: Aplicación de consola

2. **Funcionalidad**
   - Resolución dinámica de rutas
   - Independencia del sistema de archivos
   - Portabilidad entre entornos

#### English
1. **Main Aliases**
   - `@common`: Shared components
   - `@appSennovalab`: Sennovalab Application
   - `@appServiser`: Serviser Application
   - `@appServiserAdmin`: Admin Panel
   - `@console`: Console Application

2. **Functionality**
   - Dynamic path resolution
   - File system independence
   - Cross-environment portability

### Ejemplo de Uso / Usage Example

```php
// Español
$path = Yii::getAlias('@appServiser/controllers/SiteController.php');

// English
$path = Yii::getAlias('@appServiser/controllers/SiteController.php');
```

### Notas Importantes / Important Notes

#### Español
- Archivo crítico para el funcionamiento del sistema
- Se carga en etapas tempranas de la aplicación
- Requiere permisos de lectura adecuados
- Fundamental para la estructura modular
- Base para la autocargar de clases

#### English
- Critical file for system operation
- Loaded in early application stages
- Requires proper read permissions
- Fundamental for modular structure
- Base for class autoloading

