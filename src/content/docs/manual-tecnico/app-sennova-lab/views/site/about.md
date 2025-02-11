---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `about.php`
---


## Documentación Técnica del Archivo `about.php` en `/appSennovalab/views/site/`

## Español

### ¿Para qué es?
El archivo `about.php` es una vista que implementa la página "Nosotros" de SennovaLab. Presenta información institucional sobre SENNOVA y el SENA, utilizando Bootstrap 5 para una presentación moderna y responsive.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/views/site/`, directorio que contiene las vistas principales del sitio. Esta ubicación sigue la convención de Yii2 para vistas relacionadas con el controlador `SiteController`.

### Propósito
El propósito principal es mostrar:
- Información institucional de SENNOVA
- Objetivos del sistema
- Información de contacto del SENA
- Presentación visual atractiva con imágenes y contenido estructurado

### Funciones
- **Estructura de la Página**:
  - Banner principal con logo e información
  - Sección de objetivos
  - Información de contacto institucional
  - Elementos visuales y multimedia

- **Componentes Principales**:
  - Secciones responsivas con Bootstrap
  - Imágenes institucionales
  - Textos informativos
  - Enlaces de contacto

---

## English

### What is it for?
The `about.php` file is a view that implements the "About Us" page of SennovaLab. It presents institutional information about SENNOVA and SENA, using Bootstrap 5 for a modern and responsive presentation.

### Folder Definition
Located in `/appSennovalab/views/site/`, directory containing the main site views. This location follows Yii2's convention for views related to the `SiteController`.

### Purpose
The main purpose is to display:
- SENNOVA institutional information
- System objectives
- SENA contact information
- Attractive visual presentation with images and structured content

### Functions
- **Page Structure**:
  - Main banner with logo and information
  - Objectives section
  - Institutional contact information
  - Visual and multimedia elements

- **Main Components**:
  - Responsive sections with Bootstrap
  - Institutional images
  - Informative texts
  - Contact links

```php:appSennovalab/views/site/about.php
<?php
/** @var yii\web\View $this */
use yii\helpers\Html;

$this->title = 'Nosotros';
?>

<!-- Sección Banner Principal / Main Banner Section -->
<section>
    <div class="container-fluid d-flex align-items-center bg-opacity-25" 
         style="background-image: url('images/backgrounds/cacao.jpg'); 
                background-position: center; 
                height: 690px;">
        <!-- Contenido del banner / Banner content -->
        <div class="container">
            <div class="row align-items-center py-5">
                <!-- Logo y descripción / Logo and description -->
            </div>
        </div>
    </div>
</section>

<!-- Sección Objetivo / Objective Section -->
<section class="container py-5">
    <div class="row d-flex align-items-center">
        <!-- Contenido del objetivo / Objective content -->
    </div>
</section>

<!-- Sección Información de Contacto / Contact Information Section -->
<section class="container py-5">
    <div class="row d-flex align-items-center">
        <!-- Información de contacto / Contact information -->
    </div>
</section>
```

### Características Técnicas / Technical Features
- Implementación completa de Bootstrap 5
- Diseño responsive para todos los dispositivos
- Optimización de imágenes de fondo
- Sistema de grid de Bootstrap
- Clases utilitarias de Bootstrap para espaciado y alineación
- Integración con el sistema de assets de Yii2