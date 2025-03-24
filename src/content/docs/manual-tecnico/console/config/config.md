---
title: Carpeta config
description: Carpeta config.
---

## Documentación Técnica de la carpeta `config`

## Información General

### Estructura

La carpeta presenta la siguiente estructura:
``` plaintext
config/
    |---gitignore
    |---bootstrap.php
    |---main-local.php
    |---main.php
    |---params-local.php
    |---params.php
    |---test.php
```
<br>
Donde:<br>

##### `gitignore`
Contiene una lista de directorios del proyecto que serán ignorados por git:

Está conformado por:
``` sql
main-local.php
params-local.php
test-local.php
``` 

##### `bootstrap.php`
Este es un directorio opcional que se usa cuando se necesita realizar alguna configuración antes de ejecutar los comandos de la consola como incluir la inicialización de variables, la carga de dependencias, entre otros. Para este proyecto en particular, este directorio se encuentra vacio.

##### `main-local.php`
Este es el archivo de configuración principal para la aplicación de consola cuando su uso se limita a un entorno local. Define componentes y configuraciones necesarias cuando se ejecutan comandos CLI.
Este presenta la siguiente estructura:

``` php
<?php
return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=servisena', 
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
        ],
    ],
];
```
<br>
Donde:<br>

`'components'` → Define los componentes que la aplicación Yii2 utilizará.<br>
`'db'` → Define la conexión a la base de datos.<br>
`'class' => 'yii\db\Connection'` → Especifica la clase de conexión a la base de datos en Yii2.<br>
`'dsn' => 'mysql:host=localhost;dbname=servisena`
- `mysql:host=localhost` → Indica que la base de datos está en el mismo servidor.
- `dbname=servisena` → Nombre de la base de datos a la que se conecta.<br>

`'username' => 'root'` → Usuario para acceder a la base de datos.<br>
`'password' => ''` → Contraseña del usuario. En este caso, está vacía, lo cual no es lo recomendado en entornos de producción.<br>
`'charset' => 'utf8'` → Define la codificación de caracteres para la base de datos, asegurando compatibilidad con caracteres especiales.<br>



##### `main.php`
Este es el archivo de configuración principal para la aplicación de consola. Define componentes y configuraciones necesarias cuando se ejecutan comandos CLI. Este presenta la siguiente estructura:

``` php
<?php

$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);

return [
    'id' => 'app-console',
    'timeZone' => 'America/Bogota',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'controllerNamespace' => 'console\controllers',
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'controllerMap' => [
        'fixture' => [
            'class' => \yii\console\controllers\FixtureController::class,
            'namespace' => 'common\fixtures',
          ],
    ],
    'components' => [
        'log' => [
            'targets' => [
                [
                    'class' => \yii\log\FileTarget::class,
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
    ],
    'params' => $params,
];
```

Fragmentándolo, se tiene lo siguiente:

Que en esta porción de código se realiza la importación de parámetros:
``` php
$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);
```

En esta se combinan varios archivos de parámetros (`params.php` y `params-local.php`) tanto de `common/config/` como de `console/config/`. Donde:
- `common/config/params.php` → Parámetros generales para todo el proyecto.<br>
- `common/config/params-local.php` → Parámetros específicos para cada entorno (local, producción).<br>
- `console/config/params.php` → Parámetros exclusivos para la aplicación de consola.<br>
- `console/config/params-local.php` → Parámetros locales solo para la consola.<br><br>

Luego, en esta porción de código se realiza la configuración general:
``` php
'id' => 'app-console',
    'timeZone' => 'America/Bogota',
    'basePath' => dirname(__DIR__),
);
```
Donde:
- `'id' => 'app-console'` → Identificador único de la aplicación.<br>
- `'timeZone' => 'America/Bogota'` → Configura la zona horaria a Colombia.<br>
- `'basePath' => dirname(__DIR__)` → Establece la raíz de la aplicación de consola (console/).<br><br>

Luego, en esta porción de código se realiza el arranque de componentes:

``` php
'bootstrap' => ['log'],
```

De esta forma, Yii2 cargará el componente de logs al iniciar la aplicación de consola.<br><br>

Luego, en esta porción de código se realiza la configuración de los controladores:

``` php
'controllerNamespace' => 'console\controllers',
```

Definiendo en este caso, que los comandos de consola se encuentran ubicados en `console/controllers/`.<br><br>

Luego, en esta porción de código se realiza la definición de alias:

``` php
'aliases' => [
    '@bower' => '@vendor/bower-asset',
    '@npm'   => '@vendor/npm-asset',
],
```
- Define rutas de alias para librerías de Bower y NPM dentro de `vendor/`.
- Yii2 Advanced Template usa Composer Asset Plugin para manejar dependencias de frontend.<br><br>

Luego, en esta porción de código se realiza el mapeo de controladores:

``` php
'controllerMap' => [
    'fixture' => [
        'class' => \yii\console\controllers\FixtureController::class,
        'namespace' => 'common\fixtures',
    ],
],
```
- Mapea el comando `yii fixture` para cargar datos de prueba en la base de datos.
- `FixtureController` se usa para manejar fixtures, útiles para pruebas automatizadas.<br><br>

Luego, en esta porción de código se realiza la configuración de logs:

``` php
'components' => [
    'log' => [
        'targets' => [
            [
                'class' => \yii\log\FileTarget::class,
                'levels' => ['error', 'warning'],
            ],
        ],
    ],
],
```

- Configura un log para registrar eventos en la aplicación de consola.
- Solo se guardarán errores y advertencias en archivos de log.<br><br>

Luego, en esta porción de código se realiza la configuración de los parámetros generales:

``` php
'params' => $params,
```

Con lo que se busca incluir los parámetros de configuración previamente combinados.<br>


##### `params-local.php`
Contiene parámetros personalizados que pueden ser utilizados en cualquier parte de la aplicación cuando su uso se limita a un entorno local. Este presenta la siguiente estructura:

``` php
<?php
return [
    // Aquí puedes definir variables personalizadas si el proyecto lo requiere
];
```

##### `params.php`
Contiene parámetros personalizados que pueden ser utilizados en cualquier parte de la aplicación cuando su uso se limita a un entorno local. Este presenta la siguiente estructura:

``` php
<?php

return [
    'adminEmail' => 'admin@example.com',
];
```

##### `test.php`
Este directorio se usa principalmente cuando se ejecutan pruebas automatizadas en Yii2, especialmente con herramientas como Codeception o PHPUnit. Su propósito es modificar ciertas configuraciones para que la aplicación se ejecute en modo de prueba, evitando afectar la base de datos o la configuración de producción. Este presenta la siguiente estructura:

``` php
<?php

return [
];
```

En este caso, el archivo se encuentra vacio. Sin embargo, con este se busca:
- Asegurar un entorno controlado, de forma tal que no afecte la base de datos ni los archivos de producción.
- Permitir la ejecución de pruebas automatizadas: Compatible con Codeception y PHPUnit.
- Facilitar la depuración y optimización: Se pueden habilitar logs o configuraciones específicas para debugging.