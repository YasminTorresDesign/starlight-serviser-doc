---
title: Manual Técnico AppServiser
description:  Documentación Técnica del Archivo `text.php`
---

## Documentación Técnica del Archivo `text.php` en la Carpeta `appServiser/mail/layouts`

## Español

### ¿Para qué es?
El archivo text.php se utiliza como plantilla de diseño para los correos electrónicos enviados desde la aplicación en formato de texto plano. Este archivo define la estructura básica que se utilizará para renderizar el contenido de los correos electrónicos en texto, asegurando que tengan un formato legible y adecuado para clientes de correo que no soportan HTML.

### Definición del Archivo
El archivo text.php es un archivo de plantilla PHP que contiene el código necesario para estructurar el contenido del correo electrónico en texto plano. Utiliza componentes de Yii2 para facilitar la inclusión de elementos como encabezados y contenido dinámico.

### Propósito
El propósito del archivo text.php es proporcionar una base para todos los correos electrónicos enviados desde la aplicación en formato de texto, permitiendo que el contenido se inserte en un diseño común. Esto ayuda a mantener la coherencia visual y funcional en todos los correos electrónicos, incluso en aquellos que no pueden mostrar HTML.

### Estructura Común
- Encabezado de texto: Define la estructura básica del mensaje de texto.
- Cuerpo del correo: Contiene el contenido dinámico que se pasará a la plantilla, como el mensaje del correo.
- Instrucciones adicionales: Puede incluir información adicional, como instrucciones sobre cómo visualizar el correo en un navegador.

### Ejemplo de contenido:
**Parámetros de Salida**
Los parámetros de salida del archivo text.php se refieren a la estructura del correo electrónico que se enviará. 

Algunos ejemplos de resultados esperados son:
- Formato de texto plano: Se espera que el correo electrónico se renderice correctamente en formato de texto.
- Contenido dinámico: El contenido del correo se espera que se inserte correctamente en la plantilla.
---

## English

## Technical Documentation for the text.php File in the appServiser/mail/layouts Directory

### What is it for?
The text.php file is used as a layout template for emails sent from the application in plain text format. This file defines the basic structure that will be used to render the content of the emails in text, ensuring they have a readable format suitable for email clients that do not support HTML.

### Definition of the File
The text.php file is a PHP template file that contains the necessary code to structure the email content in plain text. It uses Yii2 components to facilitate the inclusion of elements such as headers and dynamic content.

### Purpose
The purpose of the text.php file is to provide a foundation for all emails sent from the application in text format, allowing the content to be inserted into a common layout. This helps maintain visual and functional consistency across all emails, even for those that cannot display HTML.

### Common Structure
- Text Header: Defines the basic structure of the text message.
- Email Body: Contains the dynamic content that will be passed to the template, such as the email message.
- Additional Instructions: May include additional information, such as instructions on how to view the email in a browser.

### Example content:
**Output Parameters**
The output parameters of the text.php file refer to the structure of the email that will be sent. 

Some examples of expected results are:
- Plain Text Format: The email is expected to render correctly in plain text format.
- Dynamic Content: The content of the email is expected to be inserted correctly into the template.