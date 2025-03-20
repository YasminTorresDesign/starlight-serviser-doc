---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `az.js`
---

# Documentación Técnica del Archivo `az.js` (Carpeta `ckeditor5/translations`)

## Propósito del Archivo
El archivo `az.js` es un archivo de traducción que contiene las cadenas de texto en azerbaiyano para el editor CKEditor 5. Este archivo permite que el editor se muestre en el idioma azerbaiyano, proporcionando una experiencia de usuario localizada para los hablantes de este idioma.

## Contenido del Archivo
El archivo exporta un objeto que contiene las traducciones de diversas cadenas utilizadas en el editor. Estas traducciones incluyen etiquetas, mensajes y otros textos que aparecen en la interfaz del usuario.

### Ejemplo de Contenido
```
/
@license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
/
export default {
az: {
dictionary: {
"Rich Text Editor": "Zəngin Mətbəx Redaktoru",
"Editor editing area: %0": "Redaktorun redaktə sahəsi: %0",
"Edit block": "Bloku redaktə et",
"Click to edit block": "Bloku redaktə etmək üçün vurun",
// ... otras traducciones ...
},
getPluralForm(n) {
return (n !== 1);
}
}
};
/
@license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
/
export default {
az: {
dictionary: {
"Rich Text Editor": "Zəngin Mətbəx Redaktoru",
"Editor editing area: %0": "Redaktorun redaktə sahəsi: %0",
"Edit block": "Bloku redaktə et",
"Click to edit block": "Bloku redaktə etmək üçün vurun",
// ... other translations ...
},
getPluralForm(n) {
return (n !== 1);
}
}
};
```

## Funciones del Archivo
1. **Proporcionar Traducciones**: Contiene las traducciones necesarias para que el editor funcione en azerbaiyano, mejorando la accesibilidad y usabilidad para los hablantes de este idioma.

2. **Gestión de Pluralización**: Incluye una función `getPluralForm` que determina la forma plural correcta de las palabras en función del número, lo que es esencial para la correcta localización de textos.

3. **Exportación de Traducciones**: Exporta un objeto que puede ser importado y utilizado en otras partes de la aplicación para cargar las traducciones en el editor.

---

# Technical Documentation of the File `az.js` (Folder `ckeditor5/translations`)

## Purpose of the File
The `az.js` file is a translation file that contains the Azerbaijani strings for the CKEditor 5 editor. This file allows the editor to be displayed in the Azerbaijani language, providing a localized user experience for speakers of this language.

## Content of the File
The file exports an object that contains translations for various strings used in the editor. These translations include labels, messages, and other texts that appear in the user interface.

### Example Content
```
/
@license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
/
export default {
az: {
dictionary: {
"Rich Text Editor": "Zəngin Mətbəx Redaktoru",
"Editor editing area: %0": "Redaktorun redaktə sahəsi: %0",
"Edit block": "Bloku redaktə et",
"Click to edit block": "Bloku redaktə etmək üçün vurun",
// ... other translations ...
},
getPluralForm(n) {
return (n !== 1);
}
}
};
```


## Functions of the File
1. **Providing Translations**: Contains the necessary translations for the editor to function in Azerbaijani, enhancing accessibility and usability for speakers of this language.

2. **Pluralization Management**: Includes a `getPluralForm` function that determines the correct plural form of words based on the number, which is essential for the correct localization of texts.

3. **Exporting Translations**: Exports an object that can be imported and used in other parts of the application to load the translations in the editor.