---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `header.php`
---


## Documentación Técnica del Archivo `header.php` en `/appSennovalab/views/layouts/`

## Español

### ¿Para qué es?
El archivo `header.php` es un componente de vista que implementa la cabecera principal para todas las páginas de la aplicación SennovaLab. Utiliza Yii2 y Bootstrap 5 para crear una barra de navegación responsive y dinámica.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/views/layouts/`, directorio destinado a los componentes de diseño principales que definen la estructura visual común de la aplicación dentro de la arquitectura MVC de Yii2.

### Propósito
El propósito principal es proporcionar una cabecera estandarizada que incluye:
- Logo de la aplicación
- Menú de navegación principal
- Sistema de navegación responsive
- Enlaces a secciones principales

### Funciones
- **Estructura del Header**:
  - Barra de navegación Bootstrap (`navbar`)
  - Logo institucional con enlace a inicio
  - Menú hamburguesa para dispositivos móviles
  - Enlaces de navegación principales

- **Componentes Principales**:
  - Logo de Serviser
  - Menú de navegación con enlaces a:
    - Inicio
    - Nosotros
    - Contacto
    - Proyectos
  - Sistema responsive para diferentes tamaños de pantalla

---

## English

### What is it for?
The `header.php` file is a view component that implements the main header for all pages in the SennovaLab application. It uses Yii2 and Bootstrap 5 to create a responsive and dynamic navigation bar.

### Folder Definition
Located in `/appSennovalab/views/layouts/`, a directory intended for main layout components that define the common visual structure of the application within Yii2's MVC architecture.

### Purpose
The main purpose is to provide a standardized header that includes:
- Application logo
- Main navigation menu
- Responsive navigation system
- Links to main sections

### Functions
- **Header Structure**:
  - Bootstrap navigation bar (`navbar`)
  - Institutional logo with home link
  - Hamburger menu for mobile devices
  - Main navigation links

- **Main Components**:
  - Serviser logo
  - Navigation menu with links to:
    - Home
    - About Us
    - Contact
    - Projects
  - Responsive system for different screen sizes

```php:appSennovalab/views/layouts/header.php
<!-- Estructura principal del header / Main header structure -->
<header>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container d-flex justify-content-between">
            <!-- Logo y marca / Logo and brand -->
            <a class="navbar-brand" href="<?= Yii::$app->homeUrl ?>">
                <img src="images/logo(246x43).png" alt="Logo serviser">
            </a>

            <!-- Botón hamburguesa para móviles / Mobile hamburger button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarToggler">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Menú de navegación / Navigation menu -->
            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <!-- Enlaces de navegación / Navigation links -->
                    <li class="nav-item">
                        <?= Html::a('Inicio', ['site/index'], 
                            ['class' => 'nav-link active']); ?>
                    </li>
                    <!-- ... más enlaces / more links ... -->
                </ul>
            </div>
        </div>
    </nav>
</header>
```

### Características Técnicas / Technical Features
- Implementa Bootstrap 5 para diseño responsive
- Utiliza helpers de Yii2 para generación de enlaces
- Sistema de navegación adaptable
- Soporte para múltiples idiomas
- Integración con el sistema de rutas de Yii2