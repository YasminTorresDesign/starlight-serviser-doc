---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de User.php

## Español

### Descripción General
El archivo `User.php` es una clase modelo que extiende ActiveRecord de Yii2 e implementa la interfaz IdentityInterface. Sirve como el modelo de usuario principal para la aplicación, manejando la autenticación, autorización y gestión de perfiles de usuario.

### Propósito
Esta clase gestiona datos y funcionalidad relacionada con usuarios, incluyendo:
- Autenticación y autorización de usuarios
- Gestión de contraseñas y seguridad
- Verificación de correo electrónico
- Gestión de estado de usuario
- Relaciones de perfil
- Generación y validación de tokens de seguridad

### Estructura de Directorios
- Ubicación: `common/models/User.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveRecord`
- Interfaces: `\yii\web\IdentityInterface`

### Componentes Principales

#### Definición de Clase
```php
class User extends ActiveRecord implements IdentityInterface
```

#### Constantes
```php
const STATUS_DELETED = 0;
const STATUS_INACTIVE = 9;
const STATUS_ACTIVE = 10;
```

#### Propiedades
- `id`: Entero, clave primaria
- `username`: String, nombre de usuario único
- `password_hash`: String, contraseña hasheada
- `password_reset_token`: String, token para restablecer contraseña
- `verification_token`: String, token para verificación de email
- `email`: String, dirección de email única
- `auth_key`: String, clave de autenticación
- `status`: Entero, estado del usuario
- `created_at`: Entero, marca de tiempo
- `updated_at`: Entero, marca de tiempo

#### Métodos Principales

1. **tableName()**
   - Propósito: Retorna el nombre de la tabla de base de datos
   - Retorna: String con el nombre de la tabla

2. **behaviors()**
   - Propósito: Configura comportamientos del modelo
   - Retorna: Array de comportamientos
   - Incluye: TimestampBehavior

3. **rules()**
   - Propósito: Define reglas de validación
   - Retorna: Array de reglas de validación
   - Valida:
     - Valores de estado
     - Campos requeridos
     - Restricciones únicas

4. **attributeLabels()**
   - Propósito: Define etiquetas de atributos para visualización
   - Retorna: Array de etiquetas de atributos
   - Soporta: Internacionalización

5. **Métodos de la Interfaz Identity**
   - `findIdentity($id)`: Encuentra usuario por ID
   - `findIdentityByAccessToken($token, $type)`: Encuentra usuario por token de acceso
   - `getId()`: Retorna ID del usuario
   - `getAuthKey()`: Retorna clave de autenticación
   - `validateAuthKey($authKey)`: Valida clave de autenticación

6. **Métodos de Gestión de Usuario**
   - `findByUsername($username)`: Encuentra usuario por nombre de usuario
   - `findByEmail($email)`: Encuentra usuario por email
   - `findByPasswordResetToken($token)`: Encuentra usuario por token de restablecimiento
   - `findByVerificationToken($token)`: Encuentra usuario por token de verificación
   - `validatePassword($password)`: Valida contraseña de usuario
   - `setPassword($password)`: Establece contraseña de usuario
   - `generateAuthKey()`: Genera clave de autenticación
   - `generatePasswordResetToken()`: Genera token de restablecimiento
   - `generateEmailVerificationToken()`: Genera token de verificación
   - `removePasswordResetToken()`: Elimina token de restablecimiento

7. **Métodos de Relación**
   - `getProfile()`: Retorna relación con el perfil del usuario

### Ejemplo de Uso
```php
// Crear nuevo usuario
$user = new User();
$user->username = 'john_doe';
$user->email = 'john@example.com';
$user->setPassword('contraseña_segura');
$user->generateAuthKey();
$user->generateEmailVerificationToken();
$user->save();

// Encontrar usuario por nombre de usuario
$user = User::findByUsername('john_doe');

// Validar contraseña
if ($user->validatePassword('contraseña_segura')) {
    // Contraseña válida
}

// Obtener perfil de usuario
$profile = $user->profile;
```

## User.php - Technical Documentation

## English

### Overview
The `User.php` file is a model class that extends Yii2's ActiveRecord and implements the IdentityInterface. It serves as the core user model for the application, handling user authentication, authorization, and profile management.

### Purpose
This class manages user-related data and functionality, including:
- User authentication and authorization
- Password management and security
- Email verification
- User status management
- Profile relationships
- Security token generation and validation

### Directory Structure
- Location: `common/models/User.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveRecord`
- Interfaces: `\yii\web\IdentityInterface`

### Key Components

#### Class Definition
```php
class User extends ActiveRecord implements IdentityInterface
```

#### Constants
```php
const STATUS_DELETED = 0;
const STATUS_INACTIVE = 9;
const STATUS_ACTIVE = 10;
```

#### Properties
- `id`: Integer, primary key
- `username`: String, unique username
- `password_hash`: String, hashed password
- `password_reset_token`: String, token for password reset
- `verification_token`: String, token for email verification
- `email`: String, unique email address
- `auth_key`: String, authentication key
- `status`: Integer, user status
- `created_at`: Integer, timestamp
- `updated_at`: Integer, timestamp

#### Main Methods

1. **tableName()**
   - Purpose: Returns the database table name
   - Returns: String with table name

2. **behaviors()**
   - Purpose: Configures model behaviors
   - Returns: Array of behaviors
   - Includes: TimestampBehavior

3. **rules()**
   - Purpose: Defines validation rules
   - Returns: Array of validation rules
   - Validates:
     - Status values
     - Required fields
     - Unique constraints

4. **attributeLabels()**
   - Purpose: Defines attribute labels for display
   - Returns: Array of attribute labels
   - Supports: Internationalization

5. **Identity Interface Methods**
   - `findIdentity($id)`: Finds user by ID
   - `findIdentityByAccessToken($token, $type)`: Finds user by access token
   - `getId()`: Returns user ID
   - `getAuthKey()`: Returns authentication key
   - `validateAuthKey($authKey)`: Validates authentication key

6. **User Management Methods**
   - `findByUsername($username)`: Finds user by username
   - `findByEmail($email)`: Finds user by email
   - `findByPasswordResetToken($token)`: Finds user by password reset token
   - `findByVerificationToken($token)`: Finds user by verification token
   - `validatePassword($password)`: Validates user password
   - `setPassword($password)`: Sets user password
   - `generateAuthKey()`: Generates authentication key
   - `generatePasswordResetToken()`: Generates password reset token
   - `generateEmailVerificationToken()`: Generates email verification token
   - `removePasswordResetToken()`: Removes password reset token

7. **Relationship Methods**
   - `getProfile()`: Returns user's profile relationship

### Usage Example
```php
// Create new user
$user = new User();
$user->username = 'john_doe';
$user->email = 'john@example.com';
$user->setPassword('secure_password');
$user->generateAuthKey();
$user->generateEmailVerificationToken();
$user->save();

// Find user by username
$user = User::findByUsername('john_doe');

// Validate password
if ($user->validatePassword('secure_password')) {
    // Password is valid
}

// Get user profile
$profile = $user->profile;
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Implements Yii2's ActiveRecord pattern
- Uses secure password hashing
- Supports email verification
- Implements user status management
- Handles authentication tokens
- Integrates with profile management

### Best Practices / Mejores Prácticas
- Always use secure password hashing
- Implement proper validation rules
- Handle user status transitions carefully
- Use transactions for critical operations
- Follow Yii2's security guidelines

### Related Components / Componentes Relacionados
- Profile Model
- UserSearch Model
- SignupForm Model
- VerifyEmailForm Model
- UserController
- UserQuery