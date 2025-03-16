---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `index.php`
---

## Documentación Técnica del Archivo `index.php` en la Carpeta `appServiserAdmin/views/profile`

---

## Español

## Propósito del Archivo
El archivo index.php es un componente de vista en una aplicación web construida con el framework Yii2. Su propósito principal es mostrar una lista de perfiles de usuario existentes, permitiendo a los usuarios ver, buscar y gestionar los perfiles dentro de la aplicación. Este archivo actúa como la página principal para la gestión de perfiles.

## Definición de la Carpeta
-Carpeta profile: Esta carpeta se especializa en las vistas relacionadas con la gestión de perfiles de usuario. Aquí se encuentran los archivos que gestionan la interfaz de usuario para las funcionalidades de creación, edición y visualización de perfiles.

## Funciones del Archivo
1. Carga de Dependencias: El archivo utiliza las clases de Yii para facilitar la creación de vistas, la gestión de HTML y la interacción con el modelo de datos.
2. Visualización de Perfiles de Usuario:
Muestra una lista de perfiles utilizando el widget GridView, que permite la visualización y gestión de datos en formato tabular.
Incluye columnas para mostrar información relevante como el nombre, la dirección de correo electrónico y las acciones disponibles.
3. Filtros y Paginación:
Permite a los usuarios filtrar los perfiles y navegar a través de múltiples páginas de resultados.
Utiliza Pjax para actualizar partes de la página sin recargarla completamente, mejorando la experiencia del usuario.
4. Acciones de Gestión de Perfiles:
Proporciona botones para crear nuevos perfiles y realizar acciones sobre perfiles existentes, como editar o eliminar.
5. Estilos y Scripts:
Se pueden incluir archivos CSS y JavaScript para mejorar la interfaz de usuario y la experiencia de usuario.

---

## English

## Technical Documentation of the File index.php (Folder profile)

## Purpose of the File
The index.php file is a view component in a web application built with the Yii2 framework. Its main purpose is to display a list of existing user profiles, allowing users to view, search, and manage profiles within the application. This file acts as the main page for profile management.

## Definition of the Folder
- Folder profile: This folder specializes in views related to user profile management. It contains files that manage the user interface for creating, editing, and viewing profiles.

## Functions of the File
1. Loading Dependencies: The file uses Yii classes to facilitate view creation, HTML management, and interaction with the data model.
2. Displaying User Profiles:
It shows a list of user profiles using the GridView widget, allowing for the visualization and management of data in a tabular format.
It includes columns to display relevant information such as user name, email, and available actions.
3. Filters and Pagination:
It allows users to filter profiles and navigate through multiple pages of results.
It uses Pjax to update parts of the page without fully reloading it, enhancing the user experience.
4. Profile Management Actions:
It provides buttons to create new profiles and perform actions on existing profiles, such as editing or deleting.
5. Styles and Scripts:
CSS and JavaScript files can be included to enhance the user interface and user experience.

## Structure of the File
The file could be structured as follows:
```
<?php

use common\models\Profile;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\widgets\Pjax;

/** @var yii\web\View $this */
/** @var common\models\ProfileSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'User Profiles');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="profile-index">

    // Mensajes flash para éxito y error
    <?php if (Yii::$app->session->hasFlash('success')): ?>
        <div class="alert alert-success flash-message">
            <?= Yii::$app->session->getFlash('success'); ?>
        </div>
    <?php endif; ?>

    <?php if (Yii::$app->session->hasFlash('error')): ?>
        <div class="alert alert-danger flash-message">
            <?= Yii::$app->session->getFlash('error'); ?>
        </div>
    <?php endif; ?>

    <h3><?= Html::encode($this->title) ?></h3>

    <p>
        <?= Html::a(Yii::t('app', 'Create Profile'), ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php Pjax::begin(); ?>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            // Columnas de datos
            'name',
            'email',

            [
                'class' => ActionColumn::className(),
                'template' => '{view} {update} {delete}',
                'urlCreator' => function ($action, Profile $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>
    <?php Pjax::end(); ?>

</div>

<!-- JavaScript para ocultar el mensaje después de 5 segundos -->
<script>
    setTimeout(function() {
        var messages = document.querySelectorAll('.flash-message');
        messages.forEach(function(message) {
            message.style.transition = 'opacity 1s';
            message.style.opacity = '0';
            setTimeout(function() {
                message.style.display = 'none';
            }, 1000); // Espera 1 segundo adicional después de que la opacidad llegue a 0 para quitar el mensaje
        });
    }, 5000); // 5000 ms = 5 segundos
</script>
```