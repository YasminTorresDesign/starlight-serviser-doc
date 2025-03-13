---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `EnrollmentMessageController.php`
---

## Documentación Técnica del Archivo `EnrollmentMessageController.php` en la Carpeta `appServiserAdmin/controllers`

---

## Español

## Definición de la Carpeta
El archivo `EnrollmentMessageController.php` se encuentra en la carpeta de controladores de un proyecto que utiliza el marco de trabajo Yii2. Este archivo es responsable de manejar las acciones relacionadas con el modelo de `EnrollmentMessage`, que generalmente se utiliza para gestionar los mensajes de inscripción en la aplicación.

## Propósito
El propósito del archivo `EnrollmentMessageController.php` es implementar las acciones CRUD (Crear, Leer, Actualizar, Eliminar) para el modelo de `EnrollmentMessage`. Esto permite a los administradores y usuarios gestionar los mensajes relacionados con las inscripciones a través de la interfaz de usuario, facilitando la creación, visualización, edición y eliminación de mensajes.

## Funciones
1. **Listar Mensajes de Inscripción**: Proporciona una acción para listar todos los mensajes de inscripción disponibles en la aplicación.
2. **Ver Mensaje de Inscripción**: Permite a los usuarios ver los detalles de un mensaje de inscripción específico.
3. **Crear Mensaje de Inscripción**: Facilita la creación de un nuevo mensaje de inscripción a través de un formulario.
4. **Actualizar Mensaje de Inscripción**: Permite la edición de un mensaje de inscripción existente.
5. **Eliminar Mensaje de Inscripción**: Proporciona la funcionalidad para eliminar un mensaje de inscripción específico.

## Estructura Común
El archivo `EnrollmentMessageController.php` suele tener una estructura similar a la siguiente:

```php
<?php

namespace app\controllers;

use Yii;
use common\models\EnrollmentMessage;
use common\models\EnrollmentMessageSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * EnrollmentMessageController implements the CRUD actions for EnrollmentMessage model.
 */
class EnrollmentMessageController extends Controller
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
     * Lists all EnrollmentMessage models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new EnrollmentMessageSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single EnrollmentMessage model.
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
     * Creates a new EnrollmentMessage model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new EnrollmentMessage();

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
     * Updates an existing EnrollmentMessage model.
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
     * Deletes an existing EnrollmentMessage model.
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
     * Finds the EnrollmentMessage model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return EnrollmentMessage the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = EnrollmentMessage::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
```

## Parámetros
- **Namespace**: Define el espacio de nombres del controlador, que es `app\controllers`.
- **Modelos**: Utiliza el modelo `EnrollmentMessage` para interactuar con la base de datos.
- **Acciones**: Implementa acciones para listar, ver, crear, actualizar y eliminar mensajes de inscripción.
- **Comportamientos**: Define comportamientos como el manejo de verbos HTTP para las acciones.

---

## English

## Technical Documentation for the File `EnrollmentMessageController.php`

## Folder Definition
The `EnrollmentMessageController.php` file is located in the controllers folder of a Yii2 project. This file is responsible for handling actions related to the `EnrollmentMessage` model, which is typically used to manage enrollment messages in the application.

## Purpose
The purpose of the `EnrollmentMessageController.php` file is to implement CRUD (Create, Read, Update, Delete) actions for the `EnrollmentMessage` model. This allows administrators and users to manage messages related to enrollments through the user interface, facilitating the creation, viewing, editing, and deletion of messages.

## Functions
1. **List Enrollment Messages**: Provides an action to list all available enrollment messages in the application.
2. **View Enrollment Message**: Allows users to view the details of a specific enrollment message.
3. **Create Enrollment Message**: Facilitates the creation of a new enrollment message through a form.
4. **Update Enrollment Message**: Allows editing of an existing enrollment message.
5. **Delete Enrollment Message**: Provides functionality to delete a specific enrollment message.

## Common Structure
The `EnrollmentMessageController.php` file typically has a structure similar to the following:

```php
<?php

namespace app\controllers;

use Yii;
use common\models\EnrollmentMessage;
use common\models\EnrollmentMessageSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * EnrollmentMessageController implements the CRUD actions for EnrollmentMessage model.
 */
class EnrollmentMessageController extends Controller
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
     * Lists all EnrollmentMessage models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new EnrollmentMessageSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single EnrollmentMessage model.
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
     * Creates a new EnrollmentMessage model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new EnrollmentMessage();

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
     * Updates an existing EnrollmentMessage model.
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
     * Deletes an existing EnrollmentMessage model.
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
     * Finds the EnrollmentMessage model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return EnrollmentMessage the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = EnrollmentMessage::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
```

## Parameters
- **Namespace**: Defines the namespace of the controller, which is `app\controllers`.
- **Models**: Uses the `EnrollmentMessage` model to interact with the database.
- **Actions**: Implements actions to list, view, create, update, and delete enrollment messages.
- **Behaviors**: Defines behaviors such as handling HTTP verbs for actions.

---
`


