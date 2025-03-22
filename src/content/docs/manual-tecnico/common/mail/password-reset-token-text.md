---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `mail`
---

## Documentación Técnica del Archivo `passwordResetToken-text.php`

## Español

### ¿Para qué es?
El archivo `passwordResetToken-text.php` es una plantilla de correo electrónico en formato texto plano utilizada para enviar enlaces de restablecimiento de contraseña a los usuarios que han olvidado sus credenciales.

### Definición de la Carpeta
**Ubicación:** `common/mail/passwordResetToken-text.php`
**Contexto:** Se encuentra en la carpeta de correos común, proporcionando la versión en texto plano para restablecimiento de contraseña.

### Propósito
- Generar correos de restablecimiento de contraseña
- Proporcionar enlaces seguros en formato texto
- Garantizar compatibilidad universal
- Servir como alternativa al formato HTML
- Facilitar la recuperación de cuenta

### Estructura del Código
```php
/** @var yii\web\View $this */
/** @var common\models\User $user */

$resetLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/reset-password', 
    'token' => $user->password_reset_token
]);
?>
Hello <?= $user->username ?>,

Follow the link below to reset your password:

<?= $resetLink ?>
```

---

## Technical Documentation - `passwordResetToken-text.php` File

## English

### What is it for?
The `passwordResetToken-text.php` file is a plain text email template used to send password reset links to users who have forgotten their credentials.

### Folder Definition
**Location:** `common/mail/passwordResetToken-text.php`
**Context:** Located in the common mail folder, providing the plain text version for password reset.

### Purpose
- Generate password reset emails
- Provide secure links in text format
- Ensure universal compatibility
- Serve as alternative to HTML format
- Facilitate account recovery

### Code Structure
```php
/** @var yii\web\View $this */
/** @var common\models\User $user */

$resetLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/reset-password', 
    'token' => $user->password_reset_token
]);
```

### Características Principales / Main Features

#### Español
1. **Generación de Enlaces**
   - URL absoluta para restablecimiento
   - Token único por solicitud
   - Formato simple y accesible

2. **Seguridad**
   - Enlaces únicos temporales
   - Tokens de seguridad
   - Formato a prueba de errores

#### English
1. **Link Generation**
   - Absolute URL for reset
   - Unique token per request
   - Simple and accessible format

2. **Security**
   - Unique temporary links
   - Security tokens
   - Error-proof format

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

### Consideraciones de Implementación / Implementation Considerations

#### Español
- Mantener formato simple
- Asegurar legibilidad
- Evitar caracteres especiales
- Validar enlaces
- Limitar longitud de líneas

#### English
- Keep format simple
- Ensure readability
- Avoid special characters
- Validate links
- Limit line length

