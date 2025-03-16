---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `main.php`
---

## Documentación Técnica del Archivo `main.php` en la Carpeta `appServiserAdmin/views/layouts`

---

## Español

## Propósito del Archivo
El archivo main.php es un componente de vista en una aplicación web construida con el framework Yii2. Su propósito principal es proporcionar el layout principal de la aplicación, que define la estructura general de las páginas, incluyendo el encabezado, el pie de página y el área de contenido. Este archivo actúa como la plantilla base para todas las vistas de la aplicación.

## Definición de la Carpeta
- Carpeta layouts: Esta carpeta contiene los archivos de diseño (layouts) de la aplicación. Los layouts son plantillas que definen la estructura general de las páginas de la aplicación y permiten reutilizar el mismo diseño en múltiples vistas.

## Funciones del Archivo
1. Estructura General: El archivo define la estructura HTML básica que se utilizará en todas las páginas de la aplicación. Esto incluye la declaración del tipo de documento, la etiqueta <html>, y la etiqueta <body>.
2. Inyección de Contenido: Proporciona un espacio para que las vistas inyecten su contenido específico utilizando el método yield() de Yii2. Esto permite que las vistas personalicen el contenido que se mostrará en el layout.
3. Carga de Recursos: Incluye la carga de archivos CSS y JavaScript necesarios para el funcionamiento de la aplicación.
4. Encabezado y Pie de Página: Incluye los archivos de encabezado y pie de página, asegurando que estos elementos sean consistentes en todas las páginas.

---

## English

## Technical Documentation of the File main.php

## Purpose of the File
The main.php file is a view component in a web application built with the Yii2 framework. Its main purpose is to provide the main layout of the application, which defines the overall structure of the pages, including the header, footer, and content area. This file acts as the base template for all views in the application.

## Definition of the Folder
- Folder layouts: This folder contains the layout files of the application. Layouts are templates that define the overall structure of the application's pages and allow for the reuse of the same design across multiple views.

## Functions of the File
1. General Structure: The file defines the basic HTML structure that will be used on all pages of the application. This includes the document type declaration, the <html> tag, and the <body> tag.
2. Content Injection: It provides a space for views to inject their specific content using the yield() method of Yii2. This allows views to customize the content that will be displayed in the layout.
3. Resource Loading: It includes the loading of necessary CSS and JavaScript files for the functioning of the application.
4. Header and Footer: It includes the header and footer files, ensuring that these elements are consistent across all pages.

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
    <!-- Aquí se pueden incluir archivos CSS adicionales -->
    <?= Html::cssFile('@web/css/site.css') ?>
</head>
<body>
<?php $this->beginBody() ?>

<div class="wrapper">
    <?= $this->render('header') ?> <!-- Encabezado -->
    
    <div class="content-wrapper">
        <section class="content">
            <?= $content ?> <!-- Contenido específico de la vista -->
        </section>
    </div>

    <?= $this->render('footer') ?> <!-- Pie de página -->
</div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
```