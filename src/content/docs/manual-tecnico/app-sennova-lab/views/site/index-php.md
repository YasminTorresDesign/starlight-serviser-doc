---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `index.php`
---

## Documentación Técnica del Archivo `index.php` en `/appSennovalab/views/site/`

## Español

### ¿Para qué es?
El archivo `index.php` es la vista principal de la página de inicio de SennovaLab. Implementa un diseño moderno y responsive utilizando Bootstrap 5 y Glide.js para presentar la información principal del sitio a través de diferentes secciones interactivas.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/views/site/`, directorio que contiene las vistas principales del sitio. Esta ubicación es fundamental en la estructura MVC de Yii2 para la página de inicio.

### Propósito
El propósito principal es:
- Presentar la página principal del sitio
- Mostrar información destacada de SennovaLab
- Implementar carruseles interactivos
- Exhibir proyectos destacados
- Proporcionar acceso rápido a secciones importantes

### Funciones
- **Secciones Principales**:
  1. Slider Principal (Hero)
  2. Información General
  3. Proyectos Destacados
  4. Galería Fotográfica

- **Componentes Interactivos**:
  - Carrusel principal con imágenes hero
  - Slider de proyectos con Glide.js
  - Galería de imágenes
  - Botones de llamada a la acción

---

## English

### What is it for?
The `index.php` file is the main view of SennovaLab's homepage. It implements a modern and responsive design using Bootstrap 5 and Glide.js to present the site's main information through different interactive sections.

### Folder Definition
Located in `/appSennovalab/views/site/`, directory containing the main site views. This location is fundamental in Yii2's MVC structure for the homepage.

### Purpose
The main purpose is to:
- Present the site's main page
- Display highlighted SennovaLab information
- Implement interactive carousels
- Showcase featured projects
- Provide quick access to important sections

### Functions
- **Main Sections**:
  1. Main Slider (Hero)
  2. General Information
  3. Featured Projects
  4. Photo Gallery

- **Interactive Components**:
  - Main carousel with hero images
  - Project slider with Glide.js
  - Image gallery
  - Call-to-action buttons

```php:appSennovalab/views/site/index.php
<?php
/** @var yii\web\View $this */
use yii\helpers\Url;
use yii\helpers\Html;

$this->title = 'SennovaLab';
?>

<!-- Slider Principal / Main Slider -->
<section>
    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
        <!-- Contenido del carrusel / Carousel content -->
    </div>
</section>

<!-- Información General / General Information -->
<section>
    <div class="container col-xxl-8 px-4 py-5">
        <!-- Contenido informativo / Informative content -->
    </div>
</section>

<!-- Proyectos Destacados / Featured Projects -->
<section>
    <div class="container px-5">
        <div class="glide projectSlider">
            <!-- Slider de proyectos / Projects slider -->
        </div>
    </div>
</section>

<!-- Galería Fotográfica / Photo Gallery -->
<section>
    <div class="glide pictureGallery">
        <!-- Galería de imágenes / Image gallery -->
    </div>
</section>
```



### Características Técnicas / Technical Features
- Implementación de Bootstrap 5 para diseño responsive
- Integración de Glide.js para carruseles
- Sistema de grid responsive
- Optimización de imágenes
- Efectos de transición y animaciones
- Integración con el sistema de assets de Yii2
- Manejo de rutas y URLs dinámicas

### Componentes JavaScript / JavaScript Components
- Inicialización de carruseles Bootstrap
- Configuración de Glide.js
- Manejo de eventos de navegación
- Optimización de carga de imágenes
- Funcionalidades interactivas personalizadas