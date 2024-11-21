---
title: Manual Técnico - main-local.php
description:  Documentación Técnica del Archivo `main-local.php`
---

### Español

#### ¿Para qué es?
El archivo `main-local.php` es parte de la configuración de la aplicación en un proyecto Yii2. Se utiliza para definir configuraciones específicas del entorno local, permitiendo que los desarrolladores personalicen la aplicación según sus necesidades de desarrollo.

#### Definición de la Carpeta
El archivo `main-local.php` se encuentra generalmente en la carpeta `config`. Este archivo complementa el archivo de configuración principal (`main.php`) y permite sobreescribir o agregar configuraciones que son específicas para el entorno local.

#### Propósito
El propósito del archivo `main-local.php` es proporcionar un lugar para definir configuraciones que no deben ser compartidas en el control de versiones, como credenciales de base de datos, claves secretas y otras configuraciones que pueden variar entre diferentes entornos de desarrollo.

#### Funciones
- **Configuración de componentes**: Permite definir o modificar componentes de la aplicación, como el gestor de sesiones, el gestor de autenticación, etc.
- **Configuración de módulos**: Habilita o deshabilita módulos específicos que son necesarios para el entorno local, como herramientas de depuración.
- **Configuración de entornos**: Permite establecer configuraciones específicas para el entorno de desarrollo, como el modo de depuración y la configuración de errores.

---

### English

#### What is it for?
The `main-local.php` file is part of the application configuration in a Yii2 project. It is used to define environment-specific settings for the local environment, allowing developers to customize the application according to their development needs.

#### Definition of the Folder
The `main-local.php` file is typically located in the `config` folder. This file complements the main configuration file (`main.php`) and allows for overriding or adding settings that are specific to the local environment.

#### Purpose
The purpose of the `main-local.php` file is to provide a place to define configurations that should not be shared in version control, such as database credentials, secret keys, and other settings that may vary between different development environments.

#### Functions
- **Component configuration**: Allows defining or modifying application components, such as session management, authentication management, etc.
- **Module configuration**: Enables or disables specific modules that are necessary for the local environment, such as debugging tools.
- **Environment configuration**: Allows setting environment-specific configurations, such as debug mode and error handling settings.

---

Esta documentación proporciona una visión general del archivo `main-local.php` y su función dentro de la estructura de la aplicación. Si necesitas más información o sobre otro archivo, házmelo saber.