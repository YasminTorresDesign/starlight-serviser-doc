---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `mail`
---

## Documentación Técnica del Archivo `passwordResetToken-html.php`

## Español

### ¿Para qué es?
El archivo `passwordResetToken-html.php` es una plantilla HTML para correos electrónicos de restablecimiento de contraseña en la aplicación. Se utiliza cuando un usuario solicita cambiar su contraseña olvidada.

### Definición de la Carpeta
**Ubicación:** `common/mail/passwordResetToken-html.php`
**Contexto:** Se encuentra en la carpeta de correos común, proporcionando la plantilla HTML para el restablecimiento de contraseña.

### Propósito
- Generar correos de restablecimiento de contraseña
- Proporcionar un enlace seguro para el cambio
- Personalizar el mensaje para cada usuario
- Mantener la seguridad en el proceso
- Facilitar la recuperación de cuenta

### Estructura del Código
```php
use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\User $user */

$resetLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/reset-password', 
    'token' => $user->password_reset_token
]);
?>
<div class="password-reset">
    <p>Hello <?= Html::encode($user->username) ?>,</p>
    <p>Follow the link below to reset your password:</p>
    <p><?= Html::a(Html::encode($resetLink), $resetLink) ?></p>
</div>
```

---

## Technical Documentation - `passwordResetToken-html.php` File

## English

### What is it for?
The `passwordResetToken-html.php` file is an HTML template for password reset emails in the application. It is used when a user requests to change their forgotten password.

### Folder Definition
**Location:** `common/mail/passwordResetToken-html.php`
**Context:** Located in the common mail folder, providing the HTML template for password reset.

### Purpose
- Generate password reset emails
- Provide secure reset link
- Personalize message for each user
- Maintain security in the process
- Facilitate account recovery

### Code Structure
```php
use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\User $user */

$resetLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/reset-password', 
    'token' => $user->password_reset_token
]);
```

### Características de Seguridad / Security Features

#### Español
1. **Generación de Token**
   - Token único por solicitud
   - Tiempo de expiración
   - URL absoluta segura

2. **Protección de Datos**
   - Codificación HTML
   - Prevención de XSS
   - Enlaces verificables

#### English
1. **Token Generation**
   - Unique token per request
   - Expiration time
   - Secure absolute URL

2. **Data Protection**
   - HTML encoding
   - XSS prevention
   - Verifiable links

### Ejemplo de Uso / Usage Example

#### Español
```php
Yii::$app->mailer->compose([
    'html' => 'passwordResetToken-html',
    'text' => 'passwordResetToken-text'
], ['user' => $user])
    ->setTo($user->email)
    ->setSubject('Restablecimiento de contraseña')
    ->send();
```

#### English
```php
Yii::$app->mailer->compose([
    'html' => 'passwordResetToken-html',
    'text' => 'passwordResetToken-text'
], ['user' => $user])
    ->setTo($user->email)
    ->setSubject('Password reset')
    ->send();
```

### Mejores Prácticas / Best Practices

#### Español
1. **Implementación**
   - Validar token antes de procesar
   - Establecer tiempo de expiración
   - Mantener registro de solicitudes
   - Implementar límites de intentos
   - Notificar cambios exitosos

#### English
1. **Implementation**
   - Validate token before processing
   - Set expiration time
   - Keep request logs
   - Implement attempt limits
   - Notify successful changes


