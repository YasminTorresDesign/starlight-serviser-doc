---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `layouts/text.php`
---

## Documentación Técnica del Archivo `layouts/text.php`

## Información General

### ¿Para qué es?
El archivo `text.php` es una plantilla de diseño (layout) para correos electrónicos en formato texto plano en la aplicación Sennovalab. Define la estructura básica para correos electrónicos que no requieren formato HTML.

### Definición de la Carpeta
**Ubicación:** `appSennovalab/mail/layouts/text.php`
**Contexto:** Se encuentra en la carpeta `layouts` dentro del directorio `mail`, siguiendo la estructura de Yii2 para plantillas de correo electrónico en formato texto.

### Propósito
- Proporcionar una estructura simple para correos electrónicos en texto plano
- Ofrecer una alternativa ligera y compatible con todos los clientes de correo
- Servir como fallback cuando el formato HTML no está disponible o preferido
- Garantizar la legibilidad del mensaje en cualquier cliente de correo

### Variables Principales
```php
/** @var \yii\web\View $this */           // Instancia del componente view
/** @var \yii\mail\MessageInterface $message */ // Mensaje que se está componiendo
/** @var string $content */               // Contenido principal del correo
```

### Estructura del Layout
1. **Inicio de Página**
   - `$this->beginPage()`: Marca el inicio del contenido

2. **Cuerpo del Mensaje**
   - `$this->beginBody()`: Inicia el contenido principal
   - `$content`: Inserción del contenido del mensaje
   - `$this->endBody()`: Finaliza el contenido principal

3. **Fin de Página**
   - `$this->endPage()`: Marca el final del contenido

### Funciones y Métodos Utilizados
1. **Métodos de Vista**
   - `beginPage()`: Inicia el procesamiento de la página
   - `beginBody()`: Inicia la sección del cuerpo
   - `endBody()`: Finaliza la sección del cuerpo
   - `endPage()`: Finaliza el procesamiento de la página

## Ejemplo de Uso
```php
// En un archivo de vista de correo texto
<?php
/* @var $this yii\web\View */
/* @var $user common\models\User */

$resetLink = Yii::$app->urlManager->createAbsoluteUrl(['site/reset-password']);
?>
Hola <?= $user->username ?>

Sigue este enlace para resetear tu contraseña:

<?= $resetLink ?>
```

## Notas Adicionales
- No incluye formato ni estilos, solo texto plano
- Ideal para garantizar compatibilidad universal
- Recomendado como alternativa al formato HTML
- Útil para clientes de correo que bloquean HTML
- Menor tamaño de mensaje y procesamiento más rápido
- Mejor accesibilidad para lectores de pantalla

### Mejores Prácticas
1. Mantener el contenido conciso y bien estructurado
2. Usar espaciado y líneas en blanco para mejorar la legibilidad
3. Evitar caracteres especiales que puedan causar problemas de codificación
4. Incluir URLs completas para los enlaces
5. Mantener un ancho de línea razonable (generalmente 70-80 caracteres)

Esta documentación proporciona una visión completa de la plantilla base para correos electrónicos en formato texto en la aplicación Sennovalab, destacando su simplicidad y funcionalidad esencial.