---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `custom.css`
---

## Documentación Técnica del Archivo `favicon.ico` en `/appSennovalab/web/`

## Español

### ¿Para qué es?
El archivo `favicon.ico` es el icono de favoritos de SennovaLab que se muestra en las pestañas del navegador, marcadores y cuando los usuarios agregan el sitio a sus favoritos. Es un elemento esencial de la identidad visual del sitio web.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/web/`, directorio raíz público de la aplicación web. Esta ubicación es estándar para el favicon ya que debe ser accesible directamente desde la raíz del sitio web.

### Propósito
El propósito principal es:
- Identificar visualmente el sitio en navegadores
- Proporcionar identidad de marca en marcadores
- Mejorar la experiencia de usuario
- Mantener consistencia visual
- Facilitar la identificación del sitio

### Características
- **Especificaciones Técnicas**:
  - Formato: ICO (múltiples tamaños)
  - Dimensiones incluidas: 16x16, 32x32, 48x48 px
  - Color: RGB
  - Optimizado para visualización web

### Características Técnicas / Technical Features
- Formato ICO multitamaño
- Optimizado para diferentes dispositivos
- Compatible con todos los navegadores
- Tamaño de archivo optimizado
- Alta calidad visual
- Carga rápida
- Caché eficiente

### Usos Principales / Main Uses
1. **Navegadores Web**:
   - Pestañas de navegación
   - Barra de favoritos
   - Historial de navegación
   - Accesos directos

2. **Sistemas Operativos**:
   - Marcadores del sistema
   - Accesos directos
   - Vista previa de sitios
   - Menús de inicio

3. **Dispositivos Móviles**:
   - Favoritos móviles
   - Iconos de aplicación web
   - Marcadores de Safari
   - Pantalla de inicio

### Mejores Prácticas / Best Practices
- Tamaño de archivo optimizado
- Múltiples resoluciones incluidas
- Diseño simple y reconocible
- Consistencia con la marca
- Compatibilidad cross-browser
- Caché apropiado
- Accesibilidad web

---

## English

### What is it for?
The `favicon.ico` file is SennovaLab's favicon icon displayed in browser tabs, bookmarks, and when users add the site to their favorites. It's an essential element of the website's visual identity.

### Folder Definition
Located in `/appSennovalab/web/`, public root directory of the web application. This location is standard for the favicon as it needs to be directly accessible from the website's root.

### Purpose
The main purpose is to:
- Visually identify the site in browsers
- Provide brand identity in bookmarks
- Enhance user experience
- Maintain visual consistency
- Facilitate site identification

### Features
- **Technical Specifications**:
  - Format: ICO (multiple sizes)
  - Included dimensions: 16x16, 32x32, 48x48 px
  - Color: RGB
  - Optimized for web display

```html
<!-- Implementación en HTML / HTML Implementation -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
```

