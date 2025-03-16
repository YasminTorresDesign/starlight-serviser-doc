---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `blank.php`
---

## Documentación Técnica del Archivo `blank.php` en la Carpeta `appServiserAdmin/views/layouts`

---

## Español

## Propósito del Archivo
El archivo blank.php es un componente de vista en una aplicación web construida con el framework Yii2. Su propósito principal es proporcionar una plantilla básica (layout) que puede ser utilizada para vistas que no requieren un diseño completo, como encabezados, pies de página o menús de navegación. Este archivo es útil para crear páginas que necesitan un diseño limpio y minimalista.

## Definición de la Carpeta
- Carpeta layouts: Esta carpeta contiene los archivos de diseño (layouts) de la aplicación. Los layouts son plantillas que definen la estructura general de las páginas de la aplicación y permiten reutilizar el mismo diseño en múltiples vistas.

## Funciones del Archivo
1. Estructura Básica: El archivo define la estructura HTML básica que se utilizará en las vistas que extienden este layout. Esto incluye la declaración del tipo de documento, la etiqueta <html>, y la etiqueta <body>.
2. Sección de Contenido: Proporciona un espacio para que las vistas inyecten su contenido específico utilizando el método yield() de Yii2. Esto permite que las vistas personalicen el contenido que se mostrará en el layout.
3. Carga de Recursos: Puede incluir la carga de archivos CSS y JavaScript necesarios para el funcionamiento de las vistas que utilizan este layout.
4. Estilos y Scripts: Se pueden incluir archivos CSS y JavaScript para mejorar la interfaz de usuario y la experiencia de usuario.

---

## English

## Technical Documentation of the File blank.php

## Purpose of the File
The blank.php file is a view component in a web application built with the Yii2 framework. Its main purpose is to provide a basic template (layout) that can be used for views that do not require a full design, such as headers, footers, or navigation menus. This file is useful for creating pages that need a clean and minimalist design.

## Definition of the Folder
- Folder layouts: This folder contains the layout files of the application. Layouts are templates that define the overall structure of the application's pages and allow for the reuse of the same design across multiple views.

## Functions of the File
1. Basic Structure: The file defines the basic HTML structure that will be used in views extending this layout. This includes the document type declaration, the <html> tag, and the <body> tag.
2. Content Section: It provides a space for views to inject their specific content using the yield() method of Yii2. This allows views to customize the content that will be displayed in the layout.
3. Resource Loading: It may include the loading of necessary CSS and JavaScript files for the functioning of the views that use this layout.
4. Styles and Scripts: CSS and JavaScript files can be included to enhance the user interface and user experience.

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
</head>
<body>
<?php $this->beginBody() ?>

<div class="content">
    <?= $content ?>
</div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
```