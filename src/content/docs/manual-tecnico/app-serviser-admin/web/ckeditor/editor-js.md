---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `editor.js`
---

## Documentación Técnica del Archivo `editor.js` en la Carpeta 
`appServiserAdmin/web/ckeditor`

---

## Español

## ¿Para qué es?
El archivo `editor.js` es un módulo de configuración para CKEditor 5, un editor de texto enriquecido (WYSIWYG) implementado en la aplicación ServiserAdmin. Define la configuración y funcionalidades disponibles en el editor.

## Definición de la Carpeta
**Ubicación:** `appServiserAdmin/web/ckeditor/editor.js`
**Contexto:** Se encuentra en la carpeta `ckeditor`, que contiene los recursos necesarios para el editor de texto enriquecido.

## Propósito
- Configurar y personalizar la instancia de CKEditor 5
- Definir las herramientas disponibles en la barra de herramientas
- Establecer los plugins activos
- Configurar el manejo de imágenes y archivos
- Personalizar el comportamiento del editor

## Funciones y Características Principales

1. **Barra de Herramientas**
```javascript
toolbar: {
    items: [
        'undo', 'redo', 'selectAll',
        'heading', 'bold', 'italic', 'underline',
        'link', 'insertImage', 'mediaEmbed',
        'insertTable', 'blockQuote',
        'bulletedList', 'numberedList', 'todoList',
        'outdent', 'indent',
        'accessibilityHelp'
    ]
}
```

2. **Plugins Integrados**
- Herramientas de texto básicas (Bold, Italic, Underline)
- Manejo de imágenes completo
- Herramientas de tabla
- Listas y sangrías
- Autoguardado
- Accesibilidad

3. **Configuración de Imágenes**
```javascript
image: {
    toolbar: [
        'toggleImageCaption',
        'imageTextAlternative',
        'imageStyle:inline',
        'imageStyle:wrapText',
        'imageStyle:breakText',
        'resizeImage'
    ]
}
```

4. **Configuración de Enlaces**
```javascript
link: {
    addTargetToExternalLinks: true,
    defaultProtocol: 'https://',
    decorators: {
        toggleDownloadable: {
            mode: 'manual',
            label: 'Downloadable',
            attributes: {
                download: 'file'
            }
        }
    }
}
```

---

## English

## Technical Documentation - `editor.js` File

## English

## What is it for?
The `editor.js` file is a configuration module for CKEditor 5, a WYSIWYG rich text editor implemented in the ServiserAdmin application. It defines the configuration and available functionalities in the editor.

## Folder Definition
**Location:** `appServiserAdmin/web/ckeditor/editor.js`
**Context:** Located in the `ckeditor` folder, which contains the necessary resources for the rich text editor.

## Purpose
- Configure and customize the CKEditor 5 instance
- Define available tools in the toolbar
- Set active plugins
- Configure image and file handling
- Customize editor behavior

## Main Functions and Features

1. **Toolbar**
```javascript
toolbar: {
    items: [
        'undo', 'redo', 'selectAll',
        'heading', 'bold', 'italic', 'underline',
        'link', 'insertImage', 'mediaEmbed',
        'insertTable', 'blockQuote',
        'bulletedList', 'numberedList', 'todoList',
        'outdent', 'indent',
        'accessibilityHelp'
    ]
}
```

2. **Integrated Plugins**
- Basic text tools (Bold, Italic, Underline)
- Complete image handling
- Table tools
- Lists and indentation
- Autosave
- Accessibility

3. **Image Configuration**
```javascript
image: {
    toolbar: [
        'toggleImageCaption',
        'imageTextAlternative',
        'imageStyle:inline',
        'imageStyle:wrapText',
        'imageStyle:breakText',
        'resizeImage'
    ]
}
```

4. **Link Configuration**
```javascript
link: {
    addTargetToExternalLinks: true,
    defaultProtocol: 'https://',
    decorators: {
        toggleDownloadable: {
            mode: 'manual',
            label: 'Downloadable',
            attributes: {
                download: 'file'
            }
        }
    }
}
```

## Additional Notes
- Includes comprehensive image upload configuration
- Supports multiple heading levels (h1-h6)
- Implements table properties and cell management
- Includes accessibility features
- Configures automatic file upload handling


