---
title: Carpeta controllers
description: Carpeta controllers.
---

## Documentación Técnica de la carpeta `controllers`

## Información General

### Estructura

La carpeta presenta la siguiente estructura:
``` sql
controllers/
    |---.gitkeep
    |---RbacController.php
```
<br>
Donde:<br>

##### `.gitkeep`
Se trata de un archivo vacio empleado para permitir que una carpeta vacía (excepto por ese archivo) se cree al clonar el repositorio, ya que las carpetas vacías no forman parte del control de versiones.<br>

##### `RbacController.php`
Se encarga de gestionar los roles y permisos del sistema utilizando el componente **RBAC** (Role-Based Access Control) en Yii2. Este presenta la siguiente estructura:<br>

``` php
<?php
namespace console\controllers;

use Yii;
use yii\console\Controller;

class RbacController extends Controller
{
    public function actionInit()
    {
        $auth = Yii::$app->authManager;

        // Eliminar todos los datos anteriores de RBAC
        $auth->removeAll();
        
        // Crear roles
        $superAdmin = $auth->createRole('superadmin');
        $superAdmin->description = 'Has access to all system features';
        $auth->add($superAdmin);

        $admin = $auth->createRole('admin');
        $admin->description = 'Can manage system settings and users';
        $auth->add($admin);

        $instructor = $auth->createRole('instructor');
        $instructor->description = 'Responsible for delivering training and courses';
        $auth->add($instructor);

        $apprentice = $auth->createRole('apprentice');
        $apprentice->description = 'Learner with access to training materials';
        $auth->add($apprentice);

        $subscriber = $auth->createRole('subscriber');
        $subscriber->description = 'Basic access to the platform, with limited features';
        $auth->add($subscriber);

        // Asignar roles a usuarios
        $auth->assign($superAdmin, 1);
        $auth->assign($admin, 10);           
        $auth->assign($instructor, 11);
        $auth->assign($apprentice, 12);
        $auth->assign($subscriber, 13);
    }
}
```

Fragmentándolo, se tiene lo siguiente:

Que en esta porción de código se especifican los nombres y uso de Yii2:
``` php
namespace console\controllers;

use Yii;
use yii\console\Controller;
```

- Define el namespace como console\controllers, indicando que este controlador es para la consola.
- Extiende yii\console\Controller, lo que permite ejecutar este controlador desde la línea de comandos.

<br>

Luego, en esta porción de código se realiza la configuración general:<br>

``` php
public function actionInit()
```

Este método se ejecuta cuando llamamos:
``` php
php yii rbac/init
```
<br>

Su objetivo es:

- Eliminar todos los datos anteriores de RBAC.
- Crear nuevos roles (`superadmin`, `admin`, etc.).
- Asignar roles a usuarios específicos.
<br>
Luego, en esta porción de código se realiza la eliminación de datos RBAC previos:

``` php
$auth = Yii::$app->authManager;
$auth->removeAll();
```

<br>
- Obtiene la instancia del gestor de autenticación (`authManager`).
- Usa `removeAll()` para eliminar todos los permisos, roles y asignaciones previas, evitando conflictos.
<br>
Luego, en esta porción de código se realiza la creación de roles:

``` php
$superAdmin = $auth->createRole('superadmin');
$superAdmin->description = 'Has access to all system features';
$auth->add($superAdmin);
```
<br>

- Usa `createRole('nombre_rol')` para definir un nuevo rol.
- Se le asigna una descripción.
- Finalmente, se guarda con `$auth->add($rol)`.

Con esto, se crean los siguientes roles:

|Rol	|Descripción		|
|:-------------:|:-------------:|
|superadmin		|Acceso total al sistema	|
|admin	|Gestiona configuración y usuarios	|
|instructor	|Imparte cursos	|
|apprentice	|Tiene acceso a materiales de aprendizaje	|
|subscriber	|Acceso básico a la plataforma	|

<br>
Luego, en esta porción de código se realiza la asignación de roles a usuarios:

``` php
$auth->assign($superAdmin, 1);
$auth->assign($admin, 10);
$auth->assign($instructor, 11);
$auth->assign($apprentice, 12);
$auth->assign($subscriber, 13);
```
<br>

- Se asignan roles a usuarios específicos por ID.
- Ejemplo: El usuario con ID 1 será `superadmin`.

