---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `update.php`
---

## Documentación Técnica del Archivo `update.php` en la Carpeta `appServiserAdmin/views/lesson`

---

## Español

## Propósito del Archivo
El archivo update.php es un componente de vista en una aplicación web construida con el framework Yii2. Su propósito principal es proporcionar una interfaz para que los usuarios editen lecciones existentes dentro de la aplicación. Este archivo incluye un formulario que permite a los usuarios modificar la información de una lección previamente registrada.

## Definición de la Carpeta
- Carpeta lesson: Esta carpeta se especializa en las vistas relacionadas con la gestión de lecciones. Aquí se encuentran los archivos que gestionan la interfaz de usuario para las funcionalidades de creación, edición y visualización de lecciones.

## Funciones del Archivo
1. Carga de Dependencias: El archivo utiliza las clases de Yii para facilitar la creación de formularios y la gestión de HTML.
2. Formulario de Edición de Lección:
Se crea un formulario utilizando ActiveForm::begin() y ActiveForm::end().
Incluye campos para editar el título de la lección, su contenido y otros atributos relevantes.
3. Validación de Datos:
Utiliza las reglas de validación definidas en el modelo para asegurar que los datos ingresados sean correctos antes de ser enviados.
4. Visualización de Mensajes:
Puede mostrar mensajes de éxito o error después de que el usuario intente actualizar la lección.
5. Estilos y Scripts:
Se pueden incluir archivos CSS y JavaScript para mejorar la interfaz de usuario y la experiencia de usuario.

---

## English

## Technical Documentation of the File update.php (Folder lesson)

## Purpose of the File
The update.php file is a view component in a web application built with the Yii2 framework. Its main purpose is to provide an interface for users to edit existing lessons within the application. This file includes a form that allows users to modify the information of a previously registered lesson.

## Definition of the Folder
- Folder lesson: This folder specializes in views related to lesson management. It contains files that manage the user interface for creating, editing, and viewing lessons.

## Functions of the File
1. Loading Dependencies: The file uses Yii classes to facilitate form creation and HTML management.
2. Lesson Update Form:
A form is created using ActiveForm::begin() and ActiveForm::end().
It includes fields for editing the lesson's title, content, and other relevant attributes.
3. Data Validation:
It uses validation rules defined in the model to ensure that the entered data is correct before being submitted.
4. Displaying Messages:
It can show success or error messages after a user attempts to update the lesson.
5. Styles and Scripts:
CSS and JavaScript files can be included to enhance the user interface and user experience.

## Structure of the File
The file could be structured as follows:
```
<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Lesson $model */
/** @var yii\widgets\ActiveForm $form */

$this->title = Yii::t('app', 'Update Lesson: {name}', [
    'name' => $model->title,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Lessons'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="lesson-update">

    <h1><?= Html::encode($this->title) ?></h1>

    // Mensajes de éxito o error
    <?php if (Yii::$app->session->hasFlash('success')): ?>
        <div class="alert alert-success">
            <?= Yii::$app->session->getFlash('success') ?>
        </div>
    <?php endif; ?>

    <?php $form = ActiveForm::begin(); ?>

    // Campo para el título de la lección
    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

    // Campo para el contenido de la lección
    <?= $form->field($model, 'content')->textarea(['rows' => 6]) ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>

<?php
// Registro de archivos JS y CSS (si es necesario)
$this->registerCssFile('path/to/custom.css');
?>

<?php 
// Script adicional (si es necesario)
$this->registerJs("
$(document).ready(function() {
    // Aquí se pueden agregar scripts adicionales si es necesario
});
");
?>
```