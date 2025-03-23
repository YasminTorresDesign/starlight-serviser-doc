---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica del Archivo `ProfileInfo.php`

## Español

### ¿Para qué es?
El archivo `ProfileInfo.php` es un modelo de ActiveRecord que gestiona la información adicional del perfil de usuario en la aplicación. Define la estructura y comportamiento de los datos extendidos de perfil.

### Definición de la Carpeta
**Ubicación:** `common/models/ProfileInfo.php`
**Contexto:** Se encuentra en la carpeta de modelos comunes, proporcionando funcionalidad compartida para la gestión de información de perfiles.

### Propósito
- Gestionar información extendida de perfiles de usuario
- Definir reglas de validación de datos
- Establecer relaciones entre modelos
- Manejar comportamientos automáticos
- Proporcionar etiquetas de atributos traducibles

### Estructura del Modelo

1. **Propiedades Principales**
```php
/**
 * @property int $id
 * @property int $profile_id
 * @property string $profile_picture
 * @property string $bio
 * @property string $website
 * @property string $social_links
 * @property string $occupation
 * @property string $company
 * @property string $industry
 * @property int $years_experience
 * @property int $visibility
 */
```

2. **Reglas de Validación**
```php
public function rules()
{
    return [
        [['profile_id'], 'required'],
        [['profile_id', 'years_experience', 'visibility'], 'integer'],
        [['profile_picture', 'bio', 'website'], 'string', 'max' => 255],
        // ... más reglas
    ];
}
```

---

## Technical Documentation - `ProfileInfo.php` File

## English

### What is it for?
The `ProfileInfo.php` file is an ActiveRecord model that manages additional user profile information in the application. It defines the structure and behavior of extended profile data.

### Folder Definition
**Location:** `common/models/ProfileInfo.php`
**Context:** Located in the common models folder, providing shared functionality for profile information management.

### Purpose
- Manage extended user profile information
- Define data validation rules
- Establish model relationships
- Handle automatic behaviors
- Provide translatable attribute labels

### Model Structure

1. **Main Properties**
```php
/**
 * @property int $id
 * @property int $profile_id
 * @property string $profile_picture
 * @property string $bio
 * @property string $website
 * @property string $social_links
 * @property string $occupation
 * @property string $company
 * @property string $industry
 * @property int $years_experience
 * @property int $visibility
 */
```

### Características Principales / Main Features

#### Español
1. **Comportamientos**
   - TimestampBehavior para fechas automáticas
   - Seguimiento de creación/actualización

2. **Relaciones**
   ```php
   public function getProfile()
   {
       return $this->hasOne(Profile::class, ['id' => 'profile_id']);
   }
   ```

#### English
1. **Behaviors**
   - TimestampBehavior for automatic dates
   - Creation/update tracking

2. **Relations**
   ```php
   public function getProfile()
   {
       return $this->hasOne(Profile::class, ['id' => 'profile_id']);
   }
   ```

### Ejemplo de Uso / Usage Example

#### Español
```php
// Crear nuevo perfil info
$profileInfo = new ProfileInfo();
$profileInfo->profile_id = $profile->id;
$profileInfo->bio = 'Descripción profesional';
$profileInfo->save();
```

#### English
```php
// Create new profile info
$profileInfo = new ProfileInfo();
$profileInfo->profile_id = $profile->id;
$profileInfo->bio = 'Professional description';
$profileInfo->save();
```

### Consideraciones Técnicas / Technical Considerations

#### Español
- Implementa TimestampBehavior
- Utiliza traducciones mediante Yii::t()
- Incluye validación de relaciones
- Maneja múltiples tipos de datos
- Soporta consultas personalizadas

#### English
- Implements TimestampBehavior
- Uses translations via Yii::t()
- Includes relationship validation
- Handles multiple data types
- Supports custom queries

