---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `footer.php`
---


## Documentación Técnica del Archivo `footer.php` en `/appSennovalab/views/layouts/`

## Español

### ¿Para qué es?
El archivo `footer.php` es un componente de vista que implementa el pie de página común para todas las páginas de la aplicación SennovaLab. Utiliza el framework Yii2 y Bootstrap para crear una estructura de pie de página responsive y consistente.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/views/layouts/`, que es el directorio destinado a los componentes de diseño principales de la aplicación. Esta ubicación es parte de la estructura MVC de Yii2.

### Propósito
El propósito principal es proporcionar un pie de página estandarizado que incluye:
- Información institucional del SENA
- Enlaces de navegación importantes
- Información de contacto y redes sociales
- Derechos de autor y enlaces legales

### Funciones
- **Estructura del Footer**:
  - División en columnas responsivas usando Bootstrap
  - Sección de logos institucionales
  - Menús de navegación categorizados
  - Enlaces a redes sociales
  - Información de copyright

- **Componentes Principales**:
  - Logos institucionales (SENA, Sennova, LabServiser)
  - Menús de navegación:
    - Sobre Nosotros
    - Servicios
    - Recursos
  - Enlaces a redes sociales
  - Copyright y enlaces legales

---

## English

### What is it for?
The `footer.php` file is a view component that implements the common footer for all pages in the SennovaLab application. It uses the Yii2 framework and Bootstrap to create a responsive and consistent footer structure.

### Folder Definition
Located in `/appSennovalab/views/layouts/`, which is the directory intended for the main layout components of the application. This location is part of Yii2's MVC structure.

### Purpose
The main purpose is to provide a standardized footer that includes:
- SENA institutional information
- Important navigation links
- Contact information and social media
- Copyright and legal links

### Functions
- **Footer Structure**:
  - Responsive column division using Bootstrap
  - Institutional logos section
  - Categorized navigation menus
  - Social media links
  - Copyright information

- **Main Components**:
  - Institutional logos (SENA, Sennova, LabServiser)
  - Navigation menus:
    - About Us
    - Services
    - Resources
  - Social media links
  - Copyright and legal links

```php:appSennovalab/views/layouts/footer.php
<!-- Ejemplo de estructura principal / Main structure example -->
<footer class="main-footer py-5">
    <div class="container">
        <!-- Sección de logos / Logos section -->
        <div class="row">
            <div class="col-12 col-md-4">
                <img src="images/logos/logos-footer.png" alt="Logos institucionales">
            </div>
            
            <!-- Menús de navegación / Navigation menus -->
            <div class="col-12 col-md-2">
                <h5>Sobre Nosotros</h5>
                <!-- Enlaces de navegación / Navigation links -->
            </div>
            
            <!-- Redes sociales / Social media -->
            <div class="col">
                <!-- Enlaces a redes sociales / Social media links -->
            </div>
        </div>
    </div>
</footer>
```

### Características Técnicas / Technical Features
- Utiliza Bootstrap 5 para el diseño responsive
- Implementa helpers de Yii2 para generación de enlaces
- Soporta múltiples idiomas
- Integración con redes sociales institucionales
- Sistema de navegación dinámico basado en permisos de usuario