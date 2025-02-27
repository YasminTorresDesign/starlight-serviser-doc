---
title: Manual Técnico AppServiser
description: Documentación Técnica del Archivo `resetPassword.php`
---

## Documentación Técnica del Archivo resetPassword.php en la Carpeta appServiser/views/site

## Español

### ¿Para qué es?
El archivo `resetPassword.php` es una vista que implementa el formulario para restablecer la contraseña de usuario. Permite a los usuarios que han olvidado su contraseña crear una nueva de manera segura después de haber recibido un enlace de restablecimiento válido.

### Definición del Archivo
Es un archivo de vista PHP que forma parte del sistema de gestión de contraseñas en Yii2. Contiene el formulario y la interfaz de usuario necesaria para el proceso de restablecimiento de contraseña.

### Propósito
El propósito principal es:
- Proporcionar una interfaz para crear una nueva contraseña
- Validar la entrada de la nueva contraseña
- Garantizar la seguridad del proceso de restablecimiento
- Mejorar la experiencia de usuario en la recuperación de cuenta

### Estructura y Componentes
```php
// Componentes principales
use yii\bootstrap5\Html;
use yii\bootstrap5\ActiveForm;

// Elementos del formulario
$form = ActiveForm::begin(['id' => 'reset-password-form']);
$form->field($model, 'password')->passwordInput(['autofocus' => true]);
Html::submitButton('Guardar', ['class' => 'btn btn-dark']);
```

### Características Principales
- **Formulario Seguro:** Implementa campos de contraseña protegidos
- **Validación Robusta:** Incluye validación de seguridad de contraseña
- **Diseño Responsivo:** Utiliza Bootstrap 5 para una interfaz adaptable
- **Protección CSRF:** Implementa tokens de seguridad contra falsificación de peticiones
- **Feedback Visual:** Proporciona mensajes claros al usuario sobre el proceso

---

## English

### Technical Documentation for the resetPassword.php File in the appServiser/views/site Directory

### What is it for?
The `resetPassword.php` file is a view that implements the form for resetting user passwords. It allows users who have forgotten their password to create a new one securely after receiving a valid reset link.

### File Definition
It is a PHP view file that is part of the password management system in Yii2. It contains the form and user interface necessary for the password reset process.

### Purpose
The main purpose is to:
- Provide an interface for creating a new password
- Validate new password input
- Ensure security of the reset process
- Enhance user experience in account recovery

### Structure and Components
```php
// Main components
use yii\bootstrap5\Html;
use yii\bootstrap5\ActiveForm;

// Form elements
$form = ActiveForm::begin(['id' => 'reset-password-form']);
$form->field($model, 'password')->passwordInput(['autofocus' => true]);
Html::submitButton('Save', ['class' => 'btn btn-dark']);
```

### Main Features
- **Secure Form:** Implements protected password fields
- **Robust Validation:** Includes password security validation
- **Responsive Design:** Uses Bootstrap 5 for an adaptive interface
- **CSRF Protection:** Implements security tokens against request forgery
- **Visual Feedback:** Provides clear messages to the user about the process
