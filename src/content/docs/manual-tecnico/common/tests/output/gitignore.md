---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `test\output`
---

## Documentación Técnica de tests/_output/.gitignore

## Español

### Descripción General
El archivo `tests/_output/.gitignore` es un archivo de configuración de Git que especifica qué archivos y directorios deben ser ignorados por el control de versiones en el directorio de salida de pruebas. Este archivo es esencial para mantener un repositorio limpio al excluir artefactos generados por pruebas y archivos temporales.

### Propósito
Este archivo sirve para:
- Evitar que los archivos de salida de pruebas sean rastreados en el control de versiones
- Mantener el repositorio limpio de artefactos temporales de pruebas
- Asegurar un entorno de pruebas consistente en diferentes máquinas
- Evitar conflictos con archivos generados por pruebas

### Estructura de Directorios
- Ubicación: `tests/_output/.gitignore`
- Tipo: Archivo de Configuración Git
- Directorio Padre: `tests/_output/`

### Componentes Principales

#### Contenido del Archivo
```gitignore
*
!.gitignore
```

#### Reglas de Configuración
1. **`*`**
   - Ignora todos los archivos y directorios en la carpeta `_output`
   - Evita el seguimiento de cualquier archivo de salida de pruebas

2. **`!.gitignore`**
   - Regla de excepción que mantiene el archivo `.gitignore` en el control de versiones
   - Asegura que las reglas de ignorar sean compartidas entre todos los desarrolladores

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

## tests/_output/.gitignore - Technical Documentation

## English

### Overview
The `tests/_output/.gitignore` file is a Git configuration file that specifies which files and directories should be ignored by version control in the test output directory. This file is essential for maintaining a clean repository by excluding generated test artifacts and temporary files.

### Purpose
This file serves to:
- Prevent test output files from being tracked in version control
- Keep the repository clean from temporary test artifacts
- Ensure consistent test environment across different machines
- Avoid conflicts from generated test files

### Directory Structure
- Location: `tests/_output/.gitignore`
- Type: Git Configuration File
- Parent Directory: `tests/_output/`

### Key Components

#### File Contents
```gitignore
*
!.gitignore
```

#### Configuration Rules
1. **`*`**
   - Ignores all files and directories in the `_output` folder
   - Prevents tracking of any test output files

2. **`!.gitignore`**
   - Exception rule that keeps the `.gitignore` file itself in version control
   - Ensures the ignore rules are shared across all developers

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
- Supports wildcard patterns
- Allows for exception rules with `!`
- Maintains clean test output directory
- Prevents accidental commits of test artifacts
- Works with all Git operations (clone, pull, push)

### Best Practices / Mejores Prácticas
- Keep ignore patterns simple and clear
- Document any special ignore rules
- Regularly review ignored files
- Maintain consistent ignore patterns across projects
- Use appropriate wildcards
- Consider team collaboration needs

### Related Components / Componentes Relacionados
- Git Version Control
- Test Output Directory
- Codeception Testing Framework
- Test Artifacts
- Version Control Configuration