---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `login.php`
---

## Documentación Técnica del Archivo `login.php` en `/appSennovalab/views/site/`

## Español

### ¿Para qué es?
El archivo `login.php` implementa la interfaz de inicio de sesión de SennovaLab. Utiliza los componentes de formulario de Yii2 y Bootstrap 5 para crear un formulario de login seguro y accesible.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/views/site/`, directorio que contiene las vistas principales relacionadas con el `SiteController`. Esta ubicación sigue las convenciones de Yii2 para vistas de autenticación.

### Propósito
El propósito principal es:
- Proporcionar un formulario de inicio de sesión
- Implementar validación de credenciales
- Ofrecer opciones de recuperación de contraseña
- Manejar la verificación de email
- Mantener la seguridad de la sesión

### Funciones
- **Componentes del Formulario**:
  - Campo de nombre de usuario
  - Campo de contraseña
  - Opción "Recordarme"
  - Enlaces de recuperación
  - Validación de campos

- **Características de Seguridad**:
  - Protección CSRF
  - Validación del lado del cliente
  - Mensajes de error personalizados
  - Bloqueo por intentos fallidos

### Características Técnicas / Technical Features
- Integración con el sistema de autenticación de Yii2
- Validación de formularios Bootstrap
- Sistema de mensajes flash
- Manejo de sesiones seguras
- Integración con el modelo LoginForm
- Protección contra ataques de fuerza bruta
- Redirección post-login configurable

### Funcionalidades de Seguridad / Security Features
- Validación de tokens CSRF
- Encriptación de contraseñas
- Tiempo límite de sesión
- Registro de intentos de inicio de sesión
- Bloqueo temporal de cuenta
- Verificación de email
- Protección contra inyección SQL
---

## English

### What is it for?
The `login.php` file implements SennovaLab's login interface. It uses Yii2 and Bootstrap 5 form components to create a secure and accessible login form.

### Folder Definition
Located in `/appSennovalab/views/site/`, directory containing the main views related to the `SiteController`. This location follows Yii2 conventions for authentication views.

### Purpose
The main purpose is to:
- Provide a login form
- Implement credential validation
- Offer password recovery options
- Handle email verification
- Maintain session security

### Functions
- **Form Components**:
  - Username field
  - Password field
  - Remember me option
  - Recovery links
  - Field validation

- **Security Features**:
  - CSRF protection
  - Client-side validation
  - Custom error messages
  - Failed attempts lockout

```php:appSennovalab/views/site/login.php
<?php
/** @var yii\web\View $this */
/** @var yii\bootstrap5\ActiveForm $form */
/** @var \common\models\LoginForm $model */

use yii\bootstrap5\Html;
use yii\bootstrap5\ActiveForm;

$this->title = 'Login';
?>
<div class="site-login">
    <h1><?= Html::encode($this->title) ?></h1>

    <!-- Mensaje Informativo / Informative Message -->
    <p>Por favor, complete los siguientes campos para iniciar sesión:</p>

    <!-- Formulario de Login / Login Form -->
    <div class="row">
        <div class="col-lg-5">
            <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>

                <?= $form->field($model, 'username')->textInput(['autofocus' => true]) ?>
                <?= $form->field($model, 'password')->passwordInput() ?>
                <?= $form->field($model, 'rememberMe')->checkbox() ?>

                <!-- Enlaces de Recuperación / Recovery Links -->
                <div class="my-1 mx-0" style="color:#999;">
                    Si olvidó su contraseña puede <?= Html::a('restablecerla', ['site/request-password-reset']) ?>.
                    <br>
                    ¿Necesita un nuevo email de verificación? <?= Html::a('Reenviar', ['site/resend-verification-email']) ?>
                </div>

                <!-- Botón de Envío / Submit Button -->
                <div class="form-group">
                    <?= Html::submitButton('Login', ['class' => 'btn btn-primary', 'name' => 'login-button']) ?>
                </div>

            <?php ActiveForm::end(); ?>
        </div>
    </div>
</div>
```


