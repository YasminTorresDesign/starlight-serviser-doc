---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `mail\layouts`
---

## Documentación Técnica del Archivo `html.php`

## Español

### ¿Para qué es?
El archivo `html.php` es una plantilla de diseño (layout) para correos electrónicos HTML en la aplicación Yii2. Define la estructura base HTML que se utilizará en todos los correos electrónicos enviados por el sistema.

### Definición de la Carpeta
**Ubicación:** `common/mail/layouts/html.php`
**Contexto:** Se encuentra en la carpeta de layouts de correo común, proporcionando una estructura HTML consistente para todos los correos electrónicos.

### Propósito
- Definir la estructura HTML base para correos
- Asegurar consistencia en el formato de correos
- Manejar la codificación de caracteres
- Proporcionar un marco HTML compatible con clientes de correo
- Permitir la inserción dinámica de contenido

### Estructura del Código
```php
<?php
use yii\helpers\Html;

/** @var \yii\web\View $this */
/** @var \yii\mail\MessageInterface $message */
/** @var string $content */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
    <!-- Estructura HTML -->
</html>
```

---

## Technical Documentation - `html.php` File

## English

### What is it for?
The `html.php` file is an HTML layout template for email messages in the Yii2 application. It defines the base HTML structure that will be used in all system-sent emails.

### Folder Definition
**Location:** `common/mail/layouts/html.php`
**Context:** Located in the common mail layouts folder, providing a consistent HTML structure for all emails.

### Purpose
- Define base HTML structure for emails
- Ensure consistency in email formatting
- Handle character encoding
- Provide email client-compatible HTML framework
- Allow dynamic content insertion

### Code Structure
```php
<?php
use yii\helpers\Html;

/** @var \yii\web\View $this */
/** @var \yii\mail\MessageInterface $message */
/** @var string $content */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
    <!-- HTML Structure -->
</html>
```

### Componentes Principales / Main Components

#### Español
1. **Declaraciones Iniciales**
   - Uso de helpers HTML
   - Definición de variables de vista
   - Configuración de charset

2. **Estructura HTML**
   - DOCTYPE XHTML 1.0 Strict
   - Meta tags necesarios
   - Secciones head y body
   - Hooks para contenido dinámico

#### English
1. **Initial Declarations**
   - HTML helpers usage
   - View variables definition
   - Charset configuration

2. **HTML Structure**
   - DOCTYPE XHTML 1.0 Strict
   - Required meta tags
   - Head and body sections
   - Dynamic content hooks

### Métodos de Vista / View Methods

#### Español
```php
$this->beginPage()    // Inicia la página
$this->head()         // Renderiza el head
$this->beginBody()    // Inicia el cuerpo
$this->endBody()      // Finaliza el cuerpo
$this->endPage()      // Finaliza la página
```

#### English
```php
$this->beginPage()    // Starts the page
$this->head()         // Renders the head
$this->beginBody()    // Starts the body
$this->endBody()      // Ends the body
$this->endPage()      // Ends the page
```

### Notas de Implementación / Implementation Notes

#### Español
- Usa XHTML para máxima compatibilidad
- Implementa codificación de caracteres dinámica
- Permite personalización del título
- Mantiene estructura limpia y compatible

#### English
- Uses XHTML for maximum compatibility
- Implements dynamic character encoding
- Allows title customization
- Maintains clean and compatible structure

