---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

## Documentación Técnica del Archivo `main-local.php`

## Español

### ¿Para qué es?
El archivo `main-local.php` es un archivo de configuración local para la aplicación Yii2, que define las configuraciones específicas del entorno para componentes críticos como la base de datos y el sistema de correo electrónico.

### Definición de la Carpeta
**Ubicación:** `common/config/main-local.php`
**Contexto:** Se encuentra en la carpeta de configuración común, compartida entre todas las aplicaciones del proyecto.

### Propósito
- Definir configuraciones locales del entorno
- Establecer conexiones de base de datos
- Configurar el sistema de correo electrónico
- Mantener credenciales sensibles fuera del control de versiones
- Permitir diferentes configuraciones por entorno

### Componentes Principales

1. **Configuración de Base de Datos**
```php
'db' => [
    'class' => \yii\db\Connection::class,
    'dsn' => 'mysql:host=localhost;dbname=servisena',
    'username' => 'root',
    'password' => 'RootPass1683*',
    'charset' => 'utf8mb4',
]
```

2. **Configuración de Mailer (Comentada)**
```php
/*
'mailer' => [
    'class' => \yii\symfonymailer\Mailer::class,
    'viewPath' => '@common/mail',
    'useFileTransport' => true,
    // ... configuraciones adicionales
]
*/
```

---

## Technical Documentation - `main-local.php` File

## English

### What is it for?
The `main-local.php` file is a local configuration file for the Yii2 application, defining environment-specific configurations for critical components such as database and email system.

### Folder Definition
**Location:** `common/config/main-local.php`
**Context:** Located in the common configuration folder, shared across all project applications.

### Purpose
- Define local environment configurations
- Establish database connections
- Configure email system
- Keep sensitive credentials out of version control
- Allow different configurations per environment

### Main Components

1. **Database Configuration**
```php
'db' => [
    'class' => \yii\db\Connection::class,
    'dsn' => 'mysql:host=localhost;dbname=servisena',
    'username' => 'root',
    'password' => 'RootPass1683*',
    'charset' => 'utf8mb4',
]
```

2. **Mailer Configuration (Commented)**
```php
/*
'mailer' => [
    'class' => \yii\symfonymailer\Mailer::class,
    'viewPath' => '@common/mail',
    'useFileTransport' => true,
    // ... additional configurations
]
*/
```

### Notas de Seguridad / Security Notes

#### Español
1. **Credenciales Sensibles**
   - No compartir este archivo en repositorios
   - Usar variables de entorno cuando sea posible
   - Mantener copias de seguridad seguras

2. **Mejores Prácticas**
   - Usar diferentes configuraciones por entorno
   - Implementar cifrado de contraseñas
   - Limitar permisos de base de datos

#### English
1. **Sensitive Credentials**
   - Do not share this file in repositories
   - Use environment variables when possible
   - Maintain secure backups

2. **Best Practices**
   - Use different configurations per environment
   - Implement password encryption
   - Limit database permissions

### Configuraciones Adicionales / Additional Configurations

#### Español
- Soporte para múltiples bases de datos
- Configuración de correo SMTP
- Opciones de transporte de correo
- Configuraciones de caché
- Parámetros de conexión personalizados

#### English
- Multiple database support
- SMTP mail configuration
- Mail transport options
- Cache configurations
- Custom connection parameters

