---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `EnrollmentController.php`
---

## Documentación Técnica del Archivo `EnrollmentController.php` en la Carpeta `appServiserAdmin/controllers`

---

## Español

## Definición de la Carpeta
El archivo `EnrollmentController.php` se encuentra en la carpeta de controladores de un proyecto que utiliza el marco de trabajo Yii2. Este archivo es responsable de manejar las acciones relacionadas con el modelo de `Enrollment`, que generalmente se utiliza para gestionar las inscripciones de los estudiantes en cursos o programas.

## Propósito
El propósito del archivo `EnrollmentController.php` es implementar las acciones CRUD (Crear, Leer, Actualizar, Eliminar) para el modelo de `Enrollment`. Esto permite a los administradores y usuarios gestionar las inscripciones a través de la interfaz de usuario, facilitando la creación, visualización, edición y eliminación de inscripciones.

## Funciones
1. **Listar Inscripciones**: Proporciona una acción para listar todas las inscripciones disponibles en la aplicación.
2. **Ver Inscripción**: Permite a los usuarios ver los detalles de una inscripción específica.
3. **Crear Inscripción**: Facilita la creación de una nueva inscripción a través de un formulario.
4. **Actualizar Inscripción**: Permite la edición de una inscripción existente.
5. **Eliminar Inscripción**: Proporciona la funcionalidad para eliminar una inscripción específica.

## Estructura Común
El archivo `EnrollmentController.php` suele tener una estructura similar a la siguiente:

```php
<?php

namespace app\controllers;

use Yii;
use common\models\Enrollment;
use common\models\EnrollmentSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * EnrollmentController implements the CRUD actions for Enrollment model.
 */
class EnrollmentController extends Controller
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
     * Lists all Enrollment models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new EnrollmentSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Enrollment model.
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
     * Creates a new Enrollment model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Enrollment();

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
     * Updates an existing Enrollment model.
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
     * Deletes an existing Enrollment model.
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
     * Finds the Enrollment model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Enrollment the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Enrollment::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
```

## Parámetros
- **Namespace**: Define el espacio de nombres del controlador, que es `app\controllers`.
- **Modelos**: Utiliza el modelo `Enrollment` para interactuar con la base de datos.
- **Acciones**: Implementa acciones para listar, ver, crear, actualizar y eliminar inscripciones.
- **Comportamientos**: Define comportamientos como el manejo de verbos HTTP para las acciones.

---

## English

## Technical Documentation for the File `EnrollmentController.php`

## Folder Definition
The `EnrollmentController.php` file is located in the controllers folder of a Yii2 project. This file is responsible for handling actions related to the `Enrollment` model, which is typically used to manage student enrollments in courses or programs.

## Purpose
The purpose of the `EnrollmentController.php` file is to implement CRUD (Create, Read, Update, Delete) actions for the `Enrollment` model. This allows administrators and users to manage enrollments through the user interface, facilitating the creation, viewing, editing, and deletion of enrollments.

## Functions
1. **List Enrollments**: Provides an action to list all available enrollments in the application.
2. **View Enrollment**: Allows users to view the details of a specific enrollment.
3. **Create Enrollment**: Facilitates the creation of a new enrollment through a form.
4. **Update Enrollment**: Allows editing of an existing enrollment.
5. **Delete Enrollment**: Provides functionality to delete a specific enrollment.

## Common Structure
The `EnrollmentController.php` file typically has a structure similar to the following:

```php
<?php

namespace app\controllers;

use Yii;
use common\models\Enrollment;
use common\models\EnrollmentSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * EnrollmentController implements the CRUD actions for Enrollment model.
 */
class EnrollmentController extends Controller
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
     * Lists all Enrollment models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new EnrollmentSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Enrollment model.
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
     * Creates a new Enrollment model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Enrollment();

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
     * Updates an existing Enrollment model.
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
     * Deletes an existing Enrollment model.
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
     * Finds the Enrollment model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Enrollment the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Enrollment::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
```

## Parameters
- **Namespace**: Defines the namespace of the controller, which is `app\controllers`.
- **Models**: Uses the `Enrollment` model to interact with the database.
- **Actions**: Implements actions to list, view, create, update, and delete enrollments.
- **Behaviors**: Defines behaviors such as handling HTTP verbs for actions.

---

