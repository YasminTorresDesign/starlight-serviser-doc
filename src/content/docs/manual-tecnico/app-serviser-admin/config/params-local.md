---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `params-local.php`
---

## Documentación Técnica para el Archivo `params-local.php` en la Carpeta `appServiserAdmin/config`

---

## Español

### Definición de la Carpeta
El archivo `params-local.php` se encuentra en la carpeta de configuración de un proyecto que utiliza el marco de trabajo Yii2. Este archivo se utiliza para definir parámetros específicos del entorno local de la aplicación, permitiendo ajustes que no afectan a otros entornos como producción o staging.

### Propósito
El propósito del archivo `params-local.php` es proporcionar una configuración personalizada para el entorno local de desarrollo. Esto incluye parámetros que pueden ser utilizados en la aplicación, como claves de API, configuraciones de correo electrónico y otros valores que son necesarios para el funcionamiento en un entorno de desarrollo.

### Funciones

1. **Configuración de Parámetros**: Permite definir parámetros específicos que pueden ser utilizados en la aplicación, como credenciales de acceso, configuraciones de base de datos y otros valores que son diferentes en el entorno local.
2. **Separación de Configuraciones**: Facilita la separación de configuraciones locales de las configuraciones globales, lo que ayuda a mantener el código limpio y organizado.
3. **Facilidad de Mantenimiento**: Al tener un archivo separado para parámetros locales, es más fácil realizar cambios en la configuración sin afectar otros entornos.

### Estructura Común

El archivo `params-local.php` suele tener una estructura similar a la siguiente:

```php
<?php

return [
    'adminEmail' => 'admin@localdomain.com',
    'supportEmail' => 'support@localdomain.com',
    'user.passwordResetTokenExpire' => 3600,
    'apiKey' => 'your-local-api-key',
    'db' => [
        'dsn' => 'mysql:host=localhost;dbname=local_db',
        'username' => 'root',
        'password' => '',
    ],
];
```

### Parámetros
- **adminEmail**: Dirección de correo electrónico del administrador, utilizada para notificaciones y alertas.
- **supportEmail**: Dirección de correo electrónico de soporte, utilizada para consultas de usuarios.
- **user.passwordResetTokenExpire**: Tiempo de expiración del token de restablecimiento de contraseña, en segundos.
- **apiKey**: Clave de API utilizada para acceder a servicios externos.
- **db**: Configuración de la base de datos, incluyendo el DSN, nombre de usuario y contraseña.

---

## English

## Technical Documentation for the File `params-local.php`

### Folder Definition
The `params-local.php` file is located in the configuration folder of a Yii2 project. This file is used to define environment-specific parameters for the local application, allowing adjustments that do not affect other environments such as production or staging.

### Purpose
The purpose of the `params-local.php` file is to provide a customized configuration for the local development environment. This includes parameters that can be used in the application, such as API keys, email configurations, and other values necessary for operation in a development environment.

### Functions

1. **Parameter Configuration**: Allows defining specific parameters that can be used in the application, such as access credentials, database configurations, and other values that differ in the local environment.
2. **Separation of Configurations**: Facilitates the separation of local configurations from global configurations, helping to keep the code clean and organized.
3. **Ease of Maintenance**: Having a separate file for local parameters makes it easier to make changes to the configuration without affecting other environments.

### Common Structure

The `params-local.php` file typically has a structure similar to the following:

```php
<?php

return [
    'adminEmail' => 'admin@localdomain.com',
    'supportEmail' => 'support@localdomain.com',
    'user.passwordResetTokenExpire' => 3600,
    'apiKey' => 'your-local-api-key',
    'db' => [
        'dsn' => 'mysql:host=localhost;dbname=local_db',
        'username' => 'root',
        'password' => '',
    ],
];
```

###  Parameters
- **adminEmail**: Administrator's email address, used for notifications and alerts.
- **supportEmail**: Support email address, used for user inquiries.
- **user.passwordResetTokenExpire**: Expiration time of the password reset token, in seconds.
- **apiKey**: API key used to access external services.
- **db**: Database configuration, including DSN, username, and password.
````
