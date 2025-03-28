---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `af.js`
---

# Documentación Técnica del Archivo `af.js` (Carpeta `ckeditor5/translations`)

## Propósito del Archivo
El archivo `af.js` es un archivo de traducción que contiene las cadenas de texto en Afrikaans para el editor CKEditor 5. Este archivo permite que el editor se muestre en el idioma Afrikaans, proporcionando una experiencia de usuario localizada para los hablantes de este idioma.

## Contenido del Archivo
El archivo exporta un objeto que contiene las traducciones de diversas cadenas utilizadas en el editor. Estas traducciones incluyen etiquetas, mensajes y otros textos que aparecen en la interfaz del usuario.

### Ejemplo de Contenido
```
javascript
/
@license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
/
export default {
af: {
dictionary: {
"Rich Text Editor": "Ryk teksredigeerder",
"Editor editing area: %0": "Redigeerarea: %0",
"Edit block": "Wysig blok",
"Click to edit block": "Klik om blok te wysig",
// ... otras traducciones ...
},
getPluralForm(n) {
return (n != 1);
}
}
};
```


## Funciones del Archivo
1. **Proporcionar Traducciones**: Contiene las traducciones necesarias para que el editor funcione en Afrikaans, mejorando la accesibilidad y usabilidad para los hablantes de este idioma.

2. **Gestión de Pluralización**: Incluye una función `getPluralForm` que determina la forma plural correcta de las palabras en función del número, lo que es esencial para la correcta localización de textos.

3. **Exportación de Traducciones**: Exporta un objeto que puede ser importado y utilizado en otras partes de la aplicación para cargar las traducciones en el editor.

---

# Technical Documentation of the File `af.js` (Folder `ckeditor5/translations`)

## Purpose of the File
The `af.js` file is a translation file that contains the Afrikaans strings for the CKEditor 5 editor. This file allows the editor to be displayed in the Afrikaans language, providing a localized user experience for speakers of this language.

## Content of the File
The file exports an object that contains translations for various strings used in the editor. These translations include labels, messages, and other texts that appear in the user interface.

### Example Content
```
javascript
/
@license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
/
export default {
af: {
dictionary: {
"Rich Text Editor": "Ryk teksredigeerder",
"Editor editing area: %0": "Redigeerarea: %0",
"Edit block": "Wysig blok",
"Click to edit block": "Klik om blok te wysig",
// ... other translations ...
},
getPluralForm(n) {
return (n != 1);
}
}
};
```
