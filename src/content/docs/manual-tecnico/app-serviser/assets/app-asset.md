---
title: Manual Técnico AppServiser
description:  Documentación Técnica del Archivo `AppAsset.php`
---

## Documentación Técnica del Archivo `AppAsset` en la Carpeta `appServiser/assets`

---

## 📖 Español

### ¿Para qué es?  
El archivo `AppAsset` en la carpeta `appServiser/assets` se utiliza para definir y gestionar los activos de la aplicación, como:  
- **Hojas de estilo (CSS)**  
- **Scripts (JavaScript)**  
- **Otros recursos estáticos**  

Estos son necesarios para el funcionamiento y la presentación de la aplicación.

### Definición del Archivo  
El archivo `AppAsset` generalmente se refiere a una clase que extiende **`AssetBundle`** en Yii2.  
Esta clase se encarga de:  
1. Registrar los activos que se utilizarán en la aplicación.  
2. Asegurar que estos se carguen correctamente en las vistas.  

### Propósito  
Centralizar la gestión de los recursos estáticos de la aplicación.  
Esto permite:  
- Definir qué archivos se deben incluir y en qué orden.  
- Optimizar la carga de las páginas.  
- Mantener el código organizado.  

### Estructura Común  
- **`basePath`**: Define la ruta base donde se encuentran los archivos de activos.  
- **`baseUrl`**: Define la URL base para acceder a los archivos de activos.  
- **`css`**: Un array con las rutas a los archivos CSS que se deben incluir.  
- **`js`**: Un array con las rutas a los archivos JavaScript que se deben incluir.  
- **`depends`**: Un array que define las dependencias de otros `AssetBundle` que deben cargarse antes de este.

### Ejemplo de contenido  
```php
<?php

namespace app\assets;

use yii\web\AssetBundle;

class AppAsset extends AssetBundle {
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
    ];
    public $js = [
        'js/app.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}

```

## English

### What is it for?  
The `AppAsset` file in the `appServiser/assets` folder is used to define and manage the assets of the application, such as:  
- **Stylesheets (CSS)**  
- **Scripts (JavaScript)**  
- **Other static resources**  

These assets are necessary for the operation and presentation of the application.

### Definition of the File  
The `assets` file generally refers to a class that extends **`AssetBundle`** in Yii2. This class is responsible for:  
1. Registering the assets to be used in the application.  
2. Ensuring they are loaded correctly in the views.  

### Purpose  
The purpose of the `assets` file is to centralize the management of the application's static resources. This allows developers to:  
- Define which files should be included and in what order.  
- Optimize page loading.  
- Keep the code organized.  

### Common Structure  
- **`basePath`**: Defines the base path where the asset files are located.  
- **`baseUrl`**: Defines the base URL to access the asset files.  
- **`css`**: An array containing the paths to the CSS files to be included.  
- **`js`**: An array containing the paths to the JavaScript files to be included.  
- **`depends`**: An array defining the dependencies of other `AssetBundle` that should be loaded before this one.


