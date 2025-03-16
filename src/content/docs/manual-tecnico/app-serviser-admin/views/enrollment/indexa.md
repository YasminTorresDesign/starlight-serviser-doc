---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `index.php`
---

## Documentación Técnica del Archivo `index.php` en la Carpeta `appServiserAdmin/views/enrollment`

---

## Español

## Propósito del Archivo
El archivo index.php es un componente de vista en una aplicación web construida con el framework Yii2. Su propósito principal es mostrar una lista de inscripciones existentes, permitiendo a los usuarios ver, buscar, y gestionar las inscripciones de los usuarios en los cursos. Este archivo actúa como la página principal para la gestión de inscripciones.

## Definición de la Carpeta
- Carpeta enrollment: Esta carpeta se especializa en las vistas relacionadas con el proceso de inscripción. Aquí se encuentran los archivos que gestionan la interfaz de usuario para las funcionalidades de inscripción y desinscripción, así como la visualización de inscripciones.

## Funciones del Archivo
1. Carga de Dependencias: El archivo utiliza las clases de Yii para facilitar la creación de vistas, la gestión de HTML y la interacción con el modelo de datos.
2. Visualización de Inscripciones:
Muestra una lista de inscripciones utilizando el widget GridView, que permite la visualización y gestión de datos en formato tabular.
Incluye columnas para mostrar información relevante como el nombre del usuario, el nombre del curso, las fechas de inscripción y desinscripción, y el estado de la inscripción.
3. Filtros y Paginación:
Permite a los usuarios filtrar las inscripciones y navegar a través de múltiples páginas de resultados.
Utiliza Pjax para actualizar partes de la página sin recargarla completamente, mejorando la experiencia del usuario.
4. Acciones de Inscripción y Desinscripción:
Proporciona botones para inscribir y desinscribir usuarios, facilitando la gestión de inscripciones directamente desde la interfaz.
5. Estilos y Scripts:
Se pueden incluir archivos CSS y JavaScript para mejorar la interfaz de usuario y la experiencia de usuario.

---

## English

## Summary of the File index.php

## Purpose of the File
The index.php file is a view component in a web application built with the Yii2 framework. Its main purpose is to display a list of existing enrollments, allowing users to view, search, and manage user enrollments in courses. This file acts as the main page for enrollment management.

## Definition of the Folder
- Folder enrollment: This folder specializes in views related to the enrollment process. It contains files that manage the user interface for enrollment and unenrollment functionalities, as well as viewing enrollments.

## Functions of the File
1. Loading Dependencies: The file uses Yii classes to facilitate view creation, HTML management, and interaction with the data model.
2. Displaying Enrollments:
It shows a list of enrollments using the GridView widget, allowing for the visualization and management of data in a tabular format.
It includes columns to display relevant information such as user name, course name, enrollment and drop dates, and enrollment status.
3. Filters and Pagination:
It allows users to filter enrollments and navigate through multiple pages of results.
It uses Pjax to update parts of the page without fully reloading it, enhancing the user experience.
4. Enrollment and Unenrollment Actions:
It provides buttons to enroll and unenroll users, facilitating enrollment management directly from the interface.
5. Styles and Scripts:
CSS and JavaScript files can be included to enhance the user interface and user experience.

## Structure of the File
The file could be structured as follows:
```
<?php

use common\models\Enrollment;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\widgets\Pjax;

/** @var yii\web\View $this */
/** @var common\models\EnrollmentSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'Enrollments');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="enrollment-index">

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
        <?= Html::a(Yii::t('app', 'Enroll'), ['create'], ['class' => 'btn btn-success']) ?>
        <?= Html::a(Yii::t('app', 'Unenroll'), ['unenroll'], ['class' => 'btn btn-danger']) ?>
    </p>

    <?php Pjax::begin(); ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            // Columnas de datos
            [
                'attribute' => 'user_id',
                'label' => Yii::t('app', 'User Name'),
                'value' => function ($model) {
                    return $model->user->email;
                }
            ],
            [
                'attribute' => 'course_id',
                'label' => Yii::t('app', 'Module Name'),
                'value' => function ($model) {
                    return $model->course->title;
                }
            ],
            'enrolled_at:datetime',
            'dropped_at:datetime',
            [
                'attribute' => 'status',
                'value' => function ($model) {
                    return $model->getStatusLabel();
                },
            ],
            [
                'class' => ActionColumn::className(),
                'template' => '{view} {update} {delete}',
                'urlCreator' => function ($action, Enrollment $model, $key, $index, $column) {
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