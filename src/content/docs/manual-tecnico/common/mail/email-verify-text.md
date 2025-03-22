---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `mail`
---

## Documentación Técnica del Archivo `emailVerify-text.php`

## Español

### ¿Para qué es?
El archivo `emailVerify-text.php` es una plantilla de correo electrónico en formato texto plano utilizada para enviar correos de verificación de cuenta, sirviendo como alternativa al formato HTML para garantizar compatibilidad universal.

### Definición de la Carpeta
**Ubicación:** `common/mail/emailVerify-text.php`
**Contexto:** Se encuentra en la carpeta de correos común, proporcionando la versión en texto plano de la verificación de email.

### Propósito
- Proporcionar versión texto plano del correo de verificación
- Garantizar compatibilidad con todos los clientes de correo
- Servir como respaldo cuando HTML no está disponible
- Mantener accesibilidad del mensaje
- Asegurar entrega confiable

### Estructura del Código
```php
/** @var yii\web\View $this */
/** @var common\models\User $user */

$verifyLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/verify-email', 
    'token' => $user->verification_token
]);
?>
Hello <?= $user->username ?>,

Follow the link below to verify your email:

<?= $verifyLink ?>
```

---

## Technical Documentation - `emailVerify-text.php` File

## English

### What is it for?
The `emailVerify-text.php` file is a plain text email template used to send account verification emails, serving as an alternative to the HTML format to ensure universal compatibility.

### Folder Definition
**Location:** `common/mail/emailVerify-text.php`
**Context:** Located in the common mail folder, providing the plain text version of email verification.

### Purpose
- Provide plain text version of verification email
- Ensure compatibility with all email clients
- Serve as fallback when HTML is unavailable
- Maintain message accessibility
- Ensure reliable delivery

### Code Structure
```php
/** @var yii\web\View $this */
/** @var common\models\User $user */

$verifyLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/verify-email', 
    'token' => $user->verification_token
]);
```

### Características Principales / Main Features

#### Español
1. **Componentes del Mensaje**
   - Saludo personalizado
   - Enlace de verificación
   - Formato simple y directo
   - Sin formateo especial

2. **Generación de Enlaces**
   - URLs absolutas
   - Tokens de verificación únicos
   - Enlaces completos y legibles

#### English
1. **Message Components**
   - Personalized greeting
   - Verification link
   - Simple and direct format
   - No special formatting

2. **Link Generation**
   - Absolute URLs
   - Unique verification tokens
   - Complete and readable links

### Ejemplo de Uso / Usage Example

#### Español
```php
Yii::$app->mailer->compose([
    'html' => 'emailVerify-html',
    'text' => 'emailVerify-text'
], [
    'user' => $user,
])
->setTo($user->email)
->setSubject('Verificación de Cuenta')
->send();
```

#### English
```php
Yii::$app->mailer->compose([
    'html' => 'emailVerify-html',
    'text' => 'emailVerify-text'
], [
    'user' => $user,
])
->setTo($user->email)
->setSubject('Account Verification')
->send();
```

### Consideraciones Técnicas / Technical Considerations

#### Español
- Mantener formato simple
- Evitar caracteres especiales
- Limitar longitud de líneas
- Asegurar legibilidad
- Validar enlaces antes del envío

#### English
- Keep format simple
- Avoid special characters
- Limit line length
- Ensure readability
- Validate links before sending


