---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `test\support`
---

## Documentación Técnica de tests/_support/.gitignore

## Español

### Descripción General
El archivo `tests/_support/.gitignore` es un archivo de configuración de Git que especifica qué archivos y directorios deben ser ignorados por el control de versiones en el directorio de soporte de pruebas. Este archivo es esencial para mantener un repositorio limpio al excluir archivos de soporte generados y artefactos temporales de pruebas.

### Propósito
Este archivo sirve para:
- Evitar que los archivos de soporte generados sean rastreados en el control de versiones
- Mantener el repositorio limpio de artefactos temporales de soporte de pruebas
- Asegurar un entorno de soporte de pruebas consistente en diferentes máquinas
- Evitar conflictos con archivos de soporte generados

### Estructura de Directorios
- Ubicación: `tests/_support/.gitignore`
- Tipo: Archivo de Configuración Git
- Directorio Padre: `tests/_support/`

### Componentes Principales

#### Contenido del Archivo
```gitignore
_generated
```

#### Reglas de Configuración
1. **`_generated`**
   - Ignora el directorio `_generated` y todo su contenido
   - Evita el seguimiento de cualquier archivo de soporte generado
   - Directorio común para clases de soporte generadas por Codeception

### Ejemplos de Uso

#### Uso Estándar
```bash
# El archivo .gitignore es usado automáticamente por Git
# No se requiere configuración adicional
```

#### Verificación de Archivos Ignorados
```bash
# Verificar qué archivos están siendo ignorados
git status --ignored

# Listar todos los archivos ignorados
git ls-files --others --ignored --exclude-standard
```

## tests/_support/.gitignore - Technical Documentation

## English

### Overview
The `tests/_support/.gitignore` file is a Git configuration file that specifies which files and directories should be ignored by version control in the test support directory. This file is essential for maintaining a clean repository by excluding generated support files and temporary test artifacts.

### Purpose
This file serves to:
- Prevent generated support files from being tracked in version control
- Keep the repository clean from temporary test support artifacts
- Ensure consistent test support environment across different machines
- Avoid conflicts from generated support files

### Directory Structure
- Location: `tests/_support/.gitignore`
- Type: Git Configuration File
- Parent Directory: `tests/_support/`

### Key Components

#### File Contents
```gitignore
_generated
```

#### Configuration Rules
1. **`_generated`**
   - Ignores the `_generated` directory and all its contents
   - Prevents tracking of any generated support files
   - Common directory for Codeception-generated support classes

### Usage Examples

#### Standard Usage
```bash
# The .gitignore file is automatically used by Git
# No additional configuration is needed
```

#### Verifying Ignored Files
```bash
# Check which files are being ignored
git status --ignored

# List all ignored files
git ls-files --others --ignored --exclude-standard
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Uses Git's standard ignore pattern syntax
- Specifically targets Codeception's generated support files
- Maintains clean test support directory
- Prevents accidental commits of generated support files
- Works with all Git operations (clone, pull, push)

### Best Practices / Mejores Prácticas
- Keep ignore patterns simple and clear
- Document any special ignore rules
- Regularly review ignored files
- Maintain consistent ignore patterns across projects
- Consider team collaboration needs
- Review generated files before ignoring

### Related Components / Componentes Relacionados
- Git Version Control
- Test Support Directory
- Codeception Testing Framework
- Generated Support Files
- Version Control Configuration