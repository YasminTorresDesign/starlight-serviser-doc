---
title: Manual Técnico Carpeta environments
description:  Documentación Técnica de la subcarpeta `dev\backend\config`
---

## Documentación Técnica del Archivo `params-local.php`

## Definición del Archivo
El archivo `params-local.php` es un script PHP que se utiliza para definir parámetros de configuración específicos del entorno local para una aplicación. Este archivo permite establecer configuraciones que son relevantes solo para el desarrollo local, como credenciales de base de datos, configuraciones de API y otras variables de entorno.

## Propósito
El propósito de este archivo es proporcionar un lugar centralizado para definir parámetros que pueden diferir de otros entornos, como producción o staging. Esto ayuda a mantener la flexibilidad y la seguridad al evitar la exposición de credenciales sensibles en el código fuente.

## Contenido del Archivo
El contenido del archivo puede incluir, pero no se limita a:

1. **Configuración de la Base de Datos**: Definición de los parámetros de conexión a la base de datos para el entorno local.

   ```php
   return [
       'db' => [
           'host' => 'localhost',
           'dbname' => 'local_db',
           'user' => 'root',
           'password' => '',
       ],
   ];
   ```

2. **Configuración de API**: Definición de credenciales y configuraciones para servicios de API utilizados en el entorno local.

   ```php
   return [
       'api' => [
           'key' => 'your_local_api_key',
           'endpoint' => 'http://localhost/api/',
       ],
   ];
   ```

3. **Configuración de Variables de Entorno**: Definición de variables de entorno que son específicas para el entorno local.

   ```php
   return [
       'env' => [
           'APP_ENV' => 'local',
           'APP_DEBUG' => true,
       ],
   ];
   ```

4. **Configuración de Otros Parámetros**: Cualquier otro parámetro que sea relevante para el entorno local.

   ```php
   return [
       'log' => [
           'level' => 'debug',
           'path' => '/var/log/myapp.log',
       ],
   ];
   ```

## Funciones del Archivo
1. **Facilitar la Configuración Local**: Proporciona un lugar centralizado para definir parámetros que son específicos para el entorno de desarrollo local.

2. **Aislar Configuraciones Locales**: Permite que las configuraciones específicas del entorno local no afecten a otros entornos, como producción o staging.

3. **Mejorar la Seguridad**: Al mantener las credenciales y configuraciones sensibles en un archivo separado, se reduce el riesgo de exposición accidental en el código fuente.

4. **Facilitar la Colaboración**: Proporciona un marco común para que los desarrolladores trabajen en la configuración de la aplicación, asegurando que todos utilicen configuraciones coherentes en sus entornos locales.

---

## Technical Documentation of the File `params-local.php`

## Definition of the File
The `params-local.php` file is a PHP script used to define configuration parameters specific to the local environment for an application. This file allows for the establishment of settings that are relevant only for local development, such as database credentials, API configurations, and other environment variables.

## Purpose
The purpose of this file is to provide a centralized place to define parameters that may differ from other environments, such as production or staging. This helps maintain flexibility and security by avoiding the exposure of sensitive credentials in the source code.

## Content of the File
The content of the file may include, but is not limited to:

1. **Database Configuration**: Definition of the connection parameters to the database for the local environment.

   ```php
   return [
       'db' => [
           'host' => 'localhost',
           'dbname' => 'local_db',
           'user' => 'root',
           'password' => '',
       ],
   ];
   ```

2. **API Configuration**: Definition of credentials and settings for API services used in the local environment.

   ```php
   return [
       'api' => [
           'key' => 'your_local_api_key',
           'endpoint' => 'http://localhost/api/',
       ],
   ];
   ```

3. **Environment Variable Configuration**: Definition of environment variables that are specific to the local environment.

   ```php
   return [
       'env' => [
           'APP_ENV' => 'local',
           'APP_DEBUG' => true,
       ],
   ];
   ```

4. **Other Parameter Configuration**: Any other parameter that is relevant for the local environment.

   ```php
   return [
       'log' => [
           'level' => 'debug',
           'path' => '/var/log/myapp.log',
       ],
   ];
   ```

## Functions of the File
1. **Facilitate Local Configuration**: Provides a centralized place to define parameters that are specific to the local development environment.

2. **Isolate Local Configurations**: Allows local-specific configurations to not affect other environments, such as production or staging.

3. **Improve Security**: By keeping credentials and sensitive configurations in a separate file, the risk of accidental exposure in the source code is reduced.

4. **Facilitate Collaboration**: Provides a common framework for developers to work on application configuration, ensuring that everyone uses consistent settings in their local environments.