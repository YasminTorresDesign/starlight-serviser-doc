---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `CourseModuleController.php`
---

## Documentación Técnica del Archivo `CourseModuleController.php` en la Carpeta `appServiserAdmin/controllers`

---

## Español

## Definición de la Carpeta
El archivo `CourseModuleController.php` se encuentra en la carpeta de controladores de un proyecto que utiliza el marco de trabajo Yii2. Este archivo es responsable de manejar las acciones relacionadas con el modelo de `CourseModule`, que generalmente se utiliza para gestionar módulos de cursos en la aplicación.

## Propósito
El propósito del archivo `CourseModuleController.php` es implementar las acciones CRUD (Crear, Leer, Actualizar, Eliminar) para el modelo de `CourseModule`. Esto permite a los administradores y usuarios gestionar los módulos de cursos a través de la interfaz de usuario, facilitando la creación, visualización, edición y eliminación de módulos de cursos.

## Funciones
1. **Listar Módulos de Curso**: Proporciona una acción para listar todos los módulos de curso disponibles en la aplicación.
2. **Ver Módulo de Curso**: Permite a los usuarios ver los detalles de un módulo de curso específico.
3. **Crear Módulo de Curso**: Facilita la creación de un nuevo módulo de curso a través de un formulario.
4. **Actualizar Módulo de Curso**: Permite la edición de un módulo de curso existente.
5. **Eliminar Módulo de Curso**: Proporciona la funcionalidad para eliminar un módulo de curso específico.

## Estructura Común
El archivo `CourseModuleController.php` suele tener una estructura similar a la siguiente:

```php
<?php

namespace app\controllers;

use Yii;
use common\models\CourseModule;
use common\models\CourseModuleSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * CourseModuleController implements the CRUD actions for CourseModule model.
 */
class CourseModuleController extends Controller
{
    /**
     * @inheritDoc
     */
    public function behaviors()
    {
        return array_merge(
            parent::behaviors(),
            [
                'verbs' => [
                    'class' => VerbFilter::className(),
                    'actions' => [
                        'delete' => ['POST'],
                    ],
                ],
            ]
        );
    }

    /**
     * Lists all CourseModule models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new CourseModuleSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single CourseModule model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new CourseModule model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new CourseModule();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing CourseModule model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing CourseModule model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the CourseModule model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return CourseModule the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = CourseModule::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
```

## Parámetros
- **Namespace**: Define el espacio de nombres del controlador, que es `app\controllers`.
- **Modelos**: Utiliza el modelo `CourseModule` para interactuar con la base de datos.
- **Acciones**: Implementa acciones para listar, ver, crear, actualizar y eliminar módulos de curso.
- **Comportamientos**: Define comportamientos como el manejo de verbos HTTP para las acciones.

---

## English

## Technical Documentation for the File `CourseModuleController.php`

## Folder Definition
The `CourseModuleController.php` file is located in the controllers folder of a Yii2 project. This file is responsible for handling actions related to the `CourseModule` model, which is typically used to manage course modules in the application.

## Purpose
The purpose of the `CourseModuleController.php` file is to implement CRUD (Create, Read, Update, Delete) actions for the `CourseModule` model. This allows administrators and users to manage course modules through the user interface, facilitating the creation, viewing, editing, and deletion of course modules.

## Functions
1. **List Course Modules**: Provides an action to list all available course modules in the application.
2. **View Course Module**: Allows users to view the details of a specific course module.
3. **Create Course Module**: Facilitates the creation of a new course module through a form.
4. **Update Course Module**: Allows editing of an existing course module.
5. **Delete Course Module**: Provides functionality to delete a specific course module.

## Common Structure
The `CourseModuleController.php` file typically has a structure similar to the following:

```php
<?php

namespace app\controllers;

use Yii;
use common\models\CourseModule;
use common\models\CourseModuleSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * CourseModuleController implements the CRUD actions for CourseModule model.
 */
class CourseModuleController extends Controller
{
    /**
     * @inheritDoc
     */
    public function behaviors()
    {
        return array_merge(
            parent::behaviors(),
            [
                'verbs' => [
                    'class' => VerbFilter::className(),
                    'actions' => [
                        'delete' => ['POST'],
                    ],
                ],
            ]
        );
    }

    /**
     * Lists all CourseModule models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new CourseModuleSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single CourseModule model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new CourseModule model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new CourseModule();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing CourseModule model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing CourseModule model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the CourseModule model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return CourseModule the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = CourseModule::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
```

## Parameters
- **Namespace**: Defines the namespace of the controller, which is `app\controllers`.
- **Models**: Uses the `CourseModule` model to interact with the database.
- **Actions**: Implements actions to list, view, create, update, and delete course modules.
- **Behaviors**: Defines behaviors such as handling HTTP verbs for actions.

---


