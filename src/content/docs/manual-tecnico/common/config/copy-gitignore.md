---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

## Documentación Técnica del Archivo `_Copy.gitignore`

## Español

### ¿Para qué es?
El archivo `Copy.gitignore` es una copia de configuración que especifica qué archivos y carpetas deben ser ignorados por el sistema de control de versiones Git en la configuración común de la aplicación.

### Definición de la Carpeta
**Ubicación:** `common/config/Copy.gitignore`
**Contexto:** Se encuentra en la carpeta de configuración común, actuando como plantilla para configurar Git.

### Propósito
- Excluir archivos de configuración local del control de versiones
- Proteger información sensible
- Mantener configuraciones específicas del entorno fuera del repositorio
- Evitar conflictos entre diferentes entornos de desarrollo

### Archivos Ignorados
```gitignore
codeception-local.php    # Configuración local de pruebas
main-local.php          # Configuración principal local
params-local.php        # Parámetros locales
test-local.php          # Configuración de pruebas local
```

---

## Technical Documentation - `Copy.gitignore` File

## English

### What is it for?
The `Copy.gitignore` file is a configuration copy that specifies which files and folders should be ignored by the Git version control system in the common application configuration.

### Folder Definition
**Location:** `common/config/Copy.gitignore`
**Context:** Located in the common configuration folder, serving as a template for Git configuration.

### Purpose
- Exclude local configuration files from version control
- Protect sensitive information
- Keep environment-specific configurations out of repository
- Avoid conflicts between different development environments

### Ignored Files
```gitignore
codeception-local.php    # Local testing configuration
main-local.php          # Local main configuration
params-local.php        # Local parameters
test-local.php          # Local test configuration
```

### Notas Adicionales / Additional Notes

#### Español
1. **Uso**
   - Copiar este archivo como `.gitignore`
   - Mantener actualizado con nuevos archivos locales
   - No modificar el archivo original

2. **Seguridad**
   - Protege credenciales locales
   - Evita exposición de configuraciones sensibles
   - Mantiene separación entre entornos

#### English
1. **Usage**
   - Copy this file as `.gitignore`
   - Keep updated with new local files
   - Don't modify the original file

2. **Security**
   - Protects local credentials
   - Prevents exposure of sensitive configurations
   - Maintains environment separation

### Mejores Prácticas / Best Practices

#### Español
1. Mantener una copia de referencia de los archivos locales
2. Documentar cualquier cambio en el patrón de ignorados
3. Revisar periódicamente la lista de archivos ignorados
4. Asegurar que no se ignoren archivos críticos

#### English
1. Keep a reference copy of local files
2. Document any changes in ignore patterns
3. Periodically review ignored files list
4. Ensure critical files are not ignored

