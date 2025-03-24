---
title: Carpeta console
description: Carpeta console.
---

## Documentación Técnica de la carpeta `console`

## Información General

### Contexto
El proyecto SERVISER, al ser desarrollado con el framework Yii2 Advanced Template, incorpora en su estructura la carpeta `console`, la cual está diseñada para contener la configuración y los comandos de consola que se ejecutan a través de la línea de comandos (CLI). Su principal propósito es el de facilitar la automatización y administración del sistema de aquellas tareas que no dependen de la interacción con el navegador.

Contenido típico de la carpeta
La carpeta presenta la siguiente estructura básica:
``` sql
console/
    |---config/
    |---controllers/
    |---migrations/
    |---models/
    |---runtime/
```

Donde:<br>
`config/` → Contiene la configuración específica para la consola (`console.php`). Puede incluir configuraciones como:

- Componentes del sistema (como la base de datos).
- Parámetros específicos para ejecución en consola.
- Configuración de módulos de consola.

`controllers/` → Contiene controladores de consola que extienden de `yii\console\Controller`. Estos controladores permiten ejecutar comandos de administración. Ejemplo:

``` php
namespace console\controllers;

use yii\console\Controller;

class HelloController extends Controller
{
    public function actionIndex()
    {
        echo "Hello, Yii2 Console!\n";
    }
}
```

Para ejecutar este comando, se usa:

```bash
php yii hello/index
```

`migrations/` → Contiene archivos de migraciones para la base de datos. Las migraciones permiten gestionar cambios en la estructura de la base de datos de manera controlada. Se ejecutan con:

```nginx
php yii migrate
```

`models/` → Si se requieren modelos exclusivos para operaciones en consola, pueden ubicarse aquí.

`runtime/` → Carpeta donde Yii2 almacena archivos temporales usados en la ejecución de comandos de consola.

`yii` (**archivo ejecutable**) → Es un script PHP que sirve como punto de entrada para ejecutar comandos en la aplicación Yii2.

### Usos comunes de la consola en Yii2 Advanced:
- Ejecutar tareas programadas (cron jobs).
- Realizar mantenimiento de la base de datos (migraciones).
- Enviar correos electrónicos en segundo plano.
- Procesar colas de trabajo.
- Importar/exportar datos.

<br>
A continuación, se amplía la información sobre cada sección y lo que contiene...