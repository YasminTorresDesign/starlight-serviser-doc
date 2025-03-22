---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `components`
---

## Documentación Técnica del Archivo `ActivityLogger.php`

## Español

### ¿Para qué es?
El archivo `ActivityLogger.php` es un componente que implementa un sistema de registro de actividades de usuario en la aplicación, permitiendo rastrear y almacenar información detallada sobre las acciones de los usuarios.

### Definición de la Carpeta
**Ubicación:** `common/components/ActivityLogger.php`
**Contexto:** Se encuentra en la carpeta de componentes comunes, disponible para todas las aplicaciones del sistema.

### Propósito
- Registrar actividades de usuarios
- Recopilar información de sesión
- Almacenar datos de geolocalización
- Monitorear el uso del sistema
- Mantener un registro de auditoría

### Funciones Principales

1. **log()**
```php
public static function log($activityType, $description = null, $additionalData = [])
{
    $log = new ActivityLog();
    $log->user_id = Yii::$app->user->id ?? null;
    $log->app = Yii::$app->id;
    // ... más campos
}
```

2. **getLocation()**
```php
private static function getLocation()
{
    $access_token = '2d5dd8b759e8f0';
    $client = new IPinfo($access_token);
    // ... lógica de geolocalización
}
```

---

## Technical Documentation - `ActivityLogger.php` File

## English

### What is it for?
The `ActivityLogger.php` file is a component that implements a user activity logging system in the application, allowing tracking and storing detailed information about user actions.

### Folder Definition
**Location:** `common/components/ActivityLogger.php`
**Context:** Located in the common components folder, available to all system applications.

### Purpose
- Log user activities
- Collect session information
- Store geolocation data
- Monitor system usage
- Maintain audit trail

### Main Functions

1. **log()**
```php
public static function log($activityType, $description = null, $additionalData = [])
{
    $log = new ActivityLog();
    $log->user_id = Yii::$app->user->id ?? null;
    $log->app = Yii::$app->id;
    // ... more fields
}
```

2. **getLocation()**
```php
private static function getLocation()
{
    $access_token = '2d5dd8b759e8f0';
    $client = new IPinfo($access_token);
    // ... geolocation logic
}
```

### Características Especiales / Special Features

#### Español
1. **Datos Capturados**
   - ID de usuario
   - Tipo de aplicación
   - Tipo de actividad
   - Dirección IP
   - Dispositivo y navegador
   - Ubicación geográfica
   - Datos adicionales personalizados

2. **Manejo de Casos Especiales**
   - Detección de localhost
   - Manejo de errores de geolocalización
   - Almacenamiento JSON de datos adicionales

#### English
1. **Captured Data**
   - User ID
   - Application type
   - Activity type
   - IP address
   - Device and browser
   - Geographic location
   - Custom additional data

2. **Special Case Handling**
   - Localhost detection
   - Geolocation error handling
   - JSON storage of additional data

### Dependencias / Dependencies
- IPinfo\IPinfo
- Yii Framework
- ActivityLog Model

### Ejemplo de Uso / Usage Example

```php
// Español
ActivityLogger::log(
    'login',
    'Usuario inició sesión',
    ['método' => 'formulario']
);

// English
ActivityLogger::log(
    'login',
    'User logged in',
    ['method' => 'form']
);
```




