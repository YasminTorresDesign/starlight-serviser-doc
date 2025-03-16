---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `site.css`
---

## Documentación Técnica del Archivo `site.css` en la Carpeta 
`appServiserAdmin/web/css`

---

## Español

## ¿Para qué es?
El archivo `site.css` es la hoja de estilos principal de la aplicación ServiserAdmin, que define los estilos visuales y el diseño de la interfaz de usuario.

## Definición de la Carpeta
**Ubicación:** `appServiserAdmin/web/css/site.css`
**Contexto:** Se encuentra en la carpeta `css`, conteniendo los estilos globales de la aplicación.

## Propósito
- Definir estilos base de la aplicación
- Establecer el diseño responsive
- Personalizar componentes de GridView
- Configurar estilos de navegación
- Definir estilos de pie de página

## Componentes Principales

1. **Estructura del Contenedor Principal**
```css
main > .container {
    padding: 70px 15px 20px;
}
```

2. **Estilos del Footer**
```css
.footer {
    background-color: #f5f5f5;
    font-size: .9em;
    height: 60px;
}
```

3. **Componentes de GridView**
```css
.grid-view th,
.grid-view td:last-child {
    white-space: nowrap;
}

.grid-view .filters input,
.grid-view .filters select {
    min-width: 50px;
}
```

4. **Indicadores de Ordenamiento**
```css
a.asc:after, a.desc:after {
    content: '';
    left: 3px;
    display: inline-block;
    width: 0;
    height: 0;
    border: solid 5px transparent;
}
```
## Características Especiales 

1. **Diseño Responsive**
   - Media queries para dispositivos móviles
   - Adaptación de navegación en móviles
   - Ajustes de padding y márgenes

2. **Utilidades**
   - Clases de ayuda para mensajes de error
   - Estilos para bloques de sugerencias
   - Manejo de elementos no configurados

## Notas de Mantenimiento 

- Mantener consistencia en nombres de clases
- Documentar cambios significativos
- Optimizar selectores CSS
- Mantener compatibilidad con navegadores
- Seguir convenciones de nomenclatura


---

## English

## Technical Documentation - `site.css` File

## What is it for?
The `site.css` file is the main stylesheet for the ServiserAdmin application, defining visual styles and user interface layout.

## Folder Definition
**Location:** `appServiserAdmin/web/css/site.css`
**Context:** Located in the `css` folder, containing global application styles.

## Purpose
- Define application base styles
- Establish responsive design
- Customize GridView components
- Configure navigation styles
- Define footer styles

## Main Components

1. **Main Container Structure**
```css
main > .container {
    padding: 70px 15px 20px;
}
```

2. **Footer Styles**
```css
.footer {
    background-color: #f5f5f5;
    font-size: .9em;
    height: 60px;
}
```

3. **GridView Components**
```css
.grid-view th,
.grid-view td:last-child {
    white-space: nowrap;
}
```

## Special Features

1. **Responsive Design**
   - Mobile device media queries
   - Mobile navigation adaptation
   - Padding and margin adjustments

2. **Utilities**
   - Error message helper classes
   - Hint block styles
   - Not-set element handling

## Maintenance Notes

- Maintain class name consistency
- Document significant changes
- Optimize CSS selectors
- Maintain browser compatibility
- Follow naming conventions

