---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `portfolio.php`
---

## Documentación Técnica del Archivo `portfolio.php` en `/appSennovalab/views/site/`

## Español

### ¿Para qué es?
El archivo `portfolio.php` implementa la vista de proyectos de SennovaLab. Presenta una galería interactiva de los proyectos institucionales utilizando Bootstrap 5 para un diseño moderno y responsive.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/views/site/`, directorio que contiene las vistas principales del sitio. Esta ubicación sigue la estructura MVC de Yii2 para la presentación de proyectos.

### Propósito
El propósito principal es:
- Mostrar los proyectos destacados de SENNOVA
- Presentar información detallada de cada proyecto
- Proporcionar enlaces a los proyectos
- Exhibir imágenes y descripciones
- Facilitar la navegación entre proyectos

### Funciones
- **Secciones Principales**:
  1. Banner principal con información
  2. Listado de proyectos:
     - FEI (Formación y Entrenamiento para la Innovación)
     - ServiSER
     - Congreso/Simposio
     - Cienciometrik

- **Componentes por Proyecto**:
  - Título descriptivo
  - Descripción detallada
  - Imagen representativa
  - Botón de acceso
  - Enlaces relacionados

### Características Técnicas / Technical Features
- Implementación de Bootstrap 5 para diseño responsive
- Sistema de grid para layout flexible
- Optimización de imágenes de fondo
- Efectos de sombra y bordes redondeados
- Enlaces dinámicos a proyectos
- Integración con el sistema de assets de Yii2
- Manejo de rutas y URLs amigables

### Elementos de Diseño / Design Elements
- Fondos con imágenes optimizadas
- Tarjetas con efectos de sombra
- Botones de acción principales
- Imágenes responsivas
- Espaciado y márgenes consistentes
- Tipografía jerárquica
- Paleta de colores institucional

---

## English

### What is it for?
The `portfolio.php` file implements the projects view of SennovaLab. It presents an interactive gallery of institutional projects using Bootstrap 5 for a modern and responsive design.

### Folder Definition
Located in `/appSennovalab/views/site/`, directory containing the main site views. This location follows Yii2's MVC structure for project presentation.

### Purpose
The main purpose is to:
- Display SENNOVA's featured projects
- Present detailed information for each project
- Provide links to projects
- Show images and descriptions
- Facilitate navigation between projects

### Functions
- **Main Sections**:
  1. Main banner with information
  2. Project listing:
     - FEI (Training and Education for Innovation)
     - ServiSER
     - Congress/Symposium
     - Cienciometrik

- **Components per Project**:
  - Descriptive title
  - Detailed description
  - Representative image
  - Access button
  - Related links

```php:appSennovalab/views/site/portfolio.php
<?php
/** @var yii\web\View $this */
use yii\helpers\Html;

$this->title = 'Proyectos';
?>

<!-- Banner Principal / Main Banner -->
<section>
    <div class="container-fluid d-flex align-items-center bg-opacity-25" 
         style="background-image: url('images/backgrounds/proyectos.jpg'); 
                background-position: center; 
                height: 690px;">
        <!-- Contenido del banner / Banner content -->
        <div class="container">
            <div class="row align-items-center py-5">
                <!-- Logo e información / Logo and information -->
            </div>
        </div>
    </div>
</section>

<!-- Sección de Proyectos / Projects Section -->
<section>
    <!-- Proyecto FEI / FEI Project -->
    <div class="container my-5">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <!-- Contenido del proyecto / Project content -->
        </div>
    </div>

    <!-- Otros proyectos / Other projects -->
    <!-- ServiSER, Congreso/Simposio, Cienciometrik -->
</section>
```




