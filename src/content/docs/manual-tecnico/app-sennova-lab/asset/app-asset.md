---
title: Manual Técnico 
description:  Documentación Técnica del Archivo `appAsset.php`
---

Aquí tienes la documentación técnica del archivo `AppAsset.php`, en español e inglés.

---

## Documentación Técnica de `AppAsset.php`

---
## Español

### ¿Para qué es?
El archivo `AppAsset.php` es parte de la estructura de un proyecto Yii2, específicamente se utiliza para gestionar los recursos estáticos de la aplicación, como hojas de estilo CSS y archivos JavaScript.

### Definición de la Carpeta
La carpeta `assets` contiene los archivos de recursos que se utilizan en la aplicación. Estos recursos son esenciales para la presentación y funcionalidad del frontend de la aplicación.

### Propósito
El propósito de `AppAsset.php` es definir un conjunto de activos que se cargarán en la aplicación. Esto incluye la configuración de rutas para archivos CSS y JavaScript, así como las dependencias necesarias para el correcto funcionamiento de la aplicación.

### Funciones
- **basePath**: Define la ruta base donde se encuentran los archivos de la aplicación.
- **baseUrl**: Define la URL base para acceder a los recursos.
- **css**: Lista de archivos CSS que se incluirán en la aplicación.
- **js**: Lista de archivos JavaScript que se incluirán en la aplicación.
- **depends**: Especifica las dependencias de otros paquetes de activos que deben cargarse antes de este.

---

## English

### What is it for?
The `AppAsset.php` file is part of the Yii2 project structure, specifically used to manage the static resources of the application, such as CSS stylesheets and JavaScript files.

### Definition of the Folder
The `assets` folder contains resource files that are used in the application. These resources are essential for the presentation and functionality of the application's frontend.

### Purpose
The purpose of `AppAsset.php` is to define a set of assets that will be loaded into the application. This includes configuring paths for CSS and JavaScript files, as well as the necessary dependencies for the proper functioning of the application.

### Functions
- **basePath**: Defines the base path where the application files are located.
- **baseUrl**: Defines the base URL to access the resources.
- **css**: List of CSS files to be included in the application.
- **js**: List of JavaScript files to be included in the application.
- **depends**: Specifies the dependencies of other asset packages that must be loaded before this one.

--- 

Esta documentación proporciona una visión general del archivo y su función dentro de la estructura de la aplicación.