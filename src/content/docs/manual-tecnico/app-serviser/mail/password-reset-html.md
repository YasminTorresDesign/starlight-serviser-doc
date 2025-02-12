---
title: Manual Técnico AppServiser
description:  Documentación Técnica del Archivo `passwordResetToken-html.php`
---

## Documentación Técnica del Archivo `passwordResetToken-html.php` en la Carpeta `appServiser/mail`

## Español

### ¿Para qué es?
El archivo passwordResetToken-html.php se utiliza para generar el contenido HTML del correo electrónico de restablecimiento de contraseña que se envía a los usuarios. Este correo electrónico contiene un enlace que permite a los usuarios restablecer su contraseña después de haber solicitado un cambio.

### Definición del Archivo
El archivo passwordResetToken-html.php es una plantilla de correo electrónico en formato HTML que incluye el mensaje de restablecimiento de contraseña y un enlace que el usuario debe seguir para establecer una nueva contraseña. Utiliza componentes de Yii2 para facilitar la inclusión de elementos como el nombre de usuario y el enlace de restablecimiento.

### Propósito
El propósito del archivo passwordResetToken-html.php es proporcionar un diseño atractivo y funcional para el correo electrónico de restablecimiento de contraseña, asegurando que los usuarios reciban instrucciones claras sobre cómo restablecer su contraseña.
- Estructura Común
- Encabezado HTML: Define la estructura básica del documento HTML.
- Mensaje de restablecimiento: Contiene un saludo personalizado y un mensaje que explica la necesidad de restablecer la contraseña.
- Enlace de restablecimiento: Proporciona un enlace que el usuario puede seguir para establecer una nueva contraseña.

### Ejemplo de contenido:
**Parámetros de Salida**
Los parámetros de salida del archivo passwordResetToken-html.php se refieren al contenido del correo electrónico que se enviará. 
Algunos ejemplos de resultados esperados son:
- Formato HTML: Se espera que el correo electrónico se renderice correctamente en formato HTML.
- Contenido dinámico: El nombre de usuario y el enlace de restablecimiento se insertan correctamente en el mensaje.
---

## English
## Technical Documentation for the passwordResetToken-html.php File in the appServiser/mail Directory

### What is it for?
The passwordResetToken-html.php file is used to generate the HTML content of the password reset email sent to users. This email contains a link that allows users to reset their password after requesting a change.

#"## Definition of the File
The passwordResetToken-html.php file is an HTML email template that includes the password reset message and a link that the user must follow to set a new password. It uses Yii2 components to facilitate the inclusion of elements such as the username and the reset link.

### Purpose
The purpose of the passwordResetToken-html.php file is to provide an attractive and functional design for the password reset email, ensuring that users receive clear instructions on how to reset their password.

### Common Structure
- HTML Header: Defines the basic structure of the HTML document.
- Reset Message: Contains a personalized greeting and a message explaining the need to reset the password.
- Reset Link: Provides a link that the user can follow to set a new password.

### Example content:
**Output Parameters**
The output parameters of the passwordResetToken-html.php file refer to the content of the email that will be sent. Some examples of expected results are:
- HTML Format: The email is expected to render correctly in HTML format.
- Dynamic Content: The username and reset link are expected to be inserted correctly into the message.
