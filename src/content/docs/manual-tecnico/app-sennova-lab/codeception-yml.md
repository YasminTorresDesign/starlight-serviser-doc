---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `codeception.yml`
---

## Documentación Técnica del Archivo `codeception.yml` en `/appSennovalab/`

## Español

### ¿Para qué es?
El archivo `codeception.yml` es el archivo de configuración principal para Codeception, el framework de pruebas utilizado en SennovaLab. Define la configuración global para todas las suites de pruebas, incluyendo configuraciones de módulos y parámetros de prueba.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/`, directorio raíz de la aplicación frontend. Esta ubicación es estándar para la configuración de pruebas en proyectos Yii2.

### Propósito
El propósito principal es:
- Configurar el entorno de pruebas
- Definir suites de pruebas
- Establecer parámetros globales
- Configurar módulos de prueba
- Gestionar la ejecución de pruebas

### Funciones
- **Configuraciones Principales**:
  - Namespace de pruebas
  - Rutas de directorios
  - Configuración de módulos
  - Parámetros de bootstrap
  - Configuraciones de memoria

### Características Técnicas / Technical Features
- Configuración en formato YAML
- Integración con Yii2
- Gestión de namespaces
- Configuración de paths
- Gestión de memoria
- Configuración de colores
- Integración de módulos

### Componentes Principales / Main Components
1. **Configuración Base**:
   - Namespace de pruebas
   - Sufijo de actores
   - Rutas de directorios
   - Archivo bootstrap

2. **Configuración de Entorno**:
   - Límites de memoria
   - Colores en consola
   - Configuración de módulos
   - Parámetros locales

3. **Módulos**:
   - Configuración Yii2
   - Helpers personalizados
   - Módulos adicionales
   - Configuraciones específicas

### Mejores Prácticas / Best Practices
- Mantener configuraciones separadas
- Documentar cambios
- Usar variables de entorno
- Optimizar memoria
- Organizar suites de pruebas
- Mantener paths consistentes
- Seguir convenciones de nombres
---

## English

### What is it for?
The `codeception.yml` file is the main configuration file for Codeception, the testing framework used in SennovaLab. It defines global configuration for all test suites, including module configurations and test parameters.

### Folder Definition
Located in `/appSennovalab/`, frontend application root directory. This location is standard for test configuration in Yii2 projects.

### Purpose
The main purpose is to:
- Configure testing environment
- Define test suites
- Establish global parameters
- Configure test modules
- Manage test execution

### Functions
- **Main Configurations**:
  - Test namespace
  - Directory paths
  - Module configuration
  - Bootstrap parameters
  - Memory configurations

```yaml:appSennovalab/codeception.yml
namespace: frontend\tests
actor_suffix: Tester
paths:
    tests: tests
    output: tests/_output
    data: tests/_data
    support: tests/_support
bootstrap: _bootstrap.php
settings:
    colors: true
    memory_limit: 1024M
modules:
    config:
        Yii2:
            configFile: 'config/codeception-local.php'
```





