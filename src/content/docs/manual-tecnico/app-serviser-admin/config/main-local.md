---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `main-local.php`
---

## Documentación Técnica del Archivo `main-local.php` en la Carpeta `appServiserAdmin/config`

---

## Español

### Definición de la Carpeta
El archivo `main-local.php` se encuentra en la carpeta de configuración de un proyecto que utiliza el marco de trabajo Yii2. Este archivo se utiliza para definir configuraciones específicas del entorno local de la aplicación, permitiendo ajustes que no afectan a otros entornos como producción o staging.

### Propósito
El propósito del archivo `main-local.php` es proporcionar una configuración personalizada para el entorno local de desarrollo. Esto incluye configuraciones de componentes, parámetros de la aplicación y ajustes que son necesarios para el funcionamiento correcto de la aplicación en un entorno de desarrollo.

### Funciones

1. **Configuración de Componentes**: Permite definir y ajustar componentes de la aplicación, como bases de datos, cachés y otros servicios que pueden variar entre entornos.
2. **Parámetros de Aplicación**: Establece parámetros específicos que pueden ser utilizados en la aplicación, como claves de API, configuraciones de correo electrónico y otros valores que son diferentes en el entorno local.
3. **Configuraciones de Seguridad**: Puede incluir configuraciones relacionadas con la seguridad, como claves de validación de cookies y otros ajustes que son críticos para el entorno de desarrollo.

### Estructura Común

El archivo `main-local.php` suele tener una estructura similar a la siguiente:

```php
<?php

return [
    'id' => 'app-local',
    'basePath' => dirname(__DIR__),
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=local_db',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
        ],
        'request' => [
            'cookieValidationKey' => 'your-local-validation-key',
        ],
        // Otros componentes...
    ],
    'params' => require(__DIR__ . '/params.php'),
];
```

### Parámetros

- **id**: Identificador único de la aplicación, que puede ser utilizado para distinguir entre diferentes entornos.
- **basePath**: Ruta base de la aplicación, que generalmente apunta al directorio raíz del proyecto.
- **components**: Sección donde se definen los componentes de la aplicación, como la conexión a la base de datos y otros servicios.
- **params**: Sección que incluye parámetros adicionales que pueden ser utilizados en la aplicación.

---

## English

## Technical Documentation for the File `main-local.php`

### Folder Definition
The `main-local.php` file is located in the configuration folder of a Yii2 project. This file is used to define environment-specific configurations for the local application, allowing adjustments that do not affect other environments such as production or staging.

### Purpose
The purpose of the `main-local.php` file is to provide a customized configuration for the local development environment. This includes component configurations, application parameters, and settings that are necessary for the correct functioning of the application in a development environment.

### Functions

1. **Component Configuration**: Allows defining and adjusting application components, such as databases, caches, and other services that may vary between environments.
2. **Application Parameters**: Sets specific parameters that can be used in the application, such as API keys, email configurations, and other values that differ in the local environment.
3. **Security Configurations**: May include settings related to security, such as cookie validation keys and other critical adjustments for the development environment.

### Common Structure

The `main-local.php` file typically has a structure similar to the following:

```php
<?php

return [
    'id' => 'app-local',
    'basePath' => dirname(__DIR__),
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=local_db',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
        ],
        'request' => [
            'cookieValidationKey' => 'your-local-validation-key',
        ],
        // Other components...
    ],
    'params' => require(__DIR__ . '/params.php'),
];
```

### Parameters

- **id**: Unique identifier for the application, which can be used to distinguish between different environments.
- **basePath**: Base path of the application, which generally points to the root directory of the project.
- **components**: Section where application components are defined, such as database connections and other services.
- **params**: Section that includes additional parameters that can be used in the application.

