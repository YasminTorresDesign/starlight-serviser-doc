---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `PasswordResetRequestForm.php`
---

## Documentación Técnica del Archivo `PasswordResetRequestForm.php` en la Carpeta `appSennovaLab/models`

## Español

### ¿Para qué es?
El archivo `PasswordResetRequestForm.php` se utiliza para definir el **modelo de datos** del formulario de solicitud de restablecimiento de contraseña en la aplicación. Este modelo gestiona la **validación y el procesamiento** de la información que los usuarios envían para solicitar un enlace de restablecimiento de contraseña.

### Definición del Archivo
El archivo `PasswordResetRequestForm.php` es una **clase** que extiende la clase base `Model` de **Yii2**. Contiene propiedades que representan los campos del formulario de solicitud de restablecimiento de contraseña, así como métodos para **validar y enviar** la solicitud.

### Propósito
El propósito del archivo `PasswordResetRequestForm.php` es proporcionar una estructura para manejar la **lógica de negocio** relacionada con la solicitud de restablecimiento de contraseña, incluyendo:
- **Validación de datos** del usuario.
- **Envío del correo electrónico** con el enlace de restablecimiento.

### Estructura Común
- **Propiedades**: Cada propiedad representa un campo del formulario, como la dirección de correo electrónico del usuario.
- **Métodos de validación**: Incluye métodos que definen las reglas de validación para el campo de correo electrónico.
- **Métodos de envío**: Contiene un método para enviar el correo electrónico con el enlace de restablecimiento.

### Ejemplo de contenido
```php
<?php
namespace appSennovaLab\models;

use Yii;
use yii\base\Model;
use appServiser\models\User;

class PasswordResetRequestForm extends Model
{
    public $email;

    public function rules()
    {
        return [
            ['email', 'trim'],
            ['email', 'required'],
            ['email', 'email'],
            ['email', 'exist', 'targetClass' => '\\appSennovaLab\\models\\User', 'targetAttribute' => 'email'],
        ];
    }

    public function sendEmail()
    {
        $user = User::findOne(['email' => $this->email]);
        if (!$user) {
            return false;
        }
        return Yii::$app->mailer->compose()
            ->setTo($this->email)
            ->setSubject('Restablecimiento de Contraseña')
            ->send();
    }
}
```

### Parámetros de Salida
Los parámetros de salida del archivo `PasswordResetRequestForm.php` se refieren a los datos que se procesan y envían. Algunos ejemplos de resultados esperados son:
- **Validación de datos**: Se espera que los datos ingresados sean validados correctamente según las reglas definidas.
- **Envío de correo**: Se espera que el correo electrónico con el enlace de restablecimiento se envíe correctamente si la validación es exitosa.



---

## English

# Technical Documentation for the `PasswordResetRequestForm.php` File in the `appSennovaLab/models` Directory

### What is it for?  
The `PasswordResetRequestForm.php` file is used to define the **data model** for the **password reset request form** in the application. This model manages the **validation and processing** of the information that users submit to request a password reset link.

### Definition of the File  
The `PasswordResetRequestForm.php` file is a **class** that extends the base `Model` class from **Yii2**. It contains properties that represent the fields of the password reset request form, as well as methods for validating and sending the request.

### Purpose  
The purpose of the `PasswordResetRequestForm.php` file is to provide a structure for handling the **business logic** related to the password reset request, including:  
- **Data validation.**  
- **Sending the email with the reset link.**  

### Common Structure  
- **Properties**: Each property represents a field in the form, such as the user's email address.  
- **Validation Methods**: Includes methods that define the validation rules for the email field.  
- **Sending Methods**: Contains a method to send the email with the reset link.  

### Example content  
```php
<?php

namespace app\models;

use Yii;
use yii\base\Model;

class PasswordResetRequestForm extends Model
{
    public $email;

    public function rules()
    {
        return [
            [['email'], 'required'],
            [['email'], 'email'],
        ];
    }

    public function sendEmail()
    {
        // Logic to send the email with the reset link
    }
}
```

### Output Parameters  
The **output parameters** of the `PasswordResetRequestForm.php` file refer to the data that is processed and sent. Some examples of expected results are:  
- **Data Validation:** The entered data is expected to be validated correctly according to the defined rules.  
- **Email Sending:** The email with the reset link is expected to be sent successfully if validation is successful.  
```


