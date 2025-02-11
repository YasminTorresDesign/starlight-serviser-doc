---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `custom.css`
---

## Documentación Técnica del Archivo `custom.css` en `/appSennovalab/web/css/`

## Español

### ¿Para qué es?
El archivo `custom.css` es la hoja de estilos personalizada para SennovaLab que extiende y personaliza Bootstrap 5. Define variables CSS personalizadas, temas de color y estilos específicos para mantener la identidad visual de la aplicación.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/web/css/`, directorio que contiene los archivos CSS de la aplicación. Esta ubicación es estándar para los recursos estáticos web en aplicaciones Yii2.

### Propósito
El propósito principal es:
- Definir la paleta de colores institucional
- Personalizar componentes Bootstrap
- Establecer estilos consistentes
- Implementar temas claro/oscuro
- Mantener la identidad visual

### Funciones
- **Variables CSS**:
  - Colores primarios y secundarios
  - Tamaños y espaciados
  - Tipografía
  - Bordes y sombras
  - Temas de color

### Características Técnicas / Technical Features
- Sistema de variables CSS personalizado
- Soporte para temas claro/oscuro
- Extensión de Bootstrap 5
- Estilos responsivos
- Optimización de rendimiento
- Compatibilidad con navegadores
- Mantenibilidad del código

### Componentes Estilizados / Styled Components
1. **Elementos Base**:
   - Tipografía
   - Botones
   - Formularios
   - Enlaces

2. **Componentes Personalizados**:
   - Navegación
   - Tarjetas
   - Alertas
   - Modales

3. **Utilidades**:
   - Espaciado
   - Colores
   - Bordes
   - Sombras

---

## English

### What is it for?
The `custom.css` file is SennovaLab's custom stylesheet that extends and customizes Bootstrap 5. It defines custom CSS variables, color themes, and specific styles to maintain the application's visual identity.

### Folder Definition
Located in `/appSennovalab/web/css/`, directory containing the application's CSS files. This location is standard for web static resources in Yii2 applications.

### Purpose
The main purpose is to:
- Define institutional color palette
- Customize Bootstrap components
- Establish consistent styles
- Implement light/dark themes
- Maintain visual identity

### Functions
- **CSS Variables**:
  - Primary and secondary colors
  - Sizes and spacing
  - Typography
  - Borders and shadows
  - Color themes

```css:appSennovalab/web/css/custom.css
:root,
[data-bs-theme=light] {
    /* Colores Principales / Main Colors */
    --bs-primary: #2CB0E4;
    --bs-secondary: #6c757d;
    --bs-success: #74B848;
    --bs-info: #0dcaf0;
    --bs-warning: #FFCE40;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #00324D;

    /* Variables RGB / RGB Variables */
    --bs-primary-rgb: 44, 176, 228;
    --bs-secondary-rgb: 108, 117, 125;
    --bs-success-rgb: 116, 184, 72;
    
    /* Énfasis de Texto / Text Emphasis */
    --bs-primary-text-emphasis: #12465b;
    --bs-secondary-text-emphasis: #2b2f32;
    
    /* Fondos Sutiles / Subtle Backgrounds */
    --bs-primary-bg-subtle: #d5effa;
    --bs-secondary-bg-subtle: #e2e3e5;
    
    /* Bordes Sutiles / Subtle Borders */
    --bs-primary-border-subtle: #abdff4;
    --bs-secondary-border-subtle: #c4c8cb;
}

/* Tema Oscuro / Dark Theme */
[data-bs-theme=dark] {
    /* Variables de Color / Color Variables */
    --bs-body-color: #dee2e6;
    --bs-body-bg: #212529;
    
    /* Énfasis de Texto / Text Emphasis */
    --bs-primary-text-emphasis: #80d0ef;
    --bs-secondary-text-emphasis: #a7acb1;
    
    /* Fondos Sutiles / Subtle Backgrounds */
    --bs-primary-bg-subtle: #09232e;
    --bs-secondary-bg-subtle: #161719;
}
```













