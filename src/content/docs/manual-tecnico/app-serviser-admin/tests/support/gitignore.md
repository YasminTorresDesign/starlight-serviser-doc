---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `.gitignore.php`
---

## Documentación Técnica del Archivo `.gitignore.php` en la Carpeta `appServiserAdmin/tests/_support`

---

## Español

## Definición de la Carpeta
El archivo `.gitignore` se encuentra en la carpeta `_support` de un proyecto que utiliza el marco de trabajo Yii2. La carpeta `_support` generalmente se utiliza para almacenar archivos de soporte, como bibliotecas, herramientas, o scripts que ayudan en el desarrollo y las pruebas del proyecto.

## Propósito
El propósito del archivo `.gitignore` es especificar qué archivos y carpetas dentro de la carpeta `_support` deben ser ignorados por Git al realizar un seguimiento de los cambios en el repositorio. Esto es importante para evitar que archivos temporales, de configuración o generados automáticamente se incluyan en el control de versiones, lo que podría causar conflictos o aumentar innecesariamente el tamaño del repositorio.

## Funciones
1. **Ignorar Archivos de Soporte**: Permite que Git ignore archivos que son específicos de la configuración del entorno de desarrollo o que son generados automáticamente y no son relevantes para el control de versiones.
2. **Mantener el Repositorio Limpio**: Ayuda a mantener el repositorio limpio y organizado al evitar la inclusión de archivos innecesarios que son específicos de la carpeta de soporte.
3. **Mejorar el Rendimiento**: Al no rastrear archivos temporales, se mejora el rendimiento de las operaciones de Git, como el commit y el push.

---

## English

## Technical Documentation for the `.gitignore` File in the `_support` Folder

## Folder Definition
The `.gitignore` file is located in the `_support` folder of a Yii2 project. The `_support` folder is typically used to store support files, such as libraries, tools, or scripts that assist in the development and testing of the project.

## Purpose
The purpose of the `.gitignore` file is to specify which files and folders within the `_support` folder should be ignored by Git when tracking changes in the repository. This is important to prevent temporary, configuration, or automatically generated files from being included in version control, which could cause conflicts or unnecessarily increase the repository size.

## Functions
1. **Ignore Support Files**: Allows Git to ignore files that are specific to the development environment configuration or that are automatically generated and not relevant for version control.
2. **Keep the Repository Clean**: Helps maintain a clean and organized repository by preventing the inclusion of unnecessary files that are specific to the support folder.
3. **Improve Performance**: By not tracking temporary files, the performance of Git operations, such as commit and push, is improved.