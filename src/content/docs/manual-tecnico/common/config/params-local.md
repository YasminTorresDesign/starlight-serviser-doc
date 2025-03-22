---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

## Documentación Técnica del Archivo `params-local.php`

## Español

### ¿Para qué es?
El archivo `params-local.php` es un archivo de configuración local que permite definir parámetros específicos del entorno de desarrollo que no deben ser compartidos en el control de versiones.

### Definición de la Carpeta
**Ubicación:** `common/config/params-local.php`
**Contexto:** Se encuentra en la carpeta de configuración común, proporcionando parámetros locales para todas las aplicaciones del sistema.

### Propósito
- Almacenar configuraciones sensibles
- Definir parámetros específicos del entorno
- Sobrescribir parámetros globales
- Mantener configuraciones privadas
- Personalizar el entorno local

### Estructura Base
```php
<?php
return [
    // Ejemplo de parámetros locales
    'adminEmail' => 'admin@localhost',
    'supportEmail' => 'support@localhost',
    'apiKeys' => [
        'service1' => 'local_key_1',
        'service2' => 'local_key_2',
    ],
    'debugMode' => true
];
```

---

## Technical Documentation - `params-local.php` File

## English

### What is it for?
The `params-local.php` file is a local configuration file that allows defining environment-specific parameters that should not be shared in version control.

### Folder Definition
**Location:** `common/config/params-local.php`
**Context:** Located in the common configuration folder, providing local parameters for all system applications.

### Purpose
- Store sensitive configurations
- Define environment-specific parameters
- Override global parameters
- Maintain private configurations
- Customize local environment

### Base Structure
```php
<?php
return [
    // Example of local parameters
    'adminEmail' => 'admin@localhost',
    'supportEmail' => 'support@localhost',
    'apiKeys' => [
        'service1' => 'local_key_1',
        'service2' => 'local_key_2',
    ],
    'debugMode' => true
];
```

### Consideraciones Importantes / Important Considerations

#### Español
1. **Seguridad**
   - No debe incluirse en el control de versiones
   - Contiene información sensible
   - Específico para cada entorno
   - Requiere configuración manual

2. **Uso Recomendado**
   - Credenciales de bases de datos
   - Claves API
   - URLs específicas del entorno
   - Configuraciones de debug
   - Emails de prueba

#### English
1. **Security**
   - Should not be included in version control
   - Contains sensitive information
   - Environment-specific
   - Requires manual configuration

2. **Recommended Usage**
   - Database credentials
   - API keys
   - Environment-specific URLs
   - Debug configurations
   - Test emails

### Ejemplo de Implementación / Implementation Example

```php
// Español
Yii::$app->params['localParam'] = 'valor';

// English
Yii::$app->params['localParam'] = 'value';
```

### Notas de Mantenimiento / Maintenance Notes

#### Español
- Mantener un archivo de ejemplo (`params-local.php.example`)
- Documentar todos los parámetros requeridos
- Actualizar cuando se añadan nuevas configuraciones
- Hacer copias de seguridad regulares
- No compartir valores sensibles

#### English
- Maintain an example file (`params-local.php.example`)
- Document all required parameters
- Update when adding new configurations
- Make regular backups
- Don't share sensitive values


