---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `layouts/html.php`
---

## Documentación Técnica del Archivo `layouts/html.php`

## Información General

### ¿Para qué es?
El archivo `html.php` es una plantilla de diseño (layout) para correos electrónicos HTML en la aplicación Sennovalab. Define la estructura base HTML que se utilizará en todos los correos electrónicos enviados por la aplicación.

### Definición de la Carpeta
**Ubicación:** `appSennovalab/mail/layouts/html.php`
**Contexto:** Se encuentra en la carpeta `layouts` dentro del directorio `mail`, siguiendo la estructura de Yii2 para plantillas de correo electrónico.

### Propósito
- Proporcionar una estructura HTML consistente para todos los correos electrónicos
- Garantizar la compatibilidad con diferentes clientes de correo electrónico
- Mantener un formato estandarizado en las comunicaciones por email
- Permitir la inserción dinámica de contenido en una estructura HTML predefinida

### Variables Principales
```php
/** @var \yii\web\View $this */           // Instancia del componente view
/** @var \yii\mail\MessageInterface $message */ // Mensaje que se está componiendo
/** @var string $content */               // Contenido principal del correo
```

### Estructura del Layout
1. **Declaración DOCTYPE**
   - Utiliza XHTML 1.0 Strict para máxima compatibilidad con clientes de correo

2. **Sección Head**
   - Configuración de charset
   - Título del correo
   - Espacio para metadatos adicionales

3. **Sección Body**
   - Contenedor principal para el contenido del correo
   - Implementa los métodos de Yii2 para gestión de contenido

### Funciones y Métodos Utilizados
1. **Métodos de Vista**
   - `$this->beginPage()`: Inicia el renderizado de la página
   - `$this->head()`: Renderiza la sección head
   - `$this->beginBody()`: Inicia el contenido del body
   - `$this->endBody()`: Finaliza el contenido del body
   - `$this->endPage()`: Finaliza el renderizado de la página

2. **Helpers**
   - `Html::encode()`: Codifica el título para prevenir XSS

## Ejemplo de Uso
```php
// En un archivo de vista de correo
<?php
use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $user common\models\User */

$resetLink = Yii::$app->urlManager->createAbsoluteUrl(['site/reset-password']);
?>

<div class="password-reset">
    <h1>Hola <?= Html::encode($user->username) ?></h1>
    <p>Sigue este enlace para resetear tu contraseña:</p>
    <?= Html::a('Resetear Contraseña', $resetLink) ?>
</div>
```

## Notas Adicionales
- La plantilla utiliza XHTML 1.0 Strict para mejor compatibilidad con clientes de correo
- Incluye soporte para charset dinámico basado en la configuración de la aplicación
- Permite la inclusión de estilos y scripts adicionales a través de los métodos de vista
- Es compatible con el sistema de assets de Yii2
- Se recomienda usar estilos en línea para mejor compatibilidad con clientes de correo

Esta documentación proporciona una visión completa de la plantilla base para correos electrónicos HTML en la aplicación Sennovalab, destacando su estructura y funcionalidades principales.