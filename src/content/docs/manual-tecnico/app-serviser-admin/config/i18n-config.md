---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `i18n-config.php`
---

## Documentación Técnica del Archivo `i18n-config.php` en la Carpeta `appServiserAdmin/config`

---

## Español

## Documentación Técnica para el Archivo `i18n-config.php`

### Definición de la Carpeta
El archivo `i18n-config.php` se encuentra comúnmente en la carpeta de configuración de un proyecto que utiliza el marco de trabajo Yii2. Este archivo se utiliza para definir la configuración de internacionalización (i18n) de la aplicación, que permite la traducción de mensajes y la adaptación de la aplicación a diferentes idiomas y culturas.

### Propósito
El propósito del archivo `i18n-config.php` es proporcionar una configuración centralizada para la gestión de la internacionalización en la aplicación. Esto incluye la definición de los idiomas soportados, la configuración del traductor y las opciones para el manejo de mensajes.

### Funciones

1. **Definición de Idiomas**: Especifica los códigos de idioma que la aplicación soporta, permitiendo la traducción de mensajes a esos idiomas.
2. **Configuración del Traductor**: Define la función o método que se utilizará para traducir los mensajes, lo que permite personalizar cómo se manejan las traducciones.
3. **Manejo de Mensajes**: Configura opciones para el manejo de mensajes, como la eliminación de mensajes no utilizados y la marcación de mensajes que ya no aparecen en el código fuente.

## Estructura Común

El archivo `i18n-config.php` suele tener una estructura similar a la siguiente:

```php
<?php

return [
    // Ruta raíz de todos los archivos fuente
    'sourcePath' => __DIR__ . DIRECTORY_SEPARATOR . '..',
    
    // Lista de códigos de idioma que deben ser traducidos
    'languages' => [
        'es-CO', // Español (Colombia)
        'en-US', // Inglés (Estados Unidos)
    ],
    
    // Nombre de la función para traducir mensajes
    'translator' => ['\Yii::t', 'Yii::t'],
    
    // Otras configuraciones
    'sort' => false,
    'removeUnused' => false,
    'markUnused' => true,
    'only' => ['*.php'],
    'except' => [
        '.*',
        '/.*',
        '/messages',
        '/tests',
        '/runtime',
        '/vendor',
    ],
    'format' => 'php',
    'messagePath' => __DIR__ . '/../messages/',
    'overwrite' => true,
];
```

### Parámetros

- **sourcePath**: Define la ruta raíz de todos los archivos fuente que contienen los mensajes a traducir.
- **languages**: Lista de idiomas soportados por la aplicación.
- **translator**: Especifica la función que se utilizará para traducir los mensajes.
- **sort**: Indica si se deben ordenar los mensajes por clave al fusionar nuevos mensajes.
- **removeUnused**: Define si se deben eliminar los mensajes que ya no aparecen en el código fuente.
- **markUnused**: Indica si se deben marcar los mensajes que ya no aparecen en el código fuente.

---

## English

## Technical Documentation for the File `i18n-config.php`

### Folder Definition
The `i18n-config.php` file is commonly found in the configuration folder of a Yii2 project. This file is used to define the internationalization (i18n) configuration of the application, allowing for the translation of messages and adaptation of the application to different languages and cultures.

### Purpose
The purpose of the `i18n-config.php` file is to provide centralized configuration for managing internationalization in the application. This includes defining supported languages, configuring the translator, and options for handling messages.

### Functions

1. **Language Definition**: Specifies the language codes that the application supports, allowing for message translation into those languages.
2. **Translator Configuration**: Defines the function or method that will be used to translate messages, allowing customization of how translations are handled.
3. **Message Handling**: Configures options for handling messages, such as removing unused messages and marking messages that no longer appear in the source code.

### Common Structure

The `i18n-config.php` file typically has a structure similar to the following:

```php
<?php

return [
    // Root directory of all source files
    'sourcePath' => __DIR__ . DIRECTORY_SEPARATOR . '..',
    
    // List of language codes to be translated
    'languages' => [
        'es-CO', // Spanish (Colombia)
        'en-US', // English (United States)
    ],
    
    // Name of the function for translating messages
    'translator' => ['\Yii::t', 'Yii::t'],
    
    // Other configurations
    'sort' => false,
    'removeUnused' => false,
    'markUnused' => true,
    'only' => ['*.php'],
    'except' => [
        '.*',
        '/.*',
        '/messages',
        '/tests',
        '/runtime',
        '/vendor',
    ],
    'format' => 'php',
    'messagePath' => __DIR__ . '/../messages/',
    'overwrite' => true,
];
```

### Parameters

- **sourcePath**: Defines the root directory of all source files containing messages to be translated.
- **languages**: List of languages supported by the application.
- **translator**: Specifies the function that will be used to translate messages.
- **sort**: Indicates whether messages should be sorted by key when merging new messages.
- **removeUnused**: Defines whether to remove messages that no longer appear in the source code.
- **markUnused**: Indicates whether to mark messages that no longer appear in the source code.
