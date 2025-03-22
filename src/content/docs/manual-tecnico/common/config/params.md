---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

## Documentación Técnica del Archivo `params.php`

## Español

### ¿Para qué es?
El archivo `params.php` es un archivo de configuración central que define parámetros globales y constantes utilizadas en toda la aplicación, especialmente para la configuración de correos electrónicos y políticas de usuario.

### Definición de la Carpeta
**Ubicación:** `common/config/params.php`
**Contexto:** Se encuentra en la carpeta de configuración común, compartida entre todas las aplicaciones del sistema.

### Propósito
- Centralizar parámetros de configuración
- Definir direcciones de correo del sistema
- Establecer políticas de seguridad
- Mantener constantes globales
- Facilitar la configuración del sistema

### Parámetros Definidos
```php
return [
    // Correos del Sistema
    'adminEmail' => 'admin@example.com',
    'supportEmail' => 'support@example.com',
    'senderEmail' => 'noreply@example.com',
    'senderName' => 'Example.com mailer',
    
    // Configuraciones de Usuario
    'user.passwordResetTokenExpire' => 3600,    // 1 hora en segundos
    'user.passwordMinLength' => 8,              // Longitud mínima de contraseña
    
    // Correos Específicos
    'serviserEmail' => 'labserviser@gmail.com',
]
```

---

## Technical Documentation - `params.php` File

## English

### What is it for?
The `params.php` file is a central configuration file that defines global parameters and constants used throughout the application, especially for email configuration and user policies.

### Folder Definition
**Location:** `common/config/params.php`
**Context:** Located in the common configuration folder, shared across all system applications.

### Purpose
- Centralize configuration parameters
- Define system email addresses
- Establish security policies
- Maintain global constants
- Facilitate system configuration

### Defined Parameters
```php
return [
    // System Emails
    'adminEmail' => 'admin@example.com',
    'supportEmail' => 'support@example.com',
    'senderEmail' => 'noreply@example.com',
    'senderName' => 'Example.com mailer',
    
    // User Configurations
    'user.passwordResetTokenExpire' => 3600,    // 1 hour in seconds
    'user.passwordMinLength' => 8,              // Minimum password length
    
    // Specific Emails
    'serviserEmail' => 'labserviser@gmail.com',
]
```

### Uso Práctico / Practical Usage

#### Español
```php
// Acceder a los parámetros
Yii::$app->params['adminEmail'];
Yii::$app->params['user.passwordMinLength'];
```

#### English
```php
// Accessing parameters
Yii::$app->params['adminEmail'];
Yii::$app->params['user.passwordMinLength'];
```

### Consideraciones de Seguridad / Security Considerations

#### Español
1. No almacenar contraseñas ni claves secretas
2. Usar variables de entorno para producción
3. Mantener copias de seguridad
4. Revisar regularmente la configuración
5. Documentar cambios importantes

#### English
1. Don't store passwords or secret keys
2. Use environment variables for production
3. Maintain backups
4. Review configuration regularly
5. Document important changes

### Mejores Prácticas / Best Practices

#### Español
- Mantener valores por defecto seguros
- Documentar cada parámetro
- Usar nombres descriptivos
- Agrupar parámetros relacionados
- Mantener consistencia en el formato

#### English
- Maintain secure default values
- Document each parameter
- Use descriptive names
- Group related parameters
- Maintain format consistency

