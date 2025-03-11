---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `main.php`
---

## Documentación Técnica del Archivo `main.php` en la Carpeta `appServiserAdmin/config`

---

## Español

### Definición de la Carpeta
El archivo `main.php` se encuentra en la carpeta de configuración de un proyecto que utiliza el marco de trabajo Yii2. Este archivo es fundamental para la configuración de la aplicación, ya que define la configuración principal que se aplica a todos los entornos (desarrollo, producción, etc.).

### Propósito
El propósito del archivo `main.php` es proporcionar la configuración central de la aplicación, incluyendo la definición de componentes, módulos, parámetros y otras configuraciones esenciales que son necesarias para el funcionamiento de la aplicación.

### Funciones

1. **Configuración de Componentes**: Define los componentes de la aplicación, como la conexión a la base de datos, el manejo de sesiones, el registro de errores y otros servicios que la aplicación utilizará.
2. **Módulos**: Especifica los módulos que se utilizarán en la aplicación, permitiendo la organización del código y la reutilización de funcionalidades.
3. **Parámetros de Aplicación**: Establece parámetros globales que pueden ser utilizados en toda la aplicación, como configuraciones de API, claves secretas y otros valores que son necesarios para el funcionamiento.

### Estructura Común

El archivo `main.php` suele tener una estructura similar a la siguiente:

```php
<?php

$params = require __DIR__ . '/params.php';

return [
    'id' => 'app-name',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'app\controllers',
    'timeZone' => 'America/Bogota',
    'bootstrap' => ['log'],
    'modules' => [
        // Definición de módulos
    ],
    'components' => [
        'request' => [
            'cookieValidationKey' => 'your-validation-key',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'session' => [
            'class' => 'yii\web\Session',
            'name' => 'your-session-name',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
    ],
    'params' => $params,
];
```

### Parámetros

- **id**: Identificador único de la aplicación, que puede ser utilizado para distinguir entre diferentes aplicaciones.
- **basePath**: Ruta base de la aplicación, que generalmente apunta al directorio raíz del proyecto.
- **controllerNamespace**: Espacio de nombres para los controladores de la aplicación.
- **timeZone**: Zona horaria de la aplicación.
- **bootstrap**: Lista de componentes que se deben inicializar al inicio de la aplicación.
- **modules**: Sección donde se definen los módulos que se utilizarán en la aplicación.
- **components**: Sección donde se definen los componentes de la aplicación, como la conexión a la base de datos y el manejo de sesiones.
- **params**: Sección que incluye parámetros adicionales que pueden ser utilizados en la aplicación.

---

## English

## Technical Documentation for the File `main.php`

### Folder Definition
The `main.php` file is located in the configuration folder of a Yii2 project. This file is essential for the application's configuration, as it defines the main settings that apply to all environments (development, production, etc.).

### Purpose
The purpose of the `main.php` file is to provide the central configuration for the application, including the definition of components, modules, parameters, and other essential settings necessary for the application's operation.

### Functions

1. **Component Configuration**: Defines the components of the application, such as database connections, session handling, error logging, and other services that the application will use.
2. **Modules**: Specifies the modules that will be used in the application, allowing for code organization and functionality reuse.
3. **Application Parameters**: Sets global parameters that can be used throughout the application, such as API configurations, secret keys, and other necessary values for operation.

### Common Structure

The `main.php` file typically has a structure similar to the following:

```php
<?php

$params = require __DIR__ . '/params.php';

return [
    'id' => 'app-name',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'app\controllers',
    'timeZone' => 'America/Bogota',
    'bootstrap' => ['log'],
    'modules' => [
        // Module definitions
    ],
    'components' => [
        'request' => [
            'cookieValidationKey' => 'your-validation-key',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'session' => [
            'class' => 'yii\web\Session',
            'name' => 'your-session-name',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
    ],
    'params' => $params,
];
```

### Parameters

- **id**: Unique identifier for the application, which can be used to distinguish between different applications.
- **basePath**: Base path of the application, which generally points to the root directory of the project.
- **controllerNamespace**: Namespace for the application's controllers.
- **timeZone**: Time zone of the application.
- **bootstrap**: List of components to be initialized at the start of the application.
- **modules**: Section where the modules to be used in the application are defined.
- **components**: Section where the components of the application are defined, such as database connections and session handling.
- **params**: Section that includes additional parameters that can be used in the application.
````
