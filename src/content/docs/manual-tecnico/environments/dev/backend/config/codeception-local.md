---
title: Manual Técnico Carpeta environments
description:  Documentación Técnica de la subcarpeta `dev\backend\config`
---

## Documentación Técnica del Archivo `codeception-local.php`

## Definición del Archivo
El archivo `codeception-local.php` es un archivo de configuración utilizado por Codeception, un marco de pruebas para PHP. Este archivo se utiliza para definir configuraciones específicas del entorno local que afectan cómo se ejecutan las pruebas en la aplicación.

## Propósito
El propósito de este archivo es proporcionar configuraciones que son específicas para el entorno de desarrollo local, permitiendo a los desarrolladores ejecutar pruebas de manera eficiente y con configuraciones que pueden diferir de otros entornos, como producción o staging.

## Contenido del Archivo
El contenido del archivo puede incluir, pero no se limita a:

1. **Configuración de Módulos**: Definición de módulos que se utilizarán en las pruebas.

   ```php
   'modules' => [
       'enabled' => [
           'Db',
           'REST',
           // Otros módulos necesarios
       ],
       'config' => [
           'Db' => [
               'dsn' => 'mysql:host=localhost;dbname=test_db',
               'user' => 'root',
               'password' => '',
           ],
       ],
   ],
   ```

2. **Configuración de Entorno**: Definición de variables de entorno específicas para el entorno local.

   ```php
   'env' => [
       'APP_ENV' => 'local',
       'APP_DEBUG' => true,
   ],
   ```

3. **Configuración de Rutas**: Definición de rutas para las pruebas de API o web.

   ```php
   'routes' => [
       'api' => '/api/v1/',
       'web' => '/',
   ],
   ```

4. **Configuración de Tiempo de Espera**: Definición de tiempos de espera para las pruebas.

   ```php
   'timeout' => 30, // Tiempo de espera en segundos
   ```

## Funciones del Archivo
1. **Facilitar la Ejecución de Pruebas**: Proporciona configuraciones que permiten a los desarrolladores ejecutar pruebas de manera eficiente en su entorno local.

2. **Aislar Configuraciones Locales**: Permite que las configuraciones específicas del entorno local no afecten a otros entornos, como producción o staging.

3. **Mejorar la Calidad del Software**: Al permitir pruebas más efectivas en el entorno local, se contribuye a la detección temprana de errores y problemas en el código.

4. **Facilitar la Colaboración**: Proporciona un marco común para que los desarrolladores trabajen en pruebas, asegurando que todos utilicen configuraciones coherentes en sus entornos locales.

---

## Technical Documentation of the File `codeception-local.php`

## Definition of the File
The `codeception-local.php` file is a configuration file used by Codeception, a testing framework for PHP. This file is used to define specific configurations for the local environment that affect how tests are executed in the application.

## Purpose
The purpose of this file is to provide configurations that are specific to the local development environment, allowing developers to run tests efficiently with settings that may differ from other environments, such as production or staging.

## Content of the File
The content of the file may include, but is not limited to:

1. **Module Configuration**: Definition of modules that will be used in the tests.

   ```php
   'modules' => [
       'enabled' => [
           'Db',
           'REST',
           // Other necessary modules
       ],
       'config' => [
           'Db' => [
               'dsn' => 'mysql:host=localhost;dbname=test_db',
               'user' => 'root',
               'password' => '',
           ],
       ],
   ],
   ```

2. **Environment Configuration**: Definition of environment variables specific to the local environment.

   ```php
   'env' => [
       'APP_ENV' => 'local',
       'APP_DEBUG' => true,
   ],
   ```

3. **Route Configuration**: Definition of routes for API or web tests.

   ```php
   'routes' => [
       'api' => '/api/v1/',
       'web' => '/',
   ],
   ```

4. **Timeout Configuration**: Definition of timeouts for tests.

   ```php
   'timeout' => 30, // Timeout in seconds
   ```

## Functions of the File
1. **Facilitate Test Execution**: Provides configurations that allow developers to run tests efficiently in their local environment.

2. **Isolate Local Configurations**: Allows local-specific configurations to not affect other environments, such as production or staging.

3. **Improve Software Quality**: By enabling more effective testing in the local environment, it contributes to early detection of errors and issues in the code.

4. **Facilitate Collaboration**: Provides a common framework for developers to work on tests, ensuring that everyone uses consistent configurations in their local environments.