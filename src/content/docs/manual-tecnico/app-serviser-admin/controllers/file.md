---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `FileController.php`
---

## Documentación Técnica del Archivo `FileController.php` en la Carpeta `appServiserAdmin/controllers`

---

## Español

## Definición de la Carpeta
El archivo `FileController.php` se encuentra en la carpeta de controladores de un proyecto que utiliza el marco de trabajo Yii2. Este archivo es responsable de manejar las acciones relacionadas con el modelo de `File`, que generalmente se utiliza para gestionar archivos en la aplicación.

## Propósito
El propósito del archivo `FileController.php` es implementar las acciones CRUD (Crear, Leer, Actualizar, Eliminar) para el modelo de `File`. Esto permite a los administradores y usuarios gestionar archivos a través de la interfaz de usuario, facilitando la creación, visualización, edición y eliminación de archivos.

## Funciones
1. **Listar Archivos**: Proporciona una acción para listar todos los archivos disponibles en la aplicación.
2. **Ver Archivo**: Permite a los usuarios ver los detalles de un archivo específico.
3. **Crear Archivo**: Facilita la creación de un nuevo archivo a través de un formulario.
4. **Actualizar Archivo**: Permite la edición de un archivo existente.
5. **Eliminar Archivo**: Proporciona la funcionalidad para eliminar un archivo específico.

## Estructura Común
El archivo `FileController.php` suele tener una estructura similar a la siguiente:

```php
<?php

namespace app\controllers;

use Yii;
use common\models\File;
use common\models\FileSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * FileController implements the CRUD actions for File model.
 */
class FileController extends Controller
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
     * Lists all File models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new FileSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single File model.
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
     * Creates a new File model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new File();

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
     * Updates an existing File model.
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
     * Deletes an existing File model.
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
     * Finds the File model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return File the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = File::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
```

## Parámetros
- **Namespace**: Define el espacio de nombres del controlador, que es `app\controllers`.
- **Modelos**: Utiliza el modelo `File` para interactuar con la base de datos.
- **Acciones**: Implementa acciones para listar, ver, crear, actualizar y eliminar archivos.
- **Comportamientos**: Define comportamientos como el manejo de verbos HTTP para las acciones.

---

## English

## Technical Documentation for the File `FileController.php`

## Folder Definition
The `FileController.php` file is located in the controllers folder of a Yii2 project. This file is responsible for handling actions related to the `File` model, which is typically used to manage files in the application.

## Purpose
The purpose of the `FileController.php` file is to implement CRUD (Create, Read, Update, Delete) actions for the `File` model. This allows administrators and users to manage files through the user interface, facilitating the creation, viewing, editing, and deletion of files.

## Functions
1. **List Files**: Provides an action to list all available files in the application.
2. **View File**: Allows users to view the details of a specific file.
3. **Create File**: Facilitates the creation of a new file through a form.
4. **Update File**: Allows editing of an existing file.
5. **Delete File**: Provides functionality to delete a specific file.

## Common Structure
The `FileController.php` file typically has a structure similar to the following:

```php
<?php

namespace app\controllers;

use Yii;
use common\models\File;
use common\models\FileSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * FileController implements the CRUD actions for File model.
 */
class FileController extends Controller
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
     * Lists all File models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new FileSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single File model.
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
     * Creates a new File model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new File();

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
     * Updates an existing File model.
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
     * Deletes an existing File model.
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
     * Finds the File model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return File the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = File::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
```

## Parameters
- **Namespace**: Defines the namespace of the controller, which is `app\controllers`.
- **Models**: Uses the `File` model to interact with the database.
- **Actions**: Implements actions to list, view, create, update, and delete files.
- **Behaviors**: Defines behaviors such as handling HTTP verbs for actions.

---

