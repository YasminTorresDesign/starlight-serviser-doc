---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

## Documentación Técnica del Archivo `.gitignore`

## Español

### ¿Para qué es?
El archivo `.gitignore` en la carpeta `common/config` es un archivo de configuración de Git que especifica qué archivos y carpetas deben ser ignorados por el sistema de control de versiones.

### Definición de la Carpeta
**Ubicación:** `common/config/.gitignore`
**Contexto:** Se encuentra en la carpeta de configuración común, controlando qué archivos de configuración deben excluirse del repositorio.

### Propósito
- Excluir archivos de configuración sensibles
- Prevenir la exposición de credenciales
- Mantener configuraciones locales fuera del repositorio
- Evitar conflictos entre diferentes entornos de desarrollo
- Proteger información sensible del proyecto

### Estructura Típica Recomendada
```gitignore
# Archivos de configuración local
main-local.php
params-local.php

# Archivos de credenciales
*.key
*.pem
credentials.php

# Archivos temporales
*.tmp
*.temp
```

---

## Technical Documentation - `.gitignore` File

## English

### What is it for?
The `.gitignore` file in the `common/config` folder is a Git configuration file that specifies which files and folders should be ignored by the version control system.

### Folder Definition
**Location:** `common/config/.gitignore`
**Context:** Located in the common configuration folder, controlling which configuration files should be excluded from the repository.

### Purpose
- Exclude sensitive configuration files
- Prevent credentials exposure
- Keep local configurations out of repository
- Avoid conflicts between different development environments
- Protect sensitive project information

### Recommended Typical Structure
```gitignore
# Local configuration files
main-local.php
params-local.php

# Credential files
*.key
*.pem
credentials.php

# Temporary files
*.tmp
*.temp
```

### Mejores Prácticas / Best Practices

#### Español
1. **Patrones de Exclusión**
   - Usar patrones específicos
   - Documentar exclusiones
   - Mantener organización por categorías
   - Incluir comentarios explicativos
   - Revisar regularmente las exclusiones

2. **Consideraciones de Seguridad**
   - Excluir archivos de configuración local
   - Proteger credenciales
   - Evitar exponer tokens
   - Excluir logs y cachés
   - Mantener privada la información sensible

#### English
1. **Exclusion Patterns**
   - Use specific patterns
   - Document exclusions
   - Maintain category organization
   - Include explanatory comments
   - Regularly review exclusions

2. **Security Considerations**
   - Exclude local configuration files
   - Protect credentials
   - Avoid exposing tokens
   - Exclude logs and caches
   - Keep sensitive information private

### Notas de Mantenimiento / Maintenance Notes

#### Español
- Actualizar según necesidades del proyecto
- Verificar periódicamente las exclusiones
- Mantener consistencia entre entornos
- Documentar cambios importantes
- Coordinar con el equipo de desarrollo

#### English
- Update according to project needs
- Periodically verify exclusions
- Maintain consistency between environments
- Document important changes
- Coordinate with development team


