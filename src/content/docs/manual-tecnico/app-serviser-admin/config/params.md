---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `params.php`
---

## Documentación Técnica para el Archivo `params.php` en la Carpeta `appServiserAdmin/config`

---

## Español

### Definición de la Carpeta
El archivo `params.php` se encuentra en la carpeta de configuración de un proyecto que utiliza el marco de trabajo Yii2. Este archivo se utiliza para definir parámetros globales que son utilizados en toda la aplicación, permitiendo una configuración centralizada y fácil de mantener.

### Propósito
El propósito del archivo `params.php` es proporcionar una configuración de parámetros que puede ser utilizada en diferentes partes de la aplicación. Esto incluye configuraciones que son necesarias para el funcionamiento de la aplicación, como claves de API, direcciones de correo electrónico y otros valores que son comunes a todos los entornos.

### Funciones

1. **Configuración de Parámetros Globales**: Permite definir parámetros que son utilizados en toda la aplicación, facilitando su acceso y modificación.
2. **Facilidad de Mantenimiento**: Al centralizar la configuración de parámetros, se simplifica el mantenimiento y la actualización de valores que pueden cambiar con el tiempo.
3. **Separación de Configuraciones**: Facilita la separación de configuraciones específicas del entorno (como `params-local.php`) de las configuraciones globales.

### Estructura Común

El archivo `params.php` suele tener una estructura similar a la siguiente:

```php
<?php

return [
    'adminEmail' => 'admin@example.com',
    'supportEmail' => 'support@example.com',
    'user.passwordResetTokenExpire' => 3600,
    'apiKey' => 'your-global-api-key',
    'siteName' => 'My Application',
];
```

### Parámetros
- **adminEmail**: Dirección de correo electrónico del administrador, utilizada para notificaciones y alertas.
- **supportEmail**: Dirección de correo electrónico de soporte, utilizada para consultas de usuarios.
- **user.passwordResetTokenExpire**: Tiempo de expiración del token de restablecimiento de contraseña, en segundos.
- **apiKey**: Clave de API utilizada para acceder a servicios externos.
- **siteName**: Nombre del sitio o aplicación, utilizado en diferentes partes de la interfaz de usuario.

---

## English

## Technical Documentation for the File `params.php`

### Folder Definition
The `params.php` file is located in the configuration folder of a Yii2 project. This file is used to define global parameters that are utilized throughout the application, allowing for centralized and easily maintainable configuration.

### Purpose
The purpose of the `params.php` file is to provide a configuration of parameters that can be used in different parts of the application. This includes settings that are necessary for the application's operation, such as API keys, email addresses, and other values that are common across all environments.

### Functions

1. **Global Parameter Configuration**: Allows defining parameters that are used throughout the application, facilitating their access and modification.
2. **Ease of Maintenance**: By centralizing parameter configuration, it simplifies the maintenance and updating of values that may change over time.
3. **Configuration Separation**: Facilitates the separation of environment-specific configurations (like `params-local.php`) from global configurations.

### Common Structure

The `params.php` file typically has a structure similar to the following:

```php
<?php

return [
    'adminEmail' => 'admin@example.com',
    'supportEmail' => 'support@example.com',
    'user.passwordResetTokenExpire' => 3600,
    'apiKey' => 'your-global-api-key',
    'siteName' => 'My Application',
];
```

### Parameters

- **adminEmail**: Administrator's email address, used for notifications and alerts.
- **supportEmail**: Support email address, used for user inquiries.
- **user.passwordResetTokenExpire**: Expiration time of the password reset token, in seconds.
- **apiKey**: API key used to access external services.
- **siteName**: Name of the site or application, used in various parts of the user interface.
````
