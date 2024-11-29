---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `contactForm-html.php`
---

## Documentación Técnica del Archivo `contactForm-html.php`

## Información General

### ¿Para qué es?
El archivo `contactForm-html.php` es una plantilla de correo electrónico en formato HTML que se utiliza para generar el contenido de los mensajes enviados a través del formulario de contacto de la aplicación Sennovalab.

### Definición de la Carpeta
**Ubicación:** `appSennovalab/mail/contactForm-html.php`
**Contexto:** Se encuentra en la carpeta `mail`, que contiene todas las plantillas de correo electrónico de la aplicación.

### Propósito
- Definir la estructura HTML del correo electrónico de contacto
- Proporcionar un formato consistente para los mensajes de contacto
- Permitir la personalización del contenido del mensaje
- Mantener una comunicación profesional con los usuarios

### Variables y Dependencias
```php
/** @var yii\web\View $this */     // Instancia de la vista
/** @var common\models\User $user */ // Modelo de usuario
```

### Estructura del Template
1. **Contenedor Principal**
   ```php
   <div class="contact-email">
   ```

2. **Elementos del Mensaje**
   - Saludo inicial
   - Cuerpo del mensaje



## Ejemplo de Uso
```php
// En SiteController.php
public function actionContact()
{
    $model = new ContactForm();
    if ($model->load(Yii::$app->request->post()) && $model->validate()) {
        Yii::$app->mailer->compose([
            'html' => 'contactForm-html',
            'text' => 'contactForm-text'
        ], [
            'user' => Yii::$app->user->identity,
            'message' => $model->body,
            'email' => $model->email,
            'subject' => $model->subject
        ])->send();
    }
}
```

Esta documentación proporciona una visión general de la plantilla de correo electrónico de contacto, destacando sus características actuales.