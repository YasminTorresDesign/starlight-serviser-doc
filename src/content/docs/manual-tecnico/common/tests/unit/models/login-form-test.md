---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `test\unit`
---

## Documentación Técnica de tests/unit/LoginFormTest.php

## Español

### Descripción General
El archivo `LoginFormTest.php` es una clase de prueba unitaria que valida la funcionalidad del formulario de inicio de sesión en la aplicación. Extiende la clase de prueba Unit de Codeception e implementa varios casos de prueba para asegurar el comportamiento correcto de la autenticación.

### Propósito
Este archivo sirve para:
- Probar la validación del formulario de inicio de sesión
- Verificar la autenticación de usuarios
- Comprobar el manejo de errores
- Validar la verificación de contraseñas
- Asegurar la gestión adecuada de sesiones de usuario
- Probar varios escenarios de inicio de sesión

### Estructura de Directorios
- Ubicación: `tests/unit/LoginFormTest.php`
- Tipo: Clase de Prueba Unitaria PHP
- Directorio Padre: `tests/unit/`
- Espacio de Nombres: `common\tests\unit\models`

### Componentes Principales

#### Definición de Clase
```php
class LoginFormTest extends \Codeception\Test\Unit
{
    protected $tester;

    public function _fixtures()
    {
        return [
            'user' => [
                'class' => UserFixture::class,
                'dataFile' => codecept_data_dir() . 'user.php'
            ]
        ];
    }
}
```

#### Métodos de Prueba
1. **testLoginNoUser**
   - Prueba intento de inicio de sesión con usuario inexistente
   - Verifica fallo del intento de inicio de sesión
   - Comprueba que el usuario permanece como invitado

2. **testLoginWrongPassword**
   - Prueba inicio de sesión con contraseña incorrecta
   - Verifica error de validación de contraseña
   - Asegura que el usuario permanece como invitado

3. **testLoginCorrect**
   - Prueba inicio de sesión exitoso
   - Verifica que no hay errores de contraseña
   - Confirma que el usuario está autenticado

### Ejemplos de Uso

#### Ejecución de Pruebas
```bash
# Ejecutar todas las pruebas del formulario de inicio de sesión
./vendor/bin/codecept run tests/unit/LoginFormTest.php

# Ejecutar método de prueba específico
./vendor/bin/codecept run tests/unit/LoginFormTest.php:testLoginCorrect
```

#### Configuración de Datos de Prueba
```php
// Datos de fixture en tests/_data/user.php
return [
    'bayer.hudson' => [
        'username' => 'bayer.hudson',
        'password_hash' => '$2y$13$EjaPFBnZOQsHdGuHI.xvhuDp1fHpo8hKRSk6yshqa9c5EG8s3C3lO',
        'email' => 'nicolas.dianna@hotmail.com',
        'status' => 10,
        'created_at' => '1391885313',
        'updated_at' => '1391885313',
    ],
];
```

## tests/unit/LoginFormTest.php - Technical Documentation

## English

### Overview
The `LoginFormTest.php` file is a unit test class that validates the functionality of the login form in the application. It extends the Codeception Unit test class and implements various test cases to ensure proper authentication behavior.

### Purpose
This file serves to:
- Test login form validation
- Verify user authentication
- Check error handling
- Validate password verification
- Ensure proper user session management
- Test various login scenarios

### Directory Structure
- Location: `tests/unit/LoginFormTest.php`
- Type: PHP Unit Test Class
- Parent Directory: `tests/unit/`
- Namespace: `common\tests\unit\models`

### Key Components

#### Class Definition
```php
class LoginFormTest extends \Codeception\Test\Unit
{
    protected $tester;

    public function _fixtures()
    {
        return [
            'user' => [
                'class' => UserFixture::class,
                'dataFile' => codecept_data_dir() . 'user.php'
            ]
        ];
    }
}
```

#### Test Methods
1. **testLoginNoUser**
   - Tests login attempt with non-existent user
   - Verifies failed login attempt
   - Checks user remains guest

2. **testLoginWrongPassword**
   - Tests login with incorrect password
   - Verifies password validation error
   - Ensures user remains guest

3. **testLoginCorrect**
   - Tests successful login
   - Verifies no password errors
   - Confirms user is authenticated

### Usage Examples

#### Running Tests
```bash
# Run all login form tests
./vendor/bin/codecept run tests/unit/LoginFormTest.php

# Run specific test method
./vendor/bin/codecept run tests/unit/LoginFormTest.php:testLoginCorrect
```

#### Test Data Setup
```php
// Fixture data in tests/_data/user.php
return [
    'bayer.hudson' => [
        'username' => 'bayer.hudson',
        'password_hash' => '$2y$13$EjaPFBnZOQsHdGuHI.xvhuDp1fHpo8hKRSk6yshqa9c5EG8s3C3lO',
        'email' => 'nicolas.dianna@hotmail.com',
        'status' => 10,
        'created_at' => '1391885313',
        'updated_at' => '1391885313',
    ],
];
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Uses Codeception testing framework
- Implements PHPUnit test cases
- Uses fixtures for test data
- Supports Yii2 framework
- Includes password hashing verification
- Handles session management
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
- LoginForm Model
- User Model
- UserFixture
- Authentication System
- Session Management
- Password Hashing
- Test Data Management