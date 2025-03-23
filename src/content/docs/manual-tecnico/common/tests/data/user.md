---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `test\data`
---

## Documentación Técnica de tests/_data/user.php

## Español

### Descripción General
El archivo `tests/_data/user.php` es un archivo de datos de prueba que proporciona datos de usuario de ejemplo para propósitos de prueba en la aplicación Yii2. Contiene registros de usuario predefinidos con varios estados y atributos utilizados en pruebas unitarias y funcionales.

### Propósito
Este archivo sirve como fuente de datos para probar funcionalidad relacionada con usuarios, incluyendo:
- Pruebas de autenticación de usuario
- Funcionalidad de restablecimiento de contraseña
- Verificación de correo electrónico
- Gestión de estado de usuario
- Validación de formulario de inicio de sesión
- Registro de usuario

### Estructura de Directorios
- Ubicación: `tests/_data/user.php`
- Tipo: Archivo de Datos PHP
- Utilizado por: Fixtures de Prueba

### Componentes Principales

#### Estructura de Datos
```php
return [
    [
        'username' => 'bayer.hudson',
        'auth_key' => 'HP187Mvq7Mmm3CTU80dLkGmni_FUH_lR',
        'password_hash' => '$2y$13$EjaPFBnZOQsHdGuHI.xvhuDp1fHpo8hKRSk6yshqa9c5EG8s3C3lO',
        'password_reset_token' => 'ExzkCOaYc1L8IOBs4wdTGGbgNiG3Wz1I_1402312317',
        'created_at' => '1402312317',
        'updated_at' => '1402312317',
        'email' => 'nicole.paucek@schultz.info',
    ],
];
```

#### Estados de Usuario de Prueba
1. **Usuario Activo**
   - Estado: 10 (STATUS_ACTIVE)
   - Tiene credenciales válidas
   - Utilizado para pruebas de inicio de sesión

2. **Usuario Inactivo**
   - Estado: 9 (STATUS_INACTIVE)
   - Tiene token de verificación
   - Utilizado para pruebas de verificación de correo

3. **Usuario Eliminado**
   - Estado: 0 (STATUS_DELETED)
   - Utilizado para casos de prueba negativos

### Ejemplos de Uso

#### En Pruebas Unitarias
```php
public function _fixtures()
{
    return [
        'user' => [
            'class' => UserFixture::class,
            'dataFile' => codecept_data_dir() . 'user.php'
        ]
    ];
}
```

#### En Pruebas Funcionales
```php
public function _fixtures()
{
    return [
        'user' => [
            'class' => UserFixture::class,
            'dataFile' => codecept_data_dir() . 'login_data.php'
        ]
    ];
}
```

## tests/_data/user.php - Technical Documentation

## English

### Overview
The `tests/_data/user.php` file is a test data fixture file that provides sample user data for testing purposes in the Yii2 application. It contains predefined user records with various states and attributes used in unit and functional tests.

### Purpose
This file serves as a data source for testing user-related functionality, including:
- User authentication tests
- Password reset functionality
- Email verification
- User status management
- Login form validation
- User registration

### Directory Structure
- Location: `tests/_data/user.php`
- Type: PHP Data File
- Used by: Test Fixtures

### Key Components

#### Data Structure
```php
return [
    [
        'username' => 'bayer.hudson',
        'auth_key' => 'HP187Mvq7Mmm3CTU80dLkGmni_FUH_lR',
        'password_hash' => '$2y$13$EjaPFBnZOQsHdGuHI.xvhuDp1fHpo8hKRSk6yshqa9c5EG8s3C3lO',
        'password_reset_token' => 'ExzkCOaYc1L8IOBs4wdTGGbgNiG3Wz1I_1402312317',
        'created_at' => '1402312317',
        'updated_at' => '1402312317',
        'email' => 'nicole.paucek@schultz.info',
    ],
];
```

#### Test User States
1. **Active User**
   - Status: 10 (STATUS_ACTIVE)
   - Has valid credentials
   - Used for login tests

2. **Inactive User**
   - Status: 9 (STATUS_INACTIVE)
   - Has verification token
   - Used for email verification tests

3. **Deleted User**
   - Status: 0 (STATUS_DELETED)
   - Used for negative test cases

### Usage Examples

#### In Unit Tests
```php
public function _fixtures()
{
    return [
        'user' => [
            'class' => UserFixture::class,
            'dataFile' => codecept_data_dir() . 'user.php'
        ]
    ];
}
```

#### In Functional Tests
```php
public function _fixtures()
{
    return [
        'user' => [
            'class' => UserFixture::class,
            'dataFile' => codecept_data_dir() . 'login_data.php'
        ]
    ];
}
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Uses Yii2's fixture system
- Contains hashed passwords for security
- Includes timestamps for created_at and updated_at
- Provides various user states for testing
- Supports multiple test scenarios
- Used by Codeception testing framework

### Best Practices / Mejores Prácticas
- Keep test data isolated from production data
- Use realistic but safe test data
- Include various user states and scenarios
- Maintain data consistency across tests
- Use meaningful test data values
- Document test data structure and purpose

### Related Components / Componentes Relacionados
- UserFixture
- LoginFormTest
- SignupFormTest
- ResetPasswordFormTest
- VerifyEmailFormTest
- LoginCest