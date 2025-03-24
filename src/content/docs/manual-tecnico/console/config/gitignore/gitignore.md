---
title: Carpeta config/gitignore
description: Carpeta config/gitignore.
---

# tests/console/config/.gitignore - Technical Documentation
# Documentación Técnica de tests/console/config/.gitignore

## English

### Overview
The `.gitignore` file in the `tests/console/config/` directory is a configuration file that specifies which files and directories should be ignored by Git version control in the console test configuration directory.

### Purpose
This file serves to:
- Prevent local configuration files from being committed
- Exclude sensitive test configuration data
- Maintain clean version control
- Allow for local test environment customization
- Protect test-specific settings

### Directory Structure
- Location: `tests/console/config/.gitignore`
- Type: Git Configuration File
- Parent Directory: `tests/console/config/`
- Related Files: 
  - `console/config/main-local.php`
  - `console/config/params-local.php`
  - `console/config/test-local.php`

### Key Components

#### Ignored Files
1. **Local Configuration Files**
   - `main-local.php`: Local main configuration
   - `params-local.php`: Local parameters configuration
   - `test-local.php`: Local test configuration

### Usage Examples

#### File Structure
```plaintext
tests/
└── console/
    └── config/
        ├── .gitignore
        ├── main-local.php (ignored)
        ├── params-local.php (ignored)
        └── test-local.php (ignored)
```

#### Creating Local Configuration
```bash
# Copy example configuration files
cp main-local.php.example main-local.php
cp params-local.php.example params-local.php
cp test-local.php.example test-local.php
```

## Español

### Descripción General
El archivo `.gitignore` en el directorio `tests/console/config/` es un archivo de configuración que especifica qué archivos y directorios deben ser ignorados por el control de versiones Git en el directorio de configuración de pruebas de consola.

### Propósito
Este archivo sirve para:
- Evitar que los archivos de configuración local sean comprometidos
- Excluir datos sensibles de configuración de pruebas
- Mantener un control de versiones limpio
- Permitir la personalización del entorno de pruebas local
- Proteger configuraciones específicas de pruebas

### Estructura de Directorios
- Ubicación: `tests/console/config/.gitignore`
- Tipo: Archivo de Configuración Git
- Directorio Padre: `tests/console/config/`
- Archivos Relacionados:
  - `console/config/main-local.php`
  - `console/config/params-local.php`
  - `console/config/test-local.php`

### Componentes Principales

#### Archivos Ignorados
1. **Archivos de Configuración Local**
   - `main-local.php`: Configuración principal local
   - `params-local.php`: Configuración de parámetros local
   - `test-local.php`: Configuración de pruebas local

### Ejemplos de Uso

#### Estructura de Archivos
```plaintext
tests/
└── console/
    └── config/
        ├── .gitignore
        ├── main-local.php (ignorado)
        ├── params-local.php (ignorado)
        └── test-local.php (ignorado)
```

#### Creación de Configuración Local
```bash
# Copiar archivos de configuración de ejemplo
cp main-local.php.example main-local.php
cp params-local.php.example params-local.php
cp test-local.php.example test-local.php
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Uses Git ignore syntax
- Supports pattern matching
- Handles local configuration files
- Maintains test environment isolation
- Protects sensitive information
- Supports multiple environments
- Follows Yii2 framework conventions

### Best Practices / Mejores Prácticas
- Keep local configurations separate
- Use example files for templates
- Document required configurations
- Maintain consistent naming
- Follow security guidelines
- Update when adding new configs
- Review periodically

### Related Components / Componentes Relacionados
- Git Version Control
- Test Configuration
- Console Application
- Local Environment
- Configuration Management
- Test Environment
- Development Workflow