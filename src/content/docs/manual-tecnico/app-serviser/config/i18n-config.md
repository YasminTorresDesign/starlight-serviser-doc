---
title: Manual Técnico AppServiser
description:  Documentación Técnica del Archivo `i18n-config.php`
---

## Documentación Técnica del Archivo `i18n-config.php` en la Carpeta `appServiser/config`

## Español

### ¿Para qué es?  
El archivo `i18n-config.php` se utiliza para configurar la **internacionalización (i18n)** de la aplicación. Este archivo define cómo se gestionan las traducciones y los mensajes en diferentes idiomas, permitiendo que la aplicación sea accesible a un público más amplio.

### Definición del Archivo  
El archivo `i18n-config.php` es un archivo de configuración en PHP que devuelve un **array asociativo** con las configuraciones necesarias para la internacionalización. Este archivo es leído por el framework **Yii2** al iniciar la aplicación y establece las reglas para la traducción de mensajes.

### Propósito  
El propósito del archivo `i18n-config.php` es **centralizar la configuración de la internacionalización**, facilitando:  
- La gestión de idiomas y traducciones.  
- La adición de nuevos idiomas de manera eficiente.  

### Estructura Común  
- **`sourcePath`**: Define la ruta raíz de todos los archivos fuente que contienen los mensajes a traducir.  
- **`languages`**: Lista de códigos de idioma a los que se deben traducir los mensajes.  
- **`translator`**: Nombre de la función utilizada para traducir los mensajes.  
- **`sort`**: Indica si se deben ordenar los mensajes por claves al fusionar nuevos mensajes con los existentes.  
- **`removeUnused`**: Indica si se deben eliminar los mensajes que ya no aparecen en el código fuente.  
- **`messagePath`**: Ruta donde se almacenan las traducciones de los mensajes.  

### Ejemplo de Contenido  
```php
<?php

return [
    'sourcePath' => '@app/messages',
    'languages' => ['en', 'es', 'fr'],
    'translator' => 'Yii::t',
    'sort' => true,
    'removeUnused' => true,
    'messagePath' => '@app/messages',
];
```

# Technical Documentation for `i18n-config.php` File in the `appServiser/config` Folder

## English

### What is it for?  
The `i18n-config.php` file is used to configure the **internationalization (i18n)** of the application. This file defines how translations and messages in different languages are managed, allowing the application to be accessible to a broader audience.

### Definition of the File  
The `i18n-config.php` file is a **PHP configuration file** that returns an associative array with the necessary configurations for internationalization. This file is read by the **Yii2 framework** when starting the application and sets the rules for message translation.

### Purpose  
The purpose of the `i18n-config.php` file is to **centralize the internationalization configuration**, making it easier to:  
- Manage languages and translations.  
- Add new languages efficiently.  

### Common Structure  
- **`sourcePath`**: Defines the root path of all source files containing messages to be translated.  
- **`languages`**: List of language codes to which messages should be translated.  
- **`translator`**: Name of the function used to translate messages.  
- **`sort`**: Indicates whether to sort messages by keys when merging new messages with existing ones.  
- **`removeUnused`**: Indicates whether to remove messages that no longer appear in the source code.  
- **`messagePath`**: Path where message translations are stored.  

### Example Content  
```php
<?php

return [
    'sourcePath' => '@app/messages',
    'languages' => ['en', 'es', 'fr'],
    'translator' => 'Yii::t',
    'sort' => true,
    'removeUnused' => true,
    'messagePath' => '@app/messages',
];
```
