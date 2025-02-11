---
title: Manual Técnico AppServiser
description:  Documentación Técnica de la carpeta controllers
---

## Documentación Técnica de la Carpeta `appServiser/controllers`

### ¿Para qué es?

La carpeta controllers se utiliza para almacenar los controladores de la aplicación. Los controladores son responsables de manejar las solicitudes del usuario, procesar la lógica de negocio y devolver las respuestas adecuadas, generalmente en forma de vistas.

### Definición de la Carpeta
La carpeta controllers contiene clases que extienden la clase base Controller de Yii2. Cada controlador generalmente corresponde a una entidad o recurso en la aplicación y contiene acciones que representan las operaciones que se pueden realizar sobre esa entidad.

### Propósito
El propósito de la carpeta controllers es organizar la lógica de control de la aplicación de manera estructurada. Esto facilita la gestión del código y la implementación de la lógica de negocio, permitiendo a los desarrolladores mantener el código limpio y modular.

### Estructura Común
**Controladores:** Cada archivo dentro de la carpeta representa un controlador, que contiene acciones para manejar las solicitudes relacionadas con una entidad específica.