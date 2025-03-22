---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

# Documentación Técnica del Archivo `test-local.php`

## Español

### ¿Para qué es?
El archivo `test-local.php` es un archivo de configuración local para el entorno de pruebas de la aplicación Yii2. Define la configuración específica de la base de datos para pruebas unitarias y funcionales.

### Definición de la Carpeta
**Ubicación:** `common/config/test-local.php`
**Contexto:** Se encuentra en la carpeta de configuración común, compartida entre todas las aplicaciones del proyecto para el entorno de pruebas.

### Propósito
- Configurar la conexión a la base de datos de pruebas
- Separar el entorno de pruebas del entorno de producción
- Permitir pruebas automatizadas sin afectar datos reales
- Mantener configuraciones específicas para testing

### Estructura de Configuración
```php
return [
    'components' => [
        'db' => [
            'dsn' => 'mysql:host=localhost;dbname=yii2advanced_test',
        ],
    ],
];
```

---

# Technical Documentation - `test-local.php` File

## English

### What is it for?
The `test-local.php` file is a local configuration file for the Yii2 application's testing environment. It defines the specific database configuration for unit and functional testing.

### Folder Definition
**Location:** `common/config/test-local.php`
**Context:** Located in the common configuration folder, shared among all project applications for the testing environment.

### Purpose
- Configure test database connection
- Separate testing environment from production
- Enable automated testing without affecting real data
- Maintain testing-specific configurations

### Configuration Structure
```php
return [
    'components' => [
        'db' => [
            'dsn' => 'mysql:host=localhost;dbname=yii2advanced_test',
        ],
    ],
];
```

### Características Importantes / Important Features

#### Español
1. **Configuración de Base de Datos**
   - Host: localhost
   - Nombre de BD: yii2advanced_test
   - Conexión MySQL
   - Configuración independiente de producción

2. **Consideraciones de Uso**
   - No debe contener credenciales sensibles
   - Específico para entorno local
   - Puede ser versionado en Git
   - Facilita pruebas automatizadas

#### English
1. **Database Configuration**
   - Host: localhost
   - DB Name: yii2advanced_test
   - MySQL connection
   - Independent from production

2. **Usage Considerations**
   - Should not contain sensitive credentials
   - Specific to local environment
   - Can be versioned in Git
   - Facilitates automated testing

### Notas de Implementación / Implementation Notes

#### Español
- Asegurarse de que la base de datos de pruebas existe
- Mantener sincronizada la estructura con producción
- No usar en entorno de producción
- Considerar configuraciones adicionales según necesidades

#### English
- Ensure test database exists
- Keep structure synchronized with production
- Do not use in production environment
- Consider additional configurations as needed

Esta documentación proporciona una visión completa del archivo de configuración de pruebas, destacando su propósito y consideraciones importantes para su uso.
