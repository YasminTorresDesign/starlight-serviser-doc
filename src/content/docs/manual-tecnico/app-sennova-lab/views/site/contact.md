---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `contact.php`
---

## Documentación Técnica del Archivo `contact.php` en `/appSennovalab/views/site/`

## Español

### ¿Para qué es?
El archivo `contact.php` implementa la página de contacto de SennovaLab, proporcionando un formulario interactivo para que los usuarios se comuniquen con la institución. Utiliza componentes de Yii2 y Bootstrap 5 para crear una interfaz de usuario amigable y funcional.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/views/site/`, directorio que aloja las vistas principales relacionadas con el `SiteController`. Esta ubicación sigue las convenciones de estructura MVC de Yii2.

### Propósito
El propósito principal es:
- Proporcionar un formulario de contacto interactivo
- Mostrar información de contacto institucional
- Implementar validación de datos
- Incluir protección contra spam mediante CAPTCHA
- Presentar la información de contacto del SENA

### Funciones
- **Componentes del Formulario**:
  - Campo de nombre
  - Campo de correo electrónico
  - Campo de asunto
  - Área de mensaje
  - Verificación CAPTCHA
  - Botón de envío

- **Secciones Informativas**:
  - Banner principal con imagen de fondo
  - Información de contacto del SENA
  - Dirección física
  - Números de teléfono
  - Enlaces relevantes

---

## English

### What is it for?
The `contact.php` file implements SennovaLab's contact page, providing an interactive form for users to communicate with the institution. It uses Yii2 and Bootstrap 5 components to create a user-friendly and functional interface.

### Folder Definition
Located in `/appSennovalab/views/site/`, directory that hosts the main views related to the `SiteController`. This location follows Yii2's MVC structure conventions.

### Purpose
The main purpose is to:
- Provide an interactive contact form
- Display institutional contact information
- Implement data validation
- Include spam protection through CAPTCHA
- Present SENA's contact information

### Functions
- **Form Components**:
  - Name field
  - Email field
  - Subject field
  - Message area
  - CAPTCHA verification
  - Submit button

- **Informative Sections**:
  - Main banner with background image
  - SENA contact information
  - Physical address
  - Phone numbers
  - Relevant links

```php:appSennovalab/views/site/contact.php
<?php
/** @var yii\web\View $this */
/** @var yii\bootstrap5\ActiveForm $form */
/** @var \servisena\models\ContactForm $model */

use yii\bootstrap5\Html;
use yii\bootstrap5\ActiveForm;
use yii\captcha\Captcha;

$this->title = 'Contacto';
?>

<!-- Sección Banner / Banner Section -->
<section>
    <div class="container-fluid d-flex align-items-center bg-opacity-25" 
         style="background-image: url('images/backgrounds/feria-cafe.jpg'); 
                background-position: center; 
                height: 690px;">
        <!-- Contenido del banner / Banner content -->
    </div>
</section>

<!-- Sección Formulario / Form Section -->
<section>
    <div class="container py-5">
        <h1><?= Html::encode($this->title) ?></h1>
        <!-- Formulario de contacto / Contact form -->
        <?php $form = ActiveForm::begin(['id' => 'contact-form']); ?>
            <?= $form->field($model, 'name')->textInput(['autofocus' => false]) ?>
            <?= $form->field($model, 'email') ?>
            <?= $form->field($model, 'subject') ?>
            <?= $form->field($model, 'body')->textarea(['rows' => 6]) ?>
            <?= $form->field($model, 'verifyCode')->widget(Captcha::class) ?>
            <!-- Botón de envío / Submit button -->
        <?php ActiveForm::end(); ?>
    </div>
</section>

<!-- Sección Información de Contacto / Contact Information Section -->
<section class="container py-5">
    <!-- Información institucional / Institutional information -->
</section>
```


### Características Técnicas / Technical Features
- Integración con el sistema de formularios de Yii2
- Validación de datos del lado del cliente y servidor
- Implementación de CAPTCHA para seguridad
- Diseño responsive con Bootstrap 5
- Sistema de mensajes flash para notificaciones
- Manejo de correos electrónicos mediante el componente mailer de Yii2
- Integración con el sistema de assets para recursos estáticos