---
title: Manual Técnico AppServiser
description:  Documentación Técnica del Archivo `app.php`
---

## Documentación Técnica del Archivo `app.php` en `/appServiser/messages/es-CO/`

## Español

### ¿Para qué es?
El archivo `app.php` es un archivo de traducción que contiene las cadenas de texto localizadas para el idioma español (Colombia) en SennovaLab. Define las traducciones de la interfaz de usuario para mantener la consistencia lingüística en la aplicación.

### Definición de la Carpeta
Se encuentra en `/appServiser/messages/es-CO/`, directorio que almacena los archivos de traducción específicos para el español colombiano. Esta ubicación sigue las convenciones de Yii2 para internacionalización (i18n).

### Propósito
El propósito principal es:
- Proporcionar traducciones al español
- Mantener consistencia lingüística
- Facilitar la internacionalización
- Personalizar mensajes del sistema
- Mejorar la experiencia de usuario

### Funciones
- **Características Principales**:
  - Traducciones de interfaz
  - Mensajes del sistema
  - Etiquetas de formularios
  - Textos de navegación
  - Mensajes de error

### Características Técnicas / Technical Features
- Formato de array PHP
- Soporte de caracteres UTF-8
- Traducciones categorizadas
- Variables de sustitución
- Pluralización
- Formato consistente
- Mantenibilidad

### Categorías de Traducción / Translation Categories
1. **Interfaz de Usuario**:
   - Menús
   - Botones
   - Etiquetas
   - Títulos

2. **Mensajes del Sistema**:
   - Confirmaciones
   - Advertencias
   - Errores
   - Éxitos

3. **Contenido Dinámico**:
   - Formularios
   - Validaciones
   - Notificaciones
   - Descripciones

### Mejores Prácticas / Best Practices
- Mantener consistencia terminológica
- Usar formato estandarizado
- Documentar traducciones
- Verificar caracteres especiales
- Mantener orden alfabético
- Categorizar mensajes
- Actualizar regularmente

---

## English

### What is it for?
The `app.php` file is a translation file containing localized text strings for Spanish (Colombia) in SennovaLab. It defines user interface translations to maintain linguistic consistency in the application.

### Folder Definition
Located in `/appServiser/messages/es-CO/`, directory storing translation files specific to Colombian Spanish. This location follows Yii2 conventions for internationalization (i18n).

### Purpose
The main purpose is to:
- Provide Spanish translations
- Maintain linguistic consistency
- Facilitate internationalization
- Customize system messages
- Enhance user experience

### Functions
- **Main Features**:
  - Interface translations
  - System messages
  - Form labels
  - Navigation texts
  - Error messages

```php:appServiser/messages/es-CO/app.php
<?php
return [
    // Traducciones generales / General translations
    'Access Module' => 'Acceder al Módulo',
    'Addresses' => 'Direcciones',
    'Are you sure you want to delete this item?' => '¿Estás seguro de que deseas eliminar este elemento?',
    
    // Formularios / Forms
    'Biography' => 'Biografía',
    'Close' => 'Cerrar',
    'Company' => 'Compañía',
    'Email' => 'Correo Electrónico',
    
    // Mensajes del sistema / System messages
    'Delete' => 'Eliminar',
    'Edit personal info' => 'Editar Información Personal',
    'Save' => 'Guardar',
    'Search' => 'Buscar',
    
    // Mensajes de error / Error messages
    'The requested page does not exist.' => 'La página solicitada no existe.',
    'Wrong password reset token.' => 'Token de restablecimiento de contraseña incorrecto.',
    
    // Navegación / Navigation
    'My Profile' => 'Mi Perfil',
    'Settings' => 'Configuración',
    'Logout' => 'Cerrar Sesión'
];
```









