---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `codeception-local.php`
---

## Documentación Técnica del Archivo `codeception-local.php` en la Carpeta `appServiserAdmin/config`

---

## Español

### Definición de la Carpeta
El archivo `codeception-local.php` se encuentra en la carpeta de configuración de un proyecto que utiliza Codeception, un marco de pruebas para aplicaciones PHP. Este archivo se utiliza para definir configuraciones específicas del entorno local de pruebas.

### Propósito
El propósito del archivo `codeception-local.php` es proporcionar configuraciones personalizadas que se aplican solo en el entorno local. Esto permite a los desarrolladores ajustar la configuración de las pruebas sin afectar la configuración global o la de otros entornos (como producción o staging).

### Funciones

1. **Configuración de Entorno**: Permite definir variables y configuraciones que son específicas para el entorno local, como la conexión a la base de datos, rutas de archivos y otros parámetros que pueden variar entre entornos.
2. **Personalización de Módulos**: Se pueden habilitar o deshabilitar módulos de Codeception según las necesidades del entorno local, permitiendo una mayor flexibilidad en las pruebas.
3. **Configuración de Parámetros**: Facilita la definición de parámetros que pueden ser utilizados en las pruebas, como credenciales de acceso o configuraciones de API.

### Estructura Común
El archivo `codeception-local.php` suele tener una estructura similar a la siguiente:

```php
<?php

return [
    'modules' => [
        'config' => [
            'Db' => [
                'dsn' => 'mysql:host=localhost;dbname=test_db',
                'user' => 'root',
                'password' => '',
            ],
            'Yii2' => [
                'configFile' => 'config/test.php',
            ],
        ],
    ],
];
```

### Parámetros

- **Módulos**: Se pueden definir módulos específicos que se utilizarán en las pruebas, como `Db` para pruebas de base de datos o `Yii2` para aplicaciones basadas en Yii.
- **Configuraciones de Base de Datos**: Se pueden establecer configuraciones de conexión a la base de datos que son necesarias para ejecutar pruebas que interactúan con la base de datos.
- **Rutas de Archivos**: Se pueden definir rutas a archivos de configuración o recursos que son necesarios para las pruebas.

---

## English

## Technical Documentation for the File `codeception-local.php`

### Folder Definition
The `codeception-local.php` file is located in the configuration folder of a project that uses Codeception, a testing framework for PHP applications. This file is used to define environment-specific configurations for local testing.

### Purpose
The purpose of the `codeception-local.php` file is to provide custom configurations that apply only in the local environment. This allows developers to adjust the testing configuration without affecting the global configuration or that of other environments (such as production or staging).

### Functions

1. **Environment Configuration**: Allows defining variables and settings that are specific to the local environment, such as database connections, file paths, and other parameters that may vary between environments.
2. **Module Customization**: Codeception modules can be enabled or disabled according to the needs of the local environment, allowing for greater flexibility in testing.
3. **Parameter Configuration**: Facilitates the definition of parameters that can be used in tests, such as access credentials or API configurations.

### Common Structure
The `codeception-local.php` file typically has a structure similar to the following:

```php
<?php

return [
    'modules' => [
        'config' => [
            'Db' => [
                'dsn' => 'mysql:host=localhost;dbname=test_db',
                'user' => 'root',
                'password' => '',
            ],
            'Yii2' => [
                'configFile' => 'config/test.php',
            ],
        ],
    ],
];
```

### Parameters

- **Modules**: Specific modules to be used in tests can be defined, such as `Db` for database tests or `Yii2` for Yii-based applications.
- **Database Configurations**: Database connection settings necessary for running tests that interact with the database can be established.
- **File Paths**: Paths to configuration files or resources needed for the tests can be defined.
````

