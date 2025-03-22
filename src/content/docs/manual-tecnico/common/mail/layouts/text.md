---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `mail\layouts`
---

## Documentación Técnica del Archivo `text.php`

## Español

### ¿Para qué es?
El archivo `text.php` es una plantilla de diseño (layout) para correos electrónicos en formato texto plano en la aplicación Yii2. Define la estructura base para todos los correos electrónicos en formato texto.

### Definición de la Carpeta
**Ubicación:** `common/mail/layouts/text.php`
**Contexto:** Se encuentra en la carpeta de layouts de correo, proporcionando una estructura común para correos electrónicos en texto plano.

### Propósito
- Definir la estructura base de correos en texto plano
- Mantener consistencia en el formato de correos
- Proporcionar compatibilidad universal
- Servir como alternativa al formato HTML
- Garantizar la entrega de mensajes

### Estructura del Código
```php
/** @var \yii\web\View $this */
/** @var \yii\mail\MessageInterface $message */
/** @var string $content */

<?php $this->beginPage() ?>
<?php $this->beginBody() ?>
<?= $content ?>
<?php $this->endBody() ?>
<?php $this->endPage() ?>
```

---

## Technical Documentation - `text.php` File

## English

### What is it for?
The `text.php` file is a layout template for plain text email messages in the Yii2 application. It defines the base structure for all plain text email messages.

### Folder Definition
**Location:** `common/mail/layouts/text.php`
**Context:** Located in the mail layouts folder, providing a common structure for plain text emails.

### Purpose
- Define base structure for plain text emails
- Maintain consistency in email format
- Provide universal compatibility
- Serve as alternative to HTML format
- Ensure message delivery

### Code Structure
```php
/** @var \yii\web\View $this */
/** @var \yii\mail\MessageInterface $message */
/** @var string $content */

<?php $this->beginPage() ?>
<?php $this->beginBody() ?>
<?= $content ?>
<?php $this->endBody() ?>
<?php $this->endPage() ?>
```

### Componentes Principales / Main Components

#### Español
1. **Variables del Sistema**
   - `$this`: Instancia de la vista
   - `$message`: Mensaje en composición
   - `$content`: Contenido principal

2. **Métodos de Renderizado**
   - `beginPage()`: Inicia la página
   - `beginBody()`: Inicia el cuerpo
   - `endBody()`: Finaliza el cuerpo
   - `endPage()`: Finaliza la página

#### English
1. **System Variables**
   - `$this`: View instance
   - `$message`: Message being composed
   - `$content`: Main content

2. **Rendering Methods**
   - `beginPage()`: Starts the page
   - `beginBody()`: Starts the body
   - `endBody()`: Ends the body
   - `endPage()`: Ends the page

### Ejemplo de Uso / Usage Example

#### Español
```php
// En una vista de correo
<?php
$content = 'Este es un mensaje de prueba';
echo $this->render('@common/mail/layouts/text', ['content' => $content]);
```

#### English
```php
// In an email view
<?php
$content = 'This is a test message';
echo $this->render('@common/mail/layouts/text', ['content' => $content]);
```

### Consideraciones / Considerations

#### Español
- Mantener formato simple y legible
- Evitar caracteres especiales
- Considerar límites de línea
- Asegurar compatibilidad universal
- Mantener mensajes concisos

#### English
- Keep format simple and readable
- Avoid special characters
- Consider line limits
- Ensure universal compatibility
- Keep messages concise

