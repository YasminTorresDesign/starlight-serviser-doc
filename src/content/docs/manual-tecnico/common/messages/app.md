---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `messages\es-CO`
---

## Application Configuration File

## ¿Qué es `app.php`?

El archivo `app.php` es un script PHP que se utiliza para definir la configuración principal de una aplicación que utiliza un framework como Yii. Este archivo contiene configuraciones globales que afectan el comportamiento de la aplicación, incluyendo componentes, módulos, parámetros y otras configuraciones necesarias para el funcionamiento de la aplicación.

## Definición de la Carpeta

El archivo `app.php` se encuentra típicamente en la carpeta de configuración de la aplicación. La estructura de carpetas puede variar, pero generalmente incluye:

- **config/**: Carpeta que contiene archivos de configuración de la aplicación.
  - **app.php**: Archivo de configuración principal para la aplicación.

## Propósito

El propósito principal de `app.php` es:

- **Configuración Global de la Aplicación**: Proporcionar una configuración centralizada que se aplica a toda la aplicación, facilitando la gestión de componentes y módulos.

## Funciones

1. **Configuración de Componentes**: Define y configura componentes clave de la aplicación, como bases de datos, servicios de correo, y otros recursos que son esenciales para el funcionamiento de la aplicación.
2. **Configuración de Módulos**: Permite habilitar y configurar módulos que se utilizarán en la aplicación, como módulos de autenticación, administración, y otros.
3. **Configuración de Parámetros**: Establece parámetros globales que pueden ser utilizados en toda la aplicación, como URLs, credenciales de acceso, y otros valores necesarios.
4. **Configuración de Comportamientos**: Puede incluir configuraciones para comportamientos específicos de la aplicación, como la gestión de sesiones, manejo de errores, y otras configuraciones relevantes.
5. **Configuración de Rutas**: Define las rutas y controladores que manejarán las solicitudes entrantes, facilitando la navegación y el acceso a diferentes partes de la aplicación.

---

## Application Configuration File

## What is `app.php`?

The `app.php` file is a PHP script used to define the main configuration of an application that utilizes a framework like Yii. This file contains global settings that affect the behavior of the application, including components, modules, parameters, and other necessary configurations for the application's operation.

## Folder Definition

The `app.php` file is typically found in the configuration folder of the application. The folder structure may vary, but it generally includes:

- **config/**: Folder containing application configuration files.
  - **app.php**: Main configuration file for the application.

## Purpose

The main purpose of `app.php` is to:

- **Global Application Configuration**: Provide a centralized configuration that applies to the entire application, making it easier to manage components and modules.

## Functions

1. **Component Configuration**: Defines and configures key components of the application, such as databases, mail services, and other resources that are essential for the application's operation.
2. **Module Configuration**: Allows enabling and configuring modules that will be used in the application, such as authentication, administration, and other modules.
3. **Parameter Configuration**: Sets global parameters that can be used throughout the application, such as URLs, access credentials, and other necessary values.
4. **Behavior Configuration**: May include settings for specific behaviors of the application, such as session management, error handling, and other relevant configurations.
5. **Route Configuration**: Defines the routes and controllers that will handle incoming requests, facilitating navigation and access to different parts of the application.