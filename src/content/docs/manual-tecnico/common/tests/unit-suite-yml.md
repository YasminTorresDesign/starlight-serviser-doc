---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `test\unit`
---

## Documentación Técnica del Archivo `unit.suite.yml`

## Español

### ¿Para qué es?
El archivo `unit.suite.yml` es un archivo de configuración YAML para las pruebas unitarias en Codeception, definiendo la configuración base para ejecutar pruebas unitarias en el módulo común de la aplicación.

### Definición de la Carpeta
**Ubicación:** `common/tests/unit.suite.yml`
**Contexto:** Se encuentra en la carpeta de pruebas común, estableciendo la configuración para pruebas unitarias compartidas.

### Propósito
- Configurar el entorno de pruebas unitarias
- Definir el espacio de nombres para las pruebas
- Establecer los módulos necesarios
- Configurar los fixtures para pruebas
- Mantener consistencia en las pruebas

### Estructura de Configuración
```yaml
suite_namespace: common\tests\unit
actor: UnitTester
bootstrap: false
modules:
    enabled:
        - Yii2:
            part: fixtures
```

---

## Technical Documentation - `unit.suite.yml` File

## English

### What is it for?
The `unit.suite.yml` file is a YAML configuration file for Codeception unit tests, defining the base configuration for running unit tests in the common module of the application.

### Folder Definition
**Location:** `common/tests/unit.suite.yml`
**Context:** Located in the common tests folder, establishing configuration for shared unit tests.

### Purpose
- Configure unit testing environment
- Define namespace for tests
- Establish required modules
- Configure test fixtures
- Maintain testing consistency

### Configuration Structure
```yaml
suite_namespace: common\tests\unit
actor: UnitTester
bootstrap: false
modules:
    enabled:
        - Yii2:
            part: fixtures
```

### Componentes Principales / Main Components

#### Español
1. **Configuración Base**
   - Espacio de nombres: `common\tests\unit`
   - Actor de prueba: UnitTester
   - Sin bootstrap automático

2. **Módulos Habilitados**
   - Yii2 con soporte de fixtures
   - Configuración modular
   - Integración con framework

#### English
1. **Base Configuration**
   - Namespace: `common\tests\unit`
   - Test Actor: UnitTester
   - No automatic bootstrap

2. **Enabled Modules**
   - Yii2 with fixtures support
   - Modular configuration
   - Framework integration

### Ejemplo de Uso / Usage Example

#### Español
```bash
# Ejecutar pruebas unitarias
codecept run unit

# Ejecutar una prueba específica
codecept run unit UserTest
```

#### English
```bash
# Run unit tests
codecept run unit

# Run specific test
codecept run unit UserTest
```

### Consideraciones / Considerations

#### Español
1. **Implementación**
   - Requiere Codeception instalado
   - Necesita configuración de Yii2
   - Debe tener fixtures configurados
   - Mantener estructura de namespaces

2. **Mantenimiento**
   - Actualizar según cambios en framework
   - Mantener consistencia con otros suites
   - Documentar cambios importantes
   - Verificar compatibilidad

#### English
1. **Implementation**
   - Requires Codeception installed
   - Needs Yii2 configuration
   - Must have fixtures configured
   - Maintain namespace structure

2. **Maintenance**
   - Update according to framework changes
   - Maintain consistency with other suites
   - Document important changes
   - Verify compatibility


