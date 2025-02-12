---
title: Manual Técnico AppServiser
description:  Documentación Técnica del Archivo `emailVerify-text.php`
---

## Documentación Técnica del Archivo `emailVerify-text.php` en la Carpeta `appServiser/mail`

## Español

### ¿Para qué es?
El archivo emailVerify-text.php se utiliza para generar el contenido de texto plano del correo electrónico de verificación que se envía a los usuarios. Este correo electrónico contiene un enlace que permite a los usuarios verificar su dirección de correo electrónico después de registrarse en la aplicación.

### efinición del Archivo
El archivo emailVerify-text.php es una plantilla de correo electrónico en formato de texto que incluye el mensaje de verificación y un enlace que el usuario debe seguir para completar el proceso de verificación. Utiliza componentes de Yii2 para facilitar la inclusión de elementos como el nombre de usuario y el enlace de verificación.

### Propósito
El propósito del archivo emailVerify-text.php es proporcionar un diseño claro y funcional para el correo electrónico de verificación en texto plano, asegurando que los usuarios reciban instrucciones claras sobre cómo verificar su dirección de correo electrónico, incluso si no pueden visualizar HTML.

### Estructura Común
- Mensaje de verificación: Contiene un saludo personalizado y un mensaje que explica la necesidad de verificar la dirección de correo electrónico.
- Enlace de verificación: Proporciona un enlace que el usuario puede seguir para completar la verificación.

### Ejemplo de contenido:
**Parámetros de Salida**
Los parámetros de salida del archivo emailVerify-text.php se refieren al contenido del correo electrónico que se enviará. 
Algunos ejemplos de resultados esperados son:
- Formato de texto plano: Se espera que el correo electrónico se renderice correctamente en formato de texto.
- Contenido dinámico: El nombre de usuario y el enlace de verificación se insertan correctamente en el mensaje.
---

## English
## Technical Documentation for the emailVerify-text.php File in the appServiser/mail Directory

### What is it for?
The emailVerify-text.php file is used to generate the plain text content of the verification email sent to users. This email contains a link that allows users to verify their email address after registering in the application.

### Definition of the File
The emailVerify-text.php file is a plain text email template that includes the verification message and a link that the user must follow to complete the verification process. It uses Yii2 components to facilitate the inclusion of elements such as the username and the verification link.

### Purpose
The purpose of the emailVerify-text.php file is to provide a clear and functional design for the verification email in plain text, ensuring that users receive clear instructions on how to verify their email address, even if they cannot view HTML.

### Common Structure
- Verification Message: Contains a personalized greeting and a message explaining the need to verify the email address.
- Verification Link: Provides a link that the user can follow to complete the verification.

### Example content:
**Output Parameters**
The output parameters of the emailVerify-text.php file refer to the content of the email that will be sent. 
Some examples of expected results are:
- Plain Text Format: The email is expected to render correctly in plain text format.
- Dynamic Content: The username and verification link are expected to be inserted correctly into the message.
---