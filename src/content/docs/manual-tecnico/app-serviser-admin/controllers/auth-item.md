---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `AuthItemController.php`
---

## Documentación Técnica del Archivo `AuthItemController.php` en la Carpeta `appServiserAdmin/controllers`

---

## Español

## Definición de la Carpeta
El archivo `AuthItemController.php` se encuentra en la carpeta de controladores de un proyecto que utiliza el marco de trabajo Yii2. Este archivo es responsable de manejar las acciones relacionadas con el modelo de `AuthItem`, que generalmente se utiliza para gestionar los elementos de autorización, como roles y permisos en la aplicación.

## Propósito
El propósito del archivo `AuthItemController.php` es implementar las acciones CRUD (Crear, Leer, Actualizar, Eliminar) para el modelo de `AuthItem`. Esto permite a los administradores gestionar los roles y permisos a través de la interfaz de usuario, facilitando la administración de la seguridad de la aplicación.

## Funciones
1. **Listar Elementos de Autorización**: Proporciona una acción para listar todos los elementos de autorización disponibles en la aplicación.
2. **Ver Elemento de Autorización**: Permite a los administradores ver los detalles de un elemento de autorización específico.
3. **Crear Elemento de Autorización**: Facilita la creación de un nuevo elemento de autorización a través de un formulario.
4. **Actualizar Elemento de Autorización**: Permite la edición de un elemento de autorización existente.
5. **Eliminar Elemento de Autorización**: Proporciona la funcionalidad para eliminar un elemento de autorización específico.

## Estructura Común
El archivo `AuthItemController.php` suele tener una estructura similar a la siguiente:

```php
<?php

namespace app\controllers;

use Yii;
use app\models\AuthItem;
use app\models\AuthItemSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * AuthItemController implements the CRUD actions for AuthItem model.
 */
class AuthItemController extends Controller
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
     * Lists all AuthItem models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new AuthItemSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single AuthItem model.
     * @param string $name Name
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($name)
    {
        return $this->render('view', [
            'model' => $this->findModel($name),
        ]);
    }

    /**
     * Creates a new AuthItem model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new AuthItem();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view', 'name' => $model->name]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing AuthItem model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param string $name Name
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($name)
    {
        $model = $this->findModel($name);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'name' => $model->name]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing AuthItem model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param string $name Name
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($name)
    {
        $this->findModel($name)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the AuthItem model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param string $name Name
     * @return AuthItem the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($name)
    {
        if (($model = AuthItem::findOne(['name' => $name])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
```

## Parámetros
- **Namespace**: Define el espacio de nombres del controlador, que es `app\controllers`.
- **Modelos**: Utiliza el modelo `AuthItem` para interactuar con la base de datos.
- **Acciones**: Implementa acciones para listar, ver, crear, actualizar y eliminar elementos de autorización.
- **Comportamientos**: Define comportamientos como el manejo de verbos HTTP para las acciones.

---

## English

## Technical Documentation for the File `AuthItemController.php`

## Folder Definition
The `AuthItemController.php` file is located in the controllers folder of a Yii2 project. This file is responsible for handling actions related to the `AuthItem` model, which is typically used to manage authorization items such as roles and permissions in the application.

## Purpose
The purpose of the `AuthItemController.php` file is to implement CRUD (Create, Read, Update, Delete) actions for the `AuthItem` model. This allows administrators to manage roles and permissions through the user interface, facilitating the administration of application security.

## Functions
1. **List Authorization Items**: Provides an action to list all available authorization items in the application.
2. **View Authorization Item**: Allows administrators to view the details of a specific authorization item.
3. **Create Authorization Item**: Facilitates the creation of a new authorization item through a form.
4. **Update Authorization Item**: Allows editing of an existing authorization item.
5. **Delete Authorization Item**: Provides functionality to delete a specific authorization item.

## Common Structure
The `AuthItemController.php` file typically has a structure similar to the following:

```php
<?php

namespace app\controllers;

use Yii;
use app\models\AuthItem;
use app\models\AuthItemSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * AuthItemController implements the CRUD actions for AuthItem model.
 */
class AuthItemController extends Controller
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
     * Lists all AuthItem models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new AuthItemSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single AuthItem model.
     * @param string $name Name
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($name)
    {
        return $this->render('view', [
            'model' => $this->findModel($name),
        ]);
    }

    /**
     * Creates a new AuthItem model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new AuthItem();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view', 'name' => $model->name]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing AuthItem model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param string $name Name
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($name)
    {
        $model = $this->findModel($name);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'name' => $model->name]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing AuthItem model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param string $name Name
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($name)
    {
        $this->findModel($name)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the AuthItem model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param string $name Name
     * @return AuthItem the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($name)
    {
        if (($model = AuthItem::findOne(['name' => $name])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
```

## Parameters
- **Namespace**: Defines the namespace of the controller, which is `app\controllers`.
- **Models**: Uses the `AuthItem` model to interact with the database.
- **Actions**: Implements actions to list, view, create, update, and delete authorization items.
- **Behaviors**: Defines behaviors such as handling HTTP verbs for actions.

---


