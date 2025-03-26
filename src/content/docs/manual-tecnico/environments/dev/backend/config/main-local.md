---
title: Manual Técnico Carpeta environments
description:  Documentación Técnica de la subcarpeta `dev\backend\config`
---

## Documentación Técnica del Archivo `main-local.php`

## Definición del Archivo
El archivo `main-local.php` es un script PHP que se utiliza para configurar la aplicación en un entorno de desarrollo local. Este archivo contiene configuraciones específicas que permiten a los desarrolladores ejecutar la aplicación con parámetros que pueden diferir de otros entornos, como producción o staging.

## Propósito
El propósito de este archivo es proporcionar un punto de entrada para la configuración de la aplicación en un entorno local, permitiendo ajustes en la base de datos, el manejo de errores, y otras configuraciones que son relevantes solo para el desarrollo.

## Contenido del Archivo
El contenido del archivo puede incluir, pero no se limita a:

1. **Configuración de la Base de Datos**: Definición de los parámetros de conexión a la base de datos para el entorno local.

   ```php
   $dbConfig = [
       'host' => 'localhost',
       'dbname' => 'local_db',
       'user' => 'root',
       'password' => '',
   ];
   ```

2. **Configuración de Errores**: Ajustes para el manejo de errores y la visualización de mensajes de depuración.

   ```php
   error_reporting(E_ALL);
   ini_set('display_errors', 1); // Mostrar errores en el navegador
   ```

3. **Configuración de Rutas**: Definición de rutas específicas para el entorno local.

   ```php
   $baseUrl = 'http://localhost/myapp/';
   ```

4. **Configuración de Variables de Entorno**: Definición de variables de entorno que son específicas para el entorno local.

   ```php
   putenv('APP_ENV=local');
   putenv('APP_DEBUG=true');
   ```

## Funciones del Archivo
1. **Facilitar la Configuración Local**: Proporciona un lugar centralizado para definir configuraciones que son específicas para el entorno de desarrollo local.

2. **Aislar Configuraciones Locales**: Permite que las configuraciones específicas del entorno local no afecten a otros