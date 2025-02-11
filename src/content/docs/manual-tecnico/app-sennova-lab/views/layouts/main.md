---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `main.php`
---


## Documentación Técnica del Archivo `main.php` en `/appSennovalab/views/layouts/`

## Español

### ¿Para qué es?
El archivo `main.php` es el layout principal que define la estructura base HTML para todas las páginas de la aplicación SennovaLab. Actúa como una plantilla maestra que incorpora elementos comunes como cabecera, pie de página y scripts necesarios.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/views/layouts/`, que es el directorio central para los archivos de diseño principal en la arquitectura MVC de Yii2. Este archivo es fundamental para mantener la consistencia visual y funcional de la aplicación.

### Propósito
El propósito principal es proporcionar:
- Estructura HTML5 base para todas las páginas
- Integración de recursos CSS y JavaScript
- Marco común para el contenido dinámico
- Sistema de gestión de assets
- Integración de componentes comunes (header/footer)

### Funciones
- **Estructura Principal**:
  - Configuración del DOCTYPE HTML5
  - Metadatos y enlaces a recursos externos
  - Integración de Bootstrap y otros frameworks
  - Sistema de mensajes flash
  - Gestión de breadcrumbs

- **Componentes Integrados**:
  - AppAsset para gestión de recursos
  - Bootstrap 5 y sus dependencias
  - Glide.js para carruseles
  - Bootstrap Icons
  - Google Fonts
  - Scripts personalizados

---

## English

### What is it for?
The `main.php` file is the main layout that defines the base HTML structure for all pages in the SennovaLab application. It acts as a master template that incorporates common elements such as header, footer, and necessary scripts.

### Folder Definition
Located in `/appSennovalab/views/layouts/`, which is the central directory for main layout files in Yii2's MVC architecture. This file is fundamental for maintaining the visual and functional consistency of the application.

### Purpose
The main purpose is to provide:
- Base HTML5 structure for all pages
- CSS and JavaScript resource integration
- Common framework for dynamic content
- Asset management system
- Integration of common components (header/footer)

### Functions
- **Main Structure**:
  - HTML5 DOCTYPE configuration
  - Metadata and external resource links
  - Bootstrap and other frameworks integration
  - Flash message system
  - Breadcrumbs management

- **Integrated Components**:
  - AppAsset for resource management
  - Bootstrap 5 and its dependencies
  - Glide.js for carousels
  - Bootstrap Icons
  - Google Fonts
  - Custom scripts

```php:appSennovalab/views/layouts/main.php
<?php
/** @var \yii\web\View $this */
/** @var string $content */

use common\widgets\Alert;
use appSennovalab\assets\AppAsset;
// ... más imports / more imports ...

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>" class="h-100">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    <!-- Enlaces externos / External links -->
</head>
<body class="d-flex flex-column h-100">
<?php $this->beginBody() ?>

<!-- Header Section -->
<?= $this->render('header') ?>

<!-- Content Section -->
<main role="main" class="flex-shrink-0">
    <!-- Contenido dinámico / Dynamic content -->
    <?= $content ?>
</main>

<!-- Footer Section -->
<?= $this->render('footer') ?>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
```

### Características Técnicas / Technical Features
- Implementación completa de HTML5
- Sistema de gestión de assets de Yii2
- Integración responsive con Bootstrap 5
- Soporte para múltiples idiomas
- Sistema de mensajes flash
- Gestión de breadcrumbs
- Scripts para funcionalidades específicas (scroll to top, mensajes flash)