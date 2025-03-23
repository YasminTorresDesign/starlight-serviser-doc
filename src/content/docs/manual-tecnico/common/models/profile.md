---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

# Documentación Técnica del Archivo `Profile.php`

## Español

### ¿Para qué es?
El archivo `Profile.php` es un modelo de ActiveRecord que representa la información del perfil de usuario en la aplicación. Gestiona los datos personales y la información relacionada con cada usuario del sistema.

### Definición de la Carpeta
**Ubicación:** `common/models/Profile.php`
**Contexto:** Se encuentra en la carpeta de modelos comunes, proporcionando funcionalidad compartida para todas las aplicaciones.

### Propósito
- Gestionar datos personales de usuarios
- Establecer relaciones con otras entidades
- Validar información de perfil
- Mantener registro de cambios temporales
- Proporcionar acceso a datos relacionados

### Estructura Principal

1. **Propiedades del Modelo**
```php
/**
 * @property int $id
 * @property int $user_id
 * @property string $first_name
 * @property string $last_name
 * @property string $full_name
 * @property int $gov_id_type
 * @property string $gov_id
 * @property string $gender
 * @property string $phone_number
 * @property string $birth_date
 * @property int $visibility
 */
```

2. **Reglas de Validación**
```php
public function rules()
{
    return [
        [['user_id'], 'required'],
        [['user_id', 'gov_id_type', 'visibility'], 'integer'],
        [['birth_date'], 'safe'],
        [['first_name', 'last_name'], 'string', 'max' => 255],
    ];
}
```

3. **Relaciones**
```php
public function getAddresses()
{
    return $this->hasMany(Address::class, ['profile_id' => 'id']);
}

public function getUser()
{
    return $this->hasOne(User::class, ['id' => 'user_id']);
}
```

---

# Technical Documentation - `Profile.php` File

## English

### What is it for?
The `Profile.php` file is an ActiveRecord model that represents user profile information in the application. It manages personal data and related information for each system user.

### Folder Definition
**Location:** `common/models/Profile.php`
**Context:** Located in the common models folder, providing shared functionality across all applications.

### Purpose
- Manage user personal data
- Establish relationships with other entities
- Validate profile information
- Maintain temporal change records
- Provide access to related data

### Main Features

#### Español
1. **Comportamientos**
   - TimestampBehavior para registro temporal
   - Seguimiento de creación/actualización
   - Gestión automática de timestamps

2. **Funcionalidades**
   - Validación de datos
   - Relaciones con otras tablas
   - Etiquetas multiidioma
   - Consultas personalizadas

#### English
1. **Behaviors**
   - TimestampBehavior for temporal tracking
   - Creation/update tracking
   - Automatic timestamp management

2. **Functionalities**
   - Data validation
   - Table relationships
   - Multilingual labels
   - Custom queries

### Ejemplo de Uso / Usage Example

#### Español
```php
// Crear nuevo perfil
$profile = new Profile();
$profile->user_id = $user->id;
$profile->first_name = 'Juan';
$profile->last_name = 'Pérez';
$profile->save();

// Obtener direcciones
$addresses = $profile->addresses;
```

#### English
```php
// Create new profile
$profile = new Profile();
$profile->user_id = $user->id;
$profile->first_name = 'John';
$profile->last_name = 'Doe';
$profile->save();

// Get addresses
$addresses = $profile->addresses;
```

### Relaciones del Modelo / Model Relations
- User (uno a uno)
- Address (uno a muchos)
- ProfileInfo (uno a muchos)
- GovIdType (uno a uno)

### Consideraciones Técnicas / Technical Considerations

#### Español
- Requiere tabla 'profile' en base de datos
- Implementa TimestampBehavior
- Soporta validación de datos
- Incluye traducciones i18n
- Maneja relaciones complejas

#### English
- Requires 'profile' table in database
- Implements TimestampBehavior
- Supports data validation
- Includes i18n translations
- Handles complex relationships


