---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `mail`
---

## Documentación Técnica del Archivo `emailVerify-html.php`

## Español

### ¿Para qué es?
El archivo `emailVerify-html.php` es una plantilla de correo electrónico en formato HTML utilizada para enviar correos de verificación de cuenta a los nuevos usuarios registrados en la aplicación.

### Definición de la Carpeta
**Ubicación:** `common/mail/emailVerify-html.php`
**Contexto:** Se encuentra en la carpeta de correos común, proporcionando la plantilla HTML para verificación de email.

### Propósito
- Generar correos de verificación de cuenta
- Proporcionar un enlace seguro de verificación
- Personalizar el mensaje para cada usuario
- Mantener una comunicación profesional
- Facilitar el proceso de activación de cuenta

### Estructura del Código
```php
use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\User $user */

$verifyLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/verify-email', 
    'token' => $user->verification_token
]);
?>
<div class="verify-email">
    <p>Hello <?= Html::encode($user->username) ?>,</p>
    <p>Follow the link below to verify your email:</p>
    <p><?= Html::a(Html::encode($verifyLink), $verifyLink) ?></p>
</div>
```

---

## Technical Documentation - `emailVerify-html.php` File

## English

### What is it for?
The `emailVerify-html.php` file is an HTML email template used to send account verification emails to newly registered users in the application.

### Folder Definition
**Location:** `common/mail/emailVerify-html.php`
**Context:** Located in the common mail folder, providing the HTML template for email verification.

### Purpose
- Generate account verification emails
- Provide secure verification link
- Personalize message for each user
- Maintain professional communication
- Facilitate account activation process

### Code Structure
```php
use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\User $user */

$verifyLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/verify-email', 
    'token' => $user->verification_token
]);
```

### Características Principales / Main Features

#### Español
1. **Generación de Enlaces**
   - Creación de URL absoluta
   - Inclusión de token de verificación
   - Enlaces seguros y únicos

2. **Seguridad**
   - Codificación HTML de datos
   - Protección contra XSS
   - Tokens únicos por usuario

#### English
1. **Link Generation**
   - Absolute URL creation
   - Verification token inclusion
   - Secure and unique links

2. **Security**
   - HTML data encoding
   - XSS protection
   - Unique user tokens

### Ejemplo de Uso / Usage Example

#### Español
```php
Yii::$app->mailer->compose([
    'html' => 'emailVerify-html',
    'text' => 'emailVerify-text'
], ['user' => $user])
    ->setTo($user->email)
    ->setSubject('Verificación de cuenta')
    ->send();
```

#### English
```php
Yii::$app->mailer->compose([
    'html' => 'emailVerify-html',
    'text' => 'emailVerify-text'
], ['user' => $user])
    ->setTo($user->email)
    ->setSubject('Account verification')
    ->send();
```

### Consideraciones de Implementación / Implementation Considerations

#### Español
- Mantener diseño responsive
- Asegurar compatibilidad con clientes de correo
- Incluir versión en texto plano
- Validar enlaces antes de envío
- Mantener mensajes claros y concisos

#### English
- Maintain responsive design
- Ensure email client compatibility
- Include plain text version
- Validate links before sending
- Keep messages clear and concise


