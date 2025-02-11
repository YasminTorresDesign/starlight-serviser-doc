---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `site.css`
---

## Documentación Técnica del Archivo `site.css` en `/appSennovalab/web/css/`

## Español

### ¿Para qué es?
El archivo `site.css` es la hoja de estilos principal que define los estilos base y específicos del sitio SennovaLab. Contiene estilos para elementos comunes, layouts y componentes personalizados que dan forma a la apariencia general del sitio.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/web/css/`, directorio destinado a los archivos CSS de la aplicación. Esta ubicación es parte de la estructura estándar de recursos web en Yii2.

### Propósito
El propósito principal es:
- Definir estilos base del sitio
- Establecer layouts responsivos
- Personalizar componentes comunes
- Implementar animaciones y efectos
- Mantener consistencia visual

### Funciones
- **Estilos Base**:
  - Tipografía y fuentes
  - Layouts y grids
  - Componentes de navegación
  - Efectos y animaciones
  - Estilos de formularios

### Características Técnicas / Technical Features
- Diseño responsive completo
- Sistema de grid flexible
- Animaciones CSS personalizadas
- Optimización de rendimiento
- Compatibilidad cross-browser
- Integración con Bootstrap
- Manejo de media queries

### Componentes Estilizados / Styled Components
1. **Elementos de Navegación**:
   - Navbar
   - Breadcrumbs
   - Footer
   - Menús

2. **Elementos de Contenido**:
   - Títulos
   - Párrafos
   - Imágenes
   - Tablas

3. **Efectos Visuales**:
   - Transiciones
   - Animaciones
   - Hover effects
   - Sombras

4. **Utilidades**:
   - Espaciado
   - Alineación
   - Visibilidad
   - Colores
---

## English

### What is it for?
The `site.css` file is the main stylesheet that defines base and specific styles for the SennovaLab site. It contains styles for common elements, layouts, and custom components that shape the overall appearance of the site.

### Folder Definition
Located in `/appSennovalab/web/css/`, directory intended for application CSS files. This location is part of the standard web resource structure in Yii2.

### Purpose
The main purpose is to:
- Define site base styles
- Establish responsive layouts
- Customize common components
- Implement animations and effects
- Maintain visual consistency

### Functions
- **Base Styles**:
  - Typography and fonts
  - Layouts and grids
  - Navigation components
  - Effects and animations
  - Form styles

```css:appSennovalab/web/css/site.css
/* Estilos Base / Base Styles */
body {
    font-family: 'Work Sans', sans-serif;
    overflow-x: hidden;
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
}

/* Footer Styles */
.footer {
    background-color: #f5f5f5;
    font-size: .9em;
    height: 60px;
}

/* Grid View Styles */
.grid-view th,
.grid-view td:last-child {
    white-space: nowrap;
}

/* Animaciones / Animations */
@keyframes animateWaves {
    0% {
        background-position-x: 1000px;
    }
    100% {
        background-position-x: 0px;
    }
}

/* Estilos Responsivos / Responsive Styles */
@media(max-width:767px) {
    .navbar form > button.logout {
        display: block;
        text-align: left;
        width: 100%;
        padding: 10px 0;
    }
}

/* Componentes Personalizados / Custom Components */
.breadcrumb {
    background-color: var(--bs-gray-200);
    border-radius: .25rem;
    padding: .75rem 1rem;
}

.main-footer {
    background-image: url("../images/backgrounds/footer-bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```














