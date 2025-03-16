---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `.gitignore.php`
---

## Documentación Técnica del Archivo `.gitignore.php` en la Carpeta `appServiserAdmin/views`

---

## Español

## Propósito del Archivo
El archivo `.gitignore` se utiliza en proyectos de Git para especificar qué archivos o directorios deben ser ignorados por el sistema de control de versiones. Esto es útil para evitar que archivos temporales, de configuración local o de compilación sean incluidos en el repositorio, lo que ayuda a mantener el repositorio limpio y enfocado en el código fuente relevante.

## Contenido Común
El contenido del archivo `.gitignore` puede variar según el tipo de proyecto, pero a continuación se presentan algunas entradas comunes que se pueden encontrar en un archivo `.gitignore` para un proyecto de Yii2 o PHP:

- **Archivos de configuración local**:
  ```
  /config/local.php
  ```

- **Archivos de caché**:
  ```
  /runtime/*
  ```

- **Archivos de logs**:
  ```
  /logs/*
  ```

- **Archivos de dependencias**:
  ```
  /vendor/*
  ```

- **Archivos de compilación**:
  ```
  /build/*
  ```

- **Archivos temporales**:
  ```
  *.tmp
  *.log
  ```

- **Archivos de sistema**:
  ```
  .DS_Store
  Thumbs.db
  ```

## Funciones del Archivo
1. **Ignorar Archivos No Relevantes**: Permite que Git ignore archivos que no son necesarios para el funcionamiento del proyecto, como archivos temporales o de configuración local.

2. **Mantener el Repositorio Limpio**: Ayuda a mantener el repositorio enfocado en el código fuente y los archivos necesarios para el desarrollo y la producción.

3. **Facilitar la Colaboración**: Al ignorar archivos específicos de cada desarrollador, se evita que configuraciones locales o archivos temporales se mezclen con el trabajo de otros colaboradores.

---

## English

## Technical Documentation of the File `.gitignore`

## Purpose of the File
The `.gitignore` file is used in Git projects to specify which files or directories should be ignored by the version control system. This is useful to prevent temporary, local configuration, or build files from being included in the repository, helping to keep the repository clean and focused on relevant source code.

## Common Content
The content of the `.gitignore` file can vary depending on the type of project, but below are some common entries that may be found in a `.gitignore` file for a Yii2 or PHP project:

- **Local configuration files**:
  ```
  /config/local.php
  ```

- **Cache files**:
  ```
  /runtime/*
  ```

- **Log files**:
  ```
  /logs/*
  ```

- **Dependency files**:
  ```
  /vendor/*
  ```

- **Build files**:
  ```
  /build/*
  ```

- **Temporary files**:
  ```
  *.tmp
  *.log
  ```

- **System files**:
  ```
  .DS_Store
  Thumbs.db

