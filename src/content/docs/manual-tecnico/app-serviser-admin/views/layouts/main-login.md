---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `main-login.php`
---

## Documentación Técnica del Archivo `main-login.php` en la Carpeta `appServiserAdmin/views/layouts`

---

## Español

## Propósito del Archivo
El archivo main-login.php es un componente de vista en una aplicación web construida con el framework Yii2. Su propósito principal es proporcionar un layout específico para las páginas de inicio de sesión. Este archivo define la estructura general de la página de inicio de sesión, asegurando que tenga un diseño limpio y funcional que facilite la autenticación del usuario.

## Definición de la Carpeta
- Carpeta layouts: Esta carpeta contiene los archivos de diseño (layouts) de la aplicación. Los layouts son plantillas que definen la estructura general de las páginas de la aplicación y permiten reutilizar el mismo diseño en múltiples vistas.

## Funciones del Archivo
1. Estructura de la Página de Inicio de Sesión: El archivo define la estructura HTML básica que se utilizará en las páginas de inicio de sesión. Esto incluye la declaración del tipo de documento, la etiqueta <html>, y la etiqueta <body>.
Inyección de Contenido: Proporciona un espacio para que las vistas de inicio de sesión inyecten su contenido específico utilizando el método yield() de Yii2. Esto permite que las vistas personalicen el contenido que se mostrará en el layout.
2. Carga de Recursos: Incluye la carga de archivos CSS y JavaScript necesarios para el funcionamiento de la página de inicio de sesión.
3. Diseño Minimalista: Asegura que la página de inicio de sesión tenga un diseño limpio y minimalista, sin elementos innecesarios que puedan distraer al usuario.

---

## English

## Technical Documentation of the File main-login.php

## Purpose of the File
The main-login.php file is a view component in a web application built with the Yii2 framework. Its main purpose is to provide a specific layout for login pages. This file defines the overall structure of the login page, ensuring it has a clean and functional design that facilitates user authentication.

## Definition of the Folder
- Folder layouts: This folder contains the layout files of the application. Layouts are templates that define the overall structure of the application's pages and allow for the reuse of the same design across multiple views.

## Functions of the File
1. Login Page Structure: The file defines the basic HTML structure that will be used on login pages. This includes the document type declaration, the <html> tag, and the <body> tag.
2. Content Injection: It provides a space for login views to inject their specific content using the yield() method of Yii2. This allows views to customize the content that will be displayed in the layout.
3. Resource Loading: It includes the loading of necessary CSS and JavaScript files for the functioning of the login page.
4. Minimalist Design: It ensures that the login page has a clean and minimalist design, without unnecessary elements that could distract the user.

## Structure of the File
The file could be structured as follows:
```
<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var string $content */

?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    <!-- Aquí se pueden incluir archivos CSS adicionales específicos para la página de inicio de sesión -->
    <?= Html::cssFile('@web/css/login.css') ?>
</head>
<body class="login-page">
<?php $this->beginBody() ?>

<div class="login-box">
    <div class="login-logo">
        <a href="<?= Yii::$app->homeUrl ?>"><?= Html::encode(Yii::$app->name) ?></a>
    </div>
    <div class="login-box-body">
        <?= $content ?> <!-- Contenido específico de la vista de inicio de sesión -->
    </div>
</div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
```