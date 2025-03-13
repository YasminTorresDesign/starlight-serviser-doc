---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `SiteController.php`
---

## Documentación Técnica del Archivo `SiteController.php` en la Carpeta `appServiserAdmin/controllers`

---

## Español

## Definición de la Carpeta
El archivo `SiteController.php` se encuentra en la carpeta de controladores de un proyecto que utiliza el marco de trabajo Yii2. Este archivo es responsable de manejar las acciones relacionadas con la interfaz principal del sitio, incluyendo la visualización de la página de inicio y la gestión de la autenticación de usuarios.

## Propósito
El propósito del archivo `SiteController.php` es implementar las acciones necesarias para la navegación y la funcionalidad básica del sitio. Esto incluye la gestión de la página de inicio, el inicio de sesión, el cierre de sesión y la visualización de errores.

## Funciones
1. **actionIndex**: Muestra la página de inicio del sitio, incluyendo estadísticas y mensajes relevantes para el usuario.
2. **actionLogin**: Maneja el proceso de inicio de sesión de los usuarios, validando las credenciales y redirigiendo según sea necesario.
3. **actionLogout**: Permite a los usuarios cerrar sesión en la aplicación.
4. **actionError**: Muestra una página de error en caso de que ocurra un problema en la aplicación.

---

## English

## Technical Documentation for the File `SiteController.php`

## Folder Definition
The `SiteController.php` file is located in the controllers folder of a Yii2 project. This file is responsible for handling actions related to the main site interface, including displaying the homepage and managing user authentication.

## Purpose
The purpose of the `SiteController.php` file is to implement the necessary actions for site navigation and basic functionality. This includes managing the homepage, user login, logout, and error display.

## Functions
1. **actionIndex**: Displays the homepage of the site, including statistics and relevant messages for the user.
2. **actionLogin**: Handles the user login process, validating credentials and redirecting as necessary.
3. **actionLogout**: Allows users to log out of the application.
4. **actionError**: Displays an error page in case of an application issue.