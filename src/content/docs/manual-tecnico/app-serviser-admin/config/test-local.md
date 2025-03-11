---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `test-local.php`
---

## Documentación Técnica para el Archivo `test-local.php` en la Carpeta `appServiserAdmin/config`

---

## Español

### Definición de la Carpeta
El archivo `test-local.php` se encuentra en la carpeta de configuración de un proyecto que utiliza el marco de trabajo Yii2. Este archivo se utiliza para definir configuraciones específicas del entorno de pruebas local, permitiendo ajustes que son necesarios para ejecutar pruebas en un entorno de desarrollo.

### Propósito
El propósito del archivo `test-local.php` es proporcionar una configuración personalizada para el entorno de pruebas local. Esto incluye configuraciones de base de datos, parámetros de conexión y otros ajustes que son necesarios para ejecutar pruebas de manera efectiva en un entorno de desarrollo.

### Funciones

1. **Configuración de Base de Datos**: Permite definir la conexión a la base de datos que se utilizará durante las pruebas, asegurando que las pruebas no afecten a la base de datos de producción.
2. **Parámetros de Prueba**: Establece parámetros específicos que pueden ser utilizados en las pruebas, como claves de API o configuraciones de servicios que son diferentes en el entorno de pruebas.
3. **Aislamiento de Entornos**: Facilita el aislamiento de configuraciones de pruebas de las configuraciones de producción, lo que ayuda a evitar conflictos y errores.

### Estructura Común

El archivo `test-local.php` suele tener una estructura similar a la siguiente:

```php
<?php

return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=test_db',
            'username' => 'test_user',
            'password' => 'test_password',
            'charset' => 'utf8',
        ],
        'request' => [
            'cookieValidationKey' => 'your-local-validation-key',
        ],
    ],
];
```

### Parámetros

- **components**: Sección donde se definen los componentes de la aplicación que se utilizarán durante las pruebas, como la conexión a la base de datos.
- **db**: Configuración de la base de datos, incluyendo el DSN, nombre de usuario y contraseña que se utilizarán para las pruebas.
- **request**: Configuración relacionada con las solicitudes, como la clave de validación de cookies.

---

## English

### Technical Documentation for the File `test-local.php`

### Folder Definition
The `test-local.php` file is located in the configuration folder of a Yii2 project. This file is used to define environment-specific configurations for the local testing environment, allowing adjustments that are necessary to run tests in a development setting.

### Purpose
The purpose of the `test-local.php` file is to provide a customized configuration for the local testing environment. This includes database configurations, connection parameters, and other settings that are necessary to effectively run tests in a development environment.

### Functions

1. **Database Configuration**: Allows defining the database connection that will be used during tests, ensuring that tests do not affect the production database.
2. **Test Parameters**: Sets specific parameters that can be used in tests, such as API keys or service configurations that differ in the testing environment.
3. **Environment Isolation**: Facilitates the isolation of test configurations from production configurations, helping to avoid conflicts and errors.

### Common Structure

The `test-local.php` file typically has a structure similar to the following:

```php
<?php

return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=test_db',
            'username' => 'test_user',
            'password' => 'test_password',
            'charset' => 'utf8',
        ],
        'request' => [
            'cookieValidationKey' => 'your-local-validation-key',
        ],
    ],
];
```

### Parameters

- **components**: Section where the application components that will be used during tests are defined, such as the database connection.
- **db**: Database configuration, including the DSN, username, and password that will be used for testing.
- **request**: Configuration related to requests, such as the cookie validation key.

