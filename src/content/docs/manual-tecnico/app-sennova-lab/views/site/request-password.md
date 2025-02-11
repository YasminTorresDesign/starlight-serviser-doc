---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `requestPasswordResetToken.php`
---

## Documentación Técnica del Archivo `requestPasswordResetToken.php` en `/appSennovalab/views/site/`

## Español

### ¿Para qué es?
El archivo `requestPasswordResetToken.php` implementa la vista para solicitar el restablecimiento de contraseña en SennovaLab. Proporciona un formulario seguro donde los usuarios pueden solicitar un enlace para restablecer su contraseña.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/views/site/`, directorio que contiene las vistas principales relacionadas con la autenticación y gestión de usuarios. Esta ubicación sigue las convenciones de Yii2 para funcionalidades de seguridad.

### Propósito
El propósito principal es:
- Permitir a los usuarios solicitar restablecimiento de contraseña
- Validar la dirección de correo electrónico
- Enviar enlace seguro de restablecimiento
- Proporcionar retroalimentación al usuario
- Mantener la seguridad del proceso

### Funciones
- **Componentes del Formulario**:
  - Campo de correo electrónico
  - Validación de email
  - Botón de envío
  - Mensajes de estado
  - Protección contra spam


### Características Técnicas / Technical Features
- Integración con el sistema de formularios de Yii2
- Validación de email en tiempo real
- Protección CSRF
- Sistema de mensajes flash
- Integración con el servicio de correo
- Generación de tokens seguros
- Manejo de errores personalizado

### Medidas de Seguridad / Security Measures
- Validación de formato de email
- Verificación de usuario existente
- Límite de intentos de solicitud
- Expiración de tokens
- Registro de solicitudes
- Protección contra ataques de fuerza bruta
- Encriptación de datos sensibles
---

## English

### What is it for?
The `requestPasswordResetToken.php` file implements the view for requesting password reset in SennovaLab. It provides a secure form where users can request a link to reset their password.

### Folder Definition
Located in `/appSennovalab/views/site/`, directory containing the main views related to authentication and user management. This location follows Yii2 conventions for security functionalities.

### Purpose
The main purpose is to:
- Allow users to request password reset
- Validate email address
- Send secure reset link
- Provide user feedback
- Maintain process security

### Functions
- **Form Components**:
  - Email field
  - Email validation
  - Submit button
  - Status messages
  - Spam protection

```php:appSennovalab/views/site/requestPasswordResetToken.php
<?php
/** @var yii\web\View $this */
/** @var yii\bootstrap5\ActiveForm $form */
/** @var \servisena\models\PasswordResetRequestForm $model */

use yii\bootstrap5\Html;
use yii\bootstrap5\ActiveForm;

$this->title = 'Solicitar restablecimiento de contraseña';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-request-password-reset">
    <h1><?= Html::encode($this->title) ?></h1>

    <!-- Mensaje Informativo / Informative Message -->
    <p>Por favor, ingrese su correo electrónico. Se enviará un enlace para restablecer la contraseña.</p>

    <!-- Formulario de Solicitud / Request Form -->
    <div class="row">
        <div class="col-lg-5">
            <?php $form = ActiveForm::begin(['id' => 'request-password-reset-form']); ?>
                <?= $form->field($model, 'email')->textInput(['autofocus' => true]) ?>
                <div class="form-group">
                    <?= Html::submitButton('Enviar', ['class' => 'btn btn-primary']) ?>
                </div>
            <?php ActiveForm::end(); ?>
        </div>
    </div>
</div>
```





