---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `error.php`
---




# Documentación Técnica del Archivo `error.php` en `/appSennovalab/views/site/`

## Español

### ¿Para qué es?
El archivo `error.php` es una vista especializada que maneja la presentación de errores en la aplicación SennovaLab. Se encarga de mostrar mensajes de error de manera amigable y comprensible para el usuario cuando ocurren excepciones o errores en la aplicación.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/views/site/`, directorio que contiene las vistas principales del sitio. Esta ubicación es estándar en Yii2 para las páginas de error generales de la aplicación.

### Propósito
El propósito principal es:
- Mostrar mensajes de error de forma amigable
- Proporcionar información útil sobre el error
- Mantener la consistencia visual de la aplicación
- Ofrecer opciones de navegación alternativas
- Gestionar diferentes tipos de errores HTTP

### Funciones
- **Componentes Principales**:
  - Título del error
  - Mensaje descriptivo
  - Información adicional para el usuario
  - Sugerencias de acciones a realizar

- **Variables Disponibles**:
  - `$name`: Nombre del error
  - `$message`: Mensaje detallado del error
  - `$exception`: Objeto de la excepción

---

## English

### What is it for?
The `error.php` file is a specialized view that handles error presentation in the SennovaLab application. It is responsible for displaying error messages in a user-friendly and comprehensible way when exceptions or errors occur in the application.

### Folder Definition
Located in `/appSennovalab/views/site/`, directory containing the main site views. This location is standard in Yii2 for general application error pages.

### Purpose
The main purpose is to:
- Display error messages in a user-friendly way
- Provide useful information about the error
- Maintain visual consistency of the application
- Offer alternative navigation options
- Handle different types of HTTP errors

### Functions
- **Main Components**:
  - Error title
  - Descriptive message
  - Additional user information
  - Suggested actions to take

- **Available Variables**:
  - `$name`: Error name
  - `$message`: Detailed error message
  - `$exception`: Exception object

```php:appSennovalab/views/site/error.php
<?php
/** @var yii\web\View $this */
/** @var string $name */
/** @var string $message */
/** @var Exception $exception */

use yii\helpers\Html;

$this->title = $name;
?>
<div class="site-error">
    <!-- Título del Error / Error Title -->
    <h1><?= Html::encode($this->title) ?></h1>

    <!-- Mensaje de Error / Error Message -->
    <div class="alert alert-danger">
        <?= nl2br(Html::encode($message)) ?>
    </div>

    <!-- Información Adicional / Additional Information -->
    <p>
        El error anterior ocurrió mientras el servidor web procesaba su solicitud.
        <!-- The above error occurred while the Web server was processing your request. -->
    </p>
    <p>
        Por favor contáctenos si cree que esto es un error del servidor. Gracias.
        <!-- Please contact us if you think this is a server error. Thank you. -->
    </p>
</div>
```


### Características Técnicas / Technical Features
- Integración con el sistema de manejo de errores de Yii2
- Uso de helpers HTML para codificación segura
- Implementación de clases Bootstrap para estilos
- Soporte para múltiples idiomas
- Manejo de diferentes tipos de excepciones
- Sistema de logging de errores
- Personalización de mensajes según el tipo de error

### Tipos de Errores Manejados / Handled Error Types
- 404 Not Found
- 403 Forbidden
- 500 Internal Server Error
- Errores de validación
- Excepciones personalizadas