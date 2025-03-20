---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `el.umd.js`
---

# Documentación Técnica del Archivo `el.umd.js` (Carpeta `ckeditor5/translations`)

## Propósito del Archivo
El archivo `el.umd.js` es un archivo de traducción en formato UMD (Universal Module Definition) que contiene las cadenas de texto en griego para el editor CKEditor 5. Este archivo permite que el editor se muestre en el idioma griego, proporcionando una experiencia de usuario localizada para los hablantes de este idioma.

## Contenido del Archivo
El archivo exporta un objeto que contiene las traducciones de diversas cadenas utilizadas en el editor. Estas traducciones incluyen etiquetas, mensajes y otros textos que aparecen en la interfaz del usuario.

### Ejemplo de Contenido
```
/
@license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
/
( e => {
const { [ 'el' ]: { dictionary, getPluralForm } } = {
"el": {
"dictionary": {
"Rich Text Editor": "Επεξεργαστής Πλούσιου Κειμένου",
"Editor editing area: %0": "Περιοχή επεξεργασίας του επεξεργαστή: %0",
"Edit block": "Επεξεργασία μπλοκ",
"Click to edit block": "Κάντε κλικ για να επεξεργαστείτε το μπλοκ",
// ... otras traducciones ...
},
getPluralForm(n) {
return (n !== 1);
}
}
};
e[ 'el' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'el' ].dictionary = Object.assign( e[ 'el' ].dictionary, dictionary );
e[ 'el' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
/
@license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
/
( e => {
const { [ 'el' ]: { dictionary, getPluralForm } } = {
"el": {
"dictionary": {
"Rich Text Editor": "Επεξεργαστής Πλούσιου Κειμένου",
"Editor editing area: %0": "Περιοχή επεξεργασίας του επεξεργαστή: %0",
"Edit block": "Επεξεργασία μπλοκ",
"Click to edit block": "Κάντε κλικ για να επεξεργαστείτε το μπλοκ",
// ... other translations ...
},
getPluralForm(n) {
return (n !== 1);
}
}
};
e[ 'el' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'el' ].dictionary = Object.assign( e[ 'el' ].dictionary, dictionary );
e[ 'el' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
```

## Funciones del Archivo
1. **Proporcionar Traducciones**: Contiene las traducciones necesarias para que el editor funcione en griego, mejorando la accesibilidad y usabilidad para los hablantes de este idioma.

2. **Gestión de Pluralización**: Incluye una función `getPluralForm` que determina la forma plural correcta de las palabras en función del número, lo que es esencial para la correcta localización de textos.

3. **Exportación de Traducciones**: Exporta un objeto que puede ser utilizado en otras partes de la aplicación para cargar las traducciones en el editor.

4. **Compatibilidad UMD**: Al estar en formato UMD, el archivo puede ser utilizado en diferentes entornos de módulos, como CommonJS, AMD o directamente en el navegador, lo que lo hace versátil para su inclusión en diversas configuraciones de proyectos.

---

# Technical Documentation of the File `el.umd.js` (Folder `ckeditor5/translations`)

## Purpose of the File
The `el.umd.js` file is a translation file in UMD (Universal Module Definition) format that contains the Greek strings for the CKEditor 5 editor. This file allows the editor to be displayed in the Greek language, providing a localized user experience for speakers of this language.

## Content of the File
The file exports an object that contains translations for various strings used in the editor. These translations include labels, messages, and other texts that appear in the user interface.

### Example Content
```
/
@license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
/
( e => {
const { [ 'el' ]: { dictionary, getPluralForm } } = {
"el": {
"dictionary": {
"Rich Text Editor": "Επεξεργαστής Πλούσιου Κειμένου",
"Editor editing area: %0": "Περιοχή επεξεργασίας του επεξεργαστή: %0",
"Edit block": "Επεξεργασία μπλοκ",
"Click to edit block": "Κάντε κλικ για να επεξεργαστείτε το μπλοκ",
// ... other translations ...
},
getPluralForm(n) {
return (n !== 1);
}
}
};
e[ 'el' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'el' ].dictionary = Object.assign( e[ 'el' ].dictionary, dictionary );
e[ 'el' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
```

## Functions of the File
1. **Providing Translations**: Contains the necessary translations for the editor to function in Greek, enhancing accessibility and usability for speakers of this language.

2. **Pluralization Management**: Includes a `getPluralForm` function that determines the correct plural form of words based on the number, which is essential for the correct localization of texts.

3. **Exporting Translations**: Exports an object that can be used in other parts of the application to load the translations in the editor.

4. **UMD Compatibility**: Being in UMD format, the file can be used in different module environments, such as CommonJS, AMD, or directly in the browser, making it versatile for inclusion in various project configurations.

