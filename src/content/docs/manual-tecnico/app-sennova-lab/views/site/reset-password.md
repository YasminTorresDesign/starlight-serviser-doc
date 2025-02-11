---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `resetPassword.php`
---

## Documentación Técnica del Archivo `resetPassword.php` en `/appSennovalab/views/site/`

## Español

### ¿Para qué es?
El archivo `resetPassword.php` implementa la vista para el restablecimiento de contraseña en SennovaLab. Proporciona un formulario seguro donde los usuarios pueden establecer una nueva contraseña después de solicitar el restablecimiento.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/views/site/`, directorio que contiene las vistas principales relacionadas con la gestión de usuarios y seguridad. Esta ubicación sigue las convenciones de Yii2 para funcionalidades de gestión de contraseñas.

### Propósito
El propósito principal es:
- Permitir el cambio seguro de contraseña
- Validar la nueva contraseña
- Asegurar la fortaleza de la contraseña
- Proporcionar feedback al usuario
- Mantener la seguridad del proceso

### Funciones
- **Componentes del Formulario**:
  - Campo de nueva contraseña
  - Validación de contraseña
  - Botón de guardado
  - Mensajes de estado
  - Verificación de seguridad

### Características Técnicas / Technical Features
- Integración con el sistema de formularios de Yii2
- Validación de contraseña en tiempo real
- Requisitos de complejidad de contraseña
- Sistema de mensajes flash
- Protección CSRF
- Encriptación de contraseña
- Manejo de errores personalizado

### Medidas de Seguridad / Security Measures
- Validación de fortaleza de contraseña
- Verificación de token de restablecimiento
- Tiempo límite para restablecimiento
- Registro de cambios de contraseña
- Protección contra ataques de fuerza bruta
- Encriptación de datos sensibles
- Notificación por correo de cambio exitoso

---

## English

### What is it for?
The `resetPassword.php` file implements the password reset view in SennovaLab. It provides a secure form where users can set a new password after requesting a reset.

### Folder Definition
Located in `/appSennovalab/views/site/`, directory containing the main views related to user management and security. This location follows Yii2 conventions for password management functionalities.

### Purpose
The main purpose is to:
- Allow secure password change
- Validate new password
- Ensure password strength
- Provide user feedback
- Maintain process security

### Functions
- **Form Components**:
  - New password field
  - Password validation
  - Save button
  - Status messages
  - Security verification

```php:appSennovalab/views/site/resetPassword.php
<?php
/** @var yii\web\View $this */
/** @var yii\bootstrap5\ActiveForm $form */
/** @var \servisena\models\ResetPasswordForm $model */

use yii\bootstrap5\Html;
use yii\bootstrap5\ActiveForm;

$this->title = 'Restablecer contraseña';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-reset-password">
    <h1><?= Html::encode($this->title) ?></h1>

    <!-- Mensaje Informativo / Informative Message -->
    <p>Por favor, elija su nueva contraseña:</p>

    <!-- Formulario de Restablecimiento / Reset Form -->
    <div class="row">
        <div class="col-lg-5">
            <?php $form = ActiveForm::begin(['id' => 'reset-password-form']); ?>
                <?= $form->field($model, 'password')->passwordInput(['autofocus' => true]) ?>
                <div class="form-group">
                    <?= Html::submitButton('Guardar', ['class' => 'btn btn-primary']) ?>
                </div>
            <?php ActiveForm::end(); ?>
        </div>
    </div>
</div>
```







