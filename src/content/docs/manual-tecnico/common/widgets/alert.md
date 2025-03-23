---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `widgets`
---

## Documentación Técnica de tests/common/widgests/alert.php

## Español

### Descripción General
El archivo `alert.php` es un archivo de prueba que valida la funcionalidad del widget Alert en la aplicación. Contiene casos de prueba para asegurar el renderizado y comportamiento correcto de los componentes de alerta, incluyendo mensajes flash y alertas personalizadas.

### Propósito
Este archivo sirve para:
- Probar el renderizado del widget de alerta
- Verificar la visualización de mensajes flash
- Validar tipos y estilos de alerta
- Comprobar la funcionalidad del botón de cierre
- Asegurar el formato correcto de mensajes
- Probar el manejo de múltiples mensajes
- Validar opciones y configuraciones de alerta

### Estructura de Directorios
- Ubicación: `tests/common/widgests/alert.php`
- Tipo: Archivo de Prueba PHP
- Directorio Padre: `tests/common/widgests/`
- Archivos Relacionados: `common/widgets/Alert.php`

### Componentes Principales

#### Casos de Prueba
1. **Pruebas de Mensajes Flash**
   - Prueba el renderizado de mensajes flash de sesión
   - Verifica el manejo de tipos de mensaje
   - Comprueba la visualización de múltiples mensajes
   - Valida la eliminación de mensajes después de la visualización

2. **Pruebas de Tipos de Alerta**
   - Prueba diferentes tipos de alerta (éxito, error, advertencia, información)
   - Verifica la aplicación de clases CSS
   - Comprueba el estilo de alerta
   - Valida el comportamiento específico del tipo

3. **Pruebas del Botón de Cierre**
   - Prueba el renderizado del botón de cierre
   - Verifica la funcionalidad del botón
   - Comprueba el estilo del botón
   - Valida el comportamiento de descarte

### Ejemplos de Uso

#### Ejecución de Pruebas
```bash
# Ejecutar todas las pruebas del widget de alerta
./vendor/bin/codecept run tests/common/widgests/alert.php

# Ejecutar método de prueba específico
./vendor/bin/codecept run tests/common/widgests/alert.php:testFlashMessage
```

#### Configuración de Datos de Prueba
```php
// Configuración de mensaje flash
Yii::$app->session->setFlash('success', 'Operación completada con éxito');
Yii::$app->session->setFlash('error', ['Error 1', 'Error 2']);

// Configuración del widget de alerta
echo Alert::widget([
    'options' => [
        'class' => 'alert-info',
    ],
    'body' => 'Este es un mensaje de alerta',
]);
```

## tests/common/widgests/alert.php - Technical Documentation

## English

### Overview
The `alert.php` file is a test file that validates the functionality of the Alert widget in the application. It contains test cases to ensure proper rendering and behavior of alert components, including flash messages and custom alerts.

### Purpose
This file serves to:
- Test alert widget rendering
- Verify flash message display
- Validate alert types and styles
- Check close button functionality
- Ensure proper message formatting
- Test multiple message handling
- Validate alert options and configurations

### Directory Structure
- Location: `tests/common/widgests/alert.php`
- Type: PHP Test File
- Parent Directory: `tests/common/widgests/`
- Related Files: `common/widgets/Alert.php`

### Key Components

#### Test Cases
1. **Flash Message Tests**
   - Tests rendering of session flash messages
   - Verifies message type handling
   - Checks multiple message display
   - Validates message removal after display

2. **Alert Type Tests**
   - Tests different alert types (success, error, warning, info)
   - Verifies CSS class application
   - Checks alert styling
   - Validates type-specific behavior

3. **Close Button Tests**
   - Tests close button rendering
   - Verifies button functionality
   - Checks button styling
   - Validates dismiss behavior

### Usage Examples

#### Running Tests
```bash
# Run all alert widget tests
./vendor/bin/codecept run tests/common/widgests/alert.php

# Run specific test method
./vendor/bin/codecept run tests/common/widgests/alert.php:testFlashMessage
```

#### Test Data Setup
```php
// Flash message setup
Yii::$app->session->setFlash('success', 'Operation completed successfully');
Yii::$app->session->setFlash('error', ['Error 1', 'Error 2']);

// Alert widget configuration
echo Alert::widget([
    'options' => [
        'class' => 'alert-info',
    ],
    'body' => 'This is an alert message',
]);
```


## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Uses Codeception testing framework
- Implements PHPUnit test cases
- Tests Bootstrap 5 alert components
- Handles session flash messages
- Supports multiple alert types
- Includes accessibility testing
- Provides detailed error reporting

### Best Practices / Mejores Prácticas
- Keep test methods focused and single-purpose
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)
- Maintain test independence
- Use appropriate assertions
- Clean up test data
- Document test scenarios
- Handle edge cases

### Related Components / Componentes Relacionados
- Alert Widget
- Session Management
- Flash Messages
- Bootstrap Components
- Test Framework
- Widget Testing
- UI Components
- Message Handling
